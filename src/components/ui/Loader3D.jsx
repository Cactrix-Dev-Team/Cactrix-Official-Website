// src/components/ui/Loader3D.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader3D = ({ companyName = "CACTRIX ", tagline = "INNOVATIONS" }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => prev >= 100 ? 100 : prev + 1);
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center, #0f0f23 0%, #000000 100%)'
      }}
    >
      {/* Animated Grid Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}
      />

      {/* Floating Orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 100 + i * 20,
            height: 100 + i * 20,
            background: `radial-gradient(circle, ${
              ['#6366f1', '#a855f7', '#22d3ee', '#f472b6', '#34d399', '#fbbf24'][i]
            }30, transparent)`,
            filter: 'blur(30px)'
          }}
          animate={{
            x: [0, Math.cos(i * 60 * Math.PI / 180) * 150, 0],
            y: [0, Math.sin(i * 60 * Math.PI / 180) * 150, 0],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.2
          }}
        />
      ))}

      {/* 3D Rotating Rings */}
      <div className="absolute" style={{ perspective: '1000px' }}>
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border-2"
            style={{
              width: 200 + i * 80,
              height: 200 + i * 80,
              left: -(100 + i * 40),
              top: -(100 + i * 40),
              borderColor: ['#6366f1', '#a855f7', '#22d3ee'][i],
              opacity: 0.6 - i * 0.15
            }}
            animate={{
              rotateX: [0, 360],
              rotateY: [0, -360]
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        ))}
      </div>

      {/* Center Glow */}
      <motion.div
        className="absolute w-64 h-64 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Company Name with 3D Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-wider mb-4">
            {companyName.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  delay: 0.5 + i * 0.1,
                  duration: 0.8,
                  type: 'spring',
                  stiffness: 100
                }}
                className="inline-block"
                style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #22d3ee 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 30px rgba(99,102,241,0.5))'
                }}
              >
                {char}
              </motion.span>
            ))}
          </h1>
          
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.5em' }}
            animate={{ opacity: 1, letterSpacing: '0.3em' }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-gray-400 text-sm md:text-base tracking-[0.3em]"
          >
            {tagline}
          </motion.p>

          {/* Decorative Line */}
          <motion.div 
            className="flex items-center justify-center gap-4 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 2.2, duration: 0.8 }}
              className="h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent"
            />
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ delay: 2.4, duration: 0.6 }}
              className="w-2 h-2 bg-primary-500 rotate-45"
            />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 2.2, duration: 0.8 }}
              className="h-px bg-gradient-to-r from-transparent via-secondary-500 to-transparent"
            />
          </motion.div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
          className="mt-16 w-72 mx-auto"
        >
          <div className="relative h-1 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm">
            {/* Animated Background Glow */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)',
              }}
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            />
            
            {/* Progress Fill */}
            <motion.div
              className="h-full rounded-full relative"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #6366f1, #a855f7, #22d3ee)'
              }}
            >
              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)'
                }}
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.div>
          </div>

          {/* Progress Info */}
          <div className="flex justify-between items-center mt-3">
            <motion.span
              className="text-xs text-gray-500 uppercase tracking-widest"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {progress < 30 && 'Initializing...'}
              {progress >= 30 && progress < 60 && 'Loading Assets...'}
              {progress >= 60 && progress < 90 && 'Preparing...'}
              {progress >= 90 && 'Almost Ready...'}
            </motion.span>
            <span className="text-sm font-mono text-primary-400 font-bold">
              {progress}%
            </span>
          </div>
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary-400"
            style={{
              left: `${Math.random() * 100}%`,
              boxShadow: '0 0 10px currentColor'
            }}
            initial={{ y: '100vh', opacity: 0 }}
            animate={{
              y: '-10vh',
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'linear'
            }}
          />
        ))}
      </div>

      {/* Corner Decorations */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3 }}
        className="absolute top-8 left-8 flex items-center gap-2"
      >
        <div className="w-8 h-px bg-gradient-to-r from-primary-500 to-transparent" />
        <div className="w-2 h-2 border border-primary-500 rotate-45" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3 }}
        className="absolute top-8 right-8 flex items-center gap-2"
      >
        <div className="w-2 h-2 border border-secondary-500 rotate-45" />
        <div className="w-8 h-px bg-gradient-to-l from-secondary-500 to-transparent" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2 }}
        className="absolute bottom-8 left-8 text-xs text-gray-600 font-mono"
      >
        v2.0.0
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2 }}
        className="absolute bottom-8 right-8 text-xs text-gray-600 font-mono"
      >
        © 2024 {companyName}
      </motion.div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </motion.div>
  );
};

export default Loader3D;