import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const RECOGNITION_IMAGES = [
  {
    src: `${import.meta.env.BASE_URL}images/hot-car-exterior.png`,
    alt: 'Vehicle exposed to strong tropical sunlight',
    marker: '01',
    type: 'image',
  },
  {
    alt: 'IRISPRO window film — real world demonstration',
    marker: '02',
    type: 'video',
    youtubeId: 'fDMOpe9da7E',
  },
];

export default function RecognitionChapter() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReduced) {
        gsap.set(
          '.recognition__media, .recognition__caption, .recognition__intro',
          {
            opacity: 1,
            y: 0,
            clipPath: 'inset(0% 0% 0% 0%)',
          }
        );
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: 'bottom 35%',
          scrub: 1,
        },
      });

      tl.to(
        '.recognition__intro',
        {
          opacity: 1,
          y: 0,
          duration: 0.2,
          ease: 'power2.out',
        },
        0
      );

      tl.to(
        '.recognition__media',
        {
          opacity: 1,
          y: 0,
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 0.45,
          stagger: 0.08,
          ease: 'power3.out',
        },
        0.12
      );

      tl.to(
        '.recognition__media img',
        {
          scale: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: 'none',
        },
        0.12
      );

      tl.to(
        '.recognition__caption',
        {
          opacity: 1,
          y: 0,
          duration: 0.22,
          ease: 'power2.out',
        },
        0.40
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="recognition"
      id="recognition"
      aria-label="Recognition of everyday heat and glare"
    >
      <div className="recognition__inner">
        <div className="recognition__grid">
          {RECOGNITION_IMAGES.map((image, index) => (
            <figure
              className={`recognition__item recognition__item--${index + 1}`}
              key={image.alt}
            >
              <div className={`recognition__media${image.type === 'video' ? ' recognition__media--video' : ''}`}>
                {image.type === 'video' ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${image.youtubeId}?rel=0&modestbranding=1`}
                    title={image.alt}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                ) : (
                  <img src={image.src} alt={image.alt} loading="lazy" />
                )}
                <span className="recognition__marker">{image.marker}</span>
              </div>

              {index === 1 && (
                <figcaption className="recognition__caption">
                  Heat, glare and exposure are often invisible at first — until they begin
                  to shape the way every drive feels.
                </figcaption>
              )}
            </figure>
          ))}
        </div>
        <div className="recognition__intro">
          <p className="recognition__label">Recognition</p>
          <p className="recognition__statement">
            We first recognize what daily sunlight really does.
          </p>
        </div>
      </div>
    </section>
  );
}