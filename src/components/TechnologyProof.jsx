import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BASE = import.meta.env.BASE_URL;

const FILM_LAYERS = [
  {
    id: 'layer-1',
    src: `${BASE}images/technology/layer1.png`,
    alt: 'IRISPRO Hard Coating with UV and Anti-Aging protection layer',
  },
  {
    id: 'layer-2',
    src: `${BASE}images/technology/layer2.png`,
    alt: 'IRISPRO Hotmelt composite layer — Anti-Aging, UV420, Blue Light, Chip Dye, Heat Rejection',
  },
  {
    id: 'layer-3',
    src: `${BASE}images/technology/layer3.png`,
    alt: 'IRISPRO Anti-Aging layer',
  },
  {
    id: 'layer-4',
    src: `${BASE}images/technology/layer4.png`,
    alt: 'IRISPRO Patented UV and Blue Light material',
  },
  {
    id: 'layer-5',
    src: `${BASE}images/technology/layer5.png`,
    alt: 'IRISPRO Chip Dye Color layer',
  },
  {
    id: 'layer-6',
    src: `${BASE}images/technology/layer6.png`,
    alt: 'IRISPRO Heat Rejection Material layer',
  },
  {
    id: 'layer-7',
    src: `${BASE}images/technology/layer7.png`,
    alt: 'IRISPRO Multi Layer Sputtering heat reflect layer',
  },
  {
    id: 'layer-8',
    src: `${BASE}images/technology/layer8.png`,
    alt: 'IRISPRO Adhesive with Anti-Aging and UV Absorbant material',
  },
  {
    id: 'layer-9',
    src: `${BASE}images/technology/layer8.png`,
    alt: 'IRISPRO Premium Quality Release Liner',
  },
];

const TECH_LABELS = [
  {
    title: 'Hard Coating',
    desc: 'UV & Anti-Aging Protection',
    className: 'technology-layer__label--1',
  },
  {
    title: 'Anti-Aging',
    desc: 'Oxidation Resistance',
    className: 'technology-layer__label--2',
  },
  {
    title: 'UV & Blue Light',
    desc: 'Patented Filtering Material',
    className: 'technology-layer__label--3',
  },
  {
    title: 'Chip Dye Color',
    desc: 'Deep Color Stability',
    className: 'technology-layer__label--4',
  },
  {
    title: 'Heat Rejection',
    desc: 'Thermal Shield Material',
    className: 'technology-layer__label--5',
  },
  {
    title: 'UV & Blue Light',
    desc: 'Patented Filter Layer',
    className: 'technology-layer__label--6',
  },
  {
    title: 'Multi Layer Sputter',
    desc: 'Enhanced Heat Reflection',
    className: 'technology-layer__label--7',
  },
  {
    title: 'UV Absorbant Adhesive',
    desc: 'Anti-Aging Bonding Layer',
    className: 'technology-layer__label--8',
  },
  {
    title: 'Release Liner',
    desc: 'Premium Quality Backing',
    className: 'technology-layer__label--9',
  },
];

