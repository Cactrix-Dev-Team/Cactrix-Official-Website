// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, 
  Twitter, Linkedin, Github, Instagram, Youtube,
  ArrowRight, Send
} from 'lucide-react';
import FadeIn from '../animations/FadeIn';
import logoImg from '../../assets/logo.png';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Careers', path: '/careers' },
      { name: 'Blog', path: '/blog' },
      { name: 'Press', path: '/press' },
    ],
    services: [
      { name: 'Web Development', path: '/services/web' },
      { name: 'Mobile Apps', path: '/services/mobile' },
      { name: 'UI/UX Design', path: '/services/design' },
      { name: 'Cloud Solutions', path: '/services/cloud' },
    ],
    resources: [
      { name: 'Documentation', path: '/docs' },
      { name: 'Help Center', path: '/help' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="relative bg-dark-900 dark:bg-dark-950 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container-custom">
        {/* Newsletter Section */}
        <FadeIn>
          <div className="py-16 border-b border-white/10">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Stay Updated with Our Newsletter
              </h3>
              <p className="text-dark-400 mb-8">
                Get the latest news, updates, and exclusive offers delivered straight to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-500" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl font-semibold flex items-center justify-center gap-2 group"
                >
                  Subscribe
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </div>
          </div>
        </FadeIn>

        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <FadeIn className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <img 
                              src={logoImg} 
                              alt="CACTRIX Logo" 
                              className="h-12 w-auto object-contain transition-all duration-300 dark:invert dark:brightness-0 dark:sepia-0 dark:contrast-200"
                            />
            </Link>
            <p className="text-dark-400 mb-6 max-w-sm">
              Transforming ideas into digital reality. We build innovative software solutions that drive business growth.
            </p>
            <div className="space-y-3">
              <a href="mailto:hello@CACTRIX.com" className="flex items-center gap-3 text-dark-400 hover:text-primary-400 transition-colors">
                <Mail className="w-5 h-5" />
                hello@CACTRIX.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-dark-400 hover:text-primary-400 transition-colors">
                <Phone className="w-5 h-5" />
                +1 (234) 567-890
              </a>
              <div className="flex items-center gap-3 text-dark-400">
                <MapPin className="w-5 h-5" />
                San Francisco, CA 94102
              </div>
            </div>
          </FadeIn>

          {/* Links */}
          <FadeIn delay={0.1}>
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-dark-400 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-dark-400 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.3}>
            <h4 className="font-semibold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-dark-400 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-dark-500 text-sm">
            © {new Date().getFullYear()} CACTRIX. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-primary-500/20 flex items-center justify-center text-dark-400 hover:text-primary-400 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;