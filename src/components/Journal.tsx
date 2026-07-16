import React from 'react';
import './Journal.css';

interface JournalProps {
  theme?: 'default' | 'cool' | 'warm';
}

const articles = [
  {
    id: 'sound-matters',
    pillar: 'Sound System',
    title: 'Why Sound Matters More Than Volume',
    image: 'article-1',
  },
  {
    id: 'behind-booth',
    pillar: 'Behind The Scenes',
    title: 'Behind The Booth',
    image: 'article-2',
  },
  {
    id: 'building-systems',
    pillar: 'Sound System',
    title: 'Building Sound Systems That Move People',
    image: 'article-3',
  },
  {
    id: 'atmosphere-design',
    pillar: 'Atmosphere',
    title: 'How We Design Immersive Environments',
    image: 'article-4',
  },
  {
    id: 'community-stories',
    pillar: 'Community',
    title: 'Stories From Our Community',
    image: 'article-5',
  },
  {
    id: 'music-discovery',
    pillar: 'Music Discovery',
    title: 'Underground Gems — June Selection',
    image: 'article-6',
  },
];

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
              href={`#journal/${article.id}`}
              className="journal-card"
            >
              <div className="article-image">
                <div className="image-placeholder">
                  <svg
                    viewBox="0 0 1 1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="1" height="1" fill="currentColor" />
                  </svg>
                  <span>article image</span>
                </div>
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
