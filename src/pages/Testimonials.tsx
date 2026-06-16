import React from 'react';
import { motion } from 'framer-motion';
import { Star, ThumbsUp, Users, Heart, Award, Home, Sparkles, Target, Phone, MessageCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import TestimonialCard from '../components/TestimonialCard';
import AnimatedCounter from '../components/AnimatedCounter';
import { testimonials } from '../data/testimonials';
import './Testimonials.css';

const successStories = [
  {
    client: 'Sharma Family',
    location: 'Sector 11, Udaipur',
    headline: 'Complete Home Kitchen Transformation',
    story: 'The Sharma family wanted a complete kitchen overhaul in their 3BHK apartment. We designed and installed a stunning U-shaped modular kitchen with an island breakfast counter, premium acrylic shutters, and smart storage solutions.',
    result: 'Delivered in 18 days. The family now enjoys a world-class kitchen that has become the centerpiece of their home.',
    icon: <Home size={28} />,
    color: '#008000',
  },
  {
    client: 'Mehta Residence',
    location: 'Hiran Magri, Udaipur',
    headline: 'Luxury Island Kitchen Design',
    story: 'Mrs. Priya Mehta dreamed of an island kitchen for her newly constructed villa. We created an L-shaped layout with a stunning free-standing island, matching marble countertops, and premium Hettich hardware throughout.',
    result: 'A breathtaking kitchen that has been featured in conversations among all their guests. Completed on time, within budget.',
    icon: <Sparkles size={28} />,
    color: '#14B8A6',
  },
  {
    client: 'Rathore Bungalow',
    location: 'Fatehpura, Udaipur',
    headline: 'Compact Kitchen, Maximum Efficiency',
    story: 'Working with a compact kitchen space, we designed a highly efficient parallel kitchen layout with floor-to-ceiling storage, hidden appliance sections, and a pull-out pantry unit that made the most of every inch.',
    result: 'The client was amazed at how much storage we managed in a small space. A functional masterpiece in a challenging footprint.',
    icon: <Target size={28} />,
    color: '#F59E0B',
  },
];

const Testimonials: React.FC = () => {
  const avgRating = (testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length).toFixed(1);

  return (
    <>
      <SEOHead
        title="Customer Reviews & Testimonials - Shristi Enterprises Udaipur"
        description="Read what our happy customers say about Shristi Enterprises modular kitchens in Udaipur. 1000+ satisfied customers, 5-star reviews, real testimonials from real homeowners."
        canonicalUrl="https://shristienterprises.in/testimonials"
      />

      {/* ── Page Hero ─── */}
      <section className="page-hero" aria-labelledby="testimonials-hero-heading">
        <div className="page-hero__overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="section-badge" style={{ background: 'rgba(255,255,255,0.15)', borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>
              Testimonials
            </div>
            <h1 id="testimonials-hero-heading" className="page-hero__title">
              Words from Our <span>Happy Customers</span>
            </h1>
            <p className="page-hero__subtitle">
              Over 1000 satisfied homeowners in Udaipur. Their joy is our greatest achievement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Satisfaction Stats ─── */}
      <section className="satisfaction-section" aria-labelledby="stats-heading">
        <div className="container">
          <h2 id="stats-heading" className="sr-only">Satisfaction Statistics</h2>
          <div className="satisfaction-grid">
            <AnimatedCounter target={500} suffix="+" label="Projects Completed" icon={<Award size={28} />} />
            <AnimatedCounter target={1000} suffix="+" label="Happy Customers" icon={<Users size={28} />} />
            <AnimatedCounter target={100} suffix="%" label="Customer Satisfaction" icon={<Heart size={28} />} />
            <AnimatedCounter target={5} label="Star Average Rating" icon={<Star size={28} />} />
          </div>
        </div>
      </section>

      {/* ── Average Rating Banner ─── */}
      <section className="rating-banner bg-white section-sm" aria-label="Average customer rating">
        <div className="container">
          <div className="rating-banner__inner">
            <div className="rating-banner__score">
              <span className="rating-score">{avgRating}</span>
              <div className="rating-banner__stars" aria-label={`${avgRating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={24} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
              <span className="rating-banner__label">Average Customer Rating</span>
            </div>
            <div className="rating-banner__breakdown">
              {[5, 4, 3, 2, 1].map(star => {
                const count = testimonials.filter(t => t.rating === star).length;
                const pct = Math.round((count / testimonials.length) * 100);
                return (
                  <div key={star} className="rating-row">
                    <span className="rating-row__label">{star} ★</span>
                    <div className="rating-row__bar-wrap">
                      <motion.div
                        className="rating-row__bar"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: (5 - star) * 0.1 }}
                      />
                    </div>
                    <span className="rating-row__pct">{pct}%</span>
                  </div>
                );
              })}
            </div>
            <div className="rating-banner__stat">
              <ThumbsUp size={36} style={{ color: 'var(--primary)', marginBottom: '8px' }} />
              <strong>{testimonials.length}+</strong>
              <span>Verified Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── All Reviews Grid ─── */}
      <section className="section bg-light" aria-labelledby="reviews-heading">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}>
            <div className="section-badge">What They Say</div>
            <h2 id="reviews-heading" className="section-title">
              Customer <span>Reviews</span>
            </h2>
            <div className="divider divider-center" />
          </div>

          <div className="reviews-grid">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Success Stories ─── */}
      <section className="section bg-white" aria-labelledby="stories-heading">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}>
            <div className="section-badge">Success Stories</div>
            <h2 id="stories-heading" className="section-title">
              Kitchen <span>Transformation</span> Stories
            </h2>
            <div className="divider divider-center" />
            <p className="section-subtitle">Three remarkable kitchen journeys that inspire us every day.</p>
          </div>

          <div className="stories-grid">
            {successStories.map((story, i) => (
              <motion.article
                key={story.client}
                className="story-card glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                aria-label={`Success story: ${story.client}`}
              >
                <div className="story-card__icon" aria-hidden="true" style={{ color: story.color, background: `${story.color}15`, border: `1px solid ${story.color}25` }}>{story.icon}</div>
                <div className="story-card__badge" style={{ color: story.color, background: `${story.color}15`, border: `1px solid ${story.color}33` }}>
                  {story.client} · {story.location}
                </div>
                <h3 className="story-card__headline">{story.headline}</h3>
                <p className="story-card__story">{story.story}</p>
                <div className="story-card__result">
                  <strong>Result:</strong> {story.result}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─── */}
      <section className="cta-section" aria-labelledby="testimonials-cta-heading">
        <div className="container">
          <div className="cta-section__inner">
            <h2 id="testimonials-cta-heading" className="cta-section__title">
              Join 1000+ Happy Customers in Udaipur
            </h2>
            <p className="cta-section__sub">
              Your dream kitchen is just a call away. Let Shristi Enterprises transform your kitchen into something extraordinary.
            </p>
            <div className="cta-section__actions">
              <a href="tel:+919829346870" className="btn btn-white btn-lg">
                <Phone size={18} /> Call Now
              </a>
              <a
                href="https://wa.me/919829346870?text=Hi%20Shristi%20Enterprises%2C%20I%20want%20to%20discuss%20my%20kitchen%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-glass btn-lg"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
