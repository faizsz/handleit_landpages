import React, { useState, useEffect } from 'react';
import { Globe, MessageCircle, Settings, FileText, ArrowRight } from 'lucide-react';

/* ─── Rotating text words ─── */
const ROTATING_WORDS = [
  'Website Profesional',
  'Bot WhatsApp Otomatis',
  'Sistem Digital UMKM',
  'Landing Page Produk',
];

/* ─── Organic blob SVG path ─── */
const BlobMain = () => (
  <svg
    viewBox="0 0 420 380"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: 'absolute',
      width: '420px',
      height: '380px',
      top: '50%',
      left: '50%',
      transform: 'translate(-48%, -50%)',
      zIndex: 0,
      overflow: 'visible',
    }}
  >
    <path
      d="M210,30 C270,10 360,50 390,120 C420,195 400,290 330,340 C260,390 140,385 80,330 C20,275 10,175 40,100 C70,25 150,50 210,30Z"
      fill="#ede9e3"
      opacity="0.8"
    />
  </svg>
);

const BlobAccent = () => (
  <svg
    viewBox="0 0 180 160"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: 'absolute',
      width: '180px',
      height: '160px',
      bottom: '-20px',
      right: '-30px',
      zIndex: 0,
      transform: 'rotate(45deg)',
      overflow: 'visible',
    }}
  >
    <path
      d="M90,15 C125,5 165,30 170,75 C175,120 145,155 100,158 C55,161 15,135 10,90 C5,45 55,25 90,15Z"
      fill="#f5efe8"
      opacity="0.6"
    />
  </svg>
);

/* ─── Dot pattern SVG ─── */
const DotPattern = () => (
  <svg
    style={{
      position: 'absolute',
      top: 0, right: 0,
      width: '35%',
      height: '100%',
      zIndex: 0,
      pointerEvents: 'none',
      overflow: 'hidden',
    }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="1.5" cy="1.5" r="1.5" fill="#e8e3dc" opacity="0.5" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dots)" />
  </svg>
);

/* ─── Service cards config — scattered cluster ─── */
const SERVICE_CARDS = [
  {
    icon: <Globe size={18} strokeWidth={2} color="#7a3b2e" />,
    title: 'Website & Landing Page',
    sub: 'Mulai Rp35.000',
    pos: { top: '20px', left: '10px' },
    rotate: '-6deg',
    zIndex: 4,
  },
  {
    icon: <MessageCircle size={18} strokeWidth={2} color="#7a3b2e" />,
    title: 'Bot WhatsApp',
    sub: 'Auto-reply 24 jam',
    pos: { top: '50px', right: '10px' },
    rotate: '5deg',
    zIndex: 3,
    translate: 'translate(20px, 30px)',
  },
  {
    icon: <Settings size={18} strokeWidth={2} color="#7a3b2e" />,
    title: 'Sistem Otomasi',
    sub: 'Hemat waktu & tenaga',
    pos: { bottom: '80px', left: '20px' },
    rotate: '3deg',
    zIndex: 2,
    translate: 'translate(10px, -20px)',
  },
  {
    icon: <FileText size={18} strokeWidth={2} color="#7a3b2e" />,
    title: 'Template Digital',
    sub: 'Siap pakai, langsung jadi',
    pos: { bottom: '50px', right: '20px' },
    rotate: '-4deg',
    zIndex: 1,
    translate: 'translate(30px, 10px)',
  },
];

