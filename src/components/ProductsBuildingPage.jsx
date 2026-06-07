import { useEffect, useState } from 'react';

const PRODUCTS_DATA = {
  'titan-x': {
    name: 'Titan X',
    series: 'signature',
    seriesLabel: 'Signature Series',
    type: 'Multi Layer Silver Sputter',
    thickness: '3 mil',
    warranty: '10 Years Performance Guarantee',
    desc: 'The peak of architectural thermal insulation. Employs advanced silver sputter technology to block extreme solar heat while maintaining optimal light entry.',
    features: ['100% UV Rejection (UVR)', '99% Blue Light Rejection (BLR)', 'Over 99% Infrared Rejection (IRR)'],
    vltOptions: [
      { vlt: 60, tser: 69, label: 'Light (60% VLT)' },
      { vlt: 15, tser: 84, label: 'Dark (15% VLT)' }
    ]
  },
  'diamond': {
    name: 'Diamond',
    series: 'signature',
    seriesLabel: 'Signature Series',
    type: 'Multi Layer Titanium Sputter',
    thickness: '3 - 3.5 mil',
    warranty: '10 Years Performance Guarantee',
    desc: 'Premium titanium sputtering offering extreme heat rejection and stability. Engineered to withstand heavy exposure to tropical sun without color degradation.',
    features: ['100% UV Rejection (UVR)', '99% Blue Light Rejection (BLR)', '98% Infrared Rejection (IRR)'],
    vltOptions: [
      { vlt: 60, tser: 65, label: 'Light (60% VLT)' },
      { vlt: 30, tser: 78, label: 'Medium (30% VLT)' }
    ]
  },
  'raypro': {
    name: 'RayPro',
    series: 'signature',
    seriesLabel: 'Signature Series',
    type: 'Nano Titanium Sputter',
    thickness: '2 - 3.5 mil',
    warranty: '10 Years Performance Guarantee',
    desc: 'High-performance nano titanium film that provides crystal clear visibility and superior thermal protection across a broad range of darkness levels.',
    features: ['100% UV Rejection (UVR)', '99% Blue Light Rejection (BLR)', '95% Infrared Rejection (IRR)'],
    vltOptions: [
      { vlt: 70, tser: 57, label: 'Ultra Clear (70% VLT)' },
      { vlt: 50, tser: 63, label: 'Light (50% VLT)' },
      { vlt: 30, tser: 72, label: 'Medium (30% VLT)' },
      { vlt: 15, tser: 78, label: 'Dark (15% VLT)' }
    ]
  },
  'anti-fade-90': {
    name: 'Anti Fade 90',
    series: 'signature',
    seriesLabel: 'Signature Series',
    type: 'Nano Carbon Ceramic',
    thickness: '2 mil',
    warranty: '7 Years Performance Guarantee',
    desc: 'Deep shade protection built to prevent interior fading and block heat. Rejects high levels of infrared radiation without metallic reflectivity.',
    features: ['100% UV Rejection (UVR)', '99% Blue Light Rejection (BLR)', '90% Infrared Rejection (IRR)'],
    vltOptions: [
      { vlt: 70, tser: 58, label: 'Ultra Clear (70% VLT)' },
      { vlt: 55, tser: 60, label: 'Light (55% VLT)' },
      { vlt: 30, tser: 71, label: 'Medium (30% VLT)' },
      { vlt: 15, tser: 76, label: 'Dark (15% VLT)' }
    ]
  },
  'silver-black-uv420': {
    name: 'UV+420 Silver Black',
    series: 'privacy',
    seriesLabel: 'Privacy + Heat Rejection',
    type: 'Aluminium Metalized',
    thickness: '3 mil',
    warranty: '5 Years Performance Guarantee',
    desc: 'Designed for ultimate one-way privacy and massive heat blocking. Filters 100% UV and 99% BLR, creating a mirror finish from the exterior.',
    features: ['100% UV Rejection (UVR)', '99% Blue Light Rejection (BLR)', '95% Infrared Rejection (IRR)'],
    vltOptions: [
      { vlt: 8, tser: 84, label: 'Super Dark (8% VLT)' }
    ]
  },
  'silver-black': {
    name: 'Silver Black',
    series: 'privacy',
    seriesLabel: 'Privacy + Heat Rejection',
    type: 'Aluminium Metalized',
    thickness: '2 mil',
    warranty: '5 Years Performance Guarantee',
    desc: 'Effective one-way daytime privacy and glare blocking. Features high exterior metallic reflection to redirect heat before it reaches the window.',
    features: ['99% UV Rejection (UVR)', '90% Infrared Rejection (IRR)', 'Reduces Glare by up to 85%'],
    vltOptions: [
      { vlt: 15, tser: 76, label: 'Dark (15% VLT)' }
    ]
  },
  'titanium-hr': {
    name: 'Titanium (HR)',
    series: 'heat-rejection',
    seriesLabel: 'Heat Rejection Series',
    type: 'Nano Titanium Sputter',
    thickness: '2 - 3.5 mil',
    warranty: '7 Years Performance Guarantee',
    desc: 'Cost-effective heat control sputter film that reduces glare, solar radiation, and hot spots in large architectural layouts.',
    features: ['99% UV Rejection (UVR)', '95% Infrared Rejection (IRR)', 'Balanced Facade Aesthetics'],
    vltOptions: [
      { vlt: 70, tser: 55, label: 'Clear (70% VLT)' },
      { vlt: 50, tser: 60, label: 'Light (50% VLT)' },
      { vlt: 35, tser: 69, label: 'Medium (35% VLT)' },
      { vlt: 15, tser: 75, label: 'Dark (15% VLT)' }
    ]
  },
  'color-stable-cs': {
    name: 'Color Stable (CS)',
    series: 'heat-rejection',
    seriesLabel: 'Heat Rejection Series',
    type: 'Nano Carbon Ceramic',
    thickness: '2 mil',
    warranty: '5 Years Performance Guarantee',
    desc: 'Color-locked non-fading carbon ceramic film providing excellent heat defense with zero signal interference for indoor smart home systems.',
    features: ['99% UV Rejection (UVR)', '90% Infrared Rejection (IRR)', 'Non-Reflective Natural Color Lock'],
    vltOptions: [
      { vlt: 70, tser: 50, label: 'Clear (70% VLT)' },
      { vlt: 55, tser: 58, label: 'Light (55% VLT)' },
      { vlt: 30, tser: 66, label: 'Medium (30% VLT)' },
      { vlt: 15, tser: 72, label: 'Dark (15% VLT)' },
      { vlt: 5, tser: 78, label: 'Super Dark (5% VLT)' }
    ]
  },
  'cs-pro': {
    name: 'CS PRO',
    series: 'heat-rejection',
    seriesLabel: 'Heat Rejection Series',
    type: 'Nano Carbon Ceramic',
    thickness: '2 mil',
    warranty: '3 Years Performance Guarantee',
    desc: 'Standard carbon ceramic entry-level solar control. Delivers stable color, reduced glare, and solid UV protection.',
    features: ['99% UV Rejection (UVR)', '40% Infrared Rejection (IRR)', 'Dielectric Construction (Signal-Friendly)'],
    vltOptions: [
      { vlt: 70, tser: 27, label: 'Clear (70% VLT)' },
      { vlt: 60, tser: 27, label: 'Light Clear (60% VLT)' },
      { vlt: 40, tser: 40, label: 'Light (40% VLT)' },
      { vlt: 30, tser: 45, label: 'Medium (30% VLT)' },
      { vlt: 20, tser: 48, label: 'Dark (20% VLT)' },
      { vlt: 5, tser: 60, label: 'Super Dark (5% VLT)' }
    ]
  },
  'vanguard': {
    name: 'Vanguard',
    series: 'security',
    seriesLabel: 'Heat Rejection + Security',
    type: 'TPU Silver Sputter - For External Use',
    thickness: '6.5 mil',
    warranty: '5 Years Warranty',
    desc: 'Exterior-grade heavy security film designed to protect roof skylights and external glazing. Restricts entry and holds broken glass under severe impacts.',
    features: ['99% UV Rejection (UVR)', '95% Infrared Rejection (IRR)', '6.5mil Heavy-Duty Shatter Security'],
    vltOptions: [
      { vlt: 70, tser: 56, label: 'Skylight Clear (70% VLT)' }
    ]
  }
};

