import { useEffect, useState } from 'react';

const SERIES_DATA = {
  'uv-420': {
    name: 'UV+420 Series',
    tagline: 'Dual-Defense Shield for Eye & Skin Health',
    description: 'The world\'s first film that filters 100% of UV rays and 99% of High-Energy Visible (HEV) blue light (up to 420nm). Specially recommended for night driving, medical skin sensitivities, and interior dashboard longevity.',
    features: [
      '100% UV Rejection (UVR)',
      '99% HEV Blue Light Blocking',
      'Reduces Eye Fatigue & Driving Fatigue',
      '10-Year Clarity Warranty'
    ],
    specs: [
      { model: 'UV+420 70', vlt: '70%', uvr: '100%', irr: '85%', tser: '58%' },
      { model: 'UV+420 50', vlt: '50%', uvr: '100%', irr: '88%', tser: '62%' },
      { model: 'UV+420 30', vlt: '30%', uvr: '100%', irr: '90%', tser: '65%' }
    ]
  },
  'royal': {
    name: 'Royal Series',
    tagline: 'Premium Nanocarbon Ceramic Solar Shield',
    description: 'Constructed using premium inorganic nanocarbon ceramic particles that will never fade or turn purple. Delivers exceptional privacy, high glare reduction, and robust heat insulation with zero signal interference.',
    features: [
      'Advanced Nanocarbon Ceramic Structure',
      'Zero Signal Block (GPS, SmartTAG, RFID, 5G)',
      'Rich Charcoal Aesthetics (No Metallic Reflection)',
      'Non-Fading Color Lock Technology'
    ],
    specs: [
      { model: 'Royal 70', vlt: '70%', uvr: '99%', irr: '90%', tser: '63%' },
      { model: 'Royal 50', vlt: '50%', uvr: '99%', irr: '92%', tser: '66%' },
      { model: 'Royal 35', vlt: '35%', uvr: '99%', irr: '95%', tser: '70%' },
      { model: 'Royal 20', vlt: '20%', uvr: '99%', irr: '96%', tser: '74%' }
    ]
  },
  'supreme': {
    name: 'Supreme Series',
    tagline: 'The Ultimate Multi-Layer Sputtered Shield',
    description: 'The peak of thermal insulation engineering. Multi-layer precious metal sputtering combined with ceramic hybrid compounds blocks up to 97% of infrared heat waves. Engineered to defeat the harshest tropical sun.',
    features: [
      'Highest Heat Rejection (Up to 97% IRR)',
      'Multi-Layer Magnetron Sputtering',
      'Maximum Solar Energy Rejection (82% TSER)',
      'Shines with a Subtle Premium Luster'
    ],
    specs: [
      { model: 'Supreme 70', vlt: '70%', uvr: '99.9%', irr: '97%', tser: '72%' },
      { model: 'Supreme 50', vlt: '50%', uvr: '99.9%', irr: '98%', tser: '78%' },
      { model: 'Supreme 25', vlt: '25%', uvr: '99.9%', irr: '99%', tser: '82%' }
    ]
  }
};

