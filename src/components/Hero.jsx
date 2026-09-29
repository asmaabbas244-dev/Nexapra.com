import { useEffect, useRef, lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { textReveal, staggerReveal } from '../utils/animations';
import './Hero.css';

const ThreeScene = lazy(() => import('./ThreeScene'));

export default function Hero() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const goToContact = () => navigate('/contact');

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const badge = section.querySelector('.hero__badge');
    const label = section.querySelector('.hero__label');
    const headline = section.querySelector('.hero__headline');
    const subtext = section.querySelector('.hero__subtext');
    const ctas = section.querySelector('.hero__ctas');
    const trust = section.querySelector('.hero__trust');

    if (badge) textReveal(badge, { delay: 0.1 });
    if (label) textReveal(label, { delay: 0.25 });
    if (headline) textReveal(headline, { delay: 0.4 });
    if (subtext) textReveal(subtext, { delay: 0.6 });

    const staggerEls = [ctas, trust].filter(Boolean);
    if (staggerEls.length) {
      staggerReveal(staggerEls, { delay: 0.8, stagger: 0.2 });
    }
  }, []);

  return (
    <section className="hero" id="home" ref={sectionRef}>
      <div className="hero__overlay" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">

          <span className="hero__label" id="hero-label">
            Build. Innovate. Scale.
          </span>

        <h1 className="hero__headline" id="hero-headline">
          We Build Scalable
          <span className="hero__headline-gradient">Digital Products</span>
        </h1>

        <p className="hero__subtext" id="hero-subtext">
          From concept to launch, we craft premium web apps, mobile solutions,
          and AI-powered platforms that drive growth.
        </p>

        <div className="hero__ctas" id="hero-ctas">
          <button
            className="btn btn-primary btn-lg"
            id="hero-cta-start"
            onClick={goToContact}
            type="button"
          >
            Get Started
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
          <button
            className="btn btn-outline btn-lg"
            id="hero-cta-consult"
            onClick={() => window.open('https://calendly.com/hr-nexappra/30min', '_blank')}
            type="button"
          >
            30 Min Free Consultation
          </button>
        </div>

        <p className="hero__trust" id="hero-trust">
          <span className="hero__trust-dot" aria-hidden="true" />
          Trusted by 20+ businesses worldwide
        </p>
        </div>

        <div className="hero__visual" id="hero-visual">
          <Suspense fallback={null}>
            <ThreeScene />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
