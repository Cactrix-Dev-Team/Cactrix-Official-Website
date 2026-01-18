// src/components/ui/CursorGlow.jsx
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CursorGlow = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring animation
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only show on desktop
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) return;

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Detect hoverable elements
    const handleMouseOver = (e) => {
      const target = e.target;
      const isHoverable = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('hoverable');
      setIsHovering(isHoverable);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  // Hide on mobile/touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      {/* Main Glow */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-screen hidden lg:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
        }}
        transition={{ duration: 0.15 }}
      >
        {/* Outer Glow */}
        <div
          className={`
            rounded-full transition-all duration-300
            ${isHovering 
              ? 'w-16 h-16 bg-primary-500/20' 
              : 'w-8 h-8 bg-primary-500/30'
            }
          `}
          style={{
            filter: 'blur(10px)',
          }}
        />
      </motion.div>

      {/* Inner Dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999] hidden lg:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 0.5 : isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.1 }}
      >
        <div className="w-2 h-2 rounded-full bg-primary-500" />
      </motion.div>

      {/* Hover Ring */}
      <motion.div
        className="fixed pointer-events-none z-[9999] hidden lg:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isHovering && isVisible ? 1 : 0,
          scale: isHovering ? 1 : 0.5,
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="w-12 h-12 rounded-full border-2 border-primary-500/50" />
      </motion.div>
    </>
  );
};

export default CursorGlow;