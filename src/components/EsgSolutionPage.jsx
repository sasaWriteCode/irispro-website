import React, { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/esg.css';

gsap.registerPlugin(ScrollTrigger);

export default function EsgSolutionPage() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const heroRef = useRef(null);
  const animStateRef = useRef({
    mouse: { x: -1000, y: -1000 },
    particles: [],
    trees: [],
    treeCanvas: null,
    treeCtx: null,
    animId: null,
    bgImg: null,
    coolImg: null,
    bgLoaded: false,
    lastSpawnTime: 0,
  });

  // ── Canvas "Shade Effect" ──
  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = heroRef.current;
    if (!canvas || !hero) return;
    const isMobile = window.innerWidth < 768 || 'ontouchstart' in window;
    if (isMobile) return;  // mobile fallback handled by CSS

    const ctx = canvas.getContext('2d');
    const state = animStateRef.current;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Sizing
    const resize = () => {
      const rect = hero.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Rebuild tree offscreen canvas
      state.treeCanvas = document.createElement('canvas');
      state.treeCanvas.width = canvas.width;
      state.treeCanvas.height = canvas.height;
      state.treeCtx = state.treeCanvas.getContext('2d');
      state.treeCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Redraw existing trees
      state.trees.forEach(t => drawTree(state.treeCtx, t));
    };
    resize();
    window.addEventListener('resize', resize);

    // Load background images for tint lens
    const bgSrc = `${import.meta.env.BASE_URL}images/commercial-building-2.png`;
    const bgImg = new Image();
    bgImg.crossOrigin = 'anonymous';
    bgImg.onload = () => {
      state.bgImg = bgImg;
      // Create cool-tinted version
      const offscreen = document.createElement('canvas');
      offscreen.width = bgImg.width;
      offscreen.height = bgImg.height;
      const offCtx = offscreen.getContext('2d');
      offCtx.filter = 'saturate(1.25) brightness(0.82) contrast(1.15)';
      offCtx.drawImage(bgImg, 0, 0);

      // Draw a subtle translucent blue window tint overlay
      offCtx.globalCompositeOperation = 'source-atop';
      offCtx.fillStyle = 'rgba(37, 99, 235, 0.14)';  // rich blue tint
      offCtx.fillRect(0, 0, bgImg.width, bgImg.height);

      state.coolImg = offscreen;
      state.bgLoaded = true;
    };
    bgImg.src = bgSrc;

    // Mouse tracking
    const onMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      state.mouse.x = e.clientX - rect.left;
      state.mouse.y = e.clientY - rect.top;

      // Throttle particle spawn: at most 1 particle every 500ms (0.5s)
      const now = Date.now();
      if (now - (state.lastSpawnTime || 0) >= 500) {
        state.particles.push({
          x: state.mouse.x,
          y: state.mouse.y,
          vx: (Math.random() - 0.5) * 0.6,
          vy: Math.random() * 0.4 + 0.2, // falling down speed
          life: 1,
          size: Math.random() * 3 + 2.5,
          hue: 100 + Math.random() * 45, // organic green hues
        });
        state.lastSpawnTime = now;
      }
    };
    const onMouseLeave = () => {
      state.mouse.x = -1000;
      state.mouse.y = -1000;
    };
    hero.addEventListener('mousemove', onMouseMove);
    hero.addEventListener('mouseleave', onMouseLeave);

    // Draw a recursive tree
    function drawTree(tCtx, tree) {
      const { x, baseY, size, lean, hue } = tree;
      tCtx.save();
      tCtx.globalAlpha = tree.opacity || 0.85;
      function branch(x1, y1, len, angle, depth) {
        if (depth <= 0 || len < 2) return;
        const x2 = x1 + Math.cos(angle) * len;
        const y2 = y1 + Math.sin(angle) * len;
        tCtx.beginPath();
        tCtx.moveTo(x1, y1);
        tCtx.lineTo(x2, y2);
        tCtx.strokeStyle = depth > 3
          ? `hsl(30, 35%, ${25 + depth * 3}%)`
          : `hsla(${hue}, 55%, ${35 + depth * 5}%, 0.9)`;
        tCtx.lineWidth = Math.max(depth * 0.8, 0.5);
        tCtx.stroke();
        if (depth <= 3) {
          // Leaves
          tCtx.beginPath();
          tCtx.arc(x2, y2, Math.random() * 3 + 2, 0, Math.PI * 2);
          tCtx.fillStyle = `hsla(${hue + Math.random() * 20 - 10}, 60%, 45%, 0.7)`;
          tCtx.fill();
        }
        const branchAngle = 0.35 + Math.random() * 0.25;
        branch(x2, y2, len * (0.65 + Math.random() * 0.1), angle - branchAngle, depth - 1);
        branch(x2, y2, len * (0.65 + Math.random() * 0.1), angle + branchAngle, depth - 1);
      }
      branch(x, baseY, size, -Math.PI / 2 + lean, 7);
      tCtx.restore();
    }

    // Main render loop
    function render() {
      const rect = hero.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);

      // 1. Tint lens
      if (state.bgLoaded && state.mouse.x > 0) {
        const lensR = 1200;
        ctx.save();

        // Calculate aspect ratios for drawing the image
        const imgAspect = state.bgImg.width / state.bgImg.height;
        const heroAspect = w / h;
        let drawW, drawH, drawX, drawY;
        if (heroAspect > imgAspect) {
          drawW = w;
          drawH = w / imgAspect;
          drawX = 0;
          drawY = (h - drawH) / 2;
        } else {
          drawH = h;
          drawW = h * imgAspect;
          drawX = (w - drawW) / 2;
          drawY = 0;
        }

        // Draw the cool-tinted background image across the canvas area
        ctx.drawImage(state.coolImg, drawX, drawY, drawW, drawH);

        // Mask the image with a feathered radial gradient (destination-in composition)
        const maskGrad = ctx.createRadialGradient(
          state.mouse.x, state.mouse.y, lensR * 0.4, // fully opaque out to 40% of the radius
          state.mouse.x, state.mouse.y, lensR       // smoothly feathers to 0% opacity at 100% of the radius
        );
        maskGrad.addColorStop(0, 'rgba(0, 0, 0, 1)');
        maskGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.globalCompositeOperation = 'destination-in';
        ctx.fillStyle = maskGrad;
        ctx.beginPath();
        ctx.arc(state.mouse.x, state.mouse.y, lensR, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Subtle green border glow ring around the feathered lens area
        ctx.save();
        const grad = ctx.createRadialGradient(
          state.mouse.x, state.mouse.y, lensR * 0.85,
          state.mouse.x, state.mouse.y, lensR
        );
        grad.addColorStop(0, 'rgba(34, 197, 94, 0)');
        grad.addColorStop(1, 'rgba(34, 197, 94, 0.12)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(state.mouse.x, state.mouse.y, lensR, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 2. Particles
      for (let i = state.particles.length - 1; i >= 0; i--) {
        const p = state.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.02;  // gravity
        p.life -= 0.004;
        if (p.life <= 0 || p.y > h + 10) {
          // Seed reached bottom → grow a tree
          if (p.y >= h - 5) {
            const newTree = {
              x: p.x,
              baseY: h,
              size: 18 + Math.random() * 22,
              lean: (Math.random() - 0.5) * 0.2,
              hue: 100 + Math.random() * 50,
              opacity: 0.85,
            };
            state.trees.push(newTree);
            if (state.treeCtx) {
              drawTree(state.treeCtx, newTree);
            }
          }
          state.particles.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 65%, 50%, ${p.life * 0.6})`;
        ctx.fill();
      }

      // 3. Trees (composite from offscreen canvas)
      if (state.treeCanvas) {
        ctx.drawImage(state.treeCanvas, 0, 0, w, h);
      }

      if (!document.hidden) {
        state.animId = requestAnimationFrame(render);
      }
    }
    state.animId = requestAnimationFrame(render);

    // Pause when hidden
    const onVisChange = () => {
      if (!document.hidden && !state.animId) {
        state.animId = requestAnimationFrame(render);
      }
    };
    document.addEventListener('visibilitychange', onVisChange);

    return () => {
      cancelAnimationFrame(state.animId);
      window.removeEventListener('resize', resize);
      hero.removeEventListener('mousemove', onMouseMove);
      hero.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('visibilitychange', onVisChange);
      state.particles = [];
      state.trees = [];
    };
  }, []);

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
        gsap.from('.esg-hero__tagline', { opacity: 0, y: 40, duration: 1, delay: 0.3, ease: 'power3.out' });
        gsap.from('.esg-hero__actions', { opacity: 0, y: 30, duration: 0.8, delay: 0.45, ease: 'power3.out' });
        gsap.from('.esg-hero__tag', { opacity: 0, y: 20, duration: 0.6, delay: 0.6, stagger: 0.1, ease: 'power3.out' });
        gsap.from('.esg-hero__canvas', { opacity: 0, duration: 1.5, delay: 0.8, ease: 'power2.out' });

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

        // 6. Business ROI Section (Horizontal Scroll Scrub)
        const businessSection = containerRef.current?.querySelector('.esg-business');
        const businessSlider = containerRef.current?.querySelector('.esg-business__slider');
        if (businessSection && businessSlider) {
          const amountToScroll = businessSlider.scrollWidth - window.innerWidth;
          
          gsap.matchMedia().add("(min-width: 1025px)", () => {
            if (amountToScroll > 0) {
              gsap.to(businessSlider, {
                x: -amountToScroll,
                ease: 'none',
                scrollTrigger: {
                  trigger: '.esg-business',
                  pin: true,
                  scrub: 0.5,
                  start: 'top top',
                  end: () => `+=${amountToScroll}`,
                  invalidateOnRefresh: true,
                }
              });
            }
          });
        }

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
      <section className="esg-hero" ref={heroRef}>
        <div className="esg-hero__bg">
          <img src={`${import.meta.env.BASE_URL}images/commercial-building-2.png`} alt="Premium Commercial Building" className="esg-hero__bg-img" />
        </div>

        <canvas ref={canvasRef} className="esg-hero__canvas" />

        <div className="esg-hero__content">
          <div className="esg-hero__eyebrow">BUILDING FILM / ESG SOLUTION</div>
          <h1 className="esg-hero__heading">Passive Cooling Technology for Sustainable Buildings</h1>
          <p className="esg-hero__tagline">
            Every Surface We Shade Gives Back to the Earth
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
      </section>

      {/* 2. Problem Section */}
      <section className="esg-section esg-problem">
        <div className="esg-container">
          <div className="esg-problem__grid">
            <div className="esg-problem__text">
              <h2 className="esg-section__heading">The Challenge: Glass Façades Improve Design.
                They Also Increase Cooling Demand.
              </h2>
              <p className="esg-section__paragraph">
                Modern commercial buildings rely on extensive glazing to maximise daylight and architectural appeal. However, untreated glass allows significant solar heat to penetrate the building envelope, forcing HVAC systems to work overtime. This leads to high carbon emissions, skyrocketing energy costs, and poor indoor thermal comfort — directly negatively impacting the Environmental and Social pillars of ESG.
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

              {/* 2.5D Building Vector illustration placed below the stat cards */}
              <div className="esg-problem__bg-vector">
                <svg viewBox="0 0 180 260" className="esg-problem__bg-svg" xmlns="http://www.w3.org/2000/svg">
                  {/* Base Podium (tilted 2.5D block) */}
                  <polygon points="46,220 90,198 134,220 90,242" fill="#334155" stroke="#475569" stroke-width="1.2" />
                  <polygon points="46,220 46,236 90,258 90,242" fill="#1e293b" stroke="#334155" stroke-width="1.2" />
                  <polygon points="90,242 90,258 134,236 134,220" fill="#1e293b" stroke="#334155" stroke-width="1.2" />

                  {/* Podium vertical pillars */}
                  <line x1="58" y1="227" x2="58" y2="241" stroke="#475569" stroke-width="1.5" />
                  <line x1="72" y1="234" x2="72" y2="248" stroke="#475569" stroke-width="1.5" />
                  <line x1="108" y1="248" x2="108" y2="234" stroke="#475569" stroke-width="1.5" />
                  <line x1="122" y1="241" x2="122" y2="227" stroke="#475569" stroke-width="1.5" />

                  {/* Main Glass Tower */}
                  {/* Left Face (darker glass) */}
                  <polygon points="56,203 56,63 90,80 90,220" fill="#1e293b" stroke="#334155" stroke-width="1.2" />
                  {/* Right Face (lighter glass) */}
                  <polygon points="90,220 90,80 124,63 124,203" fill="#38bdf8" stroke="#0284c7" stroke-width="1.2" />
                  {/* Roof Top */}
                  <polygon points="56,63 90,46 124,63 90,80" fill="#475569" stroke="#64748b" stroke-width="1.2" />

                  {/* Roof Top HVAC Machinery / Vents */}
                  <polygon points="78,57 90,51 102,57 90,63" fill="#64748b" stroke="#94a3b8" stroke-width="0.8" />
                  <polygon points="78,57 78,61 90,67 90,63" fill="#475569" stroke="#64748b" stroke-width="0.8" />
                  <polygon points="90,63 90,67 102,61 102,57" fill="#334155" stroke="#475569" stroke-width="0.8" />
                  <circle cx="90" cy="54" r="2.5" fill="#cbd5e1" />
                  <line x1="90" y1="54" x2="90" y2="48" stroke="#cbd5e1" stroke-width="1" />

                  {/* Tower Grid - Left Wall Verticals */}
                  <line x1="61.7" y1="65.8" x2="61.7" y2="205.8" stroke="#334155" stroke-width="0.6" />
                  <line x1="67.3" y1="68.6" x2="67.3" y2="208.6" stroke="#334155" stroke-width="0.6" />
                  <line x1="73" y1="71.5" x2="73" y2="211.5" stroke="#334155" stroke-width="0.6" />
                  <line x1="78.7" y1="74.3" x2="78.7" y2="214.3" stroke="#334155" stroke-width="0.6" />
                  <line x1="84.3" y1="77.1" x2="84.3" y2="217.1" stroke="#334155" stroke-width="0.6" />

                  {/* Tower Grid - Left Wall Horizontals */}
                  <line x1="56" y1="73" x2="90" y2="90" stroke="#334155" stroke-width="0.8" />
                  <line x1="56" y1="83" x2="90" y2="100" stroke="#334155" stroke-width="0.8" />
                  <line x1="56" y1="93" x2="90" y2="110" stroke="#334155" stroke-width="0.8" />
                  <line x1="56" y1="103" x2="90" y2="120" stroke="#334155" stroke-width="0.8" />
                  <line x1="56" y1="113" x2="90" y2="130" stroke="#334155" stroke-width="0.8" />
                  <line x1="56" y1="123" x2="90" y2="140" stroke="#334155" stroke-width="0.8" />
                  <line x1="56" y1="133" x2="90" y2="150" stroke="#334155" stroke-width="0.8" />
                  <line x1="56" y1="143" x2="90" y2="160" stroke="#334155" stroke-width="0.8" />
                  <line x1="56" y1="153" x2="90" y2="170" stroke="#334155" stroke-width="0.8" />
                  <line x1="56" y1="163" x2="90" y2="180" stroke="#334155" stroke-width="0.8" />
                  <line x1="56" y1="173" x2="90" y2="190" stroke="#334155" stroke-width="0.8" />
                  <line x1="56" y1="183" x2="90" y2="200" stroke="#334155" stroke-width="0.8" />
                  <line x1="56" y1="193" x2="90" y2="210" stroke="#334155" stroke-width="0.8" />

                  {/* Tower Grid - Right Wall Verticals (Glass panels outline) */}
                  <line x1="95.7" y1="77.1" x2="95.7" y2="217.1" stroke="#0284c7" stroke-width="0.6" />
                  <line x1="101.3" y1="74.3" x2="101.3" y2="214.3" stroke="#0284c7" stroke-width="0.6" />
                  <line x1="107" y1="71.5" x2="107" y2="211.5" stroke="#0284c7" stroke-width="0.6" />
                  <line x1="112.7" y1="68.6" x2="112.7" y2="208.6" stroke="#0284c7" stroke-width="0.6" />
                  <line x1="118.3" y1="65.8" x2="118.3" y2="205.8" stroke="#0284c7" stroke-width="0.6" />

                  {/* Tower Grid - Right Wall Horizontals */}
                  <line x1="90" y1="90" x2="124" y2="73" stroke="#0284c7" stroke-width="0.8" />
                  <line x1="90" y1="100" x2="124" y2="83" stroke="#0284c7" stroke-width="0.8" />
                  <line x1="90" y1="110" x2="124" y2="93" stroke="#0284c7" stroke-width="0.8" />
                  <line x1="90" y1="120" x2="124" y2="103" stroke="#0284c7" stroke-width="0.8" />
                  <line x1="90" y1="130" x2="124" y2="113" stroke="#0284c7" stroke-width="0.8" />
                  <line x1="90" y1="140" x2="124" y2="123" stroke="#0284c7" stroke-width="0.8" />
                  <line x1="90" y1="150" x2="124" y2="133" stroke="#0284c7" stroke-width="0.8" />
                  <line x1="90" y1="160" x2="124" y2="143" stroke="#0284c7" stroke-width="0.8" />
                  <line x1="90" y1="170" x2="124" y2="153" stroke="#0284c7" stroke-width="0.8" />
                  <line x1="90" y1="180" x2="124" y2="163" stroke="#0284c7" stroke-width="0.8" />
                  <line x1="90" y1="190" x2="124" y2="173" stroke="#0284c7" stroke-width="0.8" />
                  <line x1="90" y1="200" x2="124" y2="183" stroke="#0284c7" stroke-width="0.8" />
                  <line x1="90" y1="210" x2="124" y2="193" stroke="#0284c7" stroke-width="0.8" />

                  {/* Diagonal Glass Sheen Highlight overlay (creates realistic office building reflection) */}
                  <polygon points="90,80 110,70 114,208 90,220" fill="rgba(255,255,255,0.18)" />

                  {/* Landscaping Trees around Podium */}
                  <line x1="38" y1="242" x2="38" y2="249" stroke="#5d4037" stroke-width="1.2" />
                  <circle cx="38" cy="239" r="4.5" fill="#4caf50" opacity="0.9" />
                  <line x1="42" y1="248" x2="42" y2="254" stroke="#5d4037" stroke-width="1.2" />
                  <circle cx="42" cy="245" r="4" fill="#4caf50" opacity="0.9" />

                  <line x1="140" y1="228" x2="140" y2="235" stroke="#5d4037" stroke-width="1.2" />
                  <circle cx="140" cy="225" r="4.5" fill="#4caf50" opacity="0.9" />
                  <line x1="145" y1="234" x2="145" y2="240" stroke="#5d4037" stroke-width="1.2" />
                  <circle cx="145" cy="231" r="4" fill="#4caf50" opacity="0.9" />

                  <line x1="90" y1="257" x2="90" y2="264" stroke="#5d4037" stroke-width="1.2" />
                  <circle cx="90" cy="254" r="5" fill="#2e7d32" opacity="0.95" />

                  {/* Heat/Energy Loss Waves escaping from Windows */}
                  <path className="esg-building__heat-flow" d="M106,120 C130,110 145,130 160,122" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="6,3" stroke-linecap="round" />
                  <path className="esg-building__heat-flow" d="M114,150 C138,140 153,160 168,152" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="6,3" stroke-linecap="round" />
                  <polygon className="esg-building__arrowhead" points="165,120 155,118 159,128" fill="#ef4444" />
                  <polygon className="esg-building__arrowhead" points="173,150 163,148 167,158" fill="#ef4444" />

                  <circle className="esg-building__heat-glow" cx="110" cy="135" r="16" fill="rgba(239, 68, 68, 0.15)" filter="blur(3px)" />

                  {/* Energy Loss 30% Label badge - positioned at the end of the arrows */}
                  <rect x="148" y="128" width="30" height="20" rx="4" fill="#ef4444" />
                  <text x="163" y="142" font-family="'Montserrat', sans-serif" font-weight="bold" font-size="8.5" fill="#ffffff" text-anchor="middle">30%</text>
                </svg>
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

                  {/* Vector Family Comfortable Behind the Glass */}
                  <div className="esg-diagram__family-wrap">
                    <svg viewBox="0 0 160 120" className="esg-diagram__family-svg" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10,75 L80,20 L150,75 L150,110 L10,110 Z" fill="rgba(61, 184, 122, 0.05)" stroke="rgba(61, 184, 122, 0.18)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M30,95 L130,95 C130,95 135,95 135,90 L135,78 C135,78 135,73 130,73 L122,73 L122,82 L38,82 L38,73 L30,73 C25,73 25,78 25,78 L25,90 C25,95 30,95 30,95 Z" fill="rgba(61, 184, 122, 0.12)" stroke="rgba(61, 184, 122, 0.3)" stroke-width="1.2" />
                      <rect x="35" y="82" width="90" height="10" rx="3" fill="rgba(61, 184, 122, 0.18)" stroke="rgba(61, 184, 122, 0.25)" stroke-width="0.8" />
                      <circle cx="55" cy="38" r="7" fill="var(--irispro-red, #d20f18)" opacity="0.82" />
                      <path d="M42,75 C42,50 68,50 68,75 Z" fill="var(--irispro-red, #d20f18)" opacity="0.75" />
                      <circle cx="105" cy="36" r="7" fill="var(--irispro-red, #d20f18)" opacity="0.82" />
                      <path d="M92,75 C92,48 118,48 118,75 Z" fill="var(--irispro-red, #d20f18)" opacity="0.75" />
                      <circle cx="80" cy="48" r="5" fill="var(--irispro-red, #d20f18)" opacity="0.9" />
                      <path d="M70,78 C70,58 90,58 90,78 Z" fill="var(--irispro-red, #d20f18)" opacity="0.8" />
                      <path d="M80,18 C80,18 77,13 73,13 C69,13 67,16 67,19 C67,25 80,30 80,30 C80,30 93,25 93,19 C93,16 91,13 87,13 C83,13 80,18 80,18 Z" fill="var(--irispro-red, #d20f18)" opacity="0.9" />
                    </svg>
                  </div>

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
            
            {/* Environmental Impact (E) */}
            <div className="esg-pillar-card esg-pillar-card--e">
              <img src={`${import.meta.env.BASE_URL}images/esg-env-banner.png`} alt="Environmental Impact" className="esg-pillar-card__banner" />
              <div className="esg-pillar-card__bg-svg-watermark">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 8a7 7 0 0 1-9 10Z" />
                  <path d="M19 2c-2.26 4.33-5.27 7.14-8 10" />
                </svg>
              </div>
              <div className="esg-pillar-card__body">
                <h3 className="esg-pillar-card__title">Environmental</h3>
                <p className="esg-pillar-card__desc">
                  Lower building cooling load directly decreases electricity consumption and Scope 2 GHG emissions. Upgrade building envelopes sustainably without the carbon expense of replacement.
                </p>
                <div className="esg-pillar-card__tags">
                  <span className="esg-pillar-card__tag">CO₂ Reduction</span>
                  <span className="esg-pillar-card__tag">Façade Retrofit</span>
                  <span className="esg-pillar-card__tag">Scope 2 GHG</span>
                </div>
              </div>
            </div>

            {/* Social Responsibility (S) */}
            <div className="esg-pillar-card esg-pillar-card--s">
              <img src={`${import.meta.env.BASE_URL}images/esg-soc-banner.png`} alt="Social Responsibility" className="esg-pillar-card__banner" />
              <div className="esg-pillar-card__bg-svg-watermark">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                  <path d="M12 8a2.5 2.5 0 0 0-4 3c1.5 2 4 4 4 4s2.5-2 4-4a2.5 2.5 0 0 0-4-3Z" />
                </svg>
              </div>
              <div className="esg-pillar-card__body">
                <h3 className="esg-pillar-card__title">Social</h3>
                <p className="esg-pillar-card__desc">
                  Eliminate hot spots and temperature imbalances to ensure visual comfort. Block 100% of skin-damaging UV420 rays and reduce screen glare for occupant wellness.
                </p>
                <div className="esg-pillar-card__tags">
                  <span className="esg-pillar-card__tag">100% UV Block</span>
                  <span className="esg-pillar-card__tag">Tenant Comfort</span>
                  <span className="esg-pillar-card__tag">Glare Reduction</span>
                </div>
              </div>
            </div>

            {/* Governance & Compliance (G) */}
            <div className="esg-pillar-card esg-pillar-card--g">
              <img src={`${import.meta.env.BASE_URL}images/esg-gov-banner.png`} alt="Governance & Compliance" className="esg-pillar-card__banner" />
              <div className="esg-pillar-card__bg-svg-watermark">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                  <path d="m9 11 2 2 4-4" />
                </svg>
              </div>
              <div className="esg-pillar-card__body">
                <h3 className="esg-pillar-card__title">Governance</h3>
                <p className="esg-pillar-card__desc">
                  Earn essential credits for Green Building GBI, LEED, and GRESB audits. Capture quantifiable energy savings data to support annual corporate compliance reports.
                </p>
                <div className="esg-pillar-card__tags">
                  <span className="esg-pillar-card__tag">LEED & GBI</span>
                  <span className="esg-pillar-card__tag">Quantifiable ROI</span>
                  <span className="esg-pillar-card__tag">Audit-Ready</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Performance Proof */}
      <section className="esg-section esg-performance">
        <div className="esg-container">
          <h2 className="esg-section__heading esg-text-center">Proven Performance</h2>
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

      {/* 6. Business Value Proposition (ROI) */}
      <section className="esg-business">
        <div className="esg-business__sticky">
          <div className="esg-business__slider">
            
            {/* Title Slide */}
            <div className="esg-business__slide esg-business__slide--title">
              <h2 className="esg-section__heading">Business Value Proposition (ROI)</h2>
              <p>
                Investing in passive cooling isn't just an environmental choice — it's a high-yield financial strategy. Here is how IrisPro delivers immediate and long-term business value.
              </p>
              <div className="esg-business__scroll-indicator">
                <span>Scroll to explore</span>
                <span className="esg-business__scroll-arrow">→</span>
              </div>
            </div>

            {/* Slide 1 */}
            <div className="esg-business__slide esg-business__slide--card">
              <div className="esg-roi-card">
                <span className="esg-roi-card__icon">⏱️</span>
                <h3 className="esg-roi-card__title">Fast Payback Period</h3>
                <p className="esg-roi-card__desc">
                  Energy savings often offset the installation cost within <strong>2 to 4 years</strong>, generating direct net savings for the remaining lifecycle.
                </p>
                <div className="esg-roi-card__badge">2-4 Years Payback</div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="esg-business__slide esg-business__slide--card">
              <div className="esg-roi-card">
                <span className="esg-roi-card__icon">📈</span>
                <h3 className="esg-roi-card__title">Asset Value Appreciation</h3>
                <p className="esg-roi-card__desc">
                  Energy-efficient buildings command higher rental yields and occupancy rates, immediately boosting <strong>long-term asset value</strong>.
                </p>
                <div className="esg-roi-card__badge">+Asset Valuation</div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="esg-business__slide esg-business__slide--card">
              <div className="esg-roi-card">
                <span className="esg-roi-card__icon">🏢</span>
                <h3 className="esg-roi-card__title">Zero Operational Downtime</h3>
                <p className="esg-roi-card__desc">
                  Clean, rapid, and non-disruptive installation means business continues exactly as usual during the window film retrofit.
                </p>
                <div className="esg-roi-card__badge">100% Active Ops</div>
              </div>
            </div>

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
