import React from 'react';
import storyImg from '../assets/images/Founded by a soundman from West London.png';
import './About.css';

interface AboutProps {
  theme?: 'default' | 'cool' | 'warm';
}

export default function About({ theme = 'default' }: AboutProps) {
  return (
    <section className="about">
      <div className="about-grid">
        {/* Story Column */}
        <div className="about-story">
          <div className="about-label">The Story</div>
          <h2 className="about-title">Founded by a soundman from West London.</h2>
          <p className="about-body">
            Years spent building sound systems, promoting events and creating unforgettable dancefloor experiences.
            Not chasing celebrity DJs — creating spaces where music is felt.
          </p>
          <p className="about-body">
            Future Frequencies exists because the underground deserves better. Better sound. Better atmosphere. Better community.
            We believe music should move people emotionally and physically. Everything we do serves that mission.
          </p>
          <a href="#" className="about-link">
            READ THE FULL STORY →
          </a>
        </div>

        {/* Image Column */}
        <div className="about-image">
          <img src={storyImg.src} alt="Founded by a soundman from West London" className="story-image" />
        </div>
      </div>
    </section>
  );
}
