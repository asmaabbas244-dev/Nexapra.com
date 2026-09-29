import React from 'react';
import Services from '../components/Services';
import Process from '../components/Process';
import TechStack from '../components/TechStack';
import SEO from '../components/SEO';

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Software Development Services | NexAppra"
        description="Explore NexAppra software development services including web development, mobile apps, AI solutions, SaaS development, UI/UX design, and scalable digital products."
        canonical="https://nexappra.com/services"
      />

      <div className="page-transition" style={{ paddingTop: '80px' }}>
        <div
          className="container"
          style={{ textAlign: 'center', margin: '4rem auto 2rem' }}
        >
          <h1 className="section-title">Our Services & Process</h1>

          <p
            className="section-subtitle"
            style={{ margin: '0 auto' }}
          >
            We provide end-to-end software development, from ideation and UX
            design to complex engineering and scalable deployments.
          </p>
        </div>

        <Services />
        <Process />
        <TechStack />
      </div>
    </>
  );
}
