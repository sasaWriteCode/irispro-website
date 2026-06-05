import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BRANCHES = [
  {
    id: 'puchong',
    name: 'IRISPRO PUCHONG',
    state: 'Selangor',
    address: '22G, Jalan Bandar 15, Pusat Bandar Puchong, 47160 Puchong, Selangor',
    hours: 'Monday to Sunday (except holidays) 9.00am-6.00pm',
    phone: '+6018-232-9818',
    x: 180,
    y: 280
  },
  {
    id: 'setia-alam',
    name: 'IRISPRO SETIA ALAM',
    state: 'Selangor',
    address: '57, Jalan Eco Ardence C U12/36C, Eco Ardence Seksyen U12, Setia Alam, 40170 Shah Alam, Selangor',
    hours: 'Monday to Saturday (except holidays) 9.00am-6.00pm',
    phone: '+6018-232-9818',
    x: 165,
    y: 270
  },
  {
    id: 'penang',
    name: 'IRISPRO PENANG',
    state: 'Pulau Pinang',
    address: '1, #1, 9, Lebuh Bukit Kecil 6, 11900 Bayan Lepas, Pulau Pinang',
    hours: 'Monday to Saturday (except holidays) 9.00am-6.00pm',
    phone: '+6012-249 7313',
    x: 120,
    y: 140
  },
  {
    id: 'kuching',
    name: 'IRISPRO KUCHING',
    state: 'Sarawak',
    address: 'No.23, Lot 8636, Jalan Simpang Tiga, Kampung Kenyalang Park, 93300 Kuching, Sarawak',
    hours: 'Monday to Sunday (include public holiday) 9.00am-6.00pm',
    phone: '+6016-690 0100',
    x: 580,
    y: 350
  },
  {
    id: 'miri',
    name: 'IRISPRO MIRI',
    state: 'Sarawak',
    address: 'Lot 1231, Ground Floor, Centre Point Commercial Centre, Jalan Melayu 98000 Miri, Sarawak, Malaysia',
    hours: 'Monday to Sunday (include public holiday) 9.00am-6.00pm',
    phone: '+60 16-690 0100',
    x: 720,
    y: 230
  },
  {
    id: 'sitiawan',
    name: 'IRISPRO SITIAWAN & MANJUNG',
    state: 'Perak',
    address: '102, JALAN LUMUT, TAMAN BUNGA ROS, 32000 SITIAWAN, PERAK',
    hours: 'Monday to Saturday (except Sunday) 10.00am-6.00pm',
    phone: '+60 11-5898 0868',
    x: 145,
    y: 210
  },
  {
    id: 'jb',
    name: 'IRISPRO JOHOR BAHRU',
    state: 'Johor',
    address: 'Pusat Perdagangan, 46, Jalan Kebun Teh 1, Kebun Teh, 80250 Johor Bahru, Johor',
    hours: 'Monday to Saturday (except Sunday) 10.00am-6.00pm',
    phone: '+60 17-360 7660',
    x: 275,
    y: 395
  },
  {
    id: 'seremban',
    name: 'IRISPRO SEREMBAN',
    state: 'Negeri Sembilan',
    address: 'NO.8 JALAN ERA SQUARE 2, ERA SQUARE, 70200 SEREMBAN, NEGERI SEMBILAN',
    hours: 'Monday to Saturday (except Sunday) 9.00am-6.00pm',
    phone: '06-7688836',
    x: 205,
    y: 310
  },
  {
    id: 'ipoh',
    name: 'IRISPRO IPOH',
    state: 'Perak',
    address: '82A-A, Jln. Kuala Kangsar, Taman Pelangi, 30010 Ipoh, Perak',
    hours: 'Monday to Sunday (include public holiday) 9.30am-6.00pm',
    phone: '+60 10-273 8200',
    x: 160,
    y: 190
  },
  {
    id: 'kd',
    name: 'IRISPRO KOTA DAMANSARA',
    state: 'Selangor',
    address: '6, Jalan PJU 5/20b, Kota Damansara, 47810 Petaling Jaya, Selangor',
    hours: 'Monday to Saturday (except Sunday) 9.00am-6.00pm',
    phone: '+6018-232-9818',
    x: 175,
    y: 260
  }
];

