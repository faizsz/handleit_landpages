import React from 'react';
import { Zap, Wallet, ShieldCheck, HeartHandshake } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Zap size={32} color="#e94560" />,
      title: "Cepat",
      desc: "Pengerjaan 3-7 hari kerja tanpa kompromi kualitas"
    },
    {
      icon: <Wallet size={32} color="#0f3460" />,
      title: "Terjangkau",
      desc: "Mulai Rp 15.000 - harga student-friendly untuk semua kalangan"
    },
    {
      icon: <ShieldCheck size={32} color="#10b981" />,
      title: "Bergaransi",
      desc: "Revisi gratis 30 hari + kontrak tertulis + support responsif"
    },
    {
      icon: <HeartHandshake size={32} color="#f59e0b" />,
      title: "Tanpa Ribet",
      desc: "Cukup beri brief, kami tangani semua. Nggak perlu skill teknis"
    }
  ];

  return (
    <section id="keunggulan" className="section">
      <div className="container">
        <h2 className="section-title">Keunggulan Handle IT</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          {features.map((feature, index) => (
            <div key={index} style={{
              padding: '30px',
              backgroundColor: '#fff',
              borderRadius: '16px',
              border: '1px solid #eaeaea',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }} className="feature-card">
              <div style={{ marginBottom: '20px', display: 'inline-block', padding: '15px', backgroundColor: 'rgba(248, 249, 250, 1)', borderRadius: '12px' }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', color: '#1a1a2e' }}>{feature.title}</h3>
              <p style={{ color: '#6c757d', lineHeight: '1.6', margin: 0 }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
