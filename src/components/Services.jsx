import React from 'react';
import { Globe, Server, Bot, FileText, Wrench, MessageCircle, Check } from 'lucide-react';

const WA_LINK = 'https://wa.me/6288987204298';

/* ─── Reusable outline CTA button ─── */
const OutlineBtn = ({ text = 'Pesan' }) => (
  <a
    href={WA_LINK}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      backgroundColor: 'transparent',
      border: '1.5px solid #3d4255',
      color: '#3d4255',
      borderRadius: '10px',
      padding: '10px 20px',
      fontFamily: "'Inter', sans-serif",
      fontWeight: '600',
      fontSize: '14px',
      textDecoration: 'none',
      transition: 'background 0.2s, color 0.2s',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
    }}
    onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#3d4255'; e.currentTarget.style.color = '#fff'; }}
    onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#3d4255'; }}
  >
    {text}
  </a>
);

/* ─── Small icon circle ─── */
const IconCircle = ({ icon, size = 44, bg = '#f2ece6' }) => (
  <div style={{
    width: `${size}px`, height: `${size}px`,
    backgroundColor: bg,
    borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  }}>
    {icon}
  </div>
);

const Services = () => (
  <section id="layanan" style={{ backgroundColor: '#faf9f7', padding: '96px 0' }}>
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>

      {/* ── Section header ── */}
      <div style={{ textAlign: 'center', marginBottom: '52px' }}>
        <span style={{
          display: 'inline-block',
          backgroundColor: '#f2ece6',
          color: '#7a3b2e',
          border: '1px solid #ddd0c4',
          borderRadius: '99px',
          padding: '5px 14px',
          fontFamily: "'Inter', sans-serif",
          fontWeight: '600',
          fontSize: '12px',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '16px',
        }}>
          Layanan &amp; Harga
        </span>

        <h2 style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: '800',
          fontSize: 'clamp(2rem, 4vw, 48px)',
          color: '#3d4255',
          lineHeight: '1.15',
          letterSpacing: '-0.02em',
          marginBottom: '14px',
        }}>
          Transparan &amp; Lengkap
        </h2>

        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: '400',
          fontSize: '17px',
          color: '#6b7280',
          lineHeight: '1.65',
          maxWidth: '560px',
          margin: '0 auto',
        }}>
          Harga langsung terlihat — tidak perlu "hubungi kami dulu". Pilih yang sesuai kebutuhanmu.
        </p>
      </div>

      {/* ════════════════════════════════════════
          ROW 1 — Asymmetric: 58% hero + 42% stack
      ════════════════════════════════════════ */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '58fr 42fr',
        gap: '20px',
        marginBottom: '20px',
      }} className="svc-row1">

        {/* ── HERO CARD — Landing Page ── */}
        <div style={{
          backgroundColor: '#3d4255',
          borderRadius: '24px',
          padding: '48px 40px',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Subtle bg decoration */}
          <div style={{
            position: 'absolute', bottom: '-60px', right: '-60px',
            width: '220px', height: '220px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(122,59,46,0.2) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          {/* Badge top-right */}
          <div style={{
            position: 'absolute', top: '24px', right: '24px',
            backgroundColor: '#7a3b2e', color: '#fff',
            borderRadius: '99px', padding: '6px 14px',
            fontFamily: "'Inter', sans-serif", fontWeight: '600', fontSize: '13px',
          }}>
            Terlaris 🔥
          </div>

          {/* Icon */}
          <div style={{
            width: '52px', height: '52px', borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: '24px',
          }}>
            <Globe size={24} strokeWidth={1.8} color="#f5c4a0" />
          </div>

          {/* Title */}
          <h3 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: '700', fontSize: '28px', color: '#fff',
            marginBottom: '12px', lineHeight: '1.2',
          }}>
            Landing Page
          </h3>

          {/* Description */}
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: '400', fontSize: '16px',
            color: 'rgba(255,255,255,0.65)', lineHeight: '1.65',
            marginBottom: '20px',
          }}>
            Website satu halaman untuk promosi, event, atau produk UMKM.
          </p>

          {/* Feature list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
            {[
              'Desain custom sesuai bisnis',
              'Selesai 3–5 hari kerja',
              'Revisi hingga kamu puas',
            ].map((feat, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Check size={15} strokeWidth={2.5} color="#f5c4a0" style={{ flexShrink: 0 }} />
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: '500', fontSize: '14px',
                  color: 'rgba(255,255,255,0.8)',
                }}>
                  {feat}
                </span>
              </div>
            ))}
          </div>

          {/* Price block */}
          <div style={{ marginTop: 'auto', marginBottom: '24px' }}>
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '4px',
            }}>
              Mulai dari
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
              <span style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: '800', fontSize: '42px', color: '#fff', lineHeight: '1',
              }}>
                Rp 35.000
              </span>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px', color: 'rgba(255,255,255,0.5)',
              }}>
                / proyek
              </span>
            </div>
          </div>

          {/* CTA button */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              backgroundColor: '#7a3b2e', color: '#fff',
              borderRadius: '12px', padding: '16px',
              fontFamily: "'Inter', sans-serif", fontWeight: '600', fontSize: '15px',
              textDecoration: 'none',
              transition: 'background 0.2s, transform 0.2s',
              position: 'relative', zIndex: 1,
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#9c4d3e'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#7a3b2e'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Pesan Sekarang →
          </a>
        </div>

        {/* ── RIGHT STACK — Web Ops + Bot WA ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

          {/* Card A — Web Operasional */}
          {[
            {
              icon: <Server size={20} strokeWidth={1.8} color="#7a3b2e" />,
              title: 'Web Operasional',
              desc: 'Website multi-halaman untuk katalog, toko online, atau portofolio.',
              price: 'Rp 75.000',
              unit: '/ proyek + hosting',
            },
            {
              icon: <Bot size={20} strokeWidth={1.8} color="#7a3b2e" />,
              title: 'Bot WhatsApp',
              desc: 'Auto-reply, terima order otomatis & survei terintegrasi Google Sheets.',
              price: 'Rp 49.000',
              unit: '/ setup',
            },
          ].map((card, i) => (
            <div key={i} style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e8e3dc',
              borderRadius: '20px',
              padding: '28px 24px',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              transition: 'box-shadow 0.25s ease, transform 0.25s ease',
            }}
              className="svc-card-white"
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.07)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <IconCircle icon={card.icon} size={44} />
              <h3 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: '700', fontSize: '20px', color: '#3d4255',
                margin: '16px 0 8px',
              }}>
                {card.title}
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: '400', fontSize: '14px', color: '#6b7280',
                lineHeight: '1.6', marginBottom: '20px', flex: 1,
              }}>
                {card.desc}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginTop: 'auto' }}>
                <div>
                  <span style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: '700', fontSize: '28px', color: '#3d4255',
                  }}>
                    {card.price}
                  </span>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '13px', color: '#9ca3af', marginLeft: '4px',
                  }}>
                    {card.unit}
                  </span>
                </div>
                <OutlineBtn />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════
          ROW 2 — 3 compact horizontal cards
      ════════════════════════════════════════ */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
      }} className="svc-row2">

        {[
          {
            icon: <FileText size={18} strokeWidth={1.8} color="#7a3b2e" />,
            title: 'Template Digital',
            desc: 'CV, undangan, invoice, sertifikat.',
            price: 'Mulai Rp 15.000 / template',
            priceColor: '#7a3b2e',
          },
          {
            icon: <Wrench size={18} strokeWidth={1.8} color="#7a3b2e" />,
            title: 'Maintenance',
            desc: 'Update konten & perbaikan bug.',
            price: 'Mulai Rp 50.000 / bulan',
            priceColor: '#7a3b2e',
          },
          {
            icon: <MessageCircle size={18} strokeWidth={1.8} color="#7a3b2e" />,
            title: 'Konsultasi Digital',
            desc: 'Diskusi strategi digital bisnismu.',
            price: 'Gratis',
            priceColor: '#25a244',
          },
        ].map((card, i) => (
          <a
            key={i}
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              backgroundColor: '#ffffff',
              border: '1px solid #e8e3dc',
              borderRadius: '20px',
              padding: '24px 20px',
              textDecoration: 'none',
              transition: 'box-shadow 0.25s ease, transform 0.25s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,0.07)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            {/* Icon circle */}
            <div style={{
              width: '40px', height: '40px', borderRadius: '50%',
              backgroundColor: '#f2ece6',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              {card.icon}
            </div>

            {/* Content */}
            <div>
              <div style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: '700', fontSize: '16px', color: '#3d4255',
                marginBottom: '3px',
              }}>
                {card.title}
              </div>
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '13px', color: '#6b7280', marginBottom: '6px', lineHeight: '1.5',
              }}>
                {card.desc}
              </div>
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: '600', fontSize: '14px', color: card.priceColor,
              }}>
                {card.price}
              </div>
            </div>
          </a>
        ))}
      </div>

    </div>

    <style>{`
      @media (max-width: 900px) {
        .svc-row1 { grid-template-columns: 1fr !important; }
      }
      @media (max-width: 640px) {
        .svc-row2 { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </section>
);

export default Services;
