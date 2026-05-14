import { useEffect, useRef, useState } from 'react';
import '../styles/navbar.css';

export default function Navbar() {
  const navRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Show navbar after hero reveal
    const showTimer = setTimeout(() => setVisible(true), 2200);

    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(showTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const cls = `navbar${visible ? ' visible' : ''}${scrolled ? ' scrolled' : ''}`;

  return (
    <nav ref={navRef} className={cls} aria-label="Main navigation">
      <a href="#" className="navbar__logo">
        Iris<span className="navbar__logo-dot"></span>
      </a>
      <ul className="navbar__links">
        <li><a href="#problem" className="navbar__link">The Problem</a></li>
        <li><a href="#iris-layer" className="navbar__link">Protection</a></li>
        <li><a href="#technology" className="navbar__link">Technology</a></li>
        <li><a href="#products" className="navbar__link">Products</a></li>
        <li>
          <a href="#consultation" className="navbar__cta" role="button">
            Get Consultation
          </a>
        </li>
      </ul>
    </nav>
  );
}
