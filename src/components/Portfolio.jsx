import React from 'react';
import { Monitor, Smartphone, Bot } from 'lucide-react';

const PROJECTS = [
  {
    id: 'warung-kopi',
    label: 'Landing Page',
    labelColor: '#7a3b2e',
    name: 'Website Warung Kopi Bu Sari',
    desc: 'Landing page untuk warung kopi lokal — menu digital, lokasi Google Maps, dan tombol pesan via WA.',
    tech: ['Landing Page', 'WhatsApp CTA', 'Google Maps'],
    icon: <Monitor size={40} strokeWidth={1.4} color="#3d4255" />,
    bg: 'linear-gradient(135deg, #f5f0ec 0%, #ede5de 100%)',
    accent: '#7a3b2e',
  },
  {
    id: 'laundry',
    label: 'Web Toko',
    labelColor: '#3d4255',
    name: 'Landing Page Jasa Laundry Pak Budi',
    desc: 'Website operasional dengan daftar harga layanan, form order online, dan integrasi WhatsApp untuk konfirmasi.',
    tech: ['Multi-halaman', 'Form Order', 'WA Integration'],
    icon: <Smartphone size={40} strokeWidth={1.4} color="#3d4255" />,
    bg: 'linear-gradient(135deg, #edf2f7 0%, #e2ecf6 100%)',
    accent: '#3d4255',
  },
  {
    id: 'bot-umkm',
    label: 'Bot WA',
    labelColor: '#1e8a4a',
    name: 'Bot WhatsApp UMKM Toko Sembako',
    desc: 'Bot auto-reply untuk terima pesanan, kirim daftar harga otomatis, dan rekap order ke Google Sheets.',
    tech: ['Auto-reply', 'Google Sheets', 'Order Otomatis'],
    icon: <Bot size={40} strokeWidth={1.4} color="#1e8a4a" />,
    bg: 'linear-gradient(135deg, #edfbf1 0%, #d9f5e4 100%)',
    accent: '#1e8a4a',
  },
];

const Portfolio = () => (
  <section style={{ backgroundColor: '#f5f4f1', padding: '90px 0' }}>
    <div className="container">
      <div className="section-header">
        <span className="section-label">Portofolio</span>
        <h2 className="section-title">Project yang Sudah Kami Kerjakan</h2>
        <p className="section-sub">
          Contoh nyata layanan kami untuk UMKM lokal. Siap dikustomisasi sesuai bisnis kamu.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px',
      }}>
        {PROJECTS.map(proj => (
          <div key={proj.id} className="card" style={{
            background: '#fff',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid #e2e0db',
            transition: 'all 0.3s ease',
            padding: 0,
          }}>
            {/* Mock visual */}
            <div style={{
              background: proj.bg,
              height: '170px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}>
              <div style={{
                width: '80px', height: '80px',
                backgroundColor: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(8px)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
              }}>
                {proj.icon}
              </div>
              <div style={{
                position: 'absolute',
                top: '14px',
                left: '14px',
                backgroundColor: proj.labelColor,
                color: '#fff',
                fontSize: '0.72rem',
                fontWeight: '700',
                padding: '4px 12px',
                borderRadius: '50px',
                letterSpacing: '0.05em',
              }}>{proj.label}</div>
            </div>

            {/* Content */}
            <div style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#2c3045', marginBottom: '8px' }}>
                {proj.name}
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#5a6175', lineHeight: '1.6', marginBottom: '16px' }}>
                {proj.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {proj.tech.map((t, i) => (
                  <span key={i} style={{
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    backgroundColor: `${proj.accent}12`,
                    color: proj.accent,
                    padding: '4px 10px',
                    borderRadius: '50px',
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p style={{ textAlign: 'center', marginTop: '32px', color: '#8a8fa8', fontSize: '0.875rem' }}>
        ✦ Contoh di atas adalah mock-up ilustrasi layanan kami. Ingin seperti ini?{' '}
        <a href="https://wa.me/6288987204298" style={{ color: '#3d4255', fontWeight: '700', textDecoration: 'underline' }}>
          Hubungi kami sekarang.
        </a>
      </p>
    </div>
  </section>
);

export default Portfolio;
