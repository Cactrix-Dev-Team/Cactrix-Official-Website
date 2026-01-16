// src/components/ui/ThemeToggle.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`
        relative w-14 h-14
        flex items-center justify-center
        rounded-full
        bg-dark-100 dark:bg-dark-800
        border border-dark-200 dark:border-dark-700
        overflow-hidden
        transition-colors duration-300
        ${className}
      `}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 0 : 180,
          scale: theme === 'dark' ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="absolute"
      >
        <Moon className="w-6 h-6 text-primary-400" />
      </motion.div>
      
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'light' ? 0 : -180,
          scale: theme === 'light' ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="absolute"
      >
        <Sun className="w-6 h-6 text-yellow-500" />
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;