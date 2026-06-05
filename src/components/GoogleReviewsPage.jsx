import { useEffect, useState } from 'react';

const REVIEWS_DATA = [
  {
    id: 1,
    name: 'Shahrol Halmi',
    initial: 'S',
    color: '#4285F4',
    time: '1 week ago',
    rating: 5,
    category: 'automotive',
    text: 'Been coming here for years to tint our cars. Great quality films and they stand behind their work, which is very nice. Lay Ling the manager is very attentive and friendly. Comfortable waiting area too.'
  },
  {
    id: 2,
    name: 'Elenie',
    initial: 'E',
    color: '#85560b',
    time: '2 weeks ago',
    rating: 5,
    category: 'automotive',
    text: 'Good experience and great service from them. Staff named Lay Ling really helpful and friendly. Eventhough we had some miscommunications on the dates, but she calmly solve the issue and installation can be done within the same day. Thanks so much.'
  },
  {
    id: 3,
    name: 'Jason Wong',
    initial: 'J',
    color: '#F4B400',
    time: '1 month ago',
    rating: 5,
    category: 'automotive',
    text: 'Very satisfied with the heat rejection. The car feels completely different under the hot afternoon sun. Driving is much more comfortable now.'
  },
  {
    id: 4,
    name: 'Sabrina Yap',
    initial: 'S',
    color: '#DB4437',
    time: '2 months ago',
    rating: 5,
    category: 'architectural',
    text: 'Clear view, less glare, and our home interior feels much cooler. Applied on our master bedroom and living room glass sliding doors. Superb outcome!'
  },
  {
    id: 5,
    name: 'Daniel Chia',
    initial: 'D',
    color: '#4285F4',
    time: '2 months ago',
    rating: 5,
    category: 'automotive',
    text: 'Installed the Supreme series on my BMW. The difference in cabin temperature is night and day. No issues with my SmartTAG or GPS signals at all.'
  },
  {
    id: 6,
    name: 'Nurul Aisyah',
    initial: 'N',
    color: '#0F9D58',
    time: '3 months ago',
    rating: 5,
    category: 'automotive',
    text: 'Friendly staff, fast service. My car looks so sleek with the new dark tint, and the UV protection is excellent. Worth every ringgit!'
  },
  {
    id: 7,
    name: 'Kevin Loh',
    initial: 'K',
    color: '#F4B400',
    time: '3 months ago',
    rating: 5,
    category: 'automotive',
    text: 'Professional team. Film quality is superb — no bubbles, no peeling, and very neat micro-gap finish. Five stars to the Puchong branch.'
  },
  {
    id: 8,
    name: 'Priya Nair',
    initial: 'P',
    color: '#DB4437',
    time: '4 months ago',
    rating: 5,
    category: 'automotive',
    text: 'Third car with IRISPRO. Consistent quality and customer service every time. Highly recommend the UV+420 protection for young children.'
  },
  {
    id: 9,
    name: 'Marcus Lim',
    initial: 'M',
    color: '#1976D2',
    time: '4 months ago',
    rating: 5,
    category: 'architectural',
    text: 'Retrofitted our entire corporate office glass facade with IrisPro Energy Saver Series. The air-conditioning unit does not have to work as hard and our monthly electricity bills dropped by about 15%!'
  },
  {
    id: 10,
    name: 'Sarah Abdul',
    initial: 'S',
    color: '#0F9D58',
    time: '5 months ago',
    rating: 5,
    category: 'architectural',
    text: 'Highly recommend their home shield tint. It blocks the heat but keeps our dining room bright and full of natural light. Staff was professional, clean, and fast.'
  },
  {
    id: 11,
    name: 'Tan Kok Seng',
    initial: 'T',
    color: '#4285F4',
    time: '5 months ago',
    rating: 5,
    category: 'automotive',
    text: 'Really happy with the nanocarbon ceramic films. I was worried about my RFID tag on the windshield but the technicians positioned it perfectly, and it scans at tolls without a hitch.'
  },
  {
    id: 12,
    name: 'Raymond de Silva',
    initial: 'R',
    color: '#85560b',
    time: '6 months ago',
    rating: 5,
    category: 'architectural',
    text: 'Applied the Privacy Reflective Series to our townhouse windows. Excellent daytime privacy. No one can look in from the street, but we get a beautiful crystal-clear view out.'
  },
  {
    id: 13,
    name: 'Michelle Teh',
    initial: 'M',
    color: '#F4B400',
    time: '6 months ago',
    rating: 5,
    category: 'automotive',
    text: 'Lay Ling gave excellent advice regarding my eye strain and suggested the UV+420 series. Night driving has become so much easier with reduced high-energy glare.'
  },
  {
    id: 14,
    name: 'Viknesh',
    initial: 'V',
    color: '#DB4437',
    time: '7 months ago',
    rating: 5,
    category: 'architectural',
    text: 'Great work done on our showroom front window glass. It reduced glare on the product displays and protects our interior furniture from UV damage.'
  }
];

