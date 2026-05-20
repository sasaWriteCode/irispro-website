import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BASE = import.meta.env.BASE_URL;

const FILM_LAYERS = [
  {
    id: 'layer-1',
    src: `${BASE}images/technology/layer1.png`,
    alt: 'IRISPRO anti-aging oxidation barrier layer',
  },
  {
    id: 'layer-2',
    src: `${BASE}images/technology/layer2.png`,
    alt: 'IRISPRO UV420 protection layer',
  },
  {
    id: 'layer-3',
    src: `${BASE}images/technology/layer3.png`,
    alt: 'IRISPRO HEV blue light filtering layer',
  },
  {
    id: 'layer-4',
    src: `${BASE}images/technology/layer4.png`,
    alt: 'IRISPRO nano titanium heat shield core',
  },
  {
    id: 'layer-5',
    src: `${BASE}images/technology/layer5.png`,
    alt: 'IRISPRO chip dye color stability layer',
  },
  {
    id: 'layer-6',
    src: `${BASE}images/technology/layer6.png`,
    alt: 'IRISPRO ceramic sputter technology layer',
  },
  {
    id: 'layer-7',
    src: `${BASE}images/technology/layer7.png`,
    alt: 'IRISPRO anti-scratch hard coat layer',
  },
  {
    id: 'layer-8',
    src: `${BASE}images/technology/layer8.png`,
    alt: 'IRISPRO release backing layer',
  },
];

const TECH_LABELS = [
  {
    title: 'Anti-Aging',
    desc: 'Oxidation Barrier',
    className: 'technology-layer__label--1',
  },
  {
    title: 'UV420 Protection',
    desc: 'Total UV Block',
    className: 'technology-layer__label--2',
  },
  {
    title: 'HEV Blue Light',
    desc: 'Filtering Technology',
    className: 'technology-layer__label--3',
  },
  {
    title: 'Nano Titanium',
    desc: 'Heat Shield Core',
    className: 'technology-layer__label--4',
  },
  {
    title: 'Chip Dye',
    desc: 'Deep Color Stability',
    className: 'technology-layer__label--5',
  },
  {
    title: 'Ceramic Sputter',
    desc: 'Multi-Layer Sputtering',
    className: 'technology-layer__label--6',
  },
  {
    title: 'Anti-Scratch',
    desc: 'Hard Coat Finish',
    className: 'technology-layer__label--7',
  },
  {
    title: 'Release Layer',
    desc: 'Protective Backing',
    className: 'technology-layer__label--8',
  },
];

