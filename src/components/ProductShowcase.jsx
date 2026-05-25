import React, { useState } from 'react';
import { Globe, Cpu, FileText } from 'lucide-react';

/* ─── Detail page routes ─── */
const ROUTES = {
  website: '/layanan/website',
  automation: '/layanan/automation-iot',
  template: '/layanan/template-digital',
};

/* ─── Card data ─── */
const CARDS = [
  {
    id: 'website',
    route: ROUTES.website,
    gradient: 'linear-gradient(135deg, #3d4255 0%, #5a6080 50%, #7a3b2e 100%)',
    Icon: Globe,
    pills: ['Landing Page', 'Web Operasional'],
    label: 'WEBSITE',
    title: 'Website Profesional untuk Bisnis',
    description:
      'Landing page untuk promosi produk atau web operasional lengkap untuk toko online & katalog bisnismu.',
    price: 'Mulai Rp 35.000',
  },
  {
    id: 'automation',
    route: ROUTES.automation,
    gradient: 'linear-gradient(135deg, #1a3a4a 0%, #2d6a7a 50%, #3d8a8a 100%)',
    Icon: Cpu,
    pills: ['Bot WhatsApp', 'Sistem Otomasi', 'IoT Solution'],
    label: 'AUTOMATION & IOT',
    title: 'Otomasi Bisnis & Sistem Pintar',
    description:
      'Bot WhatsApp 24 jam, sistem otomasi alur kerja, hingga solusi IoT untuk bisnis yang lebih efisien.',
    price: 'Mulai Rp 49.000',
  },
  {
    id: 'template',
    route: ROUTES.template,
    gradient: 'linear-gradient(135deg, #4a2a1a 0%, #7a4a2a 50%, #b07040 100%)',
    Icon: FileText,
    pills: ['Undangan Digital', 'E-Tiket', 'Sistem Pemilu'],
    label: 'TEMPLATE DIGITAL',
    title: 'Template Siap Pakai & Sistem Event',
    description:
      'Undangan digital, e-tiket acara, hingga sistem pemilu digital — desain profesional, harga bersahabat.',
    price: 'Mulai Rp 15.000',
  },
];

/* ─── Individual Product Card ─── */
const ProductCard = ({ card }) => {
  const [hovered, setHovered] = useState(false);
  const { gradient, Icon, pills, label, title, description, price, route } = card;

  const handleClick = () => {
    // Navigate to detail page — uses hash routing fallback if no router present
    window.location.href = route;
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: '1 1 0',
        minHeight: '480px',
        borderRadius: '24px',
        overflow: 'hidden',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 24px 60px rgba(0,0,0,0.12)'
          : '0 4px 20px rgba(0,0,0,0.06)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      {/* ── ZONE A — Gradient image area ── */}
      <div
        style={{
          flex: '0 0 55%',
          background: gradient,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 24px 32px',
          gap: '24px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle radial decoration */}
        <div
          style={{
            position: 'absolute',
            top: '-40px',
            right: '-40px',
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-30px',
            left: '-30px',
            width: '140px',
            height: '140px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Icon circle */}
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.15)',
            border: '1px solid rgba(255,255,255,0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(4px)',
            transition: 'transform 0.3s ease, background 0.3s ease',
            transform: hovered ? 'scale(1.08)' : 'scale(1)',
          }}
        >
          <Icon size={36} strokeWidth={1.6} color="#ffffff" />
        </div>

        {/* Sub-product pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            justifyContent: 'center',
          }}
        >
          {pills.map((pill, i) => (
            <span
              key={i}
              style={{
                backgroundColor: 'rgba(255,255,255,0.15)',
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: '99px',
                padding: '6px 14px',
                fontFamily: "'Inter', sans-serif",
                fontWeight: '500',
                fontSize: '13px',
                backdropFilter: 'blur(4px)',
                whiteSpace: 'nowrap',
              }}
            >
              {pill}
            </span>
          ))}
        </div>
      </div>

      {/* ── ZONE B — White content area ── */}
      <div
        style={{
          flex: '0 0 45%',
          backgroundColor: '#ffffff',
          padding: '28px 28px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '0',
        }}
      >
        {/* Category label */}
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: '600',
            fontSize: '11px',
            color: '#7a3b2e',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '8px',
            display: 'block',
          }}
        >
          {label}
        </span>

        {/* Title */}
        <h3
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: '700',
            fontSize: '20px',
            color: '#3d4255',
            lineHeight: '1.3',
            marginBottom: '10px',
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: '400',
            fontSize: '14px',
            color: '#6b7280',
            lineHeight: '1.7',
            marginBottom: '14px',
            flex: 1,
          }}
        >
          {description}
        </p>

        {/* Price hint */}
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: '600',
            fontSize: '14px',
            color: '#7a3b2e',
            marginBottom: '16px',
          }}
        >
          {price}
        </div>

        {/* CTA Button */}
        <CtaButton hovered={hovered} />
      </div>
    </div>
  );
};

