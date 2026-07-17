import React from 'react';
import { articles } from '@data/journal';
import './Journal.css';

interface JournalProps {
  theme?: 'default' | 'cool' | 'warm';
}

export default function Journal({ theme = 'default' }: JournalProps) {
  return (
    <section className="journal">
      <div className="journal-container">
        <div className="journal-header">
          <div className="journal-label">The Journal</div>
          <h2 className="journal-title">Recent thinking</h2>
        </div>

        <div className="journal-grid">
          {articles.map((article) => (
            <a
              key={article.id}
              href={`/journal/${article.id}`}
              className="journal-card"
              rel="prefetch"
            >
              <div className="article-image">
                {article.image ? (
                  <img src={article.image} alt={article.title} className="article-img" />
                ) : (
                  <div className="image-placeholder">
                    <svg
                      viewBox="0 0 1 1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="1" height="1" fill="currentColor" />
                    </svg>
                    <span>article image</span>
                  </div>
                )}
              </div>
              <div className="article-info">
                <div className="article-pillar">{article.pillar}</div>
                <h3 className="article-title">{article.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