const MILESTONES = [
  {
    year: '2015',
    title: 'The Foundation',
    subtitle: 'Established in Malaysia & Singapore',
    desc: 'IrisPro was founded under the absolute principle: "Environment and Customer Safety Comes First". Guided by this vision, we set out to redefine window film safety in tropical Southeast Asia.',
    tags: ['Safety First', 'Founded']
  },
  {
    year: '2016',
    title: 'Patented R&D',
    subtitle: 'Solving the Durability Crisis',
    desc: 'While ordinary films deteriorate and lose performance within 6 to 12 months, IrisPro engineers a unique patented technology. We deliver a solar film that blocks 100% UV & 99% HEV blue light (380nm - 420nm), guaranteed to remain fully active for at least 10 years.',
    tags: ['10-Year Protection', 'Double Patented']
  },
  {
    year: '2017',
    title: 'Regional Breakthrough',
    subtitle: '1st Tint Brand Approved in Brunei',
    desc: "Powered by our patented technology, IrisPro successfully penetrates Brunei's market, becoming the first window tinting company officially approved by the Brunei government.",
    tags: ['Government Approved', 'Market Leader']
  },
  {
    year: '2019+',
    title: 'Global Horizon',
    subtitle: 'Expanding the Shield Internationally',
    desc: 'Our footprint expands across borders. IrisPro goes live in Indonesia, India, Thailand, and Sri Lanka, with active launches underway in Cambodia, Vietnam, and Australia.',
    tags: ['Southeast Asia', 'Australia', 'Global Expansion']
  }
];

