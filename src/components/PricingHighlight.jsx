import React from 'react';
import { Flame, CheckCircle2 } from 'lucide-react';

const PricingHighlight = () => {
  return (
    <section id="harga" className="section" style={{ backgroundColor: '#1a1a2e', color: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '20px' }}>Investasi Terjangkau untuk Digital-mu</h2>
          <p style={{ fontSize: '1.1rem', color: '#a0a0b8', maxWidth: '600px', margin: '0 auto' }}>
            Promo terbatas untuk membantu usahamu lebih cepat berkembang di dunia digital.
          </p>
        </div>

        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          background: 'linear-gradient(145deg, #22223b 0%, #1a1a2e 100%)',
          border: '1px solid #33334d',
          borderRadius: '24px',
          padding: '40px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
        }}>
          {/* Decorative glow */}
          <div style={{ position: 'absolute', top: '-50%', left: '-20%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(233,69,96,0.3) 0%, rgba(26,26,46,0) 70%)', borderRadius: '50%', zIndex: 0 }}></div>

          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', md: { flexDirection: 'row' }, gap: '40px' }} className="pricing-split">
            
            <div style={{ flex: '1' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(233, 69, 96, 0.2)', color: '#e94560', padding: '6px 16px', borderRadius: '50px', fontSize: '0.875rem', fontWeight: 'bold', marginBottom: '20px' }}>
                <Flame size={16} /> POPULAR
              </div>
              <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '15px' }}>Paket Bundle Early Adopter</h3>
              <p style={{ color: '#a0a0b8', marginBottom: '30px' }}>Website + WhatsApp Bot untuk 10 client pertama</p>
              
              <div style={{ marginBottom: '30px' }}>
                <div style={{ textDecoration: 'line-through', color: '#6c757d', fontSize: '1.1rem' }}>Rp 178.000/bulan</div>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px' }}>
                  <span style={{ fontSize: '3rem', fontWeight: '800', color: '#fff', lineHeight: '1' }}>Rp 89.000</span>
                  <span style={{ color: '#a0a0b8', paddingBottom: '8px' }}>/bulan</span>
                </div>
                <div style={{ color: '#10b981', fontSize: '0.9rem', fontWeight: 'bold', marginTop: '5px' }}>(Hemat 50%)</div>
              </div>

              <a href="https://wa.me/6288987204298" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', fontSize: '1.1rem', padding: '16px' }}>
                Ambil Promo Sekarang
              </a>
              <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#6c757d', marginTop: '15px' }}>
                Promo berlaku sampai 30 Juni 2026 atau kuota terpenuhi
              </p>
            </div>

            <div style={{ flex: '1', borderLeft: '1px solid #33334d', paddingLeft: '40px' }} className="pricing-features">
              <h4 style={{ fontSize: '1.1rem', marginBottom: '20px', color: '#fff' }}>Yang kamu dapatkan:</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {[
                  "Landing page mobile-friendly",
                  "WhatsApp Bot auto-reply",
                  "Integrasi Google Sheets",
                  "Revisi 30 hari",
                  "Support WhatsApp"
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <CheckCircle2 size={20} color="#10b981" />
                    <span style={{ color: '#e0e0e0' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingHighlight;