export default function TechnologyProof() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      const layers = gsap.utils.toArray('.technology-layer__png');
      const labels = gsap.utils.toArray('.technology-layer__label');

      if (prefersReduced) {
        gsap.set('.technology-layer__content-side', {
          opacity: 1,
          xPercent: -50,
          yPercent: -50,
          y: 0,
        });

        gsap.set(layers, {
          opacity: 1,
          x: (index) => (index - 3.5) * 44,
          z: (index) => index * -70,
        });

        gsap.set(labels, {
          opacity: 1,
          x: 0,
        });

        gsap.set('.technology-layer__stage', {
          rotateX: 12,
          rotateY: -26,
          left: '50%',
          xPercent: -50,
          yPercent: -50,
        });

        return;
      }

      const mm = gsap.matchMedia();

      // Desktop layout: left: 25% starts, then glides to center (50%), side translates up and fades out
      mm.add('(min-width: 981px)', () => {
        // Initial setup for desktop
        gsap.set('.technology-layer__content-side', {
          opacity: 1,
          xPercent: -50,
          yPercent: -50,
          y: 0,
        });

        gsap.set(layers, {
          x: 0,
          z: 0,
          opacity: 0.78,
          transformOrigin: 'center center',
        });

        gsap.set(labels, {
          opacity: 0,
          x: 0,
        });

        gsap.set('.technology-layer__stage', {
          left: '25%', // starts in the left center of the viewport
          xPercent: -50,
          yPercent: -50,
          rotateX: 10,
          rotateY: -10,
          transformPerspective: 2000,
          transformStyle: 'preserve-3d',
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.5,
            pin: '.technology-layer__sticky',
          },
        });

        // Step 1: Reposition stage to 50% and slide up/fade out content-side
        tl.to(
          '.technology-layer__stage',
          {
            left: '50%',
            duration: 1.5,
            ease: 'power2.inOut',
          },
          0
        );

        tl.to(
          '.technology-layer__content-side',
          {
            y: -120,
            opacity: 0,
            duration: 1.5,
            ease: 'power2.inOut',
          },
          0
        );

        // Step 2: Explode product layers
        layers.forEach((layer, index) => {
          tl.to(
            layer,
            {
              x: (index - 3.5) * 88,
              z: index * -118,
              opacity: 1 - index * 0.045,
              duration: 2.0,
              ease: 'power2.out',
            },
            1.5 // begins when product reaches center
          );
        });

        // Rotate stage in 3D space
        tl.to(
          '.technology-layer__stage',
          {
            rotateY: -34,
            rotateX: 15,
            duration: 2.0,
            ease: 'power2.out',
          },
          1.5
        );

        // Step 3: Animate technical labels in
        labels.forEach((label, index) => {
          const direction = index % 2 === 0 ? -26 : 26;

          tl.to(
            label,
            {
              opacity: 1,
              x: direction,
              duration: 0.8,
              ease: 'power2.out',
            },
            2.0 + index * 0.15
          );
        });
      });

      // Mobile layout: stage starts centered at 50%, content-side at bottom fades out
      mm.add('(max-width: 980px)', () => {
        // Initial setup for mobile
        gsap.set('.technology-layer__content-side', {
          opacity: 1,
          xPercent: -50,
          yPercent: 0,
          y: 0,
        });

        gsap.set(layers, {
          x: 0,
          z: 0,
          opacity: 0.78,
          transformOrigin: 'center center',
        });

        gsap.set(labels, {
          opacity: 0,
          x: 0,
        });

        gsap.set('.technology-layer__stage', {
          left: '50%', // already centered
          xPercent: -50,
          yPercent: -50,
          rotateX: 10,
          rotateY: -10,
          transformPerspective: 2000,
          transformStyle: 'preserve-3d',
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.5,
            pin: '.technology-layer__sticky',
          },
        });

        // Step 1: Slide down / fade out content side
        tl.to(
          '.technology-layer__content-side',
          {
            y: 40,
            opacity: 0,
            duration: 1.2,
            ease: 'power2.inOut',
          },
          0
        );

        // Step 2: Explode product layers (compact for mobile)
        layers.forEach((layer, index) => {
          tl.to(
            layer,
            {
              x: (index - 3.5) * 44, // reduced mobile spacing
              z: index * -60,
              opacity: 1 - index * 0.045,
              duration: 2.0,
              ease: 'power2.out',
            },
            1.0
          );
        });

        // Rotate stage
        tl.to(
          '.technology-layer__stage',
          {
            rotateY: -24,
            rotateX: 12,
            duration: 2.0,
            ease: 'power2.out',
          },
          1.0
        );

        // Step 3: Animate labels
        labels.forEach((label, index) => {
          const direction = index % 2 === 0 ? -12 : 12;

          tl.to(
            label,
            {
              opacity: 1,
              x: direction,
              duration: 0.8,
              ease: 'power2.out',
            },
            1.4 + index * 0.15
          );
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="technology-layer"
      id="technology"
      aria-label="IRISPRO technology proof"
    >
      <div className="technology-layer__sticky">
        <div className="technology-layer__content-side">
          <p className="technology-layer__title-kicker">IRISPRO Technology</p>
          <p className="technology-layer__caption">
            4000 Days. Endless testing. Years of optimization. Keep improving. <br />After all, <strong style={{ color: '#151515', fontWeight: 800 }}>products follow function</strong>. And ultimately, you get an art that sets only the <span style={{ color: 'var(--irispro-red)', fontWeight: 900 }}>highest standards</span>.
          </p>
        </div>

        <div className="technology-layer__stage" aria-hidden="true">
          {FILM_LAYERS.map((layer) => (
            <img
              key={layer.id}
              src={layer.src}
              alt={layer.alt}
              className="technology-layer__png"
              loading="lazy"
            />
          ))}

          {TECH_LABELS.map((label, index) => (
            <div
              key={label.title}
              className={`technology-layer__label ${label.className}`}
            >
              <b>{label.title}</b>
              <span>{label.desc}</span>
              <em>{String(index + 1).padStart(2, '0')}</em>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}