import React from 'react';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact NexAppra | Start Your Software Project"
        description="Contact NexAppra to discuss your web development, mobile app, AI, SaaS, UI/UX, or custom software development project with our team."
        canonical="https://nexappra.com/contact"
      />

      <div
        className="page-transition"
        style={{ paddingTop: '80px' }}
      >
        <Contact />
      </div>
    </>
  );
}
