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
        gsap.set('.final-cta__headline, .final-cta__sub, .final-cta__btn', {
          opacity: 1, y: 0,
        });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.to('.final-cta__headline', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, 0);
      tl.to('.final-cta__sub', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.2);
      tl.to('.final-cta__btn', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.4);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="final-cta" id="consultation" aria-label="Get consultation">
      <div className="final-cta__bg">
        <img src="/images/calm-ending.png" alt="Peaceful view through tinted window at sunset" loading="lazy" />
      </div>
      <div className="final-cta__overlay" />
      <div className="final-cta__content">
        <h2 className="final-cta__headline">
          Step into comfort<br />before the journey begins.
        </h2>
        <p className="final-cta__sub">
          Discover the right Iris film for your car, home, or workspace.
          Our specialists will guide you to the perfect solution.
        </p>
        <div className="final-cta__btn">
          <a href="#" className="btn-primary" role="button">
            <span>Get Iris Consultation</span>
          </a>
        </div>
      </div>
    </section>
  );
}
