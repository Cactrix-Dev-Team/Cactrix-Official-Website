// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import Button from '../ui/Button';
import { useScrollPosition } from '../../hooks/useScrollPosition';

// 1. Services Data Import
import { servicesData } from '../../data/servicesData';

// 2. Logo Import (Path එක check කරගන්න)
// Logo එක assets folder එකේ තියෙන විදියට:
import logoImg from '../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { scrollPosition, scrollDirection } = useScrollPosition();
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: servicesData.map(service => ({
        name: service.title,
        path: `/services/${service.slug}`
      }))
    },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isScrolled = scrollPosition > 20;
  // Scroll Down කරනකොට Navbar එක හංගනවා, Up කරනකොට පෙන්නනවා (Modern UX)
  const isHidden = scrollDirection === 'down' && scrollPosition > 200;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: isHidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300 ease-in-out
        ${isScrolled 
          ? 'py-3 bg-white/80 dark:bg-dark-950/80 backdrop-blur-lg shadow-lg border-b border-dark-200/50 dark:border-dark-800/50' 
          : 'py-5 bg-transparent'
        }
      `}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          
          {/* --- Logo Section --- */}
          <Link to="/" className="relative z-50">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2"
            >
              {/* 
                 Logo Image:
                 - h-10 w-auto: උස fix කරලා width auto ගන්නවා.
                 - dark:invert: මේක තමයි මැජික් එක. Dark mode එකේදී කළු logo එක සුදු කරනවා.
                 - object-contain: Image එක ඇදෙන්නේ නැතුව තියාගන්නවා.
              */}
              <img 
                src={logoImg} 
                alt="CACTRIX Logo" 
                className="h-10 w-auto object-contain transition-all duration-300 dark:invert dark:brightness-0 dark:sepia-0 dark:contrast-200"
              />
            </motion.div>
          </Link>

          {/* --- Desktop Navigation (Modern Pill Style) --- */}
          <div className="hidden lg:flex items-center bg-dark-50/50 dark:bg-dark-900/30 px-2 py-1.5 rounded-full border border-dark-100/50 dark:border-dark-800/50 backdrop-blur-sm">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`
                    px-4 py-2 rounded-full text-sm font-semibold
                    transition-all duration-300
                    flex items-center gap-1
                    ${location.pathname === item.path 
                      ? 'text-primary-600 bg-white dark:bg-dark-800 shadow-sm' 
                      : 'text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-white/50 dark:hover:bg-dark-800/50'
                    }
                  `}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-4 w-60 p-2 bg-white/95 dark:bg-dark-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-dark-100 dark:border-dark-700 overflow-hidden"
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="block px-4 py-3 rounded-xl text-sm font-medium text-dark-600 dark:text-dark-300 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-dark-800 transition-all"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* --- Right Side Actions --- */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button variant="primary" size="md" className="shadow-lg shadow-primary-500/20">
              Get Started
            </Button>
          </div>

          {/* --- Mobile Menu Toggle --- */}
          <div className="flex lg:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 p-2 rounded-full hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-dark-900 dark:text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-dark-900 dark:text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </div>

      {/* --- Mobile Menu Dropdown --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden fixed top-0 left-0 w-full bg-white dark:bg-dark-950 overflow-y-auto pt-24 pb-10 px-4"
          >
            <div className="flex flex-col space-y-6 container-custom">
              {navItems.map((item, index) => (
                <div key={item.name} className="border-b border-dark-100 dark:border-dark-800 pb-4 last:border-0">
                   {item.dropdown ? (
                      <div className="space-y-4">
                         <div className="text-xl font-bold text-dark-900 dark:text-white">{item.name}</div>
                         <div className="grid grid-cols-1 gap-2 pl-4">
                            {item.dropdown.map((subItem) => (
                               <Link
                                  key={subItem.path}
                                  to={subItem.path}
                                  onClick={() => setIsOpen(false)}
                                  className="block py-2 px-4 rounded-lg bg-dark-50 dark:bg-dark-900 text-dark-600 dark:text-dark-300 hover:text-primary-500"
                               >
                                  {subItem.name}
                               </Link>
                            ))}
                         </div>
                      </div>
                   ) : (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`
                          block text-xl font-bold
                          ${location.pathname === item.path 
                            ? 'text-primary-500' 
                            : 'text-dark-900 dark:text-white'
                          }
                        `}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                   )}
                </div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-6"
              >
                <Button variant="primary" size="lg" className="w-full text-lg shadow-xl shadow-primary-500/20">
                  Get Started Now
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;