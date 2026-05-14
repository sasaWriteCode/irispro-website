import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: '10 Years', label: 'Warranty Coverage' },
  { value: '99%', label: 'UV Protection' },
  { value: '60%', label: 'Heat Rejection' },
  { value: '15,000+', label: 'Installations' },
  { value: 'IRR', label: 'Certified Films' },
  { value: '4.9★', label: 'Customer Rating' },
];

export default function TrustSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.trust__item');
      items.forEach((item, i) => {
        if (prefersReduced) {
          gsap.set(item, { opacity: 1, y: 0 });
          return;
        }
        gsap.to(item, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: i * 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="trust" id="trust" aria-label="Trust and certifications">
      <div className="trust__header">
        <span className="chapter-label">Chapter Six — Trust</span>
        <h2 className="display-md" style={{ color: 'var(--iris-white)' }}>
          Built on Performance.
        </h2>
      </div>
      <div className="trust__grid">
        {STATS.map((s, i) => (
          <div key={i} className="trust__item">
            <div className="trust__value">{s.value}</div>
            <div className="trust__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
