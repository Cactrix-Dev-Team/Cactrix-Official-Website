// src/pages/ServiceDetailsPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { servicesData, getRelatedServices } from '../data/servicesData';
import { motion, AnimatePresence } from 'framer-motion';
import ServiceIcon from '../components/ui/ServiceIcon';
import FadeIn from '../components/animations/FadeIn';
import CTA from '../components/sections/CTA';
import GlassCard from '../components/ui/GlassCard';
import Button from '../components/ui/Button';
import { 
  ArrowLeft, 
  CheckCircle, 
  Zap, 
  Code2, 
  ShieldCheck,
  ArrowRight,
  Clock,
  DollarSign,
  ChevronDown,
  ChevronUp,
  Star,
  Users,
  Play,
  Sparkles
} from 'lucide-react';

const ServiceDetailsPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const service = servicesData.find((s) => s.slug === slug);
  const relatedServices = service?.relatedServices 
    ? getRelatedServices(service.relatedServices) 
    : [];

  useEffect(() => {
    window.scrollTo(0, 0);
    setImageLoaded(false);
  }, [slug]);

  // ============================================
  // ERROR STATE
  // ============================================
  if (!service) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-950">
        <div className="container-custom text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-24 h-24 mx-auto mb-8 rounded-full bg-red-100 dark:bg-red-500/20 flex items-center justify-center"
          >
            <span className="text-6xl">🔍</span>
          </motion.div>
          <h2 className="text-4xl font-display font-bold mb-4 text-dark-900 dark:text-white">
            Service Not Found
          </h2>
          <p className="text-dark-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            The service you're looking for doesn't exist or may have been moved.
          </p>
          <Button onClick={() => navigate('/services')} variant="primary" size="lg">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Button>
        </div>
      </section>
    );
  }

  // Parse title for styling
  const titleWords = service.title.split(' ');
  const firstWord = titleWords[0];
  const remainingWords = titleWords.slice(1).join(' ');

  // ============================================
  // MAIN CONTENT
  // ============================================
  return (
    <>
      {/* Main Container - Theme Aware */}
      <div className="relative min-h-screen bg-gray-50 dark:bg-dark-950 text-dark-900 dark:text-white transition-colors duration-300">
        
        {/* ============================================ */}
        {/* BACKGROUND - Theme Aware */}
        {/* ============================================ */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Light mode gradient */}
          <div className={`absolute top-0 left-[-10%] w-[500px] h-[500px] bg-gradient-to-br ${service.gradient} opacity-10 dark:opacity-20 rounded-full blur-[120px]`} />
          <div className={`absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-gradient-to-br ${service.gradient} opacity-5 dark:opacity-10 rounded-full blur-[120px]`} />
          
          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* ============================================ */}
        {/* CONTENT */}
        {/* ============================================ */}
        <div className="relative z-10">
          
          {/* ============================================ */}
          {/* HERO SECTION - Reduced top padding */}
          {/* ============================================ */}
          <section className="pt-32 pb-20">
            <div className="container-custom">
              
              {/* Back Button */}
              <FadeIn>
                <button 
                  onClick={() => navigate('/services')}
                  className="group flex items-center gap-3 text-dark-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-white transition-colors mb-8"
                >
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-white/5 shadow-sm dark:shadow-none flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-all border border-gray-200 dark:border-white/10 group-hover:border-primary-500">
                    <ArrowLeft className="w-4 h-4" />
                  </div>
                  <span className="font-medium">Back to services</span>
                </button>
              </FadeIn>

              {/* Hero Grid */}
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                
                {/* Left - Content */}
                <FadeIn delay={0.1}>
                  <div className="space-y-6">
                    {/* Badge */}
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="inline-flex items-center gap-3"
                    >
                      <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${service.gradient} text-white text-sm font-semibold shadow-lg`}>
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                        </span>
                        Available Now
                      </span>
                      <span className="text-dark-300 dark:text-gray-500">•</span>
                      <span className="text-dark-500 dark:text-gray-400 text-sm flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {service.timeline}
                      </span>
                    </motion.div>
                    
                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1]">
                      {firstWord}{' '}
                      <span className={`text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>
                        {remainingWords}
                      </span>
                    </h1>
                    
                    {/* Description */}
                    <p className="text-lg text-dark-600 dark:text-gray-400 leading-relaxed max-w-xl">
                      {service.longDescription}
                    </p>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {service.stats?.map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                          className="text-center p-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-sm dark:shadow-none"
                        >
                          <div className={`text-xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                            {stat.value}
                          </div>
                          <div className="text-xs text-dark-500 dark:text-gray-500 mt-1">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 pt-2">
                      <Button 
                        as={Link}
                        to="/contact" 
                        variant="primary" 
                        size="lg" 
                        className={`shadow-lg shadow-primary-500/25 bg-gradient-to-r ${service.gradient} border-0`}
                      >
                        <Sparkles className="w-4 h-4 mr-2" />
                        Get Started
                      </Button>
                      <Button variant="outline" size="lg">
                        <Play className="w-4 h-4 mr-2" />
                        Watch Demo
                      </Button>
                    </div>

                    {/* Pricing Hint */}
                    {service.pricing && (
                      <div className="flex items-center gap-2 text-sm text-dark-500 dark:text-gray-500">
                        <DollarSign className="w-4 h-4" />
                        Starting from ${service.pricing.starting.toLocaleString()} {service.pricing.currency}
                        <span className="text-dark-300 dark:text-gray-600">•</span>
                        <span>{service.pricing.note}</span>
                      </div>
                    )}
                  </div>
                </FadeIn>

                {/* Right - Hero Image */}
                <FadeIn delay={0.2}>
                  <div className="relative">
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-20 blur-3xl transform rotate-6 scale-105`} />
                    
                    {/* Main Image */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl dark:shadow-none bg-white dark:bg-dark-900"
                    >
                      {/* Loading Skeleton */}
                      {!imageLoaded && (
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 dark:from-dark-800 dark:via-dark-700 dark:to-dark-800 animate-pulse" />
                      )}
                      
                      <img 
                        src={service.heroImage}
                        alt={service.title}
                        onLoad={() => setImageLoaded(true)}
                        className={`w-full h-[350px] lg:h-[450px] object-cover transition-opacity duration-500 ${
                          imageLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                      />

                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                      {/* Floating Icon */}
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className={`absolute bottom-6 right-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-xl`}
                      >
                        <ServiceIcon name={service.iconName} className="w-8 h-8 text-white" />
                      </motion.div>
                    </motion.div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-gray-200 dark:border-white/10 rounded-2xl" />
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 border-2 border-gray-200 dark:border-white/10 rounded-full" />
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* ============================================ */}
          {/* FEATURES SECTION */}
          {/* ============================================ */}
          <section className="py-16 lg:py-20 bg-white/50 dark:bg-white/[0.02]">
            <div className="container-custom">
              <FadeIn>
                <div className="text-center mb-12">
                  <span className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${service.gradient} text-white text-sm font-semibold mb-4`}>
                    Features
                  </span>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-dark-900 dark:text-white">
                    What's <span className={`text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>Included</span>
                  </h2>
                  <p className="text-dark-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Comprehensive solutions tailored to your needs
                  </p>
                </div>
              </FadeIn>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {service.features.map((feature, index) => (
                  <FadeIn key={index} delay={index * 0.05}>
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="relative p-5 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-primary-500/50 dark:hover:border-primary-500/50 transition-all group shadow-sm dark:shadow-none"
                    >
                      {/* Hover Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity rounded-2xl`} />
                      
                      <div className="relative flex items-start gap-4">
                        <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-lg`}>
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-dark-900 dark:text-white group-hover:text-primary-500 transition-colors">
                            {feature}
                          </h3>
                        </div>
                      </div>
                    </motion.div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>

          {/* ============================================ */}
          {/* PROCESS SECTION */}
          {/* ============================================ */}
          {service.process && (
            <section className="py-16 lg:py-20">
              <div className="container-custom">
                <FadeIn>
                  <div className="text-center mb-12">
                    <span className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${service.gradient} text-white text-sm font-semibold mb-4`}>
                      Our Process
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-dark-900 dark:text-white">
                      How We <span className={`text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>Work</span>
                    </h2>
                    <p className="text-dark-600 dark:text-gray-400 max-w-2xl mx-auto">
                      A proven methodology that delivers results
                    </p>
                  </div>
                </FadeIn>

                <div className="relative">
                  {/* Connection Line - Desktop */}
                  <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent hidden lg:block" />
                  
                  <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {service.process.map((step, index) => (
                      <FadeIn key={index} delay={index * 0.1}>
                        <motion.div
                          whileHover={{ y: -10 }}
                          className="relative text-center"
                        >
                          {/* Step Icon */}
                          <div className="relative z-10 mx-auto mb-6">
                            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-4xl shadow-xl mx-auto`}>
                              {step.emoji}
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white dark:bg-dark-900 border-2 border-gray-200 dark:border-white/20 flex items-center justify-center text-sm font-bold text-dark-900 dark:text-white shadow-sm">
                              {step.step}
                            </div>
                          </div>
                          
                          <h3 className="font-bold text-dark-900 dark:text-white text-lg mb-2">{step.title}</h3>
                          <p className="text-dark-500 dark:text-gray-400 text-sm">{step.description}</p>
                        </motion.div>
                      </FadeIn>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ============================================ */}
          {/* TECH STACK SECTION */}
          {/* ============================================ */}
          {service.techStack && (
            <section className="py-16 lg:py-20 bg-white/50 dark:bg-white/[0.02]">
              <div className="container-custom">
                <FadeIn>
                  <div className="text-center mb-10">
                    <span className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${service.gradient} text-white text-sm font-semibold mb-4`}>
                      Technology
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-dark-900 dark:text-white">
                      Tools & <span className={`text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>Technologies</span>
                    </h2>
                  </div>
                </FadeIn>

                <div className="flex flex-wrap justify-center gap-3">
                  {service.techStack.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="px-5 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-dark-700 dark:text-gray-300 font-semibold hover:border-primary-500/50 hover:text-primary-500 dark:hover:text-white transition-all cursor-default shadow-sm dark:shadow-none"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ============================================ */}
          {/* FAQ SECTION */}
          {/* ============================================ */}
          {service.faqs && (
            <section className="py-16 lg:py-20">
              <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Left - Title */}
                  <FadeIn>
                    <div className="lg:sticky lg:top-32">
                      <span className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${service.gradient} text-white text-sm font-semibold mb-4`}>
                        FAQ
                      </span>
                      <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-dark-900 dark:text-white">
                        Frequently Asked{' '}
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>Questions</span>
                      </h2>
                      <p className="text-dark-600 dark:text-gray-400 mb-8">
                        Everything you need to know about our {service.title.toLowerCase()} service.
                      </p>
                      <Button as={Link} to="/contact" variant="outline" size="lg">
                        Have more questions?
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </FadeIn>

                  {/* Right - Accordions */}
                  <div className="space-y-3">
                    {service.faqs.map((faq, index) => (
                      <FadeIn key={index} delay={index * 0.1}>
                        <motion.div
                          className={`rounded-2xl border overflow-hidden transition-all ${
                            activeAccordion === index 
                              ? 'bg-white dark:bg-white/5 border-primary-500/50 shadow-lg dark:shadow-none' 
                              : 'bg-white dark:bg-white/[0.02] border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20'
                          }`}
                        >
                          <button
                            onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                            className="w-full flex items-center justify-between p-5 text-left"
                          >
                            <span className="font-semibold text-dark-900 dark:text-white pr-4">{faq.question}</span>
                            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                              activeAccordion === index 
                                ? `bg-gradient-to-r ${service.gradient} text-white` 
                                : 'bg-gray-100 dark:bg-white/10 text-dark-500 dark:text-gray-400'
                            }`}>
                              {activeAccordion === index ? (
                                <ChevronUp className="w-4 h-4" />
                              ) : (
                                <ChevronDown className="w-4 h-4" />
                              )}
                            </div>
                          </button>
                          
                          <AnimatePresence>
                            {activeAccordion === index && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <div className="px-5 pb-5 text-dark-600 dark:text-gray-400">
                                  {faq.answer}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      </FadeIn>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ============================================ */}
          {/* RELATED SERVICES */}
          {/* ============================================ */}
          {relatedServices.length > 0 && (
            <section className="py-16 lg:py-20 bg-white/50 dark:bg-white/[0.02]">
              <div className="container-custom">
                <FadeIn>
                  <div className="text-center mb-12">
                    <span className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${service.gradient} text-white text-sm font-semibold mb-4`}>
                      Explore More
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-dark-900 dark:text-white">
                      Related <span className={`text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>Services</span>
                    </h2>
                  </div>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-6">
                  {relatedServices.map((related, index) => (
                    <FadeIn key={related.slug} delay={index * 0.1}>
                      <Link to={`/services/${related.slug}`}>
                        <motion.div
                          whileHover={{ y: -10 }}
                          className="group relative p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-primary-500/50 transition-all overflow-hidden shadow-sm dark:shadow-none"
                        >
                          {/* Hover Gradient */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${related.gradient} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity`} />
                          
                          <div className="relative">
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${related.gradient} flex items-center justify-center mb-4 text-white shadow-lg`}>
                              <ServiceIcon name={related.iconName} className="w-7 h-7" />
                            </div>
                            <h3 className="font-bold text-dark-900 dark:text-white text-xl mb-2 group-hover:text-primary-500 transition-colors">
                              {related.title}
                            </h3>
                            <p className="text-dark-500 dark:text-gray-400 text-sm line-clamp-2 mb-4">
                              {related.description}
                            </p>
                            <div className="flex items-center text-sm font-medium text-primary-500 group-hover:text-primary-400">
                              Learn more
                              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </motion.div>
                      </Link>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ============================================ */}
          {/* WHY CHOOSE US */}
          {/* ============================================ */}
          <section className="py-16 lg:py-20">
            <div className="container-custom">
              <FadeIn>
                <div className="text-center mb-12">
                  <span className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${service.gradient} text-white text-sm font-semibold mb-4`}>
                    Why CACTRIX
                  </span>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 dark:text-white">
                    Why Choose <span className={`text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>Us</span>
                  </h2>
                </div>
              </FadeIn>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: Zap, title: 'Fast Delivery', desc: 'Rapid development without compromising quality', color: 'from-blue-500 to-cyan-500' },
                  { icon: Code2, title: 'Clean Code', desc: 'Scalable, maintainable architecture', color: 'from-purple-500 to-pink-500' },
                  { icon: ShieldCheck, title: 'Secure & Reliable', desc: 'Built-in security best practices', color: 'from-green-500 to-emerald-500' },
                  { icon: Users, title: '24/7 Support', desc: 'Always here when you need us', color: 'from-orange-500 to-amber-500' },
                ].map((item, index) => (
                  <FadeIn key={index} delay={index * 0.1}>
                    <motion.div 
                      whileHover={{ y: -5 }}
                      className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 text-center group hover:shadow-lg dark:hover:shadow-none transition-all"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 text-white shadow-lg`}
                      >
                        <item.icon className="w-8 h-8" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">{item.title}</h3>
                      <p className="text-dark-500 dark:text-gray-400 text-sm">{item.desc}</p>
                    </motion.div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* CTA Section */}
      <CTA />
    </>
  );
};

export default ServiceDetailsPage;