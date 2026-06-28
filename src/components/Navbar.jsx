import { useState, useEffect } from 'react';
import '../styles/navbar.css';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

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
    setMobileOpen(prev => {
      const next = !prev;
      if (!next) {
        setOpenDropdown(null);
      }
      return next;
    });
  };

  const handleLinkClick = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (name, e) => {
    if (window.innerWidth < 768) {
      e.preventDefault();
      setOpenDropdown(prev => prev === name ? null : name);
    }
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
        <li className={`navbar__dropdown navbar__dropdown--mega${openDropdown === 'about' ? ' navbar__dropdown--open' : ''}`}>
          <button
            className="navbar__link navbar__dropdown-trigger"
            aria-haspopup="true"
            onClick={(e) => toggleDropdown('about', e)}
          >
            ABOUT
            <svg className="navbar__dropdown-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="navbar__mega-menu">
            <div className="navbar__mega-col">
              <h4 className="navbar__mega-heading">Overview</h4>
              <ul>
                <li><a href="#/history" className="navbar__mega-link" onClick={handleLinkClick}>About Us</a></li>
                <li><a href="#/technology" className="navbar__mega-link" onClick={handleLinkClick}>Technology</a></li>
                <li><a href="#/faq" className="navbar__mega-link" onClick={handleLinkClick}>FAQ</a></li>
              </ul>
            </div>
            <div className="navbar__mega-col">
              <h4 className="navbar__mega-heading">Media</h4>
              <ul>
                <li><a href="#/news" className="navbar__mega-link" onClick={handleLinkClick}>Blog & Updates</a></li>
              </ul>
            </div>
            <div className="navbar__mega-col">
              <h4 className="navbar__mega-heading">Follow Us</h4>
              <ul>
                <li>
                  <a href="https://facebook.com" className="navbar__mega-link navbar__mega-social" target="_blank" rel="noopener noreferrer">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://tiktok.com" className="navbar__mega-link navbar__mega-social" target="_blank" rel="noopener noreferrer">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
                    Tiktok
                  </a>
                </li>
                <li>
                  <a href="https://youtube.com" className="navbar__mega-link navbar__mega-social" target="_blank" rel="noopener noreferrer">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className={`navbar__dropdown navbar__dropdown--mega${openDropdown === 'product' ? ' navbar__dropdown--open' : ''}`}>
          <button
            className="navbar__link navbar__dropdown-trigger"
            aria-haspopup="true"
            onClick={(e) => toggleDropdown('product', e)}
          >
            PRODUCT
            <svg className="navbar__dropdown-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="navbar__mega-menu navbar__mega-menu--product">
            <div className="navbar__mega-col">
              <h4 className="navbar__mega-heading">Product</h4>
              <ul>
                <li><a href="#/products/automotive" className="navbar__mega-link" onClick={handleLinkClick}>Automotive</a></li>
                <li className="navbar__sub-dropdown">
                  <span className="navbar__mega-link navbar__sub-trigger">Building Film</span>
                  <ul className="navbar__sub-menu">
                    <li><a href="#/products/building/residential" className="navbar__sub-link" onClick={handleLinkClick}>Residential</a></li>
                    <li><a href="#/products/building/commercial" className="navbar__sub-link" onClick={handleLinkClick}>Commercial</a></li>
                    <li><a href="#/product/building-film/esg-solution" className="navbar__sub-link" onClick={handleLinkClick}>ESG Solution</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="navbar__mega-col">
              <h4 className="navbar__mega-heading">Warranty</h4>
              <ul>
                <li>
                  <a
                    href="https://ewarranty.irispro.com/#/login"
                    className="navbar__mega-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                  >
                    E-warranty
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className={`navbar__dropdown navbar__dropdown--mega${openDropdown === 'projects' ? ' navbar__dropdown--open' : ''}`}>
          <button
            className="navbar__link navbar__dropdown-trigger"
            aria-haspopup="true"
            onClick={(e) => toggleDropdown('projects', e)}
          >
            PROJECTS
            <svg className="navbar__dropdown-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="navbar__mega-menu navbar__mega-menu--single">
            <div className="navbar__mega-col">
              <ul>
                <li>
                  <a
                    href="#/projects/residential"
                    className="navbar__mega-link"
                    onClick={handleLinkClick}
                  >
                    Residential
                  </a>
                </li>
                <li>
                  <a
                    href="#/projects/commercial"
                    className="navbar__mega-link"
                    onClick={handleLinkClick}
                  >
                    Commercial
                  </a>
                </li>
                <li>
                  <a
                    href="#/projects/automotive"
                    className="navbar__mega-link"
                    onClick={handleLinkClick}
                  >
                    Automotive
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className={`navbar__dropdown navbar__dropdown--mega${openDropdown === 'testimonials' ? ' navbar__dropdown--open' : ''}`}>
          <button
            className="navbar__link navbar__dropdown-trigger"
            aria-haspopup="true"
            onClick={(e) => toggleDropdown('testimonials', e)}
          >
            TESTIMONIALS
            <svg className="navbar__dropdown-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="navbar__mega-menu navbar__mega-menu--single">
            <div className="navbar__mega-col">
              <ul>
                <li><a href="#/google-reviews" className="navbar__mega-link" onClick={handleLinkClick}>Google Reviews</a></li>
                <li><a href="#/video-testimonials" className="navbar__mega-link" onClick={handleLinkClick}>Video Testimonials</a></li>
              </ul>
            </div>
          </div>
        </li>
        <li className={`navbar__dropdown navbar__dropdown--mega${openDropdown === 'apply' ? ' navbar__dropdown--open' : ''}`}>
          <button
            className="navbar__link navbar__dropdown-trigger"
            aria-haspopup="true"
            onClick={(e) => toggleDropdown('apply', e)}
          >
            APPLY
            <svg className="navbar__dropdown-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="navbar__mega-menu navbar__mega-menu--single">
            <div className="navbar__mega-col">
              <ul>
                <li><a href="#/franchise" className="navbar__mega-link" onClick={handleLinkClick}>Franchise</a></li>
                <li><a href="#/dealership" className="navbar__mega-link" onClick={handleLinkClick}>Dealership</a></li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <a href="#consultation" className="navbar__cta" role="button" onClick={handleLinkClick}>
            Get Quote Now
          </a>
        </li>
      </ul>
    </nav>
  );
}
