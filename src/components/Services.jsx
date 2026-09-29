import React, { useState, useEffect, useRef } from 'react';
import { staggerReveal } from '../utils/animations';
import './Services.css';

import webIcon from '../assets/icons/Web Application Development.png';
import mobileIcon from '../assets/icons/Mobile App Solutions.png';
import aiIcon from '../assets/icons/AI & Machine Learning.png';
import cloudIcon from '../assets/icons/Cloud & SaaS Architecture.png';
import uiuxIcon from '../assets/icons/UIUX Design.png';
import gameIcon from '../assets/icons/Game Development (AndroidMobile Games).png';
import securityIcon from '../assets/icons/Cyber Security Solution.png';

const SERVICES = [
  {
    title: 'Web Application Development',
    desc: 'Custom, high-performance web platforms built with React, Node.js, and modern architectures ensuring scalability and security.',
    icon: webIcon,
    benefits: ['Responsive Single Page Apps', 'Progressive Web Apps (PWA)', 'High-conversion UI/UX'],
    caseStudy: { client: 'FinTech Startup', result: 'Increased user retention by 45% with a new React dashboard.' }
  },
  {
    title: 'Mobile App Solutions',
    desc: 'Native and cross-platform mobile experiences that users love, engineered for flawless performance on both iOS and Android.',
    icon: mobileIcon,
    benefits: ['React Native / Flutter', 'Offline Capabilities', 'Seamless App Store Deployment'],
    caseStudy: { client: 'Health App', result: 'Achieved 100k+ downloads in the first month post-launch.' }
  },
  {
    title: 'AI & Machine Learning',
    desc: 'Integrate generative AI, predictive models, and intelligent automation into your core business processes.',
    icon: aiIcon,
    benefits: ['Custom LLM Integrations', 'Predictive Analytics', 'Automated Workflows'],
    caseStudy: { client: 'E-commerce Platform', result: 'Boosted sales by 20% using AI-driven product recommendations.' }
  },
  {
    title: 'Cloud & SaaS Architecture',
    desc: 'End-to-end scalable infrastructure design, ensuring your SaaS product handles thousands of concurrent users smoothly.',
    icon: cloudIcon,
    benefits: ['AWS / GCP / Azure Deployment', 'Microservices Architecture', 'CI/CD Pipelines'],
    caseStudy: { client: 'Logistics SaaS', result: 'Reduced cloud infrastructure costs by 30% via optimization.' }
  },
  {
    title: 'UI/UX Design',
    desc: 'Crafting intuitive, user-centric wireframes and visually stunning interfaces that elevate user engagement and product adoption.',
    icon: uiuxIcon,
    benefits: ['Wireframing & Prototyping', 'User Research & Persona Mapping', 'Responsive Web & Mobile Design'],
    caseStudy: { client: 'EDTECH PLATFORM', result: 'Boosted course completion rates by 35% through a simplified learning dashboard.' }
  },
  {
    title: 'Game Development\n(Android/Mobile Games)',
    desc: 'Creating immersive, high-performance 2D and 3D mobile games with smooth controls and engaging gameplay mechanics for Android and iOS.',
    icon: gameIcon,
    benefits: ['Cross-Platform Game Engines (Unity)', 'Physics & Gameplay Programming', 'In-App Purchases & Ads Integration'],
    caseStudy: { client: 'HYPER-CASUAL STUDIO', result: '1M+ downloads in 2 months by optimizing performance and touch controls.' }
  },
  {
    title: 'Cyber Security Solution',
    desc: 'Protecting your digital assets with advanced threat detection, secure cloud infrastructure hardening, and robust data encryption practices.',
    icon: securityIcon,
    benefits: ['Vulnerability & Penetration Testing', 'End-to-End Data Encryption', 'Incident Response & Threat Mitigation'],
    caseStudy: { client: 'FINANCE & BANKING PORTAL', result: 'Blocked over 10k+ daily automated cyber attacks by implementing a zero-trust architecture.' }
  },
];

export default function Services() {
  const containerRef = useRef(null);
  const [expandedIndex, setExpandedIndex] = useState(null); 

  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll('.service-card');
    staggerReveal(cards, { delay: 0.2, stagger: 0.15 });
  }, []);

  const toggleExpand = (idx) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="services" className="section services" ref={containerRef}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Premium Software Engineering</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            We transform complex problems into elegant, scalable digital products that drive your business forward.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div 
                key={idx} 
                className={`service-card reveal ${isExpanded ? 'selected' : ''}`}
              >
                {/* Header Row: Title on Left, Icon on Right */}
                <div className="service-card-header">
                  <h3 className="service-title" style={{ whiteSpace: 'pre-line' }}>{service.title}</h3>
                  <div className="service-icon-wrapper">
                    <img src={service.icon} alt={service.title} className="service-3d-icon" />
                  </div>
                </div>

                {/* Description */}
                <p className="service-desc">{service.desc}</p>
                
                {/* Footer with WHAT YOU GET and Clickable Arrow Button */}
                <div 
                  className="service-card-footer"
                  onClick={() => toggleExpand(idx)}
                >
                  <span className="what-you-get-text">WHAT YOU GET</span>
                  <div className={`card-arrow-btn ${isExpanded ? 'active' : ''}`}>
                    →
                  </div>
                </div>

                {/* Expandable Content (Hidden by default) */}
                <div className={`service-expandable-content ${isExpanded ? 'show' : ''}`}>
                  <div className="service-benefits">
                    <ul className="service-benefits-list">
                      {service.benefits.map((benefit, bIdx) => (
                        <li key={bIdx}>{benefit}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mini-case-study">
                    <div className="mini-case-study-title">Case Study: {service.caseStudy.client}</div>
                    <div className="mini-case-study-desc">"{service.caseStudy.result}"</div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}