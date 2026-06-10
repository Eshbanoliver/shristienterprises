import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';
import type { Testimonial } from '../data/testimonials';
import './TestimonialCard.css';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.article
      ref={ref}
      className="testimonial-card"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
      aria-label={`Testimonial by ${testimonial.name}`}
    >
      {/* Quote icon */}
      <div className="testimonial-card__quote" aria-hidden="true">"</div>

      {/* Stars */}
      <div className="testimonial-card__stars" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            fill={i < testimonial.rating ? '#F59E0B' : 'none'}
            color={i < testimonial.rating ? '#F59E0B' : '#d1d5db'}
          />
        ))}
      </div>

      {/* Review Text */}
      <blockquote className="testimonial-card__review">
        <p>"{testimonial.review}"</p>
      </blockquote>

      {/* Service Tag */}
      <span className="testimonial-card__service">{testimonial.service}</span>

      {/* Author */}
      <div className="testimonial-card__author">
        <div
          className="testimonial-card__avatar"
          style={{ background: `linear-gradient(135deg, ${testimonial.color}, ${testimonial.color}bb)` }}
          aria-hidden="true"
        >
          {testimonial.initials}
        </div>
        <div>
          <strong className="testimonial-card__name">{testimonial.name}</strong>
          <span className="testimonial-card__location">{testimonial.location}</span>
        </div>
      </div>
    </motion.article>
  );
};

export default TestimonialCard;
