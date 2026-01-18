// src/pages/PricingPage.jsx
import React from 'react';
import Pricing from '../components/sections/Pricing';
import FadeIn from '../components/animations/FadeIn';
import GlassCard from '../components/ui/GlassCard';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What is included in the free consultation?',
    answer: 'Our free consultation includes a 30-minute call to discuss your project requirements, goals, and timeline. We\'ll provide initial recommendations and a rough estimate.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity. A simple website takes 2-4 weeks, while complex applications may take 2-6 months.',
  },
  {
    question: 'Do you offer ongoing support?',
    answer: 'Yes! All our plans include post-launch support. We also offer maintenance packages for long-term partnerships.',
  },
  {
    question: 'Can I upgrade my plan later?',
    answer: 'Absolutely! You can upgrade your plan at any time. We\'ll credit your existing investment towards the new plan.',
  },
];

const PricingPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent" />
        
        <div className="container-custom relative">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-medium mb-6">
              Pricing
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Transparent{' '}
              <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-xl text-dark-600 dark:text-dark-400">
              Choose the perfect plan for your business needs.
            </p>
          </FadeIn>
        </div>
      </section>

      <Pricing />

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-dark-600 dark:text-dark-400">
              Have questions? We've got answers.
            </p>
          </FadeIn>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <GlassCard className="p-6">
                  <div className="flex gap-4">
                    <HelpCircle className="w-6 h-6 text-primary-500 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-display font-bold mb-2">{faq.question}</h3>
                      <p className="text-dark-600 dark:text-dark-400">{faq.answer}</p>
                    </div>
                  </div>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPage;