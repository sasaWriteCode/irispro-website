import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WORDS = [
  { text: 'HEAT', cls: 'problem__word--heat' },
  { text: 'GLARE', cls: 'problem__word--glare' },
  { text: 'UV', cls: 'problem__word--uv' },
  { text: 'BLUE LIGHT', cls: 'problem__word--blue' },
  { text: 'INTERIOR FADE', cls: 'problem__word--fade' },
  { text: 'SKIN EXPOSURE', cls: 'problem__word--skin' },
];

const DATA = [
  { value: '62°C', label: 'Dashboard Temp' },
  { value: '97%', label: 'UV Penetration' },
  { value: '340nm', label: 'HEV Blue Light' },
  { value: '100%', label: 'Unprotected Glass' },
];

export default function ProblemChapter() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      if (prefersReduced) {
        gsap.set('.problem__intro, .problem__word, .problem__data-item', {
          opacity: 1, y: 0,
        });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          pin: false,
        },
      });

      // Intro text
      tl.to('.problem__intro', { opacity: 1, duration: 0.1 }, 0);

      // Words appear sequentially
      WORDS.forEach((_, i) => {
        tl.to(`.problem__word:nth-child(${i + 1})`, {
          opacity: 1, y: 0, duration: 0.08,
        }, 0.1 + i * 0.1);
      });

      // Data strip
      tl.to('.problem__data-item', {
        opacity: 1, y: 0, duration: 0.1, stagger: 0.03,
      }, 0.7);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="problem" id="problem" aria-label="The invisible problem of sunlight">
      <div className="problem__sticky">
        <div className="problem__bg">

          <img src={`${import.meta.env.BASE_URL}images/problem-heat.png`} alt="Harsh sunlight through car windshield" loading="lazy" />
        </div>
        <div className="problem__overlay" />
        <div className="problem__content">
          <p className="problem__intro">
            Every drive begins with the same invisible pressure.
          </p>
          <div className="problem__words">
            {WORDS.map((w) => (
              <span key={w.text} className={`problem__word ${w.cls}`}>
                {w.text}
              </span>
            ))}
          </div>
          <div className="problem__data-strip">
            {DATA.map((d) => (
              <div key={d.label} className="problem__data-item">
                <div className="problem__data-value">{d.value}</div>
                <div className="problem__data-label">{d.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
