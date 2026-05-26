import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MILESTONES = [
  {
    year: '2015',
    title: 'Founded in Malaysia',
    desc: 'IrisPro is registered and founded, beginning our journey in UV+420 optical solar film manufacturing.',
  },
  {
    year: '2017',
    title: 'Exponential Growth',
    desc: 'Growth in both architectural & automotive industry. Receiving certification and recognition across Malaysia.',
  },
  {
    year: '2019',
    title: 'Going International',
    desc: 'Exporting to Brunei, Singapore, Sri Lanka & India. Expanding the IRISPRO footprint across Southeast Asia.',
  },
  {
    year: '2020',
    title: 'Archidex Award',
    desc: 'Completed projects for Sime Darby, TNB, WCT, KPJ. Recognized at Archidex for architectural innovation.',
  },
  {
    year: '2022',
    title: 'SIRIM Certified',
    desc: 'Fully SIRIM certified. Setting the benchmark for quality assurance in the Malaysian window film industry.',
  },
  {
    year: '2023',
    title: 'The Future',
    desc: 'Continuing to improve & develop higher quality window films. Pushing the boundaries of solar protection technology.',
    isFuture: true,
  },
];

export default function BrandTimeline() {
  const sectionRef = useRef(null);
  const yearRef = useRef(null);
  const feedRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop: Sticky left panel with scroll-scrub year counter
      mm.add('(min-width: 981px)', () => {
        const milestoneEls = gsap.utils.toArray('.brand-timeline__milestone');
        const yearEl = yearRef.current;

        if (!yearEl || milestoneEls.length === 0) return;

        // Fade-in reveal for each milestone
        milestoneEls.forEach((el, i) => {
          if (prefersReduced) {
            gsap.set(el, { opacity: 1, y: 0 });
            return;
          }

          gsap.from(el, {
            opacity: 0,
            y: 60,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          });
        });

        // Year counter scroll-scrub: as each milestone crosses the center,
        // update the giant year display
        milestoneEls.forEach((el, i) => {
          ScrollTrigger.create({
            trigger: el,
            start: 'top 55%',
            end: 'bottom 45%',
            onEnter: () => {
              gsap.to(yearEl, {
                duration: 0.5,
                ease: 'power2.out',
                onStart: () => {
                  yearEl.textContent = MILESTONES[i].year;
                },
                keyframes: [
                  { opacity: 0, y: 30, duration: 0.15 },
                  { opacity: 1, y: 0, duration: 0.35 },
                ],
              });
            },
            onEnterBack: () => {
              gsap.to(yearEl, {
                duration: 0.5,
                ease: 'power2.out',
                onStart: () => {
                  yearEl.textContent = MILESTONES[i].year;
                },
                keyframes: [
                  { opacity: 0, y: -30, duration: 0.15 },
                  { opacity: 1, y: 0, duration: 0.35 },
                ],
              });
            },
          });
        });
      });

      // Mobile: Simple staggered reveals
      mm.add('(max-width: 980px)', () => {
        if (prefersReduced) return;

        const milestoneEls = gsap.utils.toArray('.brand-timeline__milestone');
        milestoneEls.forEach((el) => {
          gsap.from(el, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="brand-timeline"
      id="timeline"
      aria-label="IRISPRO brand history timeline"
    >
      {/* Desktop: Sticky Left Panel with Giant Year Counter */}
      <div className="brand-timeline__sticky-panel">
        <div className="brand-timeline__year-container">
          <span className="brand-timeline__year-label">ESTD.</span>
          <span ref={yearRef} className="brand-timeline__year-number">
            {MILESTONES[0].year}
          </span>
          <span className="brand-timeline__year-tagline">
            IRISPRO — KUALA LUMPUR
          </span>
        </div>
      </div>

      {/* Right Side: Scrollable Editorial Milestone Feed */}
      <div className="brand-timeline__feed" ref={feedRef}>
        {/* Section Header */}
        <div className="brand-timeline__header">
          <span className="brand-timeline__header-label">CHAPTER 07</span>
          <h2 className="brand-timeline__header-title">
            Our <br />
            <span className="brand-timeline__header-title--red">History</span>
          </h2>
        </div>

        {/* Milestone Cards */}
        <div className="brand-timeline__milestones">
          {MILESTONES.map((m, i) => (
            <article
              key={m.year}
              className={`brand-timeline__milestone ${m.isFuture ? 'brand-timeline__milestone--future' : ''}`}
            >
              <div className="brand-timeline__milestone-accent" />
              <div className="brand-timeline__milestone-content">
                <span className="brand-timeline__milestone-year">{m.year}</span>
                <h3 className="brand-timeline__milestone-title">{m.title}</h3>
                <p className="brand-timeline__milestone-desc">{m.desc}</p>
              </div>
              {m.isFuture && (
                <div className="brand-timeline__milestone-arrow">→</div>
              )}
            </article>
          ))}
        </div>

        {/* Bottom Coordinate Branding */}
        <div className="brand-timeline__coordinates">
          <span>03.7499°N / 101.0188°E</span>
          <span>MALAYSIA</span>
        </div>
      </div>
    </section>
  );
}