const GoogleG = () => (
  <svg width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M43.6 20.5H42V20.3H24V27.7H35.1C33.4 32.5 29.1 36 24 36C17.4 36 12 30.6 12 24C12 17.4 17.4 12 24 12C27 12 29.8 13.1 31.9 15L37.3 9.6C33.9 6.4 29.2 4.5 24 4.5C13.3 4.5 4.5 13.3 4.5 24C4.5 34.7 13.3 43.5 24 43.5C34.7 43.5 43.5 34.7 43.5 24C43.5 22.8 43.6 21.6 43.6 20.5Z" fill="#FFC107" />
    <path d="M6.3 14.7L12.5 19.2C14.3 14.7 18.8 11.5 24 11.5C27 11.5 29.7 12.6 31.9 14.5L37.3 9.1C33.9 6 29.2 4 24 4C16.3 4 9.7 8.4 6.3 14.7Z" fill="#FF3D00" />
    <path d="M24 44C29.1 44 33.7 42.2 37.1 39.1L31.2 34.1C29.2 35.6 26.7 36.5 24 36.5C19 36.5 14.7 33.1 13 28.4L6.9 33.1C10.2 39.6 16.6 44 24 44Z" fill="#4CAF50" />
    <path d="M43.6 20.5H42V20.3H24V27.7H35.1C34.3 30 32.8 31.9 30.9 33.3L30.9 33.3L36.8 38.3C36.4 38.7 44 33 44 24C44 22.8 43.8 21.6 43.6 20.5Z" fill="#1976D2" />
  </svg>
);

