import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Service } from '../data/services';
import * as LucideIcons from 'lucide-react';
import './ServiceCard.css';

interface ServiceCardProps {
  service: Service;
  index?: number;
  featured?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index = 0, featured = false }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  // Dynamically get icon from lucide-react
  const IconComponent = (LucideIcons as unknown as Record<string, React.FC<{ size?: number }>>)[service.icon];

  return (
    <motion.div
      ref={ref}
      className={`service-card ${featured ? 'service-card--featured' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
    >
      <div className={`service-card__icon-wrap service-card__icon-wrap--${service.category}`}>
        {IconComponent ? <IconComponent size={28} /> : <span>🍴</span>}
      </div>

      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__desc">{service.description}</p>

      <ul className="service-card__benefits">
        {service.benefits.map((b) => (
          <li key={b} className="service-card__benefit">
            <span className="service-card__check">✓</span> {b}
          </li>
        ))}
      </ul>

      <Link to="/contact" className="service-card__cta">
        Get a Quote <ArrowRight size={16} />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