export default function HistoryPage() {
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const [activeStore, setActiveStore] = useState(BRANCHES[0]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Parallax animation
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Hero background image parallax
      gsap.to('.history-hero__bg-img', {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });

      // Heavier parallax on family-car.png image
      gsap.fromTo('.history-story__image', {
        yPercent: -20,
        scale: 1.25
      }, {
        yPercent: 20,
        scale: 1.25,
        ease: 'none',
        scrollTrigger: {
          trigger: '.history-story__image-wrapper',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="history-page">
      {/* Background glow visual decorations */}
      <div className="history-page__bg-glow" />
      <div className="history-page__bg-grid" />

      {/* Cinematic Hero */}
      <section ref={heroRef} className="history-hero">
        <img
          src={`${import.meta.env.BASE_URL}images/history_page_hero.png`}
          alt="History Hero"
          className="history-hero__bg-img"
        />
        <div className="history-hero__inner">
          <h1 className="history-hero__title">
            Tinted
            <br />
            <span className="history-hero__title--red">But better.</span>
          </h1>
          <p className="history-hero__lead">
            Our goal is to make Malaysia better. Take care of community, take care of each other.
          </p>
          <div className="history-hero__indicator">
            <span className="history-hero__scroll-text">Scroll to Explore Our Story</span>
            <div className="history-hero__scroll-line" />
          </div>
        </div>
      </section>

      {/* Editorial Story block: The Threat & The Promise */}
      <section className="history-story">
        <div className="history-story__container">
          <div className="history-story__header">
            <span className="history-story__kicker">WHAT WE BELIEVE</span>
            <blockquote className="history-story__quote">
              Tinting isn't something you want for comfort. It's something that merge into lifestyle, just like sunscreen protection, and for earth. Because it is daily consume item, that's why we set the standard bar high.
            </blockquote>
          </div>
          <div className="history-story__content-grid">
            <div className="history-story__image-wrapper">
              <img
                src={`${import.meta.env.BASE_URL}images/family-car.png`}
                alt="Family enjoying a cool and protected ride in a car with IrisPro window films"
                className="history-story__image"
              />
            </div>
            <div className="history-story__text-column">
              <p className="history-story__paragraph">
                In tropical climates like Malaysia and Singapore, the solar threat is constant and severe. High UV levels and HEV blue light (380nm - 420nm) cause eye fatigue, vision damage, and deep skin aging. Yet, conventional solar tints degrade rapidly, losing their protective properties within 6 to 12 months.
              </p>
              <p className="history-story__paragraph">
                To solve this durability crisis, IrisPro engineered a double-patented optical solar film. Designed to block 100% UV and 99% HEV blue light, our film maintains its protection for a guaranteed minimum of 10 years. With IrisPro, you choose a lasting shield that puts you and your family’s well-being first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Tree Section */}
      <section className="history-timeline">
        <div className="history-timeline__container">
          <div className="history-timeline__header">
            <span className="history-timeline__kicker">MILESTONES</span>
            <h2 className="history-timeline__title">Our Journey</h2>
          </div>

          <div className="timeline-tree">
            {/* Center vertical trunk line */}
            <div className="timeline-tree__line" />

            {MILESTONES.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`timeline-tree__item ${isLeft ? 'timeline-tree__item--left' : 'timeline-tree__item--right'}`}
                >
                  {/* Timeline tree node anchor dot */}
                  <div className="timeline-tree__node">
                    <div className="timeline-tree__node-dot" />
                  </div>

                  {/* Timeline branch card */}
                  <article className="timeline-card">
                    <span className="timeline-card__year">{item.year}</span>
                    <div className="timeline-card__content">
                      <h3 className="timeline-card__title">{item.title}</h3>
                      <h4 className="timeline-card__subtitle">{item.subtitle}</h4>
                      <p className="timeline-card__desc">{item.desc}</p>

                      <div className="timeline-card__tags">
                        {item.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="timeline-card__tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Branch Locator Section */}
      <section className="history-branches" id="locations">
        <div className="history-branches__container">
          <div className="history-branches__header">
            <span className="history-branches__kicker">OUR STORE NETWORK</span>
            <h2 className="history-branches__title">Visit an IrisPro Store</h2>
            <p className="history-branches__desc">
              Experience our premium films in person. Select a branch store from the list or tap the GPS markers on the map to view operating hours, contact details, and locations.
            </p>
          </div>

          <div className="history-branches__content">
            {/* Sidebar list of stores */}
            <div className="history-branches__sidebar">
              <div className="history-branches__list">
                {BRANCHES.map((branch) => {
                  const isActive = activeStore && activeStore.id === branch.id;
                  return (
                    <button
                      key={branch.id}
                      className={`branch-item ${isActive ? 'branch-item--active' : ''}`}
                      onClick={() => setActiveStore(branch)}
                      type="button"
                    >
                      <div className="branch-item__indicator" />
                      <div className="branch-item__details">
                        <span className="branch-item__name">{branch.name}</span>
                        <span className="branch-item__state">{branch.state}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Map Area */}
            <div className="history-branches__map-wrapper">
              <div className="history-branches__map-container">
                <svg
                  className="history-branches__map-svg"
                  viewBox="0 0 960 480"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern id="map-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                      <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
                    </pattern>
                  </defs>

                  {/* Grid pattern overlay */}
                  <rect width="100%" height="100%" fill="url(#map-grid)" />

                  {/* West Malaysia Outline */}
                  <path
                    className="history-branches__map-path"
                    d="M 120,80 C 130,85 150,75 170,80 C 180,82 200,90 220,105 C 225,115 220,135 225,150 C 230,165 240,195 245,210 C 250,230 255,250 260,270 C 265,290 280,310 290,330 C 300,350 310,370 315,385 C 320,400 315,410 305,415 C 295,412 285,405 270,390 C 255,375 240,350 230,335 C 220,320 200,300 190,290 C 180,280 160,265 150,250 C 142,235 140,215 135,195 C 130,175 125,155 120,135 C 115,115 110,100 115,90 Z"
                    fill="rgba(255, 255, 255, 0.02)"
                    stroke="rgba(255, 255, 255, 0.12)"
                    strokeWidth="1.5"
                  />

                  {/* East Malaysia Outline */}
                  <path
                    className="history-branches__map-path"
                    d="M 520,350 C 530,345 550,335 570,335 C 590,330 610,325 630,320 C 650,315 670,305 690,295 C 715,280 730,260 740,240 C 750,220 755,200 760,185 C 765,170 775,155 790,140 C 805,125 820,110 835,105 C 850,100 865,105 870,120 C 875,135 885,150 890,165 C 895,180 890,195 880,205 C 870,215 850,225 835,235 C 825,245 820,260 805,270 C 790,280 770,290 750,300 C 730,310 710,325 685,335 C 660,345 635,355 610,365 C 585,370 560,375 540,370 Z"
                    fill="rgba(255, 255, 255, 0.02)"
                    stroke="rgba(255, 255, 255, 0.12)"
                    strokeWidth="1.5"
                  />

                  {/* Regional labels */}
                  <text x="170" y="440" fill="rgba(255, 255, 255, 0.25)" fontSize="10" letterSpacing="0.1em" textAnchor="middle">PENINSULAR MALAYSIA</text>
                  <text x="700" y="390" fill="rgba(255, 255, 255, 0.25)" fontSize="10" letterSpacing="0.1em" textAnchor="middle">SARAWAK & SABAH</text>

                  {/* Interactive GPS Tags */}
                  {BRANCHES.map((branch) => {
                    const isActive = activeStore && activeStore.id === branch.id;
                    return (
                      <g
                        key={branch.id}
                        className={`map-marker ${isActive ? 'map-marker--active' : ''}`}
                        onClick={() => setActiveStore(branch)}
                        style={{ cursor: 'pointer' }}
                      >
                        {/* Pulse Ring */}
                        {isActive && (
                          <circle
                            cx={branch.x}
                            cy={branch.y}
                            r="15"
                            className="map-marker__pulse"
                          />
                        )}
                        {/* Pin Dot Outer */}
                        <circle
                          cx={branch.x}
                          cy={branch.y}
                          r="6"
                          fill={isActive ? 'var(--irispro-red)' : 'rgba(255, 255, 255, 0.2)'}
                          stroke={isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.5)'}
                          strokeWidth={isActive ? '1.5' : '1'}
                          className="map-marker__dot"
                        />
                        {/* Inner Core */}
                        <circle
                          cx={branch.x}
                          cy={branch.y}
                          r="2"
                          fill="#ffffff"
                        />
                      </g>
                    );
                  })}
                </svg>

                {/* Floating branch store detail card on top of map */}
                {activeStore && (
                  <div className={`branch-card ${activeStore.x < 480 ? 'branch-card--right' : 'branch-card--left'}`}>
                    <button
                      className="branch-card__close"
                      onClick={() => setActiveStore(null)}
                      type="button"
                      aria-label="Close details"
                    >
                      &times;
                    </button>
                    <div className="branch-card__header">
                      <span className="branch-card__tag">ACTIVE STORE</span>
                      <h3 className="branch-card__title">{activeStore.name}</h3>
                    </div>
                    <div className="branch-card__body">
                      <div className="branch-card__row">
                        <span className="branch-card__label">Address</span>
                        <p className="branch-card__value">{activeStore.address}</p>
                      </div>
                      <div className="branch-card__row">
                        <span className="branch-card__label">Hours</span>
                        <p className="branch-card__value">{activeStore.hours}</p>
                      </div>
                      <div className="branch-card__row">
                        <span className="branch-card__label">Phone</span>
                        <a href={`tel:${activeStore.phone}`} className="branch-card__phone-link">
                          {activeStore.phone}
                        </a>
                      </div>
                    </div>
                    <div className="branch-card__footer">
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeStore.name + ' ' + activeStore.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-red branch-card__directions"
                      >
                        <span>Get Directions</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Global Expansion Section */}
      <section className="history-global">
        <div className="history-global__container">
          <div className="history-global__grid">
            {/* Left Column: Text Content */}
            <div className="history-global__content">
              <h2 className="history-global__title">
                10 Years Of Building Expertise And Growing With Our Clients
              </h2>
              <p className="history-global__text">
                Irispro continues to expand its market presence globally, including in countries such as Malaysia, Singapore, Brunei, China, Sri Lanka, Indonesia, Vietnam and beyond.
              </p>
            </div>
            
            {/* Right Column: Global Map Image */}
            <div className="history-global__map-wrapper">
              <img
                src={`${import.meta.env.BASE_URL}images/global_expansion_map.png`}
                alt="IrisPro Global Expansion Map showing South Asia and Southeast Asia branches"
                className="history-global__map-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