const Stars = ({ count }) => (
  <div className="cr-stars" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: count }, (_, i) => (
      <span key={i} className="cr-star">★</span>
    ))}
  </div>
);
const PARTNER_LOGOS = [
  {
    id: 1,
    content: (
      <div className="trusted-logo trusted-logo--luxe">
        <div className="logo-core-wrap">
          <span className="logo-core-text">luxe</span>
          <span className="logo-core-dot"></span>
        </div>
        <span className="logo-core-sub">DETAILING</span>
      </div>
    )
  },
  {
    id: 2,
    content: (
      <div className="trusted-logo trusted-logo--apex">
        <span className="logo-apex-text">apex</span>
      </div>
    )
  },
  {
    id: 3,
    content: (
      <div className="trusted-logo trusted-logo--shield">
        <svg className="logo-shield-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,2 22,6.5 22,13 12,22 2,13 2,6.5" />
        </svg>
        <span className="logo-shield-text">SHIELD.PRO</span>
      </div>
    )
  },
  {
    id: 4,
    content: (
      <div className="trusted-logo trusted-logo--nexus">
        <span className="logo-nexus-text">NEXUS</span>
      </div>
    )
  },
  {
    id: 5,
    content: (
      <div className="trusted-logo trusted-logo--veloce">
        <span className="logo-veloce-text">VELOCE</span>
        <span className="logo-veloce-sub">EST. 2012</span>
      </div>
    )
  },
  {
    id: 6,
    content: (
      <div className="trusted-logo trusted-logo--premium">
        <span className="logo-premium-text">PREMIUM</span>
        <span className="logo-premium-sub">AUTO WERK</span>
      </div>
    )
  },
  {
    id: 7,
    content: (
      <div className="trusted-logo trusted-logo--zenith">
        <svg className="logo-zenith-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 2L2 22h20L12 2z" />
        </svg>
        <span className="logo-zenith-text">ZENITH</span>
      </div>
    )
  },
  {
    id: 8,
    content: (
      <div className="trusted-logo trusted-logo--glaze">
        <span className="logo-glaze-text">GLAZE</span>
        <span className="logo-glaze-sub">STUDIOS</span>
      </div>
    )
  },
  {
    id: 9,
    content: (
      <div className="trusted-logo trusted-logo--ecoland">
        <span className="logo-ecoland-text" style={{ fontFamily: 'Montserrat', fontWeight: 600, fontSize: '1.25rem', letterSpacing: '0.25em' }}>E C O L A N D</span>
      </div>
    )
  },
  {
    id: 10,
    content: (
      <div className="trusted-logo trusted-logo--autohaus">
        <span className="logo-autohaus-text" style={{ fontFamily: 'Playfair Display', fontStyle: 'italic', fontSize: '1.7rem', color: '#000' }}>autohaus</span>
      </div>
    )
  },
  {
    id: 11,
    content: (
      <div className="trusted-logo trusted-logo--kronos">
        <span className="logo-kronos-text" style={{ fontFamily: 'Montserrat', fontWeight: 300, fontSize: '1.6rem', letterSpacing: '0.3em' }}>KRONOS</span>
      </div>
    )
  },
  {
    id: 12,
    content: (
      <div className="trusted-logo trusted-logo--zenith">
        <span className="logo-zenith-text" style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.02em', color: '#000' }}>ZENITH</span>
      </div>
    )
  }
];

function RotatingLogoCard({ logos }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [frontIndex, setFrontIndex] = useState(0);
  const [backIndex, setBackIndex] = useState(1);

  useEffect(() => {
    let timeoutId;
    let isFrontVisible = true;
    let nextFrontIdx = 0;
    let nextBackIdx = 1;

    const runFlip = () => {
      if (isFrontVisible) {
        setIsFlipped(true);
        isFrontVisible = false;

        setTimeout(() => {
          nextFrontIdx = (nextFrontIdx + 2) % logos.length;
          setFrontIndex(nextFrontIdx);
        }, 800);
      } else {
        setIsFlipped(false);
        isFrontVisible = true;

        setTimeout(() => {
          nextBackIdx = (nextBackIdx + 2) % logos.length;
          setBackIndex(nextBackIdx);
        }, 800);
      }

      // Schedule next random flip between 3.5s and 7.5s
      const nextDelay = Math.random() * 4000 + 3500;
      timeoutId = setTimeout(runFlip, nextDelay);
    };

    // Stagger the initial flip uniquely per slot between 1s and 4s
    const initialDelay = Math.random() * 3000 + 1000;
    timeoutId = setTimeout(runFlip, initialDelay);

    return () => clearTimeout(timeoutId);
  }, [logos]);

  return (
    <div className={`trusted-logo-card ${isFlipped ? 'is-flipped' : ''}`}>
      <div className="trusted-logo-face trusted-logo-face--front">
        {logos[frontIndex].content}
      </div>
      <div className="trusted-logo-face trusted-logo-face--back">
        {logos[backIndex].content}
      </div>
    </div>
  );
}

