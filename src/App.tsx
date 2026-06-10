import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import './styles/globals.css';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Contact = lazy(() => import('./pages/Contact'));

const PageLoadingFallback: React.FC = () => (
  <div style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#F8FAFC',
  }}>
    <div style={{
      width: 48,
      height: 48,
      border: '3px solid rgba(0,128,0,0.15)',
      borderTopColor: '#008000',
      borderRadius: '50%',
      animation: 'spin 0.8s linear infinite',
    }} />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.3, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

const AppRoutes: React.FC = () => {
  const location = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Suspense fallback={<PageLoadingFallback />}>
                <Home />
              </Suspense>
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <Suspense fallback={<PageLoadingFallback />}>
                <About />
              </Suspense>
            </PageTransition>
          }
        />
        <Route
          path="/services"
          element={
            <PageTransition>
              <Suspense fallback={<PageLoadingFallback />}>
                <Services />
              </Suspense>
            </PageTransition>
          }
        />
        <Route
          path="/testimonials"
          element={
            <PageTransition>
              <Suspense fallback={<PageLoadingFallback />}>
                <Testimonials />
              </Suspense>
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Suspense fallback={<PageLoadingFallback />}>
                <Contact />
              </Suspense>
            </PageTransition>
          }
        />
        {/* 404 Fallback */}
        <Route
          path="*"
          element={
            <PageTransition>
              <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', padding: '40px' }}>
                <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '4rem', color: '#008000' }}>404</h1>
                <p style={{ fontSize: '1.25rem', color: '#64748b' }}>Page not found</p>
                <a href="/" className="btn btn-primary">Go Home</a>
              </div>
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main id="main-content" role="main">
        <AppRoutes />
      </main>
      <Footer />
      <FloatingButtons />
    </BrowserRouter>
  );
};

export default App;
