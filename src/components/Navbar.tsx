import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChefHat } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/services', label: 'Services' },
  { path: '/testimonials', label: 'Testimonials' },
  { path: '/contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        role="banner"
      >
        <div className="navbar__container">
          {/* Logo */}
          <Link to="/" className="navbar__logo" aria-label="Shristi Enterprises Home">
            <div className="navbar__logo-icon">
              <ChefHat size={22} />
            </div>
            <div className="navbar__logo-text">
              <span className="navbar__logo-name">Shristi</span>
              <span className="navbar__logo-sub">Enterprises</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="navbar__links" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
                aria-current={location.pathname === link.path ? 'page' : undefined}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div className="navbar__link-indicator" layoutId="nav-indicator" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="navbar__actions">
            <a href="tel:+919829346870" className="btn btn-primary btn-sm navbar__cta">
              Call Now
            </a>
            <button
              className="navbar__hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="navbar__overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              id="mobile-menu"
              className="navbar__mobile"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              aria-label="Mobile navigation"
            >
              <div className="navbar__mobile-header">
                <div className="navbar__logo">
                  <div className="navbar__logo-icon">
                    <ChefHat size={22} />
                  </div>
                  <div className="navbar__logo-text">
                    <span className="navbar__logo-name">Shristi</span>
                    <span className="navbar__logo-sub">Enterprises</span>
                  </div>
                </div>
                <button
                  className="navbar__hamburger"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <ul className="navbar__mobile-links">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.path}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <Link
                      to={link.path}
                      className={`navbar__mobile-link ${location.pathname === link.path ? 'navbar__mobile-link--active' : ''}`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="navbar__mobile-cta">
                <a href="tel:+919829346870" className="btn btn-primary">
                  📞 Call Now
                </a>
                <a
                  href="https://wa.me/919829346870?text=Hello%20Shristi%20Enterprises%2C%20I%27m%20interested%20in%20your%20modular%20kitchen%20services."
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 WhatsApp
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
