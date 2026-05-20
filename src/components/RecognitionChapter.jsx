import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const RECOGNITION_IMAGES = [
  {
    src: `${import.meta.env.BASE_URL}images/problem-child-heat.png`,
    alt: 'Child in car squinting from sun glare',
    marker: '01',
    type: 'image',
  },
  {
    src: `${import.meta.env.BASE_URL}videos/recognition-demo.mp4`,
    poster: `${import.meta.env.BASE_URL}images/recognition-squint.png`,
    alt: 'IRISPRO window film real-world demonstration',
    marker: '02',
    type: 'video',
  },
];

export default function RecognitionChapter() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsVideoPlaying(true);
    } else {
      video.pause();
      setIsVideoPlaying(false);
    }
  };

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) return;

    video.muted = true;
    video.playsInline = true;

    const playVideo = async () => {
      try {
        await video.play();
        setIsVideoPlaying(true);
      } catch (error) {
        setIsVideoPlaying(false);
      }
    };

    const pauseVideo = () => {
      video.pause();
      setIsVideoPlaying(false);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          playVideo();
        } else {
          pauseVideo();
        }
      },
      {
        threshold: 0.45,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      pauseVideo();
    };
  }, []);

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

        gsap.set('.recognition__media img, .recognition__media video', {
          scale: 1,
        });

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
          duration: 0.5,
          ease: 'power3.out',
        },
        0.12
      );

      tl.to(
        '.recognition__media img, .recognition__media video',
        {
          scale: 1,
          duration: 0.7,
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
        0.4
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
              <div
                className={`recognition__media${image.type === 'video' ? ' recognition__media--video' : ''
                  }`}
              >
                {image.type === 'video' ? (
                  <>
                    <video
                      ref={videoRef}
                      className="recognition__video"
                      src={image.src}
                      poster={image.poster}
                      muted
                      defaultMuted
                      loop
                      playsInline
                      preload="metadata"
                      aria-label={image.alt}
                      onClick={toggleVideo}
                      onPlay={() => setIsVideoPlaying(true)}
                      onPause={() => setIsVideoPlaying(false)}
                    />

                    <button
                      className={`recognition__play ${isVideoPlaying ? 'recognition__play--hidden' : ''
                        }`}
                      type="button"
                      aria-label={isVideoPlaying ? 'Pause video' : 'Play video'}
                      onClick={toggleVideo}
                    >
                      <span className="recognition__play-icon" />
                    </button>
                  </>
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