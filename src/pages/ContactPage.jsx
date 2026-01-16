// src/pages/ContactPage.jsx
import React from 'react';
import Contact from '../components/sections/Contact';
import FadeIn from '../components/animations/FadeIn';

const ContactPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent" />
        
        <div className="container-custom relative">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-medium mb-6">
              Contact
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Get in{' '}
              <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-dark-600 dark:text-dark-400">
              Ready to start your project? Let's talk about how we can help.
            </p>
          </FadeIn>
        </div>
      </section>

      <Contact />
    </>
  );
};

export default ContactPage;