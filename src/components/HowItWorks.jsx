import React from 'react';
import { MessageCircle, FileSignature, Clock, CheckSquare } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <MessageCircle size={28} color="#fff" />,
      title: "Konsultasi Gratis",
      desc: "Ceritakan kebutuhanmu via WhatsApp. Kami bantu rekomendasikan solusi terbaik.",
      color: "#0f3460"
    },
    {
      icon: <FileSignature size={28} color="#fff" />,
      title: "Brief & Kontrak",
      desc: "Isi brief sederhana, tanda tangani kontrak digital, bayar DP 50%",
      color: "#e94560"
    },
    {
      icon: <Clock size={28} color="#fff" />,
      title: "Pengerjaan 3-7 Hari",
      desc: "Tim kami kerjakan. Kamu dapat update progress via WhatsApp",
      color: "#f59e0b"
    },
    {
      icon: <CheckSquare size={28} color="#fff" />,
      title: "Serah Terima & Garansi",
      desc: "Website/bot jadi, pelunasan, dan garansi 30 hari aktif",
      color: "#10b981"
    }
  ];

  return (
    <section className="section bg-light" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <h2 className="section-title">Cara Order - 4 Langkah Mudah</h2>
        
        <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
          {/* Connecting line for desktop */}
          <div style={{
            position: 'absolute',
            top: '40px',
            left: '50px',
            right: '50px',
            height: '4px',
            backgroundColor: '#eaeaea',
            zIndex: 1,
            display: 'block'
          }} className="step-line"></div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', position: 'relative', zIndex: 2 }}>
            {steps.map((step, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: step.color,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                  boxShadow: `0 10px 20px ${step.color}40`,
                  border: '4px solid #f8f9fa'
                }}>
                  {step.icon}
                </div>
                <div style={{
                  backgroundColor: '#fff',
                  padding: '20px',
                  borderRadius: '16px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
                }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 'bold', color: step.color, marginBottom: '5px' }}>LANGKAH {index + 1}</div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', color: '#1a1a2e' }}>{step.title}</h3>
                  <p style={{ color: '#6c757d', fontSize: '0.95rem', margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
