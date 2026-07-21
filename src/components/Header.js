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

  return (
    <>
      <div className="announcement-bar">
        <p>Complimentary GCC Shipping on Orders Above 800 SAR</p>
      </div>

      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <nav className="nav">
          <Link to="/" className="nav-logo">AYRAH</Link>

          <ul className="nav-links">
            <li><Link to="/collection">Collections</Link></li>
            <li><Link to="/#new-arrivals">New Arrivals</Link></li>
            <li><Link to="/#about">About</Link></li>
            <li><Link to="/#journal">Journal</Link></li>
            <li><Link to="/#contact">Contact</Link></li>
          </ul>

          <button className={`hamburger${menuOpen ? ' active' : ''}`} onClick={toggleMenu} aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>

      <div className={`mobile-menu${menuOpen ? ' active' : ''}`}>
        <ul className="mobile-nav-links">
          <li><Link to="/collection" onClick={toggleMenu}>Collections</Link></li>
          <li><Link to="/#new-arrivals" onClick={toggleMenu}>New Arrivals</Link></li>
          <li><Link to="/#about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/#journal" onClick={toggleMenu}>Journal</Link></li>
          <li><Link to="/#contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Header;
