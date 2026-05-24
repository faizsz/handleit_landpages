import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Promises from './components/Promises';
import Services from './components/Services';
import Pricing from './components/Pricing';
import WhyAffordable from './components/WhyAffordable';
import HowItWorks from './components/HowItWorks';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Promises />
        <Services />
        <Pricing />
        <WhyAffordable />
        <div id="cara-kerja"><HowItWorks /></div>
        <Portfolio />
        <Testimonials />
        <FAQ />
        <div id="kontak"><FinalCTA /></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
