import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, MessageCircle, Star } from 'lucide-react';

const ROTATING_WORDS = ['Terjangkau', 'Transparan', 'Terpercaya'];

const Hero = () => {
  const [wordIdx, setWordIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIdx(i => (i + 1) % ROTATING_WORDS.length);
        setVisible(true);
      }, 350);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(145deg, #2c3045 0%, #3d4255 45%, #4a5068 100%)',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '88px',
    }}>
      {/* Subtle background decorations */}
      <div style={{
        position: 'absolute', top: '-120px', right: '-80px',
        width: '550px', height: '550px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(122,59,46,0.18) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '-80px', left: '-60px',
        width: '350px', height: '350px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(37,211,102,0.08) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />
      {/* Grid dots pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', paddingTop: '40px', paddingBottom: '60px' }}>

        {/* Label */}
        <div style={{ marginBottom: '24px', animation: 'fadeInUp 0.5s ease 0.1s both' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            backgroundColor: 'rgba(122,59,46,0.2)',
            border: '1px solid rgba(122,59,46,0.35)',
            color: '#e8967f',
            padding: '7px 18px',
            borderRadius: '50px',
            fontSize: '0.85rem',
            fontWeight: '700',
            letterSpacing: '0.05em',
          }}>
            ✦ Jasa Digital untuk UMKM & Pelajar Indonesia
          </span>
        </div>

        {/* Main Headline */}
        <h1 style={{
          fontSize: 'clamp(2.8rem, 6vw, 5rem)',
          fontWeight: '800',
          color: '#fff',
          lineHeight: '1.1',
          letterSpacing: '-0.03em',
          marginBottom: '24px',
          animation: 'fadeInUp 0.6s ease 0.2s both',
        }}>
          Bisnis Kamu Layak<br />
          <span style={{ color: '#e8967f' }}>Punya Website</span>
        </h1>

        {/* Animated sub-headline */}
        <div style={{
          fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
          fontWeight: '600',
          color: 'rgba(255,255,255,0.75)',
          marginBottom: '32px',
          height: '2.2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          animation: 'fadeInUp 0.6s ease 0.3s both',
        }}>
          <span>Layanan yang</span>
          <span style={{
            display: 'inline-block',
            color: '#25D366',
            fontWeight: '800',
            transition: 'opacity 0.35s ease, transform 0.35s ease',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(-10px)',
            minWidth: '160px',
            textAlign: 'left',
          }}>
            {ROTATING_WORDS[wordIdx]}
          </span>
        </div>

        {/* Price Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '12px',
          backgroundColor: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '50px',
          padding: '10px 24px',
          marginBottom: '40px',
          animation: 'fadeInUp 0.6s ease 0.4s both',
        }}>
          <span style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', fontWeight: '500' }}>Mulai dari</span>
          <span style={{
            fontSize: '1.6rem',
            fontWeight: '800',
            color: '#25D366',
          }}>Rp 35.000</span>
          <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>— tanpa biaya tersembunyi</span>
        </div>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '40px',
          animation: 'fadeInUp 0.6s ease 0.5s both',
        }}>
          <a href="#layanan" className="btn" style={{
            backgroundColor: '#fff',
            color: '#3d4255',
            fontWeight: '800',
            padding: '15px 32px',
            fontSize: '1rem',
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
          }}>
            Lihat Paket <ArrowRight size={18} />
          </a>
          <a
            href="https://wa.me/6288987204298"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-wa"
            style={{ padding: '15px 32px', fontSize: '1rem' }}
          >
            <MessageCircle size={18} /> Tanya Dulu di WA
          </a>
        </div>

        {/* Social Proof */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          color: 'rgba(255,255,255,0.65)',
          fontSize: '0.9rem',
          fontWeight: '500',
          animation: 'fadeInUp 0.6s ease 0.6s both',
        }}>
          <div style={{ display: 'flex', gap: '2px' }}>
            {[1,2,3,4,5].map(i => (
              <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
            ))}
          </div>
          <span>Dipercaya UMKM & pelajar di seluruh Indonesia</span>
        </div>

      </div>
    </section>
  );
};

export default Hero;
