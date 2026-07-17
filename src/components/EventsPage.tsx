import React from 'react';
import { events, getNextEvent } from '@data/events';
import './EventsPage.css';

interface EventsPageProps {
  theme?: 'default' | 'cool' | 'warm';
}

export default function EventsPage({ theme = 'default' }: EventsPageProps) {
  const nextEvent = getNextEvent();
  const otherEvents = events.filter((e) => e.id !== nextEvent.id);

  return (
    <section className="events-page">
      {/* Hero Section */}
      <div className="events-hero">
        <div className="events-hero-content">
          <div className="events-hero-label">Autumn Series</div>
          <h1 className="events-hero-title">Four Chapters</h1>
          <p className="events-hero-description">
            One evolving story, told across a season. Immersive deep house experiences crafted with intention.
          </p>
        </div>
      </div>

      {/* Next Event Featured */}
      <div className="next-event-section">
        <div className="next-event-container">
          <div className="next-event-label">Next Event</div>
          <div className="featured-event">
            <div className="featured-event-image">
              {nextEvent.artwork ? (
                <img src={nextEvent.artwork} alt={nextEvent.title} />
              ) : (
                <div className="image-placeholder">Event image</div>
              )}
            </div>
            <div className="featured-event-content">
              <div className="featured-event-meta">
                <span className="event-number">{nextEvent.num}</span>
                <span className="event-date">{nextEvent.dateLabel}</span>
              </div>
              <h2 className="featured-event-title">{nextEvent.title}</h2>
              <p className="featured-event-tag">{nextEvent.tag}</p>
              <p className="featured-event-desc">{nextEvent.desc}</p>
              <div className="featured-event-ctas">
                <a
                  href={nextEvent.url}
                  className="btn btn-primary"
                >
                  Buy Tickets — {nextEvent.platform}
                </a>
                <a href={`/events/${nextEvent.id}`} className="btn btn-secondary">
                  Find Out More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Events Grid */}
      <div className="events-grid-section">
        <div className="events-grid-container">
          <h2 className="events-grid-title">Other Chapters</h2>
          <div className="events-grid">
            {otherEvents.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-card-image">
                  {event.artwork ? (
                    <img src={event.artwork} alt={event.title} />
                  ) : (
                    <div className="image-placeholder">Event image</div>
                  )}
                </div>
                <div className="event-card-content">
                  <div className="event-card-meta">
                    <span className="event-number">{event.num}</span>
                    <span className="event-date">{event.dateLabel}</span>
                  </div>
                  <h3 className="event-card-title">{event.title}</h3>
                  <p className="event-card-tag">{event.tag}</p>
                  <p className="event-card-desc">{event.desc}</p>
                  <div className="event-card-ctas">
                    <a
                      href={event.url}
                      className="btn btn-small btn-primary"
                    >
                      Tickets — {event.platform}
                    </a>
                    <a href={`/events/${event.id}`} className="btn btn-small btn-secondary">
                      More Info
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Season Pass CTA */}
      <div className="season-pass-banner">
        <div className="season-pass-content">
          <h2 className="season-pass-title">Experience All Four Chapters</h2>
          <p className="season-pass-description">
            Join us for the complete Autumn Series journey. Priority entry, early access, and the full immersive experience.
          </p>
          <a href="#" className="btn btn-primary btn-lg">
            Get the Season Pass
          </a>
        </div>
      </div>
    </section>
  );
}