export default function ProductsAutomotivePage() {
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product-detail-page auto-page">
      {/* Hero Section */}
      <section className="product-hero product-hero--auto">
        <div className="product-hero__overlay" />
        <div className="product-hero__inner">
          <span className="product-hero__kicker">AUTOMOTIVE SHIELD SERIES</span>
          <h1 className="product-hero__title">
            Uncompromised Comfort
            <br />
            <span className="product-hero__title--red">For Every Journey.</span>
          </h1>
          <p className="product-hero__lead">
            Defeat heat, glare, and harmful UV rays. IrisPro Automotive solar films combine advanced nanotech filtration with crystal clear visibility to transform your drive.
          </p>
          <a href="#consultation" className="product-hero__cta">
            Book Installation
          </a>
        </div>
      </section>

      {/* Grid of Series */}
      <section className="product-section">
        <div className="product-section__container">
          <div className="section-title-wrapper">
            <span className="chapter-label">Product Showcase</span>
            <h2 className="display-sm">Three Paths to Complete Shielding</h2>
            <p className="body-md">
              Choose the exact formulation that matches your driving lifestyle, eye sensitivity, and heat tolerance.
            </p>
          </div>

          <div className="series-grid">
            {Object.entries(SERIES_DATA).map(([key, data]) => (
              <div key={key} className="series-card">
                <div className="series-card__header">
                  <span className={`series-card__badge series-card__badge--${key}`}>{data.name}</span>
                  <h3 className="series-card__title">{data.tagline}</h3>
                </div>
                <p className="series-card__description">{data.description}</p>
                <div className="series-card__features-title">KEY BENEFITS:</div>
                <ul className="series-card__features-list">
                  {data.features.map((feat, i) => (
                    <li key={i} className="series-card__feat-item">
                      <svg className="series-card__check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why IrisPro Auto Tint section */}
      <section className="product-benefits-dark">
        <div className="product-section__container">
          <div className="benefits-grid">
            <div className="benefits-content">
              <span className="chapter-label text-red">Advanced Defense</span>
              <h2 className="display-sm text-white">Why Smart Drivers Choose IrisPro</h2>
              <div className="benefit-item">
                <h4 className="benefit-item__title text-white">Zero Signal Blockage</h4>
                <p className="benefit-item__desc">
                  Unlike traditional metallic tints that reflect wireless frequencies, our advanced carbon ceramic structures are fully dielectric. GPS, SmartTAG, RFID, and cellular signals work without interruption.
                </p>
              </div>
              <div className="benefit-item">
                <h4 className="benefit-item__title text-white">Patented UV+420 Defense</h4>
                <p className="benefit-item__desc">
                  Standard films stop at 380nm. IrisPro dual-patented protection intercepts up to 420nm, blocking High-Energy Visible blue light that causes retinal damage and accelerating dashboard weathering.
                </p>
              </div>
              <div className="benefit-item">
                <h4 className="benefit-item__title text-white">Anti-Shatter Cohesive Layer</h4>
                <p className="benefit-item__desc">
                  Our heavy-duty high-tensile substrate binds shattered glass fragments securely in the event of an impact, preventing flying glass shards from injuring passengers.
                </p>
              </div>
            </div>
            <div className="benefits-image-wrapper">
              <img
                src={`${import.meta.env.BASE_URL}images/hot-car-exterior.png`}
                alt="Premium sports sedan showing solar control glass"
                className="benefits-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="product-section specs-section" id="specs">
        <div className="product-section__container">
          <div className="section-title-wrapper text-center">
            <span className="chapter-label">Technical Data</span>
            <h2 className="display-sm">Engineered Specifications</h2>
            <p className="body-md">
              Compare transmission rates, ultraviolet rejection, and infrared blocking across all series models.
            </p>
          </div>

          {/* Tabs */}
          <div className="specs-tabs">
            <button
              className={`specs-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Series
            </button>
            <button
              className={`specs-tab-btn ${activeTab === 'uv-420' ? 'active' : ''}`}
              onClick={() => setActiveTab('uv-420')}
            >
              UV+420 Series
            </button>
            <button
              className={`specs-tab-btn ${activeTab === 'royal' ? 'active' : ''}`}
              onClick={() => setActiveTab('royal')}
            >
              Royal Series
            </button>
            <button
              className={`specs-tab-btn ${activeTab === 'supreme' ? 'active' : ''}`}
              onClick={() => setActiveTab('supreme')}
            >
              Supreme Series
            </button>
          </div>

          {/* Table */}
          <div className="specs-table-container">
            <table className="specs-table">
              <thead>
                <tr>
                  <th>Model / Film Series</th>
                  <th>Visible Light Transmitted (VLT)</th>
                  <th>UV Rejection (UVR)</th>
                  <th>Infrared Rejection (IRR)</th>
                  <th>Total Solar Energy Rejected (TSER)</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(SERIES_DATA)
                  .filter(([key]) => activeTab === 'all' || activeTab === key)
                  .map(([key, data]) =>
                    data.specs.map((spec, i) => (
                      <tr key={`${key}-${i}`}>
                        <td className="specs-model-name">
                          <span className={`specs-indicator specs-indicator--${key}`} />
                          {spec.model}
                        </td>
                        <td>{spec.vlt}</td>
                        <td className="text-bold">{spec.uvr}</td>
                        <td className="text-bold">{spec.irr}</td>
                        <td className="text-red text-bold">{spec.tser}</td>
                      </tr>
                    ))
                  )}
              </tbody>
            </table>
          </div>
          <div className="specs-note text-center">
            * All data is calibrated using optical spectrometer instruments in compliance with ISO 9050 / ASHRAE standards.
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="product-cta-section">
        <div className="product-section__container">
          <div className="product-cta-card">
            <h3 className="product-cta-card__title">Experience the IrisPro Difference</h3>
            <p className="product-cta-card__desc">
              Schedule your professional tinting consultation today. Our certified installers ensure a micro-gap finish tailored to your vehicle brand.
            </p>
            <a href="#consultation" className="product-cta-card__btn">
              Get an Automotive Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
