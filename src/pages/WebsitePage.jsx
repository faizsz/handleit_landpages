import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, X, Building2, Image, Palette, Phone } from 'lucide-react';
import Navbar from '../components/Navbar';

const WA_LINK = 'https://wa.me/6288987204298';

/* ─── Scroll to top on mount ─── */
const useScrollTop = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
};

/* ─────────────────────────────────────────────
   COMPARISON CARD
───────────────────────────────────────────── */
const ComparisonCard = ({
  tag, tagBg = '#f2ece6', tagColor = '#7a3b2e',
  title, description, goodFor, notFor,
  price, priceSub, ctaText,
  highlighted = false,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: '1 1 0',
        backgroundColor: '#ffffff',
        border: highlighted ? '2px solid #3d4255' : '1px solid #e8e3dc',
        borderRadius: '20px',
        padding: '36px',
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 16px 48px rgba(0,0,0,0.09)' : '0 2px 12px rgba(0,0,0,0.04)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        position: 'relative',
      }}
    >
      {highlighted && (
        <div style={{
          position: 'absolute', top: '-1px', left: '50%', transform: 'translateX(-50%)',
          backgroundColor: '#3d4255', color: '#fff',
          borderRadius: '0 0 10px 10px',
          padding: '4px 16px',
          fontFamily: "'Inter', sans-serif", fontWeight: '600', fontSize: '11px',
          letterSpacing: '0.06em', whiteSpace: 'nowrap',
        }}>
          ⭐ POPULER
        </div>
      )}

      {/* Tag */}
      <span style={{
        display: 'inline-block',
        backgroundColor: tagBg, color: tagColor,
        borderRadius: '99px', padding: '5px 12px',
        fontFamily: "'Inter', sans-serif", fontWeight: '600', fontSize: '11px',
        letterSpacing: '0.08em', textTransform: 'uppercase',
        marginBottom: '20px', alignSelf: 'flex-start',
      }}>
        {tag}
      </span>

      {/* Title */}
      <h3 style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: '700', fontSize: '24px', color: '#3d4255',
        marginBottom: '12px',
      }}>
        {title}
      </h3>

      {/* Description */}
      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: '400', fontSize: '15px', color: '#6b7280',
        lineHeight: '1.7', marginBottom: '24px',
      }}>
        {description}
      </p>

      {/* Divider */}
      <div style={{ height: '1px', backgroundColor: '#f0ede8', marginBottom: '20px' }} />

      {/* Good for */}
      <div style={{ marginBottom: '16px' }}>
        {goodFor.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' }}>
            <Check size={15} strokeWidth={2.5} color="#7a3b2e" style={{ flexShrink: 0, marginTop: '2px' }} />
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: '500', fontSize: '14px', color: '#3d4255',
            }}>
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* Not for */}
      <div style={{ marginBottom: '28px' }}>
        {notFor.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '8px' }}>
            <X size={14} strokeWidth={2.5} color="#d1d5db" style={{ flexShrink: 0, marginTop: '2px' }} />
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: '400', fontSize: '14px', color: '#9ca3af',
            }}>
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* Price */}
      <div style={{ marginTop: 'auto', marginBottom: '24px' }}>
        <div style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: '800', fontSize: '36px', color: '#3d4255',
          lineHeight: '1', marginBottom: '6px',
        }}>
          {price}
        </div>
        <div style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '13px', color: '#9ca3af',
        }}>
          {priceSub}
        </div>
      </div>

      {/* CTA */}
      <CtaButton text={ctaText} />
    </div>
  );
};

const CtaButton = ({ text }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: hovered ? '#7a3b2e' : '#3d4255',
        color: '#ffffff',
        borderRadius: '12px', padding: '16px',
        fontFamily: "'Inter', sans-serif", fontWeight: '600', fontSize: '15px',
        textDecoration: 'none',
        transition: 'background 0.25s ease, transform 0.2s ease',
        transform: hovered ? 'translateY(-1px)' : 'translateY(0)',
      }}
    >
      {text}
    </a>
  );
};

