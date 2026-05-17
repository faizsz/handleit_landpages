import React from 'react';
import { Mail, Phone, Instagram, Music } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1a1a2e', color: '#fff', paddingTop: '80px', paddingBottom: '30px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <img src="/logo.png" alt="Handle IT Logo" style={{ height: '30px', filter: 'brightness(0) invert(1)' }} />
              <span style={{ fontSize: '1.25rem', fontWeight: '800' }}>Handle IT</span>
            </div>
            <p style={{ color: '#a0a0b8', marginBottom: '20px' }}>
              "Kami yang tangani, kamu fokus ke tujuanmu"
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="https://instagram.com/handleit.id" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', backgroundColor: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '50%', display: 'flex' }}>
                <Instagram size={20} />
              </a>
              <a href="https://tiktok.com/@HandleIt13" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', backgroundColor: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '50%', display: 'flex' }}>
                <Music size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '20px', fontWeight: '600' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><a href="#layanan" style={{ color: '#a0a0b8', transition: 'color 0.3s' }} className="footer-link">Layanan (Web, Bot, Template)</a></li>
              <li><a href="#cara-order" style={{ color: '#a0a0b8', transition: 'color 0.3s' }} className="footer-link">Cara Order</a></li>
              <li><a href="#faq" style={{ color: '#a0a0b8', transition: 'color 0.3s' }} className="footer-link">FAQ</a></li>
              <li><a href="#kontak" style={{ color: '#a0a0b8', transition: 'color 0.3s' }} className="footer-link">Kontak</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '20px', fontWeight: '600' }}>Kontak</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#a0a0b8' }}>
                <Mail size={18} /> handleeit@gmail.com
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#a0a0b8' }}>
                <Phone size={18} /> 088987204298
              </li>
            </ul>
          </div>
          
        </div>

        <div style={{ borderTop: '1px solid #33334d', paddingTop: '30px', display: 'flex', flexDirection: 'column', md: {flexDirection: 'row'}, justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
          <div style={{ color: '#a0a0b8', fontSize: '0.9rem' }}>
            © 2026 Handle IT. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px', color: '#a0a0b8', fontSize: '0.9rem' }}>
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
