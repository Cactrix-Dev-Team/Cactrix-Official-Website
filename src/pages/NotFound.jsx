// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10" />

      <div className="container-custom relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Number */}
          <motion.h1
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[150px] md:text-[200px] font-display font-bold gradient-text leading-none mb-4"
          >
            404
          </motion.h1>

          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-400 mb-8 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              as={Link}
              to="/"
              variant="primary"
              size="lg"
              icon={<Home className="w-5 h-5" />}
              iconPosition="left"
            >
              Back to Home
            </Button>
            <Button
              onClick={() => window.history.back()}
              variant="outline"
              size="lg"
              icon={<ArrowLeft className="w-5 h-5" />}
              iconPosition="left"
            >
              Go Back
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;