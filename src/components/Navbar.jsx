import { useState, useEffect } from 'react';
import '../styles/navbar.css';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileOpen(prev => !prev);
  };

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <nav className={`navbar${mobileOpen ? ' navbar--mobile-open' : ''}${scrolled ? ' navbar--scrolled' : ''}`} aria-label="Main navigation">
      <a href="#" className="navbar__logo" onClick={handleLinkClick}>
        <img
          src={`${import.meta.env.BASE_URL}irispro-logo.png`}
          alt="IrisPro"
          className="navbar__logo-img"
        />
      </a>

      {/* Hamburger button for mobile */}
      <button
        className={`navbar__hamburger${mobileOpen ? ' navbar__hamburger--open' : ''}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={mobileOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`navbar__links${mobileOpen ? ' navbar__links--open' : ''}`}>
        <li><a href="#problem" className="navbar__link" onClick={handleLinkClick}>ABOUT</a></li>
        <li><a href="#timeline" className="navbar__link" onClick={handleLinkClick}>HISTORY</a></li>
        <li><a href="#technology" className="navbar__link" onClick={handleLinkClick}>TECHNOLOGY</a></li>
        <li><a href="#testimonials" className="navbar__link" onClick={handleLinkClick}>PROJECTS</a></li>
        <li><a href="#testimonials" className="navbar__link" onClick={handleLinkClick}>TESTIMONIALS</a></li>
        <li>
          <a href="#consultation" className="navbar__cta" role="button" onClick={handleLinkClick}>
            Get Quote Now
          </a>
        </li>
      </ul>
    </nav>
  );
}
