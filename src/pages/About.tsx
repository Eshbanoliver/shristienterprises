import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ArrowRight, MessageCircle, Phone,
  Factory, Palette, ShieldCheck, Gem, Clock3, BadgeCheck, Trophy, Layers, Users } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import aboutImg from '../assets/about-kitchen.png';
import './About.css';

const WA_LINK = 'https://wa.me/919829346870?text=Hello%20Shristi%20Enterprises%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services.';

const timeline = [
  { year: '2014', title: 'The Beginning', desc: 'Shristi Enterprises was founded in Udaipur with a simple mission — to provide premium quality modular kitchens at honest pricing.' },
  { year: '2016', title: 'First 100 Projects', desc: 'Completed our first 100 kitchen installations, building a reputation for exceptional craftsmanship and customer service in Udaipur.' },
  { year: '2018', title: 'Expanded Services', desc: 'Expanded into complete interior solutions including wardrobe design, cabinet manufacturing, and interior consultation services.' },
  { year: '2020', title: 'Modern Manufacturing', desc: 'Upgraded to advanced CNC machinery and modern manufacturing processes, significantly improving precision and production capacity.' },
  { year: '2022', title: '400+ Happy Homes', desc: 'Milestone of 400+ successful kitchen installations, becoming one of Udaipur\'s most trusted modular kitchen brands.' },
  { year: '2024+', title: 'Growing Stronger', desc: 'Continuing to serve Udaipur and surrounding Rajasthan areas, expanding our showroom and adding new design capabilities.' },
];

const expertise = [
  { icon: <Factory size={28} />, title: 'Modular Kitchen Manufacturing', desc: 'State-of-the-art manufacturing facility producing precision-crafted modular kitchen units using premium grade materials and advanced CNC machinery.' },
  { icon: <Palette size={28} />, title: 'Kitchen Design', desc: 'Expert design team creating beautiful, functional kitchen layouts in 3D visualization. From contemporary to classic, we design kitchens that suit your style.' },
  { icon: <Layers size={28} />, title: 'Storage Optimization', desc: 'Smart space planning and innovative storage solutions that maximize every inch of your kitchen, making it more organized and efficient.' },
  { icon: <Users size={28} />, title: 'Interior Solutions', desc: 'Complete interior services including wardrobe design, custom cabinets, TV units, and more — making us your one-stop interior partner.' },
];

const trustFeatures = [
  { icon: <Trophy size={28} />, title: '10+ Years Experience', desc: 'Over a decade of transforming kitchens and spaces in Udaipur with consistent excellence.' },
  { icon: <BadgeCheck size={28} />, title: '500+ Projects Delivered', desc: 'Half a thousand successful kitchen installations — each one a testament to our quality.' },
  { icon: <ShieldCheck size={28} />, title: '5-Year Structural Warranty', desc: 'Comprehensive warranty coverage giving you complete peace of mind after installation.' },
  { icon: <Gem size={28} />, title: 'Premium Materials Only', desc: 'We never compromise on material quality — only the best marine ply and hardware brands.' },
  { icon: <Clock3 size={28} />, title: 'On-Time Delivery', desc: 'We respect your time. Projects delivered on the committed date, every single time.' },
  { icon: <Palette size={28} />, title: 'Endless Customization', desc: '300+ finish options, custom dimensions, unique layouts — all tailored to your vision.' },
];

