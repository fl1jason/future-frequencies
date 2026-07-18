import React from 'react';
import './OurStory.css';

interface OurStoryProps {
  theme?: 'default' | 'cool' | 'warm';
}

export default function OurStory({ theme = 'default' }: OurStoryProps) {
  return (
    <section className="our-story">
      {/* Hero Section with Video Placeholder */}
      <div className="story-hero">
        <div className="story-hero-content">
          <div className="story-hero-label">Our Story</div>
          <h1 className="story-hero-title">Founded by a soundman from West London</h1>
          <p className="story-hero-description">
            Building immersive experiences through authentic deep house culture.
          </p>
        </div>
      </div>

      {/* Video Placeholder */}
      <div className="story-video-section">
        <div className="story-video-container">
          <div className="video-placeholder">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            <p>resonance Story — Coming Soon</p>
          </div>
        </div>
      </div>

      {/* Story Content */}
      <div className="story-content-section">
        <div className="story-content-container">
          <article className="story-body">
            <h2 className="story-section-title">The Beginning</h2>
            <p className="story-paragraph">
              resonance was born from a simple belief: that authentic underground culture, crafted with intention and technical precision, can create moments of genuine human connection. Founded by a soundman from West London with decades of experience in the underground scene, resonance emerged as a response to the homogenization of nightlife—a place where quality sound, curated community, and real human connection could thrive.
            </p>

            <h2 className="story-section-title">Sound First Philosophy</h2>
            <p className="story-paragraph">
              At the heart of everything we do is a commitment to sound. Not volume, but quality. Not spectacle, but substance. We invest in professional-grade sound systems that have been meticulously tuned to reproduce deep house music with clarity, warmth, and physicality. Every technical decision exists in service of the listener's experience—to help them feel the music, not just hear it.
            </p>
            <p className="story-paragraph">
              This philosophy extends beyond the audio equipment. It shapes how we select venues, design lighting, curate DJs, and build the overall atmosphere. Everything is in service of creating an environment where sound can be experienced in its purest, most immersive form.
            </p>

            <h2 className="story-section-title">Atmosphere Over Spectacle</h2>
            <p className="story-paragraph">
              We deliberately reject the typical nightclub aesthetic. There are no bottle service tables, no cheesy light shows, no corporate sponsorships overshadowing the experience. Instead, we focus on creating spaces that breathe—warehouses and intimate venues transformed into sanctuaries for authentic deep house culture.
            </p>
            <p className="story-paragraph">
              Lighting is used purposefully to support the music rather than distract from it. Décor is minimal and intentional. The focus remains entirely on the experience of being present with others, dancing to music that moves you, in a space that feels real.
            </p>

            <h2 className="story-section-title">Community First</h2>
            <p className="story-paragraph">
              resonance is built on community, not crowds. We're selective about who joins us because we believe that authentic culture thrives when everyone in the room shares similar values: a love for quality sound, a respect for the music and the craft, and a desire for genuine human connection.
            </p>
            <p className="story-paragraph">
              Our community spans different backgrounds and experiences, united by a shared appreciation for deep house music and intentional, immersive experiences. We've watched friendships form on our dance floors, seen people discover new aspects of themselves through music and movement, and created a space where authenticity is valued over pretense.
            </p>

            <h2 className="story-section-title">The Autumn Series</h2>
            <p className="story-paragraph">
              Each season, we curate the Autumn Series—four chapters that tell a story across the season. Each event is carefully designed, the lineup is hand-selected, and the sound system is perfectly tuned. From EQUINOX's transition into autumn, through HALLOWEEN's darker vibes, to RESONANCE's focus on physical sound, culminating in CONVERGENCE's celebration of community—every chapter has meaning.
            </p>
            <p className="story-paragraph">
              The Autumn Series represents our commitment to depth over superficiality. Rather than random one-off events, we create a narrative arc that invites people to journey with us through the season.
            </p>

            <h2 className="story-section-title">Looking Forward</h2>
            <p className="story-paragraph">
              resonance is more than events—it's a movement. It's about reclaiming underground culture from commercialization and proving that authenticity, quality, and community can still thrive. It's about showing that you don't need mainstream appeal to create meaningful, memorable experiences.
            </p>
            <p className="story-paragraph">
              We're building something that will outlast trends. Something rooted in real passion for sound, respect for the art form, and genuine care for the people who gather with us. This is resonance—where sound first, and community thrives.
            </p>
          </article>

          <aside className="story-sidebar">
            <div className="sidebar-section">
              <h3 className="sidebar-title">Key Values</h3>
              <ul className="values-list">
                <li>Sound First</li>
                <li>Authentic Community</li>
                <li>Intentional Curation</li>
                <li>Quality Over Spectacle</li>
                <li>Real Human Connection</li>
              </ul>
            </div>

            <div className="sidebar-section">
              <h3 className="sidebar-title">What We Stand For</h3>
              <p className="sidebar-text">
                Underground culture. Genuine connection. Precision sound design. Respectful community. Authentic experiences.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
