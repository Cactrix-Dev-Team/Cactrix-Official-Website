// src/components/ui/ScrollProgress.jsx
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  // Smooth spring animation for progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-[60] origin-left"
        style={{ scaleX }}
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 background-animate" />
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 blur-sm opacity-50" />
        
        {/* Shine Effect */}
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        />
      </motion.div>

      {/* Circular Progress Indicator (Optional - Shows on scroll) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.8,
        }}
        className="fixed bottom-24 lg:bottom-8 left-4 lg:left-8 z-40 hidden sm:flex items-center justify-center"
      >
        <svg className="w-12 h-12 -rotate-90" viewBox="0 0 100 100">
          {/* Background Circle */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            className="text-dark-200 dark:text-dark-700"
          />
          {/* Progress Circle */}
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="url(#progressGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            style={{
              pathLength: scaleX,
            }}
            className="drop-shadow-lg"
          />
          {/* Gradient Definition */}
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#5eff00" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Percentage Text */}
        <motion.span
          className="absolute text-xs font-bold text-dark-600 dark:text-dark-300"
          style={{
            opacity: scaleX,
          }}
        >
          <ProgressText progress={scrollYProgress} />
        </motion.span>
      </motion.div>
    </>
  );
};

// Progress percentage text component
const ProgressText = ({ progress }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const unsubscribe = progress.on('change', (latest) => {
      setPercentage(Math.round(latest * 100));
    });
    return unsubscribe;
  }, [progress]);

  return <>{percentage}%</>;
};

export default ScrollProgress;