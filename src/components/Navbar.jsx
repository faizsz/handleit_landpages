import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#layanan', label: 'Layanan' },
    { href: '#harga', label: 'Harga' },
    { href: '#cara-kerja', label: 'Cara Kerja' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: isScrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      boxShadow: isScrolled ? '0 2px 20px rgba(61,66,85,0.1)' : 'none',
      transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
      padding: isScrolled ? '14px 0' : '22px 0',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="/logo.png" alt="Handle IT" style={{ height: '36px', width: 'auto' }} />
          <span style={{
            fontSize: '1.35rem',
            fontWeight: '800',
            color: isScrolled ? '#3d4255' : '#fff',
            transition: 'color 0.3s',
            letterSpacing: '-0.02em'
          }}>Handle IT</span>
        </a>

        {/* Desktop Menu — Center */}
        <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              style={{
                padding: '8px 16px',
                borderRadius: '50px',
                fontWeight: '600',
                fontSize: '0.9rem',
                color: isScrolled ? '#3d4255' : 'rgba(255,255,255,0.9)',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => {
                e.target.style.backgroundColor = isScrolled ? 'rgba(61,66,85,0.08)' : 'rgba(255,255,255,0.15)';
              }}
              onMouseLeave={e => {
                e.target.style.backgroundColor = 'transparent';
              }}
            >{link.label}</a>
          ))}
        </div>

        {/* CTA — Right */}
        <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a
            href="https://wa.me/6288987204298"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-wa pulse-wa"
            style={{ fontSize: '0.9rem', padding: '10px 20px', gap: '8px' }}
          >
            <MessageCircle size={16} />
            Chat Gratis Sekarang
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-menu-btn"
          style={{
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
          }}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen
            ? <X size={26} color={isScrolled ? '#3d4255' : '#fff'} />
            : <Menu size={26} color={isScrolled ? '#3d4255' : '#fff'} />
          }
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileOpen && (
        <div style={{
          backgroundColor: '#fff',
          borderTop: '1px solid #e2e0db',
          padding: '20px 24px 28px',
          animation: 'fadeInUp 0.25s ease both',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '20px' }}>
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                style={{
                  padding: '12px 16px',
                  borderRadius: '10px',
                  fontWeight: '600',
                  color: '#3d4255',
                  fontSize: '1rem',
                  transition: 'background 0.2s',
                }}
              >{link.label}</a>
            ))}
          </div>
          <a
            href="https://wa.me/6288987204298"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-wa"
            style={{ width: '100%', fontSize: '1rem', padding: '13px' }}
          >
            <MessageCircle size={18} /> Chat Gratis Sekarang
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
