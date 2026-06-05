import { useState } from 'react';

const FAQ_DATA = [
  {
    category: 'basics',
    categoryLabel: 'Solar Film Basics',
    q: 'What is Ultraviolet (UV) Rejection?',
    a: 'Ultraviolet (UV) rays range from 280nm to 400nm in the light spectrum. Ultraviolet Rejection is the percentage of ultraviolet energy deflected away from the window film. Ultraviolet rays are the leading cause of upholstery and furnishings fading, and they can also cause severe skin damage and skin cancer.'
  },
  {
    category: 'basics',
    categoryLabel: 'Solar Film Basics',
    q: 'What is High Energy Visible (HEV) Light?',
    a: 'HEV Light (often called Blue Light) ranges from 380nm to 500nm in the visible light spectrum. It reaches deeper into the eyes, and its cumulative effect can damage the retina. HEV Blue Light between 380nm and 420nm is the most harmful, penetrating into the skin dermis and potentially causing macular degeneration, cataracts, myopia, glaucoma, and premature wrinkles.'
  },
  {
    category: 'basics',
    categoryLabel: 'Solar Film Basics',
    q: 'What is Visible Light Transmission (VLT)?',
    a: 'VLT ranges from 380nm to 780nm in the light spectrum. It represents the amount of visible light that passes directly through filmed glass. The darker the tint, the lower the percentage of visible light transmitted.'
  },
  {
    category: 'basics',
    categoryLabel: 'Solar Film Basics',
    q: 'What is the law regarding tinting of motor vehicles in Malaysia?',
    a: 'According to the JPJ (Road Transport Department) regulations in Malaysia: the front windshield must allow a minimum of 70% Visible Light Transmission (VLT); front side windows must allow at least 50% VLT; and rear side windows and the rear windshield have no VLT limit (0% VLT is permitted, allowing them to be fully tinted/darkened), provided the vehicle is equipped with left and right side mirrors.'
  },
  {
    category: 'basics',
    categoryLabel: 'Solar Film Basics',
    q: 'What is the difference between 99% UV Rejection Film and IrisPro 100% UV Rejection Film?',
    a: 'Most solar window films claiming 99% UV rejection only block UV rays up to 380nm. In contrast, IrisPro 100% UV Rejection Film provides full protection up to UV400nm (blocking the entire UV spectrum). Our UV+420 optical solar film goes even further, rejecting 99.9999% of UV400 radiation.'
  },
  {
    category: 'basics',
    categoryLabel: 'Solar Film Basics',
    q: 'What is Infrared (IR) Rejection?',
    a: 'Infrared (IR) rays range from 780nm to 2500nm in the light spectrum and carry the majority of solar heat. Infrared Rejection is the percentage of this infrared heat energy blocked or deflected away by the window film.'
  },
  {
    category: 'basics',
    categoryLabel: 'Solar Film Basics',
    q: 'What is Total Solar Energy Rejection (TSER)?',
    a: 'TSER is a comprehensive metric describing the total amount of solar energy (UV + Visible Light + Infrared) blocked from passing through the glass. It varies by regional weather conditions. For instance, in regions with a low UV index, TSER calculations weigh VLT and IR more heavily. In tropical climates like Malaysia, where the UV index is very high (ranging from level 9 to 13), TSER accounts for 10% UV + 40% VLT + 50% IR rejection.'
  },
  {
    category: 'basics',
    categoryLabel: 'Solar Film Basics',
    q: 'What is the difference between IrisPro Performance Warranty vs other window film warranties?',
    a: 'Thanks to our double patented technology, IrisPro is the only window film brand that offers up to a 10-year Performance Warranty. While other brands typically only cover physical defects (like peeling, bubbling, delaminating, or discoloring), IrisPro uniquely warrants the actual heat rejection, UV rejection, and visible light performance over time.'
  },
  {
    category: 'basics',
    categoryLabel: 'Solar Film Basics',
    q: 'What is the difference between IrisPro Titanium sputter and other sputter window films?',
    a: 'IrisPro uses high-grade US Titanium Sputtering to achieve exceptional heat rejection. Titanium is highly stable and will not rust or corrode under normal weather conditions. Many other window films use silver or other metals in their sputtering process, which tend to oxidize and corrode over time, leading to degraded performance.'
  },
  {
    category: 'benefits',
    categoryLabel: 'Benefits & Performance',
    q: 'What will I benefit from IrisPro window film?',
    a: 'By installing IrisPro window film, you will benefit from: lower energy bills, significantly reduced heat and glare, elimination of 99.9999% of UV400 rays, and elimination of "hot spots" (which increases the cooling efficiency of air conditioners). It also prevents furniture and upholstery from fading (prolonging their lifespan) and protects your skin and eyes from harmful UV and HEV Blue Light radiation.'
  },
  {
    category: 'benefits',
    categoryLabel: 'Benefits & Performance',
    q: 'What is the life expectancy of window film?',
    a: 'The life expectancy of window film depends on climate, sun exposure, and usage. On average, high-quality IrisPro films last between 5 to 10 years, and they are fully backed by our performance warranty.'
  },
  {
    category: 'benefits',
    categoryLabel: 'Benefits & Performance',
    q: 'Will my energy costs decrease?',
    a: 'Yes! The amount saved depends on the film type, climate, and property-specific variables (location, building orientation, existing HVAC system, etc.). On average, clients experience cooling energy savings of between 10% to 30%.'
  },
  {
    category: 'benefits',
    categoryLabel: 'Benefits & Performance',
    q: 'Will my furniture fade be reduced?',
    a: 'Absolutely. Fading is caused by a combination of factors: 40% is caused by UV rays, 25% by heat, 25% by visible light, and 10% by miscellaneous factors (e.g., fabric dye quality). IrisPro window films block 99.9999% of UV rays and significantly reduce heat and visible light transmission, mitigating up to 90% of the factors that cause interior fading.'
  },
  {
    category: 'benefits',
    categoryLabel: 'Benefits & Performance',
    q: 'How do I clean the filmed surface after installation?',
    a: 'You can wash the filmed surface with common, non-abrasive glass cleaners (including ammonia-based products) 30 days after installation. Use soft microfibers, synthetic sponges, or squeegees. Avoid bristle brushes, steel wool, or abrasive cleaning agents that could scratch the film. To protect your warranty, do not stick tape or adhesive products on the film.'
  },
  {
    category: 'benefits',
    categoryLabel: 'Benefits & Performance',
    q: 'Does IrisPro window film have chemical safety tests?',
    a: 'Yes. IrisPro films are fully tested by SGS for REACH compliance. Low-quality films and adhesives can emit harmful Volatile Organic Compounds (VOCs) when exposed to high heat and direct sun, which can accumulate inside a vehicle or room and pose health risks. IrisPro films are certified safe and non-toxic.'
  },
  {
    category: 'installation',
    categoryLabel: 'Installation & Care',
    q: 'What is window film made of?',
    a: 'Window film is made from high-grade polyester layers that undergo specialized manufacturing (like sputtering or nano-ceramic deposition) and are coated with a pressure-sensitive adhesive. It is applied to the glass using a mild water-and-soap solution to activate the adhesive.'
  },
  {
    category: 'installation',
    categoryLabel: 'Installation & Care',
    q: 'Do you install window film on the inside or outside of a building?',
    a: 'Window film is typically installed on the interior side of the glass to protect it from weather elements and maximize its lifespan. It is best installed after nearby construction is completed. In cases where the interior is inaccessible, specialized exterior films can be applied and sealed at the edges, though they carry a shorter warranty period due to direct weathering.'
  },
  {
    category: 'installation',
    categoryLabel: 'Installation & Care',
    q: 'What is the procedure to install window film?',
    a: 'The standard interior installation procedure involves: (1) Preparing the area with drop cloths to protect flooring and moving nearby furniture; (2) Thoroughly cleaning the glass and gaskets with a soap solution to remove all dust and residue; (3) Wetting the glass and placing the film on it; (4) Squeegeeing out all excess water and bubbles from between the glass and the film; (5) Trimming the edges flat; and (6) Wiping down the window for a clean finish.'
  },
  {
    category: 'installation',
    categoryLabel: 'Installation & Care',
    q: 'Can you apply window film to Plexiglas®?',
    a: 'No. The adhesive is specially engineered for glass surfaces and will not adhere properly to Plexiglas® or acrylic sheets.'
  },
  {
    category: 'installation',
    categoryLabel: 'Installation & Care',
    q: 'Can you apply window film to tinted / Low-E glass?',
    a: 'Yes, absolutely. Applying IrisPro film to tinted or Low-E glass will further enhance its solar performance, providing significantly greater heat rejection and UV protection.'
  },
  {
    category: 'installation',
    categoryLabel: 'Installation & Care',
    q: 'Will window film ruin my view?',
    a: 'No. IrisPro films are designed for high optical clarity. By reducing harsh glare and direct heat, they actually increase visual comfort and make your outdoor view clearer and more enjoyable.'
  },
  {
    category: 'installation',
    categoryLabel: 'Installation & Care',
    q: 'Is the film difficult to maintain after installation?',
    a: 'Not at all. Thanks to IrisPro’s premium scratch-resistant coatings, cleaning the windows is just as easy as cleaning normal untreated glass.'
  },
  {
    category: 'installation',
    categoryLabel: 'Installation & Care',
    q: 'Will the film give a mirrored exterior appearance?',
    a: 'No. IrisPro Optical Solar Films feature low reflectivity and high visual clarity. They are designed to provide daytime privacy (preventing outsiders from looking in) without creating an unsightly mirrored look, and they maintain excellent visibility from the inside at night.'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Questions' },
  { id: 'basics', label: 'Solar Film Basics' },
  { id: 'benefits', label: 'Benefits & Performance' },
  { id: 'installation', label: 'Installation & Care' }
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Filter FAQs based on active category and search query
  const filteredFAQs = FAQ_DATA.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="faq-page">
      {/* Background visual graphics */}
      <div className="faq-page__bg-glow" />
      <div className="faq-page__bg-grid" />

      {/* Hero Section */}
      <section className="faq-hero">
        <div className="faq-hero__bg-glow" />
        <div className="faq-hero__bg-grid" />
        <div className="faq-hero__content">
          <span className="faq-hero__kicker">HELP CENTER</span>
          <h1 className="faq-hero__title">IRISPRO HELP</h1>

          {/* Search Box */}
          <div className="faq-hero__search-wrap">
            <div className="faq-hero__search-container">
              <svg className="faq-hero__search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                id="faq-search"
                type="text"
                placeholder="Search for questions, keywords, or topics..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setOpenIndex(null); // Reset accordions on search
                }}
                className="faq-hero__search-input"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="faq-hero__search-clear"
                  aria-label="Clear search query"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="faq-page__container">
        {/* Interactive Workspace Grid */}
        <div className="faq-page__content">
          {/* Sidebar: Filters & Trust Card */}
          <aside className="faq-page__sidebar">
            {/* Category Navigation */}
            <div className="faq-page__filters">
              <span className="faq-page__sidebar-label">Categories</span>
              <nav className="faq-page__cat-nav" aria-label="FAQ categories">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    className={`faq-page__cat-btn${activeCategory === cat.id ? ' faq-page__cat-btn--active' : ''}`}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setOpenIndex(null); // Reset accordions
                    }}
                  >
                    <span>{cat.label}</span>
                    <span className="faq-page__cat-count">
                      {cat.id === 'all'
                        ? FAQ_DATA.length
                        : FAQ_DATA.filter((f) => f.category === cat.id).length}
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Quick trust card */}
            <div className="faq-page__trust-card">
              <h4 className="faq-page__trust-title">Need custom advice?</h4>
              <p className="faq-page__trust-desc">Our window film experts are ready to evaluate your architectural or automotive project.</p>
              <a href="#consultation" className="btn-red faq-page__trust-btn">
                <span>Free Consultation</span>
              </a>
            </div>
          </aside>

          {/* Main: Accordion list */}
          <main className="faq-page__list" aria-label="FAQ Accordion List">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <article
                    key={index}
                    className={`faq-item${isOpen ? ' faq-item--open' : ''}`}
                  >
                    <button
                      className="faq-item__trigger"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-item__question">{faq.q}</span>
                      <span className="faq-item__icon-wrap">
                        <svg className="faq-item__chevron" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </button>
                    {/* Modern Grid Auto-Height Expansion */}
                    <div className={`faq-item__answer-wrapper${isOpen ? ' faq-item__answer-wrapper--open' : ''}`}>
                      <div className="faq-item__answer-content">
                        <p className="faq-item__answer">{faq.a}</p>
                      </div>
                    </div>
                  </article>
                );
              })
            ) : (
              <div className="faq-page__empty">
                <div className="faq-page__empty-icon">🔍</div>
                <h3 className="faq-page__empty-title">No matching questions found</h3>
                <p className="faq-page__empty-desc">
                  We couldn't find any answers matching "{searchQuery}". Try searching for other terms like "UV", "warranty", or "sputter".
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                  className="btn-outline faq-page__empty-btn"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
