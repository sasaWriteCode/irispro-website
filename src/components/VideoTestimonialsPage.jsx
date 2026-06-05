import { useEffect, useState } from 'react';

export const IRISPRO_VIDEOS = [
  {
    category: 'Featured',
    videos: [
      {
        title: 'Introduction of IrisPro Window Film | IrisPro UV+420 Optical Solar Film',
        url: 'https://www.youtube.com/watch?v=3pq_N2k14Nw',
        youtubeId: '3pq_N2k14Nw',
      },
      {
        title: 'Quick Intro About IrisPro Window Tinted Film ! Local Malaysia',
        url: 'https://www.youtube.com/watch?v=WO_dAFCthzE',
        youtubeId: 'WO_dAFCthzE',
      },
    ],
  },
  {
    category: 'Automotive Protection',
    videos: [
      {
        title: 'Car UV Skin Test - With & Without IrisPro Film Test',
        url: 'https://www.youtube.com/watch?v=_fnTuJ7x5AA',
        youtubeId: '_fnTuJ7x5AA',
      },
      {
        title: 'Expensive vs Cheap Car Tint — Both 99% UV Protection?',
        url: 'https://www.youtube.com/watch?v=HwQEOYScWM8',
        youtubeId: 'HwQEOYScWM8',
      },
      {
        title: 'Temperature Gun Test - With & Without IrisPro Film',
        url: 'https://www.youtube.com/watch?v=hGsqx0sbkqg',
        youtubeId: 'hGsqx0sbkqg',
      },
      {
        title: 'IrisPro Window Tinted Malaysia Review by Abang Japar',
        url: 'https://www.youtube.com/watch?v=MKdqwfi3KCU',
        youtubeId: 'MKdqwfi3KCU',
      },
      {
        title: 'Tinted kali ke-2 selepas 9 Tahun Mitsubishi Triton guna IrisPro',
        url: 'https://www.youtube.com/watch?v=P5C4K5O5C0Y',
        youtubeId: 'P5C4K5O5C0Y',
      },
    ],
  },
  {
    category: 'Commercial & Residential Tinting',
    videos: [
      {
        title: 'Testometer | Side by Side Temperature Test & Comparison',
        url: 'https://www.youtube.com/watch?v=u9coWJU9Ux4',
        youtubeId: 'u9coWJU9Ux4',
      },
      {
        title: 'Why Condos Reject Reflective Tints | IrisPro Diamond 60 Condo Tinting Guide',
        url: 'https://www.youtube.com/watch?v=gfQlMDEkDuE',
        youtubeId: 'gfQlMDEkDuE',
      },
      {
        title: 'Window View Too Hot? IrisPro Diamond 30 Fixes It | GEM Residence',
        url: 'https://www.youtube.com/watch?v=dpeKmab-oVg',
        youtubeId: 'dpeKmab-oVg',
      },
      {
        title: 'Wangsa 9 Residency Wangsa Maju | HD & Natural View by IrisPro Residential Tinting',
        url: 'https://www.youtube.com/watch?v=OvECymT80aM',
        youtubeId: 'OvECymT80aM',
      },
    ],
  },
  {
    category: 'Science & Technology',
    videos: [
      {
        title: 'IrisPro UV400 optical solar film vs Vkool vs LLumar',
        url: 'https://www.youtube.com/watch?v=dryRwU3cGrY',
        youtubeId: 'dryRwU3cGrY',
      },
      {
        title: 'TIPS RAYYAN I UV400 vs UV420',
        url: 'https://www.youtube.com/watch?v=JTkfI8Dlb8o',
        youtubeId: 'JTkfI8Dlb8o',
      },
      {
        title: 'MAGNUS PRO TITANIUM Window Film',
        url: 'https://www.youtube.com/watch?v=zg6lUAZlaZc',
        youtubeId: 'zg6lUAZlaZc',
      },
    ],
  },
  {
    category: 'Customer Stories',
    videos: [
      {
        title: '顾客访谈：看看回头客怎么说',
        url: 'https://www.youtube.com/watch?v=TEFuINJnMZw',
        youtubeId: 'TEFuINJnMZw',
      },
      {
        title: 'Quality that lasts, protection that performs | Customer Review',
        url: 'https://www.youtube.com/watch?v=N3HaO5onXEY',
        youtubeId: 'N3HaO5onXEY',
      },
      {
        title: '术后光线敏感的他为什么选择我们IrisPro？',
        url: 'https://www.youtube.com/watch?v=6ZqDqEqy8Y0',
        youtubeId: '6ZqDqEqy8Y0',
      },
    ],
  },
  {
    category: 'Behind IrisPro',
    videos: [
      {
        title: '原来IRISPRO公司里面是这样的！？',
        url: 'https://www.youtube.com/watch?v=enKIO_exv8k',
        youtubeId: 'enKIO_exv8k',
      },
    ],
  },
];

