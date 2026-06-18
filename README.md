# Shristi Enterprises — Modular Kitchen & Premium Interiors Web App

A modern, highly interactive, and responsive web application designed for a premium modular kitchen and interior design business. Featuring clean glassmorphism styling, curated color palettes, smooth animations, and optimized SEO performance.

## 🔗 Live Application

The application is deployed and live at:
👉 **[shristienterprises.in](https://shristienterprises.in/)**

---

## 🛠️ Technology Stack

- **Core Framework**: React 19 (TypeScript)
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (CSS Variables, Flexbox, CSS Grid)
- **Animations**: Framer Motion
- **Iconography**: Lucide React
- **SEO & Metadata**: React Helmet Async & JSON-LD Structured Schema markup

---

## ✨ Features

- **Interactive Header & Navigation**: Dynamic responsive header with glassmorphism blurring on scroll, sliding mobile navigation drawer, and animated active route indicators.
- **Service Categories Showcase**: Dedicated services section detailing various kitchen types (L-Shaped, U-Shaped, Island, Parallel) and interior solutions.
- **Testimonial Slider**: Dynamic slider showcasing customer reviews and ratings.
- **SEO Optimized**: Pre-configured meta tags, open graph attributes, apple-touch-icon, and structured schema markup to optimize local search engine discovery.
- **Smooth Page Transitions**: Animate-on-scroll entry effects using Framer Motion.
- **Custom Brand Identity**: Integrated bespoke transparent brand logo and custom multi-resolution favicon.

---

## 📁 Directory Structure

```
shristi/
├── public/                 # Static assets (Favicons, Robots.txt)
├── src/
│   ├── assets/             # Images & visual media (Logo, kitchen categories)
│   ├── components/         # Reusable React components (Navbar, Footer, SEOHead, Cards)
│   ├── data/               # Static data structures (FAQs, Testimonials, Services list)
│   ├── pages/              # Main view pages (Home, About, Services, Testimonials, Contact)
│   ├── styles/             # Core design system stylesheet (globals.css)
│   ├── App.tsx             # Root routing layout
│   └── main.tsx            # Application entry point
├── deploy.js               # Production deployment script
├── vite.config.ts          # Vite bundler configuration
└── package.json            # Dependencies and script definitions
```

---

## 🚀 Getting Started

Follow these instructions to run the project locally on your machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (LTS version recommended).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Eshbanoliver/shristienterprises.git
   ```

2. Navigate to the project folder:
   ```bash
   cd shristi
   ```

3. Install project dependencies:
   ```bash
   npm install
   ```

### Scripts

- **Start Local Server** (development mode with hot-module reloading):
  ```bash
  npm run dev
  ```

- **Production Build** (compiles TypeScript and bundles production-ready assets into the `dist/` directory):
  ```bash
  npm run build
  ```

- **Local Preview** (serve the compiled production build locally for testing):
  ```bash
  npm run preview
  ```

- **Lint Code** (check code consistency using ESLint):
  ```bash
  npm run lint
  ```

---

## 🌐 Deployment

The production deployment is configured using a custom SFTP-based publishing script. Once the site is built successfully, you can run the deployment task:

```bash
node deploy.js
```
