import React from 'react';
import TeamMembers from '../components/TeamMembers';
import SEO from '../components/SEO';
import './Pages.css';

export default function About() {
  return (
    <>
      <SEO
        title="About NexAppra | Software Development Company"
        description="Learn about NexAppra, our mission, team, and approach to building modern web, mobile, AI, SaaS, and digital products for startups and enterprises."
        canonical="https://nexappra.com/about"
      />

      <div className="page-transition about-page">
        <div className="container">
          <div className="about-intro">
            <span className="section-label">Our Story</span>

            <h1 className="section-title">
              Innovating at the Speed of Light
            </h1>

            <p className="section-subtitle">
              At NexAppra, we believe that software should be beautiful,
              robust, and intuitive. We started with a simple mission: to
              help enterprises and startups build products that matter.
              Today, we are a global team of visionaries, engineers, and
              creatives pushing the boundaries of the digital world.
            </p>
          </div>

          <TeamMembers />
        </div>
      </div>
    </>
  );
}
