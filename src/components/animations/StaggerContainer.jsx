// src/components/animations/StaggerContainer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

const StaggerContainer = ({ 
  children, 
  className = '', 
  staggerDelay = 0.1,
  initialDelay = 0 
}) => {
  const { ref, isInView } = useInView({ once: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: initialDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = '' }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            type: 'spring',
            damping: 20,
            stiffness: 100,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default StaggerContainer;