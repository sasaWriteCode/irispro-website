import { useState, useEffect } from 'react';

export default function FranchisePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    background: '',
    capital: '',
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
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.location.trim()) newErrors.location = 'Target location is required';
    if (!formData.capital) newErrors.capital = 'Please select a capital range';
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
      const formCard = document.getElementById('franchise-form-card');
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
      title: 'Double-Patented Technology',
      desc: 'Deliver exclusive access to Malaysia\'s only double-patented UV420 optical solar films with up to 100% UV and 99% Blue Light rejection.',
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
      )
    },
    {
      title: 'High Profit Margins',
      desc: 'Premium brand positioning in high-end automotive, residential, and commercial sectors ensures high average ticket size and strong margins.',
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    },
    {
      title: 'Central Lead Routing',
      desc: 'Benefit from corporate lead generation campaigns. Customer inquiries in your exclusive territory are routed directly to your franchise center.',
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      )
    },
    {
      title: 'HQ Technical Certification',
      desc: 'We provide exhaustive installer training at HQ to certify your technicians in advanced clean-room solar film application techniques.',
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
        </svg>
      )
    },
    {
      title: 'Territory Protection',
      desc: 'Secure local growth with a legally protected regional footprint, preventing other IrisPro franchise centers from operating within your borders.',
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      )
    },
    {
      title: 'Ongoing Business Audits',
      desc: 'Receive continuous guidance with operational checks, stock optimization, marketing assets, and regional business audits for long-term growth.',
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2"/>
        </svg>
      )
    }
  ];

  const steps = [
    { num: '01', title: 'Application', desc: 'Fill in target area, experience, and contact details below.' },
    { num: '02', title: 'Discovery Call', desc: 'Our corporate expansion team conducts a qualification review call.' },
    { num: '03', title: 'Site Evaluation', desc: 'We co-evaluate location viability, traffic flow, and demographic data.' },
    { num: '04', title: 'Certification', desc: 'Your operational staff undergoes rigorous technical and sales training.' },
    { num: '05', title: 'Launch Day', desc: 'Grand launch backed by regional advertising and local POS banners.' }
  ];

  const faqs = [
    {
      q: 'Do I need window film installation experience to qualify?',
      a: 'Prior experience is helpful but not mandatory. We provide complete technical certification at our HQ for your installers, alongside operational training for business management.'
    },
    {
      q: 'What is the typical timeframe to open an authorized franchise center?',
      a: 'It typically takes between 2 to 3 months from signing the Franchise Agreement, evaluating the location, setting up the clean-room bay, to the grand opening.'
    },
    {
      q: 'How are exclusive territories allocated?',
      a: 'Territories are mapped out based on population density, automotive concentration, and regional demand. Once assigned, you possess exclusive operating rights in that area.'
    }
  ];

  return (
    <div className="product-detail-page partnership-page bg-pattern" id="franchise-view">
      {/* Hero Section */}
      <section className="partner-hero">
        <div className="partner-hero__bg-grid" />
        <div className="partner-hero__inner">
          <div className="partner-hero__breadcrumbs">
            <a href="#/">Home</a>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
            <span className="text-red">Franchise Program</span>
          </div>
          <div className="partner-hero__badge">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
            <span>Corporate Franchise Opportunity</span>
          </div>
          <h1 className="partner-hero__title">
            Partner with <span className="red-gradient">IrisPro</span>
          </h1>
          <p className="partner-hero__lead">
            Own a premium window film center delivering Malaysia's only double-patented optical solar protection. Access high-margin markets with corporate lead support and technical enablement.
          </p>
          <button 
            className="navbar__cta" 
            onClick={scrollToForm}
            style={{ marginTop: '2rem', display: 'inline-flex', padding: '0.85rem 1.75rem' }}
            id="hero-apply-btn"
          >
            Apply for Franchise
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="product-section__container">
          <div className="comm-section-header">
            <div className="comm-section-header__badge" style={{ color: '#d20f18', backgroundColor: 'rgba(210,15,24,0.05)', borderColor: 'rgba(210,15,24,0.1)' }}>
              Franchise Benefits
            </div>
            <div className="comm-section-header__line" style={{ background: 'linear-gradient(90deg, rgba(210,15,24,0.2) 0%, transparent 100%)' }} />
            <span className="comm-section-header__text">Why Partner with IrisPro?</span>
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
              The Road to Opening
            </div>
            <div className="comm-section-header__line" style={{ background: 'linear-gradient(90deg, rgba(210,15,24,0.2) 0%, transparent 100%)' }} />
            <span className="comm-section-header__text">5 Steps to Launch Your Franchise</span>
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
          <div className="partnership-form-card" id="franchise-form-card">
            {!isSubmitted ? (
              <>
                <h2 className="partnership-form-card__title">Franchise Inquiry</h2>
                <p className="partnership-form-card__subtitle">Submit details regarding your business background and target location to start qualification review.</p>
                
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="franchise-name">Full Name *</label>
                      <input 
                        type="text" 
                        id="franchise-name"
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
                      <label className="form-label" htmlFor="franchise-phone">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="franchise-phone"
                        name="phone" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +6012-3456789"
                        className="form-input"
                        error={errors.phone ? 'true' : 'false'}
                      />
                      {errors.phone && <span className="form-error-msg">{errors.phone}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="franchise-email">Email Address *</label>
                      <input 
                        type="email" 
                        id="franchise-email"
                        name="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@email.com"
                        className="form-input"
                        error={errors.email ? 'true' : 'false'}
                      />
                      {errors.email && <span className="form-error-msg">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="franchise-location">Target Location / City *</label>
                      <input 
                        type="text" 
                        id="franchise-location"
                        name="location" 
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="e.g. Puchong, Selangor"
                        className="form-input"
                        error={errors.location ? 'true' : 'false'}
                      />
                      {errors.location && <span className="form-error-msg">{errors.location}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="franchise-background">Current Business / Occupation</label>
                      <input 
                        type="text" 
                        id="franchise-background"
                        name="background" 
                        value={formData.background}
                        onChange={handleInputChange}
                        placeholder="e.g. Auto Detailer Shop Owner"
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="franchise-capital">Estimated Investment Capital *</label>
                      <select 
                        id="franchise-capital"
                        name="capital" 
                        value={formData.capital}
                        onChange={handleInputChange}
                        className="form-input"
                        error={errors.capital ? 'true' : 'false'}
                      >
                        <option value="">Select capital range</option>
                        <option value="50k-100k">RM 50,000 - RM 100,000</option>
                        <option value="100k-200k">RM 100,000 - RM 200,000</option>
                        <option value="200k+">RM 200,000 +</option>
                      </select>
                      {errors.capital && <span className="form-error-msg">{errors.capital}</span>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="franchise-message">Additional Message / Inquiries</label>
                    <textarea 
                      id="franchise-message"
                      name="message" 
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4" 
                      placeholder="Share details on target showroom, timeline, or business background..."
                      className="form-input"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="form-submit-btn"
                    disabled={isSubmitting}
                    id="franchise-submit-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" className="animate-spin" style={{ animation: 'spin 1s linear infinite' }}>
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25"/>
                          <path d="M12 2v4m0 12v4M2 12h4m12 0h4"/>
                        </svg>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Franchise Application</span>
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
                <h2 className="form-success-view__title">Enquiry Received!</h2>
                <p className="form-success-view__desc">
                  Thank you, <strong>{formData.name}</strong>. Your franchise inquiry for <strong>{formData.location}</strong> has been logged. An IrisPro expansion director will review your details and reach out within 2 business days.
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
            <span className="comm-section-header__text">Franchise FAQ</span>
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
