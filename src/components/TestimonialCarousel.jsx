import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BASE = import.meta.env.BASE_URL;

const TESTIMONIALS = [
  {
    img: `${BASE}images/testimonial-1.png`,
    alt: 'Satisfied client with luxury sedan featuring IRISPRO window tint',
  },
  {
    img: `${BASE}images/testimonial-2.png`,
    alt: 'Architect client with IRISPRO commercial building installation',
  },
  {
    img: `${BASE}images/testimonial-3.png`,
    alt: 'Happy family with IRISPRO window tint on their SUV',
  },
  {
    img: `${BASE}images/testimonial-4.png`,
    alt: 'Business owner in showroom with IRISPRO window film',
  },
];

export default function TestimonialCarousel() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.testimonial-card');

      if (prefersReduced) {
        cards.forEach((card) => gsap.set(card, { opacity: 1, y: 0 }));
        return;
      }

      cards.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }, sectionRef);

    // Drag-to-scroll for desktop mouse users
    const track = trackRef.current;
    if (!track) return () => ctx.revert();

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onMouseDown = (e) => {
      isDown = true;
      track.classList.add('is-dragging');
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    };

    const onMouseLeave = () => {
      isDown = false;
      track.classList.remove('is-dragging');
    };

    const onMouseUp = () => {
      isDown = false;
      track.classList.remove('is-dragging');
    };

    const onMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.5;
      track.scrollLeft = scrollLeft - walk;
    };

    track.addEventListener('mousedown', onMouseDown);
    track.addEventListener('mouseleave', onMouseLeave);
    track.addEventListener('mouseup', onMouseUp);
    track.addEventListener('mousemove', onMouseMove);

    return () => {
      ctx.revert();
      track.removeEventListener('mousedown', onMouseDown);
      track.removeEventListener('mouseleave', onMouseLeave);
      track.removeEventListener('mouseup', onMouseUp);
      track.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="testimonial-carousel"
      id="testimonials"
      aria-label="Client testimonials"
    >
      <div className="testimonial-carousel__track" ref={trackRef}>
        {TESTIMONIALS.map((t, i) => (
          <article key={i} className="testimonial-card">
            <div className="testimonial-card__img-wrapper">
              <img
                src={t.img}
                alt={t.alt}
                className="testimonial-card__img"
                loading="lazy"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
