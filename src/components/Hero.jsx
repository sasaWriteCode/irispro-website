import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../styles/hero.css';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        delay: prefersReduced ? 0 : 0.3,
      });

      if (!prefersReduced) {
        // Background zoom settle
        tl.to('.hero__bg-img', { scale: 1, duration: 2, ease: 'power2.out' }, 0);
        // Flare fade in — float handled by CSS, no infinite JS loop
        tl.to('.hero__flare', {
          opacity: 1, duration: 1.5, ease: 'power1.in',
          onComplete: () => {
            const el = heroRef.current?.querySelector('.hero__flare');
            if (el) el.classList.add('hero__flare--floating');
          },
        }, 0.3);
        // Reflection
        tl.to('.hero__reflection', { opacity: 1, duration: 1.5 }, 0.8);
        // Text reveals
        tl.to('.hero__eyebrow', { opacity: 1, y: 0, duration: 0.8 }, 1);
        tl.to('.hero__title', { opacity: 1, y: 0, duration: 1 }, 1.2);
        tl.to('.hero__subtitle', { opacity: 1, y: 0, duration: 0.8 }, 1.5);
        tl.to('.hero__actions', { opacity: 1, y: 0, duration: 0.8 }, 1.7);
        tl.to('.hero__scroll', { opacity: 1, duration: 0.6 }, 2);
      } else {
        gsap.set(['.hero__bg-img'], { scale: 1 });
        gsap.set(['.hero__flare', '.hero__reflection', '.hero__eyebrow',
          '.hero__title', '.hero__subtitle', '.hero__actions', '.hero__scroll'
        ], { opacity: 1, y: 0 });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="hero" id="hero" aria-label="Hero section">
      <div className="hero__bg">
        <img
          className="hero__bg-img"
          src={`${import.meta.env.BASE_URL}images/hero-sunlight.png`}
          alt="Sunlight reflecting off a luxury car windshield"
          loading="eager"
        />
      </div>
      <div className="hero__tint" />
      <div className="hero__flare" aria-hidden="true" />
      <div className="hero__reflection" aria-hidden="true" />

      <div className="hero__content">
        <span className="hero__eyebrow">Iris Window Film</span>
        <h1 className="hero__title">
          The Film Between You<br /> and the <em>Sun.</em>
        </h1>
        <p className="hero__subtitle">
          Iris transforms ordinary glass into a layer of comfort, clarity, and
          protection — reducing heat, glare, UV exposure, and everyday sunlight
          stress.
        </p>
        <div className="hero__actions">
          <a href="#iris-layer" className="btn-primary" role="button">
            <span>Explore Protection</span>
          </a>
          <a href="#consultation" className="btn-outline" role="button">
            Get Consultation
          </a>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-text">Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
