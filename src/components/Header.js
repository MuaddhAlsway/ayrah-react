import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="announcement-bar">
        <p>Complimentary GCC Shipping on Orders Above 800 SAR</p>
      </div>

      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <nav className="nav">
          <Link to="/" className="nav-logo" onClick={closeMenu}>AYRAH</Link>

          <ul className="nav-links">
            <li><Link to="/collection">Collections</Link></li>
            <li><Link to="/#new-arrivals">New Arrivals</Link></li>
            <li><Link to="/#about">About</Link></li>
            <li><Link to="/#journal">Journal</Link></li>
            <li><Link to="/#contact">Contact</Link></li>
          </ul>

          <div className="nav-right">
            <button className="nav-icon" aria-label="Search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            <button className="nav-icon" aria-label="Account">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </button>
            <button className="nav-icon cart-icon" aria-label="Cart">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              <span className="cart-count">0</span>
            </button>
            <button className={`hamburger${menuOpen ? ' active' : ''}`} onClick={toggleMenu} aria-label="Menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </header>

      <div className={`mobile-menu${menuOpen ? ' active' : ''}`}>
        <button className="mobile-menu-close" onClick={closeMenu} aria-label="Close menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <ul className="mobile-nav-links">
          <li><Link to="/collection" onClick={closeMenu}>Collections</Link></li>
          <li><Link to="/#new-arrivals" onClick={closeMenu}>New Arrivals</Link></li>
          <li><Link to="/#about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/#journal" onClick={closeMenu}>Journal</Link></li>
          <li><Link to="/#contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Header;
