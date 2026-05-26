import { useRef, useState } from 'react';
import '../styles/navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);

  const handleEnter = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <nav
      className={`navbar${open ? ' open' : ''}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      aria-label="Main navigation"
    >
      <a href="#" className="navbar__logo">
        <img
          src={`${import.meta.env.BASE_URL}irispro-logo.png`}
          alt="IrisPro"
          className="navbar__logo-img"
        />
      </a>

      <ul className="navbar__links">
        <li><a href="#problem" className="navbar__link">ABOUT</a></li>
        <li><a href="#timeline" className="navbar__link">HISTORY</a></li>
        <li><a href="#technology" className="navbar__link">TECHNOLOGY</a></li>
        <li><a href="#testimonials" className="navbar__link">PROJECTS</a></li>
        <li><a href="#testimonials" className="navbar__link">TESTIMONIALS</a></li>
        <li>
          <a href="#consultation" className="navbar__cta" role="button">
            ENQUIRE
          </a>
        </li>
      </ul>

      {/*
        Lid — hangs below the nav via absolute positioning.
        Because it's INSIDE <nav>, it slides down with the nav on hover.
        pointer-events: all ensures it's hoverable even when nav is above viewport.
      */}
      <div
        className="nav-lid"
        onMouseEnter={handleEnter}
        aria-label="Open navigation"
        role="button"
        tabIndex={0}
        onFocus={handleEnter}
        onBlur={handleLeave}
      >
        <span />
        <span />
      </div>
    </nav>
  );
}
