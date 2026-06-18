import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
import logoImg from '../assets/logo.png';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/contact', label: 'Contact Us' },
  ];

  const services = [
    'Modular Kitchen Design',
    'L-Shaped Kitchens',
    'U-Shaped Kitchens',
    'Island Kitchens',
    'Parallel Kitchens',
    'Wardrobe Design',
    'Cabinet Manufacturing',
    'Kitchen Renovation',
  ];

  return (
    <footer className="footer" role="contentinfo">
      {/* Decorative top wave */}
      <div className="footer__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#0F172A" />
        </svg>
      </div>

      <div className="footer__body">
        <div className="footer__container">
          <div className="footer__grid">
            {/* Brand Column */}
            <div className="footer__brand">
              <div className="footer__logo">
                <div className="footer__logo-icon">
                  <img src={logoImg} alt="" className="footer__logo-img" />
                </div>
                <div>
                  <span className="footer__logo-name">Shristi Enterprises</span>
                  <span className="footer__logo-sub">Modular Kitchen in Udaipur</span>
                </div>
              </div>
              <p className="footer__tagline">
                Transforming homes with premium modular kitchens and interior solutions since 10+ years. Your dream kitchen is our passion.
              </p>
              <div className="footer__social">
                <a
                  href="https://www.instagram.com/shristi_enterprisess/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label="Follow us on Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  <span>@shristi_enterprisess</span>
                </a>
              </div>
              <div className="footer__hours">
                <Clock size={16} />
                <div>
                  <p><strong>Mon – Sat:</strong> 9:00 AM – 7:00 PM</p>
                  <p><strong>Sunday:</strong> Closed</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer__col">
              <h3 className="footer__col-title">Quick Links</h3>
              <ul className="footer__links">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="footer__link">
                      <span className="footer__link-arrow">›</span> {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer__col">
              <h3 className="footer__col-title">Our Services</h3>
              <ul className="footer__links">
                {services.map((svc) => (
                  <li key={svc}>
                    <Link to="/services" className="footer__link">
                      <span className="footer__link-arrow">›</span> {svc}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer__col">
              <h3 className="footer__col-title">Contact Us</h3>
              <ul className="footer__contact-list">
                <li className="footer__contact-item">
                  <div className="footer__contact-icon">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="footer__contact-label">Phone</span>
                    <a href="tel:+919829346870" className="footer__contact-value">
                      +91 98293 46870
                    </a>
                  </div>
                </li>
                <li className="footer__contact-item">
                  <div className="footer__contact-icon">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="footer__contact-label">Address</span>
                    <address className="footer__contact-value footer__address">
                      Gali 4/1, Ashwini Bazaar Road,<br />
                      Near SBI ATM, Basti Ram Ji Ki Badi,<br />
                      Udaipur, Rajasthan 313004
                    </address>
                  </div>
                </li>
                <li className="footer__contact-item">
                  <div className="footer__contact-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </div>
                  <div>
                    <span className="footer__contact-label">Instagram</span>
                    <a
                      href="https://www.instagram.com/shristi_enterprisess/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer__contact-value footer__external"
                    >
                      shristi_enterprisess <ExternalLink size={12} />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="footer__container">
          <p className="footer__copyright">
            ©️ Copyright {currentYear} | Shristi Enterprises | All Rights Reserved | Powered by{' '}
            <a
              href="https://www.futurexdigitalmarketing.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#28a745' }}
            >
              Future X Digital Marketing
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
