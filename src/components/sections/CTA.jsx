// src/components/sections/CTA.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import FadeIn from '../animations/FadeIn';

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-1/2 -left-1/4 w-full h-full bg-gradient-conic from-primary-500/20 via-transparent to-secondary-500/20 blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-gradient-conic from-secondary-500/20 via-transparent to-primary-500/20 blur-3xl"
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5" />

      <div className="container-custom relative">
        <FadeIn className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium text-white/90">
              Ready to Transform Your Business?
            </span>
          </motion.div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Let's Build Your{' '}
            <span className="gradient-text">Dream Project</span>{' '}
            Together
          </h2>

          {/* Description */}
          <p className="text-xl text-dark-300 mb-10 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their digital presence with our innovative solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="primary" 
              size="xl"
              icon={<ArrowRight className="w-5 h-5" />}
              className="shadow-2xl shadow-primary-500/30"
            >
              Start Your Project
            </Button>
            <Button 
              variant="glass" 
              size="xl"
            >
              Schedule a Call
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-dark-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm">Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm">No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm">24/7 Support</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CTA;