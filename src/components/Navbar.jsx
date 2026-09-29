import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logoImg from '../assets/NexAppra.png';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  /* ---- Scroll listener ---- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ---- Close menu on resize to desktop ---- */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  /* ---- Get Started: navigate to /contact ---- */
  const handleGetStarted = useCallback((e) => {
    e.preventDefault();
    setMenuOpen(false);
    navigate('/contact');
  }, [navigate]);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="container navbar__inner">
     {/* Logo */}
        <Link to="/" className="navbar__logo" id="nav-logo" onClick={() => setMenuOpen(false)}>
          <img src={logoImg} alt="NexAppra Logo" className="navbar__logo-img" />
          <div className="navbar__logo-text-group">
            <span className="navbar__logo-title">
              <span className="navbar__logo-nex">Nex</span>
              <span className="navbar__logo-appra">Appra</span>
            </span>
            <span className="navbar__logo-subtitle">Software House</span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="navbar__links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link
                to={href}
                id={`nav-link-${label.toLowerCase()}`}
                className={`navbar__link${location.pathname === href ? ' active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button
          className="btn btn-primary navbar__cta"
          id="nav-cta"
          onClick={handleGetStarted}
          type="button"
        >
          Get Started
        </button>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
          id="nav-hamburger"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile-menu${menuOpen ? ' open' : ''}`} id="nav-mobile-menu">
        {NAV_LINKS.map(({ label, href }) => (
          <Link
            key={href}
            to={href}
            id={`nav-mobile-${label.toLowerCase()}`}
            className={`navbar__mobile-link${location.pathname === href ? ' active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </Link>
        ))}
        <button
          className="btn btn-primary navbar__mobile-cta"
          id="nav-mobile-cta"
          onClick={handleGetStarted}
          type="button"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}
