import { useEffect, useRef, Fragment } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PARAGRAPHS = [
  {
    text: (
      <>
        IRISPRO was created with <br />
        only <span style={{ color: 'var(--irispro-red)' }}>ONE</span> simple purpose.
      </>
    ),
    type: 'hero',
  },
  {
    text: 'Made for people. Built for protection.',
    type: 'body',
  },
];

export default function ProblemChapter() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      if (prefersReduced) {
        gsap.set('.problem__paragraph', { opacity: 1, y: 0 });
        gsap.set('.problem__label, .problem__divider', { opacity: 1 });
        return;
      }

      const paragraphs = gsap.utils.toArray('.problem__paragraph');

      // Set initial states
      gsap.set('.problem__label', { opacity: 0, y: -10 });
      gsap.set('.problem__divider', { opacity: 0, scaleX: 0 });
      gsap.set(paragraphs, { opacity: 0, y: 20 });

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
        opacity: 1, y: 0, duration: 0.15, ease: 'power2.out',
      }, 0);

      tl.to('.problem__divider', {
        opacity: 1, scaleX: 1, duration: 0.15, ease: 'power2.out',
      }, 0.05);

      // Paragraph 1 (the hero statement) fades in next
      if (paragraphs[0]) {
        tl.to(paragraphs[0], {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: 'power2.out',
        }, 0.2);
      }

      // Paragraph 2 (the body statement) fades in last
      if (paragraphs[1]) {
        tl.to(paragraphs[1], {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: 'power2.out',
        }, 0.55);
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="problem" id="problem" aria-label="The origin story of IRISPRO">
      <div className="problem__sticky">
        <div className="problem__bg">
          <img
            src={`${import.meta.env.BASE_URL}images/commercial-building-panel.png`}
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
                className={`problem__paragraph ${
                  para.type === 'hero' ? 'problem__paragraph--hero' : ''
                }`}
              >
                {para.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
