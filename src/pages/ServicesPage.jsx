// src/pages/ServicesPage.jsx
import React from 'react';
import Services from '../components/sections/Services';
import Stats from '../components/sections/Stats';
import Testimonials from '../components/sections/Testimonials';
import CTA from '../components/sections/CTA';
import FadeIn from '../components/animations/FadeIn';

const ServicesPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-500/5 to-transparent" />
        
        <div className="container-custom relative">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary-500/10 text-secondary-600 dark:text-secondary-400 text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              What We{' '}
              <span className="gradient-text">Offer</span>
            </h1>
            <p className="text-xl text-dark-600 dark:text-dark-400">
              Comprehensive digital solutions tailored to your business needs.
            </p>
          </FadeIn>
        </div>
      </section>

      <Services />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
};

export default ServicesPage;