import { Client } from 'ssh2';
import fs from 'fs';
import path from 'path';

const config = {
  host: '89.117.188.170',
  port: 65002,
  username: 'u244945997',
  password: 'Futurex@1234'
};

const conn = new Client();

function executeCommand(conn, cmd) {
  return new Promise((resolve, reject) => {
    conn.exec(cmd, (err, stream) => {
      if (err) return reject(err);
      let data = '';
      let errData = '';
      stream.on('close', (code, signal) => {
        if (code !== 0) {
          reject(new Error(`Command "${cmd}" exited with code ${code}. Error: ${errData}`));
        } else {
          resolve(data.trim());
        }
      }).on('data', (chunk) => {
        data += chunk;
      }).stderr.on('data', (chunk) => {
        errData += chunk;
      });
    });
  });
}

function getSftp(conn) {
  return new Promise((resolve, reject) => {
    conn.sftp((err, sftp) => {
      if (err) reject(err);
      else resolve(sftp);
    });
  });
}

// Helper to recursively read local files
function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach((file) => {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
}

function sftpMkdir(sftp, dir) {
  return new Promise((resolve, reject) => {
    sftp.mkdir(dir, (err) => {
      // Ignore if dir already exists
      resolve();
    });
  });
}

function sftpFastPut(sftp, localFile, remoteFile) {
  return new Promise((resolve, reject) => {
    sftp.fastPut(localFile, remoteFile, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

conn.on('ready', async () => {
  console.log('✔ SSH Connection established successfully!');

  try {
    // 1. Check current directory and list
    const pwd = await executeCommand(conn, 'pwd');
    console.log(`Remote Current Directory: ${pwd}`);

    const ls = await executeCommand(conn, 'ls -F');
    console.log(`Remote Files:\n${ls}\n`);

    // 2. Identify the target directory
    // We will search for standard hosting directories:
    // - domains/shristimodularkitchen.com/public_html
    // - public_html
    // - domains/
    let targetDir = '';
    const dirsToCheck = [
      `${pwd}/domains/shristimodularkitchen.com/public_html`,
      `${pwd}/domains/shristimodularkitchen.com`,
      `${pwd}/public_html`,
      '/var/www/html'
    ];

    for (const d of dirsToCheck) {
      try {
        await executeCommand(conn, `test -d "${d}"`);
        targetDir = d;
        console.log(`Found Web Root Directory: ${targetDir}`);
        break;
      } catch (e) {
        // Directory doesn't exist, check next
      }
    }

    if (!targetDir) {
      // Default to checking inside domains folder
      console.log('Checking domains folder contents...');
      try {
        const domainsList = await executeCommand(conn, 'ls domains');
        console.log(`Domains found:\n${domainsList}`);
        if (domainsList.includes('shristimodularkitchen.com')) {
          targetDir = `${pwd}/domains/shristimodularkitchen.com/public_html`;
          console.log(`Resolved target web root: ${targetDir}`);
        }
      } catch (e) {
        // domains folder might not exist
      }
    }

    if (!targetDir) {
      // Fallback: create public_html in pwd or ask user, but let's check if public_html exists
      targetDir = `${pwd}/public_html`;
      console.log(`No specific domain folder verified. Falling back to default: ${targetDir}`);
      await executeCommand(conn, `mkdir -p "${targetDir}"`);
    }

    console.log(`\n🚀 Target Web Root: ${targetDir}`);

    // 3. Clean target directory (delete old files except .htaccess if any)
    console.log(`Cleaning target directory: ${targetDir}...`);
    try {
      // Clean only assets and html/js/css files, keep dotfiles like .htaccess
      await executeCommand(conn, `find "${targetDir}" -maxdepth 1 -type f -name "*.html" -delete`);
      await executeCommand(conn, `find "${targetDir}" -maxdepth 1 -type f -name "*.js" -delete`);
      await executeCommand(conn, `find "${targetDir}" -maxdepth 1 -type f -name "*.css" -delete`);
      await executeCommand(conn, `rm -rf "${targetDir}/assets"`);
      console.log('✔ Remote target directory cleaned successfully.');
    } catch (e) {
      console.log(`Warning cleaning directory: ${e.message}`);
    }

    // 4. Start uploading built files using SFTP
    console.log('\nStarting SFTP upload...');
    const sftp = await getSftp(conn);
    const localDistPath = path.resolve('dist');
    const filesToUpload = getAllFiles(localDistPath);

    console.log(`Total files to upload: ${filesToUpload.length}`);

    // Upload index.html and assets
    for (const file of filesToUpload) {
      const relativePath = path.relative(localDistPath, file).replace(/\\/g, '/');
      const remoteFilePath = `${targetDir}/${relativePath}`;
      const remoteFileDir = path.dirname(remoteFilePath).replace(/\\/g, '/');

      // Create remote directory structure if needed
      if (remoteFileDir !== targetDir) {
        // Ensure remote directories are created
        const subDirs = relativePath.split('/').slice(0, -1);
        let currentPath = targetDir;
        for (const sub of subDirs) {
          currentPath = `${currentPath}/${sub}`;
          await sftpMkdir(sftp, currentPath);
        }
      }

      console.log(`Uploading: dist/${relativePath} ➔ ${remoteFilePath}`);
      await sftpFastPut(sftp, file, remoteFilePath);
    }

    console.log('\n✔ All files uploaded successfully! Deployment complete.');
  } catch (error) {
    console.error('❌ Deployment error:', error.message);
  } finally {
    conn.end();
  }
}).on('error', (err) => {
  console.error('❌ SSH Connection Error:', err.message);
}).connect(config);
