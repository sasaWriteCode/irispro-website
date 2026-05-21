import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BASE = import.meta.env.BASE_URL;

export default function SplitMedia() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReduced) {
        gsap.set('.split-media__text', { opacity: 1, y: 0 });
        gsap.set('.split-media__media-left', { opacity: 1, x: 0 });
        gsap.set('.split-media__media-right', { opacity: 1, x: 0 });
        return;
      }

      // Media columns reveal
      gsap.from('.split-media__media-left', {
        opacity: 0,
        x: -60,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.split-media__grid',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from('.split-media__media-right', {
        opacity: 0,
        x: 60,
        duration: 1.2,
        delay: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.split-media__grid',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      // Editorial text fade in
      gsap.from('.split-media__text', {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.split-media__text',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="split-media"
      id="split-media"
      aria-label="IRISPRO product showcase"
    >
      {/* Split media grid */}
      <div className="split-media__grid">
        <div className="split-media__media-left">
          <img
            src={`${BASE}images/split-media-install.png`}
            alt="Professional IRISPRO window film installation"
            className="split-media__img"
            loading="lazy"
          />
        </div>
        <div className="split-media__media-right">
          <img
            src={`${BASE}images/split-media-building.png`}
            alt="Modern building with IRISPRO window film reflecting golden sunlight"
            className="split-media__img"
            loading="lazy"
          />
        </div>
      </div>

      {/* Editorial text block */}
      <div className="split-media__text-wrapper" style={{ backgroundColor: '#ffffff' }}>
        <p className="split-media__text" style={{ color: '#1a1a1a' }}>
          Sunlight is constant, unforgiving, and often underestimated. Every day, it passes through ordinary glass — bringing heat, glare, UV exposure, and the kind of discomfort that slowly builds without being noticed. The first challenge is simple: protection that actually holds up. This is where IRISPRO begins.
        </p>
      </div>
    </section>
  );
}
