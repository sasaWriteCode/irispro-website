import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../styles/hero.css';

const HERO_STATS = [
  {
    label: 'UV Filter',
    value: 'Protection',
  },
  {
    label: 'Heat Control',
    value: 'Comfort',
  },
  {
    label: 'Glare Reduction',
    value: 'Clarity',
  },
  {
    label: 'Optical Film',
    value: 'Iris',
  },
];

export default function Hero() {
  const heroRef = useRef(null);
  const heroImage = `${import.meta.env.BASE_URL}images/hero-sunlight.png`;

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReduced) {
        gsap.set(
          [
            '.hero__bg-img',
            '.hero__glass',
            '.hero__flare',
            '.hero__eyebrow',
            '.hero__title',
            '.hero__subtitle',
            '.hero__actions',
            '.hero__stat',
            '.hero__scroll',
          ],
          {
            opacity: 1,
            y: 0,
            scale: 1,
          }
        );
        return;
      }

      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
        delay: 0.2,
      });

      tl.fromTo(
        '.hero__bg-img',
        {
          scale: 1.08,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.6,
          ease: 'power2.out',
        },
        0
      );

      tl.fromTo(
        '.hero__glass',
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
        },
        0.25
      );

      tl.fromTo(
        '.hero__flare',
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.4,
        },
        0.45
      );

      tl.fromTo(
        '.hero__eyebrow',
        {
          opacity: 0,
          y: 18,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
        0.75
      );

      tl.fromTo(
        '.hero__title span',
        {
          opacity: 0,
          y: 42,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.08,
        },
        0.95
      );

      tl.fromTo(
        '.hero__subtitle',
        {
          opacity: 0,
          y: 24,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        1.35
      );

      tl.fromTo(
        '.hero__actions',
        {
          opacity: 0,
          y: 18,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
        1.55
      );

      tl.fromTo(
        '.hero__stat',
        {
          opacity: 0,
          y: 18,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.6,
        },
        1.65
      );

      tl.fromTo(
        '.hero__scroll',
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
        },
        2
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="hero" id="hero" aria-label="Iris hero section">
      <div className="hero__bg" aria-hidden="true">
        <img
          className="hero__bg-img"
          src={heroImage}
          alt=""
          loading="eager"
        />
      </div>

      <div className="hero__warmth" aria-hidden="true" />
      <div className="hero__glass" aria-hidden="true" />
      <div className="hero__flare" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow">Iris Window Film</span>

          <h1 className="hero__title">
            <span>The Film</span>
            <span>Between You</span>
            <span>and the Sun.</span>
          </h1>

          <p className="hero__subtitle">
            A protective layer for heat, glare and everyday sunlight exposure —
            designed to make glass feel calmer, clearer and more comfortable.
          </p>

          <div className="hero__actions" aria-label="Hero actions">
            <a className="btn-primary hero__btn-primary" href="#problem">
              <span>Explore the Story</span>
            </a>
            <a className="btn-outline hero__btn-outline" href="#contact">
              Get Consultation
            </a>
          </div>
        </div>

        <div className="hero__data" aria-label="Iris protection highlights">
          {HERO_STATS.map((item) => (
            <div className="hero__stat" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>

      <a className="hero__scroll" href="#problem" aria-label="Scroll to begin story">
        <span className="hero__scroll-text">Begin the sunlight story</span>
        <span className="hero__scroll-line" />
      </a>
    </section>
  );
}