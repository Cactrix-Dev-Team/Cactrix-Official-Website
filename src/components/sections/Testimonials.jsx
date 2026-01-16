// src/components/sections/Testimonials.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechFlow Inc.',
    avatar: '/images/testimonials/avatar-1.jpg',
    content: 'CACTRIX transformed our outdated system into a modern, scalable platform. Their team\'s expertise and dedication exceeded our expectations. Highly recommended!',
    rating: 5,
    company: 'TechFlow',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder, StartupXYZ',
    avatar: '/images/testimonials/avatar-2.jpg',
    content: 'Working with CACTRIX was a game-changer for our startup. They delivered a stunning mobile app that our users love. The attention to detail was impressive.',
    rating: 5,
    company: 'StartupXYZ',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'CTO, InnovateCorp',
    avatar: '/images/testimonials/avatar-3.jpg',
    content: 'The team at CACTRIX brings creativity and technical excellence together. Our e-commerce platform now handles 10x more traffic with better performance.',
    rating: 5,
    company: 'InnovateCorp',
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Director, GlobalTech',
    avatar: '/images/testimonials/avatar-4.jpg',
    content: 'Exceptional service from start to finish. CACTRIX understood our vision and delivered beyond what we imagined. Our ROI increased by 300% in 6 months.',
    rating: 5,
    company: 'GlobalTech',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-dark-50 dark:bg-dark-900/50 overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            What Our{' '}
            <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-400">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </FadeIn>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <div className="absolute -top-6 left-0 md:left-10 z-10">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg">
              <Quote className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Main Slider */}
          <div className="relative bg-white dark:bg-dark-800 rounded-3xl shadow-xl p-8 md:p-12 pt-16 md:pt-12 md:pl-32 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-full blur-3xl" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-xl md:text-2xl text-dark-700 dark:text-dark-200 leading-relaxed mb-8 italic">
                  "{testimonials[current].content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden ring-4 ring-primary-500/20">
                    <img
                      src={testimonials[current].avatar}
                      alt={testimonials[current].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-dark-500 dark:text-dark-400 text-sm">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="absolute bottom-8 right-8 flex gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prev}
                className="w-12 h-12 rounded-full bg-dark-100 dark:bg-dark-700 flex items-center justify-center text-dark-600 dark:text-dark-300 hover:bg-primary-500 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={next}
                className="w-12 h-12 rounded-full bg-dark-100 dark:bg-dark-700 flex items-center justify-center text-dark-600 dark:text-dark-300 hover:bg-primary-500 hover:text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                className={`
                  h-2 rounded-full transition-all duration-300
                  ${index === current 
                    ? 'w-8 bg-primary-500' 
                    : 'w-2 bg-dark-300 dark:bg-dark-600 hover:bg-primary-400'
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;