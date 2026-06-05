import { useEffect, useState } from 'react';

const SERIES_DATA = {
  'energy-saver': {
    name: 'Energy Saver Ceramic',
    tagline: 'High-Performance HVAC Load Mitigation',
    description: 'Designed specifically for large commercial facades and office towers. Intercepts massive thermal energy before it enters the building envelope, reducing chiller energy consumption by up to 18% and ensuring rapid payback periods.',
    features: [
      'Reduces HVAC Chiller Load and Energy Costs',
      'Keeps Working Environments Thermally Uniform',
      'Non-Corrosive Nanotechnology (No Oxidation)',
      '10-Year Commercial Durability Warranty'
    ],
    specs: [
      { model: 'Energy Saver 50', vlt: '50%', uvr: '99%', irr: '93%', tser: '63%' },
      { model: 'Energy Saver 30', vlt: '30%', uvr: '99%', irr: '95%', tser: '70%' }
    ]
  },
  'architectural-mirror': {
    name: 'Architectural Mirror Series',
    tagline: 'Exterior Glare Mitigation & Uniform Facade Aesthetics',
    description: 'Perfect for commercial centers, offices, and retail storefronts facing direct morning or afternoon sun. High external reflectivity blocks extreme solar glare, reducing eye strain in workplaces and creating a modern, uniform facade.',
    features: [
      'Mitigates up to 88% Screen Glare',
      'Superior Heat Shielding (Up to 78% TSER)',
      'Improves Building Visual Facade Uniformity',
      'Scratch-Resistant Hard Coat Layer'
    ],
    specs: [
      { model: 'Arch Mirror 35', vlt: '35%', uvr: '99%', irr: '92%', tser: '72%' },
      { model: 'Arch Mirror 15', vlt: '15%', uvr: '99%', irr: '96%', tser: '78%' }
    ]
  },
  'security-impact': {
    name: 'Security Impact Shield',
    tagline: 'Heavy-Duty Anti-Shatter Facade Reinforcement',
    description: 'A heavy-duty 8mil to 12mil high-tensile security film engineered for retail storefronts, glass lobbies, and high-security zones. Delivers superior shatter-containment to guard against natural disasters, smash-and-grab thefts, and accidental impacts.',
    features: [
      '8mil - 12mil Multi-Layer Optical Polyester',
      'Resists Repeated Impact & Smash Attacks',
      'High-Adhesion Polymeric Bonding Glue',
      'Approved for Retail and Financial Institutions'
    ],
    specs: [
      { model: 'Security Solar 70', vlt: '70%', uvr: '99%', irr: '82%', tser: '52%' },
      { model: 'Security Solar 50', vlt: '50%', uvr: '99%', irr: '88%', tser: '58%' }
    ]
  }
};

export default function ProductsCommercialPage() {
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product-detail-page commercial-page">
      {/* Hero Section */}
      <section className="product-hero product-hero--comm">
        <div className="product-hero__overlay" />
        <div className="product-hero__inner">
          <span className="product-hero__kicker">COMMERCIAL & CORPORATE ENERGY SOLUTIONS</span>
          <h1 className="product-hero__title">
            Better Glass Performance
            <br />
            <span className="product-hero__title--red">For Modern Spaces.</span>
          </h1>
          <p className="product-hero__lead">
            Reduce commercial cooling costs, enhance occupant productivity, and protect your corporate assets with patented high-performance architectural solar control films.
          </p>
          <a href="#consultation" className="product-hero__cta">
            Request Corporate Evaluation
          </a>
        </div>
      </section>

      {/* Grid of Series */}
      <section className="product-section">
        <div className="product-section__container">
          <div className="section-title-wrapper">
            <span className="chapter-label">Commercial Solutions</span>
            <h2 className="display-sm">Engineered at Scale</h2>
            <p className="body-md">
              High-durability window film retrofitting represents the most cost-effective capital upgrade for commercial glass facades compared to full window replacement.
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

      {/* Commercial Benefits Section */}
      <section className="product-benefits-dark">
        <div className="product-section__container">
          <div className="benefits-grid">
            <div className="benefits-content">
              <span className="chapter-label text-red">Operational Value</span>
              <h2 className="display-sm text-white">Smarter Commercial Retrofits</h2>
              <div className="benefit-item">
                <h4 className="benefit-item__title text-white">Chiller Load & HVAC Optimization</h4>
                <p className="benefit-item__desc">
                  Chillers represent up to 40% of a commercial tower's energy bill. By reducing solar gain, IrisPro commercial films lower indoor temperatures, allowing building management systems to scale down chiller speeds and reduce annual cooling energy consumption by up to 18%.
                </p>
              </div>
              <div className="benefit-item">
                <h4 className="benefit-item__title text-white">Workstation Glare Elimination</h4>
                <p className="benefit-item__desc">
                  Solar glare causes visual discomfort and computer screen reflections, lowering employee productivity. Our reflective and ceramic films intercept glare by up to 88% while maintaining clear outside visibility.
                </p>
              </div>
              <div className="benefit-item">
                <h4 className="benefit-item__title text-white">Facade Aesthetic Uniformity</h4>
                <p className="benefit-item__desc">
                  Create a clean, uniform modern appearance across the entire tower facade. Eliminate the visual clutter of varying blinds, curtains, and workplace partitions visible from the exterior.
                </p>
              </div>
            </div>
            <div className="benefits-image-wrapper">
              <img
                src={`${import.meta.env.BASE_URL}images/commercial-building-2.png`}
                alt="Corporate office building with uniform window film reflection"
                className="benefits-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="product-section specs-section" id="specs">
        <div className="product-section__container">
          <div className="section-title-wrapper text-center">
            <span className="chapter-label">Technical Specification</span>
            <h2 className="display-sm">Commercial Data Sheets</h2>
            <p className="body-md">
              Review technical data compiled under standard solar radiation tests to calculate building energy payback.
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
              className={`specs-tab-btn ${activeTab === 'energy-saver' ? 'active' : ''}`}
              onClick={() => setActiveTab('energy-saver')}
            >
              Energy Saver
            </button>
            <button
              className={`specs-tab-btn ${activeTab === 'architectural-mirror' ? 'active' : ''}`}
              onClick={() => setActiveTab('architectural-mirror')}
            >
              Arch Mirror
            </button>
            <button
              className={`specs-tab-btn ${activeTab === 'security-impact' ? 'active' : ''}`}
              onClick={() => setActiveTab('security-impact')}
            >
              Security Impact
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
            * Commercial specifications comply with NFRC testing guidelines and are eligible for green building credit evaluations (LEED / GBI).
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="product-cta-section">
        <div className="product-section__container">
          <div className="product-cta-card">
            <h3 className="product-cta-card__title">Request an Energy ROI Audit</h3>
            <p className="product-cta-card__desc">
              Our engineering specialists provide complete glass heat loading calculations and payback period ROI studies for commercial retrofitting projects.
            </p>
            <a href="#consultation" className="product-cta-card__btn">
              Contact Commercial Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
