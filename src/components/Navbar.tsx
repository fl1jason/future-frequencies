import React, { useState } from 'react';
import './Navbar.css';

interface NavbarProps {
  theme?: 'default' | 'cool' | 'warm';
}

export default function Navbar({ theme = 'default' }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Autumn Series', href: '/events' },
    { label: 'Our Story', href: '/story' },
    { label: 'Philosophy', href: '#' },
    { label: 'Journal', href: '/journal' },
    { label: 'Contact', href: '#' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <a href="/" className="navbar-logo">
            resonance
          </a>

          {/* Desktop Navigation */}
          <div className="navbar-menu-desktop">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="navbar-link"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMenu}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <button
              className="mobile-menu-close"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              ✕
            </button>
            <nav className="mobile-menu-nav">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="mobile-menu-link"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
