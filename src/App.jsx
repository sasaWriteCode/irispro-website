import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemChapter from './components/ProblemChapter';
import RecognitionChapter from './components/RecognitionChapter';
import IrisLayer from './components/IrisLayer';
import TechnologyProof from './components/TechnologyProof';
import SplitMedia from './components/SplitMedia';
import TestimonialCarousel from './components/TestimonialCarousel';
import BrandTimeline from './components/BrandTimeline';
import FinalCTA from './components/FinalCTA';
import './styles/chapters.css';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemChapter />
        <RecognitionChapter />
        <IrisLayer />
        <TechnologyProof />
        <SplitMedia />
        <TestimonialCarousel />
        <BrandTimeline />
        <FinalCTA />
      </main>
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

