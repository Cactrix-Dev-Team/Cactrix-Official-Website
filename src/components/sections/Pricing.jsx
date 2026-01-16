// src/components/sections/Pricing.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Sparkles, ArrowRight } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import FadeIn from '../animations/FadeIn';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small projects and startups',
    monthlyPrice: 999,
    yearlyPrice: 799,
    features: [
      { text: 'Up to 5 pages', included: true },
      { text: 'Responsive design', included: true },
      { text: 'Basic SEO setup', included: true },
      { text: 'Contact form', included: true },
      { text: '3 revision rounds', included: true },
      { text: 'CMS integration', included: false },
      { text: 'E-commerce features', included: false },
      { text: 'Priority support', included: false },
    ],
    popular: false,
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    description: 'Best for growing businesses',
    monthlyPrice: 2499,
    yearlyPrice: 1999,
    features: [
      { text: 'Up to 15 pages', included: true },
      { text: 'Responsive design', included: true },
      { text: 'Advanced SEO', included: true },
      { text: 'Custom forms', included: true },
      { text: 'Unlimited revisions', included: true },
      { text: 'CMS integration', included: true },
      { text: 'E-commerce (up to 50 products)', included: true },
      { text: 'Priority support', included: false },
    ],
    popular: true,
    cta: 'Start Free Trial',
  },
  {
    name: 'Enterprise',
    description: 'For large-scale applications',
    monthlyPrice: 4999,
    yearlyPrice: 3999,
    features: [
      { text: 'Unlimited pages', included: true },
      { text: 'Responsive design', included: true },
      { text: 'Enterprise SEO', included: true },
      { text: 'Advanced integrations', included: true },
      { text: 'Unlimited revisions', included: true },
      { text: 'Headless CMS', included: true },
      { text: 'Full e-commerce suite', included: true },
      { text: '24/7 Priority support', included: true },
    ],
    popular: false,
    cta: 'Contact Sales',
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="section-padding bg-dark-50 dark:bg-dark-900/50">
      <div className="container-custom">
        {/* Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Simple,{' '}
            <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-400">
            Choose the perfect plan for your needs. No hidden fees, no surprises.
          </p>
        </FadeIn>

        {/* Toggle */}
        <FadeIn delay={0.1} className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-4 p-2 rounded-full bg-white dark:bg-dark-800 shadow-lg">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                !isYearly 
                  ? 'bg-primary-500 text-white shadow-md' 
                  : 'text-dark-600 dark:text-dark-400'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
                isYearly 
                  ? 'bg-primary-500 text-white shadow-md' 
                  : 'text-dark-600 dark:text-dark-400'
              }`}
            >
              Yearly
              <span className="text-xs px-2 py-0.5 rounded-full bg-green-500 text-white">
                -20%
              </span>
            </button>
          </div>
        </FadeIn>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className={`relative h-full ${plan.popular ? 'z-10' : ''}`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="px-4 py-1 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm font-medium flex items-center gap-1 shadow-lg">
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <GlassCard 
                  className={`h-full p-8 ${
                    plan.popular 
                      ? 'border-2 border-primary-500/50 shadow-xl shadow-primary-500/10' 
                      : ''
                  }`}
                >
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-display font-bold mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-dark-500 dark:text-dark-400 text-sm mb-6">
                      {plan.description}
                    </p>
                    <div className="flex items-end justify-center gap-1">
                      <span className="text-4xl md:text-5xl font-display font-bold">
                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-dark-500 dark:text-dark-400 mb-2">
                        /month
                      </span>
                    </div>
                    {isYearly && (
                      <p className="text-sm text-green-500 mt-2">
                        Save ${(plan.monthlyPrice - plan.yearlyPrice) * 12}/year
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        {feature.included ? (
                          <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                            <Check className="w-3 h-3 text-green-500" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-dark-200 dark:bg-dark-700 flex items-center justify-center">
                            <X className="w-3 h-3 text-dark-400" />
                          </div>
                        )}
                        <span className={feature.included ? '' : 'text-dark-400'}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    variant={plan.popular ? 'primary' : 'outline'}
                    size="lg"
                    className="w-full"
                    icon={<ArrowRight className="w-5 h-5" />}
                  >
                    {plan.cta}
                  </Button>
                </GlassCard>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;