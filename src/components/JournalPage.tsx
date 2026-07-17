import React, { useState } from 'react';
import { articles } from '@data/journal';
import './JournalPage.css';

interface JournalPageProps {
  theme?: 'default' | 'cool' | 'warm';
}

export default function JournalPage({ theme = 'default' }: JournalPageProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = Array.from(
    new Set(articles.map((article) => article.pillar))
  ).sort();

  const filteredArticles = activeCategory
    ? articles.filter((article) => article.pillar === activeCategory)
    : articles;

  return (
    <section className="journal-page">
      {/* Hero Section */}
      <div className="journal-hero">
        <div className="journal-hero-content">
          <div className="journal-hero-label">The Journal</div>
          <h1 className="journal-hero-title">Recent thinking</h1>
          <p className="journal-hero-description">
            Insights into sound, atmosphere, and the art of immersive experiences.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="journal-main-container">
        {/* Article List */}
        <div className="journal-content">
          <div className="articles-list">
            {filteredArticles.map((article, index) => (
              <a
                key={article.id}
                href={`/journal/${article.id}`}
                className={`article-item ${index > 0 ? 'bordered' : ''}`}
                rel="prefetch"
              >
                <div className="article-item-image">
                  {article.image ? (
                    <img src={article.image} alt={article.title} />
                  ) : (
                    <div className="image-placeholder">
                      <span>article image</span>
                    </div>
                  )}
                </div>
                <div className="article-item-content">
                  <div className="article-item-meta">
                    <span className="article-pillar">{article.pillar}</span>
                    <span className="article-date">Jul 17, 2026</span>
                  </div>
                  <h2 className="article-item-title">{article.title}</h2>
                  <p className="article-item-excerpt">
                    Exploring the philosophy and practice behind creating immersive
                    deep house experiences that transcend the ordinary.
                  </p>
                  <span className="article-read-more">Read Article →</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="journal-sidebar">
          <div className="sidebar-section">
            <h3 className="sidebar-title">Categories</h3>
            <div className="categories-list">
              <button
                onClick={() => setActiveCategory(null)}
                className={`category-item ${!activeCategory ? 'active' : ''}`}
              >
                All Articles ({articles.length})
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`category-item ${
                    activeCategory === category ? 'active' : ''
                  }`}
                >
                  {category} (
                  {articles.filter((a) => a.pillar === category).length})
                </button>
              ))}
            </div>
          </div>

          <div className="sidebar-section">
            <h3 className="sidebar-title">Subscribe</h3>
            <p className="sidebar-description">
              Get our latest articles delivered to your inbox.
            </p>
            <form className="subscribe-form">
              <input
                type="email"
                placeholder="Your email"
                className="subscribe-input"
                required
              />
              <button type="submit" className="subscribe-btn">
                Subscribe
              </button>
            </form>
          </div>
        </aside>
      </div>
    </section>
  );
}
