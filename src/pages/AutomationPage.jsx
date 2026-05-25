import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Check, MessageCircle, Settings, Cpu,
  Phone, GitBranch, List, Mail, Bell, ClipboardList, Bot,
} from 'lucide-react';
import Navbar from '../components/Navbar';

const WA_LINK = 'https://wa.me/6288987204298';

const useScrollTop = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
};

/* ─────────────────────────────────────────────
   PRODUCT CARD
───────────────────────────────────────────── */
const ProductCard = ({
  tag, tagBg = '#f2ece6', tagColor = '#7a3b2e',
  Icon, title, description, useCases,
  price, unit, ctaText, ctaOutline = false,
  note,
}) => {
  const [hovered, setHovered] = useState(false);
  const [ctaHovered, setCtaHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #e8e3dc',
        borderRadius: '20px',
        padding: '36px',
        display: 'flex',
        flexDirection: 'column',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 16px 48px rgba(0,0,0,0.09)' : '0 2px 12px rgba(0,0,0,0.04)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      {/* Tag */}
      <span style={{
        display: 'inline-block',
        backgroundColor: tagBg, color: tagColor,
        borderRadius: '99px', padding: '5px 12px',
        fontFamily: "'Inter', sans-serif", fontWeight: '600', fontSize: '11px',
        letterSpacing: '0.08em', textTransform: 'uppercase',
        marginBottom: '24px', alignSelf: 'flex-start',
      }}>
        {tag}
      </span>

      {/* Icon */}
      <div style={{
        width: '52px', height: '52px', borderRadius: '50%',
        backgroundColor: '#f2ece6',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '20px',
        transition: 'transform 0.3s ease',
        transform: hovered ? 'scale(1.1)' : 'scale(1)',
      }}>
        <Icon size={24} strokeWidth={1.8} color="#7a3b2e" />
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: '700', fontSize: '22px', color: '#3d4255',
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

      <div style={{ height: '1px', backgroundColor: '#f0ede8', marginBottom: '20px' }} />

      {/* Use cases */}
      <div style={{ marginBottom: '28px', flex: 1 }}>
        {useCases.map((item, i) => (
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

      {/* Price */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: '800', fontSize: '32px', color: '#3d4255',
          lineHeight: '1', marginBottom: '4px',
        }}>
          {price}
        </div>
        <div style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '13px', color: '#9ca3af',
        }}>
          {unit}
        </div>
      </div>

      {/* CTA */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setCtaHovered(true)}
        onMouseLeave={() => setCtaHovered(false)}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: ctaOutline
            ? (ctaHovered ? '#3d4255' : 'transparent')
            : (ctaHovered ? '#7a3b2e' : '#3d4255'),
          color: ctaOutline ? (ctaHovered ? '#fff' : '#3d4255') : '#fff',
          border: ctaOutline ? '1.5px solid #3d4255' : 'none',
          borderRadius: '12px', padding: '14px',
          fontFamily: "'Inter', sans-serif", fontWeight: '600', fontSize: '15px',
          textDecoration: 'none',
          transition: 'background 0.25s ease, color 0.25s ease, transform 0.2s ease',
          transform: ctaHovered ? 'translateY(-1px)' : 'translateY(0)',
        }}
      >
        {ctaText}
      </a>

      {/* Optional footnote */}
      {note && (
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: '400', fontSize: '13px', color: '#9ca3af',
          lineHeight: '1.6', marginTop: '16px',
        }}>
          {note}
        </p>
      )}
    </div>
  );
};

