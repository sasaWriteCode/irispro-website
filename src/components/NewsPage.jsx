import { useEffect } from 'react';

const ARTICLES = [
  {
    id: 'news-1',
    date: 'June 2026',
    tag: 'Expansion',
    title: 'IrisPro Expands its Optical Shield to Australia and East Asia',
    desc: 'Following successful operations in Malaysia, Singapore, and India, IrisPro launches its patented window protection films in Sydney and Melbourne to meet growing demand for high-durability solar films.',
    readTime: '3 min read',
    img: 'split-media-building.png'
  },
  {
    id: 'news-2',
    date: 'May 2026',
    tag: 'Research',
    title: 'Understanding the Danger of HEV Blue Light (380nm - 420nm) in Driving',
    desc: 'New medical insights highlight the impact of High-Energy Visible (HEV) blue light on eye strain and macular degeneration. We detail how our double-patented formula intercepts 99% of HEV light waves.',
    readTime: '5 min read',
    img: 'hero-sunlight.png'
  },
  {
    id: 'news-3',
    date: 'April 2026',
    tag: 'Sustainability',
    title: 'Why Commercial Buildings are Retrofitting Glass with Nano Ceramic Films',
    desc: 'Faced with rising energy costs, office towers are shifting from window replacement to high-performance film retrofits. Case studies show up to 18% reduction in annual HVAC electricity usage.',
    readTime: '4 min read',
    img: 'commercial-building-panel.png'
  },
  {
    id: 'news-4',
    date: 'March 2026',
    tag: 'Milestone',
    title: 'Government Approvals: IrisPro Becomes First Tint Certified in Brunei',
    desc: "Brunei's Ministry of Transport officially approves IrisPro Optical Solar Film for automotive applications, recognizing our high optical clarity standards and uncompromised safety profile.",
    readTime: '3 min read',
    img: 'automotive-tint.png'
  }
];

export default function NewsPage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="news-page">
      {/* News Hero */}
      <section className="news-hero">
        <div className="news-hero__bg-grid" />
        <div className="news-hero__inner">
          <span className="news-hero__kicker">IRISPRO MEDIA CENTER</span>
          <h1 className="news-hero__title">
            Latest News &
            <br />
            <span className="news-hero__title--red">Technology Insights.</span>
          </h1>
          <p className="news-hero__lead">
            Stay updated with our latest press releases, engineering insights, and regional expansions as we continue to build a safer and cooler tropical environment.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="news-grid-section">
        <div className="news-grid-section__container">
          <div className="news-grid">
            {ARTICLES.map((art) => (
              <article key={art.id} className="news-card">
                <div className="news-card__image-wrapper">
                  <img
                    src={`${import.meta.env.BASE_URL}images/${art.img}`}
                    alt={art.title}
                    className="news-card__image"
                    loading="lazy"
                  />
                  <span className="news-card__tag">{art.tag}</span>
                </div>
                <div className="news-card__content">
                  <div className="news-card__meta">
                    <span className="news-card__date">{art.date}</span>
                    <span className="news-card__dot">•</span>
                    <span className="news-card__read-time">{art.readTime}</span>
                  </div>
                  <h3 className="news-card__title">{art.title}</h3>
                  <p className="news-card__desc">{art.desc}</p>
                  <a href="#consultation" className="news-card__link">
                    <span>Read Article</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
