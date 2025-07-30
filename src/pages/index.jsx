import React from 'react';
import '../index.css';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import Benefits from '../components/Benefits';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Main() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <Benefits />
      <About />
      <Testimonials />
      <FAQ/>
      <Contact />
      <Footer />
    </div>
  );
}

export default Main;
