import React from 'react';
import { Routes, Route } from 'react-router-dom';

/* ── Landing page sections ── */
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Promises from './components/Promises';
import ProductShowcase from './components/ProductShowcase';
import Pricing from './components/Pricing';
import WhyAffordable from './components/WhyAffordable';
import HowItWorks from './components/HowItWorks';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

/* ── Detail pages ── */
import WebsitePage from './pages/WebsitePage';
import AutomationPage from './pages/AutomationPage';

/* ── Full landing page assembled ── */
const LandingPage = () => (
  <div className="app">
    <Navbar />
    <main>
      <Hero />
      <Promises />
      <ProductShowcase />
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/layanan/website" element={<WebsitePage />} />
      <Route path="/layanan/automation-iot" element={<AutomationPage />} />
    </Routes>
  );
}

export default App;
