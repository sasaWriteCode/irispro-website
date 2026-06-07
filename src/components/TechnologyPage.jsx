import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TechnologyPage() {
  const heroRef = useRef(null);
  const pageRef = useRef(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // GSAP scroll animations for all sections
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReduced) {
        gsap.set('.tech-sputtered__content', { opacity: 1, x: 0 });
        gsap.set('.tech-sputtered__image-wrapper', { opacity: 1, x: 0 });
        gsap.set('.tech-optical__image-wrapper', { opacity: 1, x: 0 });
        gsap.set('.tech-optical__content', { opacity: 1, x: 0 });
        gsap.set('.patent-card__visual', { opacity: 1, x: 0 });
        gsap.set('.patent-card__copy', { opacity: 1, x: 0 });
        gsap.set('.tech-video__header', { opacity: 1, y: 0 });
        gsap.set('.tech-video__player-wrapper', { opacity: 1, y: 0 });

        // Pre-spread and tilt rotor for reduced motion users
        const stage = pageRef.current?.querySelector('.xs-stage');
        if (stage) {
          stage.classList.add('is-revealed');
          stage.style.setProperty('--reveal', '1');
        }
        gsap.set('.xs-rotor', { transform: 'perspective(1500px) rotateX(-12deg) rotateY(-30deg)' });
        return;
      }

      // Sputtered Section
      gsap.from('.tech-sputtered__content', {
        opacity: 0,
        x: -80,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.tech-sputtered-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from('.tech-sputtered__image-wrapper', {
        opacity: 0,
        x: 80,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.tech-sputtered-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      // Optical Section
      gsap.from('.tech-optical__image-wrapper', {
        opacity: 0,
        x: -80,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.tech-optical-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from('.tech-optical__content', {
        opacity: 0,
        x: 80,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.tech-optical-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      // Patent 1 (UV) Section
      gsap.from('.tech-patent-section--uv .patent-card__visual', {
        opacity: 0,
        x: -80,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.tech-patent-section--uv',
          start: 'top 30%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from('.tech-patent-section--uv .patent-card__copy', {
        opacity: 0,
        x: 80,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.tech-patent-section--uv',
          start: 'top 30%',
          toggleActions: 'play none none reverse',
        },
      });

      // Patent 2 (Hotmelt) Section
      gsap.from('.tech-patent-section--hotmelt .patent-card__visual', {
        opacity: 0,
        x: -80,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.tech-patent-section--hotmelt',
          start: 'top 30%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from('.tech-patent-section--hotmelt .patent-card__copy', {
        opacity: 0,
        x: 80,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.tech-patent-section--hotmelt',
          start: 'top 30%',
          toggleActions: 'play none none reverse',
        },
      });

      // Patent 2 (Hotmelt) Stage Reveal (Spread & Labels) Scrub
      gsap.timeline({
        scrollTrigger: {
          trigger: '.tech-patent-section--hotmelt',
          start: 'top 80%',
          end: 'center center',
          scrub: 1,
          onEnter: () => {
            pageRef.current?.querySelector('.xs-stage')?.classList.add('is-revealed');
          },
          onEnterBack: () => {
            pageRef.current?.querySelector('.xs-stage')?.classList.add('is-revealed');
          },
          onLeaveBack: () => {
            pageRef.current?.querySelector('.xs-stage')?.classList.remove('is-revealed');
          }
        }
      })
        .to('.xs-stage', {
          '--reveal': 1,
          ease: 'none'
        }, 0);

      // Patent 2 (Hotmelt) Rotor Tilt (3D Rotation) Scrub
      gsap.timeline({
        scrollTrigger: {
          trigger: '.tech-patent-section--hotmelt',
          start: 'top bottom',
          end: 'bottom 30%',
          scrub: 1
        }
      })
        .to('.xs-rotor', {
          transform: 'perspective(1500px) rotateX(-12deg) rotateY(-30deg)',
          ease: 'none'
        }, 0);

      // Video Demonstration Section entrance
      gsap.from('.tech-video__header', {
        opacity: 0,
        y: 45,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.tech-video-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from('.tech-video__player-wrapper', {
        opacity: 0,
        y: 55,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.tech-video-section',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="technology-page">
      {/* Cinematic Tech Hero */}
      <section ref={heroRef} className="tech-hero">
        <div className="tech-hero__bg-grid" />
        <div className="tech-hero__inner">
          <span className="tech-hero__kicker">PATENTED INNOVATION</span>
          <h1 className="tech-hero__title">
            Optical Solar Films
            <br />
            <span className="tech-hero__title--red">Powered by Science.</span>
          </h1>
          <p className="tech-hero__lead">
            IrisPro window films are engineered with advanced nanotechnology and multi-layer sputtering. We deliver the world's first tint guaranteed to maintain 100% UV and 99% HEV blue light protection for a decade.
          </p>
          <div className="tech-hero__indicator">
            <span className="tech-hero__scroll-text">Explore Our Technology</span>
            <div className="tech-hero__scroll-line" />
          </div>
        </div>
      </section>

      {/* Sputtered Nanotechnology Detail Section */}
      <section className="tech-sputtered-section">
        <div className="tech-sputtered__container">
          <div className="tech-sputtered__grid">

            {/* Left Column: Description text */}
            <div className="tech-sputtered__content">
              <h2 className="tech-sputtered__title">Sputtered Nanotechnology Films</h2>
              <p className="tech-sputtered__text">
                Sputtered metallised films from IrisPro are the state of the art solar control films that give consumers the best of everything window films has to offer. Combining excellent heat rejection capabilities, beautiful aesthetics, fast drying time and ease of installation, it is the dream window film for most installers and consumers alike.
              </p>
              <p className="tech-sputtered__text">
                IrisPro's Sputtered films are constructed using advanced atomic layer deposition. The multiple layers of sputtered metallic elements give the maximum heat rejection possible while maintaining the natural aesthetics of your glass, ensuring unmatched clarity, 100% UV protection, and 99% HEV blue light blocking.
              </p>
            </div>

            {/* Right Column: Close-up HD Image */}
            <div className="tech-sputtered__image-wrapper">
              <img
                src={`${import.meta.env.BASE_URL}images/sputtered_film_roll.png`}
                alt="Close-up of IrisPro Sputtered Nanotechnology Window Film roll"
                className="tech-sputtered__image"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Optical Solar Film Section */}
      <section className="tech-optical-section">
        <div className="tech-optical__container">
          <div className="tech-optical__grid">

            {/* Left Column: Close-up HD Image */}
            <div className="tech-optical__image-wrapper">
              <img
                src={`${import.meta.env.BASE_URL}images/tinted_film_roll.png`}
                alt="Close-up of IrisPro Optical Solar Window Film roll"
                className="tech-optical__image"
                loading="lazy"
              />
            </div>

            {/* Right Column: Description text */}
            <div className="tech-optical__content">
              <h2 className="tech-optical__title">IrisPro Optical Solar Film</h2>
              <p className="tech-optical__text">
                IrisPro Optical Solar Film represents the pinnacle of multi-layer optical technology. Engineered to selectively filter solar rays, it blocks 100% of UV rays and 99% of HEV blue light (up to 420nm) while maintaining exceptional visible light transmission and structural clarity.
              </p>
              <p className="tech-optical__text">
                Unlike conventional window films that rely on heavy dye elements that fade or degrade over time, our Optical Solar Film is manufactured using state-of-the-art nanotechnology to provide durable, lifetime-guaranteed heat defense and visual comfort.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Patented Technology Section - Patent 1 */}
      <section className="tech-patent-section tech-patent-section--uv">
        <div className="tech-patent__container">
          <article className="patent-card is-active" data-i="0">
            <div className="patent-card__inner">
              <div className="patent-card__visual" aria-hidden="true">
                <div className="patent-visual patent-visual--uv">
                  {/* 3D glass with embossed IrisPro logo */}
                  <div className="pv-glass">
                    <span className="pv-glass__frame"></span>
                    <span className="pv-glass__pane pv-glass__pane--l"></span>
                    <span className="pv-glass__pane pv-glass__pane--r"></span>
                    <span className="pv-glass__mullion"></span>
                    {/* Embossed IrisPro logo on the glass */}
                    <span className="pv-emboss"><b>Iris</b><em>P</em><b>ro</b></span>
                    {/* Reflection sheen sweeping across the glass */}
                    <span className="pv-glass__sheen"></span>
                    {/* Impact glows */}
                    <span className="pv-burst" data-i="0" data-color="#78aaff"></span>
                    <span className="pv-burst" data-i="1" data-color="#966ee6"></span>
                    <span className="pv-burst" data-i="2" data-color="#78aaff"></span>
                    <span className="pv-burst" data-i="3" data-color="#966ee6"></span>
                    <span className="pv-burst" data-i="4"></span>
                    <span className="pv-burst" data-i="5"></span>
                  </div>

                  {/* Inbound + reflected ray streams */}
                  <span className="pv-stream pv-stream--hev1" data-burst="0"
                    style={{ color: '#6aa8ff', '--ray-color': '#6aa8ff' }}>
                    <span className="pv-stream__in"
                      style={{
                        background: 'linear-gradient(90deg, transparent, #6aa8ff)',
                        boxShadow: '0 0 12px #6aa8ff',
                        filter: 'drop-shadow(0 0 6px #6aa8ff) drop-shadow(0 0 14px #6aa8ff)'
                      }}></span>
                    <span className="pv-stream__refl"
                      style={{
                        background: 'linear-gradient(90deg, #6aa8ff, transparent)',
                        boxShadow: '0 0 12px #6aa8ff',
                        filter: 'drop-shadow(0 0 6px #6aa8ff) drop-shadow(0 0 14px #6aa8ff)'
                      }}></span>
                  </span>
                  <span className="pv-stream pv-stream--hev2" data-burst="2"
                    style={{ color: '#6aa8ff', '--ray-color': '#6aa8ff' }}>
                    <span className="pv-stream__in"
                      style={{
                        background: 'linear-gradient(90deg, transparent, #6aa8ff)',
                        boxShadow: '0 0 12px #6aa8ff',
                        filter: 'drop-shadow(0 0 6px #6aa8ff) drop-shadow(0 0 14px #6aa8ff)'
                      }}></span>
                    <span className="pv-stream__refl"
                      style={{
                        background: 'linear-gradient(90deg, #6aa8ff, transparent)',
                        boxShadow: '0 0 12px #6aa8ff',
                        filter: 'drop-shadow(0 0 6px #6aa8ff) drop-shadow(0 0 14px #6aa8ff)'
                      }}></span>
                  </span>
                  <span className="pv-stream pv-stream--uv1" data-burst="1"
                    style={{ color: '#8a6fea', '--ray-color': '#8a6fea' }}>
                    <span className="pv-stream__in"
                      style={{
                        background: 'linear-gradient(90deg, transparent, #8a6fea)',
                        boxShadow: '0 0 12px #8a6fea',
                        filter: 'drop-shadow(0 0 6px #8a6fea) drop-shadow(0 0 14px #8a6fea)'
                      }}></span>
                    <span className="pv-stream__refl"
                      style={{
                        background: 'linear-gradient(90deg, #8a6fea, transparent)',
                        boxShadow: '0 0 12px #8a6fea',
                        filter: 'drop-shadow(0 0 6px #8a6fea) drop-shadow(0 0 14px #8a6fea)'
                      }}></span>
                  </span>
                  <span className="pv-stream pv-stream--uv2" data-burst="3"
                    style={{ color: '#8a6fea', '--ray-color': '#8a6fea' }}>
                    <span className="pv-stream__in"
                      style={{
                        background: 'linear-gradient(90deg, transparent, #8a6fea)',
                        boxShadow: '0 0 12px #8a6fea',
                        filter: 'drop-shadow(0 0 6px #8a6fea) drop-shadow(0 0 14px #8a6fea)'
                      }}></span>
                    <span className="pv-stream__refl"
                      style={{
                        background: 'linear-gradient(90deg, #8a6fea, transparent)',
                        boxShadow: '0 0 12px #8a6fea',
                        filter: 'drop-shadow(0 0 6px #8a6fea) drop-shadow(0 0 14px #8a6fea)'
                      }}></span>
                  </span>

                  {/* Spectrum legend */}
                  <span className="pv-legend">
                    <span><i style={{ background: '#6aa8ff' }}></i>HEV 420nm</span>
                    <span><i style={{ background: '#8a6fea' }}></i>UV 400nm</span>
                  </span>
                </div>
              </div>
              <div className="patent-card__copy">
                <span className="patent-card__pat">Patent 1</span>
                <h3 className="patent-card__title">100% UV + HEV Blue Light Protection System</h3>
                <p className="patent-card__lead">A nano-optical material system engineered to block the entire harmful spectrum &mdash; from UV-C to high-energy visible blue light at 420&nbsp;nm.</p>
                <ul className="patent-card__specs">
                  <li><strong>100%</strong><span>UV-A / UV-B / UV-C blocking</span></li>
                  <li><strong>99%</strong><span>HEV blue light (380&ndash;420&nbsp;nm)</span></li>
                  <li><strong>Skin &amp; Eye Safe</strong><span>Reduces fatigue, pigmentation &amp; cataract risk</span></li>
                  <li><strong>Interior Defense</strong><span>Protects leather, dashboards &amp; furnishings from fading</span></li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Patented Technology Section - Patent 2 */}
      <section className="tech-patent-section tech-patent-section--hotmelt">
        <div className="tech-patent__container">
          <article className="patent-card is-active" data-i="1">
            <div className="patent-card__inner">
              <div className="patent-card__visual" aria-hidden="true">
                <div className="patent-visual patent-visual--hotmelt" id="pv-section">
                  {/* Title bracket */}
                  <div className="xs-title">
                    <span className="xs-title__line xs-title__line--l"></span>
                    <span className="xs-title__text">6 + S + 1 Hot Melt Film</span>
                    <span className="xs-title__line xs-title__line--r"></span>
                  </div>

                  <div className="xs-stage" id="xs-stage">
                    <div className="xs-rotor" id="xs-rotor">
                      <div className="xs-deck">
                        {[...Array(8)].map((_, i) => (
                          <div key={i} className={`xs-layer ${i === 7 ? 'xs-layer--final' : ''}`} data-i={i}>
                            <span className="xs-sheet"></span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Labels live OUTSIDE the rotor so they never rotate / distort */}
                    <div className="xs-labels" aria-hidden="true">
                      {['Anti Aging', 'UV400 HEV Bluelight', 'Chip Dye', 'Nano Titanium', 'UV400 HEV Bluelight', 'Anti Aging', 'Extra Sputter', 'Release Layer'].map((label, i) => (
                        <div key={i} className="xs-tag" data-i={i}>
                          <span className="xs-tag__line"></span>
                          <span className="xs-tag__pill">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="patent-card__copy">
                <span className="patent-card__pat">Patent 2</span>
                <h3 className="patent-card__title">6 + S + 1 Hot Melt Optical Process</h3>
                <p className="patent-card__lead">A multi-layer optical fusion structure with no traditional adhesive bonding &mdash; six functional films, a sealing membrane and a hot-melt base, integrated as one optical body.</p>
                <ul className="patent-card__specs">
                  <li><strong>No Adhesive</strong><span>Hot-melt fusion replaces glue layer chemistry</span></li>
                  <li><strong>Titanium Layer</strong><span>Rejects &gt; 99% infrared heat radiation</span></li>
                  <li><strong>Anti-Bubble</strong><span>Optical bond prevents bubbling, peeling &amp; haze</span></li>
                  <li><strong>10-Year Clarity</strong><span>Color-stable for the lifetime of the warranty</span></li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Video Demonstration Section */}
      <section className="tech-video-section">
        <div className="tech-video__container">
          <div className="tech-video__header">
            <span className="tech-video__kicker">PERFORMANCE TESTING</span>
            <h2 className="tech-video__title">Don't <span className="tech-video__title--red">BELIEVE </span> us?</h2>
            <p className="tech-video__lead">
              Watch our side-by-side spectrometer verification test, demonstrating 100% UV rejection and 99% HEV blue light blocking in real-time.
            </p>
          </div>
          <div className="tech-video__player-wrapper">
            <div className="tech-video__player-aspect">
              <iframe
                src="https://www.youtube.com/embed/-GIhoDSAUtQ?rel=0"
                title="IrisPro Spectrometer Rejection Test Demonstration"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="tech-video__iframe"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
