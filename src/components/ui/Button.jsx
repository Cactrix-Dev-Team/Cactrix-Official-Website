// src/components/ui/Button.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  icon,
  iconPosition = 'right',
  loading = false,
  disabled = false,
  onClick,
  href,
  ...props 
}) => {
  const baseStyles = `
    relative inline-flex items-center justify-center
    font-semibold rounded-xl
    transition-all duration-300
    overflow-hidden group
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-primary-500 to-secondary-500
      text-white
      hover:shadow-[0_0_30px_rgba(14,165,233,0.4)]
      hover:scale-105 active:scale-95
    `,
    secondary: `
      bg-dark-800 dark:bg-white
      text-white dark:text-dark-900
      hover:bg-dark-700 dark:hover:bg-dark-100
      hover:scale-105 active:scale-95
    `,
    outline: `
      border-2 border-primary-500
      text-primary-500
      hover:bg-primary-500 hover:text-white
      hover:scale-105 active:scale-95
    `,
    ghost: `
      text-dark-600 dark:text-dark-300
      hover:text-primary-500 dark:hover:text-primary-400
      hover:bg-dark-100 dark:hover:bg-dark-800
    `,
    glass: `
      glass text-white
      hover:bg-white/20
      hover:scale-105 active:scale-95
    `,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-3',
    xl: 'px-10 py-5 text-xl gap-3',
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {/* Shimmer Effect */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Content */}
      {loading ? (
        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      ) : (
        <>
          {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
          <span className="relative z-10">{children}</span>
          {icon && iconPosition === 'right' && <span className="shrink-0 group-hover:translate-x-1 transition-transform">{icon}</span>}
        </>
      )}
    </Component>
  );
};

export default Button;