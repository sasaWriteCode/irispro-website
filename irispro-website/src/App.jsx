import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemChapter from './components/ProblemChapter';
import RecognitionChapter from './components/RecognitionChapter';
import IrisLayer from './components/IrisLayer';
import TechnologyProof from './components/TechnologyProof';
import ProductWorlds from './components/ProductWorlds';
import TrustSection from './components/TrustSection';
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
        <ProductWorlds />
        <TrustSection />
        <FinalCTA />
      </main>
      <footer className="footer">
        <div className="footer__logo">Iris</div>
        <p className="footer__copy">
          © 2026 Iris Window Film. All rights reserved.
        </p>
      </footer>
    </>
  );
}
