// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Portfolio from '../components/sections/Portfolio';
import Stats from '../components/sections/Stats';
import Testimonials from '../components/sections/Testimonials';
import Team from '../components/sections/Team';
import Pricing from '../components/sections/Pricing';
import CTA from '../components/sections/CTA';
import Contact from '../components/sections/Contact';
import TechStack from '../components/sections/TechStack';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Stats />
      <TechStack />
      <Testimonials />
      <Team />
      <Pricing />
      <CTA />
      <Contact />
    </>
  );
};

export default Home;