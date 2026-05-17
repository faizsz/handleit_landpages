import React from 'react';

const Testimonials = () => {
  return (
    <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="section-title">Apa Kata Mereka?</h2>
        
        <div style={{ 
          backgroundColor: '#fff',
          padding: '60px 30px',
          borderRadius: '24px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          maxWidth: '700px',
          margin: '0 auto',
          border: '1px dashed #ced4da'
        }}>
          <div style={{ fontSize: '4rem', color: '#eaeaea', lineHeight: '1', marginBottom: '20px' }}>"</div>
          <p style={{ fontSize: '1.25rem', color: '#6c757d', fontStyle: 'italic', marginBottom: '30px' }}>
            Belum ada testimonial. Jadilah yang pertama dan dapatkan benefit early adopter!
          </p>
          <a href="https://wa.me/6288987204298" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            Daftar Early Adopter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