/* ─── CTA Button (inherits card hover state) ─── */
const CtaButton = ({ hovered }) => {
  const [btnHovered, setBtnHovered] = useState(false);
  const active = hovered || btnHovered;

  return (
    <div
      onMouseEnter={() => setBtnHovered(true)}
      onMouseLeave={() => setBtnHovered(false)}
      style={{
        width: '100%',
        backgroundColor: active ? '#7a3b2e' : '#3d4255',
        color: '#ffffff',
        borderRadius: '12px',
        padding: '14px',
        fontFamily: "'Inter', sans-serif",
        fontWeight: '600',
        fontSize: '14px',
        textAlign: 'center',
        transition: 'background 0.25s ease',
        userSelect: 'none',
      }}
    >
      Lihat Selengkapnya →
    </div>
  );
};

/* ─── Main Section ─── */
const ProductShowcase = () => (
  <section
    id="produk-layanan"
    style={{
      backgroundColor: '#faf9f7',
      padding: '96px 0',
    }}
  >
    <div
      style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 32px',
      }}
    >
      {/* ── Section Header ── */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '60px',
        }}
      >
        {/* Eyebrow badge */}
        <span
          style={{
            display: 'inline-block',
            backgroundColor: '#f2ece6',
            color: '#7a3b2e',
            border: '1px solid #ddd0c4',
            borderRadius: '99px',
            padding: '6px 16px',
            fontFamily: "'Inter', sans-serif",
            fontWeight: '600',
            fontSize: '12px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}
        >
          Apa yang Bisa Kami Bantu?
        </span>

        {/* Headline */}
        <h2
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: '800',
            fontSize: 'clamp(2rem, 4.5vw, 48px)',
            color: '#3d4255',
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
            marginBottom: '16px',
          }}
        >
          Pilih Solusi Digital
          <br />
          yang Kamu Butuhkan
        </h2>

        {/* Subtext */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: '400',
            fontSize: '17px',
            color: '#6b7280',
            lineHeight: '1.65',
            maxWidth: '500px',
            margin: '0 auto',
          }}
        >
          Dari website sampai sistem otomasi —{' '}
          semua tersedia, semua terjangkau.
        </p>
      </div>

      {/* ── Cards Grid ── */}
      <div className="product-showcase-grid">
        {CARDS.map((card) => (
          <ProductCard key={card.id} card={card} />
        ))}
      </div>
    </div>

    <style>{`
      .product-showcase-grid {
        display: flex;
        flex-direction: row;
        gap: 24px;
        align-items: stretch;
      }

      @media (max-width: 960px) {
        .product-showcase-grid {
          flex-direction: column;
        }
        .product-showcase-grid > div {
          min-height: 420px !important;
        }
      }

      @media (max-width: 480px) {
        .product-showcase-grid > div {
          min-height: 380px !important;
        }
      }
    `}</style>
  </section>
);

export default ProductShowcase;
