import React, { useEffect, useRef } from 'react';
import { staggerReveal } from '../utils/animations';
import './Pages.css';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const JOBS = [
  {
    title: 'Frontend Developer (React)',
    type: 'Full-Time',
    location: 'Remote',
    desc: 'Looking for a React/Three.js expert to build stunning web experiences. Must have an eye for high-end UI/UX.',
    skills: 'React, Framer Motion, GSAP, TailwindCSS'
  },
  {
    title: 'Backend Developer (Node.js)',
    type: 'Full-Time',
    location: 'Remote',
    desc: 'Architect robust backend APIs and microservices. Ensure scaling for thousands of concurrent connections.',
    skills: 'Node.js, Express, PostgreSQL, AWS/GCP'
  },
  {
    title: 'UI/UX Designer',
    type: 'Contract',
    location: 'Remote',
    desc: 'Create wireframes, prototypes, and high-fidelity designs for modern web and mobile apps.',
    skills: 'Figma, Adobe Creative Suite, Prototyping'
  },
  {
    title: 'AI Engineer',
    type: 'Full-Time',
    location: 'New York / Remote',
    desc: 'Help us integrate LLMs and predictive models into our core SaaS offerings. Develop custom agents.',
    skills: 'Python, PyTorch, OpenAI API, LangChain'
  }
  
];

export default function Careers() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll('.job-card');

    staggerReveal(cards, {
      delay: 0.2,
      stagger: 0.1
    });
  }, []);

  return (
    <>
      <SEO
        title="Careers at NexAppra | Join Our Software Team"
        description="Explore career opportunities at NexAppra. Join our team of software developers, AI engineers, UI/UX designers, and technology professionals working on modern digital products."
        canonical="https://nexappra.com/careers"
      />

      <div
        className="page-transition careers-page"
        style={{
          paddingTop: '120px',
          paddingBottom: '5rem',
          minHeight: '100vh'
        }}
      >
        <div className="container" ref={containerRef}>

          {/* Intro */}
          <div
            className="careers-intro"
            style={{
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto 4rem'
            }}
          >
            <span className="section-label">Join The Team</span>

            <h1 className="section-title">
              Build the Future with Us
            </h1>

            <p
              className="section-subtitle"
              style={{ margin: '1rem auto' }}
            >
             Join NexAppra and work alongside a passionate team of developers,
  designers, and innovators. Build meaningful digital products,
  grow your skills, and contribute to technology that creates
  real-world impact.
            </p>
          </div>

          {/* Jobs List */}
          <div className="jobs-list">
            {JOBS.map((job, idx) => (
              <div
                key={idx}
                className="job-card glass-card reveal"
              >
                <div className="job-info">
                  <h3 className="job-title">
                    {job.title}
                  </h3>

                  <div className="job-meta">
                    <span className="job-badge">
                      {job.type}
                    </span>

                    <span className="job-location">
                      📍 {job.location}
                    </span>
                  </div>

                  <p
                    className="job-desc"
                    style={{ marginBottom: '8px' }}
                  >
                    {job.desc}
                  </p>

                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--color-primary)',
                      fontWeight: 600
                    }}
                  >
                    Skills: {job.skills}
                  </div>
                </div>

                <Link to="/apply">
                  <button className="btn btn-primary job-apply-btn">
                    Apply Now
                  </button>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
