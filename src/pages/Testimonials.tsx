import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ThumbsUp, Users, Heart, Award, Home, Sparkles, Target, Phone, MessageCircle, Plus, X, Check } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import TestimonialCard from '../components/TestimonialCard';
import AnimatedCounter from '../components/AnimatedCounter';
import { testimonials as initialTestimonials } from '../data/testimonials';
import type { Testimonial } from '../data/testimonials';
import './Testimonials.css';

// Import local kitchen images for success stories
import uShapedImg from '../assets/ai_kitchens/u_shaped_kitchen_1781325878596.png';
import islandImg from '../assets/ai_kitchens/island_kitchen_1781325903278.png';
import parallelImg from '../assets/ai_kitchens/parallel_kitchen_1781325892473.png';

const successStories = [
  {
    client: 'Sharma Family',
    location: 'Sector 11, Udaipur',
    headline: 'Complete Home Kitchen Transformation',
    story: 'The Sharma family wanted a complete kitchen overhaul in their 3BHK apartment. We designed and installed a stunning U-shaped modular kitchen with an island breakfast counter, premium acrylic shutters, and smart storage solutions.',
    result: 'Delivered in 18 days. The family now enjoys a world-class kitchen that has become the centerpiece of their home.',
    icon: <Home size={28} />,
    color: '#008000',
    image: uShapedImg,
  },
  {
    client: 'Mehta Residence',
    location: 'Hiran Magri, Udaipur',
    headline: 'Luxury Island Kitchen Design',
    story: 'Mrs. Priya Mehta dreamed of an island kitchen for her newly constructed villa. We created an L-shaped layout with a stunning free-standing island, matching marble countertops, and premium Hettich hardware throughout.',
    result: 'A breathtaking kitchen that has been featured in conversations among all their guests. Completed on time, within budget.',
    icon: <Sparkles size={28} />,
    color: '#14B8A6',
    image: islandImg,
  },
  {
    client: 'Rathore Bungalow',
    location: 'Fatehpura, Udaipur',
    headline: 'Compact Kitchen, Maximum Efficiency',
    story: 'Working with a compact kitchen space, we designed a highly efficient parallel kitchen layout with floor-to-ceiling storage, hidden appliance sections, and a pull-out pantry unit that made the most of every inch.',
    result: 'The client was amazed at how much storage we managed in a small space. A functional masterpiece in a challenging footprint.',
    icon: <Target size={28} />,
    color: '#F59E0B',
    image: parallelImg,
  },
];

const filterCategories = [
  { id: 'all', label: 'All Reviews' },
  { id: 'modular', label: 'Modular Kitchens' },
  { id: 'island', label: 'Island Kitchens' },
  { id: 'layout', label: 'L/U/Parallel Layouts' },
  { id: 'wardrobes', label: 'Wardrobes & Cabinets' },
  { id: 'other', label: 'Other Services' },
];

const getTestimonialCategory = (service: string): string => {
  const s = service.toLowerCase();
  if (s.includes('island')) return 'island';
  if (s.includes('l-shaped') || s.includes('u-shaped') || s.includes('parallel') || s.includes('straight')) return 'layout';
  if (s.includes('wardrobe') || s.includes('cabinet')) return 'wardrobes';
  if (s.includes('kitchen')) return 'modular';
  return 'other';
};

