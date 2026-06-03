import { useEffect, useRef } from 'react';

const REVIEWS = [
  {
    name: 'Shahrol Halmi',
    initial: 'S',
    color: '#4285F4',
    time: 'a weeks ago',
    rating: 5,
    text: 'Been coming here for years to tint our cars. Great quality films and they stand behind their work, which is very nice. Lay Ling the manager is very attentive and friendly. Comfortable waiting area too.',
  },
  {
    name: 'Elenie',
    initial: 'E',
    color: '#85560bff',
    time: '2 weeks ago',
    rating: 5,
    text: 'Good experience and great service from them. Staff named Lay Ling really helpful and friendly. Eventhough we had some miscommunications on the dates, but she calmly solve the issue and installation can be done within the same day. Thanks so much.',
  },
  {
    name: 'Jason Wong',
    initial: 'J',
    color: '#F4B400',
    time: '1 month ago',
    rating: 5,
    text: 'Very satisfied with the heat rejection. The car feels different under afternoon sun.',
  },
  {
    name: 'Sabrina Yap',
    initial: 'S',
    color: '#DB4437',
    time: '2 months ago',
    rating: 5,
    text: 'Clear view, less glare, and the interior feels more protected.',
  },
  {
    name: 'Daniel Chia',
    initial: 'D',
    color: '#4285F4',
    time: '2 months ago',
    rating: 5,
    text: 'Installed on my BMW. The difference in cabin temperature is night and day. Highly recommend.',
  },
  {
    name: 'Nurul Aisyah',
    initial: 'N',
    color: '#0F9D58',
    time: '3 months ago',
    rating: 5,
    text: 'Friendly staff, fast service. My car looks so sleek with the tint and the UV protection is excellent.',
  },
  {
    name: 'Kevin Loh',
    initial: 'K',
    color: '#F4B400',
    time: '3 months ago',
    rating: 5,
    text: 'Professional team. Film quality is superb — no bubbles, no peeling. Five stars.',
  },
  {
    name: 'Priya Nair',
    initial: 'P',
    color: '#DB4437',
    time: '4 months ago',
    rating: 5,
    text: 'Third car with IRISPRO. Consistent quality every time. Worth every ringgit.',
  },
];

/* Google "G" mini icon (simplified SVG) */
const GoogleG = () => (
  <svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M43.6 20.5H42V20.3H24V27.7H35.1C33.4 32.5 29.1 36 24 36C17.4 36 12 30.6 12 24C12 17.4 17.4 12 24 12C27 12 29.8 13.1 31.9 15L37.3 9.6C33.9 6.4 29.2 4.5 24 4.5C13.3 4.5 4.5 13.3 4.5 24C4.5 34.7 13.3 43.5 24 43.5C34.7 43.5 43.5 34.7 43.5 24C43.5 22.8 43.6 21.6 43.6 20.5Z" fill="#FFC107" />
    <path d="M6.3 14.7L12.5 19.2C14.3 14.7 18.8 11.5 24 11.5C27 11.5 29.7 12.6 31.9 14.5L37.3 9.1C33.9 6 29.2 4 24 4C16.3 4 9.7 8.4 6.3 14.7Z" fill="#FF3D00" />
    <path d="M24 44C29.1 44 33.7 42.2 37.1 39.1L31.2 34.1C29.2 35.6 26.7 36.5 24 36.5C19 36.5 14.7 33.1 13 28.4L6.9 33.1C10.2 39.6 16.6 44 24 44Z" fill="#4CAF50" />
    <path d="M43.6 20.5H42V20.3H24V27.7H35.1C34.3 30 32.8 31.9 30.9 33.3L30.9 33.3L36.8 38.3C36.4 38.7 44 33 44 24C44 22.8 43.8 21.6 43.6 20.5Z" fill="#1976D2" />
  </svg>
);

/* Star rating component */
const Stars = ({ count }) => (
  <div className="cr-stars" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: count }, (_, i) => (
      <span key={i} className="cr-star">★</span>
    ))}
  </div>
);

