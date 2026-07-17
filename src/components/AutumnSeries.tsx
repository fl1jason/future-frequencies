import React, { useState, useEffect } from 'react';
import { events, getNextEvent } from '@data/events';
import './AutumnSeries.css';

interface AutumnSeriesProps {
  theme?: 'default' | 'cool' | 'warm';
}

interface CountdownState {
  days: number;
  hours: string;
  minutes: string;
  seconds: string;
}

export default function AutumnSeries({ theme = 'default' }: AutumnSeriesProps) {
  const [activeChapter, setActiveChapter] = useState(0);
  const [countdown, setCountdown] = useState<CountdownState>({
    days: 0,
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  // Update countdown every second
  useEffect(() => {
    const updateCountdown = () => {
      const nextEvent = getNextEvent();
      const eventDate = new Date(`${nextEvent.date}T20:00:00`).getTime();
      const now = Date.now();
      const diff = Math.max(0, eventDate - now);

      const pad = (n: number) => String(n).padStart(2, '0');

      setCountdown({
        days: Math.floor(diff / 86400000),
        hours: pad(Math.floor((diff % 86400000) / 3600000)),
        minutes: pad(Math.floor((diff % 3600000) / 60000)),
        seconds: pad(Math.floor((diff % 60000) / 1000)),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const activeEvent = events[activeChapter];
  const colorMap = {
    default: '#c1633f',
    cool: '#4a90e2',
    warm: '#d4a574',
  };
  const primaryColor = colorMap[theme];

  return (
    <section className="autumn-series" id="events">
      <div className="autumn-series-container">
        {/* Header */}
        <div className="autumn-series-header">
          <div className="autumn-series-info">
            <div className="autumn-series-label">Autumn Series — Four Chapters</div>
            <h2 className="autumn-series-title">One evolving story, told across a season.</h2>
          </div>

          <div className="autumn-series-countdown">
            <div className="countdown-label">Next chapter in</div>
            <div className="countdown-timer">
              <span className="countdown-value">{countdown.days}</span>
              <span className="countdown-unit">d</span>
              <span className="countdown-value">{countdown.hours}</span>
              <span className="countdown-unit">h</span>
              <span className="countdown-value">{countdown.minutes}</span>
              <span className="countdown-unit">m</span>
              <span className="countdown-value">{countdown.seconds}</span>
              <span className="countdown-unit">s</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="autumn-series-grid">
          {/* Chapters List */}
          <div className="autumn-series-chapters">
            <div className="chapters-list">
              {events.map((event, index) => (
                <button
                  key={event.id}
                  className={`chapter-item ${activeChapter === index ? 'active' : ''}`}
                  onClick={() => setActiveChapter(index)}
                  style={{
                    '--num-color': activeChapter === index ? primaryColor : 'rgba(243, 237, 228, 0.35)',
                    '--title-color': activeChapter === index ? 'rgb(243, 237, 228)' : 'rgba(243, 237, 228, 0.4)',
                  } as React.CSSProperties}
                >
                  <div className="chapter-num">{event.num}</div>
                  <div className="chapter-details">
                    <div className="chapter-title">{event.title}</div>
                    <div className="chapter-date">{event.dateLabel}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Chapter Content */}
          <div className="autumn-series-content">
            {events.map((event, index) => (
              activeChapter === index && (
                <div key={event.id} className="chapter-content active">
                  {/* Artwork */}
                  <div className="chapter-artwork">
                    {event.artwork ? (
                      <img src={event.artwork} alt={event.title} className="event-image" />
                    ) : (
                      <div className="artwork-placeholder">
                        <svg viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg">
                          <rect width="1" height="1" fill="currentColor" />
                        </svg>
                        <span>event artwork — {event.title}</span>
                      </div>
                    )}
                  </div>

                  {/* Event Details */}
                  <div className="chapter-details-panel">
                    <div className="event-tag">{event.tag}</div>
                    <p className="event-description">{event.desc}</p>
                    <div className="event-cta-group">
                      <a href={event.url} className="event-cta" style={{ '--cta-color': primaryColor } as React.CSSProperties}>
                        TICKETS — {event.platform} →
                      </a>
                      <a href={`/events/${event.id}`} className="event-cta secondary" style={{ '--cta-color': primaryColor } as React.CSSProperties}>
                        FIND OUT MORE →
                      </a>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Season Pass */}
        <div className="season-pass" style={{ '--primary-color': primaryColor } as React.CSSProperties}>
          <div className="season-pass-info">
            <h3 className="season-pass-title">Season Pass</h3>
            <p className="season-pass-desc">All four chapters · Priority entry · Early access</p>
          </div>
          <a href="#" className="season-pass-cta">
            GET THE SEASON PASS
          </a>
        </div>
      </div>
    </section>
  );
}
