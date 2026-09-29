import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logoImg from '../assets/NexAppra.png';

const servicesLinks = [
  'Web Development',
  'Mobile Apps',
  'AI Solutions',
  'UI/UX Design',
  'SaaS Development',
];

const companyLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Our Services', to: '/services' },
  { label: 'Case Studies', to: '/#projects' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="footer">
      {/* Gradient top border */}
      <div className="footer__border" aria-hidden="true" />

      <div className="container">
        <div className="footer__grid">
          {/* ---------- Column 1 — Brand ---------- */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo" id="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <img src={logoImg} alt="NexAppra Logo" style={{ height: '34px', width: 'auto', objectFit: 'contain' }} />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.15' }}>
              <span style={{ fontSize: '1.2rem', fontWeight: '800', letterSpacing: '-0.02em' }}>
                <span className="footer__logo-nex">Nex</span>
                <span className="footer__logo-appra">Appra</span>
              </span>
              <span style={{ fontSize: '9px', fontWeight: '600', color: 'var(--color-text-secondary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Software House
              </span>
            </div>
          </Link>
            <p className="footer__tagline">Build. Innovate. Scale.</p>
            <p className="footer__desc">
              We craft premium digital products that drive growth and innovation.
            </p>

            <nav className="footer__socials" aria-label="Social media">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/nexappra/" target="_blank" rel="noopener noreferrer" className="footer__social" id="footer-social-linkedin" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="1" y="1" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.4" />
                  <text x="9" y="13" textAnchor="middle" fill="currentColor" fontSize="9" fontWeight="700">in</text>
                </svg>
              </a>
              {/* GitHub */}
              <a href="https://github.com/Nexappra" target="_blank" rel="noopener noreferrer" className="footer__social" id="footer-social-github" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.4" />
                  <text x="9" y="13" textAnchor="middle" fill="currentColor" fontSize="10" fontWeight="700">G</text>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/nexappra?igsh=MTc4bmIzczQwZ3B3" target="_blank" rel="noopener noreferrer" className="footer__social" id="footer-social-instagram" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="1.5" y="1.5" width="15" height="15" rx="4.5" stroke="currentColor" strokeWidth="1.4" />
                  <circle cx="9" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.4" />
                  <circle cx="13.5" cy="4.5" r="0.9" fill="currentColor" />
                </svg>
              </a>
              {/* Twitter / X */}
              <a href="#" className="footer__social" id="footer-social-x" aria-label="X / Twitter">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.4" />
                  <text x="9" y="13" textAnchor="middle" fill="currentColor" fontSize="10" fontWeight="700">X</text>
                </svg>
              </a>
            </nav>
          </div>

          {/* ---------- Column 2 — Services ---------- */}
          <nav className="footer__col" aria-label="Services">
            <h4 className="footer__heading">Services</h4>
            <ul className="footer__links">
              {servicesLinks.map((link) => (
                <li key={link}>
                  <Link to="/services" className="footer__link">{link}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ---------- Column 3 — Company ---------- */}
          <nav className="footer__col" aria-label="Company">
            <h4 className="footer__heading">Company</h4>
            <ul className="footer__links">
              {companyLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="footer__link">{label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ---------- Column 4 — Contact ---------- */}
          <div className="footer__col">
            <h4 className="footer__heading">Contact</h4>
            <ul className="footer__links">
              <li>
                <a href="mailto:info@nexappra.com" className="footer__link" id="footer-email">
                  info@nexappra.com
                </a>
              </li>
              <li>
                <a href="mailto:ceo@nexappra.com" className="footer__link" id="footer-ceo-email" title="For Complaints & Official Queries">
                  ceo@nexappra.com
                </a>
              </li>
              <li>
                <a href="https://nexappra.com" className="footer__link" id="footer-website">
                  nexappra.com
                </a>
              </li>
              <li>
                <Link to="/contact" className="footer__link footer__link--cta" id="footer-get-started">
                  Get Started →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ---------- Bottom bar ---------- */}
        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} NexAppra. All rights reserved.
          </p>
          <p className="footer__credit">
            Designed &amp; Developed by NexAppra
          </p>
        </div>
      </div>

      {/* Back to top */}
      <button
        className={`footer__back-to-top${showBackToTop ? ' visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
        type="button"
        id="back-to-top"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      </button>
    </footer>
  );
}
