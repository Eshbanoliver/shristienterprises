# 🍳 Shristi Enterprises — Modular Kitchen & Premium Interiors Web Application

[![React](https://img.shields.io/badge/React-19.2.6-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0.12-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.40.0-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

A high-performance, modern, and fully responsive web application built for **Shristi Enterprises** — a premier modular kitchen manufacturer and interior design specialist based in **Udaipur, Rajasthan**.

The application features clean **glassmorphic design aesthetics**, fluid micro-animations powered by **Framer Motion**, dynamic route splitting, enterprise-level **SEO metadata**, structured **JSON-LD LocalBusiness schema**, and direct lead-generation integrations (WhatsApp & Phone call floaters).

---

## 📍 Business Overview

- **Business Name**: Shristi Enterprises
- **Specialization**: Modular Kitchens (L-Shaped, U-Shaped, Parallel, Island, Straight, Bespoke), Wardrobe Design, Wooden/Sagwan/Flush Doors, PVC Furniture, and Custom Interior Carpentry.
- **Location**: Udaipur, Rajasthan, India
- **Address**: Gali 4/1, Ashwini Bazaar Road, Near SBI ATM, Basti Ram Ji Ki Badi, Udaipur, Rajasthan 313004
- **Phone**: [+91 98293 46870](tel:+919829346870)
- **Website**: [shristimodularkitchen.com](https://shristimodularkitchen.com)
- **Instagram**: [@shristi_enterprisess](https://www.instagram.com/shristi_enterprisess/)
- **Digital Agency**: [Future X Digital Marketing](https://www.futurexdigitalmarketing.com/)

---

## 🛠️ Tech Stack & Technologies

| Layer | Technology | Usage & Purpose |
| :--- | :--- | :--- |
| **Frontend Core** | [React 19](https://react.dev/) | UI component library with Concurrent Mode & Suspense |
| **Language** | [TypeScript 6](https://www.typescriptlang.org/) | Type safety, strict interfaces, and maintainable data models |
| **Bundler & Server** | [Vite 8](https://vitejs.dev/) | Lightning-fast HMR, ES modules, and production bundling |
| **Animations** | [Framer Motion 12](https://www.framer.com/motion/) | Smooth route transitions, entrance animations, and counters |
| **Styling** | Vanilla CSS | CSS custom properties (tokens), Flexbox, CSS Grid, Glassmorphism |
| **Routing** | [React Router 7](https://reactrouter.com/) | Client-side page navigation with route-level lazy loading |
| **SEO & Head** | [React Helmet Async](https://github.com/stayuncurious/react-helmet-async) | Dynamic title tags, meta descriptions, Open Graph, & JSON-LD schema |
| **Icons** | [Lucide React](https://lucide.dev/) | Modern SVG iconography |
| **Deployment** | SSH2 / Node SFTP (`deploy.js`) | Automated production build deployment to Hostinger web server |

---

## ✨ Key Features & Highlights

- **📱 Fully Responsive Glassmorphic UI**: Custom CSS design system with backdrop blur, smooth card hover states, dark/light contrast balance, and mobile navigation drawer.
- **🍳 Comprehensive Service Catalog**: Interactive showcase for:
  - **Modular Kitchen Layouts**: L-Shaped, U-Shaped, Parallel, Island, Straight, and Custom designs.
  - **Interior & Carpentry**: Sagwan/Teakwood doors, Flush doors, PVC furniture, Bespoke wardrobes, and Storage solutions.
- **⚡ Code-Splitting & High Performance**: All pages (`Home`, `About`, `Services`, `Testimonials`, `Contact`, `Blog`, `BlogDetail`) are lazily loaded with custom animated fallbacks to maximize initial load speed.
- **🔍 Advanced SEO & Local Schema**:
  - Pre-configured target keywords for Udaipur kitchen market.
  - Dynamic Open Graph cards and Twitter meta cards.
  - Embedded JSON-LD `LocalBusiness` structured data for search engine rich snippets.
- **📖 Dynamic Blog System**: Deep-linkable article routes (`/blog` and `/blog/:slug`) with category tags, estimated reading times, author tags, and detailed markdown content.
- **💬 Direct Lead Conversion**:
  - Interactive contact forms with client validation.
  - Persistent sticky floating action buttons for instant **WhatsApp Chat** and **Phone Calls**.
  - Interactive Google Maps location embed.
- **📊 Animated Counters & Testimonials**: Animated numbers showcasing total completed projects, client satisfaction rate, and years of experience.

---

## 📁 Project Architecture

```
shristienterprises/
├── public/                 # Static assets (Favicons, og-image.jpg, sitemap.xml, robots.txt)
├── src/
│   ├── assets/             # Branding logos, AI kitchen gallery renders & interior images
│   │   └── ai_kitchens/    # High-resolution kitchen showcase images
│   ├── components/         # Reusable UI components
│   │   ├── AnimatedCounter.tsx   # Smooth numerical count-up on scroll
│   │   ├── FAQAccordion.tsx      # Expandable FAQ component with smooth transitions
│   │   ├── FloatingButtons.tsx   # Sticky floating WhatsApp & Phone contact buttons
│   │   ├── Footer.tsx            # Multi-column footer with links & business details
│   │   ├── Navbar.tsx            # Sticky header with glassmorphism & mobile drawer
│   │   ├── SEOHead.tsx           # Dynamic Helmet manager with JSON-LD schema
│   │   ├── ServiceCard.tsx       # Individual service feature card
│   │   └── TestimonialCard.tsx   # Customer review card with star ratings
│   ├── data/               # Centralized data sources
│   │   ├── blogs.ts              # Knowledge base articles & blog content
│   │   ├── faqs.ts               # Frequently asked questions list
│   │   ├── services.ts           # Modular kitchen & interior services data
│   │   └── testimonials.ts       # Verified client reviews & ratings
│   ├── pages/              # Page view components & styles
│   │   ├── About.tsx / .css
│   │   ├── Blog.tsx / .css
│   │   ├── BlogDetail.tsx / .css
│   │   ├── Contact.tsx / .css
│   │   ├── Home.tsx / .css
│   │   ├── Services.tsx / .css
│   │   └── Testimonials.tsx / .css
│   ├── styles/             # Design tokens & global CSS resets
│   │   └── globals.css
│   ├── App.tsx             # Main router, layout shell & Framer Motion transitions
│   └── main.tsx            # Application React 19 entry point
├── deploy.js               # Node.js script for SSH2 / SFTP automated server deployment
├── eslint.config.js        # ESLint flat configuration
├── index.html              # HTML shell with Google Fonts & primary meta tags
├── package.json            # Node.js dependencies and script registry
├── tsconfig.json           # TypeScript root configuration
└── vite.config.ts          # Vite bundler build settings & plugins
```

---

## 🚀 Getting Started

Follow these instructions to run the application locally on your machine.

### Prerequisites

- **Node.js**: `v18.0.0` or higher (Node 20+ recommended)
- **Package Manager**: `npm` (v9+) or `yarn` / `pnpm`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/shristienterprises.git
   ```

2. **Navigate into the directory**:
   ```bash
   cd shristienterprises
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

---

## 📜 Available NPM Scripts

In the project root, you can execute the following commands:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts Vite dev server with Hot Module Replacement (HMR) at `http://localhost:5173`. |
| `npm run build` | Runs TypeScript compilation (`tsc -b`) and builds production-optimized bundle into `/dist`. |
| `npm run preview` | Spins up a local static server to preview the `/dist` production build. |
| `npm run lint` | Runs ESLint to check for code style issues, broken hooks, and syntax errors. |

---

## 🌐 Production Deployment

The project includes an automated deployment script `deploy.js` that connects to the production web server via **SSH2 & SFTP** and uploads the latest static assets from `/dist`.

### Deployment Steps:

1. **Build the production bundle**:
   ```bash
   npm run build
   ```

2. **Execute the automated deployment script**:
   ```bash
   node deploy.js
   ```

> 📌 **Note**: `deploy.js` handles directory verification, cleans old assets, creates required remote folders, and uploads new build files to Hostinger's web root (`public_html` / `domains/shristimodularkitchen.com/public_html`).

---

## ⚙️ Content & Customization Guide

- **Updating Services**: Modify or add new service offerings in `src/data/services.ts`.
- **Managing Blog Articles**: Add new articles with rich Markdown content and metadata in `src/data/blogs.ts`.
- **Modifying Business Details**: Update phone numbers, addresses, opening hours, or SEO schema in `src/components/SEOHead.tsx` and `src/components/Footer.tsx`.
- **Styling & Colors**: Adjust primary brand colors, fonts, and global design variables in `src/styles/globals.css`.

---

## 📄 License & Credits

- **Copyright**: © 2026 **Shristi Enterprises**. All rights reserved.
- **Developed & Maintained By**: [Future X Digital Marketing](https://www.futurexdigitalmarketing.com/)
- **License**: Released under the [MIT License](LICENSE).

