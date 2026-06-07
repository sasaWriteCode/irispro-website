import { useEffect } from 'react';

export default function ProductsAutomotivePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product-detail-page building-page bg-pattern">
      {/* Breadcrumbs & Hero */}
      <section className="comm-hero bg-pattern">
        <div className="product-section__container">
          <div className="comm-hero__breadcrumbs">
            <a href="#/">Home</a>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
            <span className="text-red">Automotive Tint</span>
          </div>
          <div className="max-w-3xl">
            <div className="comm-hero__badge">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              <span>Automotive Solutions</span>
            </div>
            <h1 className="comm-hero__title">
              <span className="red-gradient">Automotive</span> Window Tint
            </h1>
            <p className="comm-hero__lead">
              From budget-friendly to ultra-premium, protect your vehicle with IrisPro's advanced solar film technology. Available for Saloon, SUV, and MPV with 0% installment up to 12 months.
            </p>

            {/* Installment Badge overlay inside dark hero */}
            <div className="comm-hero__installment">
              <span className="comm-hero__installment-title">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                </svg>
                0% Installment Available
              </span>
              <span className="comm-hero__installment-desc">
                Up to 12 months | VISA & MasterCard
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Price Overview Bar */}
      <section className="auto-price-quickview">
        <div className="auto-price-quickview__container">
          <span className="auto-price-quickview__label">Starting From:</span>
          <div className="auto-price-quickview__item">
            <span className="auto-price-quickview__type">Saloon</span>
            <span className="auto-price-quickview__val">RM800</span>
          </div>
          <div className="auto-price-quickview__divider" />
          <div className="auto-price-quickview__item">
            <span className="auto-price-quickview__type">SUV</span>
            <span className="auto-price-quickview__val">RM900</span>
          </div>
          <div className="auto-price-quickview__divider" />
          <div className="auto-price-quickview__item">
            <span className="auto-price-quickview__type">MPV</span>
            <span className="auto-price-quickview__val">RM1,000</span>
          </div>
        </div>
      </section>

      {/* Entry Level Series */}
      <section className="comm-products-section">
        <div className="product-section__container">
          <div className="comm-section-header">
            <div className="comm-section-header__badge comm-section-header__badge--heat" style={{ color: '#10b981', backgroundColor: 'rgba(16,185,129,0.08)', borderColor: 'rgba(16,185,129,0.2)' }}>
              Entry Level
            </div>
            <div className="comm-section-header__line" style={{ background: 'linear-gradient(90deg, rgba(16,185,129,0.2) 0%, transparent 100%)' }} />
            <span className="comm-section-header__text">Budget-Friendly Options</span>
          </div>

          <div className="comm-products-grid-2" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {/* CS PRO */}
            <div className="comm-card">
              <div className="comm-card__img-container">
                <img
                  src={`${import.meta.env.BASE_URL}images/automotive-tint.png`}
                  alt="CS PRO"
                  className="comm-card__img"
                />
              </div>
              <div className="comm-card__body">
                <div className="comm-card__header-row">
                  <div>
                    <h3 className="comm-card__title">CS PRO</h3>
                    <p className="comm-card__subtitle">Nano Carbon Ceramic</p>
                    <div className="comm-card__meta-row">
                      <span className="comm-card__tag">2 mil thickness</span>
                      <span className="comm-card__tag comm-card__tag--warranty">3 Yr Warranty</span>
                    </div>
                  </div>
                </div>

                <div className="comm-card__specs-grid comm-card__specs-grid--2col">
                  <div className="comm-card__spec-block comm-card__spec-block--uvr">
                    <span className="comm-card__spec-val comm-card__spec-val--uvr">99%</span>
                    <span className="comm-card__spec-label comm-card__spec-label--uvr">UVR</span>
                  </div>
                  <div className="comm-card__spec-block comm-card__spec-block--irr">
                    <span className="comm-card__spec-val comm-card__spec-val--irr">40%</span>
                    <span className="comm-card__spec-label comm-card__spec-label--irr">IRR</span>
                  </div>
                </div>

                <div className="comm-card__vlt-section">
                  <p className="comm-card__vlt-title">Visible Light Transmission</p>
                  <div className="comm-card__vlt-grid" style={{ gridTemplateColumns: 'repeat(6, 1fr)', gap: '0.25rem' }}>
                    <div className="comm-vlt-box comm-vlt-box--white-red" style={{ padding: '0.6rem 0.1rem' }}>
                      <span className="comm-vlt-box__val" style={{ fontSize: '1rem' }}>70%</span>
                      <span className="comm-vlt-box__tser" style={{ fontSize: '0.6rem' }}>27%</span>
                    </div>
                    <div className="comm-vlt-box comm-vlt-box--white-red" style={{ padding: '0.6rem 0.1rem' }}>
                      <span className="comm-vlt-box__val" style={{ fontSize: '1rem' }}>60%</span>
                      <span className="comm-vlt-box__tser" style={{ fontSize: '0.6rem' }}>27%</span>
                    </div>
                    <div className="comm-vlt-box comm-vlt-box--white-red" style={{ padding: '0.6rem 0.1rem' }}>
                      <span className="comm-vlt-box__val" style={{ fontSize: '1rem' }}>40%</span>
                      <span className="comm-vlt-box__tser" style={{ fontSize: '0.6rem' }}>40%</span>
                    </div>
                    <div className="comm-vlt-box comm-vlt-box--white-red" style={{ padding: '0.6rem 0.1rem' }}>
                      <span className="comm-vlt-box__val" style={{ fontSize: '1rem' }}>30%</span>
                      <span className="comm-vlt-box__tser" style={{ fontSize: '0.6rem' }}>45%</span>
                    </div>
                    <div className="comm-vlt-box comm-vlt-box--white-red" style={{ padding: '0.6rem 0.1rem' }}>
                      <span className="comm-vlt-box__val" style={{ fontSize: '1rem' }}>20%</span>
                      <span className="comm-vlt-box__tser" style={{ fontSize: '0.6rem' }}>48%</span>
                    </div>
                    <div className="comm-vlt-box comm-vlt-box--white-red" style={{ padding: '0.6rem 0.1rem' }}>
                      <span className="comm-vlt-box__val" style={{ fontSize: '1rem' }}>5%</span>
                      <span className="comm-vlt-box__tser" style={{ fontSize: '0.6rem' }}>60%</span>
                    </div>
                  </div>
                </div>

                <div className="comm-card__price-tag">
                  <div className="comm-card__price-title">Starting From</div>
                  <div className="comm-card__price-grid">
                    <div className="comm-card__price-col">
                      <span className="comm-card__price-label">Saloon</span>
                      <span className="comm-card__price-val">RM800</span>
                    </div>
                    <div className="comm-card__price-col">
                      <span className="comm-card__price-label">SUV</span>
                      <span className="comm-card__price-val">RM900</span>
                    </div>
                    <div className="comm-card__price-col">
                      <span className="comm-card__price-label">MPV</span>
                      <span className="comm-card__price-val">RM1k</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Color Stable 80 */}
            <div className="comm-card">
              <div className="comm-card__img-container">
                <img
                  src={`${import.meta.env.BASE_URL}images/hot-car-exterior.png`}
                  alt="Color Stable 80"
                  className="comm-card__img"
                />
              </div>
              <div className="comm-card__body">
                <div className="comm-card__header-row">
                  <div>
                    <h3 className="comm-card__title">Color Stable 80</h3>
                    <p className="comm-card__subtitle">Nano Carbon Ceramic</p>
                    <div className="comm-card__meta-row">
                      <span className="comm-card__tag">2 mil thickness</span>
                      <span className="comm-card__tag comm-card__tag--warranty">5 Yr Warranty</span>
                    </div>
                  </div>
                </div>

                <div className="comm-card__specs-grid comm-card__specs-grid--2col">
                  <div className="comm-card__spec-block comm-card__spec-block--uvr">
                    <span className="comm-card__spec-val comm-card__spec-val--uvr">99%</span>
                    <span className="comm-card__spec-label comm-card__spec-label--uvr">UVR</span>
                  </div>
                  <div className="comm-card__spec-block comm-card__spec-block--irr">
                    <span className="comm-card__spec-val comm-card__spec-val--irr">80%</span>
                    <span className="comm-card__spec-label comm-card__spec-label--irr">IRR</span>
                  </div>
                </div>

                <div className="comm-card__vlt-section">
                  <p className="comm-card__vlt-title">Visible Light Transmission</p>
                  <div className="comm-card__vlt-grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.4rem' }}>
                    <div className="comm-vlt-box comm-vlt-box--white-red" style={{ padding: '0.8rem 0.2rem' }}>
                      <span className="comm-vlt-box__val" style={{ fontSize: '1.2rem' }}>70%</span>
                      <span className="comm-vlt-box__tser" style={{ fontSize: '0.65rem' }}>50%</span>
                    </div>
                    <div className="comm-vlt-box comm-vlt-box--white-red" style={{ padding: '0.8rem 0.2rem' }}>
                      <span className="comm-vlt-box__val" style={{ fontSize: '1.2rem' }}>55%</span>
                      <span className="comm-vlt-box__tser" style={{ fontSize: '0.65rem' }}>58%</span>
                    </div>
                    <div className="comm-vlt-box comm-vlt-box--white-red" style={{ padding: '0.8rem 0.2rem' }}>
                      <span className="comm-vlt-box__val" style={{ fontSize: '1.2rem' }}>30%</span>
                      <span className="comm-vlt-box__tser" style={{ fontSize: '0.65rem' }}>66%</span>
                    </div>
                    <div className="comm-vlt-box comm-vlt-box--white-red" style={{ padding: '0.8rem 0.2rem' }}>
                      <span className="comm-vlt-box__val" style={{ fontSize: '1.2rem' }}>15%</span>
                      <span className="comm-vlt-box__tser" style={{ fontSize: '0.65rem' }}>72%</span>
                    </div>
                    <div className="comm-vlt-box comm-vlt-box--white-red" style={{ padding: '0.8rem 0.2rem' }}>
                      <span className="comm-vlt-box__val" style={{ fontSize: '1.2rem' }}>5%</span>
                      <span className="comm-vlt-box__tser" style={{ fontSize: '0.65rem' }}>80%</span>
                    </div>
                  </div>
                </div>

                <div className="comm-card__price-tag">
                  <div className="comm-card__price-title">Starting From</div>
                  <div className="comm-card__price-grid">
                    <div className="comm-card__price-col">
                      <span className="comm-card__price-label">Saloon</span>
                      <span className="comm-card__price-val">RM1.2k</span>
                    </div>
                    <div className="comm-card__price-col">
                      <span className="comm-card__price-label">SUV</span>
                      <span className="comm-card__price-val">RM1.3k</span>
                    </div>
                    <div className="comm-card__price-col">
                      <span className="comm-card__price-label">MPV</span>
                      <span className="comm-card__price-val">RM1.4k</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Color Stable 90 */}
            <div className="comm-card">
              <div className="comm-card__img-container">
                <div className="comm-card__badge-top" style={{ color: '#ea580c', borderColor: '#ea580c' }}>POPULAR</div>
                <img
                  src={`${import.meta.env.BASE_URL}images/sputtered_film_roll.png`}
                  alt="Color Stable 90"
                  className="comm-card__img"
                />
              </div>
              <div className="comm-card__body">
                <div className="comm-card__header-row">
                  <div>
                    <h3 className="comm-card__title">Color Stable 90</h3>
                    <p className="comm-card__subtitle">Nano Carbon Ceramic</p>
                    <div className="comm-card__meta-row">
                      <span className="comm-card__tag">2 mil thickness</span>
                      <span className="comm-card__tag comm-card__tag--warranty">5 Yr Warranty</span>
                    </div>
                  </div>
                </div>

                <div className="comm-card__specs-grid comm-card__specs-grid--2col">
                  <div className="comm-card__spec-block comm-card__spec-block--uvr">
                    <span className="comm-card__spec-val comm-card__spec-val--uvr">99%</span>
                    <span className="comm-card__spec-label comm-card__spec-label--uvr">UVR</span>
                  </div>
                  <div className="comm-card__spec-block comm-card__spec-block--irr">
                    <span className="comm-card__spec-val comm-card__spec-val--irr">90%</span>
                    <span className="comm-card__spec-label comm-card__spec-label--irr">IRR</span>
                  </div>
                </div>

                <div className="comm-card__vlt-section">
                  <p className="comm-card__vlt-title">Visible Light Transmission</p>
                  <div className="comm-card__vlt-grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.4rem' }}>
                    <div className="comm-vlt-box comm-vlt-box--white-red" style={{ padding: '0.8rem 0.2rem' }}>
                      <span className="comm-vlt-box__val" style={{ fontSize: '1.2rem' }}>70%</span>
                      <span className="comm-vlt-box__tser" style={{ fontSize: '0.65rem' }}>50%</span>
                    </div>
                    <div className="comm-vlt-box comm-vlt-box--white-red" style={{ padding: '0.8rem 0.2rem' }}>
                      <span className="comm-vlt-box__val" style={{ fontSize: '1.2rem' }}>55%</span>
                      <span className="comm-vlt-box__tser" style={{ fontSize: '0.65rem' }}>58%</span>
                    </div>
                    <div className="comm-vlt-box comm-vlt-box--white-red" style={{ padding: '0.8rem 0.2rem' }}>
                      <span className="comm-vlt-box__val" style={{ fontSize: '1.2rem' }}>30%</span>
                      <span className="comm-vlt-box__tser" style={{ fontSize: '0.65rem' }}>66%</span>
                    </div>
                    <div className="comm-vlt-box comm-vlt-box--white-red" style={{ padding: '0.8rem 0.2rem' }}>
                      <span className="comm-vlt-box__val" style={{ fontSize: '1.2rem' }}>15%</span>
                      <span className="comm-vlt-box__tser" style={{ fontSize: '0.65rem' }}>72%</span>
                    </div>
                    <div className="comm-vlt-box comm-vlt-box--white-red" style={{ padding: '0.8rem 0.2rem' }}>
                      <span className="comm-vlt-box__val" style={{ fontSize: '1.2rem' }}>5%</span>
                      <span className="comm-vlt-box__tser" style={{ fontSize: '0.65rem' }}>80%</span>
                    </div>
                  </div>
                </div>

                <div className="comm-card__price-tag">
                  <div className="comm-card__price-title">Starting From</div>
                  <div className="comm-card__price-grid">
                    <div className="comm-card__price-col">
                      <span className="comm-card__price-label">Saloon</span>
                      <span className="comm-card__price-val">RM1.8k</span>
                    </div>
                    <div className="comm-card__price-col">
                      <span className="comm-card__price-label">SUV</span>
                      <span className="comm-card__price-val">RM2k</span>
                    </div>
                    <div className="comm-card__price-col">
                      <span className="comm-card__price-label">MPV</span>
                      <span className="comm-card__price-val">RM2.3k</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid Range / Performance Series */}
      <section className="comm-products-section">
        <div className="product-section__container">
          <div className="comm-section-header">
            <div className="comm-section-header__badge comm-section-header__badge--heat" style={{ color: '#3b82f6', backgroundColor: 'rgba(59,130,246,0.08)', borderColor: 'rgba(59,130,246,0.2)' }}>
              Performance Range
            </div>
            <div className="comm-section-header__line" style={{ background: 'linear-gradient(90deg, rgba(59,130,246,0.2) 0%, transparent 100%)' }} />
            <span className="comm-section-header__text">Enhanced Protection</span>
          </div>

          <div className="comm-products-grid-2">
            {/* Titanium */}
            <div className="comm-card">
              <div className="comm-card__img-container">
                <img
                  src={`${import.meta.env.BASE_URL}images/commercial-building.png`}
                  alt="Titanium"
                  className="comm-card__img"
                />
              </div>
              <div className="comm-card__body">
                <div className="comm-card__header-row">
                  <div>
                    <h3 className="comm-card__title">Titanium</h3>
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
                    <span className="comm-card__spec-label comm-card__spec-label--uvr">UVR</span>
                  </div>
                  <div className="comm-card__spec-block comm-card__spec-block--irr">
                    <span className="comm-card__spec-val comm-card__spec-val--irr">95%</span>
                    <span className="comm-card__spec-label comm-card__spec-label--irr">IRR</span>
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
                      <span className="comm-vlt-box__tser">TSER: 76%</span>
                    </div>
                  </div>
                </div>

                <div className="comm-card__price-tag">
                  <div className="comm-card__price-title">Starting From</div>
                  <div className="comm-card__price-grid">
                    <div className="comm-card__price-col">
                      <span className="comm-card__price-label">Saloon</span>
                      <span className="comm-card__price-val">RM2.8k</span>
                    </div>
                    <div className="comm-card__price-col">
                      <span className="comm-card__price-label">SUV</span>
                      <span className="comm-card__price-val">RM3k</span>
                    </div>
                    <div className="comm-card__price-col">
                      <span className="comm-card__price-label">MPV</span>
                      <span className="comm-card__price-val">RM3.5k</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* UVPRO 90 */}
            <div className="comm-card comm-card--signature">
              <div className="comm-card__img-container">
                <div className="comm-card__badge-top">SIGNATURE</div>
                <img
                  src={`${import.meta.env.BASE_URL}images/commercial-building-panel.png`}
                  alt="UVPRO 90"
                  className="comm-card__img"
                />
              </div>
              <div className="comm-card__body">
                <div className="comm-card__header-row">
                  <div>
                    <h3 className="comm-card__title">UVPRO 90</h3>
                    <p className="comm-card__subtitle">Nano Carbon Ceramic</p>
                    <div className="comm-card__meta-row">
                      <span className="comm-card__tag">2 mil thickness</span>
                      <span className="comm-card__tag comm-card__tag--warranty">7 Yr Warranty</span>
                    </div>
                  </div>
                </div>

                <div className="comm-card__specs-grid">
                  <div className="comm-card__spec-block comm-card__spec-block--uvr">
                    <span className="comm-card__spec-val comm-card__spec-val--uvr">100%</span>
                    <span className="comm-card__spec-label comm-card__spec-label--uvr">UVR</span>
                  </div>
                  <div className="comm-card__spec-block comm-card__spec-block--blr">
                    <span className="comm-card__spec-val comm-card__spec-val--blr">99%</span>
                    <span className="comm-card__spec-label comm-card__spec-label--blr">BLR</span>
                  </div>
                  <div className="comm-card__spec-block comm-card__spec-block--irr">
                    <span className="comm-card__spec-val comm-card__spec-val--irr">90%</span>
                    <span className="comm-card__spec-label comm-card__spec-label--irr">IRR</span>
                  </div>
                </div>

                <div className="comm-card__vlt-section">
                  <p className="comm-card__vlt-title">Visible Light Transmission</p>
                  <div className="comm-card__vlt-grid comm-card__vlt-grid--4col">
                    <div className="comm-vlt-box">
                      <span className="comm-vlt-box__val">70%</span>
                      <span className="comm-vlt-box__tser">TSER: 58%</span>
                    </div>
                    <div className="comm-vlt-box">
                      <span className="comm-vlt-box__val">55%</span>
                      <span className="comm-vlt-box__tser">TSER: 60%</span>
                    </div>
                    <div className="comm-vlt-box">
                      <span className="comm-vlt-box__val">30%</span>
                      <span className="comm-vlt-box__tser">TSER: 71%</span>
                    </div>
                    <div className="comm-vlt-box">
                      <span className="comm-vlt-box__val">15%</span>
                      <span className="comm-vlt-box__tser">TSER: 78%</span>
                    </div>
                  </div>
                </div>

                <div className="comm-card__price-tag">
                  <div className="comm-card__price-title">Starting From</div>
                  <div className="comm-card__price-grid">
                    <div className="comm-card__price-col">
                      <span className="comm-card__price-label">Saloon</span>
                      <span className="comm-card__price-val">RM2.6k</span>
                    </div>
                    <div className="comm-card__price-col">
                      <span className="comm-card__price-label">SUV</span>
                      <span className="comm-card__price-val">RM2.8k</span>
                    </div>
                    <div className="comm-card__price-col">
                      <span className="comm-card__price-label">MPV</span>
                      <span className="comm-card__price-val">RM3.3k</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Series - Premium */}
      <section className="comm-products-section">
        <div className="product-section__container">
          <div className="comm-section-header">
            <div className="comm-section-header__badge comm-section-header__badge--signature">
              Signature Series - Premium
            </div>
            <div className="comm-section-header__line comm-section-header__line--signature" />
            <span className="comm-section-header__text">Maximum Protection</span>
          </div>

          <div className="comm-products-grid-2">
            {/* Elite */}
            <div className="comm-card comm-card--signature">
              <div className="comm-card__img-container">
                <div className="comm-card__badge-top">SIGNATURE</div>
                <img
                  src={`${import.meta.env.BASE_URL}images/split-media-building.png`}
                  alt="Elite"
                  className="comm-card__img"
                />
              </div>
              <div className="comm-card__body">
                <div className="comm-card__header-row">
                  <div>
                    <h3 className="comm-card__title">Elite</h3>
                    <p className="comm-card__subtitle">Nano Titanium Sputter</p>
                    <div className="comm-card__meta-row">
                      <span className="comm-card__tag">2 - 3.5 mil</span>
                      <span className="comm-card__tag comm-card__tag--warranty">10 Yr Warranty</span>
                    </div>
                  </div>
                </div>

                <div className="comm-card__specs-grid">
                  <div className="comm-card__spec-block comm-card__spec-block--uvr">
                    <span className="comm-card__spec-val comm-card__spec-val--uvr">100%</span>
                    <span className="comm-card__spec-label comm-card__spec-label--uvr">UVR</span>
                  </div>
                  <div className="comm-card__spec-block comm-card__spec-block--blr">
                    <span className="comm-card__spec-val comm-card__spec-val--blr">99%</span>
                    <span className="comm-card__spec-label comm-card__spec-label--blr">BLR</span>
                  </div>
                  <div className="comm-card__spec-block comm-card__spec-block--irr">
                    <span className="comm-card__spec-val comm-card__spec-val--irr">95%</span>
                    <span className="comm-card__spec-label comm-card__spec-label--irr">IRR</span>
                  </div>
                </div>

                <div className="comm-card__vlt-section">
                  <p className="comm-card__vlt-title">Visible Light Transmission</p>
                  <div className="comm-card__vlt-grid comm-card__vlt-grid--4col">
                    <div className="comm-vlt-box">
                      <span className="comm-vlt-box__val">70%</span>
                      <span className="comm-vlt-box__tser">TSER: 57%</span>
                    </div>
                    <div className="comm-vlt-box">
                      <span className="comm-vlt-box__val">55%</span>
                      <span className="comm-vlt-box__tser">TSER: 67%</span>
                    </div>
                    <div className="comm-vlt-box">
                      <span className="comm-vlt-box__val">35%</span>
                      <span className="comm-vlt-box__tser">TSER: 72%</span>
                    </div>
                    <div className="comm-vlt-box">
                      <span className="comm-vlt-box__val">15%</span>
                      <span className="comm-vlt-box__tser">TSER: 80%</span>
                    </div>
                  </div>
                </div>

                <div className="comm-card__price-tag">
                  <div className="comm-card__price-title">Starting From</div>
                  <div className="comm-card__price-grid">
                    <div className="comm-card__price-col">
                      <span className="comm-card__price-label">Saloon</span>
                      <span className="comm-card__price-val">RM3.4k</span>
                    </div>
                    <div className="comm-card__price-col">
                      <span className="comm-card__price-label">SUV</span>
                      <span className="comm-card__price-val">RM3.8k</span>
                    </div>
                    <div className="comm-card__price-col">
                      <span className="comm-card__price-label">MPV</span>
                      <span className="comm-card__price-val">RM4.4k</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Diamond */}
            <div className="comm-card comm-card--signature">
              <div className="comm-card__img-container">
                <div className="comm-card__badge-top">SIGNATURE</div>
                <img
                  src={`${import.meta.env.BASE_URL}images/sputtered_film_roll.png`}
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
                    <span className="comm-card__spec-label comm-card__spec-label--uvr">UVR</span>
                  </div>
                  <div className="comm-card__spec-block comm-card__spec-block--blr">
                    <span className="comm-card__spec-val comm-card__spec-val--blr">99%</span>
                    <span className="comm-card__spec-label comm-card__spec-label--blr">BLR</span>
                  </div>
                  <div className="comm-card__spec-block comm-card__spec-block--irr">
                    <span className="comm-card__spec-val comm-card__spec-val--irr">98%</span>
                    <span className="comm-card__spec-label comm-card__spec-label--irr">IRR</span>
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

                <div className="comm-card__price-tag">
                  <div className="comm-card__price-title">Starting From</div>
                  <div className="comm-card__price-grid">
                    <div className="comm-card__price-col">
                      <span className="comm-card__price-label">Saloon</span>
                      <span className="comm-card__price-val">RM4k</span>
                    </div>
                    <div className="comm-card__price-col">
                      <span className="comm-card__price-label">SUV</span>
                      <span className="comm-card__price-val">RM4.4k</span>
                    </div>
                    <div className="comm-card__price-col">
                      <span className="comm-card__price-label">MPV</span>
                      <span className="comm-card__price-val">RM5.2k</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship - Ultimate Protection */}
      <section className="comm-products-section">
        <div className="product-section__container">
          <div className="comm-section-header">
            <div className="comm-section-header__badge comm-section-header__badge--signature" style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.2), rgba(201,168,76,0.05))', color: '#c9a84c', borderColor: 'rgba(201,168,76,0.3)' }}>
              Flagship - Ultimate Protection
            </div>
            <div className="comm-section-header__line comm-section-header__line--signature" style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.3) 0%, transparent 100%)' }} />
          </div>

          <div className="comm-products-grid-2">
            {/* Diamond X */}
            <div className="comm-card comm-card--signature" style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.04) 0%, #ffffff 100%)', borderColor: 'rgba(201,168,76,0.15)' }}>
              <div className="comm-card__img-container">
                <div className="comm-card__badge-top" style={{ borderColor: '#c9a84c', color: '#c9a84c' }}>FLAGSHIP</div>
                <img
                  src={`${import.meta.env.BASE_URL}images/automotive-tint.png`}
                  alt="Diamond X"
                  className="comm-card__img"
                />
              </div>
              <div className="comm-card__body">
                <div className="comm-card__header-row">
                  <div>
                    <h3 className="comm-card__title">Diamond X</h3>
                    <p className="comm-card__subtitle">Multi Layer Silver Sputter</p>
                    <div className="comm-card__meta-row">
                      <span className="comm-card__tag" style={{ color: '#c9a84c', borderColor: 'rgba(201,168,76,0.2)', backgroundColor: 'rgba(201,168,76,0.05)' }}>4 - 6 mil</span>
                      <span className="comm-card__tag comm-card__tag--warranty" style={{ backgroundColor: '#c9a84c', color: '#ffffff' }}>10 Yr Warranty</span>
                    </div>
                  </div>
                </div>

                <div className="comm-card__specs-grid">
                  <div className="comm-card__spec-block comm-card__spec-block--uvr">
                    <span className="comm-card__spec-val comm-card__spec-val--uvr">100%</span>
                    <span className="comm-card__spec-label comm-card__spec-label--uvr">UVR</span>
                  </div>
                  <div className="comm-card__spec-block comm-card__spec-block--blr">
                    <span className="comm-card__spec-val comm-card__spec-val--blr">99%</span>
                    <span className="comm-card__spec-label comm-card__spec-label--blr">BLR</span>
                  </div>
                  <div className="comm-card__spec-block comm-card__spec-block--irr">
                    <span className="comm-card__spec-val comm-card__spec-val--irr">98%</span>
                    <span className="comm-card__spec-label comm-card__spec-label--irr">IRR</span>
                  </div>
                </div>

                <div className="comm-card__vlt-section">
                  <p className="comm-card__vlt-title">Visible Light Transmission</p>
                  <div className="comm-card__vlt-grid comm-card__vlt-grid--2col">
                    <div className="comm-vlt-box">
                      <span className="comm-vlt-box__val">60%</span>
                      <span className="comm-vlt-box__tser">TSER: 66%</span>
                    </div>
                    <div className="comm-vlt-box">
                      <span className="comm-vlt-box__val">15%</span>
                      <span className="comm-vlt-box__tser">TSER: 82%</span>
                    </div>
                  </div>
                </div>

                <div className="comm-card__price-tag">
                  <div className="comm-card__price-title">Starting From</div>
                  <div className="comm-card__price-grid">
                    <div className="comm-card__price-col">
                      <span className="comm-card__price-label">Saloon</span>
                      <span className="comm-card__price-val">RM4.4k</span>
                    </div>
                    <div className="comm-card__price-col">
                      <span className="comm-card__price-label">SUV</span>
                      <span className="comm-card__price-val">RM4.8k</span>
                    </div>
                    <div className="comm-card__price-col">
                      <span className="comm-card__price-label">MPV</span>
                      <span className="comm-card__price-val">RM5.6k</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Titan X */}
            <div className="comm-card comm-card--signature" style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.04) 0%, #ffffff 100%)', borderColor: 'rgba(201,168,76,0.15)' }}>
              <div className="comm-card__img-container">
                <div className="comm-card__badge-top" style={{ borderColor: '#c9a84c', color: '#c9a84c' }}>ULTIMATE</div>
                <img
                  src={`${import.meta.env.BASE_URL}images/hot-car-exterior.png`}
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
                      <span className="comm-card__tag" style={{ color: '#c9a84c', borderColor: 'rgba(201,168,76,0.2)', backgroundColor: 'rgba(201,168,76,0.05)' }}>3 mil thickness</span>
                      <span className="comm-card__tag comm-card__tag--warranty" style={{ backgroundColor: '#c9a84c', color: '#ffffff' }}>10 Yr Warranty</span>
                    </div>
                  </div>
                </div>

                <div className="comm-card__specs-grid">
                  <div className="comm-card__spec-block comm-card__spec-block--uvr">
                    <span className="comm-card__spec-val comm-card__spec-val--uvr">100%</span>
                    <span className="comm-card__spec-label comm-card__spec-label--uvr">UVR</span>
                  </div>
                  <div className="comm-card__spec-block comm-card__spec-block--blr">
                    <span className="comm-card__spec-val comm-card__spec-val--blr">99%</span>
                    <span className="comm-card__spec-label comm-card__spec-label--blr">BLR</span>
                  </div>
                  <div className="comm-card__spec-block comm-card__spec-block--irr">
                    <span className="comm-card__spec-val comm-card__spec-val--irr">&gt;99%</span>
                    <span className="comm-card__spec-label comm-card__spec-label--irr">IRR</span>
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

                <div className="comm-card__price-tag">
                  <div className="comm-card__price-title">Starting From</div>
                  <div className="comm-card__price-grid">
                    <div className="comm-card__price-col">
                      <span className="comm-card__price-label">Saloon</span>
                      <span className="comm-card__price-val">RM5k</span>
                    </div>
                    <div className="comm-card__price-col">
                      <span className="comm-card__price-label">SUV</span>
                      <span className="comm-card__price-val">RM5.6k</span>
                    </div>
                    <div className="comm-card__price-col">
                      <span className="comm-card__price-label">MPV</span>
                      <span className="comm-card__price-val">RM6.2k</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="comm-table-section">
        <div className="product-section__container">
          <h2 className="comm-table-section__title">Full Product Comparison</h2>
          <div className="comm-table-wrapper">
            <table className="comm-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th style={{ textAlign: 'center' }}>Technology</th>
                  <th style={{ textAlign: 'center' }}>UVR</th>
                  <th style={{ textAlign: 'center' }}>IRR</th>
                  <th style={{ textAlign: 'center' }}>Warranty</th>
                  <th style={{ textAlign: 'center' }}>Saloon</th>
                  <th style={{ textAlign: 'center' }}>SUV</th>
                  <th style={{ textAlign: 'center' }}>MPV</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="comm-table__product-name">CS PRO</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__tech">Nano Carbon Ceramic</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--uvr">99%</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--irr">40%</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__tech">3 Yr</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--warranty">RM800</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--warranty">RM900</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--warranty">RM1,000</td>
                </tr>
                <tr>
                  <td className="comm-table__product-name">Color Stable 80</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__tech">Nano Carbon Ceramic</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--uvr">99%</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--irr">80%</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__tech">5 Yr</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--warranty">RM1,200</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--warranty">RM1,300</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--warranty">RM1,400</td>
                </tr>
                <tr>
                  <td className="comm-table__product-name">Color Stable 90</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__tech">Nano Carbon Ceramic</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--uvr">99%</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--irr">90%</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__tech">5 Yr</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--warranty">RM1,800</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--warranty">RM2,000</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--warranty">RM2,300</td>
                </tr>
                <tr>
                  <td className="comm-table__product-name">
                    UVPRO 90 <span style={{ color: '#c9a84c', fontSize: '0.75rem', marginLeft: '0.25rem', fontWeight: 800 }}>SIGNATURE</span>
                  </td>
                  <td style={{ textAlign: 'center' }} className="comm-table__tech">Nano Carbon Ceramic</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--uvr">100%</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--irr">90%</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__tech">7 Yr</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--warranty">RM2,600</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--warranty">RM2,800</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--warranty">RM3,300</td>
                </tr>
                <tr>
                  <td className="comm-table__product-name">Titanium</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__tech">Nano Titanium Sputter</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--uvr">99%</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--irr">95%</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__tech">7 Yr</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--warranty">RM2,800</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--warranty">RM3,000</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--warranty">RM3,500</td>
                </tr>
                <tr>
                  <td className="comm-table__product-name">
                    Elite <span style={{ color: '#c9a84c', fontSize: '0.75rem', marginLeft: '0.25rem', fontWeight: 800 }}>SIGNATURE</span>
                  </td>
                  <td style={{ textAlign: 'center' }} className="comm-table__tech">Nano Titanium Sputter</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--uvr">100%</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--irr">95%</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__tech">10 Yr</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--warranty">RM3,400</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--warranty">RM3,800</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--warranty">RM4,400</td>
                </tr>
                <tr>
                  <td className="comm-table__product-name">
                    Diamond <span style={{ color: '#c9a84c', fontSize: '0.75rem', marginLeft: '0.25rem', fontWeight: 800 }}>SIGNATURE</span>
                  </td>
                  <td style={{ textAlign: 'center' }} className="comm-table__tech">Multi Layer Titanium Sputter</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--uvr">100%</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--irr">98%</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__tech">10 Yr</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--warranty">RM4,000</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--warranty">RM4,400</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--warranty">RM5,200</td>
                </tr>
                <tr>
                  <td className="comm-table__product-name">
                    Diamond X <span style={{ color: '#c9a84c', fontSize: '0.75rem', marginLeft: '0.25rem', fontWeight: 800 }}>SIGNATURE</span>
                  </td>
                  <td style={{ textAlign: 'center' }} className="comm-table__tech">Multi Layer Silver Sputter</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--uvr">100%</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--irr">98%</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__tech">10 Yr</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--warranty">RM4,400</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--warranty">RM4,800</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--warranty">RM5,600</td>
                </tr>
                <tr>
                  <td className="comm-table__product-name">
                    Titan X <span style={{ color: '#c9a84c', fontSize: '0.75rem', marginLeft: '0.25rem', fontWeight: 800 }}>SIGNATURE</span>
                  </td>
                  <td style={{ textAlign: 'center' }} className="comm-table__tech">Multi Layer Silver Sputter</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--uvr">100%</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--irr">&gt;99%</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__tech">10 Yr</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--warranty">RM5,000</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--warranty">RM5,600</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--warranty">RM6,200</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-white/30 mt-4" style={{ marginTop: '1.5rem', color: 'var(--comm-text-secondary)' }}>
            * All prices are starting from. 0% installment available up to 12 months via VISA / MasterCard.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="comm-cta">
        <div className="comm-cta__container">
          <h2 className="comm-cta__title">Ready to Protect Your Vehicle?</h2>
          <p className="comm-cta__desc">
            Visit our authorized dealers for professional installation. 0% installment available up to 12 months with VISA and MasterCard.
          </p>
          <div className="comm-cta__buttons">
            <a
              href="#/products/building/residential"
              className="comm-cta__btn comm-cta__btn--secondary"
            >
              View Residential
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#/products/building/commercial"
              className="comm-cta__btn comm-cta__btn--primary"
            >
              View Commercial
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