const About: React.FC = () => {
  return (
    <>
      <SEOHead
        title="About Us - Shristi Enterprises Modular Kitchen Manufacturer Udaipur"
        description="Learn about Shristi Enterprises, Udaipur's trusted modular kitchen manufacturer with 10+ years of experience, 500+ projects completed. We specialize in custom modular kitchens and interior solutions in Rajasthan."
        canonicalUrl="https://shristienterprises.in/about"
      />

      {/* ── Creative Page Hero ─── */}
      <section className="about-hero-creative" aria-labelledby="about-hero-heading">
        {/* Background Animated Gradients / Blobs */}
        <div className="ahc-bg">
          <div className="ahc-blob ahc-blob-1"></div>
          <div className="ahc-blob ahc-blob-2"></div>
          <div className="ahc-blob ahc-blob-3"></div>
          <div className="ahc-grid-overlay"></div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="ahc-content-wrapper">
            <motion.div
              className="ahc-text-column"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="ahc-badge">
                <span className="ahc-badge-icon">✨</span> Our Story
              </div>
              <h1 id="about-hero-heading" className="ahc-title">
                Crafting Spaces That <span className="text-gradient">Inspire</span> Every Day.
              </h1>
              <p className="ahc-subtitle">
                A decade of dedication, precision, and passion for transforming ordinary houses into extraordinary homes across Udaipur.
              </p>
              
              <div className="ahc-actions">
                 <div className="ahc-stats-mini">
                    <div className="ahc-stat-item">
                       <span className="ahc-stat-num">10+</span>
                       <span className="ahc-stat-label">Years of<br/>Excellence</span>
                    </div>
                    <div className="ahc-stat-item">
                       <span className="ahc-stat-num">500+</span>
                       <span className="ahc-stat-label">Projects<br/>Delivered</span>
                    </div>
                 </div>
              </div>
            </motion.div>

            <motion.div
              className="ahc-visual-column"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            >
              {/* Creative Floating Glass Cards */}
              <div className="ahc-glass-card ahc-card-main">
                <div className="ahc-card-icon-wrapper">
                   <Gem className="ahc-card-icon" />
                </div>
                <h3>Uncompromising Quality</h3>
                <p>We source only the finest materials for lasting durability and elegance.</p>
              </div>

              <motion.div 
                className="ahc-glass-card ahc-card-floating-1"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                 <Palette className="ahc-card-icon sm" />
                 <div className="ahc-fc-text">Bespoke Design</div>
              </motion.div>

              <motion.div 
                className="ahc-glass-card ahc-card-floating-2"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                 <ShieldCheck className="ahc-card-icon sm" />
                 <div className="ahc-fc-text">Trusted Process</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Bottom decorative wave */}
        <div className="ahc-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* ── Company Introduction ─── */}
      <section className="section bg-white about-intro-section" aria-labelledby="intro-heading">
        <div className="container">
          <div className="about-intro-grid">
            <motion.div
              className="about-intro-text"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="section-badge section-badge--accent">Who We Are</div>
              <h2 id="intro-heading" className="section-title">
                Udaipur's Premier <br/><span className="text-gradient">Modular Kitchen</span> Company
              </h2>
              
              <p className="about-intro-lead">
                Shristi Enterprises is a leading modular kitchen manufacturer and interior solutions provider based in the beautiful city of Udaipur, Rajasthan.
              </p>
              
              <p className="about-intro-desc">
                Founded with a vision to bring world-class kitchen design and manufacturing to every home, we have grown into one of the most trusted names in the region. Our team of skilled designers, craftsmen, and installation experts work together to transform your kitchen from a concept to a stunning reality.
              </p>

              <ul className="about-feature-list">
                <li><BadgeCheck className="text-primary" size={20} /> 100% Customisable Designs</li>
                <li><BadgeCheck className="text-primary" size={20} /> Premium Marine-Grade Plywood</li>
                <li><BadgeCheck className="text-primary" size={20} /> Factory-Finish Precision</li>
              </ul>

              <div className="about-stats-cards">
                {[
                  { value: '500+', label: 'Projects Completed' },
                  { value: '10+', label: 'Years Experience' },
                  { value: '1000+', label: 'Happy Customers' },
                ].map((s, idx) => (
                  <motion.div 
                    key={s.label} 
                    className="about-stat-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15, duration: 0.5 }}
                  >
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="about-intro-visual"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="about-image-wrapper">
                <div className="about-image-backdrop"></div>
                <img
                  src={aboutImg}
                  alt="Shristi Enterprises kitchen showroom in Udaipur"
                  className="about-intro__image"
                  loading="lazy"
                />
                <motion.div 
                  className="about-image-floating-badge"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="icon-circle">
                    <Heart size={24} style={{ color: 'var(--accent)' }} />
                  </div>
                  <div className="text">
                    <strong>Crafted with Love</strong>
                    <span>in Udaipur</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="about-image-experience-badge"
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <strong>10+</strong>
                  <span>Years of<br/>Trust</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Our Journey Timeline ─── */}
      <section className="section journey-section-creative-light" aria-labelledby="journey-heading">
        {/* Abstract Background Shapes */}
        <div className="journey-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="text-center" style={{ marginBottom: 'var(--space-4xl)' }}>
            <div className="section-badge">Our History</div>
            <h2 id="journey-heading" className="section-title">Our <span>Journey</span></h2>
            <div className="divider divider-center" />
            <p className="section-subtitle">From humble beginnings to Udaipur's most trusted kitchen brand.</p>
          </div>

          <div className="creative-timeline">
            <div className="creative-timeline-line"></div>
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                className={`ct-item ${i % 2 === 0 ? 'ct-item-left' : 'ct-item-right'}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="ct-content">
                  <div className="ct-year-badge">{item.year}</div>
                  <h3 className="ct-title">{item.title}</h3>
                  <p className="ct-desc">{item.desc}</p>
                </div>
                <div className="ct-dot">
                   <div className="ct-dot-inner"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Expertise ─── */}
      <section className="section bg-white" aria-labelledby="expertise-heading">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}>
            <div className="section-badge">What We Do Best</div>
            <h2 id="expertise-heading" className="section-title">Our <span>Expertise</span></h2>
            <div className="divider divider-center" />
          </div>

          <div className="expertise-grid">
            {expertise.map((e, i) => (
              <motion.div
                key={e.title}
                className="expertise-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
              >
                <div className="expertise-card__icon">{e.icon}</div>
                <h3 className="expertise-card__title">{e.title}</h3>
                <p className="expertise-card__desc">{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Clients Trust Us ─── */}
      <section className="section bg-light" aria-labelledby="trust-heading">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}>
            <div className="section-badge">Client Trust</div>
            <h2 id="trust-heading" className="section-title">Why Clients <span>Trust Us</span></h2>
            <div className="divider divider-center" />
          </div>

          <div className="trust-grid">
            {trustFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                className="trust-card glass-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="trust-card__icon" aria-hidden="true">{f.icon}</div>
                <h3 className="trust-card__title">{f.title}</h3>
                <p className="trust-card__desc">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─── */}
      <section className="cta-section" aria-labelledby="about-cta-heading">
        <div className="container">
          <motion.div
            className="cta-section__inner"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 id="about-cta-heading" className="cta-section__title">
              Ready to Start Your Kitchen Project?
            </h2>
            <p className="cta-section__sub">
              Contact us today for a free consultation. Our design experts are ready to help you create the kitchen of your dreams.
            </p>
            <div className="cta-section__actions">
              <a href="tel:+919829346870" className="btn btn-white btn-lg">
                <Phone size={18} /> Call +91 98293 46870
              </a>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-glass btn-lg">
                <MessageCircle size={18} /> WhatsApp Us
              </a>
              <Link to="/contact" className="btn btn-accent btn-lg">
                Get Free Consultation <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
