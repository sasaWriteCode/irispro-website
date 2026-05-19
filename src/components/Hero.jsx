import { useEffect, useRef } from 'react';
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

  useEffect(() => {
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
        opacity: 0,
        scale: 0.72,
        y: 70,
      });

      gsap.set('.hero__scroll', {
        opacity: 0,
      });

      const tl = gsap.timeline({
        defaults: {
          ease: 'power4.out',
        },
      });

      tl.to('.hero__brand', {
        opacity: 1,
        y: 0,
        duration: 0.55,
      });

      tl.to(
        '.hero__mega-word',
        {
          opacity: 1,
          scale: 1.06,
          y: 0,
          duration: 0.9,
          ease: 'power4.out',
        },
        0.15
      );

      tl.to(
        '.hero__mega-word',
        {
          scale: 1,
          duration: 0.75,
          ease: 'power3.out',
        },
        '>'
      );

      /* First BAIKAL-style cover frame appears right after IRISPRO settles */
      tl.set('.hero', {
        '--hero-flash-color': '#f26a00',
      });

      tl.to('.hero__flash', {
        opacity: 1,
        duration: 0.04,
        ease: 'none',
      });

      tl.to('.hero__flash', {
        opacity: 0,
        duration: 0.04,
        ease: 'none',
      });

      tl.set(frames, {
        opacity: 0,
        zIndex: 1,
      });

      tl.set(frames[0], {
        opacity: 1,
        zIndex: 5,
        scale: 1,
      });

      tl.set(storyItems, {
        opacity: 0,
        y: 16,
      });

      tl.to(
        storyItems[0],
        {
          opacity: 1,
          y: 0,
          duration: 0.22,
          ease: 'power2.out',
        },
        '<'
      );

      tl.to(
        frames[0],
        {
          scale: 1.045,
          duration: 1.05,
          ease: 'none',
        },
        '<'
      );

      HERO_FRAMES.slice(1).forEach((_, slicedIndex) => {
        const index = slicedIndex + 1;
        const frame = frames[index];
        const story = storyItems[index];

        tl.set('.hero', {
          '--hero-flash-color': index % 2 === 0 ? '#f26a00' : '#fff4df',
        });

        tl.to(
          '.hero__flash',
          {
            opacity: 1,
            duration: 0.05,
            ease: 'none',
          },
          index === 0 ? '>-0.1' : '>'
        );

        tl.to('.hero__flash', {
          opacity: 0,
          duration: 0.05,
          ease: 'none',
        });

        tl.set(frames, {
          opacity: 0,
          zIndex: 1,
        });

        tl.set(frame, {
          opacity: 1,
          zIndex: 5,
        });

        tl.set(storyItems, {
          opacity: 0,
          y: 16,
        });

        tl.to(
          story,
          {
            opacity: 1,
            y: 0,
            duration: 0.22,
            ease: 'power2.out',
          },
          '<'
        );

        if (index < HERO_FRAMES.length - 1) {
          tl.to(
            frame,
            {
              scale: 1.06,
              duration: 0.82,
              ease: 'none',
            },
            '<'
          );
        } else {
          tl.fromTo(
            frame,
            {
              scale: 1,
            },
            {
              scale: 0.9,
              duration: 1.15,
              ease: 'power2.out',
            },
            '<'
          );

          tl.to(
            '.hero__mega-word',
            {
              scale: 1.1,
              duration: 1.15,
              ease: 'power2.out',
            },
            '<'
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
  }, []);

  return (
    <section ref={heroRef} className="hero" id="hero" aria-label="IrisPro protection hero">
      <div className="hero__flash" aria-hidden="true" />

      <div className="hero__top-pill" aria-hidden="true">
        <span />
        <span />
      </div>

      <div className="hero__brand">
        <strong>IRISPRO</strong>
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
        IRISPRO
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