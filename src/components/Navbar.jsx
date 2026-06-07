import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: 'produk-layanan', label: 'Layanan' },
    { href: 'cara-kerja', label: 'Cara Kerja' },
    { href: 'portofolio', label: 'Portofolio' },
    { href: 'faq', label: 'FAQ' },
  ];

  const NAV_HEIGHT = 64;

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileOpen(false);

    const scrollToTarget = () => {
      const el = document.getElementById(targetId);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
      window.scrollTo({ top, behavior: 'smooth' });
    };

    // If not on the landing page, go home first then scroll
    if (window.location.pathname !== '/') {
      window.location.href = `/#${targetId}`;
    } else {
      scrollToTarget();
    }
  };

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        height: '64px',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #f0ede8',
        boxShadow: isScrolled ? '0 1px 12px rgba(61,66,85,0.07)' : 'none',
        transition: 'box-shadow 0.3s ease',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 32px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <a href="#" style={{
            display: 'flex', alignItems: 'center', gap: '9px',
            textDecoration: 'none', flexShrink: 0,
          }}>
            <img src="/logo.png" alt="Handle IT" style={{ height: '32px', width: 'auto' }} />
            <span style={{
              fontSize: '1.15rem', fontWeight: '800',
              color: '#3d4255', letterSpacing: '-0.02em',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>Handle IT</span>
          </a>

          {/* Center nav */}
          <div className="desktop-menu" style={{
            display: 'flex', alignItems: 'center', gap: '4px',
            position: 'absolute', left: '50%', transform: 'translateX(-50%)',
          }}>
            {navLinks.map(link => (
              <a key={link.href} href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  padding: '7px 14px',
                  borderRadius: '8px',
                  fontWeight: '500',
                  fontSize: '0.9375rem',
                  color: '#3d4255',
                  fontFamily: "'Inter', sans-serif",
                  transition: 'background 0.2s, color 0.2s',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => e.target.style.backgroundColor = '#f2f0ec'}
                onMouseLeave={e => e.target.style.backgroundColor = 'transparent'}
              >{link.label}</a>
            ))}
          </div>

          {/* Right CTA */}
          <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <a
              href="https://wa.me/6288987204298"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '7px',
                backgroundColor: '#25d366', color: '#fff',
                borderRadius: '99px', padding: '10px 20px',
                fontFamily: "'Inter', sans-serif", fontWeight: '600', fontSize: '0.875rem',
                textDecoration: 'none', transition: 'background 0.2s, transform 0.2s',
                boxShadow: '0 2px 12px rgba(37,211,102,0.3)',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#1da851'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#25d366'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              💬 Chat Gratis Sekarang
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            style={{
              display: 'none', alignItems: 'center', justifyContent: 'center',
              background: 'none', border: 'none', cursor: 'pointer', padding: '6px',
              color: '#3d4255',
            }}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {isMobileOpen && (
        <div style={{
          position: 'fixed', top: '64px', left: 0, right: 0, zIndex: 999,
          backgroundColor: '#fff', borderBottom: '1px solid #f0ede8',
          padding: '16px 24px 24px', animation: 'fadeInUp 0.2s ease both',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '16px' }}>
            {navLinks.map(link => (
              <a key={link.href} href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  padding: '11px 14px', borderRadius: '8px', fontWeight: '500',
                  fontSize: '0.95rem', color: '#3d4255', fontFamily: "'Inter', sans-serif",
                  textDecoration: 'none',
                }}>{link.label}</a>
            ))}
          </div>
          <a href="https://wa.me/6288987204298" target="_blank" rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              backgroundColor: '#25d366', color: '#fff', borderRadius: '99px',
              padding: '12px', fontFamily: "'Inter', sans-serif", fontWeight: '600',
              fontSize: '0.9375rem', textDecoration: 'none',
            }}>
            💬 Chat Gratis Sekarang
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
