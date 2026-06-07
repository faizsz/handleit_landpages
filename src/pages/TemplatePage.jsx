import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Check, Mail, Ticket, Vote, CalendarHeart,
  Image, Palette, Phone, FileText,
} from 'lucide-react';
import Navbar from '../components/Navbar';

const WA_LINK = 'https://wa.me/6288987204298';

const useScrollTop = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
};

/* ─────────────────────────────────────────────
   TEMPLATE PRODUCT CARD
───────────────────────────────────────────── */
const TemplateCard = ({
  tag, tagBg = '#f2ece6', tagColor = '#7a3b2e',
  Icon, title, description, features,
  price, unit, ctaText,
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
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 16px 48px rgba(0,0,0,0.09)' : '0 2px 12px rgba(0,0,0,0.04)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
    >
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

      <div style={{
        width: '52px', height: '52px', borderRadius: '50%',
        backgroundColor: '#f2ece6',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '18px',
        transition: 'transform 0.3s ease',
        transform: hovered ? 'scale(1.1)' : 'scale(1)',
      }}>
        <Icon size={24} strokeWidth={1.8} color="#7a3b2e" />
      </div>

      <h3 style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: '700', fontSize: '21px', color: '#3d4255',
        marginBottom: '10px',
      }}>
        {title}
      </h3>

      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: '400', fontSize: '14px', color: '#6b7280',
        lineHeight: '1.7', marginBottom: '22px',
      }}>
        {description}
      </p>

      <div style={{ height: '1px', backgroundColor: '#f0ede8', marginBottom: '18px' }} />

      <div style={{ marginBottom: '26px', flex: 1 }}>
        {features.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '9px' }}>
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

      <div style={{ marginBottom: '18px' }}>
        <div style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: '800', fontSize: '30px', color: '#3d4255',
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

      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setCtaHovered(true)}
        onMouseLeave={() => setCtaHovered(false)}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: ctaHovered ? '#7a3b2e' : '#3d4255',
          color: '#fff',
          borderRadius: '12px', padding: '14px',
          fontFamily: "'Inter', sans-serif", fontWeight: '600', fontSize: '15px',
          textDecoration: 'none',
          transition: 'background 0.25s ease, transform 0.2s ease',
          transform: ctaHovered ? 'translateY(-1px)' : 'translateY(0)',
        }}
      >
        {ctaText}
      </a>
    </div>
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
const TemplatePage = () => {
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
        background: 'linear-gradient(135deg, #4a2a1a 0%, #7a4a2a 50%, #b07040 100%)',
        padding: '80px 32px',
        marginTop: '16px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-80px', right: '-80px',
          width: '320px', height: '320px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-60px', left: '-60px',
          width: '240px', height: '240px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(176,112,64,0.3) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <span style={{
            display: 'inline-block',
            fontFamily: "'Inter', sans-serif",
            fontWeight: '600', fontSize: '12px',
            color: 'rgba(255,255,255,0.65)',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            marginBottom: '20px',
          }}>
            Template Digital
          </span>

          <h1 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: '800', fontSize: 'clamp(2rem, 5vw, 48px)',
            color: '#ffffff',
            lineHeight: '1.15', letterSpacing: '-0.02em',
            marginBottom: '20px',
          }}>
            Template Siap Pakai,<br />
            Harga Bersahabat
          </h1>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: '400', fontSize: '17px',
            color: 'rgba(255,255,255,0.75)',
            lineHeight: '1.65', maxWidth: '520px', margin: '0 auto',
          }}>
            Dari undangan digital sampai sistem pemilu online —&nbsp;
            desain profesional, langsung jadi, tinggal pakai.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TEMPLATE CARDS
      ══════════════════════════════════════ */}
      <section style={{ padding: '96px 32px', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: '800', fontSize: 'clamp(1.6rem, 3.5vw, 36px)',
            color: '#3d4255', lineHeight: '1.2', letterSpacing: '-0.02em',
            marginBottom: '12px',
          }}>
            Pilih Template yang Kamu Mau
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '16px', color: '#6b7280',
            lineHeight: '1.65', maxWidth: '440px', margin: '0 auto',
          }}>
            Semua bisa di-custom sesuai acara atau kebutuhanmu.
          </p>
        </div>

        <div className="template-cards-grid">
          <TemplateCard
            tag="Paling Laris"
            Icon={CalendarHeart}
            title="Undangan Digital"
            description="Undangan online elegan untuk pernikahan, khitanan, ulang tahun, atau acara spesial lainnya."
            features={[
              'Desain tema bisa dipilih',
              'Galeri foto & countdown acara',
              'Peta lokasi & RSVP tamu',
              'Background music & amplop digital',
              'Link bisa dibagikan ke WA',
            ]}
            price="Mulai Rp 25.000"
            unit="per acara · revisi sesuai kebutuhan"
            ctaText="Pesan Undangan →"
          />

          <TemplateCard
            tag="Buat Event"
            tagBg="#e8f0fe"
            tagColor="#1a56db"
            Icon={Ticket}
            title="Tiket Elektronik (E-Ticket)"
            description="Sistem tiket digital dengan QR code untuk konser, seminar, bazar, atau acara berbayar."
            features={[
              'Tiket dengan QR code unik',
              'Scan validasi saat masuk acara',
              'Rekap penjualan otomatis',
              'Pembayaran terintegrasi',
              'Cocok untuk event berbayar',
            ]}
            price="Mulai Rp 50.000"
            unit="per event · tergantung jumlah tiket"
            ctaText="Konsultasi E-Ticket →"
          />

          <TemplateCard
            tag="Pemilihan Online"
            tagBg="#f0fdf4"
            tagColor="#15803d"
            Icon={Vote}
            title="Sistem Pemilu Digital"
            description="Sistem voting online aman untuk pemilihan OSIS, ketua organisasi, BEM, atau pemilihan internal lainnya."
            features={[
              'Voting online real-time',
              'Satu suara per pemilih (anti-curang)',
              'Hasil otomatis & transparan',
              'Dashboard panitia',
              'Cocok untuk sekolah & organisasi',
            ]}
            price="Mulai Rp 100.000"
            unit="per pemilihan · tergantung jumlah pemilih"
            ctaText="Konsultasi Sistem Pemilu →"
          />
        </div>

        {/* Extra templates note */}
        <div style={{
          marginTop: '48px',
          backgroundColor: '#f2ece6',
          border: '1px solid #ddd0c4',
          borderRadius: '16px',
          padding: '28px 32px',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '15px', color: '#7a3b2e', fontWeight: '500',
            lineHeight: '1.7', margin: 0,
          }}>
            Butuh template lain? Kami juga buat <strong>katalog digital, menu QR resto,
            sertifikat otomatis, formulir pendaftaran online</strong>, dan banyak lagi.
            Cerita aja kebutuhanmu di WA.
          </p>
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
              Tergantung template, tapi umumnya cukup ini saja.
            </p>
          </div>

          <div className="template-prep-grid">
            <PrepItem
              Icon={FileText}
              title="Detail Acara / Konten"
              description="Nama acara, tanggal, lokasi, atau daftar kandidat untuk sistem pemilu."
            />
            <PrepItem
              Icon={Image}
              title="Foto & Aset"
              description="Foto untuk galeri undangan, logo organisasi, atau foto kandidat."
            />
            <PrepItem
              Icon={Palette}
              title="Tema & Warna"
              description="Referensi tema atau warna yang kamu suka. Boleh kirim contoh."
            />
            <PrepItem
              Icon={Phone}
              title="Kontak & Jumlah"
              description="Estimasi jumlah tamu, tiket, atau pemilih supaya kami sesuaikan."
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BOTTOM CTA
      ══════════════════════════════════════ */}
      <section style={{
        backgroundColor: '#4a2a1a',
        padding: '80px 32px',
        textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(176,112,64,0.22) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: '800', fontSize: 'clamp(1.8rem, 4vw, 40px)',
            color: '#ffffff', lineHeight: '1.15',
            letterSpacing: '-0.02em', marginBottom: '16px',
          }}>
            Cek Harga Template Kamu Gratis
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '17px', color: 'rgba(255,255,255,0.75)',
            lineHeight: '1.65', maxWidth: '420px', margin: '0 auto 40px',
          }}>
            Cerita acara atau kebutuhanmu, kami kasih
            estimasi harga langsung. Tanpa DP.
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
              💬 Cek Harga Gratis di WA
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

      <style>{`
        .template-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: start;
        }
        .template-prep-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        @media (max-width: 960px) {
          .template-cards-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 640px) {
          .template-prep-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default TemplatePage;
