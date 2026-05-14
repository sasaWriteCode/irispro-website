import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function IrisLayer() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      if (prefersReduced) {
        gsap.set('.iris-layer__after', { clipPath: 'inset(0 0% 0 0)' });
        gsap.set('.iris-layer__film', { opacity: 0 });
        gsap.set('.iris-layer__headline, .iris-layer__sub, .iris-layer__label-before, .iris-layer__label-after', {
          opacity: 1, y: 0,
        });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.8,
          pin: false,
        },
      });

      // Film sweep
      tl.to('.iris-layer__film', { opacity: 1, duration: 0.05 }, 0);
      tl.to('.iris-layer__after', {
        clipPath: 'inset(0 0% 0 0)',
        duration: 0.6,
        ease: 'none',
      }, 0);

      // Labels
      tl.to('.iris-layer__label-before', { opacity: 1, duration: 0.1 }, 0.05);
      tl.to('.iris-layer__label-after', { opacity: 1, duration: 0.1 }, 0.4);

      // Text
      tl.to('.iris-layer__headline', { opacity: 1, y: 0, duration: 0.15 }, 0.65);
      tl.to('.iris-layer__sub', { opacity: 1, y: 0, duration: 0.15 }, 0.75);

      // Film fades at end
      tl.to('.iris-layer__film', { opacity: 0, duration: 0.1 }, 0.9);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="iris-layer" id="iris-layer" aria-label="Iris protective film layer">
      <div className="iris-layer__sticky">
        {/* Before (harsh) */}
        <div className="iris-layer__before">
          <img src={`${import.meta.env.BASE_URL}images/problem-heat.png`} alt="Harsh unprotected sunlight through glass" loading="lazy" />
        </div>
        {/* After (protected) */}
        <div className="iris-layer__after">
          <img src={`${import.meta.env.BASE_URL}images/iris-comfort.png`} alt="Comfortable interior with Iris film protection" loading="lazy" />
        </div>
        {/* Film line */}
        <div className="iris-layer__film" aria-hidden="true" />
        {/* Labels */}
        <span className="iris-layer__label-before">Unprotected</span>
        <span className="iris-layer__label-after">With Iris</span>
        {/* Text overlay */}
        <div className="iris-layer__content">
          <h2 className="iris-layer__headline">
            Less heat. Less glare.<br />More comfort.
          </h2>
          <p className="iris-layer__sub">
            Iris adds a protective layer between your space and the sun.
            Protection that works quietly, every day.
          </p>
        </div>
      </div>
    </section>
  );
}
