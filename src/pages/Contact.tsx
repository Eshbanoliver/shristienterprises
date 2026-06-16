import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import './Contact.css';

const WA_LINK = 'https://wa.me/919829346870';

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
}

const serviceOptions = [
  'Modular Kitchen Design',
  'Modular Kitchen Manufacturing',
  'L-Shaped Kitchen',
  'U-Shaped Kitchen',
  'Parallel Kitchen',
  'Island Kitchen',
  'Straight Kitchen',
  'Custom Modular Kitchen',
  'Kitchen Renovation',
  'Wardrobe Design',
  'Cabinet Manufacturing',
  'Storage Solutions',
  'Kitchen Accessories Installation',
  'Interior Consultation',
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!formData.name.trim() || formData.name.length < 2) e.name = 'Name must be at least 2 characters';
    if (!formData.phone.trim() || !/^[6-9]\d{9}$/.test(formData.phone.replace(/\s/g, ''))) e.phone = 'Enter a valid 10-digit Indian mobile number';
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Enter a valid email address';
    if (!formData.service) e.service = 'Please select a service';
    if (!formData.message.trim() || formData.message.length < 10) e.message = 'Message must be at least 10 characters';
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate form submission — redirect to WhatsApp with message
    const waMsg = encodeURIComponent(
      `Hello Shristi Enterprises!\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email || 'N/A'}\nService: ${formData.service}\n\nMessage: ${formData.message}`
    );

    // Short delay for UX
    await new Promise(r => setTimeout(r, 800));
    setIsSubmitting(false);
    setSubmitted(true);

    setTimeout(() => {
      window.open(`${WA_LINK}?text=${waMsg}`, '_blank', 'noopener,noreferrer');
    }, 1200);
  };

  return (
    <>
      <SEOHead
        title="Contact Shristi Enterprises - Modular Kitchen in Udaipur"
        description="Contact Shristi Enterprises for modular kitchen services in Udaipur. Call +91 98293 46870, visit us at Gali 4/1, Ashwini Bazaar Road, Udaipur. Free consultation available."
        canonicalUrl="https://shristienterprises.in/contact"
      />

      {/* ── Page Hero ─── */}
      <section className="page-hero" aria-labelledby="contact-hero-heading">
        <div className="page-hero__overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="section-badge" style={{ background: 'rgba(255,255,255,0.15)', borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>
              Contact Us
            </div>
            <h1 id="contact-hero-heading" className="page-hero__title">
              Let's Build Your <span>Dream Kitchen</span>
            </h1>
            <p className="page-hero__subtitle">
              Reach out today for a free consultation. We're ready to bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Info + Form ─── */}
      <section className="section bg-light" aria-labelledby="contact-main-heading">
        <div className="container">
          <h2 id="contact-main-heading" className="sr-only">Contact Information and Form</h2>
          <div className="contact-grid">
            {/* Info Cards */}
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="section-badge">Get In Touch</div>
              <h3 className="contact-info__title">We'd Love to Hear From You</h3>
              <p className="contact-info__desc">
                Whether you have a question, need a quote, or are ready to start your kitchen project — we're just a call or message away.
              </p>

              <div className="contact-cards">
                <a href="tel:+919829346870" className="contact-card contact-card--primary" aria-label="Call us at +91 98293 46870">
                  <div className="contact-card__icon">
                    <Phone size={24} />
                  </div>
                  <div>
                    <span className="contact-card__label">Call Us Now</span>
                    <strong className="contact-card__value">+91 98293 46870</strong>
                    <span className="contact-card__hint">Available Mon–Sat, 9AM–7PM</span>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/shristi_enterprisess/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card"
                  aria-label="Follow us on Instagram"
                >
                  <div className="contact-card__icon contact-card__icon--instagram">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </div>
                  <div>
                    <span className="contact-card__label">Instagram</span>
                    <strong className="contact-card__value">@shristi_enterprisess</strong>
                    <span className="contact-card__hint">See our latest kitchen designs</span>
                  </div>
                </a>

                <div className="contact-card" aria-label="Our address">
                  <div className="contact-card__icon contact-card__icon--map">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <span className="contact-card__label">Visit Our Showroom</span>
                    <address className="contact-card__value contact-card__address">
                      Gali 4/1, Ashwini Bazaar Road,<br />
                      Near SBI ATM, Basti Ram Ji Ki Badi,<br />
                      Udaipur, Rajasthan 313004
                    </address>
                  </div>
                </div>

                <div className="contact-card" aria-label="Business hours">
                  <div className="contact-card__icon contact-card__icon--clock">
                    <Clock size={24} />
                  </div>
                  <div>
                    <span className="contact-card__label">Business Hours</span>
                    <div className="contact-hours">
                      <div className="contact-hours__row">
                        <span>Monday – Saturday</span>
                        <strong>9:00 AM – 7:00 PM</strong>
                      </div>
                      <div className="contact-hours__row">
                        <span>Sunday</span>
                        <strong className="contact-hours__closed">Closed</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="contact-form-card">
                <h3 className="contact-form-card__title">Get a Free Consultation</h3>
                <p className="contact-form-card__sub">Fill out the form below and we'll get back to you via WhatsApp immediately.</p>

                {submitted ? (
                  <motion.div
                    className="form-success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <CheckCircle2 size={48} color="var(--primary)" />
                    <h4>Message Sent!</h4>
                    <p>Opening WhatsApp to connect you with our team instantly. We'll respond within minutes!</p>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="contact-form"
                    noValidate
                    aria-label="Contact form"
                  >
                    <div className="form-group">
                      <label htmlFor="contact-name" className="form-label">Full Name *</label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rajesh Sharma"
                        className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        aria-invalid={!!errors.name}
                        autoComplete="name"
                      />
                      {errors.name && (
                        <span id="name-error" className="form-error" role="alert">
                          <AlertCircle size={14} /> {errors.name}
                        </span>
                      )}
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="contact-phone" className="form-label">Phone Number *</label>
                        <input
                          type="tel"
                          id="contact-phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. 98293 46870"
                          className={`form-input ${errors.phone ? 'form-input--error' : ''}`}
                          aria-describedby={errors.phone ? 'phone-error' : undefined}
                          aria-invalid={!!errors.phone}
                          autoComplete="tel"
                        />
                        {errors.phone && (
                          <span id="phone-error" className="form-error" role="alert">
                            <AlertCircle size={14} /> {errors.phone}
                          </span>
                        )}
                      </div>

                      <div className="form-group">
                        <label htmlFor="contact-email" className="form-label">Email Address</label>
                        <input
                          type="email"
                          id="contact-email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Optional"
                          className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          aria-invalid={!!errors.email}
                          autoComplete="email"
                        />
                        {errors.email && (
                          <span id="email-error" className="form-error" role="alert">
                            <AlertCircle size={14} /> {errors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-service" className="form-label">Service Required *</label>
                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`form-input form-select ${errors.service ? 'form-input--error' : ''}`}
                        aria-describedby={errors.service ? 'service-error' : undefined}
                        aria-invalid={!!errors.service}
                      >
                        <option value="">Select a service...</option>
                        {serviceOptions.map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      {errors.service && (
                        <span id="service-error" className="form-error" role="alert">
                          <AlertCircle size={14} /> {errors.service}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-message" className="form-label">Your Message *</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your kitchen requirements, space dimensions, budget range, preferred materials..."
                        rows={4}
                        className={`form-input form-textarea ${errors.message ? 'form-input--error' : ''}`}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        aria-invalid={!!errors.message}
                      />
                      {errors.message && (
                        <span id="message-error" className="form-error" role="alert">
                          <AlertCircle size={14} /> {errors.message}
                        </span>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-lg form-submit"
                      disabled={isSubmitting}
                      aria-label="Submit contact form"
                    >
                      {isSubmitting ? (
                        <span className="form-spinner" aria-hidden="true" />
                      ) : (
                        <Send size={18} />
                      )}
                      {isSubmitting ? 'Sending...' : 'Send via WhatsApp'}
                    </button>

                    <p className="form-note">
                      * Required fields. Your message will open in WhatsApp for an instant response.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Google Maps ─── */}
      <section className="section-sm bg-white" aria-labelledby="map-heading">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-2xl)' }}>
            <div className="section-badge">Find Us</div>
            <h2 id="map-heading" className="section-title">
              Visit Our <span>Showroom</span>
            </h2>
            <div className="divider divider-center" />
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3362036.2419018606!2d68.81334591249998!3d24.58586000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e570e7ef1901%3A0xe49a1cf354265bb1!2sShristi%20Enterprises%20-%20Modular%20Kitchen%20in%20Udaipur!5e1!3m2!1sen!2sin!4v1781080714341!5m2!1sen!2sin"
              title="Shristi Enterprises Location on Google Maps"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: 'var(--radius-2xl)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="map-address-bar">
            <MapPin size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
            <address style={{ fontStyle: 'normal', color: 'var(--text-body)', fontSize: '0.9375rem' }}>
              <strong>Shristi Enterprises</strong> — Gali 4/1, Ashwini Bazaar Road, Near SBI ATM, Basti Ram Ji Ki Badi, Udaipur, Rajasthan 313004
            </address>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
