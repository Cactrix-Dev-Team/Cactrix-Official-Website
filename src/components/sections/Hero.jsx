// src/components/sections/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import TextReveal from '../animations/TextReveal';
import Scene3D from '../3d/Scene3D';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* 3D Background */}
      <Scene3D className="opacity-60" />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/80 dark:from-dark-950/80 dark:via-transparent dark:to-dark-950/80" />

      {/* Content */}
      <div className="relative container-custom pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
              Welcome to the Future of Software
            </span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 leading-tight">
            <TextReveal>We Build Digital</TextReveal>
            <br />
            {/* 
               Fix: TextReveal එක අයින් කරලා කෙලින්ම motion.span එකක් පාවිච්චි කලා. 
               මේකෙන් gradient text එක අනිවාර්යයෙන්ම පේනවා.
            */}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="gradient-text inline-block pb-2" // pb-2 දැම්මේ සමහර font වල යට කෑල්ල කැපෙන නිසා
            >
              Experiences
            </motion.span>
          </h1>

          {/* Subheading - Font Design Updated */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl leading-relaxed text-dark-600 dark:text-dark-300 mb-10 max-w-2xl mx-auto font-light tracking-wide"
          >
            Transform your ideas into powerful software solutions. We create stunning websites, mobile apps, and cloud solutions that drive business growth.
          </motion.p>

          {/* CTA Buttons - Watch Demo Removed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              variant="primary" 
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Your Project
            </Button>
            {/* Watch Demo Button removed from here */}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-dark-100 dark:border-dark-800 pt-8"
          >
            {[
              { value: '250+', label: 'Projects Delivered' },
              { value: '50+', label: 'Happy Clients' },
              { value: '15+', label: 'Awards Won' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-dark-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-dark-500 dark:text-dark-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-dark-300 dark:border-dark-600 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary-500"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;