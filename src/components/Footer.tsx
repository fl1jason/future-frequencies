import React from 'react';
import './Footer.css';

interface FooterProps {
  theme?: 'default' | 'cool' | 'warm';
}

export default function Footer({ theme = 'default' }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3 className="footer-title">resonance</h3>
        </div>

        <div className="footer-location">
          <p className="footer-text">Fleet Street Basement, Birmingham UK</p>
        </div>

        <div className="footer-social">
          <a href="#" className="footer-link">
            Instagram
          </a>
          <span className="footer-divider">·</span>
          <a href="#" className="footer-link">
            SoundCloud
          </a>
          <span className="footer-divider">·</span>
          <a href="#" className="footer-link">
            Contact
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          © {currentYear} Future Frequencies. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