export default function ProductsBuildingPage({ initialMode = 'residential' }) {
  const [appMode, setAppMode] = useState(initialMode); // 'residential' | 'commercial'
  const [activeFilter, setActiveFilter] = useState('all');

  const handleModeChange = (mode) => {
    setAppMode(mode);
    window.location.hash = `#/products/building/${mode}`;
  };
  const [selectedVlts, setSelectedVlts] = useState({
    'titan-x': 60,
    'diamond': 60,
    'raypro': 70,
    'anti-fade-90': 70,
    'silver-black-uv420': 8,
    'silver-black': 15,
    'titanium-hr': 70,
    'color-stable-cs': 70,
    'cs-pro': 70,
    'vanguard': 70,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [appMode]);

  const handleVltChange = (productKey, vltVal) => {
    setSelectedVlts(prev => ({
      ...prev,
      [productKey]: vltVal
    }));
  };

  const getFilteredProducts = () => {
    return Object.entries(PRODUCTS_DATA).filter(([_, data]) => {
      if (activeFilter === 'all') return true;
      return data.series === activeFilter;
    });
  };

  if (appMode === 'commercial') {
    return (
      <div className="product-detail-page building-page bg-pattern auto-page">
        {/* Breadcrumbs & Hero */}
        <section className="comm-hero bg-pattern">
          <div className="product-section__container">
            <div className="comm-hero__breadcrumbs">
              <a href="#/">Home</a>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-red">Commercial Tint</span>
            </div>
            <div className="max-w-3xl">
              <div className="comm-hero__badge">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>Commercial Solutions</span>
              </div>
              <h1 className="comm-hero__title">
                <span className="red-gradient">Commercial</span> Window Tint
              </h1>
              <p className="comm-hero__lead">
                Industrial-grade solar film solutions for offices, malls, hotels, and commercial buildings. Maximum heat rejection, security enhancement, and energy savings for large-scale applications.
              </p>
            </div>
          </div>
        </section>


        {/* Commercial Advantages */}
        <section className="comm-advantages">
          <div className="product-section__container">
            <div className="comm-advantages__grid">
              <div className="comm-advantages__item">
                <div className="comm-advantages__icon-wrapper comm-advantages__icon-wrapper--energy">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="comm-advantages__title">Energy Savings</h4>
                <p className="comm-advantages__desc">Reduce cooling costs significantly</p>
              </div>
              <div className="comm-advantages__item">
                <div className="comm-advantages__icon-wrapper comm-advantages__icon-wrapper--heat">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                </div>
                <h4 className="comm-advantages__title">Max Heat Block</h4>
                <p className="comm-advantages__desc">Up to &gt;99% IRR at 1400nm</p>
              </div>
              <div className="comm-advantages__item">
                <div className="comm-advantages__icon-wrapper comm-advantages__icon-wrapper--security">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="comm-advantages__title">Security Enhanced</h4>
                <p className="comm-advantages__desc">TPU security film available</p>
              </div>
              <div className="comm-advantages__item">
                <div className="comm-advantages__icon-wrapper comm-advantages__icon-wrapper--quality">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138z" />
                  </svg>
                </div>
                <h4 className="comm-advantages__title">Certified Quality</h4>
                <p className="comm-advantages__desc">SIRIM &amp; SGS certified</p>
              </div>
            </div>
          </div>
        </section>

        {/* Signature Series */}
        <section className="comm-products-section">
          <div className="product-section__container">
            <div className="comm-section-header">
              <div className="comm-section-header__badge comm-section-header__badge--signature">
                Signature Series
              </div>
              <div className="comm-section-header__line comm-section-header__line--signature" />
              <span className="comm-section-header__text">Premium Commercial Grade</span>
            </div>

            <div className="comm-products-grid-2">
              {/* Titan X */}
              <div className="comm-card comm-card--signature">
                <div className="comm-card__img-container">
                  <div className="comm-card__badge-top">FLAGSHIP</div>
                  <img
                    src={`${import.meta.env.BASE_URL}images/commercial-building.png`}
                    alt="Titan X"
                    className="comm-card__img"
                  />
                </div>
                <div className="comm-card__body">
                  <div className="comm-card__header-row">
                    <div>
                      <h3 className="comm-card__title">Titan X</h3>
                      <p className="comm-card__subtitle">Multi Layer Silver Sputter</p>
                      <div className="comm-card__meta-row">
                        <span className="comm-card__tag">3 mil thickness</span>
                        <span className="comm-card__tag comm-card__tag--warranty">10 Yr Warranty</span>
                      </div>
                    </div>
                  </div>

                  <div className="comm-card__specs-grid">
                    <div className="comm-card__spec-block comm-card__spec-block--uvr">
                      <span className="comm-card__spec-val comm-card__spec-val--uvr">100%</span>
                      <span className="comm-card__spec-label comm-card__spec-label--uvr">
                        UVR <span className="comm-card__spec-sub">400nm</span>
                      </span>
                    </div>
                    <div className="comm-card__spec-block comm-card__spec-block--blr">
                      <span className="comm-card__spec-val comm-card__spec-val--blr">99%</span>
                      <span className="comm-card__spec-label comm-card__spec-label--blr">
                        BLR <span className="comm-card__spec-sub">400-420nm</span>
                      </span>
                    </div>
                    <div className="comm-card__spec-block comm-card__spec-block--irr">
                      <span className="comm-card__spec-val comm-card__spec-val--irr">&gt;99%</span>
                      <span className="comm-card__spec-label comm-card__spec-label--irr">
                        IRR <span className="comm-card__spec-sub">1400nm</span>
                      </span>
                    </div>
                  </div>

                  <div className="comm-card__vlt-section">
                    <p className="comm-card__vlt-title">Visible Light Transmission</p>
                    <div className="comm-card__vlt-grid comm-card__vlt-grid--2col">
                      <div className="comm-vlt-box">
                        <span className="comm-vlt-box__val">60%</span>
                        <span className="comm-vlt-box__tser">TSER: 69%</span>
                      </div>
                      <div className="comm-vlt-box">
                        <span className="comm-vlt-box__val">15%</span>
                        <span className="comm-vlt-box__tser">TSER: 84%</span>
                      </div>
                    </div>
                  </div>

                  <div className="comm-card__best-for">
                    <strong>Best for:</strong> High-rise offices, premium commercial spaces, glass facades requiring maximum heat rejection and optical clarity.
                  </div>
                </div>
              </div>

              {/* Diamond */}
              <div className="comm-card comm-card--signature">
                <div className="comm-card__img-container">
                  <div className="comm-card__badge-top">PREMIUM</div>
                  <img
                    src={`${import.meta.env.BASE_URL}images/commercial-building-panel.png`}
                    alt="Diamond"
                    className="comm-card__img"
                  />
                </div>
                <div className="comm-card__body">
                  <div className="comm-card__header-row">
                    <div>
                      <h3 className="comm-card__title">Diamond</h3>
                      <p className="comm-card__subtitle">Multi Layer Titanium Sputter</p>
                      <div className="comm-card__meta-row">
                        <span className="comm-card__tag">3 - 3.5 mil</span>
                        <span className="comm-card__tag comm-card__tag--warranty">10 Yr Warranty</span>
                      </div>
                    </div>
                  </div>

                  <div className="comm-card__specs-grid">
                    <div className="comm-card__spec-block comm-card__spec-block--uvr">
                      <span className="comm-card__spec-val comm-card__spec-val--uvr">100%</span>
                      <span className="comm-card__spec-label comm-card__spec-label--uvr">
                        UVR <span className="comm-card__spec-sub">400nm</span>
                      </span>
                    </div>
                    <div className="comm-card__spec-block comm-card__spec-block--blr">
                      <span className="comm-card__spec-val comm-card__spec-val--blr">99%</span>
                      <span className="comm-card__spec-label comm-card__spec-label--blr">
                        BLR <span className="comm-card__spec-sub">400-420nm</span>
                      </span>
                    </div>
                    <div className="comm-card__spec-block comm-card__spec-block--irr">
                      <span className="comm-card__spec-val comm-card__spec-val--irr">98%</span>
                      <span className="comm-card__spec-label comm-card__spec-label--irr">
                        IRR <span className="comm-card__spec-sub">1400nm</span>
                      </span>
                    </div>
                  </div>

                  <div className="comm-card__vlt-section">
                    <p className="comm-card__vlt-title">Visible Light Transmission</p>
                    <div className="comm-card__vlt-grid comm-card__vlt-grid--2col">
                      <div className="comm-vlt-box">
                        <span className="comm-vlt-box__val">60%</span>
                        <span className="comm-vlt-box__tser">TSER: 65%</span>
                      </div>
                      <div className="comm-vlt-box">
                        <span className="comm-vlt-box__val">30%</span>
                        <span className="comm-vlt-box__tser">TSER: 78%</span>
                      </div>
                    </div>
                  </div>

                  <div className="comm-card__best-for">
                    <strong>Best for:</strong> Multi-story buildings, hotels, condominiums, and commercial complexes requiring balanced heat and light control.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Heat Rejection Series */}
        <section className="comm-products-section">
          <div className="product-section__container">
            <div className="comm-section-header">
              <div className="comm-section-header__badge comm-section-header__badge--heat">
                Heat Rejection Series
              </div>
              <div className="comm-section-header__line comm-section-header__line--heat" />
            </div>

            {/* Titanium HR (Horizontal Card) */}
            <div className="comm-card comm-card--heat comm-card--horizontal">
              <div className="comm-card__img-container">
                <img
                  src={`${import.meta.env.BASE_URL}images/split-media-building.png`}
                  alt="Titanium HR"
                  className="comm-card__img"
                />
              </div>
              <div className="comm-card__body">
                <div className="comm-card__header-row">
                  <div>
                    <h3 className="comm-card__title">Titanium (HR)</h3>
                    <p className="comm-card__subtitle">Nano Titanium Sputter</p>
                    <div className="comm-card__meta-row">
                      <span className="comm-card__tag">2 - 3.5 mil</span>
                      <span className="comm-card__tag comm-card__tag--warranty">7 Yr Warranty</span>
                    </div>
                  </div>
                </div>

                <div className="comm-card__specs-grid comm-card__specs-grid--2col">
                  <div className="comm-card__spec-block comm-card__spec-block--uvr">
                    <span className="comm-card__spec-val comm-card__spec-val--uvr">99%</span>
                    <span className="comm-card__spec-label comm-card__spec-label--uvr">
                      UVR <span className="comm-card__spec-sub">380nm</span>
                    </span>
                  </div>
                  <div className="comm-card__spec-block comm-card__spec-block--irr">
                    <span className="comm-card__spec-val comm-card__spec-val--irr">95%</span>
                    <span className="comm-card__spec-label comm-card__spec-label--irr">
                      IRR <span className="comm-card__spec-sub">1400nm</span>
                    </span>
                  </div>
                </div>

                <div className="comm-card__vlt-section">
                  <p className="comm-card__vlt-title">Visible Light Transmission</p>
                  <div className="comm-card__vlt-grid comm-card__vlt-grid--4col">
                    <div className="comm-vlt-box">
                      <span className="comm-vlt-box__val">70%</span>
                      <span className="comm-vlt-box__tser">TSER: 55%</span>
                    </div>
                    <div className="comm-vlt-box">
                      <span className="comm-vlt-box__val">50%</span>
                      <span className="comm-vlt-box__tser">TSER: 60%</span>
                    </div>
                    <div className="comm-vlt-box">
                      <span className="comm-vlt-box__val">35%</span>
                      <span className="comm-vlt-box__tser">TSER: 69%</span>
                    </div>
                    <div className="comm-vlt-box">
                      <span className="comm-vlt-box__val">15%</span>
                      <span className="comm-vlt-box__tser">TSER: 75%</span>
                    </div>
                  </div>
                </div>

                <div className="comm-card__best-for">
                  <strong>Ideal for:</strong> Commercial buildings requiring high heat rejection with flexible VLT options. Cost-effective solution for large glass areas.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Series */}
        <section className="comm-products-section">
          <div className="product-section__container">
            <div className="comm-section-header">
              <div className="comm-section-header__badge comm-section-header__badge--security">
                Heat Rejection + Security Series
              </div>
              <div className="comm-section-header__line comm-section-header__line--security" />
            </div>

            {/* Vanguard (Horizontal Card) */}
            <div className="comm-card comm-card--security comm-card--horizontal">
              <div className="comm-card__img-container comm-card__img-container--security">
                <img
                  src={`${import.meta.env.BASE_URL}images/sputtered_film_roll.png`}
                  alt="Vanguard"
                  className="comm-card__img"
                />
              </div>
              <div className="comm-card__body">
                <div className="comm-card__header-row">
                  <div>
                    <h3 className="comm-card__title">Vanguard</h3>
                    <p className="comm-card__subtitle">TPU Silver Sputter - For External Use</p>
                    <div className="comm-card__meta-row">
                      <span className="comm-card__tag">6.5 mil thickness</span>
                      <span className="comm-card__tag comm-card__tag--warranty">5 Yr Warranty</span>
                    </div>
                  </div>
                </div>

                <div className="comm-security-badge">
                  <div className="comm-security-badge__title-row">
                    <svg width="20" height="20" className="text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <h4 className="comm-security-badge__title">6.5 mil TPU Security Film - Shatter Resistant</h4>
                  </div>
                  <p className="comm-security-badge__desc">
                    External application film with TPU (Thermoplastic Polyurethane) layer provides enhanced glass security against break-ins, natural disasters, and accidental impacts.
                  </p>
                </div>

                <div className="comm-card__specs-grid comm-card__specs-grid--2col">
                  <div className="comm-card__spec-block comm-card__spec-block--uvr">
                    <span className="comm-card__spec-val comm-card__spec-val--uvr">99%</span>
                    <span className="comm-card__spec-label comm-card__spec-label--uvr">
                      UVR <span className="comm-card__spec-sub">380nm</span>
                    </span>
                  </div>
                  <div className="comm-card__spec-block comm-card__spec-block--irr">
                    <span className="comm-card__spec-val comm-card__spec-val--irr">95%</span>
                    <span className="comm-card__spec-label comm-card__spec-label--irr">
                      IRR <span className="comm-card__spec-sub">1400nm</span>
                    </span>
                  </div>
                </div>
                <div className="comm-card__vlt-section">
                  <p className="comm-card__vlt-title">Visible Light Transmission</p>
                  <div className="comm-card__vlt-grid comm-card__vlt-grid--1col">
                    <div className="comm-vlt-box comm-vlt-box--flex">
                      <span className="comm-vlt-box__text">Clear Glass Without Tint</span>
                      <div style={{ textAlign: 'right' }}>
                        <span className="comm-vlt-box__val">70%</span>
                        <span className="comm-vlt-box__tser">TSER: 56%</span>
                      </div>
                    </div>
                  </div>
                </div>                <div className="comm-card__best-for comm-card__best-for--yellow">
                  <strong>Ideal for:</strong> Rooftop glass, skylights, storefronts, shopping malls, and any commercial glass that needs both heat rejection and shatter-resistant security protection.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="comm-table-section">
          <div className="product-section__container">
            <h2 className="comm-table-section__title">Commercial Products Comparison</h2>
            <div className="comm-table-wrapper">
              <table className="comm-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th style={{ textAlign: 'center' }}>Technology</th>
                    <th style={{ textAlign: 'center' }}>UVR</th>
                    <th style={{ textAlign: 'center' }}>IRR</th>
                    <th style={{ textAlign: 'center' }}>Thickness</th>
                    <th style={{ textAlign: 'center' }}>Warranty</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="comm-table__product-name">Titan X</td>
                    <td style={{ textAlign: 'center' }} className="comm-table__tech">Multi Layer Silver Sputter</td>
                    <td style={{ textAlign: 'center' }} className="comm-table__val--uvr">100%</td>
                    <td style={{ textAlign: 'center' }} className="comm-table__val--irr">&gt;99%</td>
                    <td style={{ textAlign: 'center' }} className="comm-table__tech">3 mil</td>
                    <td style={{ textAlign: 'center' }} className="comm-table__val--warranty">10 Yr</td>
                  </tr>
                  <tr>
                    <td className="comm-table__product-name">Diamond</td>
                    <td style={{ textAlign: 'center' }} className="comm-table__tech">Multi Layer Titanium Sputter</td>
                    <td style={{ textAlign: 'center' }} className="comm-table__val--uvr">100%</td>
                    <td style={{ textAlign: 'center' }} className="comm-table__val--irr">98%</td>
                    <td style={{ textAlign: 'center' }} className="comm-table__tech">3-3.5 mil</td>
                    <td style={{ textAlign: 'center' }} className="comm-table__val--warranty">10 Yr</td>
                  </tr>
                  <tr>
                    <td className="comm-table__product-name">Titanium (HR)</td>
                    <td style={{ textAlign: 'center' }} className="comm-table__tech">Nano Titanium Sputter</td>
                    <td style={{ textAlign: 'center' }} className="comm-table__val--uvr">99%</td>
                    <td style={{ textAlign: 'center' }} className="comm-table__val--irr">95%</td>
                    <td style={{ textAlign: 'center' }} className="comm-table__tech">2-3.5 mil</td>
                    <td style={{ textAlign: 'center' }} className="comm-table__val--warranty">7 Yr</td>
                  </tr>
                  <tr>
                    <td className="comm-table__product-name">
                      Vanguard <span style={{ color: '#ca8a04', fontSize: '0.75rem', marginLeft: '0.25rem', fontWeight: 800 }}>SECURITY</span>
                    </td>
                    <td style={{ textAlign: 'center' }} className="comm-table__tech">TPU Silver Sputter</td>
                    <td style={{ textAlign: 'center' }} className="comm-table__val--uvr">99%</td>
                    <td style={{ textAlign: 'center' }} className="comm-table__val--irr">95%</td>
                    <td style={{ textAlign: 'center' }} className="comm-table__tech">6.5 mil</td>
                    <td style={{ textAlign: 'center' }} className="comm-table__val--warranty">5 Yr</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="comm-cta">
          <div className="comm-cta__container">
            <h2 className="comm-cta__title">Need a Commercial Quote?</h2>
            <p className="comm-cta__desc">
              Contact our commercial team for customized solutions, bulk pricing, and professional installation for your business premises.
            </p>
            <div className="comm-cta__buttons">
              <button
                type="button"
                className="comm-cta__btn comm-cta__btn--secondary"
                onClick={() => handleModeChange('residential')}
              >
                View Residential
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <a
                href="#/products/automotive"
                className="comm-cta__btn comm-cta__btn--primary"
              >
                View Automotive
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Residential view matching commercial high-fidelity style layout
  return (
    <div className="product-detail-page building-page bg-pattern auto-page">
      {/* Breadcrumbs & Hero */}
      <section className="comm-hero bg-pattern">
        <div className="product-section__container">
          <div className="comm-hero__breadcrumbs">
            <a href="#/">Home</a>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-red">Residential Tint</span>
          </div>
          <div className="max-w-3xl">
            <div className="comm-hero__badge">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Residential Solutions</span>
            </div>
            <h1 className="comm-hero__title">
              <span className="red-gradient">Residential</span> Window Tint
            </h1>
            <p className="comm-hero__lead">
              Protect your home and loved ones with IrisPro's advanced solar film technology. From Signature Series premium films to budget-friendly options, we have the perfect solution for every home.
            </p>
          </div>
        </div>
      </section>

      {/* Residential Advantages */}
      <section className="comm-advantages">
        <div className="product-section__container">
          <div className="comm-advantages__grid">
            <div className="comm-advantages__item">
              <div className="comm-advantages__icon-wrapper comm-advantages__icon-wrapper--heat">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-11.314l.707.707m11.314 11.314l.707.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
                </svg>
              </div>
              <h4 className="comm-advantages__title">Upholstery Defense</h4>
              <p className="comm-advantages__desc">Blocks 100% UV to prevent fading</p>
            </div>
            <div className="comm-advantages__item">
              <div className="comm-advantages__icon-wrapper comm-advantages__icon-wrapper--energy">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="comm-advantages__title">Energy Savings</h4>
              <p className="comm-advantages__desc">Reduces home aircon power usage</p>
            </div>
            <div className="comm-advantages__item">
              <div className="comm-advantages__icon-wrapper comm-advantages__icon-wrapper--security">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="comm-advantages__title">Shatter Protection</h4>
              <p className="comm-advantages__desc">Holds glass together on impact</p>
            </div>
            <div className="comm-advantages__item">
              <div className="comm-advantages__icon-wrapper comm-advantages__icon-wrapper--quality">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138z" />
                </svg>
              </div>
              <h4 className="comm-advantages__title">Trusted Warranty</h4>
              <p className="comm-advantages__desc">Up to 10 years guarantee</p>
            </div>
          </div>
        </div>
      </section>
      {/* ── Advantages Strip ── */}
      <section className="res-advantages">
        <div className="res-container">
          <div className="res-advantages__grid">
            <div className="res-adv-item">
              <div className="res-adv-icon res-adv-icon--uv">
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-11.314l.707.707m11.314 11.314l.707.707M12 7a5 5 0 100 10 5 5 0 000-10z" /></svg>
              </div>
              <h4 className="res-adv-title">Upholstery Defense</h4>
              <p className="res-adv-desc">Blocks 100% UV to prevent fading</p>
            </div>
            <div className="res-adv-item">
              <div className="res-adv-icon res-adv-icon--energy">
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h4 className="res-adv-title">Energy Savings</h4>
              <p className="res-adv-desc">Reduces home aircon power usage</p>
            </div>
            <div className="res-adv-item">
              <div className="res-adv-icon res-adv-icon--shield">
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h4 className="res-adv-title">Shatter Protection</h4>
              <p className="res-adv-desc">Holds glass together on impact</p>
            </div>
            <div className="res-adv-item">
              <div className="res-adv-icon res-adv-icon--warranty">
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138z" /></svg>
              </div>
              <h4 className="res-adv-title">Trusted Warranty</h4>
              <p className="res-adv-desc">Up to 10 years guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Signature Series ── */}
      <section className="res-section">
        <div className="res-container">
          <div className="res-series-header">
            <div className="res-series-badge res-series-badge--signature">Signature Series</div>
            <div className="res-series-line res-series-line--signature" />
            <span className="res-series-label">Premium Residential Grade</span>
          </div>

          <div className="res-grid-2">
            {/* Titan X */}
            <div className="res-card res-card--signature">
              <div className="res-card__img-wrap">
                <span className="res-card__top-badge res-card__top-badge--flagship">FLAGSHIP</span>
                <img src={`${import.meta.env.BASE_URL}images/commercial-building.png`} alt="Titan X" className="res-card__img" />
              </div>
              <div className="res-card__body">
                <div className="res-card__header">
                  <div>
                    <h3 className="res-card__title">Titan X</h3>
                    <p className="res-card__subtitle">Multi Layer Silver Sputter</p>
                    <div className="res-card__tags">
                      <span className="res-tag">3 mil thickness</span>
                      <span className="res-tag res-tag--warranty">10 Yr Warranty</span>
                    </div>
                  </div>
                  <span className="res-card__series-label">Signature</span>
                </div>
                <div className="res-specs-grid res-specs-grid--3">
                  <div className="res-spec-badge res-spec-badge--uvr"><span className="res-spec-val">100%</span><span className="res-spec-key">UVR <span className="res-spec-nm">400nm</span></span></div>
                  <div className="res-spec-badge res-spec-badge--blr"><span className="res-spec-val">99%</span><span className="res-spec-key">BLR <span className="res-spec-nm">400-420nm</span></span></div>
                  <div className="res-spec-badge res-spec-badge--irr"><span className="res-spec-val">&gt;99%</span><span className="res-spec-key">IRR <span className="res-spec-nm">1400nm</span></span></div>
                </div>
                <div className="res-vlt-section">
                  <p className="res-vlt-label">Visible Light Transmission</p>
                  <div className="res-vlt-grid res-vlt-grid--2">
                    <div className="res-vlt-bar"><span className="res-vlt-val">60%</span><span className="res-vlt-tser">TSER: 69%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">15%</span><span className="res-vlt-tser">TSER: 84%</span></div>
                  </div>
                </div>
                <div className="res-best-for"><strong>Best for:</strong> Living rooms and large glass windows requiring top-tier heat blocking and maximum clarity.</div>
              </div>
            </div>

            {/* Diamond */}
            <div className="res-card res-card--signature">
              <div className="res-card__img-wrap">
                <span className="res-card__top-badge res-card__top-badge--premium">PREMIUM</span>
                <img src={`${import.meta.env.BASE_URL}images/commercial-building-panel.png`} alt="Diamond" className="res-card__img" />
              </div>
              <div className="res-card__body">
                <div className="res-card__header">
                  <div>
                    <h3 className="res-card__title">Diamond</h3>
                    <p className="res-card__subtitle">Multi Layer Titanium Sputter</p>
                    <div className="res-card__tags">
                      <span className="res-tag">3 - 3.5 mil</span>
                      <span className="res-tag res-tag--warranty">10 Yr Warranty</span>
                    </div>
                  </div>
                  <span className="res-card__series-label">Signature</span>
                </div>
                <div className="res-specs-grid res-specs-grid--3">
                  <div className="res-spec-badge res-spec-badge--uvr"><span className="res-spec-val">100%</span><span className="res-spec-key">UVR <span className="res-spec-nm">400nm</span></span></div>
                  <div className="res-spec-badge res-spec-badge--blr"><span className="res-spec-val">99%</span><span className="res-spec-key">BLR <span className="res-spec-nm">400-420nm</span></span></div>
                  <div className="res-spec-badge res-spec-badge--irr"><span className="res-spec-val">98%</span><span className="res-spec-key">IRR <span className="res-spec-nm">1400nm</span></span></div>
                </div>
                <div className="res-vlt-section">
                  <p className="res-vlt-label">Visible Light Transmission</p>
                  <div className="res-vlt-grid res-vlt-grid--2">
                    <div className="res-vlt-bar"><span className="res-vlt-val">60%</span><span className="res-vlt-tser">TSER: 65%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">30%</span><span className="res-vlt-tser">TSER: 78%</span></div>
                  </div>
                </div>
                <div className="res-best-for"><strong>Best for:</strong> Residences subject to strong morning or afternoon sun, maintaining excellent interior cooling and durability.</div>
              </div>
            </div>

            {/* RayPro */}
            <div className="res-card res-card--signature">
              <div className="res-card__img-wrap">
                <img src={`${import.meta.env.BASE_URL}images/split-media-building.png`} alt="RayPro" className="res-card__img" />
              </div>
              <div className="res-card__body">
                <div className="res-card__header">
                  <div>
                    <h3 className="res-card__title">RayPro</h3>
                    <p className="res-card__subtitle">Nano Titanium Sputter</p>
                    <div className="res-card__tags">
                      <span className="res-tag">2 - 3.5 mil</span>
                      <span className="res-tag res-tag--warranty">10 Yr Warranty</span>
                    </div>
                  </div>
                  <span className="res-card__series-label">Signature</span>
                </div>
                <div className="res-specs-grid res-specs-grid--3">
                  <div className="res-spec-badge res-spec-badge--uvr"><span className="res-spec-val">100%</span><span className="res-spec-key">UVR <span className="res-spec-nm">400nm</span></span></div>
                  <div className="res-spec-badge res-spec-badge--blr"><span className="res-spec-val">99%</span><span className="res-spec-key">BLR <span className="res-spec-nm">400-420nm</span></span></div>
                  <div className="res-spec-badge res-spec-badge--irr"><span className="res-spec-val">95%</span><span className="res-spec-key">IRR <span className="res-spec-nm">1400nm</span></span></div>
                </div>
                <div className="res-vlt-section">
                  <p className="res-vlt-label">Visible Light Transmission</p>
                  <div className="res-vlt-grid res-vlt-grid--4">
                    <div className="res-vlt-bar"><span className="res-vlt-val">70%</span><span className="res-vlt-tser">TSER: 57%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">50%</span><span className="res-vlt-tser">TSER: 63%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">30%</span><span className="res-vlt-tser">TSER: 72%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">15%</span><span className="res-vlt-tser">TSER: 78%</span></div>
                  </div>
                </div>
                <div className="res-best-for"><strong>Best for:</strong> Versatile light transmission requirements. Provides clear views with great heat rejection.</div>
              </div>
            </div>

            {/* Anti Fade 90 */}
            <div className="res-card res-card--signature">
              <div className="res-card__img-wrap">
                <img src={`${import.meta.env.BASE_URL}images/sputtered_film_roll.png`} alt="Anti Fade 90" className="res-card__img" />
              </div>
              <div className="res-card__body">
                <div className="res-card__header">
                  <div>
                    <h3 className="res-card__title">Anti Fade 90</h3>
                    <p className="res-card__subtitle">Nano Carbon Ceramic</p>
                    <div className="res-card__tags">
                      <span className="res-tag">2 mil thickness</span>
                      <span className="res-tag res-tag--warranty">7 Yr Warranty</span>
                    </div>
                  </div>
                  <span className="res-card__series-label">Signature</span>
                </div>
                <div className="res-specs-grid res-specs-grid--3">
                  <div className="res-spec-badge res-spec-badge--uvr"><span className="res-spec-val">100%</span><span className="res-spec-key">UVR <span className="res-spec-nm">400nm</span></span></div>
                  <div className="res-spec-badge res-spec-badge--blr"><span className="res-spec-val">99%</span><span className="res-spec-key">BLR <span className="res-spec-nm">400-420nm</span></span></div>
                  <div className="res-spec-badge res-spec-badge--irr"><span className="res-spec-val">90%</span><span className="res-spec-key">IRR <span className="res-spec-nm">1400nm</span></span></div>
                </div>
                <div className="res-vlt-section">
                  <p className="res-vlt-label">Visible Light Transmission</p>
                  <div className="res-vlt-grid res-vlt-grid--4">
                    <div className="res-vlt-bar"><span className="res-vlt-val">70%</span><span className="res-vlt-tser">TSER: 58%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">55%</span><span className="res-vlt-tser">TSER: 60%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">30%</span><span className="res-vlt-tser">TSER: 71%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">15%</span><span className="res-vlt-tser">TSER: 76%</span></div>
                  </div>
                </div>
                <div className="res-best-for"><strong>Best for:</strong> Protecting expensive wooden floors, leather sofas, and wall paintings from heat and sunlight damage.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Privacy + Heat Rejection Series ── */}
      <section className="res-section res-section--alt">
        <div className="res-container">
          <div className="res-series-header">
            <div className="res-series-badge">Privacy + Heat Rejection Series</div>
            <div className="res-series-line" />
            <span className="res-series-label">One-Way Privacy &amp; Reflection</span>
          </div>
          <div className="res-grid-2">
            {/* UV+420 Silver Black */}
            <div className="res-card res-card--privacy">
              <div className="res-card__img-wrap">
                <span className="res-card__top-badge res-card__top-badge--signature">SIGNATURE</span>
                <img src={`${import.meta.env.BASE_URL}images/residential-glass-panel.png`} alt="UV+420 Silver Black" className="res-card__img" />
              </div>
              <div className="res-card__body">
                <div className="res-card__header">
                  <div>
                    <h3 className="res-card__title">UV+420 Silver Black</h3>
                    <p className="res-card__subtitle">Aluminium Metalized</p>
                    <div className="res-card__tags">
                      <span className="res-tag">3 mil thickness</span>
                      <span className="res-tag res-tag--warranty">5 Yr Warranty</span>
                    </div>
                  </div>
                </div>
                <div className="res-specs-grid res-specs-grid--3">
                  <div className="res-spec-badge res-spec-badge--uvr"><span className="res-spec-val">100%</span><span className="res-spec-key">UVR <span className="res-spec-nm">400nm</span></span></div>
                  <div className="res-spec-badge res-spec-badge--blr"><span className="res-spec-val">99%</span><span className="res-spec-key">BLR <span className="res-spec-nm">400-420nm</span></span></div>
                  <div className="res-spec-badge res-spec-badge--irr"><span className="res-spec-val">95%</span><span className="res-spec-key">IRR <span className="res-spec-nm">1400nm</span></span></div>
                </div>
                <div className="res-vlt-section">
                  <p className="res-vlt-label">Visible Light Transmission</p>
                  <div className="res-vlt-grid res-vlt-grid--1">
                    <div className="res-vlt-bar res-vlt-bar--flex">
                      <span className="res-vlt-text">Maximum Daytime Privacy</span>
                      <div style={{ textAlign: 'right' }}><span className="res-vlt-val">8%</span><span className="res-vlt-tser">TSER: 84%</span></div>
                    </div>
                  </div>
                </div>
                <div className="res-best-for res-best-for--privacy"><strong>Best for:</strong> Ground floor windows, bedrooms, or bathrooms requiring absolute privacy during daylight hours.</div>
              </div>
            </div>

            {/* Silver Black */}
            <div className="res-card res-card--privacy">
              <div className="res-card__img-wrap">
                <img src={`${import.meta.env.BASE_URL}images/residential-glass.png`} alt="Silver Black" className="res-card__img" />
              </div>
              <div className="res-card__body">
                <div className="res-card__header">
                  <div>
                    <h3 className="res-card__title">Silver Black</h3>
                    <p className="res-card__subtitle">Aluminium Metalized</p>
                    <div className="res-card__tags">
                      <span className="res-tag">2 mil thickness</span>
                      <span className="res-tag res-tag--warranty">5 Yr Warranty</span>
                    </div>
                  </div>
                </div>
                <div className="res-specs-grid res-specs-grid--2">
                  <div className="res-spec-badge res-spec-badge--uvr"><span className="res-spec-val">99%</span><span className="res-spec-key">UVR <span className="res-spec-nm">380nm</span></span></div>
                  <div className="res-spec-badge res-spec-badge--irr"><span className="res-spec-val">90%</span><span className="res-spec-key">IRR <span className="res-spec-nm">1400nm</span></span></div>
                </div>
                <div className="res-vlt-section">
                  <p className="res-vlt-label">Visible Light Transmission</p>
                  <div className="res-vlt-grid res-vlt-grid--1">
                    <div className="res-vlt-bar res-vlt-bar--flex">
                      <span className="res-vlt-text">Privacy &amp; Glare Control</span>
                      <div style={{ textAlign: 'right' }}><span className="res-vlt-val">15%</span><span className="res-vlt-tser">TSER: 76%</span></div>
                    </div>
                  </div>
                </div>
                <div className="res-best-for res-best-for--privacy"><strong>Best for:</strong> Standard home windows facing street level, giving daytime privacy with high heat reflectivity.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Heat Rejection Series ── */}
      <section className="res-section">
        <div className="res-container">
          <div className="res-series-header res-series-header--heat">
            <div className="res-series-badge res-series-badge--heat">Heat Rejection Series</div>
            <div className="res-series-line res-series-line--heat" />
            <span className="res-series-label">Balanced Solar Defense</span>
          </div>

          {/* Titanium HR — horizontal */}
          <div className="res-card res-card--horizontal res-card--heat">
            <div className="res-card__img-wrap res-card__img-wrap--horizontal">
              <img src={`${import.meta.env.BASE_URL}images/residential-glass-2.png`} alt="Titanium HR" className="res-card__img" />
            </div>
            <div className="res-card__body">
              <div className="res-card__header">
                <div>
                  <h3 className="res-card__title">Titanium (HR)</h3>
                  <p className="res-card__subtitle">Nano Titanium Sputter</p>
                  <div className="res-card__tags">
                    <span className="res-tag">2 - 3.5 mil</span>
                    <span className="res-tag res-tag--warranty">7 Yr Warranty</span>
                  </div>
                </div>
                <span className="res-card__series-label res-card__series-label--heat">Heat Rejection</span>
              </div>
              <div className="res-specs-grid res-specs-grid--2">
                <div className="res-spec-badge res-spec-badge--uvr"><span className="res-spec-val">99%</span><span className="res-spec-key">UVR <span className="res-spec-nm">380nm</span></span></div>
                <div className="res-spec-badge res-spec-badge--irr"><span className="res-spec-val">95%</span><span className="res-spec-key">IRR <span className="res-spec-nm">1400nm</span></span></div>
              </div>
              <div className="res-vlt-section">
                <p className="res-vlt-label">Visible Light Transmission</p>
                <div className="res-vlt-grid res-vlt-grid--4">
                  <div className="res-vlt-bar"><span className="res-vlt-val">70%</span><span className="res-vlt-tser">TSER: 55%</span></div>
                  <div className="res-vlt-bar"><span className="res-vlt-val">50%</span><span className="res-vlt-tser">TSER: 60%</span></div>
                  <div className="res-vlt-bar"><span className="res-vlt-val">35%</span><span className="res-vlt-tser">TSER: 69%</span></div>
                  <div className="res-vlt-bar"><span className="res-vlt-val">15%</span><span className="res-vlt-tser">TSER: 75%</span></div>
                </div>
              </div>
              <div className="res-best-for"><strong>Best for:</strong> Large glass partitions, sunrooms, and balcony doors requiring balanced light and heat blocking.</div>
            </div>
          </div>

          {/* CS & CS PRO grid */}
          <div className="res-grid-2" style={{ marginTop: '2rem' }}>
            {/* Color Stable CS */}
            <div className="res-card res-card--heat">
              <div className="res-card__img-wrap">
                <img src={`${import.meta.env.BASE_URL}images/sputtered_film_roll.png`} alt="Color Stable CS" className="res-card__img" />
              </div>
              <div className="res-card__body">
                <div className="res-card__header">
                  <div>
                    <h3 className="res-card__title">Color Stable (CS)</h3>
                    <p className="res-card__subtitle">Nano Carbon Ceramic</p>
                    <div className="res-card__tags">
                      <span className="res-tag">2 mil thickness</span>
                      <span className="res-tag res-tag--warranty">5 Yr Warranty</span>
                    </div>
                  </div>
                  <span className="res-card__series-label res-card__series-label--heat">Heat Rejection</span>
                </div>
                <div className="res-specs-grid res-specs-grid--2">
                  <div className="res-spec-badge res-spec-badge--uvr"><span className="res-spec-val">99%</span><span className="res-spec-key">UVR <span className="res-spec-nm">380nm</span></span></div>
                  <div className="res-spec-badge res-spec-badge--irr"><span className="res-spec-val">90%</span><span className="res-spec-key">IRR <span className="res-spec-nm">1400nm</span></span></div>
                </div>
                <div className="res-vlt-section">
                  <p className="res-vlt-label">Visible Light Transmission</p>
                  <div className="res-vlt-grid res-vlt-grid--5">
                    <div className="res-vlt-bar"><span className="res-vlt-val">70%</span><span className="res-vlt-tser">50%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">55%</span><span className="res-vlt-tser">58%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">30%</span><span className="res-vlt-tser">66%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">15%</span><span className="res-vlt-tser">72%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">5%</span><span className="res-vlt-tser">78%</span></div>
                  </div>
                </div>
                <div className="res-best-for"><strong>Best for:</strong> Smart homes needing zero signal interference, maintaining clean natural aesthetics.</div>
              </div>
            </div>

            {/* CS PRO */}
            <div className="res-card res-card--heat">
              <div className="res-card__img-wrap">
                <img src={`${import.meta.env.BASE_URL}images/tinted_film_roll.png`} alt="CS PRO" className="res-card__img" />
              </div>
              <div className="res-card__body">
                <div className="res-card__header">
                  <div>
                    <h3 className="res-card__title">CS PRO</h3>
                    <p className="res-card__subtitle">Nano Carbon Ceramic</p>
                    <div className="res-card__tags">
                      <span className="res-tag">2 mil thickness</span>
                      <span className="res-tag res-tag--warranty">3 Yr Warranty</span>
                    </div>
                  </div>
                  <span className="res-card__series-label res-card__series-label--value">Value</span>
                </div>
                <div className="res-specs-grid res-specs-grid--2">
                  <div className="res-spec-badge res-spec-badge--uvr"><span className="res-spec-val">99%</span><span className="res-spec-key">UVR <span className="res-spec-nm">380nm</span></span></div>
                  <div className="res-spec-badge res-spec-badge--irr"><span className="res-spec-val">40%</span><span className="res-spec-key">IRR <span className="res-spec-nm">1400nm</span></span></div>
                </div>
                <div className="res-vlt-section">
                  <p className="res-vlt-label">Visible Light Transmission</p>
                  <div className="res-vlt-grid res-vlt-grid--6">
                    <div className="res-vlt-bar"><span className="res-vlt-val">70%</span><span className="res-vlt-tser">27%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">60%</span><span className="res-vlt-tser">27%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">40%</span><span className="res-vlt-tser">40%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">30%</span><span className="res-vlt-tser">45%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">20%</span><span className="res-vlt-tser">48%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">5%</span><span className="res-vlt-tser">60%</span></div>
                  </div>
                </div>
                <div className="res-best-for"><strong>Best for:</strong> Economical solar protection, providing basic heat deflection and excellent UV block.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="res-table-section">
        <div className="res-container">
          <h2 className="res-table-title">Residential Products Comparison</h2>
          <div className="comm-table-wrapper">
            <table className="comm-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th style={{ textAlign: 'center' }}>Technology</th>
                  <th style={{ textAlign: 'center' }}>UVR</th>
                  <th style={{ textAlign: 'center' }}>IRR</th>
                  <th style={{ textAlign: 'center' }}>Thickness</th>
                  <th style={{ textAlign: 'center' }}>Warranty</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="comm-table__product-name">Titan X</td><td style={{ textAlign: 'center' }} className="comm-table__tech">Multi Layer Silver Sputter</td><td style={{ textAlign: 'center' }} className="comm-table__val--uvr">100%</td><td style={{ textAlign: 'center' }} className="comm-table__val--irr">&gt;99%</td><td style={{ textAlign: 'center' }} className="comm-table__tech">3 mil</td><td style={{ textAlign: 'center' }} className="comm-table__val--warranty">10 Yr</td></tr>
                <tr><td className="comm-table__product-name">Diamond</td><td style={{ textAlign: 'center' }} className="comm-table__tech">Multi Layer Titanium Sputter</td><td style={{ textAlign: 'center' }} className="comm-table__val--uvr">100%</td><td style={{ textAlign: 'center' }} className="comm-table__val--irr">98%</td><td style={{ textAlign: 'center' }} className="comm-table__tech">3-3.5 mil</td><td style={{ textAlign: 'center' }} className="comm-table__val--warranty">10 Yr</td></tr>
                <tr><td className="comm-table__product-name">RayPro</td><td style={{ textAlign: 'center' }} className="comm-table__tech">Nano Titanium Sputter</td><td style={{ textAlign: 'center' }} className="comm-table__val--uvr">100%</td><td style={{ textAlign: 'center' }} className="comm-table__val--irr">95%</td><td style={{ textAlign: 'center' }} className="comm-table__tech">2-3.5 mil</td><td style={{ textAlign: 'center' }} className="comm-table__val--warranty">10 Yr</td></tr>
                <tr><td className="comm-table__product-name">Anti Fade 90</td><td style={{ textAlign: 'center' }} className="comm-table__tech">Nano Carbon Ceramic</td><td style={{ textAlign: 'center' }} className="comm-table__val--uvr">100%</td><td style={{ textAlign: 'center' }} className="comm-table__val--irr">90%</td><td style={{ textAlign: 'center' }} className="comm-table__tech">2 mil</td><td style={{ textAlign: 'center' }} className="comm-table__val--warranty">7 Yr</td></tr>
                <tr><td className="comm-table__product-name">UV+420 Silver Black</td><td style={{ textAlign: 'center' }} className="comm-table__tech">Aluminium Metalized</td><td style={{ textAlign: 'center' }} className="comm-table__val--uvr">100%</td><td style={{ textAlign: 'center' }} className="comm-table__val--irr">95%</td><td style={{ textAlign: 'center' }} className="comm-table__tech">3 mil</td><td style={{ textAlign: 'center' }} className="comm-table__val--warranty">5 Yr</td></tr>
                <tr><td className="comm-table__product-name">Silver Black</td><td style={{ textAlign: 'center' }} className="comm-table__tech">Aluminium Metalized</td><td style={{ textAlign: 'center' }} className="comm-table__val--uvr">99%</td><td style={{ textAlign: 'center' }} className="comm-table__val--irr">90%</td><td style={{ textAlign: 'center' }} className="comm-table__tech">2 mil</td><td style={{ textAlign: 'center' }} className="comm-table__val--warranty">5 Yr</td></tr>
                <tr><td className="comm-table__product-name">Titanium (HR)</td><td style={{ textAlign: 'center' }} className="comm-table__tech">Nano Titanium Sputter</td><td style={{ textAlign: 'center' }} className="comm-table__val--uvr">99%</td><td style={{ textAlign: 'center' }} className="comm-table__val--irr">95%</td><td style={{ textAlign: 'center' }} className="comm-table__tech">2-3.5 mil</td><td style={{ textAlign: 'center' }} className="comm-table__val--warranty">7 Yr</td></tr>
                <tr><td className="comm-table__product-name">Color Stable (CS)</td><td style={{ textAlign: 'center' }} className="comm-table__tech">Nano Carbon Ceramic</td><td style={{ textAlign: 'center' }} className="comm-table__val--uvr">99%</td><td style={{ textAlign: 'center' }} className="comm-table__val--irr">90%</td><td style={{ textAlign: 'center' }} className="comm-table__tech">2 mil</td><td style={{ textAlign: 'center' }} className="comm-table__val--warranty">5 Yr</td></tr>
                <tr><td className="comm-table__product-name">CS PRO</td><td style={{ textAlign: 'center' }} className="comm-table__tech">Nano Carbon Ceramic</td><td style={{ textAlign: 'center' }} className="comm-table__val--uvr">99%</td><td style={{ textAlign: 'center' }} className="comm-table__val--irr">40%</td><td style={{ textAlign: 'center' }} className="comm-table__tech">2 mil</td><td style={{ textAlign: 'center' }} className="comm-table__val--warranty">3 Yr</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="res-cta">
        <div className="res-container res-cta__inner">
          <h2 className="res-cta__title">Ready to Protect Your Home?</h2>
          <p className="res-cta__desc">
            Get a free consultation and quote for your residential window tinting needs. Our experts will help you choose the perfect film for your home.
          </p>
          <div className="res-cta__buttons">
            <button type="button" className="res-cta__btn res-cta__btn--secondary" onClick={() => handleModeChange('commercial')}>
              View Commercial
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
            <a href="#/products/automotive" className="res-cta__btn res-cta__btn--primary">
              View Automotive
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
