import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS_DATA } from './ProjectsPage';

gsap.registerPlugin(ScrollTrigger);

const BASE = import.meta.env.BASE_URL;

const TESTIMONIALS = [
  {
    img: `${BASE}images/residential-glass.png`,
    alt: 'Premium residential window tinting showcase',
    title: 'SERIES 01 / RESIDENTIAL PROJECTS',
    desc: 'Tailored residential heat and UV protection, elevating indoor living comfort.',
    cases: PROJECTS_DATA.residential.cases
  },
  {
    img: `${BASE}images/commercial-building.png`,
    alt: 'Premium commercial solar window film showcase',
    title: 'SERIES 02 / COMMERCIAL PROJECTS',
    desc: 'High-performance solar control films for modern offices, towers, developer developments, hotels, universities, and industrial sites.',
    cases: PROJECTS_DATA.commercial.cases
  },
  {
    img: `${BASE}images/automotive-tint.png`,
    alt: 'Luxury sports vehicle featuring IRISPRO automotive tinting',
    title: 'SERIES 03 / AUTOMOTIVE PROJECTS',
    desc: 'Elite heat shield tinting, engineered for luxury automotive driving dynamics.',
    cases: PROJECTS_DATA.automotive.cases
  }
];

export default function TestimonialCarousel() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [activeMetric, setActiveMetric] = useState('challenge'); // challenge | solution | result

  useEffect(() => {
    const handleOpenProject = (e) => {
      if (e.detail && typeof e.detail.projectIndex === 'number') {
        setActiveCaseIndex(0);
        setActiveMetric('challenge');
        setActiveProject(e.detail.projectIndex);
      }
    };

    window.addEventListener('open-project', handleOpenProject);
    return () => window.removeEventListener('open-project', handleOpenProject);
  }, []);

  const handleImageLoad = () => {
    ScrollTrigger.refresh();
  };

  // Lock background scroll when modal is active
  useEffect(() => {
    if (activeProject !== null) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('project-modal-active');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('project-modal-active');
    }
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('project-modal-active');
    };
  }, [activeProject]);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const track = trackRef.current;
    const section = sectionRef.current;
    if (!track || !section) return;

    let ctx;

    const initScroll = () => {
      if (ctx) ctx.revert();

      ctx = gsap.context(() => {
        // Pinning horizontal scroll on desktop (width >= 1025px) to align with chapters.css (max-width: 1024px)
        ScrollTrigger.matchMedia({
          '(min-width: 1025px)': function () {
            const getScrollAmount = () => {
              return track.scrollWidth - window.innerWidth;
            };

            gsap.to(track, {
              x: () => -getScrollAmount(),
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                pin: true,
                scrub: 0.8,
                start: 'top top',
                end: () => `+=${getScrollAmount()}`,
                invalidateOnRefresh: true,
              },
            });
          },
        });
      }, sectionRef);
    };

    if (document.readyState === 'complete') {
      initScroll();
    } else {
      window.addEventListener('load', initScroll);
    }

    const refreshTimers = [
      setTimeout(() => { initScroll(); ScrollTrigger.refresh(); }, 100),
      setTimeout(() => ScrollTrigger.refresh(), 500),
      setTimeout(() => ScrollTrigger.refresh(), 1200),
      setTimeout(() => ScrollTrigger.refresh(), 2500)
    ];

    return () => {
      window.removeEventListener('load', initScroll);
      refreshTimers.forEach(clearTimeout);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="testimonial-carousel"
      id="testimonials"
      aria-label="IRISPRO Campaign Showcase"
    >
      <div className="testimonial-carousel__track" ref={trackRef}>
        {/* Intro Campaign Typography Card */}
        <article className="testimonial-card testimonial-card--intro">
          <div className="testimonial-card__intro-content">
            <span className="testimonial-card__intro-label">CHALLENGES</span>
            <h2 className="testimonial-card__intro-headline">
              IRISPRO <br />
              IN THE FIELD
            </h2>
            <p className="testimonial-card__intro-paragraph">
              Observing the interaction of advanced window film technology with natural light under real-world pressure.
            </p>
          </div>
        </article>

        {/* Campaign Media Cards */}
        {TESTIMONIALS.map((t, i) => (
          <a
            key={i}
            className="testimonial-card"
            href="#case-study"
            onClick={(e) => {
              e.preventDefault();
              setActiveCaseIndex(0);
              setActiveMetric('challenge');
              setActiveProject(i);
            }}
          >
            <div className="testimonial-card__img-wrapper">
              <img
                src={t.img}
                alt={t.alt}
                className="testimonial-card__img"
                loading="lazy"
                onLoad={handleImageLoad}
              />
            </div>

            {/* Overlay Info */}
            <div className="testimonial-card__overlay">
              <div className="testimonial-card__meta">
                <span className="testimonial-card__title">{t.title}</span>
                <p className="testimonial-card__desc">{t.desc}</p>
              </div>
              <div className="testimonial-card__icon-wrapper">
                <svg
                  className="testimonial-card__icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Immersive Case Study Modal Overlay (Mammut-Inspired Split-Screen Layout) */}
      <div className={`project-modal ${activeProject !== null ? 'is-active' : ''}`}>
        {activeProject !== null && (
          <div className="project-modal__grid">
            {/* LEFT SIDE: Deep Slate-Navy Backdrop Panel (60%) */}
            <div className="project-modal__media-container">

              {/* Media Card Showcase box */}
              <div className="project-modal__showcase-box">
                <img
                  src={TESTIMONIALS[activeProject].cases[activeCaseIndex].img}
                  alt={TESTIMONIALS[activeProject].cases[activeCaseIndex].client}
                  className="project-modal__showcase-img"
                />

                {/* Floating Hotspot Pill Overlay (matches Nordwand logo pill in screenshot) */}
                <a
                  href={TESTIMONIALS[activeProject].cases[activeCaseIndex].youtube || 'https://www.youtube.com'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-modal__hotspot-pill"
                >
                  <span className="project-modal__hotspot-dot"></span>
                  <span className="project-modal__hotspot-text">
                    Click to view
                  </span>
                  <span className="project-modal__hotspot-arrow">↗</span>
                </a>
              </div>

              {/* Metric Selection Pills (Challenge, Solution, Result overlay pills) */}
              <div className="project-modal__metric-pills">
                {['challenge', 'solution', 'result'].map((metric) => (
                  <button
                    key={metric}
                    className={`project-modal__metric-pill ${activeMetric === metric ? 'is-active' : ''}`}
                    onClick={() => setActiveMetric(metric)}
                  >
                    {metric}
                  </button>
                ))}
              </div>

              {/* Dynamic Metric Display Overlay Card */}
              <div className="project-modal__metric-card">
                <span className="project-modal__metric-card-kicker">
                  {activeMetric}
                </span>
                <p className="project-modal__metric-card-text">
                  {TESTIMONIALS[activeProject].cases[activeCaseIndex][activeMetric]}
                </p>
              </div>

            </div>

            {/* RIGHT SIDE: Pure White Sidebar stacked with Vertical Project Case Cards (40%) */}
            <div className="project-modal__sidebar">
              {/* Close Button Header */}
              <div className="project-modal__sidebar-header">
                <span className="project-modal__sidebar-title">
                  {TESTIMONIALS[activeProject].title.split(' / ')[1] || 'CASE PROJECTS'}
                </span>
                <button
                  className="project-modal__close-trigger"
                  onClick={() => {
                    setActiveProject(null);
                    setActiveCaseIndex(0);
                  }}
                  aria-label="Close window"
                >
                  <svg
                    className="project-modal__close-svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              {/* Vertically Scrolling Stacked Case Studies (Matches Google Review layout) */}
              <div className="project-modal__sidebar-list">
                {TESTIMONIALS[activeProject].cases.map((c, idx) => (
                  <button
                    key={idx}
                    className={`project-modal__sidebar-card ${activeCaseIndex === idx ? 'is-active' : ''}`}
                    onClick={() => {
                      setActiveCaseIndex(idx);
                      setActiveMetric('challenge');
                    }}
                  >
                    <div className="project-modal__sidebar-card-img-box">
                      <img
                        src={c.img}
                        alt={c.client}
                        className="project-modal__sidebar-card-img"
                      />
                    </div>
                    <div className="project-modal__sidebar-card-info">
                      <h4 className="project-modal__sidebar-card-title">
                        {c.client}
                      </h4>
                    </div>
                    <div className="project-modal__sidebar-card-divider" />
                  </button>
                ))}
              </div>
            </div>

          </div>
        )}
      </div>
    </section>
  );
}
