import { useEffect, useRef } from 'react';

import logo01 from '../assets/awards/certification_logo_01.svg';
import logo02 from '../assets/awards/certification_logo_02.svg';
import logo03 from '../assets/awards/certification_logo_03.svg';
import logo04 from '../assets/awards/certification_logo_04.svg';
import logo05 from '../assets/awards/certification_logo_05.svg';
import logo06 from '../assets/awards/certification_logo_06.svg';
import logo07 from '../assets/awards/certification_logo_07.svg';
import logo08 from '../assets/awards/certification_logo_08.svg';
import logo09 from '../assets/awards/certification_logo_09.svg';
import logo10 from '../assets/awards/certification_logo_10.svg';

import certAsiaAutomotive from '../assets/awards/certification/AsiaAutomotiveAward2025.jpg';
import certSirim from '../assets/awards/certification/Sirim-IrisPro.jpg';
import certArchdex from '../assets/awards/certification/archdex.jpg';
import certMtpn from '../assets/awards/certification/mtpn.jpg';

export default function AwardsSection() {
  const sectionRef = useRef(null);
  const weRef = useRef(null);
  const leftParenRef = useRef(null);
  const rightParenRef = useRef(null);
  const gridRef = useRef(null);

  const AWARDS = [
    {
      img: certArchdex,
      alt: 'ARCHIDEX Award',
      detail: 'Recognized at the International Architecture Exhibition for innovation in solar optical film technology.',
    },
    {
      img: certSirim,
      alt: 'SIRIM Certified Quality',
      detail: 'Fully certified by SIRIM Malaysia for rigorous performance, durability, and safety standards.',
    },
    {
      img: certMtpn,
      alt: 'MTPN Consumer Protection Award',
      detail: 'Recognized by the National Consumer Action Council (MTPN) for outstanding business ethics, consumer protection, and service quality.',
    },
    {
      img: certAsiaAutomotive,
      alt: 'Asia Automotive Award 2025',
      detail: 'Awarded at the Asia Automotive Awards 2025 for elite automotive window tinting performance and safety standards.',
    },
  ];

  useEffect(() => {
    const left = leftParenRef.current;
    const right = rightParenRef.current;
    const grid = gridRef.current;
    const we = weRef.current;
    if (!left || !right || !grid || !we) return;

    // ── Initial state (always, before any scroll) ─────────────────────────────
    const isMobile = window.innerWidth <= 768;
    const MAX_X = isMobile ? 30 : 40; // vw

    const applyInitial = () => {
      left.style.transform = `translateX(-${MAX_X}vw)`;
      left.style.opacity = '0';
      right.style.transform = `translateX(${MAX_X}vw)`;
      right.style.opacity = '0';
    };
    applyInitial();

    // ── Skip animation for reduced-motion preference ──────────────────────────
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      left.style.cssText = '';
      right.style.cssText = '';
      return;
    }

    // ── Scroll progress math ──────────────────────────────────────────────────
    // progress = 0  →  bottom of "WE"   touches bottom of viewport
    // progress = 1  →  bottom of grid   touches bottom of viewport
    //
    // Using live getBoundingClientRect():
    //   progress = (vh - we.bottom) / (grid.bottom - we.bottom)
    //
    // Verification:
    //   start: we.bottom = vh  →  (vh - vh) / (grid.bottom - vh) = 0  ✓
    //   end:   grid.bottom = vh →  (vh - we.bottom) / (vh - we.bottom) = 1  ✓

    let targetProgress = 0;   // raw scroll progress
    let smoothProgress = 0;   // lerped progress (slow follow)
    let rafId = null;
    let ticking = false;

    // Lerp factor ~0.04 ≈ scrub: 2 in GSAP (2-second lag at 60fps)
    const LERP = 0.04;

    const applyProgress = (p) => {
      const mx = window.innerWidth <= 768 ? 30 : 40;

      // Brackets move inward
      const leftX = -mx + p * mx;   // –mx vw → 0
      const rightX = mx - p * mx;   //  mx vw → 0
      left.style.transform = `translateX(${leftX}vw)`;
      left.style.opacity = String(Math.min(1, p));
      right.style.transform = `translateX(${rightX}vw)`;
      right.style.opacity = String(Math.min(1, p));
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    // RAF loop — runs continuously so the smooth lerp always catches up
    const tick = () => {
      const diff = Math.abs(smoothProgress - targetProgress);
      if (diff > 0.0002) {
        smoothProgress = lerp(smoothProgress, targetProgress, LERP);
        applyProgress(smoothProgress);
      }
      rafId = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const weRect = we.getBoundingClientRect();
        const gridRect = grid.getBoundingClientRect();
        const vh = window.innerHeight;

        const range = gridRect.bottom - weRect.bottom;
        if (range <= 0) { ticking = false; return; }

        const raw = (vh - weRect.bottom) / range;
        targetProgress = Math.min(1, Math.max(0, raw));
        ticking = false;
      });
    };

    // Start loops
    rafId = requestAnimationFrame(tick);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    // Initial calculation in case awards section is already in view on load
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section ref={sectionRef} className="awards" id="awards" aria-label="IrisPro industry awards and certifications">
      <div className="awards__inner">
        {/* Giant Typographic Statement */}
        <div className="awards__hero">
          <div className="awards__title-stack">
            {/* weRef — scroll anchor: animation begins when bottom of this hits viewport bottom */}
            <span className="awards__title-line" ref={weRef}>WE</span>
            <span className="awards__title-line awards__title-line--paren">
              <span className="awards__paren" ref={leftParenRef}>(</span>
              <span className="awards__text-move">MOVE</span>
              <span className="awards__paren" ref={rightParenRef}>)</span>
            </span>
            <span className="awards__title-line">INDUSTRY</span>
            <span className="awards__title-line">FORWARD</span>
          </div>
        </div>
      </div>

      {/* ── Diagonal Marquee Banners (à la trucknroll.com) ─────────────── */}
      <div className="awards__marquee-wrap">
        {/* Top strip — rotated clockwise, scrolls left */}
        <div className="awards__marquee-strip awards__marquee-strip--top">
          <div className="awards__marquee-track awards__marquee-track--left">
            {[...Array(4)].map((_, i) => (
              <span className="awards__marquee-segment" key={i} aria-hidden={i > 0}>
                <img src={logo01} alt="Award 1" className="awards__marquee-logo" />
                <span className="awards__marquee-dot">●</span>
                <img src={logo02} alt="Award 2" className="awards__marquee-logo" />
                <span className="awards__marquee-dot">●</span>
                <img src={logo03} alt="Award 3" className="awards__marquee-logo" />
                <span className="awards__marquee-dot">●</span>
                <img src={logo04} alt="Award 4" className="awards__marquee-logo" />
                <span className="awards__marquee-dot">●</span>
                <img src={logo05} alt="Award 5" className="awards__marquee-logo" />
                <span className="awards__marquee-dot">●</span>
              </span>
            ))}
          </div>
        </div>

        {/* Bottom strip — rotated counter-clockwise, scrolls right */}
        <div className="awards__marquee-strip awards__marquee-strip--bottom">
          <div className="awards__marquee-track awards__marquee-track--right">
            {[...Array(4)].map((_, i) => (
              <span className="awards__marquee-segment" key={i} aria-hidden={i > 0}>
                <img src={logo06} alt="Award 6" className="awards__marquee-logo" />
                <span className="awards__marquee-dot">●</span>
                <img src={logo07} alt="Award 7" className="awards__marquee-logo" />
                <span className="awards__marquee-dot">●</span>
                <img src={logo08} alt="Award 8" className="awards__marquee-logo" />
                <span className="awards__marquee-dot">●</span>
                <img src={logo09} alt="Award 9" className="awards__marquee-logo" />
                <span className="awards__marquee-dot">●</span>
                <img src={logo10} alt="Award 10" className="awards__marquee-logo" />
                <span className="awards__marquee-dot">●</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="awards__inner">
        {/* Awards grid — endTrigger: animation ends when bottom of this hits viewport bottom */}
        <div className="awards__grid" ref={gridRef}>
          {AWARDS.map((a, i) => (
            <div key={i} className="awards__card">
              <div className="awards__card-img-box">
                <img src={a.img} alt={a.alt} className="awards__card-cert-img" />
              </div>
              <p className="awards__card-detail">{a.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
