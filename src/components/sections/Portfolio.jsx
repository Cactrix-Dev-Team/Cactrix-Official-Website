// src/components/sections/Portfolio.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import FadeIn from '../animations/FadeIn';

const categories = ['All', 'Web', 'Mobile', 'Design', 'Branding'];

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web',
    image: '/images/portfolio/project-1.jpg',
    description: 'Modern e-commerce solution with AI-powered recommendations.',
    tech: ['Next.js', 'Node.js', 'MongoDB'],
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Fitness Tracking App',
    category: 'Mobile',
    image: '/images/portfolio/project-2.jpg',
    description: 'Cross-platform fitness app with real-time workout tracking.',
    tech: ['React Native', 'Firebase', 'TensorFlow'],
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Financial Dashboard',
    category: 'Design',
    image: '/images/portfolio/project-3.jpg',
    description: 'Comprehensive financial analytics dashboard for enterprises.',
    tech: ['Figma', 'React', 'D3.js'],
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Healthcare Platform',
    category: 'Web',
    image: '/images/portfolio/project-4.jpg',
    description: 'Telemedicine platform connecting patients with doctors.',
    tech: ['Vue.js', 'Python', 'PostgreSQL'],
    link: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'Brand Identity - TechFlow',
    category: 'Branding',
    image: '/images/portfolio/project-5.jpg',
    description: 'Complete brand identity design for a tech startup.',
    tech: ['Illustrator', 'Photoshop', 'After Effects'],
    link: '#',
  },
  {
    id: 6,
    title: 'Food Delivery App',
    category: 'Mobile',
    image: '/images/portfolio/project-6.jpg',
    description: 'On-demand food delivery app with real-time tracking.',
    tech: ['Flutter', 'Dart', 'Google Maps'],
    link: '#',
    github: '#',
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary-500/10 text-secondary-600 dark:text-secondary-400 text-sm font-medium mb-4">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-400">
            Explore our portfolio of successful projects that showcase our expertise and creativity.
          </p>
        </FadeIn>

        {/* Category Filter */}
        <FadeIn delay={0.2} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-6 py-2 rounded-full font-medium transition-all duration-300
                ${activeCategory === category
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-400 hover:bg-dark-200 dark:hover:bg-dark-700'
                }
              `}
            >
              {category}
            </button>
          ))}
        </FadeIn>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <GlassCard className="overflow-hidden group h-full">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Overlay */}
                    <AnimatePresence>
                      {hoveredProject === project.id && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-dark-900/80 flex items-center justify-center gap-4"
                        >
                          <motion.a
                            href={project.link}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-dark-900 hover:bg-primary-500 hover:text-white transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </motion.a>
                          {project.github && (
                            <motion.a
                              href={project.github}
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.2 }}
                              className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-dark-900 hover:bg-primary-500 hover:text-white transition-colors"
                            >
                              <Github className="w-5 h-5" />
                            </motion.a>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="text-xs font-medium text-primary-500 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-display font-bold mt-2 mb-3 group-hover:text-primary-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-dark-600 dark:text-dark-400 text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <FadeIn className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            View All Projects
          </Button>
        </FadeIn>
      </div>
    </section>
  );
};

export default Portfolio;