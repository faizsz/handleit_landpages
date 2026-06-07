import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Globe, Cpu, FileText, ArrowRight } from 'lucide-react';

/* ─── Service list data ─── */
const SERVICES = [
  {
    id: 'website',
    route: '/layanan/website',
    Icon: Globe,
    title: 'Website Profesional',
    subtitle: 'Landing Page & Web Operasional',
    gradient: 'linear-gradient(135deg, #3d4255 0%, #5a6080 50%, #7a3b2e 100%)',
    pills: ['Landing Page', 'Web Operasional', 'Company Profile'],
    price: 'Mulai Rp 35.000',
  },
  {
    id: 'automation',
    route: '/layanan/automation-iot',
    Icon: Cpu,
    title: 'Automation & IoT',
    subtitle: 'Bot WhatsApp, Sistem Otomasi & IoT',
    gradient: 'linear-gradient(135deg, #1a3a4a 0%, #2d6a7a 50%, #3d8a8a 100%)',
    pills: ['Bot WhatsApp', 'Sistem Otomasi', 'IoT Solution'],
    price: 'Mulai Rp 49.000',
  },
  {
    id: 'template',
    route: '/layanan/template-digital',
    Icon: FileText,
    title: 'Template Digital',
    subtitle: 'Undangan, E-Tiket & Sistem Event',
    gradient: 'linear-gradient(135deg, #4a2a1a 0%, #7a4a2a 50%, #b07040 100%)',
    pills: ['Undangan Digital', 'E-Tiket', 'Sistem Pemilu'],
    price: 'Mulai Rp 15.000',
  },
];

/* ─── Floating hover preview ─── */
const HoverPreview = ({ activeService, pos, visible }) => {
  if (!activeService) return null;
  const { Icon, gradient, pills, title, price } = activeService;

  return (
    <div
      style={{
        position: 'absolute',
        top: pos.y,
        left: pos.x,
        transform: `translate(-50%, -50%) scale(${visible ? 1 : 0.85})`,
        opacity: visible ? 1 : 0,
        width: '340px',
        height: '230px',
        borderRadius: '20px',
        background: gradient,
        boxShadow: '0 30px 70px rgba(0,0,0,0.35)',
        pointerEvents: 'none',
        zIndex: 20,
        overflow: 'hidden',
        transition: 'opacity 0.35s cubic-bezier(0.22,1,0.36,1), transform 0.35s cubic-bezier(0.22,1,0.36,1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '18px',
        padding: '28px',
      }}
    >
      {/* Decorative glows */}
      <div style={{
        position: 'absolute', top: '-40px', right: '-40px',
        width: '160px', height: '160px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
      }} />
      <div style={{
        position: 'absolute', bottom: '-30px', left: '-30px',
        width: '130px', height: '130px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%)',
      }} />

      {/* Icon */}
      <div style={{
        width: '64px', height: '64px', borderRadius: '50%',
        backgroundColor: 'rgba(255,255,255,0.16)',
        border: '1px solid rgba(255,255,255,0.28)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backdropFilter: 'blur(4px)',
      }}>
        <Icon size={30} strokeWidth={1.6} color="#ffffff" />
      </div>

      {/* Title */}
      <div style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: '700', fontSize: '18px', color: '#ffffff',
        textAlign: 'center', position: 'relative', zIndex: 1,
      }}>
        {title}
      </div>

      {/* Pills */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center',
        position: 'relative', zIndex: 1,
      }}>
        {pills.map((pill, i) => (
          <span key={i} style={{
            backgroundColor: 'rgba(255,255,255,0.16)',
            color: '#ffffff',
            border: '1px solid rgba(255,255,255,0.28)',
            borderRadius: '99px', padding: '4px 11px',
            fontFamily: "'Inter', sans-serif", fontWeight: '500', fontSize: '11px',
            backdropFilter: 'blur(4px)', whiteSpace: 'nowrap',
          }}>
            {pill}
          </span>
        ))}
      </div>

      {/* Price */}
      <div style={{
        fontFamily: "'Inter', sans-serif", fontWeight: '600', fontSize: '13px',
        color: 'rgba(255,255,255,0.85)', position: 'relative', zIndex: 1,
      }}>
        {price}
      </div>
    </div>
  );
};

