import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      if (prefersReduced) {
        gsap.set('.final-cta__content > *', { opacity: 1, y: 0 });
        gsap.set('.final-cta__image-wrapper', { opacity: 1, scale: 1 });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.fromTo('.final-cta__image-wrapper img', 
        { scale: 1.1, filter: 'grayscale(100%) brightness(0.5)' },
        { scale: 1, filter: 'grayscale(100%) brightness(0.8)', duration: 1.5, ease: 'power3.out' },
        0
      );
      
      tl.fromTo('.final-cta__headline', 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, 
        0.2
      );
      
      tl.fromTo('.final-cta__sub', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 
        0.4
      );
      
      tl.fromTo('.final-cta__btn', 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 
        0.6
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="final-cta" id="consultation" aria-label="Get consultation">
      <div className="final-cta__grid">
        <div className="final-cta__image-wrapper">
          <img
            src={`${import.meta.env.BASE_URL}images/calm-ending.png`}
            alt="Peaceful view through tinted window at sunset" 
            loading="lazy" 
          />
        </div>
        <div className="final-cta__content-wrapper">
          <div className="final-cta__content">
            <h2 className="final-cta__headline">
              Step into comfort<br />before the journey begins.
            </h2>
            <p className="final-cta__sub">
              Discover the right Iris film for your car, home, or workspace.
              Our specialists will guide you to the perfect solution.
            </p>
            <div className="final-cta__btn">
              <a href="#" className="btn-red" role="button">
                <span>Get Iris Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
