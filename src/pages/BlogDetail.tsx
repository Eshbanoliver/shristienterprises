import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, Lightbulb, Phone, MessageCircle, ArrowLeft } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { BLOG_POSTS } from '../data/blogs';
import './BlogDetail.css';

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '100px 20px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', color: '#0F172A', marginBottom: '16px' }}>Article Not Found</h1>
        <p style={{ color: '#64748B', marginBottom: '24px' }}>The blog post you are looking for might have been moved or removed.</p>
        <Link to="/blog" className="btn btn-primary">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
      </div>
    );
  }

  const relatedPosts = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 2);

  return (
    <>
      <SEOHead
        title={`${post.title} - Shristi Enterprises Udaipur`}
        description={post.excerpt}
        canonicalUrl={`https://shristimodularkitchen.com/blog/${post.slug}`}
        keywords={post.tags.join(', ')}
      />

      <article className="article-page">
        <div className="container">
          {/* Breadcrumbs */}
          <nav className="breadcrumbs" aria-label="Breadcrumbs">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <Link to="/blog">Blog</Link>
            <ChevronRight size={14} />
            <span>{post.category}</span>
          </nav>

          {/* Article Header */}
          <header className="article-header">
            <span className="blog-badge blog-badge--design">{post.category}</span>
            <h1 className="article-title">{post.title}</h1>

            <div className="article-author-bar">
              <div className="article-author-avatar">SE</div>
              <div className="article-author-info">
                <span className="article-author-name">{post.author}</span>
                <span className="article-author-role">{post.authorRole}</span>
              </div>
              <div className="blog-meta" style={{ marginLeft: 'auto', marginBottom: 0 }}>
                <span className="blog-meta__item"><Calendar size={14} /> {post.date}</span>
                <span className="blog-meta__item"><Clock size={14} /> {post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="article-featured-img-wrap">
            <img src={post.image} alt={post.title} className="article-featured-img" />
          </div>

          {/* Body Content */}
          <div className="article-container">
            <p className="article-intro">{post.content.intro}</p>

            {/* Key Takeaways */}
            {post.content.keyTakeaways && post.content.keyTakeaways.length > 0 && (
              <div className="takeaways-box">
                <h4><Lightbulb size={20} /> Key Takeaways</h4>
                <ul>
                  {post.content.keyTakeaways.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Sections */}
            {post.content.sections.map((sec, idx) => (
              <section key={idx} className="article-section">
                <h2>{sec.heading}</h2>
                {sec.body.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}

                {sec.list && (
                  <ul style={{ paddingLeft: '20px', marginBottom: '16px', color: '#475569' }}>
                    {sec.list.map((listItem, lIdx) => (
                      <li key={lIdx} style={{ marginBottom: '6px' }}>{listItem}</li>
                    ))}
                  </ul>
                )}

                {sec.tip && (
                  <div className="article-tip-box">
                    <Lightbulb size={20} style={{ flexShrink: 0 }} />
                    <div>
                      <strong>Pro Design Tip:</strong> {sec.tip}
                    </div>
                  </div>
                )}
              </section>
            ))}

            {/* Conclusion */}
            <div className="article-conclusion">
              <h3>Final Thoughts</h3>
              <p>{post.content.conclusion}</p>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '20px' }}>
                <a href="tel:+919829346870" className="btn btn-primary btn-sm">
                  <Phone size={14} /> Call Expert (+91 98293 46870)
                </a>
                <a
                  href={`https://wa.me/919829346870?text=Hello%20Shristi%20Enterprises%2C%20I%20read%20your%20article%20"${encodeURIComponent(post.title)}"%20and%20want%20more%20information.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  <MessageCircle size={14} /> Ask on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="related-posts">
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '24px', color: '#0F172A' }}>
                Related Articles
              </h3>
              <div className="blog-grid">
                {relatedPosts.map(p => (
                  <div key={p.id} className="blog-card">
                    <div className="blog-card__image-wrap">
                      <img src={p.image} alt={p.title} className="blog-card__image" />
                    </div>
                    <div className="blog-card__body">
                      <Link to={`/blog/${p.slug}`}>
                        <h4 className="blog-card__title">{p.title}</h4>
                      </Link>
                      <p className="blog-card__excerpt">{p.excerpt}</p>
                      <div className="blog-card__footer">
                        <span>{p.readTime}</span>
                        <Link to={`/blog/${p.slug}`} className="blog-card__link">
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
};

export default BlogDetail;
