import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MagneticButton from '../animations/MagneticButton';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  href,
  to,
  className = '',
  icon,
  iconPosition = 'right',
  ...props 
}) => {
  const baseStyles = `
    inline-flex items-center justify-center gap-2 font-medium rounded-full
    transition-all duration-300 relative overflow-hidden group
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-accent-purple to-accent-pink text-white
      shadow-lg shadow-accent-purple/25 hover:shadow-accent-purple/40 hover:scale-105
    `,
    secondary: `
      bg-white/10 dark:bg-white/5 border border-white/20 text-gray-900 dark:text-white
      hover:bg-white/20 dark:hover:bg-white/10 backdrop-blur-xl
    `,
    outline: `
      border-2 border-accent-purple text-accent-purple hover:bg-accent-purple hover:text-white
    `,
    ghost: `
      text-gray-600 dark:text-gray-300 hover:text-accent-purple dark:hover:text-accent-purple
      hover:bg-accent-purple/10
    `,
    glow: `
      bg-gradient-to-r from-accent-purple to-accent-pink text-white
      shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:shadow-[0_0_50px_rgba(139,92,246,0.7)]
    `,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };

  const buttonContent = (
    <>
      {/* Shimmer Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                        -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
      
      {icon && iconPosition === 'left' && <span className="relative z-10">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === 'right' && <span className="relative z-10">{icon}</span>}
    </>
  );

  const allClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const ButtonWrapper = ({ children }) => (
    <MagneticButton strength={0.15}>
      {children}
    </MagneticButton>
  );

  if (to) {
    return (
      <ButtonWrapper>
        <Link to={to} className={allClasses} {...props}>
          {buttonContent}
        </Link>
      </ButtonWrapper>
    );
  }

  if (href) {
    return (
      <ButtonWrapper>
        <a href={href} className={allClasses} {...props}>
          {buttonContent}
        </a>
      </ButtonWrapper>
    );
  }

  return (
    <ButtonWrapper>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={allClasses}
        {...props}
      >
        {buttonContent}
      </motion.button>
    </ButtonWrapper>
  );
};

export default Button;