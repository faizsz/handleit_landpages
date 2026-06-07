import React from 'react';
import { Mail, Phone, MessageCircle, ExternalLink } from 'lucide-react';

const Footer = () => (
  <footer style={{ backgroundColor: '#1e2235', color: '#fff', paddingTop: '72px', paddingBottom: '32px' }}>
    <div className="container">
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '40px',
        marginBottom: '56px',
      }}>

        {/* Brand */}
        <div style={{ gridColumn: 'span 1' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <img src="/logo.png" alt="Handle IT Logo" style={{ height: '32px', width: 'auto' }} />
            <span style={{ fontSize: '1.2rem', fontWeight: '800', letterSpacing: '-0.01em' }}>Handle IT</span>
          </div>
          <p style={{ color: '#8a8fa8', fontSize: '0.88rem', lineHeight: '1.7', marginBottom: '20px', maxWidth: '220px' }}>
            Jasa digital terjangkau untuk UMKM & pelajar. Kami yang tangani, kamu fokus ke tujuanmu.
          </p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <a
              href="https://instagram.com/handleit.id"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '38px', height: '38px',
                backgroundColor: 'rgba(255,255,255,0.08)',
                borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#8a8fa8',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#8a8fa8'; }}
            >
              <ExternalLink size={18} />
            </a>
            <a
              href="https://wa.me/6288987204298"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '38px', height: '38px',
                backgroundColor: 'rgba(37,211,102,0.15)',
                borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#25D366',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(37,211,102,0.25)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(37,211,102,0.15)'; }}
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: '700', marginBottom: '20px', color: '#e2e0db' }}>
            Navigasi
          </h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { href: '#produk-layanan', label: 'Layanan' },
              { href: '#cara-kerja', label: 'Cara Kerja' },
              { href: '#faq', label: 'FAQ' },
              { href: '#kontak', label: 'Kontak' },
            ].map(link => (
              <li key={link.href}>
                <a href={link.href} className="footer-link"
                  style={{ color: '#8a8fa8', fontSize: '0.88rem', transition: 'color 0.3s' }}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Layanan */}
        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: '700', marginBottom: '20px', color: '#e2e0db' }}>
            Layanan
          </h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {['Landing Page', 'Web Operasional', 'Bot WhatsApp', 'Template Digital', 'Maintenance'].map(s => (
              <li key={s}>
                <a href="#produk-layanan" className="footer-link"
                  style={{ color: '#8a8fa8', fontSize: '0.88rem', transition: 'color 0.3s' }}>
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: '700', marginBottom: '20px', color: '#e2e0db' }}>
            Kontak
          </h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#8a8fa8', fontSize: '0.88rem' }}>
              <MessageCircle size={16} color="#25D366" />
              <a href="https://wa.me/6288987204298" style={{ color: '#8a8fa8' }} className="footer-link">
                088987204298
              </a>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#8a8fa8', fontSize: '0.88rem' }}>
              <Mail size={16} color="#7a3b2e" />
              <a href="mailto:handleeit@gmail.com" style={{ color: '#8a8fa8' }} className="footer-link">
                handleeit@gmail.com
              </a>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#8a8fa8', fontSize: '0.88rem' }}>
              <ExternalLink size={16} color="#8a8fa8" />
              <a href="https://instagram.com/handleit.id" style={{ color: '#8a8fa8' }} className="footer-link">
                @handleit.id
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        paddingTop: '28px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
      }}>
        <span style={{ color: '#5a6175', fontSize: '0.82rem' }}>
          © 2026 Handle IT. All rights reserved.
        </span>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#" style={{ color: '#5a6175', fontSize: '0.82rem' }} className="footer-link">Privacy Policy</a>
          <a href="#" style={{ color: '#5a6175', fontSize: '0.82rem' }} className="footer-link">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
