import React from 'react';
import { Tag, ShieldCheck, Smile } from 'lucide-react';

const PROMISES = [
  {
    icon: <Tag size={36} strokeWidth={1.8} />,
    color: '#7a3b2e',
    bgColor: 'rgba(122,59,46,0.08)',
    title: 'Harga Transparan',
    desc: 'Tidak ada biaya tersembunyi. Harga yang kamu lihat = yang kamu bayar. Titik.',
    emphasis: 'Lihat = Bayar.',
  },
  {
    icon: <ShieldCheck size={36} strokeWidth={1.8} />,
    color: '#1e8a4a',
    bgColor: 'rgba(30,138,74,0.08)',
    title: 'Bayar Setelah Jadi',
    desc: 'Kamu lihat hasilnya dulu, baru transfer. Kami kerja dulu, uang belakangan.',
    emphasis: 'Kerja dulu, uang belakangan.',
  },
  {
    icon: <Smile size={36} strokeWidth={1.8} />,
    color: '#3d4255',
    bgColor: 'rgba(61,66,85,0.08)',
    title: 'Gak Harus Ngerti IT',
    desc: 'Cerita aja bisnis kamu, kami yang urus sisanya. Tidak perlu paham coding sama sekali.',
    emphasis: 'Kami yang urus sisanya.',
  },
];

const Promises = () => (
  <section style={{ backgroundColor: '#fff', padding: '80px 0' }}>
    <div className="container">
      <div className="section-header">
        <span className="section-label">Janji Kami</span>
        <h2 className="section-title">3 Janji Kami — Anti Takut, Anti Tipu</h2>
        <p className="section-sub">
          Kami tahu banyak orang was-was saat mau pesan jasa digital. Makanya kami pegang 3 janji ini dengan serius.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px',
      }}>
        {PROMISES.map((p, i) => (
          <div key={i} style={{
            background: '#fff',
            borderRadius: '20px',
            padding: '36px 32px',
            border: '1px solid #e2e0db',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden',
          }}
            className="card"
          >
            {/* Subtle top accent bar */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0,
              height: '4px',
              background: p.color,
              borderRadius: '20px 20px 0 0',
            }} />

            <div style={{
              width: '68px', height: '68px',
              backgroundColor: p.bgColor,
              borderRadius: '16px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: p.color,
              marginBottom: '24px',
            }}>
              {p.icon}
            </div>

            <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#2c3045', marginBottom: '12px' }}>
              {p.title}
            </h3>
            <p style={{ color: '#5a6175', lineHeight: '1.65', fontSize: '0.97rem' }}>
              {p.desc.replace(p.emphasis, '')}
              <strong style={{ color: p.color, fontWeight: '700' }}> {p.emphasis}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Promises;
