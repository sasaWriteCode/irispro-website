import { useState } from 'react';

const FAQ_DATA = [
  // --- GENERAL WINDOW FILM KNOWLEDGE ---
  {
    category: 'general',
    categoryLabel: 'General Window Film Knowledge',
    q: 'What is sunlight made of?',
    a: 'Sunlight is made up of three main parts: ultraviolet rays, visible light, and infrared heat. UV rays can cause skin, eye and material damage, visible light affects brightness and glare, while infrared is the main reason your car cabin or indoor space feels hot.'
  },
  {
    category: 'general',
    categoryLabel: 'General Window Film Knowledge',
    q: 'Why do I still feel hot even when the tint looks dark?',
    a: 'A darker tint does not always mean better heat rejection. Real comfort depends on how much total solar energy is rejected, not only how dark the film looks. A good window film should reduce heat, glare and harmful radiation while maintaining clear visibility.'
  },
  {
    category: 'general',
    categoryLabel: 'General Window Film Knowledge',
    q: 'What does UV420 protection mean?',
    a: 'UV420 protection means the film is designed to block harmful UV rays and high-energy visible blue light up to 420nm. This helps protect your skin, eyes, car interior and indoor furnishings from long-term sunlight damage.'
  },
  {
    category: 'general',
    categoryLabel: 'General Window Film Knowledge',
    q: 'Why is UV protection important in Malaysia and ASEAN climates?',
    a: 'Malaysia and other ASEAN countries receive strong sunlight, high UV exposure, high humidity and solar heat throughout the year. This makes stronger window film protection important for comfort, health, interior protection and long-term durability.'
  },
  {
    category: 'general',
    categoryLabel: 'General Window Film Knowledge',
    q: 'Does window film only protect against heat?',
    a: 'No. A quality window film should do more than reduce heat. It should also reduce harmful UV exposure, reduce glare, protect skin and eyes, slow down interior fading, improve comfort and help preserve your vehicle or building interior.'
  },
  {
    category: 'general',
    categoryLabel: 'General Window Film Knowledge',
    q: 'What is Ultraviolet (UV) Rejection?',
    a: 'Ultraviolet (UV) rays range from 280nm to 400nm in the light spectrum. Ultraviolet Rejection is the percentage of ultraviolet energy deflected away from the window film. Ultraviolet rays are the leading cause of upholstery and furnishings fading, and they can also cause severe skin damage and skin cancer.'
  },
  {
    category: 'general',
    categoryLabel: 'General Window Film Knowledge',
    q: 'What is High Energy Visible (HEV) Light?',
    a: 'HEV Light (often called Blue Light) ranges from 380nm to 500nm in the visible light spectrum. It reaches deeper into the eyes, and its cumulative effect can damage the retina. HEV Blue Light between 380nm and 420nm is the most harmful, penetrating into the skin dermis and potentially causing macular degeneration, cataracts, myopia, glaucoma, and premature wrinkles.'
  },
  {
    category: 'general',
    categoryLabel: 'General Window Film Knowledge',
    q: 'What is the law regarding tinting of motor vehicles in Malaysia?',
    a: 'According to the JPJ (Road Transport Department) regulations in Malaysia: the front windshield must allow a minimum of 70% Visible Light Transmission (VLT); front side windows must allow at least 50% VLT; and rear side windows and the rear windshield have no VLT limit (0% VLT is permitted, allowing them to be fully tinted/darkened), provided the vehicle is equipped with left and right side mirrors.'
  },
  {
    category: 'general',
    categoryLabel: 'General Window Film Knowledge',
    q: 'What is Infrared (IR) Rejection?',
    a: 'Infrared (IR) rays range from 780nm to 2500nm in the light spectrum and carry the majority of solar heat. Infrared Rejection is the percentage of this infrared heat energy blocked or deflected away by the window film.'
  },
  {
    category: 'general',
    categoryLabel: 'General Window Film Knowledge',
    q: 'What is Total Solar Energy Rejection (TSER)?',
    a: 'TSER is a comprehensive metric describing the total amount of solar energy (UV + Visible Light + Infrared) blocked from passing through the glass. It varies by regional weather conditions. For instance, in regions with a low UV index, TSER calculations weigh VLT and IR more heavily. In tropical climates like Malaysia, where the UV index is very high (ranging from level 9 to 13), TSER accounts for 10% UV + 40% VLT + 50% IR rejection.'
  },
  {
    category: 'general',
    categoryLabel: 'General Window Film Knowledge',
    q: 'What will I benefit from IrisPro window film?',
    a: 'By installing IrisPro window film, you will benefit from: lower energy bills, significantly reduced heat and glare, elimination of 99.9999% of UV400 rays, and elimination of "hot spots" (which increases the cooling efficiency of air conditioners). It also prevents furniture and upholstery from fading (prolonging their lifespan) and protects your skin and eyes from harmful UV and HEV Blue Light radiation.'
  },
  {
    category: 'general',
    categoryLabel: 'General Window Film Knowledge',
    q: 'What is window film made of?',
    a: 'Window film is made from high-grade polyester layers that undergo specialized manufacturing (like sputtering or nano-ceramic deposition) and are coated with a pressure-sensitive adhesive. It is applied to the glass using a mild water-and-soap solution to activate the adhesive.'
  },

  // --- HEAT REJECTION & COMFORT ---
  {
    category: 'heat',
    categoryLabel: 'Heat Rejection & Comfort',
    q: 'What is the difference between IRR and TSER?',
    a: 'IRR, or Infrared Rejection, measures heat rejection at a specific infrared wavelength, commonly 950nm or 1400nm. TSER, or Total Solar Energy Rejection, measures how much total solar energy is rejected across UV, visible light and infrared. TSER is generally a better indicator of real-world heat comfort.'
  },
  {
    category: 'heat',
    categoryLabel: 'Heat Rejection & Comfort',
    q: 'Why can a film with 99% IRR still feel hot?',
    a: 'A 99% IRR reading may only refer to one selected wavelength. It does not always represent the full infrared heat range or total solar energy entering the cabin. A film can show a high IRR number but still allow heat through other wavelengths.'
  },
  {
    category: 'heat',
    categoryLabel: 'Heat Rejection & Comfort',
    q: 'Should I choose a tint based only on IRR percentage?',
    a: 'No. IRR is useful, but it should not be the only factor. You should also compare TSER, VLT, UV rejection, film technology, installation quality and real-world performance.'
  },
  {
    category: 'heat',
    categoryLabel: 'Heat Rejection & Comfort',
    q: 'What is TSER and why does it matter?',
    a: 'TSER means Total Solar Energy Rejection. It measures how much total solar energy is rejected before entering your car or building. A higher TSER usually means better overall heat rejection and better real-world comfort.'
  },
  {
    category: 'heat',
    categoryLabel: 'Heat Rejection & Comfort',
    q: 'What causes heat build-up inside a car?',
    a: 'Heat enters through the glass, then the dashboard, seats, panels and other surfaces absorb the solar energy. These surfaces store heat and release it back into the cabin, which is why the car can still feel hot even after the sun is gone.'
  },
  {
    category: 'heat',
    categoryLabel: 'Heat Rejection & Comfort',
    q: 'Can window film completely stop heat?',
    a: 'No window film can completely stop heat. A quality film helps reduce solar heat before it enters, especially near-infrared heat from the sun. However, heat already stored inside surfaces can still radiate back into the cabin.'
  },
  {
    category: 'heat',
    categoryLabel: 'Heat Rejection & Comfort',
    q: 'Why does my car still feel warm after parking under the sun?',
    a: 'When a car is parked under the sun for a long time, the dashboard, seats, roof, glass and interior materials absorb heat. A quality tint reduces heat build-up, but it cannot instantly remove heat that has already been stored inside the car.'
  },
  {
    category: 'heat',
    categoryLabel: 'Heat Rejection & Comfort',
    q: 'Will my energy costs decrease?',
    a: 'Yes! The amount saved depends on the film type, climate, and property-specific variables (location, building orientation, existing HVAC system, etc.). On average, clients experience cooling energy savings of between 10% to 30%.'
  },

  // --- PROTECTION FOR SKIN, EYES & INTERIOR ---
  {
    category: 'protection',
    categoryLabel: 'Protection for Skin, Eyes & Interior',
    q: 'How does sunlight affect skin?',
    a: 'UVB, UVA, UVA1 and HEV blue light can penetrate the skin at different depths. Long-term exposure may contribute to sunburn, pigmentation, wrinkles, premature aging and other visible skin damage.'
  },
  {
    category: 'protection',
    categoryLabel: 'Protection for Skin, Eyes & Interior',
    q: 'How does sunlight affect the eyes?',
    a: 'UV and HEV blue light can affect different parts of the eye, including the cornea, lens, retina and macula. Long-term exposure may contribute to eye strain, visual stress and other eye-related damage risks.'
  },
  {
    category: 'protection',
    categoryLabel: 'Protection for Skin, Eyes & Interior',
    q: 'Can window film help protect car interiors?',
    a: 'Yes. Window film helps reduce UV, visible light and heat exposure that can cause dashboard cracking, leather drying, colour fading, screen ageing and general interior deterioration.'
  },
  {
    category: 'protection',
    categoryLabel: 'Protection for Skin, Eyes & Interior',
    q: 'Can window film help protect home or office interiors?',
    a: 'Yes. A suitable window film can help reduce fading and aging of curtains, flooring, carpets, furniture and artwork by managing UV rays, visible light and solar heat entering through glass.'
  },
  {
    category: 'protection',
    categoryLabel: 'Protection for Skin, Eyes & Interior',
    q: 'Why do interiors fade even when there is no direct sunlight?',
    a: 'Fading is not caused by UV alone. Visible light, infrared heat, oxidation, humidity, pollutants and environmental factors can also contribute to colour fading and material aging over time.'
  },
  {
    category: 'protection',
    categoryLabel: 'Protection for Skin, Eyes & Interior',
    q: 'Will my furniture fade be reduced?',
    a: 'Absolutely. Fading is caused by a combination of factors: 40% is caused by UV rays, 25% by heat, 25% by visible light, and 10% by miscellaneous factors (e.g., fabric dye quality). IrisPro window films block 99.9999% of UV rays and significantly reduce heat and visible light transmission, mitigating up to 90% of the factors that cause interior fading.'
  },

  // --- IRISPRO TECHNOLOGY ---
  {
    category: 'technology',
    categoryLabel: 'IrisPro Technology',
    q: 'What makes IrisPro different from normal window films?',
    a: 'IrisPro combines UV420 protection, 6-layer Hotmelt technology and multi-layer silver sputtering technology. This combination is designed to provide broad-spectrum protection, strong heat rejection, clear visibility, colour stability and long-term durability.'
  },
  {
    category: 'technology',
    categoryLabel: 'IrisPro Technology',
    q: 'What is IrisPro 6-layer Hotmelt technology?',
    a: 'It is a film structure where multiple functional layers are integrated into a stronger PET base film. This helps improve UV420 protection, colour stability, heat rejection stability, anti-aging performance and long-term durability.'
  },
  {
    category: 'technology',
    categoryLabel: 'IrisPro Technology',
    q: 'What is sputtering technology?',
    a: 'Sputtering is a vacuum coating process where metal atoms are bonded onto the film surface. This creates a thin and stable metal layer that helps reflect solar heat and improve long-term heat rejection performance.'
  },
  {
    category: 'technology',
    categoryLabel: 'IrisPro Technology',
    q: 'Are all sputtered films the same?',
    a: 'No. The performance of sputtered films depends on the metal type, purity, layer thickness, number of layers, sputtering precision and overall film construction. More layers alone do not automatically mean better performance.'
  },
  {
    category: 'technology',
    categoryLabel: 'IrisPro Technology',
    q: 'Why does IrisPro use silver sputtering?',
    a: 'Silver has strong infrared reflection performance, making it suitable for high heat rejection. IrisPro uses multi-layer silver sputtering to improve broad-spectrum heat rejection, stability and long-term comfort.'
  },
  {
    category: 'technology',
    categoryLabel: 'IrisPro Technology',
    q: 'What is the difference between Titan X and Diamond X?',
    a: 'Titan X is IrisPro’s flagship series with 18-layer silver sputtering, designed for maximum protection and ultimate comfort. Diamond X is a premium series with 12-layer silver sputtering, designed for strong heat rejection, clear visibility and premium comfort.'
  },
  {
    category: 'technology',
    categoryLabel: 'IrisPro Technology',
    q: 'What is the difference between 99% UV Rejection Film and IrisPro 100% UV Rejection Film?',
    a: 'Most solar window films claiming 99% UV rejection only block UV rays up to 380nm. In contrast, IrisPro 100% UV Rejection Film provides full protection up to UV400nm (blocking the entire UV spectrum). Our UV+420 optical solar film goes even further, rejecting 99.9999% of UV400 radiation.'
  },
  {
    category: 'technology',
    categoryLabel: 'IrisPro Technology',
    q: 'What is the difference between IrisPro Titanium sputter and other sputter window films?',
    a: 'IrisPro uses high-grade US Titanium Sputtering to achieve exceptional heat rejection. Titanium is highly stable and will not rust or corrode under normal weather conditions. Many other window films use silver or other metals in their sputtering process, which tend to oxidize and corrode over time, leading to degraded performance.'
  },

  // --- FILM DATA & CHOOSING THE RIGHT TINT ---
  {
    category: 'data',
    categoryLabel: 'Film Data & Choosing the Right Tint',
    q: 'How should I compare window film data sheets?',
    a: 'Do not compare only one number. Check VLT, UV rejection, IRR, TSER, glare reduction, shading coefficient, U-value, tested standards, film technology and warranty support.'
  },
  {
    category: 'data',
    categoryLabel: 'Film Data & Choosing the Right Tint',
    q: 'What is VLT?',
    a: 'VLT means Visible Light Transmission. It shows how much visible light can pass through the film. Higher VLT means a brighter and clearer view, while lower VLT means a darker appearance.'
  },
  {
    category: 'data',
    categoryLabel: 'Film Data & Choosing the Right Tint',
    q: 'What is glare reduction?',
    a: 'Glare reduction measures how much uncomfortable brightness is reduced. It improves visual comfort and driving safety, especially under strong sunlight.'
  },
  {
    category: 'data',
    categoryLabel: 'Film Data & Choosing the Right Tint',
    q: 'What should I look for when choosing a quality window film?',
    a: 'Look for proven technology, broad-spectrum protection, high TSER, stable durability, clear visibility, professional installation, warranty support and suitability for ASEAN climate conditions.'
  },
  {
    category: 'data',
    categoryLabel: 'Film Data & Choosing the Right Tint',
    q: 'Is a cheaper tint worth it?',
    a: 'A cheaper tint may look attractive at first, but it may have weaker heat rejection, faster fading, poor durability or limited warranty support. A good tint should be compared by performance, technology, installation quality and long-term value.'
  },
  {
    category: 'data',
    categoryLabel: 'Film Data & Choosing the Right Tint',
    q: 'What is Visible Light Transmission (VLT)?',
    a: 'VLT ranges from 380nm to 780nm in the light spectrum. It represents the amount of visible light that passes directly through filmed glass. The darker the tint, the lower the percentage of visible light transmitted.'
  },

  // --- INSTALLATION & AFTERCARE ---
  {
    category: 'installation',
    categoryLabel: 'Installation & Aftercare',
    q: 'Why is professional installation important?',
    a: 'Even the best film can underperform if it is not installed properly. Professional installation helps ensure clear visibility, long-lasting durability, proper adhesion, no bubbling or peeling, and better overall performance.'
  },
  {
    category: 'installation',
    categoryLabel: 'Installation & Aftercare',
    q: 'What are common tint installation issues?',
    a: 'Common issues include bubbles, peeling, haze, cloudy appearance, scratches and edge lifting. Many of these problems are caused by dust, poor preparation, incorrect handling, poor squeegee work or rushed installation.'
  },
  {
    category: 'installation',
    categoryLabel: 'Installation & Aftercare',
    q: 'How long should I wait before rolling down my windows after installation?',
    a: 'You should avoid rolling down your windows for at least 3 to 5 days after installation. This allows the film to cure properly and reduces the risk of peeling or shifting.'
  },
  {
    category: 'installation',
    categoryLabel: 'Installation & Aftercare',
    q: 'When can I clean the inside glass after installation?',
    a: 'Avoid cleaning the inside glass for at least 7 days after installation. After that, use a soft cloth and mild cleaner only.'
  },
  {
    category: 'installation',
    categoryLabel: 'Installation & Aftercare',
    q: 'Are small water marks or haze normal after installation?',
    a: 'Yes. During the curing period, slight haze or small water marks can be normal. The film usually continues to cure over several days. If the issue remains after the curing period, contact the installer for checking.'
  },
  {
    category: 'installation',
    categoryLabel: 'Installation & Aftercare',
    q: 'How do I maintain my window film?',
    a: 'Use a soft microfiber cloth and mild ammonia-free cleaner. Avoid razors, scrapers, sharp tools or abrasive cleaning methods on the film surface.'
  },
  {
    category: 'installation',
    categoryLabel: 'Installation & Aftercare',
    q: 'Can I park under the sun after tint installation?',
    a: 'Where possible, park in shaded areas during the early curing period and for long-term film care. Reducing extreme heat exposure helps protect the film and extend its performance life.'
  },
  {
    category: 'installation',
    categoryLabel: 'Installation & Aftercare',
    q: 'How do I clean the filmed surface after installation?',
    a: 'You can wash the filmed surface with common, non-abrasive glass cleaners (including ammonia-based products) 30 days after installation. Use soft microfibers, synthetic sponges, or squeegees. Avoid bristle brushes, steel wool, or abrasive cleaning agents that could scratch the film. To protect your warranty, do not stick tape or adhesive products on the film.'
  },
  {
    category: 'installation',
    categoryLabel: 'Installation & Aftercare',
    q: 'Do you install window film on the inside or outside of a building?',
    a: 'Window film is typically installed on the interior side of the glass to protect it from weather elements and maximize its lifespan. It is best installed after nearby construction is completed. In cases where the interior is inaccessible, specialized exterior films can be applied and sealed at the edges, though they carry a shorter warranty period due to direct weathering.'
  },
  {
    category: 'installation',
    categoryLabel: 'Installation & Aftercare',
    q: 'What is the procedure to install window film?',
    a: 'The standard interior installation procedure involves: (1) Preparing the area with drop cloths to protect flooring and moving nearby furniture; (2) Thoroughly cleaning the glass and gaskets with a soap solution to remove all dust and residue; (3) Wetting the glass and placing the film on it; (4) Squeegeeing out all excess water and bubbles from between the glass and the film; (5) Trimming the edges flat; and (6) Wiping down the window for a clean finish.'
  },
  {
    category: 'installation',
    categoryLabel: 'Installation & Aftercare',
    q: 'Can you apply window film to Plexiglas®?',
    a: 'No. The adhesive is specially engineered for glass surfaces and will not adhere properly to Plexiglas® or acrylic sheets.'
  },
  {
    category: 'installation',
    categoryLabel: 'Installation & Aftercare',
    q: 'Can you apply window film to tinted / Low-E glass?',
    a: 'Yes, absolutely. Applying IrisPro film to tinted or Low-E glass will further enhance its solar performance, providing significantly greater heat rejection and UV protection.'
  },
  {
    category: 'installation',
    categoryLabel: 'Installation & Aftercare',
    q: 'Will window film ruin my view?',
    a: 'No. IrisPro films are designed for high optical clarity. By reducing harsh glare and direct heat, they actually increase visual comfort and make your outdoor view clearer and more enjoyable.'
  },
  {
    category: 'installation',
    categoryLabel: 'Installation & Aftercare',
    q: 'Is the film difficult to maintain after installation?',
    a: 'Not at all. Thanks to IrisPro’s premium scratch-resistant coatings, cleaning the windows is just as easy as cleaning normal untreated glass.'
  },
  {
    category: 'installation',
    categoryLabel: 'Installation & Aftercare',
    q: 'Will the film give a mirrored exterior appearance?',
    a: 'No. IrisPro Optical Solar Films feature low reflectivity and high visual clarity. They are designed to provide daytime privacy (preventing outsiders from looking in) without creating an unsightly mirrored look, and they maintain excellent visibility from the inside at night.'
  },

  // --- QUALITY, WARRANTY & PERFORMANCE ---
  {
    category: 'quality',
    categoryLabel: 'Quality, Warranty & Performance',
    q: 'Is window film inspected under microscope-level perfection?',
    a: 'No. Professional window film standards focus on real-world appearance and performance from normal viewing distance, not microscopic perfection. Small isolated imperfections may be acceptable if they are not visually obvious, clustered or affecting visibility.'
  },
  {
    category: 'quality',
    categoryLabel: 'Quality, Warranty & Performance',
    q: 'What is not acceptable after tint installation?',
    a: 'Large bubbles, dust clusters, scratches, creases, peeling, edge lifting, optical distortion or defects that affect visibility and safety should not be accepted.'
  },
  {
    category: 'quality',
    categoryLabel: 'Quality, Warranty & Performance',
    q: 'Does IrisPro provide performance guarantee?',
    a: 'Yes. IrisPro positions its products with performance guarantee support, including heat rejection performance, UV420 protection, colour stability, professional installation support and after-sales assistance.'
  },
  {
    category: 'quality',
    categoryLabel: 'Quality, Warranty & Performance',
    q: 'Why should I choose a film with warranty and after-sales support?',
    a: 'Warranty and after-sales support give peace of mind. A tint without proper support may create hidden costs later if fading, bubbling, peeling or heat rejection issues occur.'
  },
  {
    category: 'quality',
    categoryLabel: 'Quality, Warranty & Performance',
    q: 'What is the main benefit of choosing IrisPro?',
    a: 'IrisPro is designed for ASEAN and Equator climate conditions, combining UV420 protection, strong heat rejection, clear visibility, colour stability, long-term durability, professional installation and after-sales support.'
  },
  {
    category: 'quality',
    categoryLabel: 'Quality, Warranty & Performance',
    q: 'What is the difference between IrisPro Performance Warranty vs other window film warranties?',
    a: 'Thanks to our double patented technology, IrisPro is the only window film brand that offers up to a 10-year Performance Warranty. While other brands typically only cover physical defects (like peeling, bubbling, delaminating, or discoloring), IrisPro uniquely warrants the actual heat rejection, UV rejection, and visible light performance over time.'
  },
  {
    category: 'quality',
    categoryLabel: 'Quality, Warranty & Performance',
    q: 'What is the life expectancy of window film?',
    a: 'The life expectancy of window film depends on climate, sun exposure, and usage. On average, high-quality IrisPro films last between 5 to 10 years, and they are fully backed by our performance warranty.'
  },
  {
    category: 'quality',
    categoryLabel: 'Quality, Warranty & Performance',
    q: 'Does IrisPro window film have chemical safety tests?',
    a: 'Yes. IrisPro films are fully tested by SGS for REACH compliance. Low-quality films and adhesives can emit harmful Volatile Organic Compounds (VOCs) when exposed to high heat and direct sun, which can accumulate inside a vehicle or room and pose health risks. IrisPro films are certified safe and non-toxic.'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Questions' },
  { id: 'general', label: 'General Window Film Knowledge' },
  { id: 'heat', label: 'Heat Rejection & Comfort' },
  { id: 'protection', label: 'Protection for Skin, Eyes & Interior' },
  { id: 'technology', label: 'IrisPro Technology' },
  { id: 'data', label: 'Film Data & Choosing the Right Tint' },
  { id: 'installation', label: 'Installation & Aftercare' },
  { id: 'quality', label: 'Quality, Warranty & Performance' }
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
