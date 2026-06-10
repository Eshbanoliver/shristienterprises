import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import './FloatingButtons.css';

const WA_LINK =
  'https://wa.me/919829346870?text=Hello%20Shristi%20Enterprises%2C%20I%27m%20interested%20in%20your%20modular%20kitchen%20services.%20Please%20share%20more%20details.';
const CALL_LINK = 'tel:+919829346870';

const FloatingButtons: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Left Floating Buttons */}
      <div className="floating-left" role="complementary" aria-label="Quick contact actions">
        <motion.a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn floating-btn--whatsapp"
          aria-label="Contact us on WhatsApp"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, type: 'spring', damping: 20 }}
          whileHover={{ scale: 1.1, x: 4 }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageCircle size={22} />
          <span className="floating-btn__label">WhatsApp</span>
        </motion.a>

        <motion.a
          href={CALL_LINK}
          className="floating-btn floating-btn--call"
          aria-label="Call us now"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.15, type: 'spring', damping: 20 }}
          whileHover={{ scale: 1.1, x: 4 }}
          whileTap={{ scale: 0.95 }}
        >
          <Phone size={22} />
          <span className="floating-btn__label">Call Now</span>
        </motion.a>
      </div>

      {/* Right Scroll To Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="floating-scroll-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingButtons;
