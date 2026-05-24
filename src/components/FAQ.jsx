import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQS = [
  {
    q: 'Saya tidak paham IT sama sekali, bisa tetap pesan?',
    a: 'Tentu bisa! Kamu tidak perlu paham coding atau IT. Cukup ceritakan bisnismu lewat WhatsApp — apa yang dijual, siapa pembelinya, dan apa yang kamu mau tampilkan. Kami yang urus semua teknisnya dari awal sampai selesai.',
  },
  {
    q: 'Bayar dulu atau setelah website jadi?',
    a: 'Kamu lihat hasilnya dulu, baru bayar pelunasan. Kami hanya minta DP 50% di awal sebagai tanda jadi. Selebihnya dibayar setelah kamu setuju dengan hasilnya. Tidak puas? Kami revisi sampai kamu puas.',
  },
  {
    q: 'Berapa lama website saya jadi?',
    a: '3–7 hari kerja setelah brief disetujui dan DP diterima. Untuk template digital atau bot sederhana bisa lebih cepat, 1–3 hari. Kamu akan dapat update progress via WhatsApp selama pengerjaan.',
  },
  {
    q: 'Harga Rp 35.000 itu sudah termasuk apa saja?',
    a: 'Harga Rp 35.000/bulan untuk Landing Page sudah termasuk: pembuatan halaman, integrasi tombol WhatsApp, desain mobile-friendly, dan hosting di subdomain gratis (.vercel.app). Domain berbayar (.com, .id) dikenakan biaya terpisah mulai Rp 100.000/tahun.',
  },
  {
    q: 'Kalau saya tidak puas, bagaimana?',
    a: 'Kami berikan garansi revisi gratis selama 30 hari setelah serah terima. Jika masih tidak sesuai, kami diskusikan solusinya bersama. Ada kontrak tertulis yang melindungi kedua belah pihak — jadi tidak ada yang dirugikan.',
  },
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" style={{ backgroundColor: '#f5f4f1', padding: '90px 0' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Pertanyaan yang Sering Ditanyakan</h2>
          <p className="section-sub">
            Jawaban jujur untuk keraguan yang paling sering muncul sebelum order.
          </p>
        </div>

        <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {FAQS.map((faq, idx) => (
            <div key={idx} style={{
              backgroundColor: '#fff',
              borderRadius: '14px',
              border: openIdx === idx ? '1.5px solid #3d4255' : '1px solid #e2e0db',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
            }}>
              <button
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  fontWeight: '700',
                  fontSize: '0.97rem',
                  color: openIdx === idx ? '#2c3045' : '#3d4255',
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  fontFamily: 'inherit',
                  gap: '16px',
                }}
              >
                <span>{faq.q}</span>
                <div style={{
                  width: '28px', height: '28px', borderRadius: '50%',
                  backgroundColor: openIdx === idx ? '#3d4255' : '#f5f4f1',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'all 0.3s ease',
                }}>
                  {openIdx === idx
                    ? <ChevronUp size={16} color="#fff" />
                    : <ChevronDown size={16} color="#5a6175" />
                  }
                </div>
              </button>

              {openIdx === idx && (
                <div style={{
                  padding: '0 24px 22px 24px',
                  color: '#5a6175',
                  lineHeight: '1.7',
                  fontSize: '0.93rem',
                  borderTop: '1px solid #f0ede8',
                  paddingTop: '18px',
                  animation: 'fadeInUp 0.25s ease both',
                }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
