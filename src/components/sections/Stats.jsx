// src/components/sections/Stats.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import FadeIn from '../animations/FadeIn';

const stats = [
  { value: 250, suffix: '+', label: 'Projects Completed', description: 'Successfully delivered' },
  { value: 50, suffix: '+', label: 'Happy Clients', description: 'Worldwide' },
  { value: 15, suffix: '+', label: 'Awards Won', description: 'Industry recognition' },
  { value: 99, suffix: '%', label: 'Client Satisfaction', description: 'Average rating' },
];

const Counter = ({ value, suffix, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const { ref, isInView } = useInView({ once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600" />
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
      
      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/10 blur-xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-white/10 blur-xl"
      />

      <div className="container-custom relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center text-white"
              >
                <div className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <h3 className="text-xl font-semibold mb-1">{stat.label}</h3>
                <p className="text-white/70 text-sm">{stat.description}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;