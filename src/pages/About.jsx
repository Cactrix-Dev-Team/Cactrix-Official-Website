// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award, Users, Zap } from 'lucide-react';
import FadeIn from '../components/animations/FadeIn';
import GlassCard from '../components/ui/GlassCard';
import Team from '../components/sections/Team';
import Stats from '../components/sections/Stats';
import CTA from '../components/sections/CTA';

//testing done

const values = [
  { icon: Target, title: 'Excellence', description: 'We strive for excellence in every project we undertake.' },
  { icon: Heart, title: 'Passion', description: 'We are passionate about creating meaningful digital experiences.' },
  { icon: Users, title: 'Collaboration', description: 'We believe in the power of teamwork and open communication.' },
  { icon: Zap, title: 'Innovation', description: 'We embrace new technologies and creative approaches.' },
];

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent" />
        
        <div className="container-custom relative">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              We Are{' '}
              <span className="gradient-text">CACTRIX</span>
            </h1>
            <p className="text-xl text-dark-600 dark:text-dark-400">
              A team of passionate designers, developers, and strategists dedicated to transforming ideas into exceptional digital experiences.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-3xl blur-2xl" />
                <img
                  src="/images/about-team.jpg"
                  alt="Our Team"
                  className="relative rounded-3xl shadow-2xl"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <span className="text-primary-500 font-medium">Our Story</span>
              <h2 className="text-4xl font-display font-bold mt-2 mb-6">
                Building the Future, One Project at a Time
              </h2>
              <div className="space-y-4 text-dark-600 dark:text-dark-400">
                <p>
                  Founded in 2018, CACTRIX started with a simple mission: to help businesses succeed in the digital age through innovative technology solutions.
                </p>
                <p>
                  What began as a small team of three passionate developers has grown into a full-service digital agency with experts in design, development, and strategy.
                </p>
                <p>
                  Today, we've helped over 250 clients across various industries transform their digital presence and achieve their business goals.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-dark-50 dark:bg-dark-900/50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn>
              <GlassCard className="p-8 h-full" glow>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">Our Mission</h3>
                <p className="text-dark-600 dark:text-dark-400">
                  To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting value in an ever-evolving technological landscape.
                </p>
              </GlassCard>
            </FadeIn>

            <FadeIn delay={0.1}>
              <GlassCard className="p-8 h-full" glow>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary-500 to-pink-500 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">Our Vision</h3>
                <p className="text-dark-600 dark:text-dark-400">
                  To be the leading digital transformation partner for businesses worldwide, known for our innovative solutions, exceptional quality, and unwavering commitment to client success.
                </p>
              </GlassCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container-custom">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Our Core <span className="gradient-text">Values</span>
            </h2>
            <p className="text-dark-600 dark:text-dark-400">
              The principles that guide everything we do.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="text-center p-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center mx-auto mb-4"
                  >
                    <value.icon className="w-8 h-8 text-primary-500" />
                  </motion.div>
                  <h3 className="text-xl font-display font-bold mb-2">{value.title}</h3>
                  <p className="text-dark-600 dark:text-dark-400 text-sm">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <Team />
      <CTA />
    </>
  );
};

export default About;