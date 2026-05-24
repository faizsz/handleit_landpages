import React from 'react';
import { Package, Home, Users } from 'lucide-react';

const REASONS = [
  {
    icon: <Package size={28} strokeWidth={1.8} />,
    title: 'Pakai Template Premium',
    desc: 'Kami pakai template & komponen website berkualitas tinggi yang sudah siap. Tidak membangun dari nol, jadi efisien dan tetap bagus.',
    color: '#7a3b2e',
    bg: 'rgba(122,59,46,0.08)',
  },
  {
    icon: <Home size={28} strokeWidth={1.8} />,
    title: 'Kerja 100% Remote',
    desc: 'Tidak ada kantor mewah, tidak ada biaya operasional besar. Semuanya dikerjakan dari rumah, hemat yang disalurkan ke harga.',
    color: '#3d4255',
    bg: 'rgba(61,66,85,0.08)',
  },
  {
    icon: <Users size={28} strokeWidth={1.8} />,
    title: 'UMKM Berhak Digital',
    desc: 'Kami percaya bahwa warung kopi, jasa laundry, dan usaha kecil berhak tampil profesional secara online. Ini misi kami.',
    color: '#1e8a4a',
    bg: 'rgba(30,138,74,0.08)',
  },
];

const WhyAffordable = () => (
  <section style={{ backgroundColor: '#f5f4f1', padding: '90px 0' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}
        className="why-grid">

        {/* Left — Text */}
        <div>
          <span className="section-label">Edukasi Harga</span>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '16px' }}>
            Kenapa Bisa <span style={{ color: '#7a3b2e' }}>Semurah Ini?</span>
          </h2>
          <p style={{ color: '#5a6175', fontSize: '1rem', lineHeight: '1.75', marginBottom: '28px' }}>
            Harga Rp 35.000 mungkin terdengar mencurigakan. Tapi kami tidak mau bohong — ini alasan jujurnya kenapa kami bisa tetap murah tanpa kompromikan kualitas.
          </p>
          <div style={{
            backgroundColor: '#fff',
            border: '1px solid #e2e0db',
            borderRadius: '14px',
            padding: '20px 24px',
            display: 'flex',
            gap: '14px',
            alignItems: 'flex-start',
          }}>
            <span style={{ fontSize: '1.5rem' }}>💬</span>
            <p style={{ color: '#5a6175', fontSize: '0.92rem', lineHeight: '1.65', margin: 0 }}>
              <strong style={{ color: '#2c3045' }}>Tetap ada kontrak tertulis & garansi.</strong> Murah bukan berarti asal-asalan. Setiap order dijamin dengan kontrak digital dan garansi revisi 30 hari.
            </p>
          </div>
        </div>

        {/* Right — Reason Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {REASONS.map((r, i) => (
            <div key={i} style={{
              display: 'flex',
              gap: '18px',
              alignItems: 'flex-start',
              background: '#fff',
              borderRadius: '16px',
              padding: '22px 24px',
              border: '1px solid #e2e0db',
              transition: 'all 0.3s ease',
            }} className="card">
              <div style={{
                width: '50px', height: '50px', borderRadius: '12px',
                backgroundColor: r.bg, color: r.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                {r.icon}
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: '800', color: '#2c3045', marginBottom: '6px' }}>
                  {r.title}
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#5a6175', lineHeight: '1.6', margin: 0 }}>
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <style>{`
      @media (max-width: 768px) {
        .why-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
      }
    `}</style>
  </section>
);

export default WhyAffordable;
