import { useState, useEffect } from 'react';

export default function DealershipPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    location: '',
    businessType: '',
    volume: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // FAQ State
  const [activeFaq, setActiveFaq] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.businessName.trim()) newErrors.businessName = 'Business name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.location.trim()) newErrors.location = 'State / City is required';
    if (!formData.businessType) newErrors.businessType = 'Please select a business type';
    if (!formData.volume) newErrors.volume = 'Please select monthly film volume';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Scroll to the first error
      const firstErrorKey = Object.keys(validationErrors)[0];
      const errorEl = document.getElementsByName(firstErrorKey)[0];
      if (errorEl) {
        errorEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        errorEl.focus();
      }
      return;
    }

    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Scroll to form card top
      const formCard = document.getElementById('dealer-form-card');
      if (formCard) {
        formCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 1500);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const scrollToForm = () => {
    const formSection = document.getElementById('apply-form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    {
      title: 'Zero Partnership Fees',
      desc: 'Become a dealer without franchising fees or hidden licensing costs. Simply purchase stock and sell under the authorized dealer banner.',
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    },
    {
      title: 'Flexible Order MOQ',
      desc: 'Select from starting inventory packages tailored to your scale. Support for rolls, cut-lengths, and priority stock dispatch to reduce overhead.',
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
        </svg>
      )
    },
    {
      title: 'Marketing & POS Material',
      desc: 'Receive digital dealer badge assets, physical brochures, branded posters, and interactive solar heat demo kits to boost in-store sales.',
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
        </svg>
      )
    },
    {
      title: 'Portal e-Warranty System',
      desc: 'Get login credentials to the official IrisPro e-Warranty portal, enabling you to register installations and issue digital warranty cards instantly.',
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
      )
    },
    {
      title: 'Priority Technician Training',
      desc: 'Authorized dealers receive priority invites to technical workshops, new product rollouts, and custom training sessions for window film styling.',
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
        </svg>
      )
    },
    {
      title: 'Reliable Stock Logistics',
      desc: 'Enjoy rapid order packing and shipping directly from HQ warehouse to ensure your detailing or tinting business never experiences downtime.',
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zm12 0a2 2 0 11-4 0 2 2 0 014 0zm0-7v7m0-7H8m13 0l-3-5H9M8 10v7m0-7H3m0 0v7m2 0h10M3 10V6a2 2 0 012-2h3"/>
        </svg>
      )
    }
  ];

  const steps = [
    { num: '01', title: 'Submit Inquiry', desc: 'Provide your shop location, monthly volume, and contact details below.' },
    { num: '02', title: 'Shop Review', desc: 'Our regional sales manager reviews your business details.' },
    { num: '03', title: 'Stock Selection', desc: 'Choose your starting package (CS PRO, Titanium, or Signature Series).' },
    { num: '04', title: 'Authorized Branding', desc: 'Receive dealer portal access, demo kits, and physical store branding.' }
  ];

  const faqs = [
    {
      q: 'Do dealers get exclusive territories?',
      a: 'Dealerships are non-exclusive. However, we actively monitor dealer placement density to prevent oversaturation and protect pricing stability in your local area.'
    },
    {
      q: 'What is the minimum starting order size?',
      a: 'We offer flexible entry packages. Our regional sales team will provide stock configurations matching your current volume, from partial rolls to full automotive bundle packages.'
    },
    {
      q: 'How does the e-Warranty system work for dealers?',
      a: 'Every authorized dealer is registered in the IrisPro e-Warranty portal. You simply log in, submit the customer\'s plate/chassis number, vehicle model, and film series to issue the official 10-year digital warranty.'
    }
  ];

  return (
    <div className="product-detail-page partnership-page bg-pattern" id="dealership-view">
      {/* Hero Section */}
      <section className="partner-hero">
        <div className="partner-hero__bg-grid" />
        <div className="partner-hero__inner">
          <div className="partner-hero__breadcrumbs">
            <a href="#/">Home</a>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
            <span className="text-red">Dealer Program</span>
          </div>
          <div className="partner-hero__badge">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            <span>Authorized Dealer Program</span>
          </div>
          <h1 className="partner-hero__title">
            Become an <span className="red-gradient">Authorized Dealer</span>
          </h1>
          <p className="partner-hero__lead">
            Distribute double-patented solar film technology. Upgrade your shop's product catalog with zero franchise fees, low starting MOQ, sales support, and digital warranty portal access.
          </p>
          <button 
            className="navbar__cta" 
            onClick={scrollToForm}
            style={{ marginTop: '2rem', display: 'inline-flex', padding: '0.85rem 1.75rem' }}
            id="hero-apply-btn"
          >
            Partner as a Dealer
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="product-section__container">
          <div className="comm-section-header">
            <div className="comm-section-header__badge" style={{ color: '#d20f18', backgroundColor: 'rgba(210,15,24,0.05)', borderColor: 'rgba(210,15,24,0.1)' }}>
              Dealer Advantages
            </div>
            <div className="comm-section-header__line" style={{ background: 'linear-gradient(90deg, rgba(210,15,24,0.2) 0%, transparent 100%)' }} />
            <span className="comm-section-header__text">Dealer Partnership Program</span>
          </div>

          <div className="benefits-grid">
            {benefits.map((b, idx) => (
              <div key={idx} className="benefit-card">
                <div className="benefit-card__icon-wrapper">{b.icon}</div>
                <h3 className="benefit-card__title">{b.title}</h3>
                <p className="benefit-card__desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="steps-section">
        <div className="product-section__container">
          <div className="comm-section-header">
            <div className="comm-section-header__badge" style={{ color: '#d20f18', backgroundColor: 'rgba(210,15,24,0.05)', borderColor: 'rgba(210,15,24,0.1)' }}>
              Partner Checklist
            </div>
            <div className="comm-section-header__line" style={{ background: 'linear-gradient(90deg, rgba(210,15,24,0.2) 0%, transparent 100%)' }} />
            <span className="comm-section-header__text">How to Become an Authorized Dealer</span>
          </div>

          <div className="steps-grid">
            {steps.map((s, idx) => (
              <div key={idx} className="step-card">
                <span className="step-card__num">{s.num}</span>
                <h3 className="step-card__title">{s.title}</h3>
                <p className="step-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="form-section" id="apply-form-section">
        <div className="product-section__container">
          <div className="partnership-form-card" id="dealer-form-card">
            {!isSubmitted ? (
              <>
                <h2 className="partnership-form-card__title">Dealer Inquiry Form</h2>
                <p className="partnership-form-card__subtitle">Please submit your shop details and current monthly volume. Our regional manager will get in touch with starting packages.</p>
                
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="dealer-name">Full Name *</label>
                      <input 
                        type="text" 
                        id="dealer-name"
                        name="name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. John Doe"
                        className="form-input"
                        error={errors.name ? 'true' : 'false'}
                      />
                      {errors.name && <span className="form-error-msg">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="dealer-business-name">Business / Company Name *</label>
                      <input 
                        type="text" 
                        id="dealer-business-name"
                        name="businessName" 
                        value={formData.businessName}
                        onChange={handleInputChange}
                        placeholder="e.g. JB Tint Specialists"
                        className="form-input"
                        error={errors.businessName ? 'true' : 'false'}
                      />
                      {errors.businessName && <span className="form-error-msg">{errors.businessName}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="dealer-phone">Business Phone *</label>
                      <input 
                        type="tel" 
                        id="dealer-phone"
                        name="phone" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +6012-3456789"
                        className="form-input"
                        error={errors.phone ? 'true' : 'false'}
                      />
                      {errors.phone && <span className="form-error-msg">{errors.phone}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="dealer-email">Email Address *</label>
                      <input 
                        type="email" 
                        id="dealer-email"
                        name="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@email.com"
                        className="form-input"
                        error={errors.email ? 'true' : 'false'}
                      />
                      {errors.email && <span className="form-error-msg">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="dealer-location">Shop State / City *</label>
                      <input 
                        type="text" 
                        id="dealer-location"
                        name="location" 
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="e.g. Georgetown, Penang"
                        className="form-input"
                        error={errors.location ? 'true' : 'false'}
                      />
                      {errors.location && <span className="form-error-msg">{errors.location}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="dealer-business-type">Type of Business *</label>
                      <select 
                        id="dealer-business-type"
                        name="businessType" 
                        value={formData.businessType}
                        onChange={handleInputChange}
                        className="form-input"
                        error={errors.businessType ? 'true' : 'false'}
                      >
                        <option value="">Select business type</option>
                        <option value="tint">Existing Tint Shop</option>
                        <option value="detailer">Car Detailing / Wrap Shop</option>
                        <option value="showroom">Car Accessories / Showroom</option>
                        <option value="architectural">Architectural Builder / Contractor</option>
                        <option value="other">Other / New Entrepreneur</option>
                      </select>
                      {errors.businessType && <span className="form-error-msg">{errors.businessType}</span>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="dealer-volume">Average Monthly Film Installation Volume *</label>
                    <select 
                      id="dealer-volume"
                      name="volume" 
                      value={formData.volume}
                      onChange={handleInputChange}
                      className="form-input"
                      error={errors.volume ? 'true' : 'false'}
                    >
                      <option value="">Select monthly volume</option>
                      <option value="under-10">Less than 10 cars</option>
                      <option value="10-30">10 to 30 cars</option>
                      <option value="30-50">30 to 50 cars</option>
                      <option value="over-50">More than 50 cars</option>
                      <option value="architectural-only">Architectural tinting focus only</option>
                    </select>
                    {errors.volume && <span className="form-error-msg">{errors.volume}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="dealer-message">Tell us about your Business</label>
                    <textarea 
                      id="dealer-message"
                      name="message" 
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4" 
                      placeholder="Specify your current brand distribution, space capacity, or specific starting rolls you are interested in..."
                      className="form-input"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="form-submit-btn"
                    disabled={isSubmitting}
                    id="dealer-submit-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" className="animate-spin" style={{ animation: 'spin 1s linear infinite' }}>
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25"/>
                          <path d="M12 2v4m0 12v4M2 12h4m12 0h4"/>
                        </svg>
                        <span>Verifying...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Dealer Application</span>
                        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <polyline points="9 18 15 12 9 6"/>
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              <div className="form-success-view">
                <div className="form-success-view__icon">
                  <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h2 className="form-success-view__title">Application Received!</h2>
                <p className="form-success-view__desc">
                  Thank you, <strong>{formData.name}</strong>. Your dealer partnership application for <strong>{formData.businessName}</strong> at <strong>{formData.location}</strong> has been registered. An IrisPro sales supervisor will review your location and get back to you with wholesale pricing logs within 24 hours.
                </p>
                <button 
                  className="navbar__cta" 
                  onClick={() => setIsSubmitted(false)}
                  style={{ marginTop: '2.5rem', display: 'inline-flex', padding: '0.85rem 1.75rem' }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="faq-section">
        <div className="product-section__container">
          <div className="comm-section-header">
            <div className="comm-section-header__badge" style={{ color: '#d20f18', backgroundColor: 'rgba(210,15,24,0.05)', borderColor: 'rgba(210,15,24,0.1)' }}>
              Got Questions?
            </div>
            <div className="comm-section-header__line" style={{ background: 'linear-gradient(90deg, rgba(210,15,24,0.2) 0%, transparent 100%)' }} />
            <span className="comm-section-header__text">Dealer FAQ</span>
          </div>

          <div className="faq-accordion-group">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`faq-item ${activeFaq === idx ? 'is-open' : ''}`}>
                <button 
                  className="faq-trigger" 
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={activeFaq === idx}
                >
                  <span className="faq-question">{faq.q}</span>
                  <svg className="faq-chevron" width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L8 8L15 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div className="faq-content">
                  <p className="faq-answer">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
