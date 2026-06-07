import { useState, useEffect } from 'react';

const BASE = import.meta.env.BASE_URL;

const PROJECTS_DATA = {
  residential: {
    breadcrumbsName: 'Residential Projects',
    kicker: 'Residential Portfolios',
    title: 'Residential Window Tinting',
    lead: 'Observe how IrisPro\'s double-patented window films protect luxury estates, private apartments, and modern penthouses against harsh solar rays.',
    cases: [
      {
        client: 'Sunset Horizon Villa',
        img: `${BASE}images/residential-glass.png`,
        challenge: 'Intense solar heat loading the western-facing floor-to-ceiling living room panels, leading to fading of teak wood floors and high AC energy bills.',
        solution: 'IrisPro Diamond Series for premium luxury residential glass facades.',
        result: 'Solar heat gain reduced by 62%. Wood fading eliminated. Monthly HVAC energy expenses decreased by 18%.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      {
        client: 'Waterfront Penthouse',
        img: `${BASE}images/residential-glass-2.png`,
        challenge: 'Extreme midday solar glare reflecting off the ocean surface into master bedrooms, causing visual discomfort and early morning sleep disruption.',
        solution: 'IrisPro Apex 70 high-optical-clarity window film.',
        result: 'Visual glare reduced by 75%. Absolute daytime privacy secured. Natural colors preserved.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      {
        client: 'Eco-Modern Smart Home',
        img: `${BASE}images/iris-comfort.png`,
        challenge: 'Large smart-glass dome causing extreme thermal pockets, making the dining table uncomfortable at midday.',
        solution: 'IrisPro Spectrum-Selective Thermal Film.',
        result: 'Ambient temperature stabilized within 1.5°C variance. Solar heat loading cut by 58%.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      {
        client: 'Sky-High Penthouse',
        img: `${BASE}images/residential-glass-2.png`,
        challenge: 'Extreme heat load at high altitudes causing occupant discomfort and fading of luxury silk tapestries.',
        solution: 'IrisPro Diamond Series for high-rise residential.',
        result: '99.9% UV rays blocked. Furnishing degradation eliminated.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      }
    ]
  },
  commercial: {
    breadcrumbsName: 'Commercial Projects',
    kicker: 'Commercial Portfolios',
    title: 'Commercial Window Tinting',
    lead: 'Explore how IrisPro\'s multi-layer nanotechnology and atomic sputter films secure cooling savings for high-rise offices, hotels, and industrial labs.',
    cases: [
      {
        client: 'Apex Commercial Plaza',
        img: `${BASE}images/commercial-building.png`,
        challenge: 'Continuous high solar radiation loading the multi-story developer glass curtain walls, leading to uneven temperature zones and employee discomfort.',
        solution: 'IrisPro Commercial Architectural Series (Apex 70).',
        result: 'Balanced temperature zones achieved. Solar heat rejection elevated by 55%. Thermal comfort score up 30%.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      {
        client: 'Skyline Atrium Complex',
        img: `${BASE}images/commercial-building-2.png`,
        challenge: 'Expansive central glass atrium creating a greenhouse heating effect, placing massive thermal cooling pressure on lobby reception areas.',
        solution: 'IrisPro Multi-Layer Nano-Ceramic Atrium Film.',
        result: 'Atrium cooling expenses reduced by 25%. Radiant heat index lowered by 12°C. Optimized check-in experience.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      {
        client: 'Metropolitan Office Park',
        img: `${BASE}images/commercial-building-panel.png`,
        challenge: 'High visual glare and low glass privacy in ground-level office pods, causing screen reflection and privacy concerns.',
        solution: 'IrisPro Dual-Reflective One-Way Privacy Film.',
        result: 'Glare reduced by 85%. Exterior privacy secured without blocking natural light.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      {
        client: 'Horizon Financial Tower',
        img: `${BASE}images/commercial-building-2.png`,
        challenge: 'Extreme high-altitude solar exposure, causing continuous HVAC operation and massive cooling energy consumption across the southern facade.',
        solution: 'IrisPro Multi-Layer Tower Shield Series.',
        result: 'HVAC electrical load dropped by 22%. 99.9% UV protection. Annual building carbon emission reduced by 14 tons.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      {
        client: 'Signature Glass Deck',
        img: `${BASE}images/commercial-building.png`,
        challenge: 'Extreme solar heat in observation spaces, creating high glass touch temperatures and placing high pressure on high-rise air conditioning lines.',
        solution: 'IrisPro Ultimate Premium Solar Film.',
        result: 'Glass surface contact heat reduced by 68%. Air conditioning reliability optimized. Pristine architectural transparency maintained.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      {
        client: 'Grand Imperial Suites',
        img: `${BASE}images/commercial-building.png`,
        challenge: 'Premium hotel guests complaining about visual glare off the harbor and UV fading of luxurious interior silk tapestries and custom suite carpets.',
        solution: 'IrisPro Diamond Series for premium guest suites.',
        result: '100% UV rays blocked. Furnishing degradation eliminated. Guest suite comfort score elevated by 28%.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      {
        client: 'Oasis Lobby Frontage',
        img: `${BASE}images/residential-glass.png`,
        challenge: 'Severe poolside reflections projecting into the floor-to-ceiling lobby glass reception desk, blinding hotel staff and check-in guests.',
        solution: 'IrisPro Polarized Anti-Reflection Film.',
        result: 'Reception desk glare reduced by 80%. Lobby guest satisfaction rating increased by 32%. Employee visual strain resolved.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      {
        client: 'Ritz Presidential Dining',
        img: `${BASE}images/residential-glass-2.png`,
        challenge: 'Extreme solar heat loading the glass mezzanine dining area, causing guests to avoid window seating.',
        solution: 'IrisPro Luxury Glass Tinting.',
        result: 'Seat utilization increased by 100%. Mezzanine dining comfort restored.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      {
        client: 'Precision Robotics Foundry',
        img: `${BASE}images/commercial-building-panel.png`,
        challenge: 'Severe overheating on active assembly floors, lowering operator productivity and causing electronic assembly sensors to drift from ambient temperature.',
        solution: 'IrisPro Heavy-Duty Industrial Shield Series.',
        result: 'Assembly floor ambient temperature reduced by 4.5°C. Electronic sensor stability optimized. Shift comfort ratings up 35%.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      {
        client: 'Bio-Cleanroom Laboratory',
        img: `${BASE}images/iris-comfort.png`,
        challenge: 'Skylight glass panel solar exposure causing ultraviolet breakdown of chemical compounds and micro-thermal variations in sensitive testing environments.',
        solution: 'IrisPro UV-Max Cleanroom Protective Film.',
        result: '100% Ultraviolet spectrum blocked. Thermal variation eliminated. Product laboratory output increased by 8%.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      {
        client: 'Logistics Skylight',
        img: `${BASE}images/commercial-building-2.png`,
        challenge: 'Giant factory overhead skylights letting in extreme radiant heat, overheating warehouses and stored items.',
        solution: 'IrisPro Industrial Exterior Shield.',
        result: 'Roof-level heat ingress cut by 68%. HVAC strain reduced by 20%.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      {
        client: 'Centennial Lecture Hall',
        img: `${BASE}images/iris-comfort.png`,
        challenge: 'Intense solar glare blinding high-definition projection screens, creating visual fatigue for students and rendering teaching materials illegible.',
        solution: 'IrisPro Anti-Glare High-Definition Series.',
        result: 'Screen reading contrast elevated by 40%. Direct glare reduced by 85%. Student focus score significantly improved.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      {
        client: 'Academic Dome Library',
        img: `${BASE}images/residential-glass-2.png`,
        challenge: 'Direct solar dome exposure creating intense midday hot pockets, rendering the top study mezzanine unusable during prime research hours.',
        solution: 'IrisPro Spectrum-Selective Thermal Film.',
        result: 'Midday study area utilization increased by 100%. Mezzanine temperature lowered by 6°C. Overall HVAC load reduced by 15%.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      {
        client: 'Science Lab Mezzanine',
        img: `${BASE}images/residential-glass.png`,
        challenge: 'Severe thermal variation through large west-facing research lab windows, affecting highly sensitive weighing balances.',
        solution: 'IrisPro Multi-Layer Thermal Stabilizer Film.',
        result: 'Glass thermal transmission reduced by 50%. Micro-balance calibrations stabilized.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      }
    ]
  },
  automotive: {
    breadcrumbsName: 'Automotive Projects',
    kicker: 'Automotive Portfolios',
    title: 'Automotive Window Tinting',
    lead: 'See the elite heat shield protection applied to high-performance vehicles, everyday commuter cars, and EV panoramics.',
    cases: [
      {
        client: 'Honda CR-V',
        img: `${BASE}images/automotive-tint.png`,
        challenge: 'Young family complaining about solar heat rash, side-window sun glare, and direct ultraviolet exposure in rear seats during road trips.',
        solution: 'IrisPro Royal Safety & Thermal Shield for family SUVs.',
        result: 'Zero rear cabin UV exposure. Rear interior cooling improved by 8°C. Family travel comfort rating maximized.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      {
        client: 'Mazda CX-5',
        img: `${BASE}images/hot-car-exterior.png`,
        challenge: 'Extreme dashboard heat build-up and screen reflections during daily urban commutes, impairing view of center console navigation.',
        solution: 'IrisPro Automotive Royal Diamond Series.',
        result: 'Center console reflection reduced by 80%. Dash temperature dropped by 14°C. Drive visibility optimized.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      {
        client: 'Tesla Model Y',
        img: `${BASE}images/family-car.png`,
        challenge: 'Giant panoramic glass roof letting in severe overhead solar heat, placing heavy load on EV battery range due to high air conditioner use.',
        solution: 'IrisPro Panoramic Thermal Roof Coating.',
        result: 'Cabin cool-down time accelerated by 40%. Panoramic heat entry reduced by 65%. EV range extended.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      }
    ]
  }
};

export default function ProjectsPage({ mode = 'residential' }) {
  const currentCategory = PROJECTS_DATA[mode] || PROJECTS_DATA.residential;
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveCaseIdx(0);
  }, [mode]);

  const activeCase = currentCategory.cases[activeCaseIdx] || currentCategory.cases[0];

  return (
    <div className="product-detail-page projects-page bg-pattern">
      {/* Cinematic Centered Hero */}
      <section className="partner-hero">
        <div className="partner-hero__bg-grid" />
        <div className="partner-hero__inner">
          <div className="partner-hero__breadcrumbs">
            <a href="#/">Home</a>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
            <span>Projects</span>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
            <span className="text-red">{currentCategory.breadcrumbsName}</span>
          </div>

          <div className="partner-hero__badge">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
            </svg>
            <span>{currentCategory.kicker}</span>
          </div>

          <h1 className="partner-hero__title">
            <span className="red-gradient">{currentCategory.title.split(' ')[0]}</span> {currentCategory.title.split(' ').slice(1).join(' ')}
          </h1>
          <p className="partner-hero__lead">{currentCategory.lead}</p>
        </div>
      </section>

      {/* Featured Spotlight Section */}
      <section className="spotlight-section">
        <div className="product-section__container">
          <div className="comm-section-header">
            <div className="comm-section-header__badge" style={{ color: '#d20f18', backgroundColor: 'rgba(210,15,24,0.05)', borderColor: 'rgba(210,15,24,0.1)' }}>
              Project Spotlight
            </div>
            <div className="comm-section-header__line" style={{ background: 'linear-gradient(90deg, rgba(210,15,24,0.2) 0%, transparent 100%)' }} />
            <span className="comm-section-header__text">Featured Case Study</span>
          </div>

          <div className="projects-spotlight">
            {/* Left Column: Spotlight Image */}
            <div className="projects-spotlight__img-box">
              <img
                src={activeCase.img}
                alt={activeCase.client}
                className="projects-spotlight__img"
              />
            </div>

            {/* Right Column: Case Details */}
            <div className="projects-spotlight__details">
              <span className="projects-spotlight__kicker">Client Case Study</span>
              <h2 className="projects-spotlight__title">{activeCase.client}</h2>

              <div className="spotlight-card__stack">
                <div className="spotlight-card__block">
                  <span className="spotlight-card__block-label">The Challenge</span>
                  <p className="spotlight-card__block-text">{activeCase.challenge}</p>
                </div>
                <div className="spotlight-card__block">
                  <span className="spotlight-card__block-label">Our Solution</span>
                  <p className="spotlight-card__block-text">{activeCase.solution}</p>
                </div>
                <div className="spotlight-card__block">
                  <span className="spotlight-card__block-label">The Result</span>
                  <p className="spotlight-card__block-text" style={{ fontWeight: 600, color: 'var(--proj-brand-red)' }}>{activeCase.result}</p>
                </div>
              </div>

              {activeCase.videoUrl && (
                <div className="projects-spotlight__video-row">
                  <a
                    href={activeCase.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects-spotlight__youtube-link"
                  >
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="youtube-icon">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    <span>Watch Video Tour</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid Section */}
      <section className="grid-section">
        <div className="product-section__container">
          <div className="comm-section-header">
            <div className="comm-section-header__badge" style={{ color: '#d20f18', backgroundColor: 'rgba(210,15,24,0.05)', borderColor: 'rgba(210,15,24,0.1)' }}>
              Explore More
            </div>
            <div className="comm-section-header__line" style={{ background: 'linear-gradient(90deg, rgba(210,15,24,0.2) 0%, transparent 100%)' }} />
            <span className="comm-section-header__text">All Category Cases</span>
          </div>

          <div className="projects-grid">
            {currentCategory.cases.map((c, idx) => (
              <button
                key={idx}
                className={`project-case-card ${activeCaseIdx === idx ? 'is-active' : ''}`}
                onClick={() => {
                  setActiveCaseIdx(idx);
                  // Smooth scroll to spotlight
                  const headerEl = document.querySelector('.spotlight-section');
                  if (headerEl) {
                    headerEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                <div className="project-case-card__img-box">
                  <img
                    src={c.img}
                    alt={c.client}
                    className="project-case-card__img"
                    loading="lazy"
                  />
                </div>
                <div className="project-case-card__body">
                  <h3 className="project-case-card__client">{c.client}</h3>
                  <p className="project-case-card__summary">{c.challenge.length > 105 ? c.challenge.substring(0, 105) + '...' : c.challenge}</p>
                  <span className="project-case-card__action">
                    <span>Explore Case</span>
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic Projects CTA Section */}
      <section className="projects-cta-section">
        <div className="product-section__container">
          <div className="projects-cta-card">
            <div className="projects-cta-card__glow" />
            <div className="projects-cta-card__inner">
              {/* Left Column: Heading & Text */}
              <div>
                <span className="proj-cta-badge">
                  <span className="pulse-dot" />
                  <span>Consultation Portal</span>
                </span>
                <h2 className="projects-cta-card__title">
                  Ready to secure<br />your protection?
                </h2>
                <p className="projects-cta-card__desc">
                  Speak with our technical consultants to select the optimal double-patented solar protection film for your vehicle, estate, or commercial property.
                </p>
              </div>

              {/* Right Column: Actions */}
              <div className="projects-cta-actions">
                <a href="https://wa.me/60182329818" target="_blank" rel="noopener noreferrer" className="proj-cta-main-btn">
                  <span>Consult an Expert</span>
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </a>
                <a href="https://wa.me/60182329818" target="_blank" rel="noopener noreferrer" className="proj-cta-sub-btn">
                  <span>Get Free Quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
