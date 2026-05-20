import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function IrisLayer() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      if (prefersReduced) {
        gsap.set('.iris-layer__after', { clipPath: 'inset(0 0% 0 0)' });
        gsap.set('.iris-layer__content', { y: 0 });
        return;
      }

      // Initial state for text (starts below viewport)
      gsap.set('.iris-layer__content', { y: '90vh' });

      // ── 1. PINNING TIMELINE ──
      // Pins the viewport while the sweep reveal and text scroll-to-center occur.
      // Releases once the text reaches the vertical center (y: '0').
      const pinTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=150%', // Pin locked for 1.5x viewport height of scrolling
          scrub: 1,
          pin: '.iris-layer__sticky',
        },
      });

      // A. Background sweep transition (from unprotected to comfortable family)
      pinTl.to('.iris-layer__after', {
        clipPath: 'inset(0 0% 0 0)',
        duration: 0.5,
        ease: 'none',
      }, 0);

      // B. Cinematic credits scroll UP to vertical center (y: 0)
      pinTl.fromTo(
        '.iris-layer__content',
        { y: '90vh' },
        { y: '0', duration: 0.5, ease: 'none' },
        0.5
      );

      // C. Smooth background dimming (dim "before" completely to 0, "after" to 0.15)
      pinTl.to(
        '.iris-layer__before',
        { opacity: 0, duration: 0.5, ease: 'power1.inOut' },
        0.5
      );
      pinTl.to(
        '.iris-layer__after',
        { opacity: 0.15, duration: 0.5, ease: 'power1.inOut' },
        0.5
      );

      // ── 2. CONTINUOUS PARALLAX ──
      // Only starts when the pin releases (when text reaches the center at top+=150vh scroll)
      // keeping background images static during the background sweep and text-scrolling transitions,
      // then giving the background a distinct slower speed relative to the scrolling page.
      gsap.fromTo(
        ['.iris-layer__before img', '.iris-layer__after img'],
        { scale: 1.22, yPercent: -8 },
        {
          scale: 1.0,
          yPercent: 8,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: () => `top+=${window.innerHeight * 1.5} top`,
            end: 'bottom bottom',
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="iris-layer" id="iris-layer" aria-label="Iris protective film layer">
      <div className="iris-layer__sticky">
        {/* Before (harsh) */}
        <div className="iris-layer__before">
          <img src={`${import.meta.env.BASE_URL}images/problem-heat.png`} alt="Harsh unprotected sunlight through glass" loading="lazy" />
        </div>
        {/* After (protected) */}
        <div className="iris-layer__after">
          <img src={`${import.meta.env.BASE_URL}images/happy-family.png`} alt="Comfortable interior with Iris film protection" loading="lazy" />
        </div>
        {/* Text overlay */}
        <div className="iris-layer__content">
          <h2 className="iris-layer__headline">
            We know whats comfort and what's <br /><span style={{ color: 'var(--irispro-red)' }}>NOT</span>
          </h2>
          <p className="iris-layer__sub">
            By understanding the sun <br /> IrisPro help humans to test all the solution <br /> to find the best <span style={{ color: 'var(--irispro-red)' }}>ONE</span>          </p>
        </div>
      </div>
    </section>
  );
}