const Testimonials: React.FC = () => {
  // Local state for reviews so users can submit and see their reviews instantly
  const [reviews, setReviews] = useState<Testimonial[]>(initialTestimonials);
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Form State
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState('');
  const [service, setService] = useState('Modular Kitchen Design');

  // Filter Reviews
  const filteredReviews = reviews.filter(t => {
    if (activeFilter === 'all') return true;
    return getTestimonialCategory(t.service) === activeFilter;
  });

  // Calculate Averages dynamically based on reviews array state
  const totalReviewsCount = reviews.length;
  const avgRating = (reviews.reduce((acc, t) => acc + t.rating, 0) / (totalReviewsCount || 1)).toFixed(1);

  // Form Submit Handler
  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !review.trim()) return;

    const newTestimonial: Testimonial = {
      id: `custom-${Date.now()}`,
      name: name.trim(),
      location: location.trim() || 'Udaipur, Rajasthan',
      rating,
      review: review.trim(),
      service,
      initials: name.trim().split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2),
      color: ['#008000', '#14B8A6', '#F59E0B', '#7c3aed', '#dc2626', '#db2777'][Math.floor(Math.random() * 6)],
    };

    setReviews([newTestimonial, ...reviews]);
    setIsSubmitted(true);

    // Close modal and reset form
    setTimeout(() => {
      setIsSubmitted(false);
      setIsModalOpen(false);
      setName('');
      setLocation('');
      setRating(5);
      setReview('');
      setService('Modular Kitchen Design');
    }, 2200);
  };

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
                const count = reviews.filter(t => t.rating === star).length;
                const pct = totalReviewsCount > 0 ? Math.round((count / totalReviewsCount) * 100) : 0;
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
              <strong>{totalReviewsCount}+</strong>
              <span>Verified Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── All Reviews Grid ─── */}
      <section className="section bg-light" aria-labelledby="reviews-heading">
        <div className="container">
          <div className="reviews-section-header">
            <div>
              <div className="section-badge">What They Say</div>
              <h2 id="reviews-heading" className="section-title">
                Customer <span>Reviews</span>
              </h2>
            </div>
            <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
              <Plus size={18} /> Write A Review
            </button>
          </div>
          <div className="divider" style={{ margin: '0 0 var(--space-xl) 0' }} />

          {/* Dynamic Category Filter Bar */}
          <div className="filter-bar">
            {filterCategories.map(cat => (
              <button
                key={cat.id}
                className={`filter-tab ${activeFilter === cat.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat.id)}
              >
                {cat.label}
                {activeFilter === cat.id && (
                  <motion.div layoutId="activeFilterUnderline" className="filter-tab__underline" />
                )}
              </button>
            ))}
          </div>

          {/* Testimonial Grid with Framer Motion Layout Animate */}
          <motion.div className="reviews-grid" layout>
            <AnimatePresence mode="popLayout">
              {filteredReviews.map((t, i) => (
                <motion.div
                  key={t.id}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <TestimonialCard testimonial={t} index={i} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredReviews.length === 0 && (
            <div className="no-reviews-state">
              <MessageCircle size={48} style={{ color: 'var(--text-light)', marginBottom: 'var(--space-md)' }} />
              <p>No reviews found in this category yet. Be the first to write one!</p>
              <button className="btn btn-secondary btn-sm" style={{ marginTop: 'var(--space-md)' }} onClick={() => setIsModalOpen(true)}>
                Write a Review
              </button>
            </div>
          )}
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
                <div className="story-card__image-container">
                  <img src={story.image} alt={story.headline} className="story-card__image" loading="lazy" />
                  <div className="story-card__badge" style={{ color: story.color, background: `${story.color}15`, border: `1px solid ${story.color}33` }}>
                    {story.client} · {story.location}
                  </div>
                </div>
                <div className="story-card__content">
                  <div className="story-card__icon" aria-hidden="true" style={{ color: story.color, background: `${story.color}15`, border: `1px solid ${story.color}25` }}>{story.icon}</div>
                  <h3 className="story-card__headline">{story.headline}</h3>
                  <p className="story-card__story">{story.story}</p>
                  <div className="story-card__result">
                    <strong>Result:</strong> {story.result}
                  </div>
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

      {/* ── Write A Review Modal ─── */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="modal-backdrop">
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div
              className="modal-card"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            >
              <button className="modal-close" onClick={() => setIsModalOpen(false)} aria-label="Close modal">
                <X size={20} />
              </button>

              {isSubmitted ? (
                <motion.div
                  className="modal-success-state"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="modal-success-state__icon">
                    <Check size={40} />
                  </div>
                  <h3>Thank you, {name}!</h3>
                  <p>Your review has been successfully submitted and added to the page.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleReviewSubmit} className="modal-form">
                  <h3 className="modal-title">Share Your Experience</h3>
                  <p className="modal-subtitle">Your feedback helps Udaipur homeowners choose Shristi Enterprises with confidence.</p>

                  <div className="modal-form__field">
                    <label>Rating</label>
                    <div className="star-rating-selector">
                      {Array.from({ length: 5 }).map((_, i) => {
                        const starValue = i + 1;
                        return (
                          <button
                            type="button"
                            key={i}
                            className="star-rating-selector__btn"
                            onClick={() => setRating(starValue)}
                            onMouseEnter={() => setHoverRating(starValue)}
                            onMouseLeave={() => setHoverRating(0)}
                          >
                            <Star
                              size={28}
                              fill={starValue <= (hoverRating || rating) ? '#F59E0B' : 'none'}
                              color={starValue <= (hoverRating || rating) ? '#F59E0B' : '#d1d5db'}
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="modal-form__row">
                    <div className="modal-form__field">
                      <label htmlFor="reviewer-name">Full Name *</label>
                      <input
                        type="text"
                        id="reviewer-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Ankit Mehta"
                        required
                      />
                    </div>
                    <div className="modal-form__field">
                      <label htmlFor="reviewer-location">Location</label>
                      <input
                        type="text"
                        id="reviewer-location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. Udaipur, Rajasthan"
                      />
                    </div>
                  </div>

                  <div className="modal-form__field">
                    <label htmlFor="service-type">Service Received</label>
                    <select
                      id="service-type"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                    >
                      <option value="Modular Kitchen Design">Modular Kitchen Design</option>
                      <option value="Island Kitchen">Island Kitchen</option>
                      <option value="L-Shaped Kitchen">L-Shaped Kitchen</option>
                      <option value="U-Shaped Kitchen">U-Shaped Kitchen</option>
                      <option value="Parallel Kitchen">Parallel Kitchen</option>
                      <option value="Kitchen Renovation">Kitchen Renovation</option>
                      <option value="Wardrobe Design">Wardrobe Design</option>
                      <option value="Cabinet Manufacturing">Cabinet Manufacturing</option>
                      <option value="Other Interior Work">Other Interior Work</option>
                    </select>
                  </div>

                  <div className="modal-form__field">
                    <label htmlFor="review-text">Your Review *</label>
                    <textarea
                      id="review-text"
                      rows={4}
                      value={review}
                      onChange={(e) => setReview(e.target.value)}
                      placeholder="Write your experience here..."
                      maxLength={500}
                      required
                    />
                    <span className="character-count">{review.length} / 500 characters</span>
                  </div>

                  <button type="submit" className="btn btn-primary w-full" style={{ width: '100%', marginTop: 'var(--space-sm)' }}>
                    Submit Review
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Testimonials;