/* ─────────────────────────────────────────────
   PREP ITEM
───────────────────────────────────────────── */
const PrepItem = ({ Icon, title, description }) => (
  <div style={{
    display: 'flex', alignItems: 'flex-start', gap: '16px',
    backgroundColor: '#ffffff',
    border: '1px solid #e8e3dc',
    borderRadius: '16px',
    padding: '24px',
  }}>
    <div style={{
      width: '44px', height: '44px', borderRadius: '50%',
      backgroundColor: '#f2ece6',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
    }}>
      <Icon size={20} strokeWidth={1.8} color="#7a3b2e" />
    </div>
    <div>
      <div style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: '600', fontSize: '16px', color: '#3d4255',
        marginBottom: '6px',
      }}>
        {title}
      </div>
      <div style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: '400', fontSize: '14px', color: '#6b7280',
        lineHeight: '1.65',
      }}>
        {description}
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
const WebsitePage = () => {
  useScrollTop();
  const navigate = useNavigate();
  const [waHovered, setWaHovered] = useState(false);
  const [backHovered, setBackHovered] = useState(false);

  return (
    <div style={{ backgroundColor: '#faf9f7', minHeight: '100vh' }}>
      <Navbar />

      {/* ── Back button ── */}
      <div style={{
        paddingTop: '80px', /* below fixed navbar */
        maxWidth: '1280px', margin: '0 auto', padding: '80px 32px 0',
      }}>
        <button
          onClick={() => navigate('/')}
          onMouseEnter={() => setBackHovered(true)}
          onMouseLeave={() => setBackHovered(false)}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            fontFamily: "'Inter', sans-serif", fontWeight: '500', fontSize: '14px',
            color: backHovered ? '#3d4255' : '#6b7280',
            padding: '8px 0',
            transition: 'color 0.2s ease',
          }}
        >
          <ArrowLeft size={16} strokeWidth={2} />
          Kembali ke Layanan
        </button>
      </div>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section style={{
        background: 'linear-gradient(135deg, #3d4255 0%, #5a6080 50%, #7a3b2e 100%)',
        padding: '80px 32px',
        marginTop: '16px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative blobs */}
        <div style={{
          position: 'absolute', top: '-80px', right: '-80px',
          width: '320px', height: '320px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-60px', left: '-60px',
          width: '240px', height: '240px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(122,59,46,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          {/* Eyebrow */}
          <span style={{
            display: 'inline-block',
            fontFamily: "'Inter', sans-serif",
            fontWeight: '600', fontSize: '12px',
            color: 'rgba(255,255,255,0.6)',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            marginBottom: '20px',
          }}>
            Layanan Website
          </span>

          {/* Headline */}
          <h1 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: '800', fontSize: 'clamp(2rem, 5vw, 48px)',
            color: '#ffffff',
            lineHeight: '1.15', letterSpacing: '-0.02em',
            marginBottom: '20px',
          }}>
            Website yang Bikin Bisnismu<br />
            Kelihatan Profesional
          </h1>

          {/* Subtext */}
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: '400', fontSize: '17px',
            color: 'rgba(255,255,255,0.7)',
            lineHeight: '1.65', maxWidth: '500px', margin: '0 auto',
          }}>
            Pilih sesuai kebutuhanmu —&nbsp;
            promosi cepat atau operasional lengkap.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          COMPARISON SECTION
      ══════════════════════════════════════ */}
      <section style={{ padding: '96px 32px', maxWidth: '1280px', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: '800', fontSize: 'clamp(1.6rem, 3.5vw, 36px)',
            color: '#3d4255', lineHeight: '1.2', letterSpacing: '-0.02em',
            marginBottom: '12px',
          }}>
            Landing Page vs Web Operasional
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '16px', color: '#6b7280',
            lineHeight: '1.65', maxWidth: '440px', margin: '0 auto',
          }}>
            Bingung mau pilih yang mana? Ini bedanya:
          </p>
        </div>

        {/* Cards */}
        <div className="website-compare-grid">
          <ComparisonCard
            tag="Cocok untuk Promosi"
            title="Landing Page"
            description="Satu halaman fokus yang dirancang untuk mengubah pengunjung jadi pembeli atau leads."
            goodFor={[
              'Produk atau jasa tunggal',
              'Promosi event & diskon',
              'Portofolio personal',
              'Pre-order & waitlist',
            ]}
            notFor={[
              'Toko online multi-produk',
              'Website dengan banyak halaman',
            ]}
            price="Mulai Rp 35.000"
            priceSub="per proyek · revisi 2x · selesai 3–5 hari"
            ctaText="Pesan Landing Page →"
          />

          <ComparisonCard
            tag="Cocok untuk Bisnis Aktif"
            title="Web Operasional"
            description="Website lengkap multi-halaman dengan sistem yang bisa dikelola sendiri setelah selesai."
            goodFor={[
              'Toko online & katalog produk',
              'Company profile bisnis',
              'Website dengan blog/artikel',
              'Portal informasi',
            ]}
            notFor={[
              'Yang butuh hanya 1 halaman promosi',
              'Budget sangat terbatas',
            ]}
            price="Mulai Rp 75.000"
            priceSub="per proyek · hosting included · selesai 5–7 hari"
            ctaText="Pesan Web Operasional →"
            highlighted={true}
          />
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHAT YOU NEED TO PREPARE
      ══════════════════════════════════════ */}
      <section style={{
        backgroundColor: '#ffffff',
        borderTop: '1px solid #f0ede8',
        borderBottom: '1px solid #f0ede8',
        padding: '96px 32px',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: '800', fontSize: 'clamp(1.6rem, 3.5vw, 36px)',
              color: '#3d4255', lineHeight: '1.2', letterSpacing: '-0.02em',
              marginBottom: '12px',
            }}>
              Yang Kamu Perlu Siapkan
            </h2>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '16px', color: '#6b7280',
              lineHeight: '1.65', maxWidth: '400px', margin: '0 auto',
            }}>
              Tidak banyak kok. Ini saja sudah cukup untuk kami mulai.
            </p>
          </div>

          {/* 2×2 grid */}
          <div className="website-prep-grid">
            <PrepItem
              Icon={Building2}
              title="Informasi Bisnis"
              description="Nama bisnis, tagline, dan deskripsi singkat apa yang kamu jual."
            />
            <PrepItem
              Icon={Image}
              title="Foto atau Produk"
              description="Foto produk atau bisnis kamu. Tidak ada? Kami bantu carikan yang sesuai."
            />
            <PrepItem
              Icon={Palette}
              title="Warna & Selera"
              description="Referensi warna atau contoh website yang kamu suka. Boleh dari Google."
            />
            <PrepItem
              Icon={Phone}
              title="Kontak Aktif"
              description="Nomor WA, Instagram, atau marketplace yang mau ditampilkan."
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BOTTOM CTA
      ══════════════════════════════════════ */}
      <section style={{
        backgroundColor: '#3d4255',
        padding: '80px 32px',
        textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Decorative blob */}
        <div style={{
          position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(122,59,46,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: '800', fontSize: 'clamp(1.8rem, 4vw, 40px)',
            color: '#ffffff', lineHeight: '1.15',
            letterSpacing: '-0.02em', marginBottom: '16px',
          }}>
            Siap Punya Website?
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '17px', color: 'rgba(255,255,255,0.7)',
            lineHeight: '1.65', marginBottom: '40px',
            maxWidth: '420px', margin: '0 auto 40px',
          }}>
            Konsultasi dulu gratis.
            Tidak ada paksaan, tidak ada DP.
          </p>

          {/* Buttons */}
          <div style={{
            display: 'flex', gap: '16px', justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            {/* WA Button */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setWaHovered(true)}
              onMouseLeave={() => setWaHovered(false)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                backgroundColor: waHovered ? '#1da851' : '#25d366',
                color: '#ffffff',
                borderRadius: '99px', padding: '16px 32px',
                fontFamily: "'Inter', sans-serif", fontWeight: '600', fontSize: '15px',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(37,211,102,0.35)',
                transition: 'background 0.25s ease, transform 0.2s ease',
                transform: waHovered ? 'translateY(-2px)' : 'translateY(0)',
              }}
            >
              💬 Chat WhatsApp Sekarang
            </a>

            {/* Back button */}
            <button
              onClick={() => navigate('/')}
              onMouseEnter={() => setBackHovered(true)}
              onMouseLeave={() => setBackHovered(false)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                backgroundColor: 'transparent',
                color: '#ffffff',
                border: '1.5px solid rgba(255,255,255,0.5)',
                borderRadius: '99px', padding: '16px 32px',
                fontFamily: "'Inter', sans-serif", fontWeight: '600', fontSize: '15px',
                cursor: 'pointer',
                transition: 'border-color 0.25s ease, background 0.25s ease, transform 0.2s ease',
                borderColor: backHovered ? '#fff' : 'rgba(255,255,255,0.5)',
                backgroundColor: backHovered ? 'rgba(255,255,255,0.08)' : 'transparent',
                transform: backHovered ? 'translateY(-2px)' : 'translateY(0)',
              }}
            >
              ← Kembali ke Semua Layanan
            </button>
          </div>
        </div>
      </section>

      {/* Responsive styles */}
      <style>{`
        .website-compare-grid {
          display: flex;
          flex-direction: row;
          gap: 24px;
          align-items: stretch;
        }
        .website-prep-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        @media (max-width: 860px) {
          .website-compare-grid {
            flex-direction: column;
          }
        }
        @media (max-width: 640px) {
          .website-prep-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default WebsitePage;
