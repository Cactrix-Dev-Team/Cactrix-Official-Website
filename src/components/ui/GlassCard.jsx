// src/components/ui/GlassCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ 
  children, 
  className = '', 
  hover = true,
  glow = false,
  gradient = false,
  ...props 
}) => {
  return (
    <motion.div
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`
        relative
        bg-white/10 dark:bg-dark-900/30
        backdrop-blur-xl
        border border-white/20 dark:border-white/10
        rounded-2xl
        overflow-hidden
        ${glow ? 'hover:shadow-[0_0_40px_rgba(14,165,233,0.2)]' : ''}
        ${gradient ? 'before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary-500/10 before:to-secondary-500/10 before:opacity-0 before:hover:opacity-100 before:transition-opacity' : ''}
        transition-all duration-500
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;