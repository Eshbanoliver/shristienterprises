import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone, MessageCircle, ArrowRight, CheckCircle2, Award, Users, Briefcase,
  Star, Target, Eye, Zap, Shield, Heart, Clock, Wrench, Headphones,
  DollarSign, ChevronRight, TrendingUp, Utensils
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import AnimatedCounter from '../components/AnimatedCounter';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import FAQAccordion from '../components/FAQAccordion';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';
import { faqs } from '../data/faqs';
import heroImg from '../assets/hero-kitchen.png';
import aboutImg from '../assets/about-kitchen.png';
import islandKitchenImg from '../assets/ai_kitchens/island_kitchen_1781325903278.png';
import './Home.css';

const heroImages = [
  heroImg,
  aboutImg,
  islandKitchenImg,
];

const WA_LINK =
  'https://wa.me/919829346870?text=Hello%20Shristi%20Enterprises%2C%20I%27m%20interested%20in%20your%20modular%20kitchen%20services.%20Please%20share%20more%20details.';


const previewServices = services.slice(0, 6);
// Remove unused preview slice
// const previewTestimonials = testimonials.slice(0, 3);

const metrics = [
  { target: 500, suffix: '+', label: 'Projects Completed', icon: <Briefcase size={28} /> },
  { target: 10, suffix: '+', label: 'Years Experience', icon: <Award size={28} /> },
  { target: 100, suffix: '%', label: 'Customer Satisfaction', icon: <Heart size={28} /> },
  { target: 1000, suffix: '+', label: 'Happy Customers', icon: <Users size={28} /> },
];

const coreValues = [
  { icon: <Star size={24} />, title: 'Quality', desc: 'Premium materials and superior craftsmanship in every project' },
  { icon: <Zap size={24} />, title: 'Innovation', desc: 'Cutting-edge designs that redefine modern kitchen aesthetics' },
  { icon: <Shield size={24} />, title: 'Integrity', desc: 'Transparent pricing and honest communication always' },
  { icon: <Heart size={24} />, title: 'Customer Satisfaction', desc: 'Your happiness and comfort are our ultimate goal' },
  { icon: <TrendingUp size={24} />, title: 'Reliability', desc: 'Consistent, on-time delivery with zero compromise on quality' },
  { icon: <Award size={24} />, title: 'Excellence', desc: 'Setting industry benchmarks in modular kitchen manufacturing' },
];

const whyChooseUs = [
  { icon: <Users size={22} />, title: 'Experienced Team', desc: '10+ years of skilled craftsmanship' },
  { icon: <Zap size={22} />, title: 'Custom Designs', desc: 'Tailored to your exact taste and space' },
  { icon: <Shield size={22} />, title: 'Premium Materials', desc: 'Only top-grade materials used' },
  { icon: <Clock size={22} />, title: 'Timely Delivery', desc: 'Projects completed on schedule' },
  { icon: <DollarSign size={22} />, title: 'Affordable Pricing', desc: 'Best value without compromising quality' },
  { icon: <Zap size={22} />, title: 'Modern Technology', desc: 'Latest manufacturing equipment and techniques' },
  { icon: <Wrench size={22} />, title: 'End-to-End Service', desc: 'Design to installation — we handle it all' },
  { icon: <Headphones size={22} />, title: 'Excellent Support', desc: 'Dedicated after-sales service team' },
];

