import React from 'react';
import { Sparkle, Tag, MessageCircle, Clock, Zap, FileText } from 'lucide-react';
import './FloatingCards.css';

// Custom SVG speech bubble tail component to ensure perfect pixel-perfect pointing down/up
const SpeechBubbleTail = ({ direction = 'down', className = '' }) => {
  if (direction === 'down') {
    return (
      <svg
        className={`bubble-tail ${className}`}
        viewBox="0 0 16 10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 10L0 0H16L8 10Z" />
      </svg>
    );
  }
  // Up direction
  return (
    <svg
      className={`bubble-tail ${className}`}
      viewBox="0 0 16 10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 0L16 10H0L8 0Z" />
    </svg>
  );
};

const FloatingCards = () => {
  return (
    <div className="floating-cards-container">
      {/* ✦ Sparkle Stars Scattered and blinking softly */}
      <div className="sparkle-star sparkle-1">
        <Sparkle size={20} fill="#7A3B2E" strokeWidth={1} />
      </div>
      <div className="sparkle-star sparkle-2">
        <Sparkle size={16} fill="#7A3B2E" strokeWidth={1} />
      </div>
      <div className="sparkle-star sparkle-3">
        <Sparkle size={24} fill="#7A3B2E" strokeWidth={1} />
      </div>
      <div className="sparkle-star sparkle-4">
        <Sparkle size={18} fill="#7A3B2E" strokeWidth={1} />
      </div>

      {/* ══════════════════════════════════════════
          CARD 1: WEBSITE (Top-Left, -5deg)
      ══════════════════════════════════════════ */}
      <div className="service-card-wrapper card-top-left">
        {/* Floating Speech Bubble Pill */}
        <div className="speech-bubble-pill bubble-top-left">
          <span style={{ display: 'inline-flex', padding: '3px', backgroundColor: 'rgba(122,59,46,0.1)', borderRadius: '50%' }}>
            <Tag size={12} color="#7A3B2E" strokeWidth={2.5} />
          </span>
          Mulai Rp35.000
          <SpeechBubbleTail direction="down" className="bubble-tail-down" />
        </div>

        {/* Card 3D Stack */}
        <div className="card-deck">
          <div className="deck-layer-bottom" />
          <div className="deck-layer-middle" />
          <div className="deck-layer-top">
            {/* Top half: Gradient illustration */}
            <div className="card-gradient-area" style={{ background: 'linear-gradient(135deg, #a5b4fc, #818cf8, #6366f1)' }}>
              {/* Browser Mockup */}
              <div className="browser-mockup">
                <div className="browser-header">
                  <div className="browser-dot browser-dot-red" />
                  <div className="browser-dot browser-dot-yellow" />
                  <div className="browser-dot browser-dot-green" />
                  <div className="browser-address" />
                </div>
                <div className="browser-content">
                  <div style={{ width: '40%', height: '6px', backgroundColor: '#e2e8f0', borderRadius: '3px' }} />
                  <div style={{ width: '70%', height: '4px', backgroundColor: '#e2e8f0', borderRadius: '2px' }} />
                  <div style={{ width: '55%', height: '4px', backgroundColor: '#e2e8f0', borderRadius: '2px' }} />
                  {/* Modern abstract periwinkle waves */}
                  <svg className="browser-wave" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,50 Q25,30 50,60 T100,40 L100,100 L0,100 Z" fill="#4f46e5" opacity="0.4" />
                    <path d="M0,60 Q30,80 60,50 T100,70 L100,100 L0,100 Z" fill="#818cf8" opacity="0.3" />
                  </svg>
                  {/* Miniature dashboard mockup element */}
                  <div style={{
                    position: 'absolute',
                    top: '20%',
                    right: '10%',
                    width: '32px',
                    height: '24px',
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(99, 102, 241, 0.15)',
                    borderRadius: '4px',
                    padding: '3px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.05)'
                  }}>
                    <div style={{ width: '40%', height: '3px', backgroundColor: '#818cf8', borderRadius: '1px' }} />
                    <div style={{ width: '100%', height: '2px', backgroundColor: '#e2e8f0', borderRadius: '1px' }} />
                    <div style={{ width: '80%', height: '2px', backgroundColor: '#e2e8f0', borderRadius: '1px' }} />
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom half: Title */}
            <div className="card-title-area">
              <h3 className="card-title-text">Website &amp; Landing Page</h3>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          CARD 2: BOT (Top-Right, +6deg)
      ══════════════════════════════════════════ */}
      <div className="service-card-wrapper card-top-right">
        {/* Floating Speech Bubble Pill */}
        <div className="speech-bubble-pill bubble-top-right">
          <span style={{ display: 'inline-flex', padding: '3px', backgroundColor: 'rgba(37,211,102,0.1)', borderRadius: '50%' }}>
            <MessageCircle size={12} color="#15803d" strokeWidth={2.5} />
          </span>
          Auto-reply 24 jam
          <SpeechBubbleTail direction="down" className="bubble-tail-down-right" />
        </div>

        {/* Card 3D Stack */}
        <div className="card-deck">
          <div className="deck-layer-bottom" />
          <div className="deck-layer-middle" />
          <div className="deck-layer-top">
            {/* Top half: Gradient illustration */}
            <div className="card-gradient-area" style={{ background: 'linear-gradient(135deg, #a7f3d0, #6ee7b7, #10b981)' }}>
              {/* Phone Mockup */}
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="phone-header" />
                  <div className="chat-bubble chat-bubble-received">
                    Halo, order kak!
                  </div>
                  <div className="chat-bubble chat-bubble-sent">
                    Halo! Siap, silakan isi form order berikut ya...
                  </div>
                  <div style={{
                    width: '10px',
                    height: '10px',
                    backgroundColor: '#10b981',
                    borderRadius: '50%',
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    <Zap size={6} color="#ffffff" fill="#ffffff" />
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom half: Title */}
            <div className="card-title-area">
              <h3 className="card-title-text">Bot WhatsApp</h3>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          CARD 3: SISTEM OTOMASI (Bottom-Left, +4deg)
      ══════════════════════════════════════════ */}
      <div className="service-card-wrapper card-bottom-left">
        {/* Floating Speech Bubble Pill */}
        <div className="speech-bubble-pill bubble-bottom-left">
          <span style={{ display: 'inline-flex', padding: '3px', backgroundColor: 'rgba(59,130,246,0.1)', borderRadius: '50%' }}>
            <Zap size={12} color="#1d4ed8" strokeWidth={2.5} />
          </span>
          Hemat waktu & tenaga
          <SpeechBubbleTail direction="up" className="bubble-tail-up" />
        </div>

        {/* Card 3D Stack */}
        <div className="card-deck">
          <div className="deck-layer-bottom" />
          <div className="deck-layer-middle" />
          <div className="deck-layer-top">
            {/* Top half: Gradient illustration */}
            <div className="card-gradient-area" style={{ background: 'linear-gradient(135deg, #ffedd5, #fed7aa, #f97316)' }}>
              {/* Gear Illustration */}
              <div style={{ position: 'relative', width: '90px', height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 100 100"
                  style={{
                    filter: 'drop-shadow(0 8px 16px rgba(249, 115, 22, 0.3))',
                    animation: 'spin 12s linear infinite'
                  }}
                >
                  <defs>
                    <linearGradient id="gearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#fdba74" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#gearGrad)"
                    d="M95,43.5 L84.4,43.5 C83.6,39.6 82.2,35.9 80.2,32.5 L87.7,25 C89,23.7 89,21.5 87.7,20.2 L79.8,12.3 C78.5,11 76.3,11 75,12.3 L67.5,19.8 C64.1,17.8 60.4,16.4 56.5,15.6 L56.5,5 C56.5,3.1 54.9,1.5 53,1.5 L41.8,1.5 C39.9,1.5 38.3,3.1 38.3,5 L38.3,15.6 C34.4,16.4 30.7,17.8 27.3,19.8 L19.8,12.3 C18.5,11 16.3,11 15,12.3 L7.1,20.2 C5.8,21.5 5.8,23.7 7.1,25 L14.6,32.5 C12.6,35.9 11.2,39.6 10.4,43.5 L0,43.5 C-1.9,43.5 -3.5,45.1 -3.5,47 L-3.5,58.2 C-3.5,60.1 -1.9,61.7 0,61.7 L10.4,61.7 C11.2,65.6 12.6,69.3 14.6,72.7 L7.1,80.2 C5.8,81.5 5.8,83.7 7.1,85 L15,92.9 C16.3,94.2 18.5,94.2 19.8,92.9 L27.3,85.4 C30.7,87.4 34.4,88.8 38.3,89.6 L38.3,100 C38.3,101.9 39.9,103.5 41.8,103.5 L53,103.5 C54.9,103.5 56.5,101.9 56.5,100 L56.5,89.6 C60.4,88.8 64.1,87.4 67.5,85.4 L75,92.9 C76.3,94.2 78.5,94.2 79.8,92.9 L87.7,85 C89,83.7 89,81.5 87.7,80.2 L80.2,72.7 C82.2,69.3 83.6,65.6 84.4,61.7 L95,61.7 C96.9,61.7 98.5,60.1 98.5,58.2 L98.5,47 C98.5,45.1 96.9,43.5 95,43.5 Z M47.4,67.8 C36.2,67.8 27.1,58.7 27.1,47.5 C27.1,36.3 36.2,27.2 47.4,27.2 C58.6,27.2 67.7,36.3 67.7,47.5 C67.7,58.7 58.6,67.8 47.4,67.8 Z"
                  />
                </svg>
                {/* Secondary gear */}
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 100 100"
                  style={{
                    position: 'absolute',
                    bottom: '5px',
                    right: '5px',
                    filter: 'drop-shadow(0 4px 8px rgba(249, 115, 22, 0.2))',
                    animation: 'spin-reverse 8s linear infinite'
                  }}
                >
                  <path
                    fill="#ffffff"
                    opacity="0.85"
                    d="M95,43.5 L84.4,43.5 C83.6,39.6 82.2,35.9 80.2,32.5 L87.7,25 C89,23.7 89,21.5 87.7,20.2 L79.8,12.3 C78.5,11 76.3,11 75,12.3 L67.5,19.8 C64.1,17.8 60.4,16.4 56.5,15.6 L56.5,5 C56.5,3.1 54.9,1.5 53,1.5 L41.8,1.5 C39.9,1.5 38.3,3.1 38.3,5 L38.3,15.6 C34.4,16.4 30.7,17.8 27.3,19.8 L19.8,12.3 C18.5,11 16.3,11 15,12.3 L7.1,20.2 C5.8,21.5 5.8,23.7 7.1,25 L14.6,32.5 C12.6,35.9 11.2,39.6 10.4,43.5 L0,43.5 C-1.9,43.5 -3.5,45.1 -3.5,47 L-3.5,58.2 C-3.5,60.1 -1.9,61.7 0,61.7 L10.4,61.7 C11.2,65.6 12.6,69.3 14.6,72.7 L7.1,80.2 C5.8,81.5 5.8,83.7 7.1,85 L15,92.9 C16.3,94.2 18.5,94.2 19.8,92.9 L27.3,85.4 C30.7,87.4 34.4,88.8 38.3,89.6 L38.3,100 C38.3,101.9 39.9,103.5 41.8,103.5 L53,103.5 C54.9,103.5 56.5,101.9 56.5,100 L56.5,89.6 C60.4,89.6 64.1,87.4 67.5,85.4 L75,92.9 C76.3,94.2 78.5,94.2 79.8,92.9 L87.7,85 C89,83.7 89,81.5 87.7,80.2 L80.2,72.7 C82.2,69.3 83.6,65.6 84.4,61.7 L95,61.7 C96.9,61.7 98.5,60.1 98.5,58.2 L98.5,47 C98.5,45.1 96.9,43.5 95,43.5 Z M47.4,67.8 C36.2,67.8 27.1,58.7 27.1,47.5 C27.1,36.3 36.2,27.2 47.4,27.2 C58.6,27.2 67.7,36.3 67.7,47.5 C67.7,58.7 58.6,67.8 47.4,67.8 Z"
                  />
                </svg>
              </div>
            </div>
            {/* Bottom half: Title */}
            <div className="card-title-area">
              <h3 className="card-title-text">Sistem Otomasi</h3>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          CARD 4: TEMPLATE DIGITAL (Bottom-Right, -5deg)
      ══════════════════════════════════════════ */}
      <div className="service-card-wrapper card-bottom-right">
        {/* Floating Speech Bubble Pill */}
        <div className="speech-bubble-pill bubble-bottom-right">
          <span style={{ display: 'inline-flex', padding: '3px', backgroundColor: 'rgba(147,51,234,0.1)', borderRadius: '50%' }}>
            <Clock size={12} color="#7e22ce" strokeWidth={2.5} />
          </span>
          Siap pakai
          <SpeechBubbleTail direction="up" className="bubble-tail-up-right" />
        </div>

        {/* Card 3D Stack */}
        <div className="card-deck">
          <div className="deck-layer-bottom" />
          <div className="deck-layer-middle" />
          <div className="deck-layer-top">
            {/* Top half: Gradient illustration */}
            <div className="card-gradient-area" style={{ background: 'linear-gradient(135deg, #f3e8ff, #d8b4fe, #a855f7)' }}>
              {/* Stacked Documents mockup */}
              <div style={{ position: 'relative', width: '90px', height: '100px' }}>
                {/* Back document */}
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  left: '10px',
                  width: '55px',
                  height: '70px',
                  backgroundColor: '#3d4255',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '6px',
                  padding: '6px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  transform: 'rotate(-8deg)',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
                }}>
                  <div style={{ width: '40%', height: '3px', backgroundColor: '#a855f7', borderRadius: '1px' }} />
                  <div style={{ width: '80%', height: '2px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '1px' }} />
                  <div style={{ width: '60%', height: '2px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '1px' }} />
                </div>
                {/* Front document */}
                <div style={{
                  position: 'absolute',
                  top: '25px',
                  left: '25px',
                  width: '55px',
                  height: '70px',
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(168,85,247,0.2)',
                  borderRadius: '6px',
                  padding: '6px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  transform: 'rotate(6deg)',
                  boxShadow: '4px 8px 20px rgba(0,0,0,0.1)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '2px' }}>
                    <FileText size={8} color="#a855f7" />
                    <div style={{ width: '50%', height: '3px', backgroundColor: '#3d4255', borderRadius: '1px' }} />
                  </div>
                  <div style={{ width: '90%', height: '2px', backgroundColor: '#e2e8f0', borderRadius: '1px' }} />
                  <div style={{ width: '70%', height: '2px', backgroundColor: '#e2e8f0', borderRadius: '1px' }} />
                  <div style={{ width: '80%', height: '2px', backgroundColor: '#e2e8f0', borderRadius: '1px' }} />
                </div>
              </div>
            </div>
            {/* Bottom half: Title */}
            <div className="card-title-area">
              <h3 className="card-title-text">Template Digital</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded inline keyframes for browser-specific animation handles */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  );
};

export default FloatingCards;
