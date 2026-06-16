import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MessageSquare, Palette, Factory, CheckCircle2 } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import './Services.css';

type Category = 'all' | 'kitchen' | 'interior';

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filtered = activeCategory === 'all' ? services : services.filter(s => s.category === activeCategory);

  const kitchenCount = services.filter(s => s.category === 'kitchen').length;
  const interiorCount = services.filter(s => s.category === 'interior').length;

  return (
    <>
      <SEOHead
        title="Modular Kitchen Services Udaipur - Shristi Enterprises"
        description="Shristi Enterprises offers complete modular kitchen services in Udaipur — L-shaped, U-shaped, island, parallel kitchens, wardrobe design, cabinet manufacturing, kitchen renovation, and more."
        canonicalUrl="https://shristienterprises.in/services"
        keywords="Modular Kitchen Services Udaipur, L-Shaped Kitchen Udaipur, U-Shaped Kitchen Udaipur, Island Kitchen Udaipur, Wardrobe Design Udaipur, Kitchen Renovation Udaipur"
      />

      {/* ── Page Hero ─── */}
      <section className="page-hero" aria-labelledby="services-hero-heading">
        <div className="page-hero__overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="section-badge" style={{ background: 'rgba(255,255,255,0.15)', borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>
              Our Services
            </div>
            <h1 id="services-hero-heading" className="page-hero__title">
              Premium <span>Kitchen & Interior</span> Services
            </h1>
            <p className="page-hero__subtitle">
              From dream modular kitchens to elegant interior solutions — crafted with precision for every Udaipur home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Services Grid ─── */}
      <section className="section bg-light" aria-labelledby="services-grid-heading">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-2xl)' }}>
            <div className="section-badge">What We Offer</div>
            <h2 id="services-grid-heading" className="section-title">
              All Our <span>Services</span>
            </h2>
            <div className="divider divider-center" />
          </div>

          {/* Category Filter */}
          <div className="services-filter" role="tablist" aria-label="Service categories">
            {([
              { value: 'all', label: `All Services (${services.length})` },
              { value: 'kitchen', label: `Modular Kitchens (${kitchenCount})` },
              { value: 'interior', label: `Interior Solutions (${interiorCount})` },
            ] as { value: Category; label: string }[]).map(tab => (
              <button
                key={tab.value}
                className={`filter-btn ${activeCategory === tab.value ? 'filter-btn--active' : ''}`}
                onClick={() => setActiveCategory(tab.value)}
                role="tab"
                aria-selected={activeCategory === tab.value}
                id={`tab-${tab.value}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <motion.div
            key={activeCategory}
            className="services-full-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            role="tabpanel"
            aria-labelledby={`tab-${activeCategory}`}
          >
            {filtered.map((svc, i) => (
              <ServiceCard key={svc.id} service={svc} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Process Section ─── */}
      <section className="section bg-white" aria-labelledby="process-heading">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}>
            <div className="section-badge">How It Works</div>
            <h2 id="process-heading" className="section-title">
              Our Simple <span>4-Step Process</span>
            </h2>
            <div className="divider divider-center" />
          </div>

          <div className="process-grid">
            {[
              { step: '01', title: 'Free Consultation', desc: 'We visit your home, understand your needs, take measurements, and discuss your vision and budget.', icon: <MessageSquare size={28} /> },
              { step: '02', title: 'Design & 3D Visualization', desc: 'Our designers create a personalized layout with 3D visuals so you can see exactly how your kitchen will look.', icon: <Palette size={28} /> },
              { step: '03', title: 'Manufacturing', desc: 'Precision manufacturing at our facility using premium materials and advanced CNC machinery.', icon: <Factory size={28} /> },
              { step: '04', title: 'Installation & Handover', desc: 'Expert installation team sets up your kitchen and hands it over — clean, ready to use, and perfect.', icon: <CheckCircle2 size={28} /> },
            ].map((step, i) => (
              <motion.div
                key={step.step}
                className="process-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div className="process-step-num">{step.step}</div>
                <div className="process-card__icon" aria-hidden="true">{step.icon}</div>
                <h3 className="process-card__title">{step.title}</h3>
                <p className="process-card__desc">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─── */}
      <section className="cta-section" aria-labelledby="services-cta-heading">
        <div className="container">
          <motion.div className="cta-section__inner" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 id="services-cta-heading" className="cta-section__title">
              Need a Custom Kitchen Solution?
            </h2>
            <p className="cta-section__sub">
              Every home is unique — and so is every kitchen we build. Call us for a free consultation tailored to your exact needs.
            </p>
            <div className="cta-section__actions">
              <a href="tel:+919829346870" className="btn btn-white btn-lg">
                <Phone size={18} /> Call Now
              </a>
              <a
                href="https://wa.me/919829346870?text=Hello%20Shristi%20Enterprises%2C%20I%27m%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-glass btn-lg"
              >
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
