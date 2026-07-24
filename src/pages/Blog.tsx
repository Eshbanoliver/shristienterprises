import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock, User, ArrowRight, Utensils, Phone, MessageCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { BLOG_POSTS } from '../data/blogs';
import './Blog.css';

const getBadgeStyle = (category: string) => {
  switch (category) {
    case 'Design Trends': return 'blog-badge--design';
    case 'Materials Guide': return 'blog-badge--materials';
    case 'Budget & Planning': return 'blog-badge--budget';
    case 'Space Hacks': return 'blog-badge--hacks';
    default: return 'blog-badge--design';
  }
};

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const featuredPost = BLOG_POSTS.find(p => p.featured) || BLOG_POSTS[0];

  const categories = ['All', 'Design Trends', 'Materials Guide', 'Budget & Planning', 'Space Hacks'];

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEOHead
        title="Modular Kitchen Design Blog & Buying Guides Udaipur | Shristi Enterprises"
        description="Expert insights, kitchen buying guides, cabinet material comparison, pricing breakdown, and space saving design ideas for Udaipur homes by Shristi Enterprises."
        canonicalUrl="https://shristimodularkitchen.com/blog"
        keywords="Modular Kitchen Blog Udaipur, Modular Kitchen Cost Guide, Kitchen Interior Design Tips, Acrylic vs PVC Cabinets, Kitchen Storage Hacks"
      />

      {/* ── Blog Hero Section ─── */}
      <section className="blog-hero" aria-labelledby="blog-hero-heading">
        <div className="blog-hero__glow-1" />
        <div className="blog-hero__glow-2" />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="section-badge" style={{ background: 'rgba(255,255,255,0.15)', borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>
              Kitchen Insights & Guides
            </div>
            <h1 id="blog-hero-heading" className="blog-hero__title">
              Ideas & Expertise For Your <span>Dream Kitchen</span>
            </h1>
            <p className="blog-hero__subtitle">
              Read expert advice from Udaipur’s top modular kitchen designers on materials, layouts, cost planning, and storage hacks.
            </p>
          </motion.div>

          {/* Featured Spotlight Card */}
          {featuredPost && (
            <motion.div
              className="blog-featured"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="blog-featured__grid">
                <div className="blog-featured__image-wrap">
                  <img src={featuredPost.image} alt={featuredPost.title} className="blog-featured__image" />
                </div>
                <div className="blog-featured__content">
                  <span className={`blog-badge ${getBadgeStyle(featuredPost.category)}`}>
                    Featured Article · {featuredPost.category}
                  </span>
                  <Link to={`/blog/${featuredPost.slug}`}>
                    <h2 className="blog-featured__title">{featuredPost.title}</h2>
                  </Link>
                  <p className="blog-featured__excerpt">{featuredPost.excerpt}</p>
                  
                  <div className="blog-meta">
                    <span className="blog-meta__item"><User size={14} /> {featuredPost.author}</span>
                    <span className="blog-meta__item"><Calendar size={14} /> {featuredPost.date}</span>
                    <span className="blog-meta__item"><Clock size={14} /> {featuredPost.readTime}</span>
                  </div>

                  <div>
                    <Link to={`/blog/${featuredPost.slug}`} className="btn btn-primary btn-md">
                      Read Full Guide <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── Main Articles List Section ─── */}
      <section className="section bg-light" aria-labelledby="articles-heading">
        <div className="container">
          <div className="blog-controls">
            {/* Categories */}
            <div className="blog-categories" role="tablist">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`blog-cat-btn ${selectedCategory === cat ? 'blog-cat-btn--active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                  role="tab"
                  aria-selected={selectedCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="blog-search-box">
              <Search size={18} className="blog-search-icon" />
              <input
                type="text"
                placeholder="Search kitchen guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="blog-search-input"
              />
            </div>
          </div>

          {/* Grid */}
          <div className="blog-grid">
            {filteredPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                className="blog-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <div className="blog-card__image-wrap">
                  <img src={post.image} alt={post.title} className="blog-card__image" loading="lazy" />
                  <span className={`blog-card__category-badge blog-badge ${getBadgeStyle(post.category)}`}>
                    {post.category}
                  </span>
                </div>
                <div className="blog-card__body">
                  <Link to={`/blog/${post.slug}`}>
                    <h3 className="blog-card__title">{post.title}</h3>
                  </Link>
                  <p className="blog-card__excerpt">{post.excerpt}</p>
                  
                  <div className="blog-card__footer">
                    <span className="blog-meta__item"><Clock size={13} /> {post.readTime}</span>
                    <Link to={`/blog/${post.slug}`} className="blog-card__link">
                      Read Article <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center" style={{ padding: '60px 0' }}>
              <h3>No articles found</h3>
              <p style={{ color: '#64748B' }}>Try searching for a different keyword or select another category.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA Banner ─── */}
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
              Planning A Kitchen Renovation in Udaipur?
            </h2>
            <p className="cta-banner__sub">
              Get a free home visit and 3D layout consultation from our senior kitchen designers.
            </p>
            <div className="cta-banner__actions">
              <a href="tel:+919829346870" className="btn btn-white btn-lg">
                <Phone size={18} /> Call +91 98293 46870
              </a>
              <a
                href="https://wa.me/919829346870?text=Hello%20Shristi%20Enterprises%2C%20I%20read%20your%20blog%20and%20would%20like%20a%20free%20kitchen%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-glass btn-lg"
              >
                <MessageCircle size={18} /> Free Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;
