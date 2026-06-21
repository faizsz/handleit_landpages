import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    id: 'martabak',
    image: '/martabak.png',
    imagePosition: 'left top',
    label: 'ERP & Kasir',
    labelBg: '#7a3b2e',
    name: 'Martabak Pak Man',
    tagline: 'Sistem ERP Toko & Kasir Digital',
    desc: 'Sistem manajemen toko lengkap untuk usaha martabak — kasir digital, manajemen stok bahan baku, laporan penjualan harian, dan manajemen karyawan dalam satu platform.',
    tech: ['Kasir Digital', 'Manajemen Stok', 'Laporan Otomatis', 'Inventory', 'Multi-User'],
    accent: '#7a3b2e',
    accentBg: 'rgba(122,59,46,0.08)',
  },
  {
    id: 'robotic',
    image: '/robotic.png',
    imagePosition: 'center',
    label: 'IoT & Robotik',
    labelBg: '#1a3a4a',
    name: 'Line Follower Robot',
    tagline: 'Proyek Robotika & IoT',
    desc: 'Rancangan dan implementasi robot line follower berbasis sensor infrared dengan algoritma PID. Termasuk dashboard monitoring real-time via serial monitor dan kontrol kecepatan otomatis.',
    tech: ['Arduino', 'Sensor IR', 'Algoritma PID', 'Real-time Monitor', 'IoT'],
    accent: '#1a3a4a',
    accentBg: 'rgba(26,58,74,0.08)',
  },
  {
    id: 'sigma',
    image: '/sigma.png',
    imagePosition: 'center',
    label: 'Sistem Informasi',
    labelBg: '#1e5a3a',
    name: 'SIGMA',
    tagline: 'Sistem Informasi Organisasi Mahasiswa',
    desc: 'Platform digital lengkap untuk kebutuhan organisasi mahasiswa — manajemen anggota, pendaftaran online, agenda kegiatan, pengumuman, dan laporan keorganisasian dalam satu sistem terintegrasi.',
    tech: ['Manajemen Anggota', 'Pendaftaran Online', 'Agenda Kegiatan', 'Dashboard Admin', 'Multi-Divisi'],
    accent: '#1e5a3a',
    accentBg: 'rgba(30,90,58,0.08)',
  },
];