/* ─────────────────────────────────────────────
   WORKFLOW STEP
───────────────────────────────────────────── */
const WorkflowStep = ({ number, Icon, title, description, isLast }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, position: 'relative' }}>
    {/* Connector line */}
    {!isLast && (
      <div style={{
        position: 'absolute',
        top: '16px',
        left: 'calc(50% + 20px)',
        right: 'calc(-50% + 20px)',
        height: '1px',
        borderTop: '1px dashed #e8e3dc',
        zIndex: 0,
      }} />
    )}

    {/* Number circle */}
    <div style={{
      width: '32px', height: '32px', borderRadius: '50%',
      backgroundColor: '#3d4255',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: '700', fontSize: '14px', color: '#fff',
      marginBottom: '16px', flexShrink: 0, position: 'relative', zIndex: 1,
    }}>
      {number}
    </div>

    {/* Icon circle */}
    <div style={{
      width: '48px', height: '48px', borderRadius: '50%',
      backgroundColor: '#f2ece6',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      marginBottom: '14px',
    }}>
      <Icon size={22} strokeWidth={1.8} color="#7a3b2e" />
    </div>

    {/* Text */}
    <div style={{
      fontFamily: "'Inter', sans-serif",
      fontWeight: '600', fontSize: '15px', color: '#3d4255',
      marginBottom: '6px', textAlign: 'center',
    }}>
      {title}
    </div>
    <div style={{
      fontFamily: "'Inter', sans-serif",
      fontWeight: '400', fontSize: '13px', color: '#6b7280',
      textAlign: 'center', lineHeight: '1.6', maxWidth: '160px',
    }}>
      {description}
    </div>
  </div>
);

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
const AutomationPage = () => {
  useScrollTop();
  const navigate = useNavigate();
  const [waHovered, setWaHovered] = useState(false);
  const [backHovered, setBackHovered] = useState(false);
  const [topBackHovered, setTopBackHovered] = useState(false);

  return (
    <div style={{ backgroundColor: '#faf9f7', minHeight: '100vh' }}>
      <Navbar />

      {/* ── Back button ── */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 32px 0' }}>
        <button
          onClick={() => navigate('/')}
          onMouseEnter={() => setTopBackHovered(true)}
          onMouseLeave={() => setTopBackHovered(false)}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            fontFamily: "'Inter', sans-serif", fontWeight: '500', fontSize: '14px',
            color: topBackHovered ? '#3d4255' : '#6b7280',
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
        background: 'linear-gradient(135deg, #1a3a4a 0%, #2d6a7a 50%, #3d8a8a 100%)',
        padding: '80px 32px',
        marginTop: '16px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-80px', right: '-80px',
          width: '320px', height: '320px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-60px', left: '-60px',
          width: '240px', height: '240px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(61,138,138,0.25) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          maxWidth: '760px', margin: '0 auto',
          textAlign: 'center', position: 'relative', zIndex: 1,
        }}>
          <span style={{
            display: 'inline-block',
            fontFamily: "'Inter', sans-serif",
            fontWeight: '600', fontSize: '12px',
            color: 'rgba(255,255,255,0.6)',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            marginBottom: '20px',
          }}>
            Automation &amp; IoT
          </span>

          <h1 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: '800', fontSize: 'clamp(2rem, 5vw, 48px)',
            color: '#ffffff',
            lineHeight: '1.1', letterSpacing: '-0.02em',
            marginBottom: '20px',
          }}>
            Biarkan Teknologi yang<br />
            Kerja, Kamu yang Untung
          </h1>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: '400', fontSize: '17px',
            color: 'rgba(255,255,255,0.7)',
            lineHeight: '1.65', maxWidth: '520px', margin: '0 auto',
          }}>
            Dari bot WhatsApp sampai sistem IoT —&nbsp;
            kami bantu bisnis kamu jalan otomatis
            bahkan saat kamu tidur.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PRODUCT CARDS
      ══════════════════════════════════════ */}
      <section style={{ padding: '96px 32px', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: '800', fontSize: 'clamp(1.6rem, 3.5vw, 36px)',
            color: '#3d4255', lineHeight: '1.2', letterSpacing: '-0.02em',
            marginBottom: '12px',
          }}>
            Pilih Solusi Otomasi
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '16px', color: '#6b7280',
            lineHeight: '1.65', maxWidth: '440px', margin: '0 auto',
          }}>
            Setiap solusi dirancang untuk mengurangi kerja manual bisnismu.
          </p>
        </div>

        <div className="auto-cards-grid">
          <ProductCard
            tag="Paling Populer"
            Icon={MessageCircle}
            title="Bot WhatsApp Otomatis"
            description="Bot WA yang menjawab pelanggan 24 jam, terima order otomatis, kirim katalog, dan terintegrasi Google Sheets."
            useCases={[
              'Auto-reply pertanyaan umum',
              'Terima & catat order otomatis',
              'Kirim katalog produk otomatis',
              'Notifikasi ke pemilik bisnis',
              'Survei kepuasan pelanggan',
            ]}
            price="Rp 49.000"
            unit="setup sekali bayar"
            ctaText="Pesan Bot WhatsApp →"
          />

          <ProductCard
            tag="Hemat Waktu"
            tagBg="#e8f0fe"
            tagColor="#1a56db"
            Icon={Settings}
            title="Sistem Otomasi Alur Kerja"
            description="Otomasi proses bisnis yang berulang — dari input data, notifikasi, laporan otomatis, hingga integrasi antar aplikasi."
            useCases={[
              'Otomasi input & laporan data',
              'Notifikasi otomatis via WA/email',
              'Integrasi Google Sheets & Forms',
              'Dashboard monitoring bisnis',
              'Custom sesuai alur kerjamu',
            ]}
            price="Mulai Rp 75.000"
            unit="tergantung kompleksitas"
            ctaText="Konsultasi Dulu →"
            ctaOutline={true}
          />

          <ProductCard
            tag="Teknologi Terkini"
            tagBg="#f0fdf4"
            tagColor="#15803d"
            Icon={Cpu}
            title="Solusi IoT untuk Bisnis"
            description="Sensor, monitoring jarak jauh, dan sistem kontrol otomatis untuk bisnis yang butuh data real-time."
            useCases={[
              'Monitoring suhu & kelembaban',
              'Kontrol perangkat jarak jauh',
              'Alert otomatis via WhatsApp',
              'Dashboard data real-time',
              'Custom hardware & software',
            ]}
            price="Mulai Rp 150.000"
            unit="tergantung kebutuhan hardware"
            ctaText="Konsultasi Dulu →"
            ctaOutline={true}
            note="* IoT solution memerlukan konsultasi teknis terlebih dahulu untuk menentukan kebutuhan hardware yang tepat."
          />
        </div>
      </section>

      {/* ══════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════ */}
      <section style={{
        backgroundColor: '#ffffff',
        borderTop: '1px solid #f0ede8',
        borderBottom: '1px solid #f0ede8',
        padding: '96px 32px',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: '800', fontSize: 'clamp(1.6rem, 3.5vw, 36px)',
              color: '#3d4255', lineHeight: '1.2', letterSpacing: '-0.02em',
              marginBottom: '12px',
            }}>
              Gimana Cara Kerjanya?
            </h2>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '16px', color: '#6b7280',
              lineHeight: '1.65', maxWidth: '380px', margin: '0 auto',
            }}>
              Contoh: Bot WhatsApp untuk toko online kamu
            </p>
          </div>

          <div className="auto-steps-grid">
            <WorkflowStep
              number="1"
              Icon={MessageCircle}
              title="Pelanggan Chat"
              description="Pelanggan kirim pesan ke nomor WA bisnismu"
              isLast={false}
            />
            <WorkflowStep
              number="2"
              Icon={Bot}
              title="Bot Merespon"
              description="Bot langsung balas otomatis dalam hitungan detik"
              isLast={false}
            />
            <WorkflowStep
              number="3"
              Icon={ClipboardList}
              title="Order Tercatat"
              description="Data order masuk otomatis ke Google Sheets kamu"
              isLast={false}
            />
            <WorkflowStep
              number="4"
              Icon={Bell}
              title="Kamu Dikabari"
              description="Kamu dapat notifikasi WA setiap ada order baru"
              isLast={true}
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHAT YOU NEED TO PREPARE
      ══════════════════════════════════════ */}
      <section style={{ padding: '96px 32px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: '800', fontSize: 'clamp(1.6rem, 3.5vw, 36px)',
              color: '#3d4255', lineHeight: '1.2', letterSpacing: '-0.02em',
              marginBottom: '12px',
            }}>
              Yang Kamu Perlu Siapkan
            </h2>
          </div>

          <div className="auto-prep-grid">
            <PrepItem
              Icon={Phone}
              title="Nomor WA Bisnis"
              description="Nomor WhatsApp khusus bisnis yang akan dipasang bot."
            />
            <PrepItem
              Icon={GitBranch}
              title="Alur yang Diinginkan"
              description="Cerita ke kami: apa yang mau dijawab bot, apa yang mau dicatat."
            />
            <PrepItem
              Icon={List}
              title="Daftar Produk/Layanan"
              description="Katalog produk atau layanan yang mau ditampilkan di bot."
            />
            <PrepItem
              Icon={Mail}
              title="Akun Google"
              description="Akun Google untuk integrasi Sheets & Forms. Kami bantu setup."
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BOTTOM CTA
      ══════════════════════════════════════ */}
      <section style={{
        backgroundColor: '#1a3a4a',
        padding: '80px 32px',
        textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(61,138,138,0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: '800', fontSize: 'clamp(1.8rem, 4vw, 40px)',
            color: '#ffffff', lineHeight: '1.15',
            letterSpacing: '-0.02em', marginBottom: '16px',
          }}>
            Siap Otomasi Bisnismu?
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '17px', color: 'rgba(255,255,255,0.7)',
            lineHeight: '1.65',
            maxWidth: '420px', margin: '0 auto 40px',
          }}>
            Konsultasi gratis dulu. Cerita kebutuhanmu,
            kami yang carikan solusinya.
          </p>

          <div style={{
            display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap',
          }}>
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

            <button
              onClick={() => navigate('/')}
              onMouseEnter={() => setBackHovered(true)}
              onMouseLeave={() => setBackHovered(false)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                backgroundColor: backHovered ? 'rgba(255,255,255,0.08)' : 'transparent',
                color: '#ffffff',
                border: `1.5px solid ${backHovered ? '#fff' : 'rgba(255,255,255,0.5)'}`,
                borderRadius: '99px', padding: '16px 32px',
                fontFamily: "'Inter', sans-serif", fontWeight: '600', fontSize: '15px',
                cursor: 'pointer',
                transition: 'border-color 0.25s ease, background 0.25s ease, transform 0.2s ease',
                transform: backHovered ? 'translateY(-2px)' : 'translateY(0)',
              }}
            >
              ← Kembali ke Semua Layanan
            </button>
          </div>
        </div>
      </section>

      {/* ── Responsive styles ── */}
      <style>{`
        .auto-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: start;
        }
        .auto-steps-grid {
          display: flex;
          flex-direction: row;
          gap: 8px;
          align-items: flex-start;
        }
        .auto-prep-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        @media (max-width: 960px) {
          .auto-cards-grid {
            grid-template-columns: 1fr;
          }
          .auto-steps-grid {
            flex-direction: column;
            align-items: center;
            gap: 32px;
          }
          .auto-steps-grid > div > div:first-of-type {
            /* hide horizontal connector on mobile */
            display: none !important;
          }
        }
        @media (max-width: 640px) {
          .auto-prep-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default AutomationPage;
