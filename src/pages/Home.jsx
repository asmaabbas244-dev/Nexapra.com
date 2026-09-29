import React from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Stats from '../components/Stats';
import WhyChooseUs from '../components/WhyChooseUs';
import CaseStudies from '../components/CaseStudies';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import SEO from '../components/SEO';
import CertificateVerify from '../components/CertificateVerify';

export default function Home() {
  return (
    <>
      <SEO
        title="NexAppra Software House | Web, Mobile, AI & SaaS Development"
        description="NexAppra is a software development company building modern web applications, mobile apps, AI solutions, SaaS products, and scalable digital experiences for startups and businesses."
        canonical="https://nexappra.com/"
      />

      <div className="page-transition">
        <Hero />
        <TrustBar />
        <Stats />
        <WhyChooseUs />
        <CaseStudies />
        <CertificateVerify />
        <Testimonials />
        <CTASection />
        <Pricing />
        
        <FAQ />
      </div>
    </>
  );
}