/* Google logo for header */
const GoogleLogo = () => (
  <svg width="74" height="24" viewBox="0 0 272 92" xmlns="http://www.w3.org/2000/svg">
    <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335" />
    <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C119.25 34.32 129.24 25 141.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05" />
    <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4" />
    <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853" />
    <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335" />
    <path d="M35.29 41.19V32H67.25C67.59 33.79 67.78 35.96 67.78 38.29c0 7.47-2.04 16.72-8.63 23.31C52.79 68.19 44.83 72 35.29 72 17.04 72 2 57.38 2 39.13S17.04 6.25 35.29 6.25c10.07 0 17.28 3.95 22.67 9.08l-6.38 6.38c-3.87-3.61-9.08-6.44-16.29-6.44-13.28 0-23.65 10.71-23.65 23.86s10.37 23.86 23.65 23.86c8.63 0 13.53-3.44 16.72-6.63 2.58-2.58 4.28-6.3 4.96-11.36H35.29z" fill="#4285F4" />
  </svg>
);

/* Single review card */
const ReviewCard = ({ review }) => (
  <div className="cr-card">
    <div className="cr-card__header">
      <div className="cr-card__avatar" style={{ background: review.color }}>
        {review.initial}
      </div>
      <div className="cr-card__info">
        <span className="cr-card__name">{review.name}</span>
        <span className="cr-card__time">{review.time}</span>
      </div>
      <div className="cr-card__g-icon">
        <GoogleG />
      </div>
    </div>
    <Stars count={review.rating} />
    <p className="cr-card__text">{review.text}</p>
  </div>
);

