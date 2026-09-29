import { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Process.css';

const steps = [
  {
    id: 1,
    title: 'Discovery',
    description: 'We dive deep into your vision, goals, and requirements.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2C10.686 2 8 4.686 8 8c0 2.217 1.197 4.16 2.981 5.209L10 18h8l-.981-4.791C18.803 12.16 20 10.217 20 8c0-3.314-2.686-6-6-6z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 21h8M11 24h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="14" cy="8" r="1.5" fill="currentColor" opacity="0.6"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Design',
    description: 'Wireframes, prototypes, and stunning UI crafted for conversion.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5 3L25 11.5L11.5 25H3v-8.5L16.5 3z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 6.5l8.5 8.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M3 25l5.5-5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Development',
    description: 'Clean, scalable code built with modern tech stack.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 8L3 14l6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 8l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 4l-4 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Testing',
    description: 'Rigorous QA, performance testing, and security audits.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2L4 7v7c0 5.25 4.25 10.15 10 11.5 5.75-1.35 10-6.25 10-11.5V7L14 2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.5 14l3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Launch',
    description: 'Deployment, monitoring, and ongoing support.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2c0 0-7 5-7 14l3 3 4-4 4 4 3-3c0-9-7-14-7-14z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="14" cy="13" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 22l-3 4M18 22l3 4M14 20v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Process() {
  const sectionRef = useScrollAnimation();
  const [activeStep] = useState(2); // 0-indexed, Development is active by default

  return (
    <section id="process" className="section process" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="process__header reveal">
          <span className="section-label">How We Work</span>
          <h2 className="section-title">
            Our Development <span className="text-gradient">Process</span>
          </h2>
          <p className="section-subtitle">
            From idea to launch in 5 streamlined steps
          </p>
        </div>

        {/* Timeline */}
        <div className="process__timeline">
          {/* Connecting line */}
          <div className="process__line" aria-hidden="true" />

          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`process__step reveal ${
                index === activeStep ? 'process__step--active' : ''
              } delay-${index + 1}`}
              id={`process-step-${step.id}`}
            >
              {/* Numbered circle with icon */}
              <div className="process__icon-wrapper">
                <div className="process__number">{step.id}</div>
                <div className="process__icon">{step.icon}</div>
              </div>

              {/* Content */}
              <div className="process__content">
                <h3 className="process__title">{step.title}</h3>
                <p className="process__description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="process__bg-glow" aria-hidden="true" />
    </section>
  );
}
