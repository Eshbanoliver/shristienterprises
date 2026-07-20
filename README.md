# Modular Kitchen & Premium Interiors Web Application

A modern, highly interactive, and responsive web application designed for modular kitchen and interior design showcase services. Built with high performance, clean glassmorphism aesthetics, fluid micro-animations, dynamic routing, and search engine optimization (SEO) in mind.

---

## 🛠️ Tech Stack

- **Frontend Framework**: [React 19](https://react.dev/) (TypeScript)
- **Build Tool & Dev Server**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS (CSS Custom Properties, Modern Flexbox & CSS Grid Layouts)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router](https://reactrouter.com/)
- **SEO & Metadata**: [React Helmet Async](https://github.com/stayuncurious/react-helmet-async) & Structured JSON-LD Schema

---

## ✨ Features

- **Responsive & Interactive Navigation**: Glassmorphic sticky header with backdrop blur, sliding mobile drawer navigation, and active path highlights.
- **Dynamic Service Catalog**: Categorized showcases for modular kitchens (L-Shaped, U-Shaped, Parallel, Island) and specialized interior design solutions.
- **Smooth Page Transitions & Scroll Animations**: Micro-interactions and animate-on-scroll effects powered by Framer Motion.
- **SEO Ready**: Pre-configured dynamic meta tags, Open Graph card metadata, and JSON-LD structured schema for search engines.
- **Testimonial & Review Section**: Interactive customer feedback showcase and rating components.
- **Clean Architecture**: Modular UI components, isolated CSS stylesheets, and strongly typed data models.

---

## 📁 Project Structure

```
├── public/                 # Static assets (Favicons, web manifest, robots.txt)
├── src/
│   ├── assets/             # Branding assets, icons, and media files
│   ├── components/         # Reusable UI components (Navbar, Footer, SEOHead, Cards)
│   ├── data/               # Structured static content (Services, Testimonials, FAQs)
│   ├── pages/              # Page view components (Home, About, Services, Contact, etc.)
│   ├── styles/             # Global stylesheets and design tokens
│   ├── App.tsx             # Application router layout
│   └── main.tsx            # Application mounting entry point
├── vite.config.ts          # Vite bundler configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Node dependencies and project scripts
```

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or later recommended)
- `npm` (comes bundled with Node.js) or `pnpm` / `yarn`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. **Navigate into the project directory**:
   ```bash
   cd your-repo-name
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

---

## 📜 Available Scripts

In the project directory, you can run the following commands:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the app in development mode with Hot Module Replacement (HMR) at `http://localhost:5173`. |
| `npm run build` | Type-checks code using `tsc` and compiles optimized production assets into `dist/`. |
| `npm run preview` | Serves the production build locally for testing before deployment. |
| `npm run lint` | Runs ESLint to check for syntax issues, formatting errors, and best practices. |

---

## ⚙️ Configuration & Customization

- **Site Metadata**: Update meta tags, site titles, and social previews in `src/components/SEOHead.tsx` or page-level components.
- **Data Content**: Business services, customer testimonials, and contact details can be modified in `src/data/`.
- **Styling**: Base colors, typography scale, glassmorphic styles, and CSS variables are managed in `src/styles/`.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
