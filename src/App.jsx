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
import ProductsResidentialPage from './components/ProductsResidentialPage';
import ProductsCommercialPage from './components/ProductsCommercialPage';
import GoogleReviewsPage from './components/GoogleReviewsPage';
import VideoTestimonialsPage from './components/VideoTestimonialsPage';
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
  const isResidential = currentRoute.startsWith('#/products/residential');
  const isCommercial = currentRoute.startsWith('#/products/commercial');
  const isGoogleReviews = currentRoute.startsWith('#/google-reviews');
  const isVideoTestimonials = currentRoute.startsWith('#/video-testimonials');

  const isSubpage =
    isFAQ ||
    isHistory ||
    isTechnology ||
    isNews ||
    isAutomotive ||
    isResidential ||
    isCommercial ||
    isGoogleReviews ||
    isVideoTestimonials;

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
      {isResidential && <ProductsResidentialPage />}
      {isCommercial && <ProductsCommercialPage />}
      {isGoogleReviews && <GoogleReviewsPage />}
      {isVideoTestimonials && <VideoTestimonialsPage />}
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
      <footer className="footer">
        <div className="footer__logo">
          <img
            src={`${import.meta.env.BASE_URL}irispro-logo.png`}
            alt="IrisPro"
            className="footer__logo-img"
          />
        </div>
        <p className="footer__copy">
          © 2026 Iris Window Film. All rights reserved.
        </p>
      </footer>
    </>
  );
}

