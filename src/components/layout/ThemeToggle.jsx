import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { HiSun, HiMoon } from 'react-icons/hi';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="relative w-12 h-12 rounded-full glass flex items-center justify-center
                 hover:shadow-lg transition-shadow duration-300"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {isDark ? (
          <HiMoon className="w-5 h-5 text-accent-purple" />
        ) : (
          <HiSun className="w-5 h-5 text-accent-orange" />
        )}
      </motion.div>
      
      {/* Glow Effect */}
      <div className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
        isDark ? 'bg-accent-purple/20' : 'bg-accent-orange/20'
      } blur-lg opacity-0 group-hover:opacity-100`} />
    </motion.button>
  );
};

export default ThemeToggle;