const Home: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <SEOHead
        title="Shristi Enterprises - Modular Kitchen in Udaipur | Custom Kitchen Design"
        description="Shristi Enterprises is Udaipur's most trusted modular kitchen manufacturer. Custom L-shaped, U-shaped, island, parallel kitchens with premium materials. 500+ projects. Call +91 98293 46870."
        canonicalUrl="https://shristienterprises.in"
      />

      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <section className="hero" aria-label="Hero section">
        <AnimatePresence>
          <motion.div
            key={currentImage}
            className="hero__bg"
            style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            role="img"
            aria-label="Premium modular kitchen interior"
          />
        </AnimatePresence>
        <div className="hero__overlay" />

        {/* Floating orbs */}
        <div className="hero__orb hero__orb--1" aria-hidden="true" />
        <div className="hero__orb hero__orb--2" aria-hidden="true" />

        <div className="hero__content container">
          <motion.div
            className="hero__inner"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              className="hero__badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Star size={14} fill="currentColor" /> Udaipur's #1 Modular Kitchen Experts
            </motion.div>

            <motion.h1
              className="hero__title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Transform Your Home with{' '}
              <span className="hero__title-highlight">Premium Modular Kitchens</span>
            </motion.h1>

            <motion.p
              className="hero__subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              Crafting beautiful, functional, and space-optimized modular kitchens in Udaipur since 10+ years. From custom L-shaped to luxury island kitchens — your dream space is one call away.
            </motion.p>

            <motion.div
              className="hero__actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a href="tel:+919829346870" className="btn btn-primary btn-lg">
                <Phone size={18} /> Call Now
              </a>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-glass btn-lg">
                <MessageCircle size={18} /> WhatsApp Us
              </a>
              <Link to="/services" className="btn btn-white btn-lg">
                View Services <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div
              className="hero__trust"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {['500+ Projects', '10+ Years', 'Free Consultation', '5-Year Warranty'].map((tag) => (
                <span key={tag} className="hero__trust-tag">
                  <CheckCircle2 size={14} /> {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Slider Controls */}
        <div className="hero__dots">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`hero__dot ${index === currentImage ? 'active' : ''}`}
              onClick={() => setCurrentImage(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="hero__scroll"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          aria-hidden="true"
        >
          <div className="hero__scroll-dot" />
        </motion.div>
      </section>

      {/* ═══════════════ ABOUT PREVIEW ═══════════════ */}
      <section className="section about-preview bg-white" aria-labelledby="about-preview-heading">
        <div className="container">
          <div className="about-preview__grid">
            <motion.div
              className="about-preview__image-wrap"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={aboutImg}
                alt="Shristi Enterprises modular kitchen showroom in Udaipur"
                className="about-preview__image"
                loading="lazy"
                width="600"
                height="450"
              />
              <div className="about-preview__badge-card glass-card">
                <Award size={24} />
                <div>
                  <strong>10+ Years</strong>
                  <span>Trusted Excellence</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="about-preview__content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="section-badge">About Shristi Enterprises</div>
              <h2 id="about-preview-heading" className="section-title">
                Udaipur's Most Trusted<br />
                <span>Modular Kitchen</span> Experts
              </h2>
              <div className="divider" />
              <p className="about-preview__text">
                Shristi Enterprises is a premier modular kitchen manufacturer and interior solutions provider based in Udaipur, Rajasthan. With over a decade of expertise, we have transformed 500+ homes with beautifully crafted, space-optimized kitchen solutions.
              </p>
              <ul className="about-preview__features">
                {[
                  'Fully customized designs tailored to your space',
                  'Premium-grade marine ply and hardware',
                  'Modern craftsmanship with advanced machinery',
                  'Smart space optimization techniques',
                  '100% customer satisfaction track record',
                ].map((feat) => (
                  <li key={feat} className="about-preview__feature">
                    <CheckCircle2 size={18} className="about-preview__feature-icon" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn btn-primary btn-lg">
                Read Our Story <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ METRICS ═══════════════ */}
      <section className="metrics-section" aria-labelledby="metrics-heading">
        <div className="metrics-section__bg" aria-hidden="true" />
        <div className="container">
          <h2 id="metrics-heading" className="sr-only">Key Metrics</h2>
          <div className="metrics-grid">
            {metrics.map((m) => (
              <AnimatedCounter
                key={m.label}
                target={m.target}
                suffix={m.suffix}
                label={m.label}
                icon={m.icon}
                duration={2.5}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ SERVICES PREVIEW ═══════════════ */}
      <section className="section bg-light" aria-labelledby="services-preview-heading">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}>
            <div className="section-badge">What We Offer</div>
            <h2 id="services-preview-heading" className="section-title">
              Our <span>Premium Kitchen</span> Services
            </h2>
            <div className="divider divider-center" />
            <p className="section-subtitle">
              From sleek modular kitchens to elegant interior solutions — every service crafted with precision and passion.
            </p>
          </div>

          <div className="services-preview-grid">
            {previewServices.map((svc, i) => (
              <ServiceCard key={svc.id} service={svc} index={i} />
            ))}
          </div>

          <div className="text-center" style={{ marginTop: 'var(--space-2xl)' }}>
            <Link to="/services" className="btn btn-primary btn-lg">
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ MISSION & VISION ═══════════════ */}
      <section className="section mv-section" aria-labelledby="mv-heading">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}>
            <div className="section-badge">Our Purpose</div>
            <h2 id="mv-heading" className="section-title">
              Mission & <span>Vision</span>
            </h2>
            <div className="divider divider-center" />
          </div>

          <div className="mv-grid">
            <motion.div
              className="mv-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mv-card__icon">
                <Target size={32} />
              </div>
              <h3 className="mv-card__title">Our Mission</h3>
              <p className="mv-card__text">
                To deliver innovative, functional, and aesthetically pleasing modular kitchen solutions that enhance modern living. We are committed to transforming every kitchen into a space that inspires cooking, fosters family connections, and reflects personal style.
              </p>
              <ul className="mv-card__points">
                {['Customer-centric approach', 'Quality without compromise', 'Innovative design solutions'].map(p => (
                  <li key={p}><ChevronRight size={16} /> {p}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="mv-card mv-card--vision"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="mv-card__icon mv-card__icon--vision">
                <Eye size={32} />
              </div>
              <h3 className="mv-card__title">Our Vision</h3>
              <p className="mv-card__text">
                To become the most trusted and recognized modular kitchen brand in Rajasthan through exceptional quality craftsmanship, customer-focused services, and continuous innovation. We envision a future where every home in Udaipur enjoys a world-class kitchen.
              </p>
              <ul className="mv-card__points">
                {['Rajasthan\'s #1 kitchen brand', 'Continuous innovation', 'Community impact through quality'].map(p => (
                  <li key={p}><ChevronRight size={16} /> {p}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CORE VALUES ═══════════════ */}
      <section className="section bg-white" aria-labelledby="values-heading">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}>
            <div className="section-badge">What Drives Us</div>
            <h2 id="values-heading" className="section-title">
              Our Core <span>Values</span>
            </h2>
            <div className="divider divider-center" />
            <p className="section-subtitle">
              These principles guide every decision, design, and interaction at Shristi Enterprises.
            </p>
          </div>

          <div className="values-grid">
            {coreValues.map((v, i) => (
              <motion.div
                key={v.title}
                className={`value-card value-card--${i}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <div className="value-card__icon">{v.icon}</div>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__desc">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ WHY CHOOSE US ═══════════════ */}
      <section className="section why-section" aria-labelledby="why-heading">
        <div className="why-section__bg" aria-hidden="true" />
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-3xl)', position: 'relative', zIndex: 2 }}>
            <div className="section-badge">
              Why Shristi Enterprises
            </div>
            <h2 id="why-heading" className="section-title">
              Why Choose <span>Us?</span>
            </h2>
            <div className="divider divider-center" />
            <p className="section-subtitle">
              Eight compelling reasons why Udaipur homeowners trust Shristi Enterprises for their dream kitchens.
            </p>
          </div>

          <div className="why-grid">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                className={`why-card why-card--${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ y: -10, scale: 1.03 }}
              >
                <div className="why-card__glow" />
                <div className="why-card__inner">
                  <div className="why-card__icon">{item.icon}</div>
                  <h3 className="why-card__title">{item.title}</h3>
                  <p className="why-card__desc">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA BANNER ═══════════════ */}
      <section className="cta-banner" aria-labelledby="cta-heading">
        <div className="container">
          <motion.div
            className="cta-banner__inner"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="cta-banner__icon" aria-hidden="true">
              <Utensils size={40} />
            </div>
            <h2 id="cta-heading" className="cta-banner__title">
              Ready To Build Your Dream Modular Kitchen?
            </h2>
            <p className="cta-banner__sub">
              Get a free consultation from Udaipur's top modular kitchen experts. We bring your vision to life — on time, within budget.
            </p>
            <div className="cta-banner__actions">
              <a href="tel:+919829346870" className="btn btn-white btn-lg">
                <Phone size={18} /> Call Now
              </a>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-glass btn-lg">
                <MessageCircle size={18} /> Get Free Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIALS PREVIEW ═══════════════ */}
      <section className="section bg-light" aria-labelledby="testimonials-preview-heading">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}>
            <div className="section-badge">Customer Stories</div>
            <h2 id="testimonials-preview-heading" className="section-title">
              What Our <span>Happy Customers</span> Say
            </h2>
            <div className="divider divider-center" />
            <p className="section-subtitle">
              Real experiences from real customers who trusted Shristi Enterprises with their dream kitchens.
            </p>
          </div>

          <div className="testimonials-marquee-container">
            <div className="testimonials-marquee-track">
              {[...testimonials, ...testimonials].map((t, i) => (
                <div key={`${t.id}-${i}`} className="marquee-item">
                  <TestimonialCard testimonial={t} index={i % testimonials.length} />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center" style={{ marginTop: 'var(--space-2xl)' }}>
            <Link to="/testimonials" className="btn btn-primary btn-lg">
              View All Testimonials <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section className="section bg-white" aria-labelledby="faq-heading">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}>
            <div className="section-badge">Got Questions?</div>
            <h2 id="faq-heading" className="section-title">
              Frequently Asked <span>Questions</span>
            </h2>
            <div className="divider divider-center" />
            <p className="section-subtitle">
              Everything you need to know about our modular kitchens, process, pricing, and installation.
            </p>
          </div>

          <div className="faq-container">
            <FAQAccordion faqs={faqs} />
          </div>

          <div className="text-center" style={{ marginTop: 'var(--space-2xl)' }}>
            <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-md)' }}>
              Still have questions? We're happy to help!
            </p>
            <a href="tel:+919829346870" className="btn btn-primary btn-lg">
              <Phone size={18} /> Talk To Our Expert
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
