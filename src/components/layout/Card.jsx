import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  variant = 'default',
  className = '',
  hover = true,
  glow = false,
  ...props 
}) => {
  const variants = {
    default: 'glass-card',
    solid: 'bg-white dark:bg-dark-100 border border-gray-200 dark:border-white/10 rounded-2xl',
    gradient: 'bg-gradient-to-br from-accent-purple/10 to-accent-pink/10 border border-white/20 rounded-2xl backdrop-blur-xl',
    dark: 'bg-dark-200 border border-white/10 rounded-2xl',
  };

  return (
    <motion.div
      whileHover={hover ? { 
        y: -5, 
        boxShadow: glow 
          ? '0 0 40px rgba(139, 92, 246, 0.3)' 
          : '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
      } : {}}
      transition={{ duration: 0.3 }}
      className={`${variants[variant]} ${className} relative overflow-hidden group`}
      {...props}
    >
      {/* Gradient Border on Hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-[1px] rounded-2xl bg-white dark:bg-dark-100" />
        <div className="absolute inset-0 rounded-2xl animated-gradient opacity-50" />
      </div>
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default Card;