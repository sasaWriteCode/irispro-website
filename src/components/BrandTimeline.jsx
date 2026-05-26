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
  const yearRef    = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const yearEl  = yearRef.current;
    if (!section || !yearEl) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ── Year counter: raw scroll listener ────────────────────────────────
    // Reads live card positions on every frame — zero GSAP trigger ambiguity.
    // Active card = the last card whose TOP edge has crossed 80% of viewport
    // (meaning ~20% of the card is visible from the bottom).

    let lastActiveIdx = -2; // sentinel so first tick always evaluates
    let rafId = null;

    const swapYear = (next, dir) => {
      if (yearEl.dataset.current === next) return;
      yearEl.dataset.current = next;

      if (prefersReduced) {
        yearEl.textContent = next;
        return;
      }

      const yOut = dir === 'down' ? -72 : 72;
      const yIn  = dir === 'down' ?  72 : -72;

      gsap.killTweensOf(yearEl);
      gsap.to(yearEl, {
        opacity: 0,
        y: yOut,
        duration: 0.2,
        ease: 'power2.in',
        onComplete() {
          yearEl.textContent = next;
          gsap.fromTo(
            yearEl,
            { opacity: 0, y: yIn },
            { opacity: 1, y: 0, duration: 0.36, ease: 'power3.out' }
          );
        },
      });
    };

    const tick = () => {
      rafId = null;

      // Desktop only — mobile has no sticky panel
      if (window.innerWidth < 769) return;

      const cards  = section.querySelectorAll('.bts__card');
      const cutoff = window.innerHeight * 0.8; // 80% from top

      // Walk all cards; last one whose top ≤ cutoff is the active milestone
      let activeIdx = -1;
      cards.forEach((card, i) => {
        if (card.getBoundingClientRect().top <= cutoff) activeIdx = i;
      });

      if (activeIdx === lastActiveIdx) return;

      const dir = activeIdx > lastActiveIdx ? 'down' : 'up';
      lastActiveIdx = activeIdx;

      // activeIdx −1 = scrolled back above all cards → show first year
      swapYear(
        activeIdx >= 0 ? MILESTONES[activeIdx].year : MILESTONES[0].year,
        dir
      );
    };

    const onScroll = () => {
      if (!rafId) rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    tick(); // evaluate immediately on mount

    // ── Card reveal animations: GSAP ScrollTrigger ───────────────────────
    const ctx = gsap.context(() => {
      if (prefersReduced) return;

      const mm = gsap.matchMedia();

      mm.add('(min-width: 769px)', () => {
        const cards = gsap.utils.toArray('.bts__card');
        cards.forEach((card) => {
          const dot   = card.querySelector('.bts__card-dot');
          const label = card.querySelector('.bts__card-year');
          const title = card.querySelector('.bts__card-title');
          const body  = card.querySelector('.bts__card-body');

          gsap.set(dot,   { opacity: 0, scale: 0 });
          gsap.set(label, { opacity: 0, y: 14 });
          gsap.set(title, { opacity: 0, y: 28 });
          gsap.set(body,  { opacity: 0, y: 18 });

          gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          })
            .to(dot,   { opacity: 1, scale: 1,  duration: 0.3, ease: 'back.out(2)' }, 0)
            .to(label, { opacity: 1, y: 0, duration: 0.4,  ease: 'power2.out'  }, 0.1)
            .to(title, { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out'  }, 0.2)
            .to(body,  { opacity: 1, y: 0, duration: 0.5,  ease: 'power2.out'  }, 0.32);
        });
      });

      mm.add('(max-width: 768px)', () => {
        gsap.utils.toArray('.bts__card').forEach((card) => {
          gsap.from(card, {
            opacity: 0,
            y: 40,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 82%',
              toggleActions: 'play none none reverse',
            },
          });
        });
      });
    }, sectionRef);

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bts"
      id="timeline"
      aria-label="IRISPRO brand history timeline"
    >
      {/* ── Left: Sticky Year Counter ── */}
      <div className="bts__panel">
        <div className="bts__panel-inner">
          <span className="bts__estd">ESTD.</span>
          <div className="bts__year-wrap">
            <span
              ref={yearRef}
              className="bts__year"
              data-current={MILESTONES[0].year}
            >
              {MILESTONES[0].year}
            </span>
          </div>
          <span className="bts__city">KUALA LUMPUR</span>
          <div className="bts__panel-rule" />
          <span className="bts__panel-sub">Since {MILESTONES[0].year}</span>
        </div>
      </div>

      {/* ── Right: Scrolling Editorial Feed ── */}
      <div className="bts__feed">
        <div className="bts__header">
          <span className="bts__header-label">Our History</span>
          <h2 className="bts__header-title">
            A Decade of<br />
            <span className="bts__header-title--red">Optical Innovation</span>
          </h2>
        </div>

        <div className="bts__track">
          {MILESTONES.map((m) => (
            <article
              key={m.year}
              className={`bts__card${m.isFuture ? ' bts__card--future' : ''}`}
            >
              <div className="bts__card-dot" aria-hidden="true" />
              <div className="bts__card-content">
                <span className="bts__card-year">{m.year}</span>
                <h3 className="bts__card-title">{m.title}</h3>
                <p className="bts__card-body">{m.desc}</p>
                {m.isFuture && (
                  <span className="bts__card-future">Ongoing →</span>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="bts__coords">
          <span>03.7499°N / 101.0188°E</span>
          <span>MALAYSIA</span>
        </div>
      </div>
    </section>
  );
}
