import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WORLDS = [
  {
    img: '/images/automotive-tint.png',
    alt: 'Luxury sedan with premium window tint',
    label: 'Automotive',
    title: 'Comfort for every drive.',
    desc: 'Premium film for windshields, side windows, and sunroofs. Reduce cabin heat and protect everyone inside.',
    cta: 'Explore Automotive',
  },
  {
    img: '/images/residential-glass.png',
    alt: 'Modern home with filtered natural light',
    label: 'Residential',
    title: 'Cooler rooms, calmer afternoons.',
    desc: 'Transform your home glass into a barrier against heat and UV without blocking your view or natural light.',
    cta: 'Explore Residential',
  },
  {
    img: '/images/commercial-building.png',
    alt: 'Commercial glass building with window film',
    label: 'Commercial',
    title: 'Better glass performance for modern spaces.',
    desc: 'Reduce cooling costs, improve occupant comfort, and protect interior investments at scale.',
    cta: 'Explore Commercial',
  },
];

export default function ProductWorlds() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.world-card');
      cards.forEach((card) => {
        if (prefersReduced) {
          gsap.set(card, { opacity: 1, y: 0 });
          return;
        }
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="product-worlds" id="products" aria-label="Iris product categories">
      <div className="product-worlds__header">
        <span className="chapter-label">Chapter Five — Product Worlds</span>
        <h2 className="display-md" style={{ color: 'var(--iris-white)', marginBottom: '1rem' }}>
          Protection, Everywhere.
        </h2>
        <p className="body-lg" style={{ maxWidth: 520, margin: '0 auto' }}>
          From your car to your home to the buildings that shape your city —
          Iris works wherever glass meets sun.
        </p>
      </div>
      <div className="product-worlds__grid">
        {WORLDS.map((w, i) => (
          <article key={i} className="world-card">
            <div className="world-card__img">
              <img src={w.img} alt={w.alt} loading="lazy" />
            </div>
            <div className="world-card__overlay" />
            <div className="world-card__content">
              <span className="world-card__label">{w.label}</span>
              <h3 className="world-card__title">{w.title}</h3>
              <p className="world-card__desc">{w.desc}</p>
              <a href="#consultation" className="world-card__cta">
                {w.cta} <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
