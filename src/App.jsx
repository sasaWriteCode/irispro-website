import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemChapter from './components/ProblemChapter';
import RecognitionChapter from './components/RecognitionChapter';
import IrisLayer from './components/IrisLayer';
import TechnologyProof from './components/TechnologyProof';
import SplitMedia from './components/SplitMedia';
import TestimonialCarousel from './components/TestimonialCarousel';
import BrandTimeline from './components/BrandTimeline';
import CustomerReviews from './components/CustomerReviews';
import StatsCounter from './components/StatsCounter';
import AwardsSection from './components/AwardsSection';
import FinalCTA from './components/FinalCTA';
import FAQPage from './components/FAQPage';
import HistoryPage from './components/HistoryPage';
import TechnologyPage from './components/TechnologyPage';
import NewsPage from './components/NewsPage';
import ProductsAutomotivePage from './components/ProductsAutomotivePage';
import ProductsBuildingPage from './components/ProductsBuildingPage';
import GoogleReviewsPage from './components/GoogleReviewsPage';
import VideoTestimonialsPage from './components/VideoTestimonialsPage';
import FranchisePage from './components/FranchisePage';
import DealershipPage from './components/DealershipPage';
import ProjectsPage from './components/ProjectsPage';
import EsgSolutionPage from './components/EsgSolutionPage';
import './styles/chapters.css'; // triggers build reload for history

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isFAQ = currentRoute.startsWith('#/faq');
  const isHistory = currentRoute.startsWith('#/history');
  const isTechnology = currentRoute.startsWith('#/technology');
  const isNews = currentRoute.startsWith('#/news');
  const isAutomotive = currentRoute.startsWith('#/products/automotive');
  const isBuilding = currentRoute.startsWith('#/products/building');
  const isEsgSolution = currentRoute.startsWith('#/product/building-film/esg-solution');
  const buildingMode = currentRoute.endsWith('/commercial') ? 'commercial' : 'residential';
  const isGoogleReviews = currentRoute.startsWith('#/google-reviews');
  const isVideoTestimonials = currentRoute.startsWith('#/video-testimonials');
  const isFranchise = currentRoute.startsWith('#/franchise');
  const isDealership = currentRoute.startsWith('#/dealership');
  const isProjects = currentRoute.startsWith('#/projects');
  const projectSubMode = currentRoute.endsWith('/commercial')
    ? 'commercial'
    : currentRoute.endsWith('/automotive')
    ? 'automotive'
    : 'residential';

  const isSubpage =
    isFAQ ||
    isHistory ||
    isTechnology ||
    isNews ||
    isAutomotive ||
    isBuilding ||
    isEsgSolution ||
    isGoogleReviews ||
    isVideoTestimonials ||
    isFranchise ||
    isDealership ||
    isProjects;

  // Handle returning from subpages to home section anchors
  useEffect(() => {
    if (!isSubpage && currentRoute && currentRoute.startsWith('#') && !currentRoute.startsWith('#/')) {
      const id = currentRoute.substring(1);
      requestAnimationFrame(() => {
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      });
    }
  }, [currentRoute, isSubpage]);

  // Scroll to top on subpage transitions
  useEffect(() => {
    if (isSubpage) {
      window.scrollTo(0, 0);
    }
  }, [isSubpage]);

  return (
    <>
      <Navbar currentRoute={currentRoute} />
      {isFAQ && <FAQPage />}
      {isHistory && <HistoryPage />}
      {isTechnology && <TechnologyPage />}
      {isNews && <NewsPage />}
      {isAutomotive && <ProductsAutomotivePage />}
      {isBuilding && <ProductsBuildingPage key={buildingMode} initialMode={buildingMode} />}
      {isEsgSolution && <EsgSolutionPage />}
      {isGoogleReviews && <GoogleReviewsPage />}
      {isVideoTestimonials && <VideoTestimonialsPage />}
      {isFranchise && <FranchisePage />}
      {isDealership && <DealershipPage />}
      {isProjects && <ProjectsPage key={projectSubMode} mode={projectSubMode} />}
      {!isSubpage && (
        <main>
          <Hero />
          <ProblemChapter />
          <RecognitionChapter />
          <IrisLayer />
          <TechnologyProof />
          <SplitMedia />
          <TestimonialCarousel />
          <BrandTimeline />
          <CustomerReviews />
          <StatsCounter />
          <AwardsSection />
          <FinalCTA />
        </main>
      )}
      <footer className="footer-dark">
        <div className="footer-dark__container">
          <div className="footer-dark__grid">
            
            {/* Left Column: Logo + Socials */}
            <div className="footer-dark__brand-col">
              <a href="#" className="footer-dark__logo-link">
                <img
                  src={`${import.meta.env.BASE_URL}IP-Logo-White.png`}
                  alt="IrisPro"
                  className="footer-dark__logo"
                />
              </a>
              <p className="footer-dark__brand-tagline">
                Double-patented optical solar films engineered for 100% UV protection and life-long thermal defense.
              </p>
              <div className="footer-dark__socials">
                <span className="footer-dark__socials-label">Follow Us</span>
                <div className="footer-dark__social-icons">
                  <a href="https://facebook.com/irispro.official" target="_blank" rel="noopener noreferrer" className="footer-dark__social-link" aria-label="Facebook">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                    </svg>
                  </a>
                  <a href="https://tiktok.com/@irispro.official" target="_blank" rel="noopener noreferrer" className="footer-dark__social-link" aria-label="TikTok">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.95 1.12 2.27 1.86 3.69 2.06v3.83c-1.63-.09-3.19-.74-4.42-1.81-.04 2.84 0 5.68-.01 8.52-.06 1.85-.7 3.68-1.88 5.11-1.37 1.62-3.48 2.63-5.63 2.69-2.6.09-5.18-1.07-6.72-3.15-1.57-2.12-1.99-4.95-1.12-7.44.82-2.39 2.87-4.22 5.34-4.73.34-.07.69-.11 1.04-.13v3.9c-.11.01-.22.02-.33.04-1.28.21-2.4 1.08-2.92 2.26-.59 1.35-.45 2.99.39 4.19.81 1.15 2.21 1.77 3.59 1.58 1.45-.19 2.67-1.29 2.99-2.71.1-.42.13-.86.12-1.3V.02h.01z" />
                    </svg>
                  </a>
                  <a href="https://youtube.com/@irispro.official" target="_blank" rel="noopener noreferrer" className="footer-dark__social-link" aria-label="YouTube">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Middle Column: Company */}
            <div className="footer-dark__col">
              <h4 className="footer-dark__heading">Company</h4>
              <ul className="footer-dark__links">
                <li><a href="#/history" className="footer-dark__link">About Us</a></li>
                <li><a href="#/history" className="footer-dark__link">Our Manufacturer</a></li>
                <li><a href="#/technology" className="footer-dark__link">Film Technology</a></li>
                <li><a href="#/video-testimonials" className="footer-dark__link">Gallery</a></li>
                <li><a href="#/franchise" className="footer-dark__link">Franchise Program</a></li>
                <li><a href="#/dealership" className="footer-dark__link">Authorized Dealership</a></li>
              </ul>
            </div>

            {/* Middle Column: Online Services */}
            <div className="footer-dark__col">
              <h4 className="footer-dark__heading">Online Services</h4>
              <ul className="footer-dark__links">
                <li>
                  <a href="#" className="footer-dark__link footer-dark__link--icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    <span>SimBiz</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-dark__link footer-dark__link--icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                    <span>Stock Order</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Column: Contact Us Details */}
            <div className="footer-dark__col footer-dark__col--contact">
              <h4 className="footer-dark__heading">Contact Us</h4>
              <ul className="footer-dark__contact-list">
                <li className="footer-dark__contact-item">
                  <svg className="footer-dark__contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <a href="tel:+60182329818" className="footer-dark__contact-link">+6018-232-9818</a>
                </li>
                <li className="footer-dark__contact-item">
                  <svg className="footer-dark__contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>Mon - Sun: 9:00am - 6:00pm</span>
                </li>
                <li className="footer-dark__contact-item">
                  <svg className="footer-dark__contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="footer-dark__address">22G, Jalan Bandar 15, Pusat Bandar Puchong, Selangor</span>
                </li>
              </ul>
              <a href="https://wa.me/60182329818" target="_blank" rel="noopener noreferrer" className="footer-dark__contact-btn">
                <span>WhatsApp Consultation</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            </div>

          </div>

          <div className="footer-dark__divider" />

          {/* Bottom Row */}
          <div className="footer-dark__bottom">
            <p className="footer-dark__copyright">
              © 2026 IrisPro. All rights reserved.
            </p>
            <div className="footer-dark__bottom-links">
              <a href="#/privacy" className="footer-dark__bottom-link">Privacy &amp; Policy</a>
              <a href="#/terms" className="footer-dark__bottom-link">Terms of use</a>
            </div>
            <button 
              className="footer-dark__totop-btn" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Scroll to top"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