const ProjectCard = ({ proj, index }) => {
  const [hovered, setHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: isEven ? '1fr 1fr' : '1fr 1fr',
        gap: '0',
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        overflow: 'hidden',
        border: '1px solid #e2e0db',
        boxShadow: hovered ? '0 20px 60px rgba(0,0,0,0.1)' : '0 2px 16px rgba(0,0,0,0.04)',
        transition: 'box-shadow 0.35s ease',
      }}
      className="portfolio-card"
    >
      {/* Image side */}
      <div
        style={{
          order: isEven ? 0 : 1,
          position: 'relative',
          overflow: 'hidden',
          minHeight: '320px',
        }}
        className="portfolio-img-side"
      >
        <img
          src={proj.image}
          alt={proj.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: proj.imagePosition || 'center',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
            transition: 'transform 0.55s cubic-bezier(0.22,1,0.36,1)',
            display: 'block',
          }}
        />
        {/* Dark overlay on hover */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(0,0,0,0.12)',
          opacity: hovered ? 0 : 1,
          transition: 'opacity 0.35s ease',
          pointerEvents: 'none',
        }} />
        {/* Label badge */}
        <div style={{
          position: 'absolute', top: '18px', left: '18px',
          backgroundColor: proj.labelBg,
          color: '#fff',
          fontSize: '0.72rem',
          fontWeight: '700',
          padding: '5px 14px',
          borderRadius: '99px',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          backdropFilter: 'blur(4px)',
        }}>
          {proj.label}
        </div>
      </div>

      {/* Content side */}
      <div
        style={{
          order: isEven ? 1 : 0,
          padding: 'clamp(28px, 4vw, 48px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '0',
        }}
        className="portfolio-content-side"
      >
        {/* Tagline */}
        <span style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: '600',
          fontSize: '12px',
          color: proj.accent,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '12px',
          display: 'block',
        }}>
          {proj.tagline}
        </span>

        {/* Title */}
        <h3 style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: '800',
          fontSize: 'clamp(22px, 3vw, 30px)',
          color: '#2c3045',
          lineHeight: '1.15',
          letterSpacing: '-0.02em',
          marginBottom: '16px',
        }}>
          {proj.name}
        </h3>

        {/* Description */}
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: '400',
          fontSize: '15px',
          color: '#5a6175',
          lineHeight: '1.7',
          marginBottom: '24px',
        }}>
          {proj.desc}
        </p>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
          {proj.tech.map((t, i) => (
            <span key={i} style={{
              fontSize: '12px',
              fontWeight: '600',
              backgroundColor: proj.accentBg,
              color: proj.accent,
              padding: '5px 12px',
              borderRadius: '99px',
              fontFamily: "'Inter', sans-serif",
              border: `1px solid ${proj.accent}22`,
            }}>
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://wa.me/6288987204298"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: proj.accent,
            fontFamily: "'Inter', sans-serif",
            fontWeight: '600',
            fontSize: '14px',
            textDecoration: 'none',
            transition: 'gap 0.25s ease',
            alignSelf: 'flex-start',
          }}
          onMouseEnter={e => e.currentTarget.style.gap = '12px'}
          onMouseLeave={e => e.currentTarget.style.gap = '8px'}
        >
          Mau sistem seperti ini?
          <ArrowUpRight size={16} strokeWidth={2.5} />
        </a>
      </div>
    </div>
  );
};

const Portfolio = () => (
  <section id="portofolio" style={{ backgroundColor: '#f5f4f1', padding: '96px 0' }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px' }}>

      {/* Header */}
      <div style={{ marginBottom: '56px' }}>
        <span style={{
          display: 'inline-block',
          backgroundColor: '#f2ece6',
          color: '#7a3b2e',
          border: '1px solid #ddd0c4',
          borderRadius: '99px',
          padding: '6px 16px',
          fontFamily: "'Inter', sans-serif",
          fontWeight: '600', fontSize: '12px',
          letterSpacing: '0.08em', textTransform: 'uppercase',
          marginBottom: '20px',
        }}>
          Portofolio
        </span>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: '800',
            fontSize: 'clamp(2rem, 4vw, 44px)',
            color: '#2c3045',
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
            margin: 0,
          }}>
            Project yang Sudah<br />Kami Kerjakan
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '15px',
            color: '#8a8fa8',
            maxWidth: '300px',
            lineHeight: '1.65',
            margin: 0,
          }}>
            Dari UMKM sampai robotik — semua bisa kami tangani.
          </p>
        </div>
      </div>

      {/* Project cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {PROJECTS.map((proj, i) => (
          <ProjectCard key={proj.id} proj={proj} index={i} />
        ))}
      </div>

      {/* Bottom note */}
      <p style={{
        textAlign: 'center', marginTop: '40px',
        color: '#8a8fa8', fontSize: '14px',
        fontFamily: "'Inter', sans-serif",
      }}>
        ✦ Ingin project seperti ini?{' '}
        <a href="https://wa.me/6288987204298"
          target="_blank" rel="noopener noreferrer"
          style={{ color: '#3d4255', fontWeight: '700', textDecoration: 'underline' }}>
          Cerita kebutuhanmu di WA.
        </a>
      </p>
    </div>

    <style>{`
      @media (max-width: 768px) {
        .portfolio-card {
          grid-template-columns: 1fr !important;
        }
        .portfolio-img-side {
          order: 0 !important;
          min-height: 240px !important;
        }
        .portfolio-content-side {
          order: 1 !important;
        }
      }
    `}</style>
  </section>
);

export default Portfolio;