export default function TechnologyProof() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      const layers = gsap.utils.toArray('.technology-layer__png');
      const desktopLabels = gsap.utils.toArray('.technology-layer__label-desktop');
      const mobileLabels = gsap.utils.toArray('.technology-layer__label-mobile');

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

        gsap.set('.technology-layer__label-desktop, .technology-layer__label-mobile', {
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

        gsap.set(desktopLabels, {
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
        // Same spreading logic as ai_studio_code.html
        layers.forEach((layer, index) => {
          const layerNumber = index + 1;

          tl.to(
            layer,
            {
              x: (layerNumber - 5) * 90,
              z: (layerNumber - 1) * -120,
              opacity: 1 - layerNumber * 0.05,
              duration: 2,
              ease: 'power2.out',
            },
            1.5
          );
        });

        // Rotate the whole stage after it reaches center
        tl.to(
          '.technology-layer__stage',
          {
            rotateY: -35,
            rotateX: 15,
            x: -200,
            duration: 4,
            ease: 'none',
          },
          1.5
        );

        // Step 3: Animate technical labels in
        desktopLabels.forEach((label, index) => {
          const layerNumber = index + 1;
          const labelDirection = layerNumber % 2 === 0 ? 30 : -30;

          tl.to(
            label,
            {
              opacity: 1,
              x: labelDirection,
              duration: 1,
              ease: 'power2.out',
            },
            1.5 + layerNumber * 0.4
          );
        });
      });

      // Mobile layout — vertical spread, labels in a neat flex list on the left
      mm.add('(max-width: 980px)', () => {
        gsap.set('.technology-layer__content-side', {
          opacity: 1,
          xPercent: -50,
          yPercent: 0,
          y: 0,
        });

        gsap.set(layers, {
          x: 0,
          y: 0,
          z: 0,
          opacity: 0.78,
          transformOrigin: 'center center',
        });

        // Set container and label initial states
        gsap.set('.technology-layer__mobile-labels', { opacity: 0 });
        gsap.set(mobileLabels, { opacity: 0, x: -15 });

        gsap.set('.technology-layer__stage', {
          left: '50%',
          top: '50%',
          xPercent: -50,
          yPercent: -50,
          rotateX: 6,
          rotateY: 0,
          transformPerspective: 1800,
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

        // Step 1: Fade out caption AND move stage to the right (left: 90%)
        tl.to(
          '.technology-layer__content-side',
          { y: 40, opacity: 0, duration: 1.2, ease: 'power2.inOut' },
          0
        );

        tl.to(
          '.technology-layer__stage',
          {
            left: '90%',
            y: -120,
            duration: 1.5,
            ease: 'power2.inOut',
          },
          0
        );

        // Step 2: Fade in the mobile labels container
        tl.to(
          '.technology-layer__mobile-labels',
          {
            opacity: 1,
            duration: 1.2,
            ease: 'power2.out',
          },
          1.0
        );

        // Step 3: Fan layers vertically + stagger-fade each label
        const FAN_SPACING = 38;

        layers.forEach((layer, index) => {
          const layerNumber = index + 1;
          const targetY = (layerNumber - 4.5) * FAN_SPACING;

          // Fan the layer
          tl.to(
            layer,
            {
              x: 0,
              y: targetY,
              z: (layerNumber - 1) * -52,
              opacity: 1 - layerNumber * 0.05,
              duration: 2.0,
              ease: 'power2.out',
            },
            1.0
          );

          // Staggered slide and fade-in for labels
          if (mobileLabels[index]) {
            tl.to(
              mobileLabels[index],
              {
                x: 0,
                opacity: 1,
                duration: 1.5,
                ease: 'power2.out',
              },
              1.0 + index * 0.12
            );
          }
        });

        // Tilt the stage forward to reveal the vertical fan
        tl.to(
          '.technology-layer__stage',
          {
            rotateX: 32,
            rotateY: -8,
            duration: 2.0,
            ease: 'power2.out',
          },
          1.0
        );
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

          {/* Desktop Labels (nested inside stage to rotate in 3D) */}
          {TECH_LABELS.map((label, index) => (
            <div
              key={`desktop-${label.title}`}
              className={`technology-layer__label technology-layer__label-desktop ${label.className}`}
            >
              <b>{label.title}</b>
              <span>{label.desc}</span>
              <em>{String(index + 1).padStart(2, '0')}</em>
            </div>
          ))}
        </div>

        {/* Mobile Labels (positioned flat outside the 3D stage to avoid rotation and distortion) */}
        <div className="technology-layer__mobile-labels" aria-hidden="true">
          {TECH_LABELS.map((label, index) => (
            <div
              key={`mobile-${label.title}`}
              className="technology-layer__label-mobile"
            >
              <span className="technology-layer__label-mobile-num">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h4 className="technology-layer__label-mobile-title">{label.title}</h4>
              <p className="technology-layer__label-mobile-desc">{label.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}