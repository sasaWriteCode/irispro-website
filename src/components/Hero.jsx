import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import '../styles/hero.css';

const imagePath = (fileName) => `${import.meta.env.BASE_URL}images/${fileName}`;

const HERO_FRAMES = [
  {
    className: 'hero__frame--center',
    src: imagePath('hero-sunlight.png'),
    label: 'Protection begins with the sun.',
  },
  {
    className: 'hero__frame--left',
    src: imagePath('commercial-building-panel.png'),
    label: 'For every drive.',
  },
  {
    className: 'hero__frame--right-bottom',
    src: imagePath('residential-glass-panel.png'),
    label: 'For the people inside.',
  },
  {
    className: 'hero__frame--right-top',
    src: imagePath('residential-glass.png'),
    label: 'For the spaces we live in.',
  },
  {
    className: 'hero__frame--left-bottom',
    src: imagePath('commercial-building.png'),
    label: 'For the glass around us.',
  },
  {
    className: 'hero__frame--final',
    src: imagePath('hero-family-car.png'),
    label: 'Protection you live with.',
  },
];

export default function Hero() {
  const heroRef = useRef(null);
  const [loadedProgress, setLoadedProgress] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // 1. Programmatically preload and decode all frame images in parallel
  useEffect(() => {
    let active = true;
    let count = 0;

    // Dynamically inject link rel="preload" tags to start downloading immediately
    const links = HERO_FRAMES.map((frame) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = frame.src;
      document.head.appendChild(link);
      return link;
    });

    HERO_FRAMES.forEach((frame) => {
      const img = new Image();
      img.src = frame.src;

      const onProgress = () => {
        if (!active) return;
        count++;
        const pct = Math.round((count / HERO_FRAMES.length) * 100);
        setLoadedProgress(pct);
        if (count === HERO_FRAMES.length) {
          setTimeout(() => {
            if (active) setImagesLoaded(true);
          }, 350);
        }
      };

      if (img.complete) {
        onProgress();
      } else {
        img.onload = () => {
          if ('decode' in img) {
            img.decode()
              .then(onProgress)
              .catch(onProgress);
          } else {
            onProgress();
          }
        };
        img.onerror = onProgress;
      }
    });

    return () => {
      active = false;
      links.forEach((link) => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, []);

  // 2. Timeline runs ONLY after all images are ready and decoded
  useEffect(() => {
    if (!imagesLoaded) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set('.hero__brand, .hero__mega-word, .hero__frame--final, .hero__story, .hero__scroll', {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
        });
        return;
      }

      const frames = gsap.utils.toArray('.hero__frame');
      const storyItems = gsap.utils.toArray('.hero__story-item');

      gsap.set(frames, {
        opacity: 0,
        scale: 1,
      });

      gsap.set(storyItems, {
        opacity: 0,
        y: 16,
      });

      gsap.set('.hero__brand', {
        opacity: 0,
        y: -16,
      });

      gsap.set('.hero__mega-word', {
        opacity: 1,
        scale: 1,
        y: 0,
        transformOrigin: 'center center',
      });

      gsap.set('.hero__scroll', {
        opacity: 0,
      });

      // Prevent GSAP's lag compensation from adding stutter on the heavy final frame
      gsap.ticker.lagSmoothing(0);

      const tl = gsap.timeline({
        defaults: {
          ease: 'none',
          force3D: true,
        },
      });


      // Frame 1 starts after 0.5s
      const frameStart = 0.5;
      const frameInterval = 0.5;

      // Show Frame 1 at 0.5s
      tl.set(
        frames,
        {
          opacity: 0,
          zIndex: 1,
        },
        frameStart
      );

      tl.set(
        frames[0],
        {
          opacity: 1,
          zIndex: 5,
          scale: 1,
        },
        frameStart
      );

      tl.set(
        storyItems,
        {
          opacity: 0,
          y: 16,
        },
        frameStart
      );

      tl.to(
        storyItems[0],
        {
          opacity: 1,
          y: 0,
          duration: 0.12,
          ease: 'power2.out',
        },
        frameStart + 0.02
      );

      // ── Responsive mega-word final scale ──────────────────────────────────
      // On desktop (≥ 980px) keep the original 1.66.
      // On mobile, measure the actual rendered font size and compute the scale
      // that makes "IRISPRO" fill exactly the viewport width without overflowing.
      //   • "IRISPRO" = 7 chars
      //   • Inter Black + letter-spacing -0.105em → effective advance ≈ 0.495em per char
      //   → target: fontSize × 7 × 0.495 × scale = vw
      let megaWordScale = 1.66;
      const viewportWidth = window.innerWidth;
      if (viewportWidth < 980) {
        const megaEl = heroRef.current?.querySelector('.hero__mega-word');
        if (megaEl) {
          const fs = parseFloat(getComputedStyle(megaEl).fontSize);
          const estimatedWordWidth = fs * 7 * 0.495;
          megaWordScale = viewportWidth / estimatedWordWidth;
          // Floor at 1.1 (always animate upward) and cap at 1.66 (never exceed desktop)
          megaWordScale = Math.min(1.66, Math.max(1.1, megaWordScale));
        }
      }

      // Frame 2 onwards
      HERO_FRAMES.slice(1).forEach((_, slicedIndex) => {
        const index = slicedIndex + 1;
        const frame = frames[index];
        const story = storyItems[index];
        const time = frameStart + index * frameInterval;

        // Hard cut to next frame every 0.5s
        tl.set(
          frames,
          {
            opacity: 0,
            zIndex: 1,
          },
          time
        );

        tl.set(
          frame,
          {
            opacity: 1,
            zIndex: 5,
            scale: 1,
          },
          time
        );

        tl.set(
          storyItems,
          {
            opacity: 0,
            y: 16,
          },
          time
        );

        tl.to(
          story,
          {
            opacity: 1,
            y: 0,
            duration: 0.12,
            ease: 'power2.out',
          },
          time + 0.02
        );

        // Start IRISPRO word animation from Frame 3
        // In array terms: index 3 = fourth frame
        if (index === 3) {
          tl.to(
            '.hero__mega-word',
            {
              scale: megaWordScale,
              duration: 4,
              ease: 'power4.out',
              force3D: true,
            },
            time
          );
        }

        // Only final frame image zooms out + brand appears together
        if (index === HERO_FRAMES.length - 1) {
          tl.fromTo(
            frame,
            {
              scale: 1.12,
            },
            {
              scale: 1.02,
              duration: 1.6,
              ease: 'power2.out',
              force3D: true,
            },
            time
          );

          tl.to(
            '.hero__brand',
            {
              opacity: 1,
              y: 0,
              duration: 0.45,
              ease: 'power2.out',
            },
            time
          );
        }
      });

      tl.to(
        '.hero__scroll',
        {
          opacity: 1,
          duration: 0.45,
        },
        '>-0.2'
      );
    }, heroRef);

    return () => ctx.revert();
  }, [imagesLoaded]);

  return (
    <section ref={heroRef} className="hero" id="hero" aria-label="IrisPro protection hero">
      {/* Premium Minimal Preloader */}
      <div className={`hero__loader ${imagesLoaded ? 'is-loaded' : ''}`}>
        <span className="hero__loader-text">Loading cinematic experience</span>
        <div className="hero__loader-line">
          <div className="hero__loader-progress" style={{ '--progress': `${loadedProgress}%` }} />
        </div>
      </div>

      <div className="hero__flash" aria-hidden="true" />

      <div className="hero__brand">
        <span>Malaysia Made Protection</span>
      </div>

      <div className="hero__stage" aria-hidden="true">
        {HERO_FRAMES.map((frame) => (
          <figure className={`hero__frame ${frame.className}`} key={frame.src}>
            <img src={frame.src} alt="" />
          </figure>
        ))}
      </div>

      <div className="hero__mega-word" aria-hidden="true">
        IRIS<span className="hero__mega-word-red">P</span>RO
      </div>

      <div className="hero__story" aria-live="polite">
        {HERO_FRAMES.map((frame) => (
          <p className="hero__story-item" key={frame.label}>
            {frame.label}
          </p>
        ))}
      </div>

      <a className="hero__scroll" href="#problem" aria-label="Scroll to begin the protection story">
        <span>Begin the protection story</span>
        <i />
      </a>
    </section>
  );
}