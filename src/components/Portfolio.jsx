import React from 'react';

const Portfolio = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Project yang Sudah Kami Kerjakan</h2>
        
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px auto' }}>
          <p style={{ fontSize: '1.1rem', color: '#6c757d' }}>
            Portofolio sedang dalam pengerjaan. Jadilah client pertama kami dan dapatkan diskon spesial!
          </p>
        </div>

        <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
          <div style={{
            position: 'absolute',
            top: 20,
            left: 20,
            backgroundColor: 'rgba(26, 26, 46, 0.8)',
            backdropFilter: 'blur(10px)',
            color: '#fff',
            padding: '8px 16px',
            borderRadius: '50px',
            fontWeight: '600',
            fontSize: '0.9rem',
            zIndex: 2
          }}>
            Sample Design
          </div>
          <img 
            src="/portfolio-mockup.png" 
            alt="Sample Portfolio Mockups" 
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