export default function CustomerReviews() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ── Infinite vertical scroll animation ──────────────────────────────
    // Clone the review cards so the carousel loops seamlessly.
    // We clone the entire set once — this gives us a full buffer.
    const originalCards = Array.from(track.children);
    originalCards.forEach((card) => {
      const clone = card.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      track.appendChild(clone);
    });

    // Measure the height of the original set (before clones)
    const singleSetHeight = originalCards.reduce(
      (sum, card) => sum + card.offsetHeight + parseFloat(getComputedStyle(track).gap || 0),
      0
    );

    let animId;
    let isPaused = false;
    let scrollY = 0;
    const speed = prefersReduced ? 0 : 0.4; // px per frame

    const animate = () => {
      if (!isPaused && speed > 0) {
        scrollY += speed;
        if (scrollY >= singleSetHeight) {
          scrollY -= singleSetHeight;
        }
        track.style.transform = `translateY(-${scrollY}px)`;
      }
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    // Pause on hover
    const screenEl = track.closest('.cr-screen');
    const onEnter = () => { isPaused = true; };
    const onLeave = () => { isPaused = false; };

    if (screenEl) {
      screenEl.addEventListener('mouseenter', onEnter);
      screenEl.addEventListener('mouseleave', onLeave);
    }

    return () => {
      cancelAnimationFrame(animId);
      if (screenEl) {
        screenEl.removeEventListener('mouseenter', onEnter);
        screenEl.removeEventListener('mouseleave', onLeave);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="cr"
      id="customer-reviews"
      aria-label="Customer reviews from Google"
    >
      {/* Section kicker */}
      <span className="cr__kicker">Customer Voices</span>

      <div className="cr__inner">
        {/* ── Left: Editorial Copy ── */}
        <div className="cr-editorial">
          <span className="cr-editorial__label">Google Reviews</span>
          <h2 className="cr-editorial__headline">
            Trusted by people who live with sunlight every day<span className="cr-editorial__dot">.</span>
          </h2>
          <p className="cr-editorial__body">
            Real protection is felt by the people who use it every day.
          </p>

          {/* Stats bar */}
          <div className="cr-editorial__stats">
            <div className="cr-editorial__stat">
              <div className="cr-editorial__stat-logo">
                <GoogleLogo />
              </div>
              <span className="cr-editorial__stat-sub">Reviews <span className="cr-editorial__stars-yellow">★★★★★</span></span>
            </div>
            <div className="cr-editorial__stat-divider" />
            <div className="cr-editorial__stat">
              <span className="cr-editorial__stat-value">4.9</span>
              <span className="cr-editorial__stat-sub">OUT OF 5</span>
            </div>
            <div className="cr-editorial__stat-divider" />
            <div className="cr-editorial__stat">
              <span className="cr-editorial__stat-value">223+</span>
              <span className="cr-editorial__stat-sub">REVIEWS</span>
            </div>
          </div>

          {/* CTA button */}
          <a
            href="https://www.google.com/search?q=irispro+google+review&sca_esv=dde5617a71b3e3fd&biw=1633&bih=791&sxsrf=ANbL-n6zKtzYr1J_bfTYZdNv79R-wjbltw%3A1780474041840&ei=ueAfao6IM6iMnesP77Te4QU&ved=0ahUKEwjOyK7WzuqUAxUoRmcHHW-aN1wQ4dUDCBA&uact=5&oq=irispro+google+review&gs_lp=Egxnd3Mtd2l6LXNlcnAiFWlyaXNwcm8gZ29vZ2xlIHJldmlldzIFECEYoAEyBRAhGKABSPsRUOkBWOgQcAF4AZABAJgBbKABzgeqAQQxMy4xuAEDyAEA-AEBmAIPoAKQCMICBxAjGLADGCfCAgoQABhHGNYEGLADwgIXEC4Y3AYYuAYY2gYY2AIYyAMYsAPYAQHCAhcQLhjYAhi4BhjaBhjcBhjIAxiwA9gBAcICBBAjGCfCAgUQABiABMICEBAuGIAEGBQYhwIYxwEYrwHCAgoQABiABBiKBRhDwgILEC4YgAQYxwEYrwHCAgYQABgWGB7CAgUQIRifBcICBxAhGAoYoAGYAwCIBgGQBg26BgQIARgZkgcEMTQuMaAH9TCyBwQxMy4xuAeICMIHBjIuMTAuM8gHJIAIAQ&sclient=gws-wiz-serp#sv=CAESzAEKuAEStQEKd0FNbjMteVRjZnpBR29CNWNDZmw0TVNLZm52a0p4U2MyLWJyWEZQRk1WZ25aMzlOUnlpV2J0TlVSVjQ1WldrTnlkS1p3WTFJTUNRUzRPY2J6RDdiMjZtT0hXcWlDTzNIbDVFZ3lEb0VXZldZSzVDWm1vNm9oUlJREhYxZUFmYW9vTXFlQ3g0dy1fNHBTNENBGiJBSktMRm1MN25QMXVaS1xlTU02RHVIYkRkUjVXanFzaTlBEgQ4MDUxGgEzKgAwADgBQAAYACCZzKiPCkoCEAI"
            target="_blank"
            rel="noopener noreferrer"
            className="cr-editorial__cta"
          >
            <span>READ MORE REVIEWS ON GOOGLE</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>

        {/* ── Right: Desktop Monitor Mockup ── */}
        <div className="cr-monitor">
          {/* Monitor frame */}
          <div className="cr-monitor__frame">
            <div className="cr-monitor__window">
              {/* Browser chrome */}
              <div className="cr-monitor__chrome">
                {/* Nav arrows */}
                <div className="cr-monitor__nav-arrows">
                  <span className="cr-monitor__nav-arrow">‹</span>
                  <span className="cr-monitor__nav-arrow">›</span>
                </div>
                {/* URL bar area — omitted for cleanliness */}
                <div className="cr-monitor__url-bar">
                  <span className="cr-monitor__url-lock">🔒</span>
                  <span className="cr-monitor__url-text">https://www.google.com/search?q=irispro</span>
                </div>
                <div className="cr-monitor__chrome-spacer" />
              </div>

              {/* Screen content */}
              <div className="cr-screen">
                {/* Google review header */}
                <div className="cr-screen__header">
                  <div className="cr-screen__header-left">
                    <GoogleLogo />
                    <span className="cr-screen__header-reviews">Reviews</span>
                  </div>
                  <span className="cr-screen__header-brand">IRISPRO WINDOW FILM</span>
                </div>

                {/* Aggregate rating bar */}
                <div className="cr-screen__rating-bar">
                  <span className="cr-screen__rating-num">4.9</span>
                  <Stars count={5} />
                  <span className="cr-screen__rating-count">127+ reviews</span>
                </div>

                {/* Scrolling review track */}
                <div className="cr-screen__carousel">
                  <div className="cr-screen__track" ref={trackRef}>
                    {REVIEWS.map((r, i) => (
                      <ReviewCard key={i} review={r} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Monitor stand */}
          <div className="cr-monitor__neck" />
          <div className="cr-monitor__base" />
          <div className="cr-monitor__shadow" />
        </div>
      </div>
    </section>
  );
}
