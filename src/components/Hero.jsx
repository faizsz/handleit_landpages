import React, { useState, useEffect } from 'react';
import { Globe, MessageCircle, Settings, FileText, ArrowRight } from 'lucide-react';

/* ─── Rotating text words ─── */
const ROTATING_WORDS = [
  'Website Profesional',
  'Bot WhatsApp Otomatis',
  'Sistem Digital UMKM',
  'Landing Page Produk',
];

/* ─── Service cards config ─── */
const SERVICE_CARDS = [
  {
    icon: <Globe size={18} strokeWidth={2} color="#7a3b2e" />,
    title: 'Website & Landing Page',
    sub: 'Mulai Rp35.000',
    style: {
      top: '0px', left: '-10px',
      transform: 'rotate(-5deg)',
    },
  },
  {
    icon: <MessageCircle size={18} strokeWidth={2} color="#7a3b2e" />,
    title: 'Bot WhatsApp',
    sub: 'Auto-reply 24 jam',
    style: {
      top: '20px', right: '-10px',
      transform: 'rotate(4deg)',
    },
  },
  {
    icon: <Settings size={18} strokeWidth={2} color="#7a3b2e" />,
    title: 'Sistem Otomasi',
    sub: 'Hemat waktu & tenaga',
    style: {
      bottom: '60px', left: '0px',
      transform: 'rotate(3deg)',
    },
  },
  {
    icon: <FileText size={18} strokeWidth={2} color="#7a3b2e" />,
    title: 'Template Digital',
    sub: 'Siap pakai, langsung jadi',
    style: {
      bottom: '30px', right: '0px',
      transform: 'rotate(-3deg)',
    },
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
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 32px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '55fr 45fr',
        gap: '64px',
        alignItems: 'center',
      }} className="hero-grid-main">

        {/* ══════════════════════
            LEFT COLUMN
        ══════════════════════ */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0', alignItems: 'flex-start' }}>

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

          {/* 5. Price pill */}
          <div style={{
            display: 'inline-block',
            backgroundColor: '#3d4255',
            color: '#ffffff',
            borderRadius: '99px',
            padding: '12px 24px',
            fontFamily: "'Inter', sans-serif",
            fontWeight: '500',
            fontSize: '15px',
            marginBottom: '28px',
            letterSpacing: '-0.01em',
          }}>
            Mulai Rp 35.000 — tanpa biaya tersembunyi
          </div>

          {/* 6. CTA Buttons */}
          <div style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '16px',
          }}>
            <a
              href="#layanan"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                backgroundColor: '#3d4255',
                color: '#ffffff',
                borderRadius: '12px',
                padding: '14px 28px',
                fontFamily: "'Inter', sans-serif",
                fontWeight: '600',
                fontSize: '15px',
                textDecoration: 'none',
                transition: 'background 0.2s, transform 0.2s, box-shadow 0.2s',
                boxShadow: '0 2px 14px rgba(61,66,85,0.2)',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#2c3045'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(61,66,85,0.28)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#3d4255'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 14px rgba(61,66,85,0.2)'; }}
            >
              Lihat Semua Layanan <ArrowRight size={16} />
            </a>

            <a
              href="https://wa.me/6288987204298"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                backgroundColor: '#25d366',
                color: '#ffffff',
                borderRadius: '12px',
                padding: '14px 28px',
                fontFamily: "'Inter', sans-serif",
                fontWeight: '600',
                fontSize: '15px',
                textDecoration: 'none',
                transition: 'background 0.2s, transform 0.2s, box-shadow 0.2s',
                boxShadow: '0 2px 14px rgba(37,211,102,0.3)',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#1da851'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,211,102,0.38)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#25d366'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 14px rgba(37,211,102,0.3)'; }}
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
            RIGHT COLUMN — floating cards
        ══════════════════════ */}
        <div style={{
          position: 'relative',
          height: '420px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {/* Decorative organic blob */}
          <div style={{
            position: 'absolute',
            width: '400px',
            height: '360px',
            borderRadius: '40% 60% 55% 45% / 45% 55% 60% 40%',
            backgroundColor: '#ede9e3',
            opacity: 0.75,
            zIndex: 0,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }} />

          {/* Floating service cards */}
          {SERVICE_CARDS.map((card, i) => (
            <div key={i} style={{
              position: 'absolute',
              width: '200px',
              backgroundColor: '#ffffff',
              border: '1px solid #e5e2db',
              borderRadius: '16px',
              padding: '16px 20px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              zIndex: 1,
              cursor: 'default',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              ...card.style,
            }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 10px 32px rgba(0,0,0,0.11)';
                e.currentTarget.style.transform = card.style.transform + ' translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
                e.currentTarget.style.transform = card.style.transform;
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

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid-main {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .hero-grid-main > div:last-child {
            height: 340px !important;
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
