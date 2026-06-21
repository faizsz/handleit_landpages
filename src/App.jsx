import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

/* ── Landing page sections ── */
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Promises from './components/Promises';
import ProductShowcase from './components/ProductShowcase';
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
import TemplatePage from './pages/TemplatePage';
import AdminPage from './pages/AdminPage';

/* ── Full landing page assembled ── */
const LandingPage = () => {
  // Handle hash scroll when arriving from a detail page (e.g. /#portofolio)
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;
    const NAV_HEIGHT = 64;
    // Wait for sections to render before scrolling
    const timer = setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Promises />
        <ProductShowcase />
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
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/layanan/website" element={<WebsitePage />} />
      <Route path="/layanan/automation-iot" element={<AutomationPage />} />
      <Route path="/layanan/template-digital" element={<TemplatePage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}

export default App;
