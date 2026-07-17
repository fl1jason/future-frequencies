import React from 'react';
import { articles } from '@data/journal';
import './ArticleDetail.css';

interface ArticleDetailProps {
  articleId: string;
  theme?: 'default' | 'cool' | 'warm';
}

export default function ArticleDetail({ articleId, theme = 'default' }: ArticleDetailProps) {
  const article = articles.find((a) => a.id === articleId);

  if (!article) {
    return (
      <section className="article-detail">
        <div className="article-container">
          <div className="article-not-found">
            <h1>Article not found</h1>
            <p>The article you're looking for doesn't exist.</p>
            <a href="/journal" className="back-link">
              ← Back to Journal
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="article-detail">
      {/* Hero Section */}
      <div className="article-hero">
        <div className="article-hero-container">
          <div className="article-hero-meta">
            <span className="article-pillar">{article.pillar}</span>
            {article.date && <span className="article-date">{article.date}</span>}
          </div>
          <h1 className="article-hero-title">{article.title}</h1>
          {article.excerpt && (
            <p className="article-hero-excerpt">{article.excerpt}</p>
          )}
        </div>
      </div>

      {/* Article Image */}
      {article.image && (
        <div className="article-featured-image">
          <img src={article.image} alt={article.title} />
        </div>
      )}

      {/* Article Content */}
      <div className="article-container">
        <div className="article-content-wrapper">
          <article className="article-body">
            {article.content && (
              <>
                {article.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="article-paragraph">
                    {paragraph}
                  </p>
                ))}
              </>
            )}
          </article>

          {/* Sidebar */}
          <aside className="article-sidebar">
            <div className="sidebar-section">
              <h3 className="sidebar-title">About this article</h3>
              <div className="article-meta-details">
                <div className="meta-item">
                  <span className="meta-label">Category</span>
                  <span className="meta-value">{article.pillar}</span>
                </div>
                {article.date && (
                  <div className="meta-item">
                    <span className="meta-label">Published</span>
                    <span className="meta-value">{article.date}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="sidebar-section">
              <h3 className="sidebar-title">More articles</h3>
              <div className="related-articles">
                {articles
                  .filter((a) => a.pillar === article.pillar && a.id !== article.id)
                  .slice(0, 3)
                  .map((relatedArticle) => (
                    <a
                      key={relatedArticle.id}
                      href={`/journal/${relatedArticle.id}`}
                      className="related-article-link"
                    >
                      <span className="related-article-title">{relatedArticle.title}</span>
                      <span className="related-article-arrow">→</span>
                    </a>
                  ))}
                {articles.filter((a) => a.pillar === article.pillar && a.id !== article.id).length === 0 && (
                  <p className="no-related">No other articles in this category</p>
                )}
              </div>
            </div>

            <div className="sidebar-section">
              <h3 className="sidebar-title">Back to journal</h3>
              <a href="/journal" className="back-button">
                View all articles
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
