import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero" style={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#1a1a2e',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '80px',
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(233,69,96,0.15) 0%, rgba(26,26,46,0) 70%)',
        zIndex: 1
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }} className="hero-grid">
          
          <div style={{ color: '#ffffff' }}>
            <div className="badge" style={{ marginBottom: '20px', backgroundColor: 'rgba(233,69,96,0.2)', color: '#e94560', border: '1px solid rgba(233,69,96,0.3)' }}>
              <CheckCircle2 size={16} />
              <span>Early Adopter: Diskon 50% untuk 10 Client Pertama</span>
            </div>
            
            <h1 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '20px' }}>
              Kami yang <span style={{ color: '#e94560' }}>Tangani</span>,<br />Kamu Fokus ke <span style={{ color: '#0f3460', WebkitTextStroke: '1px #0f3460', color: '#64d2ff' }}>Tujuanmu</span>
            </h1>
            
            <p style={{ fontSize: '1.2rem', color: '#a0a0b8', marginBottom: '40px', lineHeight: '1.6', maxWidth: '90%' }}>
              Jasa pembuatan website, WhatsApp bot, dan template digital mulai Rp 15.000. Pengerjaan 3-7 hari dengan garansi tertulis 30 hari.
            </p>
            
            <div style={{ display: 'flex', gap: '20px' }} className="hero-btns">
              <a href="https://wa.me/6288987204298" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem', padding: '16px 32px' }}>
                Konsultasi Gratis <ArrowRight size={20} />
              </a>
              <a href="#layanan" className="btn btn-secondary" style={{ fontSize: '1.1rem', padding: '16px 32px' }}>
                Lihat Layanan
              </a>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)',
              width: '120%', 
              height: '120%', 
              background: 'radial-gradient(circle, rgba(15,52,96,0.4) 0%, rgba(26,26,46,0) 70%)',
              zIndex: -1 
            }}></div>
            <img 
              src="/hero-mockup.png" 
              alt="Handle IT Dashboard and Chatbot Mockup" 
              style={{ width: '100%', height: 'auto', borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', transform: 'perspective(1000px) rotateY(-10deg) rotateX(5deg)' }} 
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
