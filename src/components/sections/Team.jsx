// src/components/sections/Team.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import FadeIn from '../animations/FadeIn';
import StaggerContainer, { StaggerItem } from '../animations/StaggerContainer';

const team = [
  {
    name: 'Alex Morgan',
    role: 'CEO & Founder',
    image: '/images/team/team-1.jpg',
    bio: 'Visionary leader with 15+ years in tech industry.',
    social: { twitter: '#', linkedin: '#', github: '#' },
  },
  {
    name: 'Jessica Lee',
    role: 'CTO',
    image: '/images/team/team-2.jpg',
    bio: 'Full-stack architect passionate about scalable systems.',
    social: { twitter: '#', linkedin: '#', github: '#' },
  },
  {
    name: 'Ryan Park',
    role: 'Lead Designer',
    image: '/images/team/team-3.jpg',
    bio: 'Award-winning designer creating delightful experiences.',
    social: { twitter: '#', linkedin: '#', github: '#' },
  },
  {
    name: 'Emma Wilson',
    role: 'Head of Engineering',
    image: '/images/team/team-4.jpg',
    bio: 'Engineering excellence advocate and mentor.',
    social: { twitter: '#', linkedin: '#', github: '#' },
  },
  {
    name: 'Marcus Johnson',
    role: 'DevOps Lead',
    image: '/images/team/team-5.jpg',
    bio: 'Cloud infrastructure expert and automation enthusiast.',
    social: { twitter: '#', linkedin: '#', github: '#' },
  },
  {
    name: 'Sophia Chen',
    role: 'Product Manager',
    image: '/images/team/team-6.jpg',
    bio: 'Strategic thinker bridging business and technology.',
    social: { twitter: '#', linkedin: '#', github: '#' },
  },
];

const Team = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary-500/10 text-secondary-600 dark:text-secondary-400 text-sm font-medium mb-4">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Meet the{' '}
            <span className="gradient-text">Experts</span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-400">
            Our talented team of designers, developers, and strategists working together to deliver excellence.
          </p>
        </FadeIn>

        {/* Team Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <StaggerItem key={index}>
              <GlassCard className="group overflow-hidden">
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay with Social Links */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="flex gap-3">
                      {member.social.twitter && (
                        <motion.a
                          href={member.social.twitter}
                          whileHover={{ y: -3 }}
                          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary-500 transition-colors"
                        >
                          <Twitter className="w-4 h-4" />
                        </motion.a>
                      )}
                      {member.social.linkedin && (
                        <motion.a
                          href={member.social.linkedin}
                          whileHover={{ y: -3 }}
                          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary-500 transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                        </motion.a>
                      )}
                      {member.social.github && (
                        <motion.a
                          href={member.social.github}
                          whileHover={{ y: -3 }}
                          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary-500 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-display font-bold mb-1 group-hover:text-primary-500 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary-500 font-medium text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-dark-500 dark:text-dark-400 text-sm">
                    {member.bio}
                  </p>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Team;