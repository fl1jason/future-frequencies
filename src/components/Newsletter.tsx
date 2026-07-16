import React, { useState } from 'react';
import './Newsletter.css';

interface NewsletterProps {
  theme?: 'default' | 'cool' | 'warm';
}

export default function Newsletter({ theme = 'default' }: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      // Reset after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <h2 className="newsletter-title">Join The Frequency</h2>
        <p className="newsletter-subtitle">
          Early tickets, exclusive mixes, behind-the-scenes content and community updates.
        </p>

        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your email"
            className="newsletter-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="newsletter-button"
            disabled={submitted}
          >
            {submitted ? 'Subscribed ✓' : 'JOIN'}
          </button>
        </form>

        {submitted && (
          <p className="newsletter-success">
            Check your email for confirmation and exclusive content.
          </p>
        )}
      </div>
    </section>
  );
}
