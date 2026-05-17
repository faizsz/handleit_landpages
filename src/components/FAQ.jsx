import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      q: "Berapa lama pengerjaan website?",
      a: "3-7 hari kerja setelah DP diterima dan brief disetujui. Untuk template bot bisa lebih cepat (1-3 hari)."
    },
    {
      q: "Apakah ada garansi?",
      a: "Ya! Kami berikan garansi revisi gratis 30 hari setelah serah terima. Ada juga kontrak tertulis untuk melindungi kedua belah pihak."
    },
    {
      q: "Saya nggak paham teknis, bisa?",
      a: "Bisa banget! Kamu cukup ceritakan kebutuhanmu, kami yang tangani semua teknisnya. Support via WhatsApp juga responsif < 2 jam."
    },
    {
      q: "Bisa bayar cicil atau one-time?",
      a: "Untuk website ada opsi subscription (bulanan) dan one-time payment (mulai Rp 599.000). Template bisa langsung beli dan download."
    },
    {
      q: "Domain dan hosting bagaimana?",
      a: "Kami bisa bantu belikan domain & hosting (biaya terpisah) atau kamu bisa pakai domain sendiri. Untuk awal bisa pakai subdomain gratis (.vercel.app/.netlify.app)."
    }
  ];

  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="section bg-light">
      <div className="container">
        <h2 className="section-title">Pertanyaan yang Sering Ditanyakan</h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqs.map((faq, idx) => (
            <div key={idx} style={{ 
              marginBottom: '15px', 
              backgroundColor: '#fff',
              borderRadius: '12px',
              border: openIdx === idx ? '1px solid #e94560' : '1px solid #eaeaea',
              overflow: 'hidden',
              transition: 'all 0.3s ease'
            }}>
              <div 
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                style={{ 
                  padding: '20px', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  cursor: 'pointer',
                  fontWeight: '600',
                  color: openIdx === idx ? '#e94560' : '#1a1a2e'
                }}
              >
                <span>{faq.q}</span>
                {openIdx === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} color="#6c757d" />}
              </div>
              
              {openIdx === idx && (
                <div style={{ 
                  padding: '0 20px 20px 20px', 
                  color: '#6c757d',
                  lineHeight: '1.6',
                  borderTop: '1px solid #eaeaea',
                  paddingTop: '20px'
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
