import React from 'react';
import { events } from '@data/events';
import './EventDetails.css';

interface EventDetailsProps {
  eventId: string;
  theme?: 'default' | 'cool' | 'warm';
}

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'What is your refunds policy?',
    answer: 'Tickets are non-refundable. However, you can transfer your ticket to another person by contacting us directly.',
  },
  {
    question: 'How do I get there by train?',
    answer: 'OMNOM Birmingham is located near Birmingham New Street Station. From the station, it\'s approximately a 10-minute walk. Follow signs towards the city center.',
  },
  {
    question: 'What about bus routes?',
    answer: 'Multiple bus routes serve the area around OMNOM. Check TfL journey planner for the most current routes and times to the city center.',
  },
  {
    question: 'What is your safeguarding policy?',
    answer: 'We are committed to providing a safe, inclusive environment. Safeguarding team members are on-site. Report any concerns to staff immediately.',
  },
  {
    question: 'What time should I arrive?',
    answer: 'Doors open 30 minutes before the advertised start time. We recommend arriving early to avoid queues and collect your wristband.',
  },
  {
    question: 'Are there parking facilities?',
    answer: 'Street parking is available in the surrounding area. We recommend using public transport when possible.',
  },
];

export default function EventDetails({ eventId, theme = 'default' }: EventDetailsProps) {
  const event = events.find((e) => e.id === eventId);

  if (!event) {
    return <div className="event-details-error">Event not found</div>;
  }

  return (
    <section className="event-details">
      {/* Hero Section with Main Image */}
      <div className="event-hero">
        <div className="event-hero-image">
          {event.artwork ? (
            <img src={event.artwork} alt={event.title} />
          ) : (
            <div className="image-placeholder">Venue Image</div>
          )}
        </div>
        <div className="event-hero-overlay">
          <h1 className="event-details-title">{event.title}</h1>
        </div>
      </div>

      <div className="event-details-container">
        {/* Main Content Grid */}
        <div className="event-content-grid">
          {/* Left Column: Event Info */}
          <div className="event-info-column">
            {/* Date & Time */}
            <div className="event-meta">
              <div className="meta-item">
                <div className="meta-label">DATE</div>
                <div className="meta-value">{event.dateLabel}</div>
              </div>
              <div className="meta-item">
                <div className="meta-label">TIME</div>
                <div className="meta-value">20:00 — 04:00</div>
              </div>
              <div className="meta-item">
                <div className="meta-label">VENUE</div>
                <div className="meta-value">OMNOM Birmingham</div>
              </div>
            </div>

            {/* Event Description */}
            <div className="event-description">
              <h2 className="section-title">About This Event</h2>
              <p>{event.desc}</p>
            </div>

            {/* Booking CTA */}
            <div className="event-booking">
              <h2 className="section-title">Book Your Ticket</h2>
              <div className="booking-buttons">
                <a href={event.url} className="booking-btn primary">
                  {event.platform.toUpperCase()}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Gallery */}
          <div className="event-gallery-column">
            <div className="gallery-grid">
              <div className="gallery-item">
                <div className="gallery-placeholder">Gallery Image 1</div>
              </div>
              <div className="gallery-item">
                <div className="gallery-placeholder">Gallery Image 2</div>
              </div>
              <div className="gallery-item">
                <div className="gallery-placeholder">Gallery Image 3</div>
              </div>
            </div>
          </div>
        </div>

        {/* Venue Information */}
        <section className="venue-section">
          <h2 className="section-title">Venue Information</h2>
          <div className="venue-details">
            <div className="venue-address">
              <h3>OMNOM Birmingham</h3>
              <p>Fleet Street Basement<br />Birmingham<br />UK</p>
            </div>
            <div className="venue-map">
              <div className="map-placeholder">Map Coming Soon</div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqItems.map((item, index) => (
              <details key={index} className="faq-item">
                <summary className="faq-question">{item.question}</summary>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
