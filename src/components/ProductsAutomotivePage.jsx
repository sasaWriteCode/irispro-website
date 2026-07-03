import { useEffect } from 'react';
import '../styles/products.css';

export default function ProductsAutomotivePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <span className="text-red">Automotive Tint</span>
          </div>
          <div className="max-w-3xl">
            <div className="comm-hero__badge">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Automotive Solutions</span>
            </div>
            <h1 className="comm-hero__title">
              <span className="red-gradient">Automotive</span> Window Tint
            </h1>
            <p className="comm-hero__lead">
              From budget-friendly to ultra-premium, protect your vehicle with IrisPro's advanced solar film technology. Available for Saloon, SUV, and MPV with 0% installment up to 12 months.
            </p>

            {/* Installment Badge */}
            <div className="comm-hero__installment">
              <span className="comm-hero__installment-title">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
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
            <div className="comm-section-header__badge comm-section-header__badge--entry">
              Entry Level
            </div>
            <div className="comm-section-header__line comm-section-header__line--entry" />
            <span className="comm-section-header__text">Budget-Friendly Options</span>
          </div>

          <div className="res-grid-2">
            {/* CS PRO */}
            <div className="res-card res-card--signature">
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
                  <div className="res-spec-badge res-spec-badge--uvr">
                    <span className="res-spec-val">99%</span>
                    <span className="res-spec-key">UVR</span>
                  </div>
                  <div className="res-spec-badge res-spec-badge--irr">
                    <span className="res-spec-val">40%</span>
                    <span className="res-spec-key">IRR</span>
                  </div>
                </div>

                <div className="res-vlt-section">
                  <p className="res-vlt-label">VLT Options</p>
                  <div className="res-vlt-grid res-vlt-grid--6">
                    <div className="res-vlt-bar"><span className="res-vlt-val">70%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">60%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">40%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">30%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">20%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">5%</span></div>
                  </div>
                  <p className="comm-card__vlt-tser">TSER: 27% - 60%</p>
                </div>

                <div className="price-tag">
                  <p className="price-tag__title">Starting From</p>
                  <div className="price-tag__grid">
                    <div className="price-tag__col">
                      <p className="price-tag__label">Saloon</p>
                      <p className="price-tag__val">RM800</p>
                    </div>
                    <div className="price-tag__col price-tag__col--border">
                      <p className="price-tag__label">SUV</p>
                      <p className="price-tag__val">RM900</p>
                    </div>
                    <div className="price-tag__col">
                      <p className="price-tag__label">MPV</p>
                      <p className="price-tag__val">RM1,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Color Stable 80 */}
            <div className="res-card res-card--signature">
              <div className="res-card__img-wrap">
                <img src={`${import.meta.env.BASE_URL}images/iris-comfort.png`} alt="Color Stable 80" className="res-card__img" />
              </div>
              <div className="res-card__body">
                <div className="res-card__header">
                  <div>
                    <h3 className="res-card__title">Color Stable 80</h3>
                    <p className="res-card__subtitle">Nano Carbon Ceramic</p>
                    <div className="res-card__tags">
                      <span className="res-tag">2 mil thickness</span>
                      <span className="res-tag res-tag--warranty">5 Yr Warranty</span>
                    </div>
                  </div>
                  <span className="res-card__series-label res-card__series-label--value">Value</span>
                </div>

                <div className="res-specs-grid res-specs-grid--2">
                  <div className="res-spec-badge res-spec-badge--uvr">
                    <span className="res-spec-val">99%</span>
                    <span className="res-spec-key">UVR</span>
                  </div>
                  <div className="res-spec-badge res-spec-badge--irr">
                    <span className="res-spec-val">80%</span>
                    <span className="res-spec-key">IRR</span>
                  </div>
                </div>

                <div className="res-vlt-section">
                  <p className="res-vlt-label">VLT Options</p>
                  <div className="res-vlt-grid res-vlt-grid--5">
                    <div className="res-vlt-bar"><span className="res-vlt-val">70%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">55%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">30%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">15%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">5%</span></div>
                  </div>
                  <p className="comm-card__vlt-tser">TSER: 50% - 80%</p>
                </div>

                <div className="price-tag">
                  <p className="price-tag__title">Starting From</p>
                  <div className="price-tag__grid">
                    <div className="price-tag__col">
                      <p className="price-tag__label">Saloon</p>
                      <p className="price-tag__val">RM1,200</p>
                    </div>
                    <div className="price-tag__col price-tag__col--border">
                      <p className="price-tag__label">SUV</p>
                      <p className="price-tag__val">RM1,300</p>
                    </div>
                    <div className="price-tag__col">
                      <p className="price-tag__label">MPV</p>
                      <p className="price-tag__val">RM1,400</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Color Stable 90 */}
            <div className="res-card res-card--signature">
              <div className="res-card__img-wrap">
                <span className="res-card__top-badge" style={{ background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.25)', color: '#f97316' }}>POPULAR</span>
                <img src={`${import.meta.env.BASE_URL}images/family-car.png`} alt="Color Stable 90" className="res-card__img" />
              </div>
              <div className="res-card__body">
                <div className="res-card__header">
                  <div>
                    <h3 className="res-card__title">Color Stable 90</h3>
                    <p className="res-card__subtitle">Nano Carbon Ceramic</p>
                    <div className="res-card__tags">
                      <span className="res-tag">2 mil thickness</span>
                      <span className="res-tag res-tag--warranty">5 Yr Warranty</span>
                    </div>
                  </div>
                  <span className="res-card__series-label res-card__series-label--value">Value</span>
                </div>

                <div className="res-specs-grid res-specs-grid--2">
                  <div className="res-spec-badge res-spec-badge--uvr">
                    <span className="res-spec-val">99%</span>
                    <span className="res-spec-key">UVR</span>
                  </div>
                  <div className="res-spec-badge res-spec-badge--irr">
                    <span className="res-spec-val">90%</span>
                    <span className="res-spec-key">IRR</span>
                  </div>
                </div>

                <div className="res-vlt-section">
                  <p className="res-vlt-label">VLT Options</p>
                  <div className="res-vlt-grid res-vlt-grid--5">
                    <div className="res-vlt-bar"><span className="res-vlt-val">70%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">55%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">30%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">15%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">5%</span></div>
                  </div>
                  <p className="comm-card__vlt-tser">TSER: 50% - 80%</p>
                </div>

                <div className="price-tag">
                  <p className="price-tag__title">Starting From</p>
                  <div className="price-tag__grid">
                    <div className="price-tag__col">
                      <p className="price-tag__label">Saloon</p>
                      <p className="price-tag__val">RM1,800</p>
                    </div>
                    <div className="price-tag__col price-tag__col--border">
                      <p className="price-tag__label">SUV</p>
                      <p className="price-tag__val">RM2,000</p>
                    </div>
                    <div className="price-tag__col">
                      <p className="price-tag__label">MPV</p>
                      <p className="price-tag__val">RM2,300</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Range / Performance Series */}
      <section className="comm-products-section">
        <div className="product-section__container">
          <div className="comm-section-header">
            <div className="comm-section-header__badge comm-section-header__badge--performance">
              Performance Range
            </div>
            <div className="comm-section-header__line comm-section-header__line--performance" />
            <span className="comm-section-header__text">Enhanced Protection</span>
          </div>

          <div className="res-grid-2">
            {/* Titanium */}
            <div className="res-card res-card--signature">
              <div className="res-card__img-wrap">
                <img src={`${import.meta.env.BASE_URL}images/sputtered_film_roll.png`} alt="Titanium" className="res-card__img" />
              </div>
              <div className="res-card__body">
                <div className="res-card__header">
                  <div>
                    <h3 className="res-card__title">Titanium</h3>
                    <p className="res-card__subtitle">Nano Titanium Sputter</p>
                    <div className="res-card__tags">
                      <span className="res-tag">2 - 3.5 mil</span>
                      <span className="res-tag res-tag--warranty">7 Yr Warranty</span>
                    </div>
                  </div>
                  <span className="res-card__series-label res-card__series-label--heat">Performance</span>
                </div>

                <div className="res-specs-grid res-specs-grid--2">
                  <div className="res-spec-badge res-spec-badge--uvr">
                    <span className="res-spec-val">99%</span>
                    <span className="res-spec-key">UVR</span>
                  </div>
                  <div className="res-spec-badge res-spec-badge--irr">
                    <span className="res-spec-val">95%</span>
                    <span className="res-spec-key">IRR</span>
                  </div>
                </div>

                <div className="res-vlt-section">
                  <p className="res-vlt-label">VLT Options</p>
                  <div className="res-vlt-grid res-vlt-grid--4">
                    <div className="res-vlt-bar"><span className="res-vlt-val">70%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">50%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">35%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">15%</span></div>
                  </div>
                  <p className="comm-card__vlt-tser">TSER: 55% - 76%</p>
                </div>

                <div className="price-tag">
                  <p className="price-tag__title">Starting From</p>
                  <div className="price-tag__grid">
                    <div className="price-tag__col">
                      <p className="price-tag__label">Saloon</p>
                      <p className="price-tag__val">RM2,800</p>
                    </div>
                    <div className="price-tag__col price-tag__col--border">
                      <p className="price-tag__label">SUV</p>
                      <p className="price-tag__val">RM3,000</p>
                    </div>
                    <div className="price-tag__col">
                      <p className="price-tag__label">MPV</p>
                      <p className="price-tag__val">RM3,500</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* UVPRO 90 */}
            <div className="res-card res-card--signature">
              <div className="res-card__img-wrap">
                <span className="res-card__top-badge res-card__top-badge--signature">SIGNATURE</span>
                <img src={`${import.meta.env.BASE_URL}images/hot-car-exterior.png`} alt="UVPRO 90" className="res-card__img" />
              </div>
              <div className="res-card__body">
                <div className="res-card__header">
                  <div>
                    <h3 className="res-card__title">UVPRO 90</h3>
                    <p className="res-card__subtitle">Nano Carbon Ceramic</p>
                    <div className="res-card__tags">
                      <span className="res-tag">2 mil thickness</span>
                      <span className="res-tag res-tag--warranty">7 Yr Warranty</span>
                    </div>
                  </div>
                  <span className="res-card__series-label">Signature</span>
                </div>

                <div className="res-specs-grid res-specs-grid--3">
                  <div className="res-spec-badge res-spec-badge--uvr">
                    <span className="res-spec-val">100%</span>
                    <span className="res-spec-key">UVR</span>
                  </div>
                  <div className="res-spec-badge res-spec-badge--blr">
                    <span className="res-spec-val">99%</span>
                    <span className="res-spec-key">BLR</span>
                  </div>
                  <div className="res-spec-badge res-spec-badge--irr">
                    <span className="res-spec-val">90%</span>
                    <span className="res-spec-key">IRR</span>
                  </div>
                </div>

                <div className="res-vlt-section">
                  <p className="res-vlt-label">VLT Options</p>
                  <div className="res-vlt-grid res-vlt-grid--5">
                    <div className="res-vlt-bar"><span className="res-vlt-val">70%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">55%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">30%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">15%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">5%</span></div>
                  </div>
                  <p className="comm-card__vlt-tser">TSER: 58% - 81%</p>
                </div>

                <div className="price-tag">
                  <p className="price-tag__title">Starting From</p>
                  <div className="price-tag__grid">
                    <div className="price-tag__col">
                      <p className="price-tag__label">Saloon</p>
                      <p className="price-tag__val">RM2,600</p>
                    </div>
                    <div className="price-tag__col price-tag__col--border">
                      <p className="price-tag__label">SUV</p>
                      <p className="price-tag__val">RM2,800</p>
                    </div>
                    <div className="price-tag__col">
                      <p className="price-tag__label">MPV</p>
                      <p className="price-tag__val">RM3,300</p>
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

          <div className="res-grid-2">
            {/* Elite */}
            <div className="res-card res-card--signature">
              <div className="res-card__img-wrap">
                <span className="res-card__top-badge res-card__top-badge--signature">SIGNATURE</span>
                <img src={`${import.meta.env.BASE_URL}images/automotive-tint.png`} alt="Elite" className="res-card__img" />
              </div>
              <div className="res-card__body">
                <div className="res-card__header">
                  <div>
                    <h3 className="res-card__title">Elite</h3>
                    <p className="res-card__subtitle">Nano Titanium Sputter</p>
                    <div className="res-card__tags">
                      <span className="res-tag">2 - 3.5 mil</span>
                      <span className="res-tag res-tag--warranty">10 Yr Warranty</span>
                    </div>
                  </div>
                  <span className="res-card__series-label">Signature</span>
                </div>

                <div className="res-specs-grid res-specs-grid--3">
                  <div className="res-spec-badge res-spec-badge--uvr">
                    <span className="res-spec-val">100%</span>
                    <span className="res-spec-key">UVR</span>
                  </div>
                  <div className="res-spec-badge res-spec-badge--blr">
                    <span className="res-spec-val">99%</span>
                    <span className="res-spec-key">BLR</span>
                  </div>
                  <div className="res-spec-badge res-spec-badge--irr">
                    <span className="res-spec-val">95%</span>
                    <span className="res-spec-key">IRR</span>
                  </div>
                </div>

                <div className="res-vlt-section">
                  <p className="res-vlt-label">VLT Options</p>
                  <div className="res-vlt-grid res-vlt-grid--5">
                    <div className="res-vlt-bar"><span className="res-vlt-val">70%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">55%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">35%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">15%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">5%</span></div>
                  </div>
                  <p className="comm-card__vlt-tser">TSER: 57% - 85%</p>
                </div>

                <div className="price-tag">
                  <p className="price-tag__title">Starting From</p>
                  <div className="price-tag__grid">
                    <div className="price-tag__col">
                      <p className="price-tag__label">Saloon</p>
                      <p className="price-tag__val">RM3,400</p>
                    </div>
                    <div className="price-tag__col price-tag__col--border">
                      <p className="price-tag__label">SUV</p>
                      <p className="price-tag__val">RM3,800</p>
                    </div>
                    <div className="price-tag__col">
                      <p className="price-tag__label">MPV</p>
                      <p className="price-tag__val">RM4,400</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Diamond */}
            <div className="res-card res-card--signature">
              <div className="res-card__img-wrap">
                <span className="res-card__top-badge res-card__top-badge--signature">SIGNATURE</span>
                <img src={`${import.meta.env.BASE_URL}images/family-car.png`} alt="Diamond" className="res-card__img" />
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
                  <div className="res-spec-badge res-spec-badge--uvr">
                    <span className="res-spec-val">100%</span>
                    <span className="res-spec-key">UVR</span>
                  </div>
                  <div className="res-spec-badge res-spec-badge--blr">
                    <span className="res-spec-val">99%</span>
                    <span className="res-spec-key">BLR</span>
                  </div>
                  <div className="res-spec-badge res-spec-badge--irr">
                    <span className="res-spec-val">98%</span>
                    <span className="res-spec-key">IRR</span>
                  </div>
                </div>

                <div className="res-vlt-section">
                  <p className="res-vlt-label">VLT Options</p>
                  <div className="res-vlt-grid res-vlt-grid--2">
                    <div className="res-vlt-bar"><span className="res-vlt-val">60%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">30%</span></div>
                  </div>
                  <p className="comm-card__vlt-tser">TSER: 65% - 78%</p>
                </div>

                <div className="price-tag">
                  <p className="price-tag__title">Starting From</p>
                  <div className="price-tag__grid">
                    <div className="price-tag__col">
                      <p className="price-tag__label">Saloon</p>
                      <p className="price-tag__val">RM4,000</p>
                    </div>
                    <div className="price-tag__col price-tag__col--border">
                      <p className="price-tag__label">SUV</p>
                      <p className="price-tag__val">RM4,400</p>
                    </div>
                    <div className="price-tag__col">
                      <p className="price-tag__label">MPV</p>
                      <p className="price-tag__val">RM5,200</p>
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
            <div className="comm-section-header__badge comm-section-header__badge--flagship">
              Flagship - Ultimate Protection
            </div>
            <div className="comm-section-header__line comm-section-header__line--flagship" />
          </div>

          <div className="res-grid-2">
            {/* Diamond X */}
            <div className="res-card res-card--signature">
              <div className="res-card__img-wrap">
                <span className="res-card__top-badge res-card__top-badge--flagship">FLAGSHIP</span>
                <img src={`${import.meta.env.BASE_URL}images/hot-car-exterior.png`} alt="Diamond X" className="res-card__img" />
              </div>
              <div className="res-card__body">
                <div className="res-card__header">
                  <div>
                    <h3 className="res-card__title">Diamond X</h3>
                    <p className="res-card__subtitle">Multi Layer Silver Sputter</p>
                    <div className="res-card__tags">
                      <span className="res-tag">4 - 6 mil</span>
                      <span className="res-tag res-tag--warranty">10 Yr Warranty</span>
                    </div>
                  </div>
                  <span className="res-card__series-label">Signature</span>
                </div>

                <div className="res-specs-grid res-specs-grid--3">
                  <div className="res-spec-badge res-spec-badge--uvr">
                    <span className="res-spec-val">100%</span>
                    <span className="res-spec-key">UVR</span>
                  </div>
                  <div className="res-spec-badge res-spec-badge--blr">
                    <span className="res-spec-val">99%</span>
                    <span className="res-spec-key">BLR</span>
                  </div>
                  <div className="res-spec-badge res-spec-badge--irr">
                    <span className="res-spec-val">98%</span>
                    <span className="res-spec-key">IRR</span>
                  </div>
                </div>

                <div className="res-vlt-section">
                  <p className="res-vlt-label">VLT Options</p>
                  <div className="res-vlt-grid res-vlt-grid--2">
                    <div className="res-vlt-bar"><span className="res-vlt-val">60%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">15%</span></div>
                  </div>
                  <p className="comm-card__vlt-tser">TSER: 66% - 82%</p>
                </div>

                <div className="price-tag">
                  <p className="price-tag__title">Starting From</p>
                  <div className="price-tag__grid">
                    <div className="price-tag__col">
                      <p className="price-tag__label">Saloon</p>
                      <p className="price-tag__val">RM4,400</p>
                    </div>
                    <div className="price-tag__col price-tag__col--border">
                      <p className="price-tag__label">SUV</p>
                      <p className="price-tag__val">RM4,800</p>
                    </div>
                    <div className="price-tag__col">
                      <p className="price-tag__label">MPV</p>
                      <p className="price-tag__val">RM5,600</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Titan X */}
            <div className="res-card res-card--signature">
              <div className="res-card__img-wrap">
                <span className="res-card__top-badge" style={{ background: 'rgba(147,51,234,0.1)', border: '1px solid rgba(147,51,234,0.25)', color: '#a855f7' }}>ULTIMATE</span>
                <img src={`${import.meta.env.BASE_URL}images/hero-family-car.png`} alt="Titan X" className="res-card__img" />
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
                  <div className="res-spec-badge res-spec-badge--uvr">
                    <span className="res-spec-val">100%</span>
                    <span className="res-spec-key">UVR</span>
                  </div>
                  <div className="res-spec-badge res-spec-badge--blr">
                    <span className="res-spec-val">99%</span>
                    <span className="res-spec-key">BLR</span>
                  </div>
                  <div className="res-spec-badge res-spec-badge--irr">
                    <span className="res-spec-val">&gt;99%</span>
                    <span className="res-spec-key">IRR</span>
                  </div>
                </div>

                <div className="res-vlt-section">
                  <p className="res-vlt-label">VLT Options</p>
                  <div className="res-vlt-grid res-vlt-grid--2">
                    <div className="res-vlt-bar"><span className="res-vlt-val">60%</span></div>
                    <div className="res-vlt-bar"><span className="res-vlt-val">15%</span></div>
                  </div>
                  <p className="comm-card__vlt-tser">TSER: 69% - 84%</p>
                </div>

                <div className="price-tag">
                  <p className="price-tag__title">Starting From</p>
                  <div className="price-tag__grid">
                    <div className="price-tag__col">
                      <p className="price-tag__label">Saloon</p>
                      <p className="price-tag__val">RM5,000</p>
                    </div>
                    <div className="price-tag__col price-tag__col--border">
                      <p className="price-tag__label">SUV</p>
                      <p className="price-tag__val">RM5,600</p>
                    </div>
                    <div className="price-tag__col">
                      <p className="price-tag__label">MPV</p>
                      <p className="price-tag__val">RM6,200</p>
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
                  <td style={{ textAlign: 'center' }} className="comm-table__val--price">RM800</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--price">RM900</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--price">RM1,000</td>
                </tr>
                <tr>
                  <td className="comm-table__product-name">Color Stable 80</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__tech">Nano Carbon Ceramic</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--uvr">99%</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--irr">80%</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__tech">5 Yr</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--price">RM1,200</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--price">RM1,300</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--price">RM1,400</td>
                </tr>
                <tr className="comm-table__row--popular">
                  <td className="comm-table__product-name">
                    Color Stable 90 <span className="comm-table__tag-pill">POPULAR</span>
                  </td>
                  <td style={{ textAlign: 'center' }} className="comm-table__tech">Nano Carbon Ceramic</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--uvr">99%</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--irr">90%</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__tech">5 Yr</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--price">RM1,800</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--price">RM2,000</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--price">RM2,300</td>
                </tr>
                <tr className="comm-table__row--signature">
                  <td className="comm-table__product-name">
                    UVPRO 90 <span className="comm-table__tag-signature">SIGNATURE</span>
                  </td>
                  <td style={{ textAlign: 'center' }} className="comm-table__tech">Nano Carbon Ceramic</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--uvr">100%</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--irr">90%</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__tech">7 Yr</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--price">RM2,600</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--price">RM2,800</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--price">RM3,300</td>
                </tr>
                <tr>
                  <td className="comm-table__product-name">Titanium</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__tech">Nano Titanium Sputter</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--uvr">99%</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--irr">95%</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__tech">7 Yr</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--price">RM2,800</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--price">RM3,000</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--price">RM3,500</td>
                </tr>
                <tr className="comm-table__row--signature">
                  <td className="comm-table__product-name">
                    Elite <span className="comm-table__tag-signature">SIGNATURE</span>
                  </td>
                  <td style={{ textAlign: 'center' }} className="comm-table__tech">Nano Titanium Sputter</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--uvr">100%</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--irr">95%</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__tech">10 Yr</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--price">RM3,400</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--price">RM3,800</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--price">RM4,400</td>
                </tr>
                <tr className="comm-table__row--signature">
                  <td className="comm-table__product-name">
                    Diamond <span className="comm-table__tag-signature">SIGNATURE</span>
                  </td>
                  <td style={{ textAlign: 'center' }} className="comm-table__tech">Multi Layer Titanium Sputter</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--uvr">100%</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--irr">98%</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__tech">10 Yr</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--price">RM4,000</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--price">RM4,400</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--price">RM5,200</td>
                </tr>
                <tr className="comm-table__row--signature">
                  <td className="comm-table__product-name">
                    Diamond X <span className="comm-table__tag-signature">SIGNATURE</span>
                  </td>
                  <td style={{ textAlign: 'center' }} className="comm-table__tech">Multi Layer Silver Sputter</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--uvr">100%</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--irr">98%</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__tech">10 Yr</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--price">RM4,400</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--price">RM4,800</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--price">RM5,600</td>
                </tr>
                <tr className="comm-table__row--signature">
                  <td className="comm-table__product-name">
                    Titan X <span className="comm-table__tag-signature">SIGNATURE</span>
                  </td>
                  <td style={{ textAlign: 'center' }} className="comm-table__tech">Multi Layer Silver Sputter</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--uvr">100%</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--irr">&gt;99%</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__tech">10 Yr</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--price">RM5,000</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--price">RM5,600</td>
                  <td style={{ textAlign: 'center' }} className="comm-table__val--price">RM6,200</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="comm-table-footnote">
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
