import React from 'react';
import MagicRings from './MagicRings';
import './Hero.css';

interface HeroProps {
  theme?: 'default' | 'cool' | 'warm';
}

export default function Hero({ theme = 'default' }: HeroProps) {
  const colorMap = {
    default: {
      primary: '#c1633f',
      secondary: '#f3ede4',
    },
    cool: {
      primary: '#4a90e2',
      secondary: '#2e5db8',
    },
    warm: {
      primary: '#d4a574',
      secondary: '#e8c4a0',
    },
  };

  const colors = colorMap[theme];

  return (
    <section className="hero">
      <div className="hero-background">
        <MagicRings
          color={colors.primary}
          colorTwo={colors.secondary}
          ringCount={5}
          speed={0.8}
          attenuation={8}
          lineThickness={2}
          baseRadius={0.25}
          radiusStep={0.12}
          scaleRate={0.08}
          opacity={0.9}
          blur={1}
          noiseAmount={0.05}
          ringGap={1.6}
          fadeIn={0.6}
          fadeOut={0.4}
          followMouse={true}
          mouseInfluence={0.15}
          parallax={0.03}
          clickBurst={true}
        />
      </div>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Designed</h1>
          <h1 className="hero-title hero-title-secondary">To Be Felt.</h1>
        </div>

        <div className="hero-resonance">
          <span className="resonance-word">RESONANCE</span>
        </div>

        <p className="hero-subtitle">
          Immersive deep house experiences.
          <br />
          Powered by beautiful sound.
        </p>

        <div className="hero-cta">
          <a href="#events" className="cta-primary">
            UPCOMING EVENTS
          </a>
          <a href="#about" className="cta-secondary">
            WATCH THE JOURNEY
          </a>
        </div>
      </div>
    </section>
  );
}