const Hero = () => {
  const [wordIdx, setWordIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIdx(i => (i + 1) % ROTATING_WORDS.length);
        setVisible(true);
      }, 380);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{
      backgroundColor: '#faf9f7',
      paddingTop: '120px',
      paddingBottom: '80px',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Dot pattern — far right background */}
      <DotPattern />

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 32px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '55fr 45fr',
        gap: '64px',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
      }} className="hero-grid-main">

        {/* ══════════════════════
            LEFT COLUMN
        ══════════════════════ */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

          {/* 1. Pill badge */}
          <div style={{
            backgroundColor: '#f2f0ec',
            border: '1px solid #e8e0d8',
            borderRadius: '99px',
            padding: '6px 14px',
            fontFamily: "'Inter', sans-serif",
            fontWeight: '500',
            fontSize: '13px',
            color: '#7a3b2e',
            marginBottom: '28px',
            display: 'inline-block',
          }}>
            ✦ Digitalisasi UMKM &amp; Bisnis Indonesia
          </div>

          {/* 2. Headline */}
          <h1 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: '800',
            fontSize: 'clamp(42px, 5vw, 64px)',
            color: '#3d4255',
            lineHeight: '1.1',
            letterSpacing: '-0.03em',
            marginBottom: '20px',
          }}>
            Digitalisasi Bisnismu,<br />
            Mulai dari Rp35.000
          </h1>

          {/* 3. Subtext */}
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: '400',
            fontSize: '18px',
            color: '#6b7280',
            lineHeight: '1.7',
            maxWidth: '480px',
            marginBottom: '28px',
          }}>
            Kami bantu bisnis kamu hadir secara digital — website, bot WhatsApp,
            sistem otomasi, dan lebih banyak lagi. Terjangkau, transparan, tanpa ribet.
          </p>

          {/* 4. Animated rotating text */}
          <div style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '20px',
            color: '#6b7280',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            minHeight: '32px',
          }}>
            <span style={{ fontWeight: '400' }}>Kami buatkan</span>
            <span style={{
              fontWeight: '600',
              color: '#7a3b2e',
              textDecoration: 'underline',
              textDecorationStyle: 'wavy',
              textDecorationColor: 'rgba(122,59,46,0.35)',
              textUnderlineOffset: '4px',
              display: 'inline-block',
              transition: 'opacity 0.38s ease, transform 0.38s ease',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0px)' : 'translateY(-8px)',
            }}>
              {ROTATING_WORDS[wordIdx]}
            </span>
          </div>

          {/* 5. Price pill — small inline badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#f2f0ec',
            border: '1px solid #e0d9d0',
            borderRadius: '99px',
            padding: '6px 16px',
            fontFamily: "'Inter', sans-serif",
            fontWeight: '500',
            fontSize: '14px',
            color: '#3d4255',
            marginBottom: '28px',
          }}>
            {/* Terracotta dot indicator */}
            <span style={{
              display: 'inline-block',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#7a3b2e',
              flexShrink: 0,
            }} />
            Mulai Rp 35.000 · tanpa biaya tersembunyi
          </div>

          {/* 6. CTA Buttons — clear hierarchy */}
          <div style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '16px',
          }}>
            {/* Button 1 — Outline (secondary) */}
            <a
              href="#layanan"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                backgroundColor: 'transparent',
                border: '1.5px solid #3d4255',
                color: '#3d4255',
                borderRadius: '12px',
                padding: '14px 28px',
                fontFamily: "'Inter', sans-serif",
                fontWeight: '600',
                fontSize: '15px',
                textDecoration: 'none',
                transition: 'background 0.2s, color 0.2s, transform 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#3d4255'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#3d4255'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Lihat Semua Layanan <ArrowRight size={15} />
            </a>

            {/* Button 2 — Filled WA green (primary action) */}
            <a
              href="https://wa.me/6288987204298"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                backgroundColor: '#25d366',
                color: '#ffffff',
                border: '1.5px solid #25d366',
                borderRadius: '12px',
                padding: '14px 28px',
                fontFamily: "'Inter', sans-serif",
                fontWeight: '600',
                fontSize: '15px',
                textDecoration: 'none',
                transition: 'background 0.2s, transform 0.2s, box-shadow 0.2s',
                boxShadow: '0 4px 16px rgba(37,211,102,0.32)',
                cursor: 'pointer',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#1da851'; e.currentTarget.style.borderColor = '#1da851'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,211,102,0.42)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#25d366'; e.currentTarget.style.borderColor = '#25d366'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,211,102,0.32)'; }}
            >
              <MessageCircle size={16} /> Konsultasi Gratis di WA
            </a>
          </div>

          {/* 7. Social proof */}
          <div style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '13px',
            color: '#9ca3af',
            marginTop: '4px',
          }}>
            ⭐⭐⭐⭐⭐&nbsp; Dipercaya UMKM &amp; pelajar di seluruh Indonesia
          </div>
        </div>

        {/* ══════════════════════
            RIGHT COLUMN — scattered card cluster
        ══════════════════════ */}
        <div style={{
          position: 'relative',
          height: '440px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {/* Organic blob — main, behind all cards */}
          <BlobMain />

          {/* Accent blob — bottom right, partially outside */}
          <BlobAccent />

          {/* Floating service cards — scattered cluster */}
          {SERVICE_CARDS.map((card, i) => (
            <div key={i} style={{
              position: 'absolute',
              width: '200px',
              backgroundColor: '#ffffff',
              border: '1px solid #e5e2db',
              borderRadius: '16px',
              padding: '16px 20px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              zIndex: card.zIndex,
              cursor: 'default',
              transition: 'transform 0.35s ease, box-shadow 0.35s ease',
              transform: `rotate(${card.rotate})${card.translate ? ' ' + card.translate : ''}`,
              ...card.pos,
            }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 12px 36px rgba(0,0,0,0.12)';
                e.currentTarget.style.transform = `rotate(${card.rotate}) translateY(-6px)`;
                e.currentTarget.style.zIndex = 10;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
                e.currentTarget.style.transform = `rotate(${card.rotate})${card.translate ? ' ' + card.translate : ''}`;
                e.currentTarget.style.zIndex = card.zIndex;
              }}
            >
              {/* Icon circle */}
              <div style={{
                width: '36px', height: '36px',
                backgroundColor: '#f2f0ec',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '10px',
              }}>
                {card.icon}
              </div>

              {/* Card title */}
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: '600',
                fontSize: '14px',
                color: '#3d4255',
                marginBottom: '4px',
                lineHeight: '1.4',
              }}>
                {card.title}
              </div>

              {/* Card subtitle */}
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: '500',
                fontSize: '13px',
                color: '#7a3b2e',
              }}>
                {card.sub}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid-main {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .hero-grid-main > div:last-child {
            height: 360px !important;
          }
        }
        @media (max-width: 600px) {
          .hero-grid-main {
            padding: 0 20px !important;
          }
          .hero-grid-main h1 {
            font-size: 36px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
