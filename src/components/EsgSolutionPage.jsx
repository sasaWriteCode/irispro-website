import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/esg.css';

gsap.registerPlugin(ScrollTrigger);

export default function EsgSolutionPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const iframe = entry.target;
            if (iframe.dataset.src) {
              iframe.src = iframe.dataset.src;
              iframe.removeAttribute('data-src');
            }
            observer.unobserve(iframe);
          }
        });
      },
      { rootMargin: '100px' }
    );

    if (containerRef.current) {
      const iframes = containerRef.current.querySelectorAll('.esg-lazy-video');
      iframes.forEach((iframe) => observer.observe(iframe));
    }

    // GSAP ScrollTrigger Animations
    let ctx;
    if (!prefersReduced) {
      ctx = gsap.context(() => {
        // 1. Hero fade-up
        gsap.from('.esg-hero__eyebrow', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' });
        gsap.from('.esg-hero__heading', { opacity: 0, y: 40, duration: 1, delay: 0.15, ease: 'power3.out' });
        gsap.from('.esg-hero__subheading', { opacity: 0, y: 40, duration: 1, delay: 0.3, ease: 'power3.out' });
        gsap.from('.esg-hero__actions', { opacity: 0, y: 30, duration: 0.8, delay: 0.45, ease: 'power3.out' });
        gsap.from('.esg-hero__tag', { opacity: 0, y: 20, duration: 0.6, delay: 0.6, stagger: 0.1, ease: 'power3.out' });

        // 2. Problem Section
        gsap.from('.esg-problem__text', {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.esg-problem__text',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          }
        });
        gsap.utils.toArray('.esg-stat-card').forEach((card) => {
          gsap.from(card, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            }
          });
        });

        // 3. Solution Section
        gsap.from('.esg-solution__content', {
          opacity: 0,
          x: -50,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.esg-solution__content',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          }
        });
        gsap.from('.esg-solution__visual', {
          opacity: 0,
          x: 50,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.esg-solution__visual',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          }
        });

        // 4. Pillars Section
        gsap.from('.esg-pillars .esg-section__heading', {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.esg-pillars .esg-section__heading',
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          }
        });
        gsap.utils.toArray('.esg-pillar-card').forEach((card) => {
          gsap.from(card, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            }
          });
        });

        // 5. Performance Section
        gsap.from('.esg-performance .esg-section__heading', {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.esg-performance .esg-section__heading',
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          }
        });
        gsap.utils.toArray('.esg-perf-card').forEach((card) => {
          gsap.from(card, {
            opacity: 0,
            scale: 0.9,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            }
          });
        });

        // 6. Business ROI Section
        gsap.from('.esg-business__inner', {
          opacity: 0,
          y: 40,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.esg-business__inner',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          }
        });

        // 7. Video Section
        gsap.from('.esg-video-section .esg-section__heading', {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.esg-video-section .esg-section__heading',
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          }
        });
        gsap.utils.toArray('.esg-shorts-wrapper').forEach((wrapper) => {
          gsap.from(wrapper, {
            opacity: 0,
            y: 40,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: wrapper,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            }
          });
        });

        // 8. Process Section
        gsap.from('.esg-process .esg-section__heading', {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.esg-process .esg-section__heading',
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          }
        });
        gsap.utils.toArray('.esg-process__step').forEach((step) => {
          gsap.from(step, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            }
          });
        });

        // 9. CTA Section
        gsap.from('.esg-cta__heading', {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.esg-cta',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          }
        });
        gsap.from('.esg-cta__paragraph', {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.esg-cta',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        });
        gsap.from('.esg-cta__btn', {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.esg-cta',
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          }
        });

        // Force initial refresh to calculate accurate bounds
        ScrollTrigger.refresh();
      }, containerRef);
    }

    // Reset window scroll position and refresh ScrollTrigger triggers after layout settles
    window.scrollTo(0, 0);
    const refreshTimer1 = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);
    const refreshTimer2 = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      observer.disconnect();
      if (ctx) ctx.revert();
      clearTimeout(refreshTimer1);
      clearTimeout(refreshTimer2);
    };
  }, []);

  return (
    <div className="esg-page" ref={containerRef}>
      {/* 1. Hero Section */}
      <section className="esg-hero">
        <div className="esg-hero__bg">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Premium Commercial Building" className="esg-hero__bg-img" />
          <div className="esg-hero__overlay"></div>
        </div>
        
        <div className="esg-hero__content">
          <div className="esg-hero__eyebrow">BUILDING FILM / ESG SOLUTION</div>
          <h1 className="esg-hero__heading">Passive Cooling Technology for Sustainable Buildings</h1>
          <p className="esg-hero__subheading">
            Transform glass façades into high-performance ESG assets with IrisPro architectural window film — designed to reduce solar heat gain, lower cooling demand, improve indoor comfort, and support corporate sustainability goals.
          </p>
          <div className="esg-hero__actions">
            <a href="https://wa.me/60182329818" className="esg-btn btn--primary">Request ESG Building Assessment</a>
            <button
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('esg-video');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="esg-btn-outline"
            >
              Watch Passive Cooling Demo
            </button>
          </div>
        </div>

        <div className="esg-hero__tags">
          <div className="esg-hero__tag">
            <span className="esg-hero__tag-icon">❄️</span> Reduce Cooling Load
          </div>
          <div className="esg-hero__tag">
            <span className="esg-hero__tag-icon">⚡</span> Lower Electricity Usage
          </div>
          <div className="esg-hero__tag">
            <span className="esg-hero__tag-icon">🌡️</span> Improve Occupant Comfort
          </div>
          <div className="esg-hero__tag">
            <span className="esg-hero__tag-icon">📊</span> ESG Reporting Support
          </div>
        </div>
      </section>

      {/* 2. Problem Section */}
      <section className="esg-section esg-problem">
        <div className="esg-container">
          <div className="esg-problem__grid">
            <div className="esg-problem__text">
              <h2 className="esg-section__heading">The Challenge: Glass Buildings Are Energy Liabilities</h2>
              <p className="esg-section__paragraph">
                Modern commercial buildings rely heavily on glass for natural light and aesthetics. However, untreated glass allows excessive solar heat to penetrate, forcing HVAC systems to work overtime. This leads to high carbon emissions, skyrocketing energy costs, and poor indoor thermal comfort — directly negatively impacting the Environmental and Social pillars of ESG.
              </p>
            </div>
            <div className="esg-problem__stats">
              <div className="esg-stat-card">
                <div className="esg-stat-card__number">30%</div>
                <div className="esg-stat-card__desc">Up to 30% of a building’s energy loss is through windows.</div>
              </div>
              <div className="esg-stat-card">
                <div className="esg-stat-card__number">40-50%</div>
                <div className="esg-stat-card__desc">HVAC accounts for roughly 40-50% of total commercial building energy consumption.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Solution Section */}
      <section className="esg-section esg-solution">
        <div className="esg-container">
          <div className="esg-solution__grid">
            <div className="esg-solution__content">
              <span className="esg-solution__badge">THE INTERVENTION</span>
              <h2 className="esg-section__heading">The IrisPro Solution: 100% UV Rejection & High Thermal Defense</h2>
              <p className="esg-section__paragraph">
                IrisPro Building Film utilizes double-patented optical sputtering technology with specialized heat-absorbing and reflecting layers. By retrofitting existing glass, IrisPro instantly transforms standard windows into energy-efficient, low-emissivity barriers.
              </p>
              <div className="esg-solution__features">
                <div className="esg-solution__feature">
                  <span className="esg-solution__feature-icon">✓</span>
                  <span>Retrofit without downtime or replacement costs</span>
                </div>
                <div className="esg-solution__feature">
                  <span className="esg-solution__feature-icon">✓</span>
                  <span>Double-patented optical sputtering technology</span>
                </div>
                <div className="esg-solution__feature">
                  <span className="esg-solution__feature-icon">✓</span>
                  <span>100% UV420 protection & high thermal insulation</span>
                </div>
              </div>
            </div>
            
            <div className="esg-solution__visual">
              <div className="esg-glass-diagram">
                {/* Outermost rays */}
                <div className="esg-diagram__ray esg-diagram__ray--heat">
                  <span className="esg-diagram__ray-label">Solar Heat (IR)</span>
                  <div className="esg-diagram__line esg-diagram__line--red"></div>
                  <div className="esg-diagram__arrow esg-diagram__arrow--reflected"></div>
                </div>
                
                <div className="esg-diagram__ray esg-diagram__ray--uv">
                  <span className="esg-diagram__ray-label">100% UV Rays</span>
                  <div className="esg-diagram__line esg-diagram__line--purple"></div>
                  <div className="esg-diagram__arrow esg-diagram__arrow--blocked"></div>
                </div>

                {/* Glass representation */}
                <div className="esg-glass-pane">
                  <span className="esg-glass-pane__label">Existing Glass</span>
                  
                  {/* Film coating representation */}
                  <div className="esg-film-layer">
                    <span className="esg-film-layer__label">IrisPro Film</span>
                  </div>
                </div>

                {/* Protected interior */}
                <div className="esg-diagram__interior">
                  <span className="esg-diagram__cool-badge">Protected Interior</span>
                  <span className="esg-diagram__cool-temp">Cool & Comfortable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ESG Pillars Alignment */}
      <section className="esg-section esg-pillars">
        <div className="esg-container">
          <h2 className="esg-section__heading esg-text-center">ESG Pillars Alignment</h2>
          <div className="esg-pillars__grid">
            <div className="esg-pillar-card esg-pillar-card--e">
              <div className="esg-pillar-card__icon">E</div>
              <h3 className="esg-pillar-card__title">Environmental Impact</h3>
              <ul className="esg-pillar-card__list">
                <li><strong>Carbon Footprint Reduction:</strong> Lower cooling load directly decreases electricity consumption and Scope 2 GHG emissions.</li>
                <li><strong>Sustainable Retrofit:</strong> Upgrade existing glass without the high carbon cost of replacing the entire façade.</li>
              </ul>
            </div>
            
            <div className="esg-pillar-card esg-pillar-card--s">
              <div className="esg-pillar-card__icon">S</div>
              <h3 className="esg-pillar-card__title">Social Responsibility</h3>
              <ul className="esg-pillar-card__list">
                <li><strong>Thermal Comfort:</strong> Eliminate hot spots and temperature imbalances, ensuring a productive and comfortable environment for tenants.</li>
                <li><strong>Health & Well-being:</strong> Block 100% of harmful UV420 rays, protecting occupants from skin damage and preventing interior fading.</li>
                <li><strong>Glare Reduction:</strong> Improve visual comfort for computer-based work environments.</li>
              </ul>
            </div>

            <div className="esg-pillar-card esg-pillar-card--g">
              <div className="esg-pillar-card__icon">G</div>
              <h3 className="esg-pillar-card__title">Governance & Compliance</h3>
              <ul className="esg-pillar-card__list">
                <li><strong>Energy Certifications:</strong> Contribute to points for Green Building Indexes (GBI), LEED, and GRESB assessments.</li>
                <li><strong>Measurable ROI:</strong> Provide quantifiable energy savings data to support annual corporate sustainability reporting.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Performance Proof */}
      <section className="esg-section esg-performance">
        <div className="esg-container">
          <h2 className="esg-section__heading esg-text-center">Performance Proof</h2>
          <div className="esg-performance__grid">
            <div className="esg-perf-card">
              <div className="esg-perf-card__circle">100%</div>
              <h4 className="esg-perf-card__title">UV Protection</h4>
              <p className="esg-perf-card__desc">Total block of UVA and UVB up to 420nm.</p>
            </div>
            <div className="esg-perf-card">
              <div className="esg-perf-card__circle">99%</div>
              <h4 className="esg-perf-card__title">Infrared Rejection</h4>
              <p className="esg-perf-card__desc">Significantly reduces heat penetration.</p>
            </div>
            <div className="esg-perf-card">
              <div className="esg-perf-card__circle">High</div>
              <h4 className="esg-perf-card__title">VLT</h4>
              <p className="esg-perf-card__desc">Maintain natural daylighting without the heat penalty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Business Value Proposition */}
      <section className="esg-section esg-business">
        <div className="esg-container">
          <div className="esg-business__inner">
            <h2 className="esg-section__heading">Business Value Proposition (ROI)</h2>
            <ul className="esg-business__list">
              <li>
                <span className="esg-business__icon">⏱️</span>
                <div>
                  <strong>Fast Payback Period:</strong> Energy savings often offset the installation cost within 2 to 4 years.
                </div>
              </li>
              <li>
                <span className="esg-business__icon">📈</span>
                <div>
                  <strong>Asset Value Appreciation:</strong> Energy-efficient buildings command higher rental yields and occupancy rates.
                </div>
              </li>
              <li>
                <span className="esg-business__icon">🏢</span>
                <div>
                  <strong>Zero Operational Downtime:</strong> Clean, non-disruptive installation means business continues as usual during the retrofit.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. Video Explanation Section */}
      <section id="esg-video" className="esg-section esg-video-section">
        <div className="esg-container">
          <h2 className="esg-section__heading esg-text-center">See Passive Cooling in Action</h2>
          <div className="esg-shorts-grid">
            <div className="esg-shorts-wrapper">
              <iframe
                className="esg-lazy-video"
                data-src="https://www.youtube.com/embed/GdBxXQw7zdU"
                title="Passive Cooling Demo 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="esg-shorts-wrapper">
              <iframe
                className="esg-lazy-video"
                data-src="https://www.youtube.com/embed/Jbal3AVN4DM"
                title="Passive Cooling Demo 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Simple Implementation Process */}
      <section className="esg-section esg-process">
        <div className="esg-container">
          <h2 className="esg-section__heading esg-text-center">Simple Implementation Process</h2>
          <div className="esg-process__steps">
            <div className="esg-process__step">
              <div className="esg-process__number">1</div>
              <h4 className="esg-process__title">Energy Assessment</h4>
              <p className="esg-process__desc">Audit current glass performance.</p>
            </div>
            <div className="esg-process__step">
              <div className="esg-process__number">2</div>
              <h4 className="esg-process__title">Film Specification</h4>
              <p className="esg-process__desc">Select the optimal VLT and heat rejection film.</p>
            </div>
            <div className="esg-process__step">
              <div className="esg-process__number">3</div>
              <h4 className="esg-process__title">Professional Installation</h4>
              <p className="esg-process__desc">Zero-downtime application.</p>
            </div>
            <div className="esg-process__step">
              <div className="esg-process__number">4</div>
              <h4 className="esg-process__title">Performance Verification</h4>
              <p className="esg-process__desc">Post-installation temperature/energy measurement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Final Call to Action */}
      <section className="esg-section esg-cta">
        <div className="esg-container esg-text-center">
          <h2 className="esg-cta__heading">Ready to Upgrade Your Building’s ESG Profile?</h2>
          <p className="esg-cta__paragraph">
            Partner with IrisPro to implement a measurable, high-impact passive cooling solution for your commercial property.
          </p>
          <a href="https://wa.me/60182329818" className="esg-btn btn--primary esg-cta__btn">Schedule a Consultation Today</a>
        </div>
      </section>
    </div>
  );
}