export default function GoogleReviewsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="reviews-page">
      {/* Reviews Hero / Header */}
      <section className="reviews-hero">
        <div className="reviews-hero__bg-grid" />
        <div className="reviews-hero__inner">
          <span className="reviews-hero__kicker">CUSTOMER VOICES</span>
          <h1 className="reviews-hero__title">
            Loved By Our Customers.
            <br />
            <span className="reviews-hero__title--red">Verified on Google.</span>
          </h1>
          
          {/* Aggregate Rating Box */}
          <div className="reviews-summary-card">
            <div className="reviews-summary-card__left">
              <span className="reviews-summary-card__score">4.9</span>
              <Stars count={5} />
              <span className="reviews-summary-card__label">Google Rating</span>
            </div>
            <div className="reviews-summary-card__divider" />
            <div className="reviews-summary-card__right">
              <span className="reviews-summary-card__total">223+ Verified Reviews</span>
              <p className="reviews-summary-card__text">
                Real feedback from car owners, homeowners, and building managers who trust IrisPro window protection films.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="reviews-grid-section">
        <div className="reviews-grid-section__container">

          {/* Expanded Grid */}
          <div className="reviews-expanded-grid">
            {REVIEWS_DATA.map((rev) => (
              <div key={rev.id} className="reviews-grid-card">
                <div className="reviews-grid-card__header">
                  <div className="reviews-grid-card__avatar" style={{ background: rev.color }}>
                    {rev.initial}
                  </div>
                  <div className="reviews-grid-card__info">
                    <h3 className="reviews-grid-card__name">{rev.name}</h3>
                    <span className="reviews-grid-card__time">{rev.time}</span>
                  </div>
                  <span className="reviews-grid-card__g-icon">
                    <GoogleG />
                  </span>
                </div>
                
                <div className="reviews-grid-card__rating-row">
                  <Stars count={rev.rating} />
                  <span className={`reviews-grid-card__tag reviews-grid-card__tag--${rev.category}`}>
                    {rev.category === 'automotive' ? 'Automotive' : 'Architectural'}
                  </span>
                </div>

                <p className="reviews-grid-card__text">{rev.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Collaborations (In Good Company) Section */}
      <section className="trusted-collaborations-section">
        <div className="trusted-collaborations__container text-center">
          <span className="trusted-collaborations__kicker">TRUSTED COLLABORATIONS</span>
          <h2 className="trusted-collaborations__title">In Good Company</h2>
          <p className="trusted-collaborations__subtitle">
            Brand partnerships that share IrisPro's commitment to quality, protection, and premium engineering.
          </p>
          <div className="trusted-collaborations__grid">
            {/* Logo Slot 1 */}
            <div className="trusted-logo-slot">
              <RotatingLogoCard logos={[PARTNER_LOGOS[0], PARTNER_LOGOS[4], PARTNER_LOGOS[8]]} />
            </div>

            {/* Logo Slot 2 */}
            <div className="trusted-logo-slot">
              <RotatingLogoCard logos={[PARTNER_LOGOS[1], PARTNER_LOGOS[5], PARTNER_LOGOS[9]]} />
            </div>

            {/* Logo Slot 3 */}
            <div className="trusted-logo-slot">
              <RotatingLogoCard logos={[PARTNER_LOGOS[2], PARTNER_LOGOS[6], PARTNER_LOGOS[10]]} />
            </div>

            {/* Logo Slot 4 */}
            <div className="trusted-logo-slot">
              <RotatingLogoCard logos={[PARTNER_LOGOS[3], PARTNER_LOGOS[7], PARTNER_LOGOS[11]]} />
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action - Write a review */}
      <section className="reviews-cta-section">
        <div className="reviews-dashboard__container">
          <div className="reviews-cta-box text-center">
            <h2 className="display-xs">Are you an IrisPro customer?</h2>
            <p className="body-md">
              We value your honest feedback. Share your cooling experience and help other drivers and homeowners choose premium window shield protection.
            </p>
            <a
              href="https://www.google.com/search?q=irispro+google+review"
              target="_blank"
              rel="noopener noreferrer"
              className="reviews-cta-btn"
            >
              <span>Write a Google Review</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
