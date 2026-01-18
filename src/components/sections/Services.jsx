// src/components/sections/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Smartphone, Palette, Cloud, 
  Database, Shield, ArrowRight 
} from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import FadeIn from '../animations/FadeIn';
import StaggerContainer, { StaggerItem } from '../animations/StaggerContainer';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom websites and web applications built with cutting-edge technologies for optimal performance.',
    color: 'from-blue-500 to-cyan-500',
    features: ['React & Next.js', 'E-commerce', 'CMS Integration'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
    color: 'from-purple-500 to-pink-500',
    features: ['iOS & Android', 'React Native', 'Flutter'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that captivate users and drive engagement.',
    color: 'from-orange-500 to-red-500',
    features: ['User Research', 'Prototyping', 'Design Systems'],
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions ',
    description: 'Scalable cloud infrastructure and DevOps services for modern applications.',
    color: 'from-green-500 to-teal-500',
    features: ['AWS & Azure', 'Kubernetes', 'CI/CD'],
  },
  {
    icon: Database,
    title: 'Data & Analytics',
    description: 'Transform your data into actionable insights with advanced analytics solutions.',
    color: 'from-yellow-500 to-orange-500',
    features: ['Big Data', 'ML & AI', 'Visualization'],
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Protect your business with comprehensive security assessments and solutions.',
    color: 'from-red-500 to-rose-500',
    features: ['Penetration Testing', 'Compliance', 'Monitoring'],
  },
];

const Services = () => {
  return (
    <section className="section-padding bg-dark-50 dark:bg-dark-900/50">
      <div className="container-custom">
        {/* Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Services We{' '}
            <span className="gradient-text">Provide</span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-400">
            We offer comprehensive digital solutions to help your business thrive in the modern digital landscape.
          </p>
        </FadeIn>

        {/* Services Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <GlassCard 
                glow 
                gradient
                className="h-full p-8 group cursor-pointer"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-dark-600 dark:text-dark-400 mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-dark-500 dark:text-dark-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary-500 font-medium group/link"
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </motion.a>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Services;