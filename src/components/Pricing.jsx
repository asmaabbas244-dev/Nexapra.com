import React from 'react';
import { useNavigate } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Pricing.css';

const tiers = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$2,999',
    subtitle: 'Perfect for MVPs and startups',
    features: [
      'Single page application',
      'Responsive design',
      'Basic SEO setup',
      '2 revision rounds',
      '1 month support',
    ],
    cta: 'Get Started',
    btnClass: 'btn btn-outline',
    popular: false,
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '$7,999',
    subtitle: 'For growing businesses',
    features: [
      'Multi-page web app',
      'Custom UI/UX design',
      'API integration',
      'Advanced SEO',
      '5 revision rounds',
      '3 months support',
      'Analytics dashboard',
    ],
    cta: 'Get Started',
    btnClass: 'btn btn-primary',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '$14,999+',
    subtitle: 'For large-scale solutions',
    features: [
      'Full-stack development',
      'Mobile app included',
      'AI/ML integration',
      'Cloud infrastructure',
      'Unlimited revisions',
      '12 months support',
      'Dedicated team',
      'Priority support',
    ],
    cta: 'Contact Us',
    btnClass: 'btn btn-outline',
    popular: false,
  },
];

export default function Pricing() {
  const sectionRef = useScrollAnimation();
  const navigate = useNavigate();

  return (
    <section id="pricing" className="section pricing" ref={sectionRef}>
      <div className="container">
        <header className="pricing__header reveal">
          <span className="section-label">Pricing Plans</span>
          <h2 className="section-title">
            Invest in Your <span className="text-gradient">Growth</span>
          </h2>
          <p className="section-subtitle">
            Transparent pricing. No hidden fees. Cancel anytime.
          </p>
        </header>

        <div className="pricing__grid">
          {tiers.map((tier, index) => (
            <article
              key={tier.id}
              className={`pricing__card glass-card reveal-scale delay-${index + 1}${
                tier.popular ? ' pricing__card--popular' : ''
              }`}
            >
              {tier.popular && (
                <span className="pricing__badge" id="pricing-badge-popular">
                  Most Popular
                </span>
              )}

              <h3 className="pricing__tier-name">{tier.name}</h3>
              <p className="pricing__tier-subtitle">{tier.subtitle}</p>

              <div className="pricing__price">
                <span className="pricing__amount">{tier.price}</span>
                <span className="pricing__suffix">/project</span>
              </div>

              <ul className="pricing__features">
                {tier.features.map((feature) => (
                  <li key={feature} className="pricing__feature">
                    <svg
                      className="pricing__check"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 9.5L7.5 13L14 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                id={`pricing-cta-${tier.id}`}
                className={tier.btnClass}
                type="button"
                onClick={() => navigate('/contact')}
              >
                {tier.cta}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
