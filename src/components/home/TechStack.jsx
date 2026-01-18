import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from '../animations/FadeIn';

const technologies = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Python', icon: '🐍' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Redis', icon: '🔴' },
  { name: 'GraphQL', icon: '◈' },
  { name: 'Tailwind', icon: '🎨' },
];

const TechStack = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium 
                           bg-accent-purple/10 text-accent-purple mb-4">
              Technologies
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
              Our <span className="gradient-text">Tech Stack</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We use the latest and most reliable technologies to build your products.
            </p>
          </FadeIn>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="flex gap-8"
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex-shrink-0 px-8 py-6 rounded-2xl glass-card flex items-center gap-4 cursor-pointer"
              >
                <span className="text-3xl">{tech.icon}</span>
                <span className="font-semibold text-gray-900 dark:text-white whitespace-nowrap">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;