/* ─── Single service row ─── */
const ServiceRow = ({ service, onEnter, onLeave, onMove, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const { title, subtitle, Icon } = service;

  return (
    <div
      onMouseEnter={() => { setHovered(true); onEnter(service); }}
      onMouseLeave={() => { setHovered(false); onLeave(); }}
      onMouseMove={onMove}
      onClick={() => onClick(service.route)}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '24px',
        padding: 'clamp(28px, 4vw, 44px) 8px',
        cursor: 'pointer',
        borderBottom: '1px solid #e4ddd4',
        transition: 'padding-left 0.4s cubic-bezier(0.22,1,0.36,1)',
        paddingLeft: hovered ? '28px' : '8px',
      }}
    >
      {/* Left accent bar on hover */}
      <div style={{
        position: 'absolute',
        left: 0, top: '50%',
        transform: `translateY(-50%) scaleY(${hovered ? 1 : 0})`,
        width: '4px', height: '60%',
        borderRadius: '99px',
        background: 'linear-gradient(180deg, #7a3b2e, #b07040)',
        transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1)',
        transformOrigin: 'center',
      }} />

      {/* Title block */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', minWidth: 0 }}>
        <h3 style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: '800',
          fontSize: 'clamp(28px, 5vw, 52px)',
          lineHeight: '1.05',
          letterSpacing: '-0.03em',
          color: hovered ? '#7a3b2e' : '#2c3045',
          transition: 'color 0.35s ease',
          margin: 0,
        }}>
          {title}
        </h3>
        <span style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: '400',
          fontSize: 'clamp(13px, 1.6vw, 16px)',
          color: '#8a8578',
        }}>
          {subtitle}
        </span>
      </div>

      {/* Arrow */}
      <div style={{
        flexShrink: 0,
        width: 'clamp(44px, 6vw, 58px)',
        height: 'clamp(44px, 6vw, 58px)',
        borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: hovered ? '#7a3b2e' : 'transparent',
        border: hovered ? '1px solid #7a3b2e' : '1px solid #d8d0c5',
        transition: 'background 0.35s ease, border-color 0.35s ease, transform 0.35s ease',
        transform: hovered ? 'rotate(-45deg)' : 'rotate(0deg)',
      }}>
        <ArrowRight
          size={22}
          strokeWidth={2}
          color={hovered ? '#ffffff' : '#2c3045'}
          style={{ transition: 'color 0.35s ease' }}
        />
      </div>
    </div>
  );
};

/* ─── Main Section ─── */
const ProductShowcase = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [activeService, setActiveService] = useState(null);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const isTouch = typeof window !== 'undefined' &&
    window.matchMedia('(hover: none)').matches;

  const handleEnter = (service) => {
    if (isTouch) return;
    setActiveService(service);
    setPreviewVisible(true);
  };

  const handleLeave = () => {
    setPreviewVisible(false);
  };

  const handleMove = (e) => {
    if (isTouch || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleClick = (route) => navigate(route);

  return (
    <section
      id="produk-layanan"
      style={{
        backgroundColor: '#faf9f7',
        padding: '96px 0',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px' }}>
        {/* ── Header ── */}
        <div style={{ marginBottom: '48px', maxWidth: '640px' }}>
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
            Apa yang Bisa Kami Bantu?
          </span>

          <h2 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: '800',
            fontSize: 'clamp(2rem, 4.5vw, 44px)',
            color: '#2c3045',
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
            marginBottom: '14px',
          }}>
            Pilih Solusi Digital<br />yang Kamu Butuhkan
          </h2>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: '400', fontSize: '17px',
            color: '#6b7280', lineHeight: '1.6',
          }}>
            Arahkan kursor untuk intip, klik untuk lihat detail lengkapnya.
          </p>
        </div>

        {/* ── Service list ── */}
        <div ref={containerRef} style={{ position: 'relative', borderTop: '1px solid #e4ddd4' }}>
          {SERVICES.map((service) => (
            <ServiceRow
              key={service.id}
              service={service}
              onEnter={handleEnter}
              onLeave={handleLeave}
              onMove={handleMove}
              onClick={handleClick}
            />
          ))}

          {/* Floating preview */}
          <HoverPreview
            activeService={activeService}
            pos={pos}
            visible={previewVisible}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
