import React from 'react';
import { Check, Flame, MessageCircle } from 'lucide-react';

const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Cocok untuk yang baru mulai',
    originalPrice: 'Rp 180.000',
    price: 'Rp 110.000',
    unit: '/ bulan',
    features: [
      'Landing Page mobile-friendly',
      'Domain .com 1 tahun',
      'Integrasi tombol WhatsApp',
      'Revisi 2x gratis',
      'Support via WA',
    ],
    cta: 'Mulai Sekarang',
    featured: false,
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'Paling value for money',
    originalPrice: 'Rp 350.000',
    price: 'Rp 199.000',
    unit: '/ bulan',
    badge: 'Terpopuler 🔥',
    features: [
      'Web Operasional multi-halaman',
      'Hosting + domain 1 tahun',
      'Bot WhatsApp auto-reply',
      'Integrasi Google Sheets',
      'Revisi 30 hari gratis',
      'Support prioritas < 2 jam',
    ],
    cta: 'Ambil Paket Ini',
    featured: true,
  },
  {
    id: 'all-in',
    name: 'All-in',
    tagline: 'Mau langsung beres? Ini pilihan kamu',
    originalPrice: 'Rp 600.000',
    price: 'Rp 379.000',
    unit: '/ bulan',
    features: [
      'Semua fitur Growth',
      'Template Digital (5 pcs)',
      'Maintenance 1 bulan gratis',
      'SEO dasar',
      'Laporan bulanan kunjungan',
      'Dedicated support',
    ],
    cta: 'Hubungi Kami',
    featured: false,
  },
];

const Pricing = () => (
  <section id="harga" style={{ backgroundColor: '#fff', padding: '90px 0' }}>
    <div className="container">
      <div className="section-header">
        <span className="section-label">Bundling Pilihan</span>
        <h2 className="section-title">Paket yang Lebih Worth It</h2>
        <p className="section-sub">
          Gabungkan layanan dan hemat lebih banyak. Pilih paket yang paling sesuai kebutuhanmu.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
        gap: '24px',
        alignItems: 'start',
      }}>
        {PLANS.map((plan) => (
          <div key={plan.id} style={{
            borderRadius: '24px',
            padding: plan.featured ? '36px 32px' : '32px',
            background: plan.featured ? '#2c3045' : '#fff',
            border: plan.featured ? '2px solid #3d4255' : '1px solid #e2e0db',
            boxShadow: plan.featured ? '0 24px 60px rgba(44,48,69,0.25)' : '0 4px 16px rgba(0,0,0,0.04)',
            transform: plan.featured ? 'translateY(-12px)' : 'none',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {plan.badge && (
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                background: '#7a3b2e',
                color: '#fff',
                textAlign: 'center',
                padding: '8px',
                fontSize: '0.82rem',
                fontWeight: '700',
                letterSpacing: '0.04em',
              }}>{plan.badge}</div>
            )}

            <div style={{ marginTop: plan.badge ? '28px' : 0 }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: plan.featured ? '#fff' : '#2c3045', marginBottom: '6px' }}>
                {plan.name}
              </h3>
              <p style={{ fontSize: '0.88rem', color: plan.featured ? 'rgba(255,255,255,0.6)' : '#8a8fa8', marginBottom: '24px' }}>
                {plan.tagline}
              </p>

              {/* Price */}
              <div style={{ marginBottom: '28px' }}>
                <div style={{ textDecoration: 'line-through', color: plan.featured ? 'rgba(255,255,255,0.4)' : '#c0bdb6', fontSize: '0.95rem', marginBottom: '4px' }}>
                  {plan.originalPrice}
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                  <span style={{ fontSize: '2.4rem', fontWeight: '800', color: plan.featured ? '#25D366' : '#3d4255', lineHeight: 1 }}>
                    {plan.price}
                  </span>
                  <span style={{ fontSize: '0.9rem', color: plan.featured ? 'rgba(255,255,255,0.5)' : '#8a8fa8' }}>
                    {plan.unit}
                  </span>
                </div>
                <span style={{
                  display: 'inline-block',
                  marginTop: '8px',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  color: plan.featured ? '#25D366' : '#7a3b2e',
                  backgroundColor: plan.featured ? 'rgba(37,211,102,0.15)' : 'rgba(122,59,46,0.08)',
                  padding: '3px 10px',
                  borderRadius: '50px',
                }}>
                  {plan.featured ? 'Hemat ~43%' : 'Hemat ~38%'}
                </span>
              </div>

              {/* Features */}
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                {plan.features.map((f, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <div style={{
                      width: '20px', height: '20px', borderRadius: '50%',
                      backgroundColor: plan.featured ? 'rgba(37,211,102,0.2)' : 'rgba(61,66,85,0.08)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, marginTop: '1px',
                    }}>
                      <Check size={12} color={plan.featured ? '#25D366' : '#3d4255'} strokeWidth={3} />
                    </div>
                    <span style={{ fontSize: '0.92rem', color: plan.featured ? 'rgba(255,255,255,0.85)' : '#5a6175', lineHeight: '1.5' }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/6288987204298"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  width: '100%',
                  padding: '13px',
                  fontSize: '0.95rem',
                  fontWeight: '800',
                  backgroundColor: plan.featured ? '#25D366' : '#3d4255',
                  color: '#fff',
                  boxShadow: plan.featured ? '0 8px 24px rgba(37,211,102,0.35)' : 'none',
                  gap: '8px',
                }}
              >
                <MessageCircle size={16} /> {plan.cta}
              </a>
            </div>
          </div>
        ))}
      </div>

      <p style={{ textAlign: 'center', marginTop: '32px', color: '#8a8fa8', fontSize: '0.875rem' }}>
        Semua paket sudah termasuk konsultasi gratis & garansi revisi 30 hari ✦ Harga belum termasuk domain/hosting jika tidak disebutkan
      </p>
    </div>
  </section>
);

export default Pricing;
