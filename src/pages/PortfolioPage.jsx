// src/pages/PortfolioPage.jsx
import React from 'react';
import Portfolio from '../components/sections/Portfolio';
import Testimonials from '../components/sections/Testimonials';
import CTA from '../components/sections/CTA';
import FadeIn from '../components/animations/FadeIn';

const PortfolioPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent" />
        
        <div className="container-custom relative">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-medium mb-6">
              Our Work
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Featured{' '}
              <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-dark-600 dark:text-dark-400">
              Explore our portfolio of successful projects across various industries.
            </p>
          </FadeIn>
        </div>
      </section>

      <Portfolio />
      <Testimonials />
      <CTA />
    </>
  );
};

export default PortfolioPage;