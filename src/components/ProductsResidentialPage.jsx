import { useEffect, useState } from 'react';

const SERIES_DATA = {
  'home-shield': {
    name: 'Home Shield Series',
    tagline: 'Ultra-Clarity Nano Ceramic Heat Defense',
    description: 'Designed for modern homes with large windows. Rejects solar heat while maintaining absolute optical transparency, allowing you to enjoy scenic outdoor views and natural daylight without the accompanying heat buildup.',
    features: [
      'Allows 70%+ Natural Light Transmission',
      'Cuts Infrared Heat by up to 92%',
      'Preserves Natural Exterior Color Tone',
      'Non-Reflective, High-Definition Clarity'
    ],
    specs: [
      { model: 'Home Shield 70', vlt: '72%', uvr: '99%', irr: '90%', tser: '55%' },
      { model: 'Home Shield 50', vlt: '51%', uvr: '99%', irr: '92%', tser: '60%' }
    ]
  },
  'privacy-reflective': {
    name: 'Privacy Reflective Series',
    tagline: 'Daytime One-Way Mirror Privacy & Comfort',
    description: 'Perfect for low-rise houses, townhouses, and ground floors. Engineered with a micro-thin reflective metalized layer that provides total daytime one-way privacy, preventing outsiders from looking in while letting you see out.',
    features: [
      'One-Way Mirror Privacy Shield',
      'Maximum Solar Glare Mitigation (Up to 80% Glare Cut)',
      'High Exterior Heat Rejection (Up to 75% TSER)',
      'Sleek Modern Metallic Look'
    ],
    specs: [
      { model: 'Reflective 35', vlt: '35%', uvr: '99%', irr: '88%', tser: '68%' },
      { model: 'Reflective 15', vlt: '15%', uvr: '99%', irr: '94%', tser: '76%' }
    ]
  },
  'safety-shatter': {
    name: 'Safety & Shatter Series',
    tagline: 'Dual Action Impact Protection + Solar Blocking',
    description: 'Combines our optical heat protection with a heavy-duty, high-tensile polyester safety substrate. Strengthens glass windows against impacts from heavy storms, accidental trips, stray balls, or attempted break-ins.',
    features: [
      '4mil - 8mil High-Tensile Thickness',
      'Holds Broken Glass Shards in Place Securely',
      'Blocks 99% UV to Prevent Furniture Fading',
      'Meets International Safety Glass Standards'
    ],
    specs: [
      { model: 'Safety Shield 70', vlt: '70%', uvr: '99%', irr: '80%', tser: '50%' },
      { model: 'Safety Shield 50', vlt: '50%', uvr: '99%', irr: '85%', tser: '56%' }
    ]
  }
};

export default function ProductsResidentialPage() {
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product-detail-page residential-page">
      {/* Hero Section */}
      <section className="product-hero product-hero--resi">
        <div className="product-hero__overlay" />
        <div className="product-hero__inner">
          <span className="product-hero__kicker">RESIDENTIAL WINDOW PROTECTION</span>
          <h1 className="product-hero__title">
            Cooler Rooms,
            <br />
            <span className="product-hero__title--red">Calmer Afternoons.</span>
          </h1>
          <p className="product-hero__lead">
            Protect your family, secure your home glass, and cut electricity costs. Our residential solar films block heat while letting beautiful natural light illuminate your spaces.
          </p>
          <a href="#consultation" className="product-hero__cta">
            Request Home Consultation
          </a>
        </div>
      </section>

      {/* Grid of Series */}
      <section className="product-section">
        <div className="product-section__container">
          <div className="section-title-wrapper">
            <span className="chapter-label">Residential Solutions</span>
            <h2 className="display-sm">Engineered for Modern Living</h2>
            <p className="body-md">
              Upgrade your home window panes with our long-lasting, nano-ceramic solar barriers. No bubbles, no peeling, and guaranteed protection.
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

      {/* Residential Benefits Dark Section */}
      <section className="product-benefits-dark">
        <div className="product-section__container">
          <div className="benefits-grid">
            <div className="benefits-content">
              <span className="chapter-label text-red">Interior Defense</span>
              <h2 className="display-sm text-white">Protecting What Matters</h2>
              <div className="benefit-item">
                <h4 className="benefit-item__title text-white">Prevent Upholstery Fading</h4>
                <p className="benefit-item__desc">
                  Solar UV radiation is the primary cause of floor warping, leather cracking, and artwork fading. Our films stop 99%+ of UV rays, preserving your premium home interiors for years to come.
                </p>
              </div>
              <div className="benefit-item">
                <h4 className="benefit-item__title text-white">Substantial Cooling Energy Savings</h4>
                <p className="benefit-item__desc">
                  By cutting incoming heat by up to 76%, your home air conditioners reach target temperatures faster and require less power to maintain comfort. Watch your monthly utility bills drop.
                </p>
              </div>
              <div className="benefit-item">
                <h4 className="benefit-item__title text-white">Child-Safe Shatter Guard</h4>
                <p className="benefit-item__desc">
                  Active children and pets run the risk of impacting glass doors or low windows. Our safety films hold shattered glass fragments together in a cohesive web, preventing deep cuts or catastrophic failures.
                </p>
              </div>
            </div>
            <div className="benefits-image-wrapper">
              <img
                src={`${import.meta.env.BASE_URL}images/residential-glass-2.png`}
                alt="Beautiful clean living room with sun filtering through window film"
                className="benefits-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section className="product-section specs-section" id="specs">
        <div className="product-section__container">
          <div className="section-title-wrapper text-center">
            <span className="chapter-label">Technical Specification</span>
            <h2 className="display-sm">Residential Data Sheets</h2>
            <p className="body-md">
              Find the exact balance of light transmittance, privacy, and total heat blocking for your home windows.
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
              className={`specs-tab-btn ${activeTab === 'home-shield' ? 'active' : ''}`}
              onClick={() => setActiveTab('home-shield')}
            >
              Home Shield
            </button>
            <button
              className={`specs-tab-btn ${activeTab === 'privacy-reflective' ? 'active' : ''}`}
              onClick={() => setActiveTab('privacy-reflective')}
            >
              Privacy Reflective
            </button>
            <button
              className={`specs-tab-btn ${activeTab === 'safety-shatter' ? 'active' : ''}`}
              onClick={() => setActiveTab('safety-shatter')}
            >
              Safety & Shatter
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
            * Residential films carry a 10-year bubble-free warranty for indoor application. Tested in accordance with ASTM E903 standards.
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="product-cta-section">
        <div className="product-section__container">
          <div className="product-cta-card">
            <h3 className="product-cta-card__title">Protect Your Family's Comfort</h3>
            <p className="product-cta-card__desc">
              Request a free on-site measurement and solar heat assessment from our residential window film team.
            </p>
            <a href="#consultation" className="product-cta-card__btn">
              Get a Residential Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
