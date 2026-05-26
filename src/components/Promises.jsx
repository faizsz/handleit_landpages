import React, { useEffect, useRef } from 'react';
import { Tag, Clock, MessageCircle } from 'lucide-react';

const ITEMS = [
  {
    num: '01',
    icon: <Tag size={14} strokeWidth={2.5} color="#f5c4a0" />,
    title: 'Harga Transparan',
    body: 'Tidak ada biaya tersembunyi. Yang kamu lihat = yang kamu bayar. Titik.',
    badge: null,
  },
  {
    num: '02',
    icon: <Clock size={14} strokeWidth={2.5} color="#f5c4a0" />,
    title: 'Bayar Setelah Jadi',
    body: 'Kami kerja dulu, kamu bayar setelah puas dengan hasilnya.',
    badge: 'Janji #1 Kami',
  },
  {
    num: '03',
    icon: <MessageCircle size={14} strokeWidth={2.5} color="#f5c4a0" />,
    title: 'Gak Harus Ngerti IT',
    body: 'Cerita aja bisnis kamu. Kami yang terjemahin ke digital.',
    badge: null,
  },
];

const DOTS = [
  { x: 20, y: 160 }, { x: 44, y: 178 }, { x: 68, y: 162 },
  { x: 32, y: 196 }, { x: 56, y: 210 }, { x: 12, y: 210 },
  { x: 80, y: 192 }, { x: 44, y: 228 }, { x: 24, y: 240 },
];

