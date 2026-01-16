// src/components/layout/Layout.jsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from '../ui/ScrollProgress';
import ParticleBackground from '../ui/ParticleBackground';
import CursorGlow from '../ui/CursorGlow';

const Layout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen">
      <ScrollProgress />
      <CursorGlow />
      <ParticleBackground className="opacity-30 dark:opacity-50" />
      <Navbar />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
    
  );
};

export default Layout;