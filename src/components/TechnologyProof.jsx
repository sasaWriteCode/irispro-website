import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    icon: '☀️',
    title: 'UV Protection',
    desc: 'Helps reduce harmful ultraviolet exposure through glass — protecting your skin and your passengers.',
  },
  {
    icon: '🌡️',
    title: 'Heat Rejection',
    desc: 'Keeps the cabin or room noticeably more comfortable by blocking infrared energy before it enters.',
  },
  {
    icon: '✦',
    title: 'Glare Control',
    desc: 'Reduces harsh light without dimming the world — drive, work, and live with natural clarity.',
  },
  {
    icon: '🔵',
    title: 'HEV / Blue Light',
    desc: 'Filters high-energy visible light that contributes to eye strain and interior material degradation.',
  },
  {
    icon: '🛡️',
    title: 'Interior Protection',
    desc: 'Prevents fading and cracking of leather, fabric, dashboards, and furnishings exposed to daily sunlight.',
  },
  {
    icon: '◎',
    title: 'Optical Clarity',
    desc: 'Protection without making the world feel dull. Crystal clear outward visibility, day and night.',
  },
];

export default function TechnologyProof() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.tech-card');
      cards.forEach((card) => {
        if (prefersReduced) {
          gsap.set(card, { opacity: 1, y: 0 });
          return;
        }
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="technology" id="technology" aria-label="Iris film technology">
      <div className="technology__header">
        <span className="chapter-label">Chapter Four — Technology</span>
        <h2 className="display-md" style={{ color: 'var(--iris-black)', marginBottom: '1rem' }}>
          Engineered Protection
        </h2>
        <p className="body-lg" style={{ maxWidth: 560, margin: '0 auto', color: 'rgba(10, 10, 10, 0.7)' }}>
          Every Iris film is precision-engineered to perform. Here is what
          it means for you, every day.
        </p>
      </div>
      <div className="technology__grid">
        {FEATURES.map((f, i) => (
          <div key={i} className="tech-card">
            <div className="tech-card__icon">{f.icon}</div>
            <h3 className="tech-card__title">{f.title}</h3>
            <p className="tech-card__desc">{f.desc}</p>
            <div className="tech-card__line" aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  );
}
