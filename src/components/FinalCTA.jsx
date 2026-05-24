import React from 'react';
import { MessageCircle, Zap, Shield } from 'lucide-react';

const FinalCTA = () => (
  <section id="kontak" style={{
    background: 'linear-gradient(145deg, #2c3045 0%, #3d4255 100%)',
    padding: '100px 0',
    position: 'relative',
    overflow: 'hidden',
  }}>
    {/* Decorative circles */}
    <div style={{
      position: 'absolute', top: '-80px', right: '-60px',
      width: '320px', height: '320px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(122,59,46,0.25) 0%, transparent 70%)',
      pointerEvents: 'none',
    }} />
    <div style={{
      position: 'absolute', bottom: '-60px', left: '-40px',
      width: '240px', height: '240px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(37,211,102,0.12) 0%, transparent 70%)',
      pointerEvents: 'none',
    }} />
    <div style={{
      position: 'absolute', inset: 0,
      backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
      backgroundSize: '28px 28px',
      pointerEvents: 'none',
    }} />

    <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
      {/* Label */}
      <span style={{
        display: 'inline-block',
        backgroundColor: 'rgba(37,211,102,0.15)',
        border: '1px solid rgba(37,211,102,0.3)',
        color: '#25D366',
        padding: '6px 18px',
        borderRadius: '50px',
        fontSize: '0.82rem',
        fontWeight: '700',
        letterSpacing: '0.08em',
        marginBottom: '24px',
      }}>
        Gratis · Tidak Ada Paksaan
      </span>

      <h2 style={{
        fontSize: 'clamp(2rem, 5vw, 3.2rem)',
        fontWeight: '800',
        color: '#fff',
        lineHeight: '1.15',
        marginBottom: '16px',
        letterSpacing: '-0.02em',
      }}>
        Masih Ragu?<br />
        <span style={{ color: 'rgba(255,255,255,0.65)', fontWeight: '600', fontSize: '0.85em' }}>
          Tanya Dulu, Gratis.
        </span>
      </h2>

      <p style={{
        fontSize: '1.05rem',
        color: 'rgba(255,255,255,0.65)',
        marginBottom: '44px',
        maxWidth: '540px',
        margin: '0 auto 44px auto',
        lineHeight: '1.7',
      }}>
        Tim kami siap bantu kamu pilih layanan yang pas. Tidak ada komitmen, tidak perlu bayar dulu. Ngobrol santai aja!
      </p>

      <a
        href="https://wa.me/6288987204298"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-wa pulse-wa"
        style={{
          fontSize: '1.15rem',
          padding: '18px 44px',
          boxShadow: '0 12px 40px rgba(37,211,102,0.35)',
          marginBottom: '36px',
          gap: '10px',
        }}
      >
        <MessageCircle size={22} /> Chat WhatsApp Sekarang →
      </a>

      {/* Trust signals */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '28px',
        color: 'rgba(255,255,255,0.55)',
        fontSize: '0.875rem',
        fontWeight: '600',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Zap size={16} color="#25D366" /> Respons &lt; 2 jam
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Shield size={16} color="#25D366" /> Garansi revisi 30 hari
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <MessageCircle size={16} color="#25D366" /> Konsultasi 100% gratis
        </div>
      </div>
    </div>
  </section>
);

export default FinalCTA;
