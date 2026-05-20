import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PARAGRAPHS = [
  {
    // text: 'Our founder had seen enough of poor-quality tint products in the market — films that looked good at first, but failed when real protection was needed.',
    text: 'After seeing too many poor-quality tint products in the market, our founder knew the market needed something better.',
    type: 'body',
  },
  {
    text: 'IRISPRO was created with one simple purpose.',
    type: 'hero',
  },
  {
    text: 'Made for people. Built for protection.',
    type: 'body',
  },
  {
    text: 'Not just to make glass look darker, but to build a product that truly care. For daily drivers. For families. For anyone who wants to feel safer, cooler, and more protected every time behind a window.',
    type: 'body',
  },

];

export default function ProblemChapter() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      if (prefersReduced) {
        gsap.set('.problem__word', { opacity: 1, y: 0 });
        gsap.set('.problem__label, .problem__divider', { opacity: 1 });
        return;
      }

      const words = gsap.utils.toArray('.problem__word');
      const totalWords = words.length;

      // Set initial state — words are ghost-visible (dim) for a teaser effect
      gsap.set(words, { opacity: 0.1, y: 8 });
      gsap.set('.problem__label', { opacity: 0, y: -10 });
      gsap.set('.problem__divider', { opacity: 0, scaleX: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.8,
          pin: false,
        },
      });

      // Label + divider fade in first
      tl.to('.problem__label', {
        opacity: 1, y: 0, duration: 0.04, ease: 'power2.out',
      }, 0);

      tl.to('.problem__divider', {
        opacity: 1, scaleX: 1, duration: 0.04, ease: 'power2.out',
      }, 0.02);

      // Each word reveals sequentially across the total scroll
      // Reserve 0.08 of the timeline for the intro (label + divider)
      const wordStart = 0.08;
      const wordEnd = 0.95;
      const wordDuration = (wordEnd - wordStart) / totalWords;

      words.forEach((word, i) => {
        const start = wordStart + i * wordDuration;
        tl.to(word, {
          opacity: 1,
          y: 0,
          duration: wordDuration * 0.7,
          ease: 'power2.out',
        }, start);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="problem" id="problem" aria-label="The origin story of IRISPRO">
      <div className="problem__sticky">
        <div className="problem__bg">
          <img
            src={`${import.meta.env.BASE_URL}images/problem-heat.png`}
            alt="Harsh sunlight through car windshield"
            loading="lazy"
          />
        </div>
        <div className="problem__overlay" />
        <div className="problem__content">
          <span className="problem__label">Our founder wanted better.
          </span>
          <div className="problem__divider" />

          <div className="problem__narrative">
            {PARAGRAPHS.map((para, pIdx) => (
              <p
                key={pIdx}
                className={`problem__paragraph ${para.type === 'hero' ? 'problem__paragraph--hero' : ''
                  }`}
              >
                {para.text.split(' ').map((word, wIdx) => (
                  <span key={`${pIdx}-${wIdx}`} className="problem__word">
                    {word}{' '}
                  </span>
                ))}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
