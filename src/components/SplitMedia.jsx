import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BASE = import.meta.env.BASE_URL;

export default function SplitMedia() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReduced) {
        gsap.set('.split-media__text', { opacity: 1, y: 0 });
        gsap.set('.split-media__media-left', { opacity: 1, x: 0 });
        gsap.set('.split-media__media-right', { opacity: 1, x: 0 });
        return;
      }

      // Media columns reveal
      gsap.from('.split-media__media-left', {
        opacity: 0,
        x: -60,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.split-media__grid',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from('.split-media__media-right', {
        opacity: 0,
        x: 60,
        duration: 1.2,
        delay: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.split-media__grid',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      // Editorial text fade in
      gsap.from('.split-media__text', {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.split-media__text',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      // Subtitle transition fade in
      gsap.from('.split-media__subtitle', {
        opacity: 0,
        y: 35,
        duration: 1,
        delay: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.split-media__subtitle',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="split-media"
      id="split-media"
      aria-label="IRISPRO product showcase"
    >
      {/* Split media grid */}
      <div className="split-media__grid">
        <div className="split-media__media-left">
          <div className="split-media__video-wrapper">
            <video
              className="split-media__video"
              src={`${BASE}videos/split_vid_left.mp4`}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          </div>
        </div>
        <div className="split-media__media-right">
          <img
            src={`${BASE}images/split-media-building.png`}
            alt="Modern building with IRISPRO window film reflecting golden sunlight"
            className="split-media__img"
            loading="lazy"
          />
        </div>
      </div>

      {/* Transition subtitle sentence at the bottom of the video grid */}
      <div className="split-media__subtitle-wrapper">
        <p className="split-media__subtitle">
          Fighting sunlight was never just about making glass darker.
        </p>
      </div>

      {/* Editorial text block */}
      <div className="split-media__text-wrapper">
        <p className="split-media__text">
          Sunlight is constant, unforgiving, and often underestimated. <br />
          We are now entering the real-world test. <br />
          The <span className="split-media__highlight">IRISPRO</span> is no longer a promise. <br />
          It is being observed under pressure.
        </p>
      </div>
    </section>
  );
}
