import { useState, useEffect } from 'react';
import '../styles/projects.css';

const BASE = import.meta.env.BASE_URL;

export const PROJECTS_DATA = {
  residential: {
    breadcrumbsName: 'Residential Projects',
    kicker: 'Residential Portfolios',
    title: 'Residential Window Tinting',
    lead: 'Observe how IrisPro\'s double-patented window films protect luxury estates, private apartments, and modern penthouses against harsh solar rays.',
    cases: [
      {
        client: 'GEM Residences Diamond 30 Window Film',
        img: `${BASE}images/residential-glass.png`,
        challenge: 'The residence experienced strong heat from window views, making the living area warmer and less comfortable during sunny periods.',
        solution: 'IrisPro Diamond 30 was installed to reduce window heat while maintaining a comfortable residential viewing experience.',
        result: 'Reduced heat exposure from large windows and improved daily comfort inside the residence.',
        videoUrl: 'https://www.youtube.com/watch?v=dpeKmab-oVg'
      },
      {
        client: 'Bukit Damansara RayPro 35 Home Installation',
        img: `${BASE}images/residential-glass-2.png`,
        challenge: 'The home was exposed to daily sunlight and heat entering through residential glass areas, affecting indoor comfort.',
        solution: 'IrisPro RayPro 35 was installed as a residential window film solution to manage heat and sunlight exposure.',
        result: 'A cooler and more comfortable home environment with reduced harsh sunlight entering the living space.',
        videoUrl: 'https://www.youtube.com/watch?v=GXH-RDJ4Gh8'
      },
      {
        client: 'Ara Damansara RayPro 35 Home Tinting',
        img: `${BASE}images/iris-comfort.png`,
        challenge: 'The home experienced harsh sunlight exposure, creating glare and discomfort in the living environment.',
        solution: 'IrisPro RayPro 35 was applied to reduce harsh sunlight and improve the comfort of the residential space.',
        result: 'Reduced glare, improved indoor comfort, and a more pleasant living environment for the homeowner.',
        videoUrl: 'https://www.youtube.com/watch?v=IgIXzFooOsE'
      },
      {
        client: 'TTDI Bungalow Diamond 30 Installation',
        img: `${BASE}images/residential-glass.png`,
        challenge: 'The bungalow experienced strong heat entering through glass areas, causing the indoor space to feel hot and uncomfortable.',
        solution: 'IrisPro Diamond 30 was installed to reduce solar heat exposure and improve the home’s comfort level.',
        result: 'Improved thermal comfort and reduced heat entering the residential living space.',
        videoUrl: 'https://www.youtube.com/shorts/IFbfNVLluCI'
      },
      {
        client: 'Damansara Silver Black Privacy Film Installation',
        img: `${BASE}images/residential-glass-2.png`,
        challenge: 'The residence needed better privacy while also reducing harsh sunlight entering the home.',
        solution: 'IrisPro Silver Black privacy tint was installed to provide visual privacy and improve sunlight control.',
        result: 'Enhanced home privacy, improved comfort, and a more luxurious living experience.',
        videoUrl: 'https://www.youtube.com/shorts/4B0zLnfFihY'
      },
      {
        client: 'Diamond 60 Condo Tinting Guide',
        img: `${BASE}images/iris-comfort.png`,
        challenge: 'Some condominiums may reject highly reflective tint due to building management rules or façade appearance concerns.',
        solution: 'IrisPro Diamond 60 was introduced as a condo-friendly window film option designed to balance comfort, visibility, and building appearance requirements.',
        result: 'A more suitable residential tinting solution for condominium owners who need heat reduction without creating management approval issues.',
        videoUrl: 'https://www.youtube.com/watch?v=gfQlMDEkDuE'
      },
      {
        client: 'TTDI Home Heat Control Installation',
        img: `${BASE}images/residential-glass.png`,
        challenge: 'The home experienced heat entering through window connection points and exposed glass areas.',
        solution: 'IrisPro residential building film was used to reduce heat transfer and improve window comfort performance.',
        result: 'Improved heat control and better indoor comfort for the residential space.',
        videoUrl: ''
      },
      {
        client: 'Diamond 30 Residential Tint Review',
        img: `${BASE}images/residential-glass-2.png`,
        challenge: 'Homeowners needed a window film solution that could reduce heat while keeping the home bright, comfortable, and visually pleasant.',
        solution: 'IrisPro Diamond 30 was used as a residential tinting solution to manage heat and sunlight exposure.',
        result: 'Improved home comfort, reduced sunlight intensity, and stronger protection for the living environment.',
        videoUrl: ''
      },
      {
        client: 'Waltz Residences, W City',
        img: `${BASE}images/iris-comfort.png`,
        challenge: 'High-rise residential units can receive strong sunlight through large glass windows, increasing indoor heat and glare.',
        solution: 'IrisPro residential window film was applied to manage solar heat while preserving a comfortable home view.',
        result: 'Improved living comfort and reduced harsh sunlight inside the residence.',
        videoUrl: ''
      },
      {
        client: 'The Park Sky Residence, Bukit Jalil',
        img: `${BASE}images/residential-glass.png`,
        challenge: 'The residence required heat and glare control for large window areas exposed to daily sunlight.',
        solution: 'IrisPro residential building film was used to reduce solar heat and improve indoor comfort.',
        result: 'A more comfortable home environment with reduced sunlight intensity.',
        videoUrl: ''
      },
      {
        client: 'Atria Sofo Suites, Petaling Jaya',
        img: `${BASE}images/residential-glass-2.png`,
        challenge: 'Compact residential or SOFO spaces can become uncomfortable when exposed to strong sunlight through glass panels.',
        solution: 'IrisPro window film was installed to manage heat, glare, and UV exposure.',
        result: 'Improved indoor comfort and better protection for the living or working space.',
        videoUrl: ''
      },
      {
        client: 'Country Heights Bungalow',
        img: `${BASE}images/iris-comfort.png`,
        challenge: 'Large landed homes often have wide glass areas that allow significant sunlight and heat into the interior.',
        solution: 'IrisPro residential window film was applied to reduce heat and improve comfort without major renovation.',
        result: 'A cooler, more comfortable home environment with improved sunlight control.',
        videoUrl: ''
      },
      {
        client: 'Lakefront Residences, Cyberjaya',
        img: `${BASE}images/residential-glass.png`,
        challenge: 'Residential units with open views can experience strong sunlight, heat build-up, and glare during the day.',
        solution: 'IrisPro residential film was installed to improve heat rejection and manage sunlight exposure.',
        result: 'Improved indoor comfort while maintaining the residential view.',
        videoUrl: ''
      },
      {
        client: 'Pavilion Hilltop, Mont Kiara',
        img: `${BASE}images/residential-glass-2.png`,
        challenge: 'Premium high-rise residences require a tinting solution that improves comfort while maintaining a clean and elegant appearance.',
        solution: 'IrisPro residential window film was used to reduce heat and glare while preserving the premium look of the space.',
        result: 'Enhanced living comfort and better sunlight control for the residence.',
        videoUrl: ''
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
        client: 'Menara OCBC Window Film Upgrade',
        img: `${BASE}images/commercial-building.png`,
        challenge: 'Office spaces exposed to strong KL sunlight experienced heat build-up and glare through large glass panels, affecting indoor comfort during working hours.',
        solution: 'IrisPro commercial architectural window film was installed to reduce solar heat and glare while maintaining a clear and professional office environment.',
        result: 'Improved indoor comfort, reduced glare exposure, and a more comfortable working environment for occupants.',
        videoUrl: 'https://www.youtube.com/shorts/cn3yzO8wro8'
      },
      {
        client: 'IKEA MyTOWN Cheras Glass Film Installation',
        img: `${BASE}images/commercial-building-2.png`,
        challenge: 'High glass panels and large façade areas created a challenging installation environment with strong sunlight exposure across the building surface.',
        solution: 'IrisPro performed a commercial building film installation for high glass areas, using professional installation methods suitable for elevated glass panels.',
        result: 'The project demonstrated IrisPro’s capability to handle large-scale and high-position commercial glass installations while improving heat and sunlight control.',
        videoUrl: 'https://www.youtube.com/shorts/9Vd4fDrTlTE'
      },
      {
        client: 'Islamic Arts Museum Malaysia UV Protection Project',
        img: `${BASE}images/commercial-building-panel.png`,
        challenge: 'Museum interiors and displayed items may be exposed to harmful UV rays and strong sunlight entering through glass, creating a risk of fading and long-term material damage.',
        solution: 'IrisPro UV protection building film was applied to reduce UV exposure while preserving natural light and visibility within the museum environment.',
        result: 'Enhanced protection for interiors, displays, and visitors by reducing harmful UV exposure inside the building.',
        videoUrl: 'https://www.youtube.com/shorts/R3n5oe8Sj0w'
      },
      {
        client: 'Islamic Arts Museum Malaysia Building Film Upgrade',
        img: `${BASE}images/iris-comfort.png`,
        challenge: 'A cultural and museum environment required protection from sunlight exposure without compromising the visual quality and visitor experience of the space.',
        solution: 'IrisPro building window film was used to improve UV protection and manage sunlight entering through the glass.',
        result: 'Improved interior protection and a more comfortable visitor environment, while supporting long-term care for museum spaces.',
        videoUrl: 'https://m.youtube.com/shorts/W9KOK-Mp9D8'
      },
      {
        client: 'SBM Offshore Malaysia Office Film Upgrade',
        img: `${BASE}images/commercial-building.png`,
        challenge: 'Office areas exposed to continuous sunlight experienced higher heat gain, creating discomfort and increasing reliance on air-conditioning.',
        solution: 'IrisPro AntiFade 3590 was installed as an office window film solution to reduce heat exposure and improve indoor comfort.',
        result: 'Reduced heat transfer through the glass and improved comfort for office occupants, supporting a more energy-conscious workplace environment.',
        videoUrl: 'https://m.youtube.com/shorts/GdBxXQw7zdU'
      },
      {
        client: 'KL Sentral ESG Office Window Film Upgrade',
        img: `${BASE}images/commercial-building-2.png`,
        challenge: 'The office required a practical way to manage solar heat gain and cooling demand while supporting energy efficiency and ESG-related building improvement goals.',
        solution: 'IrisPro building window film was applied as a passive cooling solution to reduce heat entering through existing glass.',
        result: 'Improved indoor comfort, reduced cooling load potential, and stronger positioning for energy-efficiency and ESG building performance.',
        videoUrl: 'https://m.youtube.com/shorts/Jbal3AVN4DM'
      },
      {
        client: 'Kawan Place Subang Jaya Office Window Film',
        img: `${BASE}images/commercial-building-panel.png`,
        challenge: 'The office environment was affected by heat, brightness, and limited privacy, making the workspace less comfortable for daily operations.',
        solution: 'IrisPro Silver Black UV Film was installed to reduce heat, manage brightness, and improve privacy for the office space.',
        result: 'A more comfortable, private, and visually controlled office environment with reduced sunlight disturbance.',
        videoUrl: 'https://www.youtube.com/watch?v=FgcMIFARY7s'
      },
      {
        client: 'REAL International School Heat & UV Film Installation',
        img: `${BASE}images/iris-comfort.png`,
        challenge: 'Learning areas exposed to sunlight can become hot and uncomfortable, affecting students, teachers, and staff during school hours.',
        solution: 'IrisPro Silver Black Heat + UV Protection Film was applied to help reduce heat and UV exposure inside the school environment.',
        result: 'Improved indoor comfort for learning spaces and added UV protection for students, staff, and interior fittings.',
        videoUrl: ''
      },
      {
        client: 'Berjaya Times Square Hotel Window Film Project',
        img: `${BASE}images/commercial-building.png`,
        challenge: 'Hotel spaces with wide glass exposure can experience heat build-up, glare, and higher cooling demand, affecting guest comfort.',
        solution: 'IrisPro commercial building film was used to manage solar heat and improve indoor comfort within the hospitality environment.',
        result: 'Enhanced guest comfort, reduced harsh sunlight exposure, and better interior protection for hotel spaces.',
        videoUrl: ''
      },
      {
        client: 'Federal Hotel Kuala Lumpur Window Film Project',
        img: `${BASE}images/commercial-building-2.png`,
        challenge: 'Hospitality spaces required better heat and sunlight control to maintain a comfortable indoor environment for guests.',
        solution: 'IrisPro building window film was installed to reduce solar heat and improve indoor comfort.',
        result: 'Improved comfort for hotel occupants and better protection for interior finishes exposed to sunlight.',
        videoUrl: ''
      },
      {
        client: 'Subang Jaya Medical Central',
        img: `${BASE}images/commercial-building-panel.png`,
        challenge: 'Healthcare environments require comfortable indoor spaces while reducing heat and glare for patients, visitors, and staff.',
        solution: 'IrisPro commercial building film was used to manage solar heat and UV exposure across glass areas.',
        result: 'Improved comfort for occupants and better protection for interior spaces exposed to sunlight.',
        videoUrl: ''
      },
      {
        client: 'Faber Castell Subang Jaya',
        img: `${BASE}images/iris-comfort.png`,
        challenge: 'Commercial interiors exposed to sunlight may experience heat build-up, glare, and fading of interior materials.',
        solution: 'IrisPro building window film was applied to reduce heat and protect interiors from sunlight exposure.',
        result: 'Improved workplace comfort and better long-term protection for interior finishes.',
        videoUrl: ''
      },
      {
        client: 'The Summit USJ',
        img: `${BASE}images/commercial-building.png`,
        challenge: 'Large commercial spaces with glass exposure can face heat gain and occupant discomfort during peak sunlight hours.',
        solution: 'IrisPro commercial film was installed to improve solar control and interior comfort.',
        result: 'Reduced sunlight impact and improved indoor comfort for the commercial environment.',
        videoUrl: ''
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
    <div className="product-detail-page projects-page bg-pattern auto-page">
      {/* Hero */}
      <section className="comm-hero bg-pattern">
        <div className="product-section__container">
          <div className="comm-hero__breadcrumbs">
            <a href="#/">Home</a>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span>Projects</span>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-red">{currentCategory.breadcrumbsName}</span>
          </div>
          <div className="max-w-3xl">
            <div className="comm-hero__badge">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span>{currentCategory.kicker}</span>
            </div>
            <h1 className="comm-hero__title">
              <span className="red-gradient">{currentCategory.title.split(' ')[0]}</span>{' '}
              {currentCategory.title.split(' ').slice(1).join(' ')}
            </h1>
            <p className="comm-hero__lead">{currentCategory.lead}</p>
          </div>
        </div>
      </section>

      {/* Featured Spotlight Section */}
      <section className="spotlight-section">
        <div className="product-section__container">
          <div className="comm-section-header">
            <div className="comm-section-header__badge comm-section-header__badge--signature">
              Project Spotlight
            </div>
            <div className="comm-section-header__line comm-section-header__line--signature" />
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
            <div className="comm-section-header__badge comm-section-header__badge--signature">
              Explore More
            </div>
            <div className="comm-section-header__line comm-section-header__line--signature" />
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
