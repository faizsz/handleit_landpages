import React from 'react';
import { Star, MapPin, Briefcase } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sari Dewi',
    business: 'Warung Kopi Sari',
    city: 'Yogyakarta',
    avatar: 'SD',
    avatarColor: '#7a3b2e',
    rating: 5,
    text: 'Awalnya ragu karena harganya murah, takut hasilnya asal-asalan. Tapi pas jadi, websitenya rapi banget! Pelanggan sekarang bisa lihat menu dan lokasi kami langsung dari HP. Prosesnya cepet, gak ribet sama sekali.',
    service: 'Landing Page',
  },
  {
    id: 2,
    name: 'Budi Santoso',
    business: 'Laundry Bersih Mas Budi',
    city: 'Semarang',
    avatar: 'BS',
    avatarColor: '#3d4255',
    rating: 5,
    text: 'Bot WA-nya keren banget! Sekarang order bisa masuk otomatis ke Google Sheets tanpa saya harus balas satu-satu. Hemat waktu banyak. Handle IT beneran profesional — dikerjain tepat waktu dan hasilnya melebihi ekspektasi.',
    service: 'Bot WhatsApp',
  },
];

const Stars = ({ count }) => (
  <div style={{ display: 'flex', gap: '3px' }}>
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
    ))}
  </div>
);

const Testimonials = () => (
  <section style={{ backgroundColor: '#fff', padding: '90px 0' }}>
    <div className="container">
      <div className="section-header">
        <span className="section-label">Testimoni</span>
        <h2 className="section-title">Apa Kata Mereka?</h2>
        <p className="section-sub">
          Pendapat jujur dari pelanggan yang sudah pakai layanan Handle IT.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '24px',
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        {TESTIMONIALS.map(t => (
          <div key={t.id} style={{
            background: '#fff',
            borderRadius: '20px',
            padding: '32px',
            border: '1px solid #e2e0db',
            transition: 'all 0.3s ease',
            position: 'relative',
          }} className="card">
            {/* Quote mark */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '24px',
              fontSize: '4rem',
              lineHeight: 1,
              color: '#f0ede8',
              fontFamily: 'Georgia, serif',
              userSelect: 'none',
            }}>"</div>

            {/* Rating */}
            <div style={{ marginBottom: '16px' }}>
              <Stars count={t.rating} />
            </div>

            {/* Review text */}
            <p style={{
              fontSize: '0.95rem',
              color: '#5a6175',
              lineHeight: '1.7',
              marginBottom: '24px',
              fontStyle: 'italic',
            }}>
              "{t.text}"
            </p>

            {/* Author */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderTop: '1px solid #f0ede8', paddingTop: '20px' }}>
              <div style={{
                width: '46px', height: '46px',
                borderRadius: '50%',
                backgroundColor: t.avatarColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: '800',
                fontSize: '0.95rem',
                flexShrink: 0,
              }}>{t.avatar}</div>
              <div>
                <div style={{ fontWeight: '800', color: '#2c3045', fontSize: '0.95rem' }}>{t.name}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                  <Briefcase size={12} color="#8a8fa8" />
                  <span style={{ fontSize: '0.8rem', color: '#8a8fa8' }}>{t.business}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                  <MapPin size={12} color="#8a8fa8" />
                  <span style={{ fontSize: '0.8rem', color: '#8a8fa8' }}>{t.city}</span>
                </div>
              </div>
              <div style={{ marginLeft: 'auto' }}>
                <span style={{
                  fontSize: '0.72rem',
                  fontWeight: '700',
                  backgroundColor: 'rgba(61,66,85,0.08)',
                  color: '#3d4255',
                  padding: '4px 10px',
                  borderRadius: '50px',
                }}>{t.service}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '36px' }}>
        <a
          href="https://wa.me/6288987204298"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
          style={{ fontSize: '0.9rem' }}
        >
          Jadilah Pelanggan Berikutnya →
        </a>
      </div>
    </div>
  </section>
);

export default Testimonials;
