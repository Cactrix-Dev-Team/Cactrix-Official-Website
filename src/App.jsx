// src/App.jsx
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import Loader3D from './components/ui/Loader3D';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ServiceDetailsPage = lazy(() => import('./pages/ServiceDetailsPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const BlogPage = lazy(() => import('./pages/BlogPage')); // 👈 Blog page add කලා
const BlogPostPage = lazy(() => import('./pages/BlogPostPage')); // 👈 Single blog post
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Page transition wrapper with improved animation
const PageWrapper = ({ children }) => {
  const location = useLocation();

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

// Advanced Page Loader
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white dark:bg-dark-950">
    <div className="relative">
      {/* Outer ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        className="w-16 h-16 border-4 border-primary-500/20 border-t-primary-500 rounded-full"
      />
      
      {/* Inner ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-2 border-4 border-secondary-500/20 border-b-secondary-500 rounded-full"
      />
      
      {/* Center dot */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500" />
      </motion.div>
    </div>
  </div>
);

// Animated Routes Component
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Home */}
        <Route
          path="/"
          element={
            <PageWrapper>
              <Suspense fallback={<PageLoader />}>
                <Home />
              </Suspense>
            </PageWrapper>
          }
        />

        {/* About */}
        <Route
          path="/about"
          element={
            <PageWrapper>
              <Suspense fallback={<PageLoader />}>
                <About />
              </Suspense>
            </PageWrapper>
          }
        />

        {/* Services - All */}
        <Route
          path="/services"
          element={
            <PageWrapper>
              <Suspense fallback={<PageLoader />}>
                <ServicesPage />
              </Suspense>
            </PageWrapper>
          }
        />

        {/* Services - Single Service Details */}
        <Route
          path="/services/:slug"
          element={
            <PageWrapper>
              <Suspense fallback={<PageLoader />}>
                <ServiceDetailsPage />
              </Suspense>
            </PageWrapper>
          }
        />

        {/* Portfolio */}
        <Route
          path="/portfolio"
          element={
            <PageWrapper>
              <Suspense fallback={<PageLoader />}>
                <PortfolioPage />
              </Suspense>
            </PageWrapper>
          }
        />

        {/* Pricing */}
        <Route
          path="/pricing"
          element={
            <PageWrapper>
              <Suspense fallback={<PageLoader />}>
                <PricingPage />
              </Suspense>
            </PageWrapper>
          }
        />

        {/* Blog - All Posts */}
        <Route
          path="/blog"
          element={
            <PageWrapper>
              <Suspense fallback={<PageLoader />}>
                <BlogPage />
              </Suspense>
            </PageWrapper>
          }
        />

        {/* Blog - Single Post */}
        <Route
          path="/blog/:slug"
          element={
            <PageWrapper>
              <Suspense fallback={<PageLoader />}>
                <BlogPostPage />
              </Suspense>
            </PageWrapper>
          }
        />

        {/* Contact */}
        <Route
          path="/contact"
          element={
            <PageWrapper>
              <Suspense fallback={<PageLoader />}>
                <ContactPage />
              </Suspense>
            </PageWrapper>
          }
        />

        {/* 404 Not Found */}
        <Route
          path="*"
          element={
            <PageWrapper>
              <Suspense fallback={<PageLoader />}>
                <NotFound />
              </Suspense>
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

// Main App Component
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate realistic loading with progress
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Random increment for realistic feel
        const increment = Math.random() * 15 + 5;
        return Math.min(prev + increment, 100);
      });
    }, 200);

    // Minimum loading time for animation to complete
    const minLoadingTime = setTimeout(() => {
      setLoadingProgress(100);
    }, 3000);

    // Actual loading complete
    const loadingComplete = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(minLoadingTime);
      clearTimeout(loadingComplete);
    };
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <Loader3D
              key="loader"
              companyName="CACTRIX"
              tagline="INNOVATIONS"
              progress={loadingProgress}
            />
          ) : (
            <motion.div
              key="main-app"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="min-h-screen"
            >
              <Layout>
                <AnimatedRoutes />
              </Layout>
            </motion.div>
          )}
        </AnimatePresence>
      </Router>
    </ThemeProvider>
  );
};

export default App;