export default function VideoTestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxVideo, setLightboxVideo] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Collect all videos flattened with their category
  const allVideos = [];
  IRISPRO_VIDEOS.forEach((group) => {
    group.videos.forEach((vid) => {
      allVideos.push({
        ...vid,
        category: group.category,
      });
    });
  });

  // Filter videos based on category state
  const filteredVideos = activeCategory === 'All'
    ? allVideos
    : allVideos.filter((vid) => vid.category === activeCategory);

  const openLightbox = (vid) => {
    setLightboxVideo(vid);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxVideo(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="video-testimonials-page">
      {/* Hero Header with FAQ style Gradient Background */}
      <section className="video-hero">
        <div className="video-hero__bg-grid" />
        <div className="video-hero__inner">
          <span className="video-hero__kicker">VIDEO GALLERY</span>
          <h1 className="video-hero__title">
            Why 325,000+ customers chose IrisPro.
          </h1>
          <p className="video-hero__lead">
            Explore our video library featuring professional automotive reviews, home upgrades, commercial installations, and spectrometer tests directly from our YouTube channel.
          </p>
        </div>
      </section>

      {/* Grid Gallery Section */}
      <section className="video-gallery-grid-section">
        <div className="video-dashboard__container">

          {/* Categories Tab Bar */}
          <div className="video-filters-container">
            <div className="video-filters">
              <button
                className={`video-filter-btn ${activeCategory === 'All' ? 'active' : ''}`}
                onClick={() => setActiveCategory('All')}
              >
                <span>All Videos</span>
                <span className="video-filter-count">{allVideos.length}</span>
              </button>
              {IRISPRO_VIDEOS.map((group) => (
                <button
                  key={group.category}
                  className={`video-filter-btn ${activeCategory === group.category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(group.category)}
                >
                  <span>{group.category}</span>
                  <span className="video-filter-count">{group.videos.length}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Grid Layout Video Cards */}
          <div className="video-grid-gallery">
            {filteredVideos.map((vid, idx) => {
              // Construct high-quality YouTube thumbnail URL
              const thumbnailUrl = `https://img.youtube.com/vi/${vid.youtubeId}/hqdefault.jpg`;

              return (
                <div
                  key={`${vid.youtubeId}-${idx}`}
                  className="video-grid-card"
                  onClick={() => openLightbox(vid)}
                >
                  {/* Thumbnail Image area */}
                  <div className="video-grid-card__thumb-wrapper">
                    <img
                      src={thumbnailUrl}
                      alt={vid.title}
                      className="video-grid-card__image"
                      loading="lazy"
                    />

                    {/* Pulsing Play Icon Overlay */}
                    <div className="video-grid-card__play-overlay">
                      <div className="video-grid-card__play-btn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="6,4 20,12 6,20" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Meta info area */}
                  <div className="video-grid-card__content">
                    <span className="video-grid-card__category">{vid.category}</span>
                    <h3 className="video-grid-card__title">{vid.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* YouTube Channel Banner */}
          <div className="video-channel-banner">
            <div className="video-channel-banner__content">
              <span className="video-channel-banner__kicker">FOLLOW OUR CHANNEL</span>
              <h2 className="video-channel-banner__title">Subscribe to @irispro.official</h2>
              <p className="video-channel-banner__desc">
                Never miss an update. Subscribe to our official YouTube channel for detailed product rollouts, customer driving feedback, and technical solar film test demonstrations.
              </p>
            </div>
            <div className="video-channel-banner__action">
              <a
                href="https://www.youtube.com/@irispro.official"
                target="_blank"
                rel="noopener noreferrer"
                className="video-channel-banner__btn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span>Visit YouTube Channel</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Lightbox Modal Video Player */}
      {lightboxVideo && (
        <div className="video-lightbox" onClick={closeLightbox}>
          <div className="video-lightbox__backdrop" />
          <div className="video-lightbox__content" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className="video-lightbox__close" onClick={closeLightbox} aria-label="Close video player">
              ✕
            </button>
            {/* Player Frame */}
            <div className="video-lightbox__player-container">
              <iframe
                className="video-lightbox__player"
                src={`https://www.youtube.com/embed/${lightboxVideo.youtubeId}?autoplay=1&rel=0`}
                title={lightboxVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {/* Description */}
            <div className="video-lightbox__details">
              <span className="video-lightbox__category">{lightboxVideo.category}</span>
              <h2 className="video-lightbox__title">{lightboxVideo.title}</h2>
              <a
                href={lightboxVideo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="video-lightbox__link"
              >
                Watch directly on YouTube ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
