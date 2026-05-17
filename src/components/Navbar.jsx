import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: isScrolled ? '15px 0' : '25px 0',
    backgroundColor: isScrolled ? 'rgba(26, 26, 46, 0.95)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
    boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none',
    transition: 'all 0.3s ease',
  };

  return (
    <nav style={navStyles}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="/logo.png" alt="Handle IT Logo" style={{ height: '40px', width: 'auto' }} />
          <span style={{ fontSize: '1.5rem', fontWeight: '800', color: isScrolled ? '#fff' : '#1a1a2e', transition: 'color 0.3s ease' }}>Handle IT</span>
        </a>

        {/* Desktop Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }} className="desktop-menu">
          <a href="#layanan" style={{ color: isScrolled ? '#f8f9fa' : '#1a1a2e', fontWeight: '500' }}>Layanan</a>
          <a href="#keunggulan" style={{ color: isScrolled ? '#f8f9fa' : '#1a1a2e', fontWeight: '500' }}>Keunggulan</a>
          <a href="#harga" style={{ color: isScrolled ? '#f8f9fa' : '#1a1a2e', fontWeight: '500' }}>Harga</a>
          <a href="#faq" style={{ color: isScrolled ? '#f8f9fa' : '#1a1a2e', fontWeight: '500' }}>FAQ</a>
          <a href="https://wa.me/6288987204298" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '10px 24px' }}>Konsultasi</a>
        </div>

        {/* Mobile Menu Button - In a real app we'd use media queries for this, adding basic styles for now */}
        <div className="mobile-menu-btn" style={{ display: 'none', cursor: 'pointer' }} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X color={isScrolled ? '#fff' : '#1a1a2e'} /> : <Menu color={isScrolled ? '#fff' : '#1a1a2e'} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
