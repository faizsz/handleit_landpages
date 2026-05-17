import React from 'react';
import { MessageSquare, Zap, Gift } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="section" style={{ padding: '100px 0', backgroundColor: '#e94560', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-100px', right: '-50px', width: '300px', height: '300px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}></div>
      <div style={{ position: 'absolute', bottom: '-50px', left: '-50px', width: '200px', height: '200px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '20px' }}>Siap Go Digital dengan Biaya Terjangkau?</h2>
        <p style={{ fontSize: '1.25rem', opacity: '0.9', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px auto' }}>
          Konsultasi gratis, nggak ada kewajiban order. Yuk ngobrol dulu!
        </p>
        
        <a href="https://wa.me/6288987204298" target="_blank" rel="noopener noreferrer" className="btn" style={{ 
          backgroundColor: '#fff', 
          color: '#e94560', 
          fontSize: '1.2rem', 
          padding: '18px 40px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '12px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
        }}>
          <MessageSquare size={24} /> Chat WhatsApp Sekarang
        </a>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '40px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1rem', fontWeight: '500' }}>
            <Zap size={20} /> Respons cepat &lt; 2 jam
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1rem', fontWeight: '500' }}>
            <Gift size={20} /> Early adopter diskon 50%
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
