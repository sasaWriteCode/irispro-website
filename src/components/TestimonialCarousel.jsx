import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BASE = import.meta.env.BASE_URL;

const TESTIMONIALS = [
  {
    img: `${BASE}images/residential-glass.png`,
    alt: 'Premium residential window tinting showcase',
    title: 'SERIES 01 / HOME PROJECTS',
    desc: 'Tailored residential heat and UV protection, elevating indoor living comfort.',
    cases: [
      {
        client: 'Sunset Horizon Villa',
        img: `${BASE}images/residential-glass.png`,
        challenge: 'Intense solar heat loading the western-facing floor-to-ceiling living room panels, leading to fading of teak wood floors and high AC energy bills.',
        solution: 'IrisPro Diamond Series for premium luxury residential glass facades.',
        result: 'Solar heat gain reduced by 62%. Wood fading eliminated. Monthly HVAC energy expenses decreased by 18%.'
      },
      {
        client: 'Waterfront Penthouse',
        img: `${BASE}images/residential-glass-2.png`,
        challenge: 'Extreme midday solar glare reflecting off the ocean surface into master bedrooms, causing visual discomfort and early morning sleep disruption.',
        solution: 'IrisPro Apex 70 high-optical-clarity window film.',
        result: 'Visual glare reduced by 75%. Absolute daytime privacy secured. Natural colors preserved.'
      },
      {
        client: 'Eco-Modern Smart Home',
        img: `${BASE}images/iris-comfort.png`,
        challenge: 'Large smart-glass dome causing extreme thermal pockets, making the dining table uncomfortable at midday.',
        solution: 'IrisPro Spectrum-Selective Thermal Film.',
        result: 'Ambient temperature stabilized within 1.5°C variance. Solar heat loading cut by 58%.'
      }
    ]
  },
  {
    img: `${BASE}images/residential-glass-2.png`,
    alt: 'Modern residential high-rise developer development',
    title: 'SERIES 02 / DEVELOPER PROJECTS',
    desc: 'High-performance solar control films for modern developer developments.',
    cases: [
      {
        client: 'Apex Commercial Plaza',
        img: `${BASE}images/commercial-building.png`,
        challenge: 'Continuous high solar radiation loading the multi-story developer glass curtain walls, leading to uneven temperature zones and employee discomfort.',
        solution: 'IrisPro Commercial Architectural Series (Apex 70).',
        result: 'Balanced temperature zones achieved. Solar heat rejection elevated by 55%. Thermal comfort score up 30%.'
      },
      {
        client: 'Skyline Atrium Complex',
        img: `${BASE}images/commercial-building-2.png`,
        challenge: 'Expansive central glass atrium creating a greenhouse heating effect, placing massive thermal cooling pressure on lobby reception areas.',
        solution: 'IrisPro Multi-Layer Nano-Ceramic Atrium Film.',
        result: 'Atrium cooling expenses reduced by 25%. Radiant heat index lowered by 12°C. Optimized check-in experience.'
      },
      {
        client: 'Metropolitan Office Park',
        img: `${BASE}images/commercial-building-panel.png`,
        challenge: 'High visual glare and low glass privacy in ground-level office pods, causing screen reflection and privacy concerns.',
        solution: 'IrisPro Dual-Reflective One-Way Privacy Film.',
        result: 'Glare reduced by 85%. Exterior privacy secured without blocking natural light.'
      }
    ]
  },
  {
    img: `${BASE}images/commercial-building-panel.png`,
    alt: 'Industrial factory thermal window film insulation',
    title: 'SERIES 03 / FACTORY PROJECTS',
    desc: 'Industrial-grade thermal insulation, maximizing work floor energy efficiency.',
    cases: [
      {
        client: 'Precision Robotics Foundry',
        img: `${BASE}images/commercial-building-panel.png`,
        challenge: 'Severe overheating on active assembly floors, lowering operator productivity and causing electronic assembly sensors to drift from ambient temperature.',
        solution: 'IrisPro Heavy-Duty Industrial Shield Series.',
        result: 'Assembly floor ambient temperature reduced by 4.5°C. Electronic sensor stability optimized. Shift comfort ratings up 35%.'
      },
      {
        client: 'Bio-Cleanroom Laboratory',
        img: `${BASE}images/iris-comfort.png`,
        challenge: 'Skylight glass panel solar exposure causing ultraviolet breakdown of chemical compounds and micro-thermal variations in sensitive testing environments.',
        solution: 'IrisPro UV-Max Cleanroom Protective Film.',
        result: '100% Ultraviolet spectrum blocked. Thermal variation eliminated. Product laboratory output increased by 8%.'
      },
      {
        client: 'Logistics Skylight',
        img: `${BASE}images/commercial-building-2.png`,
        challenge: 'Giant factory overhead skylights letting in extreme radiant heat, overheating warehouses and stored items.',
        solution: 'IrisPro Industrial Exterior Shield.',
        result: 'Roof-level heat ingress cut by 68%. HVAC strain reduced by 20%.'
      }
    ]
  },
  {
    img: `${BASE}images/iris-comfort.png`,
    alt: 'High-end university educational building glass design',
    title: 'SERIES 04 / UNIVERSITY PROJECTS',
    desc: 'Cinematic glare reduction for lecture halls and collaborative study spaces.',
    cases: [
      {
        client: 'Centennial Lecture Hall',
        img: `${BASE}images/iris-comfort.png`,
        challenge: 'Intense solar glare blinding high-definition projection screens, creating visual fatigue for students and rendering teaching materials illegible.',
        solution: 'IrisPro Anti-Glare High-Definition Series.',
        result: 'Screen reading contrast elevated by 40%. Direct glare reduced by 85%. Student focus score significantly improved.'
      },
      {
        client: 'Academic Dome Library',
        img: `${BASE}images/residential-glass-2.png`,
        challenge: 'Direct solar dome exposure creating intense midday hot pockets, rendering the top study mezzanine unusable during prime research hours.',
        solution: 'IrisPro Spectrum-Selective Thermal Film.',
        result: 'Midday study area utilization increased by 100%. Mezzanine temperature lowered by 6°C. Overall HVAC load reduced by 15%.'
      },
      {
        client: 'Science Lab Mezzanine',
        img: `${BASE}images/residential-glass.png`,
        challenge: 'Severe thermal variation through large west-facing research lab windows, affecting highly sensitive weighing balances.',
        solution: 'IrisPro Multi-Layer Thermal Stabilizer Film.',
        result: 'Glass thermal transmission reduced by 50%. Micro-balance calibrations stabilized.'
      }
    ]
  },
  {
    img: `${BASE}images/commercial-building-2.png`,
    alt: 'Corporate tower solar control glass cladding',
    title: 'SERIES 05 / TOWER PROJECTS',
    desc: 'High-rise envelope insulation, optimizing solar gains under extreme exposure.',
    cases: [
      {
        client: 'Horizon Financial Tower',
        img: `${BASE}images/commercial-building-2.png`,
        challenge: 'Extreme high-altitude solar exposure, causing continuous HVAC operation and massive cooling energy consumption across the southern facade.',
        solution: 'IrisPro Multi-Layer Tower Shield Series.',
        result: 'HVAC electrical load dropped by 22%. 99.9% UV protection. Annual building carbon emission reduced by 14 tons.'
      },
      {
        client: 'Signature Glass Deck',
        img: `${BASE}images/commercial-building.png`,
        challenge: 'Extreme solar heat in observation spaces, creating high glass touch temperatures and placing high pressure on high-rise air conditioning lines.',
        solution: 'IrisPro Ultimate Premium Solar Film.',
        result: 'Glass surface contact heat reduced by 68%. Air conditioning reliability optimized. Pristine architectural transparency maintained.'
      },
      {
        client: 'Sky-High Penthouse',
        img: `${BASE}images/residential-glass-2.png`,
        challenge: 'Extreme heat load at high altitudes causing occupant discomfort and fading of luxury silk tapestries.',
        solution: 'IrisPro Diamond Series for high-rise residential.',
        result: '99.9% UV rays blocked. Furnishing degradation eliminated.'
      }
    ]
  },
  {
    img: `${BASE}images/commercial-building.png`,
    alt: 'Luxurious hotel glass facade sunset view',
    title: 'SERIES 06 / HOTEL PROJECTS',
    desc: 'Luxurious guest privacy and comfort with state-of-the-art optical clarity.',
    cases: [
      {
        client: 'Grand Imperial Suites',
        img: `${BASE}images/commercial-building.png`,
        challenge: 'Premium hotel guests complaining about visual glare off the harbor and UV fading of luxurious interior silk tapestries and custom suite carpets.',
        solution: 'IrisPro Diamond Series for premium guest suites.',
        result: '100% UV rays blocked. Furnishing degradation eliminated. Guest suite comfort score elevated by 28%.'
      },
      {
        client: 'Oasis Lobby Frontage',
        img: `${BASE}images/residential-glass.png`,
        challenge: 'Severe poolside reflections projecting into the floor-to-ceiling lobby glass reception desk, blinding hotel staff and check-in guests.',
        solution: 'IrisPro Polarized Anti-Reflection Film.',
        result: 'Reception desk glare reduced by 80%. Lobby guest satisfaction rating increased by 32%. Employee visual strain resolved.'
      },
      {
        client: 'Ritz Presidential Dining',
        img: `${BASE}images/residential-glass-2.png`,
        challenge: 'Extreme solar heat loading the glass mezzanine dining area, causing guests to avoid window seating.',
        solution: 'IrisPro Luxury Glass Tinting.',
        result: 'Seat utilization increased by 100%. Mezzanine dining comfort restored.'
      }
    ]
  },
  {
    img: `${BASE}images/automotive-tint.png`,
    alt: 'Luxury sports vehicle featuring IRISPRO automotive tinting',
    title: 'SERIES 07 / AUTOMOTIVE PROJECTS',
    desc: 'Elite heat shield tinting, engineered for luxury automotive driving dynamics.',
    cases: [
      {
        client: 'Honda CR-V',
        img: `${BASE}images/automotive-tint.png`,
        challenge: 'Young family complaining about solar heat rash, side-window sun glare, and direct ultraviolet exposure in rear seats during road trips.',
        solution: 'IrisPro Royal Safety & Thermal Shield for family SUVs.',
        result: 'Zero rear cabin UV exposure. Rear interior cooling improved by 8°C. Family travel comfort rating maximized.'
      },
      {
        client: 'Mazda CX-5',
        img: `${BASE}images/hot-car-exterior.png`,
        challenge: 'Extreme dashboard heat build-up and screen reflections during daily urban commutes, impairing view of center console navigation.',
        solution: 'IrisPro Automotive Royal Diamond Series.',
        result: 'Center console reflection reduced by 80%. Dash temperature dropped by 14°C. Drive visibility optimized.'
      },
      {
        client: 'Tesla Model Y',
        img: `${BASE}images/family-car.png`,
        challenge: 'Giant panoramic glass roof letting in severe overhead solar heat, placing heavy load on EV battery range due to high air conditioner use.',
        solution: 'IrisPro Panoramic Thermal Roof Coating.',
        result: 'Cabin cool-down time accelerated by 40%. Panoramic heat entry reduced by 65%. EV range extended.'
      }
    ]
  }
];

export default function TestimonialCarousel() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [activeMetric, setActiveMetric] = useState('challenge'); // challenge | solution | result

  const handleImageLoad = () => {
    ScrollTrigger.refresh();
  };

  // Lock background scroll when modal is active
  useEffect(() => {
    if (activeProject !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
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
                <div className="project-modal__hotspot-pill">
                  <span className="project-modal__hotspot-dot"></span>
                  <span className="project-modal__hotspot-text">
                    {TESTIMONIALS[activeProject].cases[activeCaseIndex].client}
                  </span>
                  <span className="project-modal__hotspot-arrow">↗</span>
                </div>
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
