import React from 'react';
import { Globe, Bot, FileText, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: "web",
      icon: <Globe size={40} color="#fff" />,
      title: "Web Crafter",
      subtitle: "Pembuatan Website",
      desc: "Website mobile-first untuk event, katalog produk, atau portofolio. Integrasi WhatsApp & Google Maps siap pakai.",
      gradient: "linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)",
      pricing: [
        { name: "Starter", price: "Rp 79.000/bulan", detail: "Landing page + WA button" },
        { name: "Pro", price: "Rp 199.000/bulan", detail: "Katalog + SEO + CMS" },
        { name: "One-time", price: "Mulai Rp 599.000", detail: "Tanpa langganan" }
      ],
      ctaText: "Pilih Paket"
    },
    {
      id: "bot",
      icon: <Bot size={40} color="#fff" />,
      title: "Automation Hub",
      subtitle: "WhatsApp Bot & Automasi",
      desc: "Bot untuk auto-reply FAQ, terima order otomatis, survei terintegrasi Google Sheets. Cocok untuk skripsi & operasional UMKM.",
      gradient: "linear-gradient(135deg, #e94560 0%, #d13d56 100%)",
      pricing: [
        { name: "Basic", price: "Rp 49.000/bulan", detail: "Template bot + Sheets" },
        { name: "Pro", price: "Rp 99.000/bulan", detail: "Custom logic + dashboard" }
      ],
      ctaText: "Tanya Bot",
      featured: true
    },
    {
      id: "template",
      icon: <FileText size={40} color="#fff" />,
      title: "Template Shop",
      subtitle: "Template Digital Siap Pakai",
      desc: "Template makalah, CV, undangan digital, sertifikat, invoice. Format Canva/Google Docs/Figma dengan panduan.",
      gradient: "linear-gradient(135deg, #0f3460 0%, #1a1a2e 100%)",
      pricing: [
        { name: "Basic", price: "Rp 15.000/template", detail: "Download instan" },
        { name: "Premium", price: "Rp 35.000", detail: "Bundle + tutorial + update" }
      ],
      ctaText: "Belanja Template"
    }
  ];

  return (
    <section id="layanan" className="section" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <h2 className="section-title">3 Layanan Utama Kami</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {services.map((service) => (
            <div key={service.id} style={{
              background: '#fff',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: service.featured ? '0 20px 40px rgba(233,69,96,0.15)' : '0 10px 30px rgba(0,0,0,0.05)',
              transform: service.featured ? 'translateY(-10px)' : 'none',
              border: service.featured ? '2px solid #e94560' : '1px solid #eaeaea',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column'
            }} className="service-card">
              
              <div style={{ 
                padding: '40px 30px', 
                background: service.gradient,
                color: '#fff',
                textAlign: 'center',
                position: 'relative'
              }}>
                {service.featured && (
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    background: '#fff',
                    color: '#e94560',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 'bold'
                  }}>POPULAR</div>
                )}
                <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>{service.icon}</div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '5px' }}>{service.title}</h3>
                <p style={{ fontSize: '1rem', opacity: 0.9, margin: 0 }}>{service.subtitle}</p>
              </div>

              <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ color: '#6c757d', marginBottom: '25px', lineHeight: '1.6' }}>{service.desc}</p>
                
                <div style={{ marginBottom: '30px', flex: 1 }}>
                  <h4 style={{ fontSize: '1rem', color: '#1a1a2e', marginBottom: '15px', fontWeight: '700' }}>Pricing:</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {service.pricing.map((price, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}>
                        <CheckCircle size={18} color="#e94560" style={{ marginTop: '3px', flexShrink: 0 }} />
                        <div>
                          <span style={{ fontWeight: '600', color: '#1a1a2e' }}>{price.name}:</span> <span style={{ color: '#6c757d' }}>{price.price}</span>
                          <div style={{ fontSize: '0.85rem', color: '#a0a0b8' }}>{price.detail}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <a href="https://wa.me/6288987204298" target="_blank" rel="noopener noreferrer" className={`btn ${service.featured ? 'btn-primary' : 'btn-outline'}`} style={{ width: '100%', display: 'block', textAlign: 'center' }}>
                  {service.ctaText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
