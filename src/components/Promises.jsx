import React from 'react';
import { Tag, Clock, MessageCircle } from 'lucide-react';

const ITEMS = [
  {
    num: '01',
    icon: <Tag size={15} strokeWidth={2} color="#f5c4a0" />,
    title: 'Harga Transparan',
    body: 'Tidak ada biaya tersembunyi. Yang kamu lihat = yang kamu bayar. Titik.',
    badge: null,
  },
  {
    num: '02',
    icon: <Clock size={15} strokeWidth={2} color="#f5c4a0" />,
    title: 'Bayar Setelah Jadi',
    body: 'Kami kerja dulu, kamu bayar setelah puas dengan hasilnya.',
    badge: 'Janji #1 Kami',
  },
  {
    num: '03',
    icon: <MessageCircle size={15} strokeWidth={2} color="#f5c4a0" />,
    title: 'Gak Harus Ngerti IT',
    body: 'Cerita aja bisnis kamu. Kami yang terjemahin ke digital.',
    badge: null,
  },
];

/* Scattered dots — bottom left */
const DOTS = [
  { x: 28, y: 78 }, { x: 52, y: 88 }, { x: 14, y: 92 },
  { x: 40, y: 96 }, { x: 68, y: 84 }, { x: 22, y: 70 }, { x: 56, y: 73 },
];

const Promises = () => (
  <section style={{
    backgroundColor: '#3d4255',
    padding: '96px 0',
    position: 'relative',
    overflow: 'hidden',
  }}>

    {/* ─── Decorative: large outline circle top-right ─── */}
    <div style={{
      position: 'absolute',
      top: '-80px', right: '-80px',
      width: '280px', height: '280px',
      borderRadius: '50%',
      border: '1px solid rgba(255,255,255,0.05)',
      pointerEvents: 'none',
    }} />
    {/* ─── Smaller overlapping circle ─── */}
    <div style={{
      position: 'absolute',
      top: '40px', right: '60px',
      width: '180px', height: '180px',
      borderRadius: '50%',
      border: '1px solid rgba(255,255,255,0.04)',
      pointerEvents: 'none',
    }} />

    {/* ─── Scattered dots bottom-left ─── */}
    <div style={{ position: 'absolute', bottom: 0, left: 0, width: '120px', height: '120px', pointerEvents: 'none' }}>
      {DOTS.map((d, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: `${d.x}px`, top: `${d.y}px`,
          width: '4px', height: '4px',
          borderRadius: '50%',
          backgroundColor: 'rgba(245,196,160,0.3)',
        }} />
      ))}
    </div>

    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '40fr 60fr',
        gap: '80px',
        alignItems: 'center',
      }} className="promises-editorial-grid">

        {/* ══════════════════════
            LEFT — Editorial headline
        ══════════════════════ */}
        <div>
          {/* Eyebrow */}
          <div style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: '500',
            fontSize: '13px',
            color: '#f5c4a0',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '24px',
          }}>
            Kenapa Percaya Kami?
          </div>

          {/* Main headline */}
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: '800',
            fontSize: 'clamp(38px, 4.5vw, 52px)',
            color: '#ffffff',
            lineHeight: '1.1',
            letterSpacing: '-0.03em',
            marginBottom: '0',
          }}>
            Kami kerja<br />
            dulu. Uang<br />
            {/* "Uang belakangan" with wavy underline */}
            <span style={{ position: 'relative', display: 'inline-block' }}>
              belakangan.
              {/* Squiggly SVG underline */}
              <svg
                viewBox="0 0 220 10"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  position: 'absolute',
                  bottom: '-6px',
                  left: '0',
                  width: '100%',
                  height: '10px',
                  overflow: 'visible',
                }}
                preserveAspectRatio="none"
              >
                <path
                  d="M0,5 C18,1 36,9 54,5 C72,1 90,9 108,5 C126,1 144,9 162,5 C180,1 198,9 216,5"
                  stroke="#7a3b2e"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          {/* Supporting text */}
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: '400',
            fontSize: '16px',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: '1.7',
            marginTop: '28px',
            maxWidth: '320px',
          }}>
            Tidak ada DP. Tidak ada tipu-tipu.
            Lihat hasilnya dulu, baru bayar.
          </p>
        </div>

        {/* ══════════════════════
            RIGHT — 3 stacked items
        ══════════════════════ */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {ITEMS.map((item, i) => (
            <div key={i}>
              <div style={{
                display: 'flex',
                gap: '24px',
                alignItems: 'flex-start',
                padding: '32px 0',
                position: 'relative',
              }}>
                {/* Faint large number — decorative, behind content */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '-8px',
                  transform: 'translateY(-50%)',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: '800',
                  fontSize: '48px',
                  lineHeight: '1',
                  color: 'rgba(255,255,255,0.06)',
                  userSelect: 'none',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}>
                  {item.num}
                </div>

                {/* Content — above the faint number */}
                <div style={{ position: 'relative', zIndex: 1, paddingLeft: '48px' }}>
                  {/* Icon + title row */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '8px',
                    flexWrap: 'wrap',
                  }}>
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '8px',
                    }}>
                      {item.icon}
                      <span style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: '700',
                        fontSize: '18px',
                        color: '#ffffff',
                      }}>
                        {item.title}
                      </span>
                    </div>

                    {/* Badge — only on item 2 */}
                    {item.badge && (
                      <span style={{
                        backgroundColor: 'rgba(122,59,46,0.3)',
                        color: '#f5c4a0',
                        borderRadius: '99px',
                        padding: '4px 12px',
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: '600',
                        fontSize: '12px',
                        letterSpacing: '0.02em',
                        flexShrink: 0,
                      }}>
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Body */}
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: '400',
                    fontSize: '15px',
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: '1.7',
                    margin: 0,
                  }}>
                    {item.body}
                  </p>
                </div>
              </div>

              {/* Separator — between items only */}
              {i < ITEMS.length - 1 && (
                <div style={{
                  height: '1px',
                  backgroundColor: 'rgba(255,255,255,0.12)',
                }} />
              )}
            </div>
          ))}
        </div>

      </div>
    </div>

    <style>{`
      @media (max-width: 768px) {
        .promises-editorial-grid {
          grid-template-columns: 1fr !important;
          gap: 48px !important;
        }
      }
    `}</style>
  </section>
);

export default Promises;
