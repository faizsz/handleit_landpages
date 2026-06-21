import React from 'react';
import { Star, MapPin, Briefcase } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Pak Man',
    business: 'Martabak Pak Man',
    city: 'Lokal',
    avatar: 'PM',
    avatarColor: '#7a3b2e',
    rating: 5,
    text: 'Sistem kasir dan stoknya beneran ngebantu banget. Dulu nyatat manual di buku, sekarang tinggal klik. Laporan harian langsung keluar, saya bisa tahu mana produk yang paling laku. Handle IT gercep, gak banyak ngomong langsung dikerjain.',
    service: 'Sistem ERP & Kasir',
  },
  {
    id: 2,
    name: 'Setya',
    business: 'Mahasiswa Teknik Informatika',
    city: 'Kampus',
    avatar: 'ST',
    avatarColor: '#1a3a4a',
    rating: 5,
    text: 'Sebagai anak IT aku cukup kritis soal kode dan struktur. Tapi ini rapi, bersih, dan scalable. Bot WA yang dibuat juga efisien, logikanya bener. Harganya gila sih murah banget buat kualitas segini. Recommended banget buat yang butuh solusi teknis cepat.',
    service: 'Bot WhatsApp & Otomasi',
  },
  {
    id: 3,
    name: 'Roy',
    business: 'Ketua Organisasi Mahasiswa',
    city: 'Kampus',
    avatar: 'RY',
    avatarColor: '#1e5a3a',
    rating: 5,
    text: 'SIGMA beneran solve masalah organisasi kami. Dulu pendaftaran anggota kacau, sekarang semua terdata rapi. Fitur manajemen divisi dan agenda kegiatan juga pas banget. Anggota kami yang awam IT pun gampang makenya. Terima kasih Handle IT!',
    service: 'Sistem Informasi Organisasi',
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
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
        maxWidth: '1100px',
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
