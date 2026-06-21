import React, { useState, useEffect } from 'react';
import { Lock, LogOut, BarChart2, Users, Eye, MousePointerClick, Globe, TrendingUp } from 'lucide-react';

const SESSION_KEY = 'handleit_admin_auth';

/* ─────────────────────────────────────────────
   LOGIN FORM
───────────────────────────────────────────── */
const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      const validUser = import.meta.env.VITE_ADMIN_USER || 'handleit';
      const validPass = import.meta.env.VITE_ADMIN_PASSWORD || 'handleit13';

      if (username === validUser && password === validPass) {
        sessionStorage.setItem(SESSION_KEY, 'true');
        onLogin();
      } else {
        setError('Username atau password salah.');
      }
      setLoading(false);
    }, 600);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0f1117',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px',
        backgroundColor: '#1a1d27',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '24px',
        padding: '48px 40px',
      }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{
            width: '56px', height: '56px', borderRadius: '16px',
            backgroundColor: '#7a3b2e',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 16px',
          }}>
            <Lock size={24} color="#fff" strokeWidth={2} />
          </div>
          <h1 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: '800', fontSize: '22px',
            color: '#ffffff', marginBottom: '6px',
          }}>
            Handle IT Admin
          </h1>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '14px', color: 'rgba(255,255,255,0.45)',
          }}>
            Masuk untuk lihat analytics
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Username */}
          <div>
            <label style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px', fontWeight: '500',
              color: 'rgba(255,255,255,0.6)',
              display: 'block', marginBottom: '8px',
            }}>
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              autoComplete="username"
              required
              style={{
                width: '100%',
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
                padding: '12px 16px',
                fontFamily: "'Inter', sans-serif",
                fontSize: '15px',
                color: '#ffffff',
                outline: 'none',
                boxSizing: 'border-box',
                transition: 'border-color 0.2s',
              }}
              onFocus={e => e.target.style.borderColor = 'rgba(122,59,46,0.8)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
          </div>

          {/* Password */}
          <div>
            <label style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px', fontWeight: '500',
              color: 'rgba(255,255,255,0.6)',
              display: 'block', marginBottom: '8px',
            }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              style={{
                width: '100%',
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
                padding: '12px 16px',
                fontFamily: "'Inter', sans-serif",
                fontSize: '15px',
                color: '#ffffff',
                outline: 'none',
                boxSizing: 'border-box',
                transition: 'border-color 0.2s',
              }}
              onFocus={e => e.target.style.borderColor = 'rgba(122,59,46,0.8)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
          </div>

          {/* Error */}
          {error && (
            <div style={{
              backgroundColor: 'rgba(239,68,68,0.12)',
              border: '1px solid rgba(239,68,68,0.25)',
              borderRadius: '8px', padding: '10px 14px',
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px', color: '#f87171',
            }}>
              {error}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            style={{
              backgroundColor: loading ? 'rgba(122,59,46,0.5)' : '#7a3b2e',
              color: '#ffffff',
              border: 'none',
              borderRadius: '10px',
              padding: '14px',
              fontFamily: "'Inter', sans-serif",
              fontWeight: '600', fontSize: '15px',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'background 0.2s',
              marginTop: '4px',
            }}
          >
            {loading ? 'Memeriksa...' : 'Masuk →'}
          </button>
        </form>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   STAT CARD
───────────────────────────────────────────── */
const StatCard = ({ Icon, label, value, sub, color = '#7a3b2e' }) => (
  <div style={{
    backgroundColor: '#1a1d27',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: '16px',
    padding: '24px',
  }}>
    <div style={{
      display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', marginBottom: '16px',
    }}>
      <span style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '13px', fontWeight: '500',
        color: 'rgba(255,255,255,0.5)',
      }}>
        {label}
      </span>
      <div style={{
        width: '36px', height: '36px', borderRadius: '10px',
        backgroundColor: `${color}22`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Icon size={18} color={color} strokeWidth={2} />
      </div>
    </div>
    <div style={{
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: '800', fontSize: '28px',
      color: '#ffffff', marginBottom: '4px',
    }}>
      {value}
    </div>
    {sub && (
      <div style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '12px', color: 'rgba(255,255,255,0.35)',
      }}>
        {sub}
      </div>
    )}
  </div>
);

/* ─────────────────────────────────────────────
   DASHBOARD
───────────────────────────────────────────── */
const Dashboard = ({ onLogout }) => {
  const PROJECT_ID = 'prj_La1o4SCAQ1Xuzz5uMiTK0CtWjdW1';
  const VERCEL_ANALYTICS_URL = `https://vercel.com/faizakmal2604-8060s-projects/handleit-landpages/analytics`;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f1117' }}>

      {/* Top bar */}
      <div style={{
        backgroundColor: '#1a1d27',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        padding: '0 32px',
        height: '64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '32px', height: '32px', borderRadius: '8px',
            backgroundColor: '#7a3b2e',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <BarChart2 size={16} color="#fff" strokeWidth={2} />
          </div>
          <span style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: '700', fontSize: '16px', color: '#ffffff',
          }}>
            Handle IT · Admin
          </span>
        </div>

        <button
          onClick={onLogout}
          style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            backgroundColor: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '8px', padding: '8px 16px',
            fontFamily: "'Inter', sans-serif",
            fontWeight: '500', fontSize: '13px', color: 'rgba(255,255,255,0.6)',
            cursor: 'pointer', transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'}
        >
          <LogOut size={14} />
          Keluar
        </button>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 32px' }}>

        {/* Page title */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: '800', fontSize: '28px',
            color: '#ffffff', marginBottom: '6px',
          }}>
            Analytics Overview
          </h1>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '14px', color: 'rgba(255,255,255,0.4)',
          }}>
            Data diambil dari Vercel Analytics · handleit.web.id
          </p>
        </div>

        {/* Stat cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginBottom: '32px',
        }}>
          <StatCard Icon={Eye} label="Page Views" value="—" sub="Lihat di Vercel Dashboard" color="#7a3b2e" />
          <StatCard Icon={Users} label="Unique Visitors" value="—" sub="Lihat di Vercel Dashboard" color="#1a3a4a" />
          <StatCard Icon={MousePointerClick} label="WA Button Clicks" value="—" sub="Tracked via Analytics" color="#1e5a3a" />
          <StatCard Icon={Globe} label="Top Source" value="—" sub="Lihat di Vercel Dashboard" color="#5a3a7a" />
        </div>

        {/* Vercel Analytics embed notice */}
        <div style={{
          backgroundColor: '#1a1d27',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '20px',
          padding: '32px',
          marginBottom: '24px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <TrendingUp size={20} color="#7a3b2e" />
            <h2 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: '700', fontSize: '18px', color: '#ffffff',
            }}>
              Vercel Analytics Dashboard
            </h2>
          </div>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '14px', color: 'rgba(255,255,255,0.5)',
            lineHeight: '1.7', marginBottom: '24px',
          }}>
            Analytics lengkap (page views, visitors, top pages, referrer, device breakdown) tersedia di Vercel Dashboard.
            Data mulai terkumpul setelah deploy dengan <code style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '2px 8px', borderRadius: '4px', fontSize: '13px' }}>@vercel/analytics</code> sudah aktif.
          </p>
          <a
            href={VERCEL_ANALYTICS_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              backgroundColor: '#7a3b2e',
              color: '#ffffff',
              borderRadius: '10px', padding: '12px 24px',
              fontFamily: "'Inter', sans-serif",
              fontWeight: '600', fontSize: '14px',
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#6a2f24'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#7a3b2e'}
          >
            Buka Vercel Analytics →
          </a>
        </div>

        {/* Quick links */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px',
        }}>
          {[
            { label: 'Buka Website', href: 'https://handleit.web.id', desc: 'Lihat landing page live' },
            { label: 'Vercel Project', href: 'https://vercel.com/faizakmal2604-8060s-projects/handleit-landpages', desc: 'Deployment & settings' },
            { label: 'GitHub Repo', href: 'https://github.com/faizsz/handleit_landpages', desc: 'Source code' },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#1a1d27',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '14px',
                padding: '20px 24px',
                textDecoration: 'none',
                display: 'block',
                transition: 'border-color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(122,59,46,0.5)'; e.currentTarget.style.backgroundColor = '#1f2232'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.backgroundColor = '#1a1d27'; }}
            >
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: '600', fontSize: '14px',
                color: '#ffffff', marginBottom: '4px',
              }}>
                {item.label} →
              </div>
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '12px', color: 'rgba(255,255,255,0.35)',
              }}>
                {item.desc}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   MAIN ADMIN PAGE
───────────────────────────────────────────── */
const AdminPage = () => {
  const [authed, setAuthed] = useState(
    sessionStorage.getItem(SESSION_KEY) === 'true'
  );

  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setAuthed(false);
  };

  if (!authed) return <LoginForm onLogin={() => setAuthed(true)} />;
  return <Dashboard onLogout={handleLogout} />;
};

export default AdminPage;
