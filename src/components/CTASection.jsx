import { useNavigate } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './CTASection.css';

export default function CTASection() {
  const sectionRef = useScrollAnimation();
  const navigate = useNavigate();

  const goToContact = (e) => {
    e.preventDefault();
    navigate('/contact');
  };

  return (
    <section className="cta-section" ref={sectionRef}>
      <div className="container">
        <div className="cta-section__inner reveal">
          <span className="cta-section__badge">Let&apos;s Collaborate</span>

          <h2 className="cta-section__title">
            Ready to Build Your{' '}
            <span className="text-gradient">Next Big Idea?</span>
          </h2>

          <p className="cta-section__subtitle">
            Let&apos;s discuss your project and create something extraordinary together.
            From concept to launch, we&apos;re with you every step of the way.
          </p>

          <div className="cta-section__buttons">
            <button
              className="btn btn-primary btn-lg"
              id="cta-start-project"
              onClick={goToContact}
              type="button"
            >
              Start Your Project
            </button>
            <button
              className="btn btn-outline btn-lg"
              id="cta-schedule-call"
              onClick={goToContact}
              type="button"
            >
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
