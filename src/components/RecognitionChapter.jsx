import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PANELS = [
  {
    img: `${import.meta.env.BASE_URL}images/hot-car-exterior.png`,
    alt: 'Car baking under harsh tropical sun',
    quote: 'Too hot before the journey starts.',
  },
  {
    img: `${import.meta.env.BASE_URL}images/recognition-squint.png`,
    alt: 'Driver squinting from intense sunlight',
    quote: 'Too bright to feel comfortable.',
  },
  {
    img: `${import.meta.env.BASE_URL}images/family-car.png`,
    alt: 'Family driving in tropical sunlight',
    quote: 'Too invisible to notice — until it affects you.',
  },
];

export default function RecognitionChapter() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      const quotes = gsap.utils.toArray('.recognition__panel-quote');
      quotes.forEach((quote) => {
        if (prefersReduced) {
          gsap.set(quote, { opacity: 1, y: 0 });
          return;
        }
        gsap.to(quote, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: quote.closest('.recognition__panel'),
            start: 'top 70%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="recognition" id="recognition" aria-label="Everyday sunlight scenarios">
      <div className="recognition__panels">
        {PANELS.map((panel, i) => (
          <div key={i} className="recognition__panel">
            <div className="recognition__panel-bg">
              <img src={panel.img} alt={panel.alt} loading="lazy" />
            </div>
            <div className="recognition__panel-overlay" />
            <div className="recognition__panel-text">
              <p className="recognition__panel-quote">{panel.quote}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
