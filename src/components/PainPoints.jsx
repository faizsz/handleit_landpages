import React from 'react';
import { DollarSign, Code, ShieldAlert } from 'lucide-react';

const PainPoints = () => {
  const painPoints = [
    {
      icon: <DollarSign size={32} color="#e94560" />,
      title: "Biaya Tinggi",
      desc: "Jasa web tradisional Rp 3-15 juta terlalu mahal untuk mahasiswa & UMKM",
      bgColor: "rgba(233, 69, 96, 0.1)"
    },
    {
      icon: <Code size={32} color="#0f3460" />,
      title: "Keterbatasan Teknis",
      desc: "Banyak yang nggak punya skill coding tapi butuh solusi digital",
      bgColor: "rgba(15, 52, 96, 0.1)"
    },
    {
      icon: <ShieldAlert size={32} color="#f39c12" />,
      title: "Minim Kepercayaan",
      desc: "Freelancer informal sering tanpa garansi, risiko tinggi",
      bgColor: "rgba(243, 156, 18, 0.1)"
    }
  ];

  return (
    <section className="section bg-light">
      <div className="container">
        <h2 className="section-title">Mengapa Handle IT?</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '50px' }}>
          {painPoints.map((point, index) => (
            <div key={index} className="card" style={{ textAlign: 'center', padding: '40px 30px' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                backgroundColor: point.bgColor, 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 20px auto'
              }}>
                {point.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#1a1a2e' }}>{point.title}</h3>
              <p style={{ color: '#6c757d', fontSize: '1rem', lineHeight: '1.6' }}>{point.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', padding: '30px', backgroundColor: '#1a1a2e', borderRadius: '16px', color: '#fff' }}>
          <p style={{ fontSize: '1.25rem', fontWeight: '500', margin: 0 }}>
            Handle IT hadir dengan solusi terjangkau, mudah, dan bergaransi tertulis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
