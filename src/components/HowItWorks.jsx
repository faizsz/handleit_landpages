import React from 'react';
import { MessageCircle, FileSignature, Clock, CheckSquare } from 'lucide-react';

const STEPS = [
  {
    icon: <MessageCircle size={26} strokeWidth={1.8} color="#fff" />,
    num: '01',
    title: 'Hubungi via WhatsApp',
    desc: 'Cerita kebutuhanmu via WA. Gratis, santai, tidak ada kewajiban. Kami bantu rekomendasikan layanan yang tepat.',
    color: '#25D366',
    bg: '#1da851',
  },
  {
    icon: <FileSignature size={26} strokeWidth={1.8} color="#fff" />,
    num: '02',
    title: 'Pilih Layanan & Brief',
    desc: 'Isi brief sederhana — ceritakan bisnis kamu. Lalu tanda tangani kontrak digital. Tidak rumit, kami bantu.',
    color: '#3d4255',
    bg: '#2c3045',
  },
  {
    icon: <Clock size={26} strokeWidth={1.8} color="#fff" />,
    num: '03',
    title: 'Pengerjaan 3–7 Hari',
    desc: 'Tim kami kerjakan dengan serius. Kamu dapat update progress via WhatsApp, tidak perlu tanya-tanya terus.',
    color: '#7a3b2e',
    bg: '#9c4d3e',
  },
  {
    icon: <CheckSquare size={26} strokeWidth={1.8} color="#fff" />,
    num: '04',
    title: 'Lihat Dulu, Baru Bayar',
    desc: 'Website/bot jadi & kamu lihat hasilnya. Baru bayar pelunasan. Garansi revisi 30 hari langsung aktif.',
    color: '#1e8a4a',
    bg: '#166b38',
  },
];

const HowItWorks = () => (
  <section id="cara-kerja" style={{ backgroundColor: '#fff', padding: '90px 0' }}>
    <div className="container">
      <div className="section-header">
        <span className="section-label">Alur Kerja</span>
        <h2 className="section-title">4 Langkah — Simpel & Transparan</h2>
        <p className="section-sub">
          Dari konsultasi sampai serah terima, prosesnya jelas dan tidak bikin bingung.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '24px',
        position: 'relative',
      }}>
        {STEPS.map((step, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            {/* Step number + icon */}
            <div style={{ position: 'relative', display: 'inline-block', marginBottom: '20px' }}>
              <div style={{
                width: '72px', height: '72px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${step.color}, ${step.bg})`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto',
                boxShadow: `0 12px 30px ${step.color}30`,
              }}>
                {step.icon}
              </div>
              <div style={{
                position: 'absolute', top: '-6px', right: '-6px',
                width: '24px', height: '24px',
                backgroundColor: '#f5f4f1',
                border: `2px solid ${step.color}`,
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.65rem',
                fontWeight: '800',
                color: step.color,
              }}>{i + 1}</div>
            </div>

            <div style={{
              backgroundColor: '#f5f4f1',
              borderRadius: '16px',
              padding: '22px 20px',
            }}>
              <div style={{ fontSize: '0.75rem', fontWeight: '800', color: step.color, letterSpacing: '0.1em', marginBottom: '8px' }}>
                LANGKAH {step.num}
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#2c3045', marginBottom: '10px' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#5a6175', lineHeight: '1.6', margin: 0 }}>
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
