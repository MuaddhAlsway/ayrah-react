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