const Promises = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-animate]').forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = el.dataset.animateTo || 'translateY(0)';
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 0% 100%, rgba(122,59,46,0.22) 0%, transparent 60%),
          radial-gradient(ellipse 60% 50% at 100% 0%, rgba(61,66,85,0.6) 0%, transparent 55%),
          linear-gradient(135deg, #1e2235 0%, #2e3145 45%, #2a2d42 100%)
        `,
        padding: '120px 0 112px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Noise texture overlay ── */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
        opacity: 0.4,
        pointerEvents: 'none',
      }} />

      {/* ── Large decorative circle top-right ── */}
      <div style={{
        position: 'absolute', top: '-100px', right: '-100px',
        width: '380px', height: '380px', borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.05)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '20px', right: '60px',
        width: '220px', height: '220px', borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.04)',
        pointerEvents: 'none',
      }} />
      {/* ── Terracotta accent glow ── */}
      <div style={{
        position: 'absolute', bottom: '-60px', left: '-60px',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(122,59,46,0.25) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* ── Scattered dots ── */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '120px', height: '260px', pointerEvents: 'none' }}>
        {DOTS.map((d, i) => (
          <div key={i} style={{
            position: 'absolute',
            left: `${d.x}px`, top: `${d.y}px`,
            width: i % 3 === 0 ? '5px' : '3px',
            height: i % 3 === 0 ? '5px' : '3px',
            borderRadius: '50%',
            backgroundColor: `rgba(245,196,160,${0.15 + (i % 3) * 0.08})`,
          }} />
        ))}
      </div>

      {/* ── Top edge separator ── */}
      <div style={{
        position: 'absolute', top: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: '80px', height: '3px',
        background: 'linear-gradient(90deg, transparent, rgba(245,196,160,0.4), transparent)',
        borderRadius: '99px',
      }} />

      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: '0 40px', position: 'relative', zIndex: 1,
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '42fr 58fr',
          gap: '80px',
          alignItems: 'center',
        }}
          className="promises-grid"
        >

          {/* ════════════════════════
              LEFT — Editorial headline
          ════════════════════════ */}
          <div
            data-animate
            data-animate-to="translateY(0)"
            style={{
              opacity: 0,
              transform: 'translateY(28px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            {/* Eyebrow */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '32px',
            }}>
              <div style={{
                width: '20px', height: '1px',
                backgroundColor: '#f5c4a0',
                opacity: 0.6,
              }} />
              <span style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: '600',
                fontSize: '11px',
                color: '#f5c4a0',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                opacity: 0.85,
              }}>
                Kenapa Percaya Kami?
              </span>
            </div>

            {/* Headline */}
            <h2 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: '800',
              fontSize: 'clamp(40px, 4.8vw, 56px)',
              color: '#ffffff',
              lineHeight: '1.08',
              letterSpacing: '-0.03em',
              margin: 0,
            }}>
              Kami kerja<br />
              dulu. Uang<br />
              <span style={{ position: 'relative', display: 'inline-block', paddingBottom: '6px' }}>
                belakangan.
                <svg
                  viewBox="0 0 240 14"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    position: 'absolute',
                    bottom: '-2px', left: '0',
                    width: '100%', height: '14px',
                    overflow: 'visible',
                  }}
                  preserveAspectRatio="none"
                >
                  {/* Double wavy line for more presence */}
                  <path
                    d="M2,9 C22,3 42,13 62,7 C82,1 102,13 122,7 C142,1 162,13 182,7 C202,1 222,11 238,7"
                    stroke="#7a3b2e"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.9"
                  />
                  <path
                    d="M2,9 C22,3 42,13 62,7 C82,1 102,13 122,7 C142,1 162,13 182,7 C202,1 222,11 238,7"
                    stroke="rgba(245,196,160,0.3)"
                    strokeWidth="6"
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
              color: 'rgba(255,255,255,0.55)',
              lineHeight: '1.75',
              marginTop: '32px',
              maxWidth: '300px',
            }}>
              Tidak ada DP. Tidak ada tipu-tipu.<br />
              Lihat hasilnya dulu, baru bayar.
            </p>

            {/* Decorative stat pill */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              marginTop: '40px',
              padding: '12px 20px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '99px',
            }}>
              <div style={{
                width: '8px', height: '8px', borderRadius: '50%',
                backgroundColor: '#4ade80',
                boxShadow: '0 0 8px rgba(74,222,128,0.6)',
              }} />
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '13px',
                fontWeight: '500',
                color: 'rgba(255,255,255,0.65)',
              }}>
                100% klien bayar setelah puas
              </span>
            </div>
          </div>

          {/* ════════════════════════
              RIGHT — 3 stacked items
          ════════════════════════ */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {ITEMS.map((item, i) => (
              <div
                key={i}
                data-animate
                data-animate-to="translateX(0)"
                style={{
                  opacity: 0,
                  transform: 'translateX(24px)',
                  transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
                }}
              >
                <div style={{
                  display: 'flex',
                  gap: '0',
                  alignItems: 'flex-start',
                  padding: '36px 0',
                  position: 'relative',
                  cursor: 'default',
                }}
                  className="promise-item"
                >
                  {/* Faint large number */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '-4px',
                    transform: 'translateY(-50%)',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: '800',
                    fontSize: '44px',
                    lineHeight: '1',
                    color: 'rgba(255,255,255,0.045)',
                    userSelect: 'none',
                    pointerEvents: 'none',
                    letterSpacing: '-0.02em',
                  }}>
                    {item.num}
                  </div>

                  {/* Content */}
                  <div style={{ paddingLeft: '52px', width: '100%' }}>
                    {/* Icon + title + badge */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '10px',
                      flexWrap: 'wrap',
                    }}>
                      {/* Icon pill */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '28px', height: '28px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(245,196,160,0.1)',
                        border: '1px solid rgba(245,196,160,0.15)',
                        flexShrink: 0,
                      }}>
                        {item.icon}
                      </div>

                      <span style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: '700',
                        fontSize: '17px',
                        color: '#ffffff',
                        letterSpacing: '-0.01em',
                      }}>
                        {item.title}
                      </span>

                      {item.badge && (
                        <span style={{
                          backgroundColor: 'rgba(122,59,46,0.35)',
                          color: '#f5c4a0',
                          borderRadius: '99px',
                          padding: '3px 12px',
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: '600',
                          fontSize: '11px',
                          letterSpacing: '0.03em',
                          border: '1px solid rgba(245,196,160,0.2)',
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
                      color: 'rgba(255,255,255,0.52)',
                      lineHeight: '1.75',
                      margin: 0,
                    }}>
                      {item.body}
                    </p>
                  </div>
                </div>

                {/* Separator */}
                {i < ITEMS.length - 1 && (
                  <div style={{
                    height: '1px',
                    background: 'linear-gradient(90deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.04) 100%)',
                  }} />
                )}
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        .promise-item:hover > div {
          opacity: 1 !important;
        }
        .promise-item:hover [style*="opacity: 0.045"] {
          color: rgba(255,255,255,0.08) !important;
        }
        @media (max-width: 768px) {
          .promises-grid {
            grid-template-columns: 1fr !important;
            gap: 52px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Promises;