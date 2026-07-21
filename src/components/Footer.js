import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-logo">AYRAH</h3>
            <p className="footer-tagline">Luxury Abaya House</p>
            <p className="footer-description">
              Crafting timeless elegance for the modern woman across Saudi Arabia and the GCC.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Collections</h4>
            <ul>
              <li><Link to="/collection">Signature Collection</Link></li>
              <li><Link to="/collection">Evening Collection</Link></li>
              <li><Link to="/collection">Limited Edition</Link></li>
              <li><Link to="/collection">Ramadan Collection</Link></li>
              <li><Link to="/collection">New Arrivals</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><Link to="/#about">Our Story</Link></li>
              <li><Link to="/#craftsmanship">Craftsmanship</Link></li>
              <li><Link to="/#journal">Journal</Link></li>
              <li><Link to="/#careers">Careers</Link></li>
              <li><Link to="/#press">Press</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Customer Care</h4>
            <ul>
              <li><Link to="/#contact">Contact Us</Link></li>
              <li><Link to="/#shipping">Shipping & Delivery</Link></li>
              <li><Link to="/#returns">Returns & Exchanges</Link></li>
              <li><Link to="/#size-guide">Size Guide</Link></li>
              <li><Link to="/#faq">FAQ</Link></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4>Stay Connected</h4>
            <p>
              Subscribe for exclusive updates and early access to new collections.
            </p>
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 AYRAH Luxury Abaya House. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
