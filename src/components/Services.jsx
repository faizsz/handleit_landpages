import React from 'react';
import { Globe, Bot, FileText, Wrench, Server, MessageCircle } from 'lucide-react';

const SERVICES = [
  {
    id: 'landing',
    icon: <Globe size={28} strokeWidth={1.8} />,
    name: 'Landing Page',
    desc: 'Website satu halaman untuk promosi, event, atau produk UMKM.',
    startPrice: 'Rp 35.000',
    unit: '/ bulan',
    badge: 'Terlaris',
    featured: true,
  },
  {
    id: 'web-ops',
    icon: <Server size={28} strokeWidth={1.8} />,
    name: 'Web Operasional',
    desc: 'Website multi-halaman untuk katalog, toko online, atau portofolio.',
    startPrice: 'Rp 75.000',
    unit: '/ bulan',
  },
  {
    id: 'bot-wa',
    icon: <Bot size={28} strokeWidth={1.8} />,
    name: 'Bot WhatsApp',
    desc: 'Auto-reply, terima order otomatis & survei terintegrasi Google Sheets.',
    startPrice: 'Rp 49.000',
    unit: '/ bulan',
  },
  {
    id: 'template',
    icon: <FileText size={28} strokeWidth={1.8} />,
    name: 'Template Digital',
    desc: 'CV, undangan, invoice, sertifikat — format Canva/Google Docs/Figma.',
    startPrice: 'Rp 15.000',
    unit: '/ template',
  },
  {
    id: 'maintenance',
    icon: <Wrench size={28} strokeWidth={1.8} />,
    name: 'Maintenance',
    desc: 'Update konten, perbaikan bug, dan optimasi website yang sudah jadi.',
    startPrice: 'Rp 50.000',
    unit: '/ bulan',
  },
];

const Services = () => (
  <section id="layanan" style={{ backgroundColor: '#f5f4f1', padding: '90px 0' }}>
    <div className="container">
      <div className="section-header">
        <span className="section-label">Layanan & Harga</span>
        <h2 className="section-title">Transparan & Lengkap</h2>
        <p className="section-sub">
          Harga langsung terlihat — tidak perlu "hubungi kami dulu". Pilih yang sesuai kebutuhanmu.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '20px',
      }}>
        {SERVICES.map(svc => (
          <div key={svc.id} style={{
            background: '#fff',
            borderRadius: '20px',
            padding: '30px',
            border: svc.featured ? '2px solid #3d4255' : '1px solid #e2e0db',
            boxShadow: svc.featured ? '0 12px 40px rgba(61,66,85,0.12)' : '0 4px 16px rgba(0,0,0,0.04)',
            transition: 'all 0.3s ease',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            position: 'relative',
          }} className="card">
            {svc.badge && (
              <span style={{
                position: 'absolute', top: '18px', right: '18px',
                backgroundColor: '#7a3b2e',
                color: '#fff',
                fontSize: '0.72rem',
                fontWeight: '700',
                padding: '4px 10px',
                borderRadius: '50px',
                letterSpacing: '0.05em',
              }}>{svc.badge}</span>
            )}

            <div style={{
              width: '52px', height: '52px',
              backgroundColor: svc.featured ? 'rgba(61,66,85,0.08)' : '#f5f4f1',
              borderRadius: '12px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: svc.featured ? '#3d4255' : '#5a6175',
            }}>
              {svc.icon}
            </div>

            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#2c3045', marginBottom: '6px' }}>
                {svc.name}
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#5a6175', lineHeight: '1.55' }}>
                {svc.desc}
              </p>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid #f0ede8' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '14px' }}>
                <span style={{ fontSize: '0.85rem', color: '#8a8fa8', fontWeight: '500' }}>Mulai</span>
                <span style={{ fontSize: '1.4rem', fontWeight: '800', color: svc.featured ? '#3d4255' : '#7a3b2e' }}>
                  {svc.startPrice}
                </span>
                <span style={{ fontSize: '0.82rem', color: '#8a8fa8' }}>{svc.unit}</span>
              </div>
              <a
                href="https://wa.me/6288987204298"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  width: '100%',
                  backgroundColor: svc.featured ? '#3d4255' : 'transparent',
                  color: svc.featured ? '#fff' : '#3d4255',
                  border: svc.featured ? 'none' : '2px solid #3d4255',
                  padding: '11px',
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  gap: '6px',
                }}
              >
                <MessageCircle size={15} /> Pesan
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
