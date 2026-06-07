import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import FloatingCards from './FloatingCards';

/* ─── Rotating text words ─── */
const ROTATING_WORDS = [
  'Website Profesional',
  'Bot WhatsApp Otomatis',
  'Sistem Digital UMKM',
  'Landing Page Produk',
];

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

const Hero = () => {
  const [wordIdx, setWordIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const sectionRef = useRef(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-animate]').forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = el.dataset.animateTo || 'translateY(0)';
              }, i * 90);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: '#faf9f7',
        paddingTop: '120px',
        paddingBottom: '280px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
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
          <div
            data-animate
            data-animate-to="translateY(0)"
            style={{
              opacity: 0,
              transform: 'translateY(24px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
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
            }}
          >
            ✦ Digitalisasi UMKM &amp; Bisnis Indonesia
          </div>

          {/* 2. Headline */}
          <h1
            data-animate
            data-animate-to="translateY(0)"
            style={{
              opacity: 0,
              transform: 'translateY(24px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: '800',
              fontSize: 'clamp(42px, 5vw, 64px)',
              color: '#3d4255',
              lineHeight: '1.25',
              letterSpacing: '-0.03em',
              marginBottom: '20px',
            }}
          >
            Mulai dari Rp35.000<br />
            <span style={{
              background: 'linear-gradient(120deg, rgba(122, 59, 46, 0.15) 0%, rgba(122, 59, 46, 0.18) 100%)',
              color: '#2c3045', // Slightly darker slate color, not pure black
              padding: '2px 12px',
              borderRadius: '8px',
              display: 'inline-block',
              marginTop: '6px'
            }}>Digitalisasi Bisnismu</span>
          </h1>

          {/* 3. Subtext */}
          <p
            data-animate
            data-animate-to="translateY(0)"
            style={{
              opacity: 0,
              transform: 'translateY(24px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
              fontFamily: "'Inter', sans-serif",
              fontWeight: '400',
              fontSize: '18px',
              color: '#6b7280',
              lineHeight: '1.7',
              maxWidth: '480px',
              marginBottom: '28px',
            }}
          >
            Kami bantu bisnis kamu hadir secara digital — website, bot WhatsApp,
            sistem otomasi, dan lebih banyak lagi. Terjangkau, transparan, tanpa ribet.
          </p>

          {/* 4. Animated rotating text */}
          <div
            data-animate
            data-animate-to="translateY(0)"
            style={{
              opacity: 0,
              transform: 'translateY(24px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
              fontFamily: "'Inter', sans-serif",
              fontSize: '20px',
              color: '#6b7280',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flexWrap: 'wrap',
              minHeight: '32px',
            }}
          >
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
          <div
            data-animate
            data-animate-to="translateY(0)"
            style={{
              opacity: 0,
              transform: 'translateY(24px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
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
            }}
          >
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
          <div
            data-animate
            data-animate-to="translateY(0)"
            style={{
              opacity: 0,
              transform: 'translateY(24px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              marginBottom: '16px',
            }}
          >
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
          <div
            data-animate
            data-animate-to="translateY(0)"
            style={{
              opacity: 0,
              transform: 'translateY(24px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px',
              color: '#9ca3af',
              marginTop: '4px',
            }}
          >
            ⭐⭐⭐⭐⭐&nbsp; Dipercaya UMKM &amp; pelajar di seluruh Indonesia
          </div>
        </div>

        {/* ══════════════════════
            RIGHT COLUMN — premium floating cards
        ══════════════════════ */}
        <div
          data-animate
          data-animate-to="translateY(0)"
          style={{
            opacity: 0,
            transform: 'translateY(32px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
            width: '100%',
          }}
        >
          <FloatingCards />
        </div>

      </div>

      {/* ── Gradient fade band (smooth krem → dark transition) ── */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '420px',
        background: 'linear-gradient(to bottom, rgba(30,34,53,0) 0%, rgba(30,34,53,0.03) 15%, rgba(30,34,53,0.1) 30%, rgba(30,34,53,0.22) 45%, rgba(30,34,53,0.4) 60%, rgba(30,34,53,0.62) 74%, rgba(30,34,53,0.85) 88%, #1e2235 100%)',
        pointerEvents: 'none',
        zIndex: 2,
      }} />

      {/* ── Wave divider at bottom ── */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        overflow: 'hidden',
        lineHeight: 0,
        zIndex: 3,
      }}>
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          style={{
            position: 'relative',
            display: 'block',
            width: '100%',
            height: '50px',
          }}
        >
          <path
            d="M0,30 C180,80 360,5 540,40 C720,80 900,15 1080,50 C1200,70 1360,25 1440,40 L1440,100 L0,100 Z"
            fill="#1e2235"
          />
        </svg>
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
