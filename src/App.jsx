import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Services from './components/Services';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import PricingHighlight from './components/PricingHighlight';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Services />
        <Features />
        <div id="cara-order"><HowItWorks /></div>
        <Portfolio />
        <Testimonials />
        <PricingHighlight />
        <FAQ />
        <div id="kontak"><FinalCTA /></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
