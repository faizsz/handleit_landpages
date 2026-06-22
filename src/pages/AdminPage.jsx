import React, { useState } from 'react';
import { Lock, LogOut, Globe, Users, DollarSign, Edit3, Save, X, BarChart2, RefreshCw, ChevronRight } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, AreaChart, Area } from 'recharts';

/* ── Constants ── */
const SESSION_KEY = 'handleit_admin_auth';
const DATA_KEY = 'handleit_biz_data';

/* ── Custom SVG icons ── */
const InstagramIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1.2" fill={color} stroke="none"/>
  </svg>
);

const TikTokIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
  </svg>
);

/* ── Default data with history arrays for charts ── */
const DEFAULT_DATA = {
  instagram: { followers: 0, following: 0, posts: 0,
    history: [
      { month: 'Jan', followers: 0 }, { month: 'Feb', followers: 0 },
      { month: 'Mar', followers: 0 }, { month: 'Apr', followers: 0 },
      { month: 'Mei', followers: 0 }, { month: 'Jun', followers: 0 },
    ]
  },
  tiktok: { followers: 52, likes: 110, videos: 5,
    history: [
      { month: 'Jun\'25', followers: 0, likes: 0 },
      { month: 'Agt\'25', followers: 0, likes: 0 },
      { month: 'Okt\'25', followers: 0, likes: 0 },
      { month: 'Jan\'26', followers: 29, likes: 20 },
      { month: 'Apr\'26', followers: 45, likes: 90 },
      { month: 'Jun\'26', followers: 52, likes: 110 },
    ]
  },
  website: { visitors: 17, pageviews: 34, bounce: 58,
    history: [
      { month: 'Jan', visitors: 0, pageviews: 0 },
      { month: 'Feb', visitors: 0, pageviews: 0 },
      { month: 'Mar', visitors: 0, pageviews: 0 },
      { month: 'Apr', visitors: 0, pageviews: 0 },
      { month: 'Mei', visitors: 0, pageviews: 0 },
      { month: 'Jun', visitors: 17, pageviews: 34 },
    ]
  },
  customers: { total: 5, thisMonth: 5, repeat: 0,
    history: [
      { month: 'Jan', new: 0, repeat: 0 },
      { month: 'Feb', new: 0, repeat: 0 },
      { month: 'Mar', new: 0, repeat: 0 },
      { month: 'Apr', new: 0, repeat: 0 },
      { month: 'Mei', new: 2, repeat: 0 },
      { month: 'Jun', new: 3, repeat: 0 },
    ]
  },
  revenue: { thisMonth: 185200, lastMonth: 0, total: 185200,
    history: [
      { month: 'Jan', omset: 0 },
      { month: 'Feb', omset: 0 },
      { month: 'Mar', omset: 0 },
      { month: 'Apr', omset: 0 },
      { month: 'Mei', omset: 0 },
      { month: 'Jun', omset: 185200 },
    ]
  },
  updatedAt: null,
};

const loadData = () => {
  try {
    const saved = localStorage.getItem(DATA_KEY);
    if (!saved) return DEFAULT_DATA;
    const parsed = JSON.parse(saved);
    return {
      instagram: { ...DEFAULT_DATA.instagram, ...parsed.instagram },
      tiktok:    { ...DEFAULT_DATA.tiktok,    ...parsed.tiktok    },
      website:   { ...DEFAULT_DATA.website,   ...parsed.website   },
      customers: { ...DEFAULT_DATA.customers, ...parsed.customers },
      revenue:   { ...DEFAULT_DATA.revenue,   ...parsed.revenue   },
      updatedAt: parsed.updatedAt || null,
    };
  } catch { return DEFAULT_DATA; }
};

const saveData = (data) => {
  localStorage.setItem(DATA_KEY, JSON.stringify({ ...data, updatedAt: new Date().toISOString() }));
};

/* ── Shared tooltip style ── */
const ChartTooltip = ({ active, payload, label, format }) => {
  if (!active || !payload?.length) return null;
  const fmt = (v) => format === 'currency' ? `Rp ${Number(v).toLocaleString('id-ID')}` : Number(v).toLocaleString('id-ID');
  return (
    <div style={{ backgroundColor: '#1a1d27', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '10px 14px' }}>
      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginBottom: '6px' }}>{label}</div>
      {payload.map((p, i) => (
        <div key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: '600', color: p.color }}>
          {p.name}: {fmt(p.value)}
        </div>
      ))}
    </div>
  );
};

/* ── Stat card ── */
const StatCard = ({ label, value, color = '#fff', format = 'number', sub }) => {
  const fmt = (v) => {
    if (format === 'currency') return `Rp ${Number(v).toLocaleString('id-ID')}`;
    if (format === 'percent') return `${v}%`;
    return Number(v).toLocaleString('id-ID');
  };
  return (
    <div style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '14px', padding: '20px' }}>
      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginBottom: '8px' }}>{label}</div>
      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: '800', fontSize: '26px', color, marginBottom: '2px' }}>{fmt(value)}</div>
      {sub && <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: 'rgba(255,255,255,0.25)' }}>{sub}</div>}
    </div>
  );
};

/* ── Section title ── */
const SectionTitle = ({ children }) => (
  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: '700', fontSize: '15px', color: 'rgba(255,255,255,0.6)', marginBottom: '14px', marginTop: '28px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
    {children}
  </h3>
);

/* ── Chart card wrapper ── */
const ChartCard = ({ title, children }) => (
  <div style={{ backgroundColor: '#1a1d27', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px', padding: '24px', marginBottom: '20px' }}>
    {title && <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: '600', color: 'rgba(255,255,255,0.5)', marginBottom: '20px' }}>{title}</div>}
    {children}
  </div>
);

/* ── Edit Modal ── */
const EditModal = ({ title, fields, values, onSave, onClose }) => {
  const [form, setForm] = useState({ ...values });
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 200, backgroundColor: 'rgba(0,0,0,0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{ backgroundColor: '#1a1d27', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '32px', width: '100%', maxWidth: '460px', maxHeight: '90vh', overflowY: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: '700', fontSize: '18px', color: '#fff' }}>Edit {title}</h3>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.4)' }}><X size={20} /></button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
          {fields.map(f => (
            <div key={f.key}>
              <label style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: '500', color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '6px' }}>{f.label}</label>
              <input type="number" min="0" value={form[f.key] ?? 0}
                onChange={e => setForm(p => ({ ...p, [f.key]: Number(e.target.value) }))}
                style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '10px 14px', fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#fff', outline: 'none', boxSizing: 'border-box' }}
                onFocus={e => e.target.style.borderColor = '#7a3b2e'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={onClose} style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '12px', fontFamily: "'Inter', sans-serif", fontWeight: '600', fontSize: '14px', color: 'rgba(255,255,255,0.5)', cursor: 'pointer' }}>Batal</button>
          <button onClick={() => { onSave(form); onClose(); }} style={{ flex: 1, backgroundColor: '#7a3b2e', border: 'none', borderRadius: '10px', padding: '12px', fontFamily: "'Inter', sans-serif", fontWeight: '600', fontSize: '14px', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            <Save size={14} /> Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════
   DETAIL PAGES
═══════════════════════════════════════ */

/* ── Instagram Detail ── */
const InstagramDetail = ({ data, onEdit }) => (
  <div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
      <div>
        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: '800', fontSize: '24px', color: '#fff', marginBottom: '4px' }}>Instagram</h2>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.35)' }}>Pertumbuhan akun & engagement</p>
      </div>
      <button onClick={onEdit} style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(225,48,108,0.15)', border: '1px solid rgba(225,48,108,0.3)', borderRadius: '10px', padding: '9px 18px', fontFamily: "'Inter', sans-serif", fontWeight: '600', fontSize: '13px', color: '#e1306c', cursor: 'pointer' }}>
        <Edit3 size={13} /> Edit Data
      </button>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginBottom: '4px' }} className="admin-stat-grid">
      <StatCard label="Followers" value={data.followers} color="#e1306c" />
      <StatCard label="Following" value={data.following} />
      <StatCard label="Posts" value={data.posts} />
    </div>
    <SectionTitle>Pertumbuhan Followers</SectionTitle>
    <ChartCard title="Followers per Bulan">
      <ResponsiveContainer width="100%" height={240}>
        <AreaChart data={data.history}>
          <defs>
            <linearGradient id="igGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#e1306c" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#e1306c" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
          <XAxis dataKey="month" tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip content={<ChartTooltip />} />
          <Area type="monotone" dataKey="followers" name="Followers" stroke="#e1306c" strokeWidth={2.5} fill="url(#igGrad)" dot={{ fill: '#e1306c', r: 4 }} />
        </AreaChart>
      </ResponsiveContainer>
    </ChartCard>
    <SectionTitle>Update History Data</SectionTitle>
    <ChartCard title="Edit history per bulan (isi manual)">
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.35)', lineHeight: '1.6' }}>
        Klik <strong style={{ color: 'rgba(255,255,255,0.5)' }}>Edit Data</strong> → perbarui angka followers setiap bulan secara berkala supaya grafik di atas ikut terupdate.
      </p>
    </ChartCard>
  </div>
);

/* ── TikTok Detail ── */
const TikTokDetail = ({ data, onEdit }) => (
  <div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
      <div>
        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: '800', fontSize: '24px', color: '#fff', marginBottom: '4px' }}>TikTok</h2>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.35)' }}>Followers, views & engagement akun</p>
      </div>
      <button onClick={onEdit} style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(105,201,208,0.15)', border: '1px solid rgba(105,201,208,0.3)', borderRadius: '10px', padding: '9px 18px', fontFamily: "'Inter', sans-serif", fontWeight: '600', fontSize: '13px', color: '#69c9d0', cursor: 'pointer' }}>
        <Edit3 size={13} /> Edit Data
      </button>
    </div>

    {/* Row 1 — Audience */}
    <SectionTitle>Audience</SectionTitle>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', marginBottom: '4px' }} className="admin-stat-grid">
      <StatCard label="Total Followers" value={data.followers} color="#69c9d0" sub="all time" />
      <StatCard label="Net Followers" value={data.netFollowers ?? 23} color="#a5f3fc" sub="last 365 days" />
      <StatCard label="Total Viewers" value={data.totalViewers ?? 10900} sub="last 365 days" />
      <StatCard label="New Viewers" value={data.newViewers ?? 10400} sub="last 365 days" />
    </div>

    {/* Row 2 — Content */}
    <SectionTitle>Content Performance</SectionTitle>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '14px', marginBottom: '4px' }} className="admin-stat-grid">
      <StatCard label="Video Views" value={data.videoViews ?? 4100} color="#f472b6" />
      <StatCard label="Profile Views" value={data.profileViews ?? 201} />
      <StatCard label="Likes" value={data.likes} color="#fb7185" />
      <StatCard label="Comments" value={data.comments ?? 6} />
      <StatCard label="Shares" value={data.shares ?? 12} />
    </div>

    <StatCard label="Total Videos" value={data.videos} sub="konten diunggah" />

    {/* Traffic source */}
    <SectionTitle>Traffic Source</SectionTitle>
    <ChartCard title="Distribusi sumber traffic (last 365 days)">
      {[
        { label: 'For You', pct: 51.4, color: '#69c9d0' },
        { label: 'Personal Profile', pct: 24.3, color: '#a5f3fc' },
        { label: 'Search', pct: 24.3, color: '#818cf8' },
        { label: 'Following', pct: 0, color: 'rgba(255,255,255,0.2)' },
        { label: 'Sound', pct: 0, color: 'rgba(255,255,255,0.2)' },
      ].map(item => (
        <div key={item.label} style={{ marginBottom: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>{item.label}</span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: '600', color: '#fff' }}>{item.pct}%</span>
          </div>
          <div style={{ height: '6px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '99px', overflow: 'hidden' }}>
            <div style={{ height: '100%', borderRadius: '99px', backgroundColor: item.color, width: `${item.pct}%`, transition: 'width 0.8s ease' }} />
          </div>
        </div>
      ))}
    </ChartCard>

    {/* Top posts */}
    <SectionTitle>Top Posts</SectionTitle>
    <ChartCard>
      {[
        { rank: 1, title: 'sering terjadi sama anak teknik BUAT KALIAN MAHASISWA ATAU UMKM...', views60: 865, allViews: 872 },
        { rank: 2, title: 'HANDLE IT READYYY!!', views60: 779, allViews: 785 },
        { rank: 3, title: 'Ci o muda abis meeting sama investor 🤩 #comuda #coo #handle', views60: 295, allViews: 950 },
        { rank: 4, title: 'Tunggu gebrakan selanjutnya!!!', views60: 150, allViews: 438 },
        { rank: 5, title: 'P p apa? Percuma nonton doang ga DM 👆', views60: 108, allViews: 890 },
      ].map(post => (
        <div key={post.rank} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: '800', fontSize: '18px', color: 'rgba(255,255,255,0.15)', width: '24px', flexShrink: 0, textAlign: 'center' }}>{post.rank}</span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.7)', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{post.title}</p>
          </div>
          <div style={{ display: 'flex', gap: '20px', flexShrink: 0 }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginBottom: '2px' }}>60 hari</div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: '700', fontSize: '14px', color: '#69c9d0' }}>{post.views60.toLocaleString()}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginBottom: '2px' }}>all views</div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: '700', fontSize: '14px', color: '#fff' }}>{post.allViews.toLocaleString()}</div>
            </div>
          </div>
        </div>
      ))}
    </ChartCard>

    {/* Followers chart */}
    <SectionTitle>Pertumbuhan Followers</SectionTitle>
    <ChartCard title="Followers & Likes per Periode">
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={data.history}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
          <XAxis dataKey="month" tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip content={<ChartTooltip />} />
          <Line type="monotone" dataKey="followers" name="Followers" stroke="#69c9d0" strokeWidth={2.5} dot={{ fill: '#69c9d0', r: 4 }} />
          <Line type="monotone" dataKey="likes" name="Likes" stroke="#f472b6" strokeWidth={2.5} dot={{ fill: '#f472b6', r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  </div>
);

/* ── Website Detail ── */
const WebsiteDetail = ({ data, onEdit }) => (
  <div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
      <div>
        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: '800', fontSize: '24px', color: '#fff', marginBottom: '4px' }}>Website</h2>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.35)' }}>Traffic handleit.web.id</p>
      </div>
      <button onClick={onEdit} style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '10px', padding: '9px 18px', fontFamily: "'Inter', sans-serif", fontWeight: '600', fontSize: '13px', color: '#818cf8', cursor: 'pointer' }}>
        <Edit3 size={13} /> Edit Data
      </button>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginBottom: '4px' }} className="admin-stat-grid">
      <StatCard label="Visitors" value={data.visitors} color="#818cf8" />
      <StatCard label="Page Views" value={data.pageviews} />
      <StatCard label="Bounce Rate" value={data.bounce} format="percent" />
    </div>
    <SectionTitle>Visitors & Page Views</SectionTitle>
    <ChartCard title="Traffic per Bulan">
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data.history} barGap={4}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
          <XAxis dataKey="month" tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip content={<ChartTooltip />} />
          <Bar dataKey="visitors" name="Visitors" fill="#6366f1" radius={[6,6,0,0]} />
          <Bar dataKey="pageviews" name="Page Views" fill="#818cf8" radius={[6,6,0,0]} opacity={0.6} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  </div>
);

/* ── Customer & Omset Detail ── */
const CustomerOmsetDetail = ({ customers, revenue, onEditCustomer, onEditRevenue }) => (
  <div>
    <div style={{ marginBottom: '28px' }}>
      <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: '800', fontSize: '24px', color: '#fff', marginBottom: '4px' }}>Customer & Omset</h2>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.35)' }}>Data pelanggan & pendapatan bisnis</p>
    </div>

    {/* Customer section */}
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
      <SectionTitle>Customer</SectionTitle>
      <button onClick={onEditCustomer} style={{ display: 'flex', alignItems: 'center', gap: '5px', backgroundColor: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: '8px', padding: '7px 14px', fontFamily: "'Inter', sans-serif", fontWeight: '600', fontSize: '12px', color: '#f59e0b', cursor: 'pointer' }}>
        <Edit3 size={12} /> Edit
      </button>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginBottom: '24px' }} className="admin-stat-grid">
      <StatCard label="Total Customer" value={customers.total} color="#f59e0b" />
      <StatCard label="Bulan Ini" value={customers.thisMonth} />
      <StatCard label="Repeat Order" value={customers.repeat} />
    </div>
    <ChartCard title="Customer Baru & Repeat per Bulan">
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={customers.history} barGap={4}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
          <XAxis dataKey="month" tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip content={<ChartTooltip />} />
          <Bar dataKey="new" name="Customer Baru" fill="#f59e0b" radius={[6,6,0,0]} />
          <Bar dataKey="repeat" name="Repeat Order" fill="#fbbf24" radius={[6,6,0,0]} opacity={0.6} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>

    {/* Revenue section */}
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '32px', marginBottom: '12px' }}>
      <SectionTitle>Omset</SectionTitle>
      <button onClick={onEditRevenue} style={{ display: 'flex', alignItems: 'center', gap: '5px', backgroundColor: 'rgba(74,222,128,0.15)', border: '1px solid rgba(74,222,128,0.3)', borderRadius: '8px', padding: '7px 14px', fontFamily: "'Inter', sans-serif", fontWeight: '600', fontSize: '12px', color: '#4ade80', cursor: 'pointer' }}>
        <Edit3 size={12} /> Edit
      </button>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginBottom: '24px' }} className="admin-stat-grid">
      <StatCard label="Total Keseluruhan" value={revenue.total} color="#4ade80" format="currency" />
      <StatCard label="Bulan Ini" value={revenue.thisMonth} format="currency" />
      <StatCard label="Bulan Lalu" value={revenue.lastMonth} format="currency" />
    </div>
    <ChartCard title="Omset per Bulan (Rp)">
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={revenue.history}>
          <defs>
            <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4ade80" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#4ade80" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
          <XAxis dataKey="month" tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={v => `${(v/1000).toFixed(0)}k`} />
          <Tooltip content={<ChartTooltip format="currency" />} />
          <Area type="monotone" dataKey="omset" name="Omset" stroke="#4ade80" strokeWidth={2.5} fill="url(#revGrad)" dot={{ fill: '#4ade80', r: 4 }} />
        </AreaChart>
      </ResponsiveContainer>
    </ChartCard>
  </div>
);

/* ═══════════════════════════════════════
   OVERVIEW PAGE
═══════════════════════════════════════ */
const OverviewPage = ({ data }) => {
  const fmt = v => `Rp ${Number(v).toLocaleString('id-ID')}`;
  return (
    <div>
      <div style={{ marginBottom: '28px' }}>
        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: '800', fontSize: '24px', color: '#fff', marginBottom: '4px' }}>Business Overview</h2>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.35)' }}>Ringkasan semua metrik bisnis Handle IT</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px', marginBottom: '28px' }}>
        <StatCard label="IG Followers" value={data.instagram.followers} color="#e1306c" />
        <StatCard label="TikTok Followers" value={data.tiktok.followers} color="#69c9d0" />
        <StatCard label="Website Visitors" value={data.website.visitors} color="#818cf8" />
        <StatCard label="Total Customer" value={data.customers.total} color="#f59e0b" />
        <StatCard label="Omset Bulan Ini" value={data.revenue.thisMonth} color="#4ade80" format="currency" />
      </div>
      <ChartCard title="Perbandingan Followers (IG vs TikTok)">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data.instagram.history.map((d, i) => ({ ...d, tiktok: data.tiktok.history[i]?.followers || 0 }))}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis dataKey="month" tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip content={<ChartTooltip />} />
            <Line type="monotone" dataKey="followers" name="Instagram" stroke="#e1306c" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="tiktok" name="TikTok" stroke="#69c9d0" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>
      <ChartCard title="Omset & Customer Bulan Ini vs Bulan Lalu">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {[
            { label: 'Omset Bulan Ini', value: data.revenue.thisMonth, max: Math.max(data.revenue.thisMonth, data.revenue.lastMonth, 1), color: '#4ade80' },
            { label: 'Omset Bulan Lalu', value: data.revenue.lastMonth, max: Math.max(data.revenue.thisMonth, data.revenue.lastMonth, 1), color: 'rgba(74,222,128,0.3)' },
          ].map(item => (
            <div key={item.label}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>{item.label}</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: '600', color: '#fff' }}>{fmt(item.value)}</span>
              </div>
              <div style={{ height: '8px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '99px', overflow: 'hidden' }}>
                <div style={{ height: '100%', borderRadius: '99px', backgroundColor: item.color, width: `${(item.value / item.max) * 100}%`, transition: 'width 0.8s ease' }} />
              </div>
            </div>
          ))}
        </div>
      </ChartCard>
    </div>
  );
};

/* ═══════════════════════════════════════
   LOGIN
═══════════════════════════════════════ */
const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); setLoading(true); setError('');
    setTimeout(() => {
      const validUser = import.meta.env.VITE_ADMIN_USER || 'handleit';
      const validPass = import.meta.env.VITE_ADMIN_PASSWORD || 'handleit13';
      if (username === validUser && password === validPass) {
        sessionStorage.setItem(SESSION_KEY, 'true'); onLogin();
      } else { setError('Username atau password salah.'); }
      setLoading(false);
    }, 500);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f1117', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div style={{ width: '100%', maxWidth: '400px', backgroundColor: '#1a1d27', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', padding: '48px 40px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: '#7a3b2e', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
            <Lock size={24} color="#fff" />
          </div>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: '800', fontSize: '22px', color: '#fff', marginBottom: '6px' }}>Handle IT · Admin</h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.4)' }}>Business Analytics</p>
        </div>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[{ id: 'user', type: 'text', label: 'Username', value: username, set: setUsername }, { id: 'pass', type: 'password', label: 'Password', value: password, set: setPassword }].map(f => (
            <div key={f.id}>
              <label style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: '500', color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '8px' }}>{f.label}</label>
              <input type={f.type} value={f.value} onChange={e => f.set(e.target.value)} required style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '12px 16px', fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#fff', outline: 'none', boxSizing: 'border-box' }} onFocus={e => e.target.style.borderColor = '#7a3b2e'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
            </div>
          ))}
          {error && <div style={{ backgroundColor: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: '8px', padding: '10px 14px', fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#f87171' }}>{error}</div>}
          <button type="submit" disabled={loading} style={{ backgroundColor: loading ? 'rgba(122,59,46,0.5)' : '#7a3b2e', color: '#fff', border: 'none', borderRadius: '10px', padding: '14px', fontFamily: "'Inter', sans-serif", fontWeight: '600', fontSize: '15px', cursor: loading ? 'not-allowed' : 'pointer', marginTop: '4px' }}>
            {loading ? 'Memeriksa...' : 'Masuk →'}
          </button>
        </form>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════
   MAIN DASHBOARD WITH SIDEBAR
═══════════════════════════════════════ */
const NAV_ITEMS = [
  { id: 'overview', label: 'Overview', icon: BarChart2, color: '#7a3b2e' },
  { id: 'website', label: 'Website', icon: Globe, color: '#818cf8' },
  { id: 'instagram', label: 'Instagram', icon: InstagramIcon, color: '#e1306c' },
  { id: 'tiktok', label: 'TikTok', icon: TikTokIcon, color: '#69c9d0' },
  { id: 'customer-omset', label: 'Customer & Omset', icon: Users, color: '#f59e0b' },
];

const Dashboard = ({ onLogout }) => {
  const [data, setData] = useState(loadData);
  const [activePage, setActivePage] = useState('overview');
  const [modal, setModal] = useState(null);
  const [saved, setSaved] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const updatedStr = data.updatedAt
    ? new Date(data.updatedAt).toLocaleString('id-ID', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
    : 'Belum pernah diupdate';

  const updateSection = (section, values) => {
    const updated = { ...data, [section]: { ...data[section], ...values } };
    setData(updated); saveData(updated);
    setSaved(true); setTimeout(() => setSaved(false), 2000);
  };

  const SIDEBAR_W = sidebarOpen ? '220px' : '64px';

  const renderPage = () => {
    switch (activePage) {
      case 'instagram': return <InstagramDetail data={data.instagram} onEdit={() => setModal({ section: 'instagram', title: 'Instagram', fields: [{ key: 'followers', label: 'Followers' }, { key: 'following', label: 'Following' }, { key: 'posts', label: 'Total Posts' }] })} />;
      case 'tiktok': return <TikTokDetail data={data.tiktok} onEdit={() => setModal({ section: 'tiktok', title: 'TikTok', fields: [{ key: 'followers', label: 'Followers' }, { key: 'likes', label: 'Total Likes' }, { key: 'videos', label: 'Total Video' }] })} />;
      case 'website': return <WebsiteDetail data={data.website} onEdit={() => setModal({ section: 'website', title: 'Website', fields: [{ key: 'visitors', label: 'Visitors' }, { key: 'pageviews', label: 'Page Views' }, { key: 'bounce', label: 'Bounce Rate (%)' }] })} />;
      case 'customer-omset': return <CustomerOmsetDetail customers={data.customers} revenue={data.revenue}
          onEditCustomer={() => setModal({ section: 'customers', title: 'Customer', fields: [{ key: 'total', label: 'Total Customer' }, { key: 'thisMonth', label: 'Bulan Ini' }, { key: 'repeat', label: 'Repeat Order' }] })}
          onEditRevenue={() => setModal({ section: 'revenue', title: 'Omset', fields: [{ key: 'thisMonth', label: 'Omset Bulan Ini (Rp)' }, { key: 'lastMonth', label: 'Omset Bulan Lalu (Rp)' }, { key: 'total', label: 'Total Keseluruhan (Rp)' }] })} />;
      default: return <OverviewPage data={data} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f1117', display: 'flex' }}>

      {/* ── Sidebar ── */}
      <div style={{ width: SIDEBAR_W, minHeight: '100vh', backgroundColor: '#13161f', borderRight: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', flexShrink: 0, transition: 'width 0.3s ease', overflow: 'hidden' }}>
        {/* Logo */}
        <div style={{ padding: sidebarOpen ? '24px 20px 20px' : '24px 0 20px', display: 'flex', alignItems: 'center', gap: '10px', justifyContent: sidebarOpen ? 'flex-start' : 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#7a3b2e', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <BarChart2 size={16} color="#fff" />
          </div>
          {sidebarOpen && <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: '700', fontSize: '14px', color: '#fff', whiteSpace: 'nowrap' }}>Handle IT</span>}
        </div>

        {/* Nav items */}
        <nav style={{ flex: 1, padding: '12px 8px' }}>
          {NAV_ITEMS.map(item => {
            const active = activePage === item.id;
            return (
              <button key={item.id} onClick={() => setActivePage(item.id)}
                style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '12px', padding: sidebarOpen ? '10px 12px' : '10px 0', justifyContent: sidebarOpen ? 'flex-start' : 'center', borderRadius: '10px', border: 'none', backgroundColor: active ? `${item.color}18` : 'transparent', cursor: 'pointer', marginBottom: '4px', transition: 'background 0.2s' }}
                onMouseEnter={e => { if (!active) e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)'; }}
                onMouseLeave={e => { if (!active) e.currentTarget.style.backgroundColor = 'transparent'; }}
              >
                <item.icon size={18} color={active ? item.color : 'rgba(255,255,255,0.4)'} />
                {sidebarOpen && (
                  <>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: active ? '600' : '500', color: active ? '#fff' : 'rgba(255,255,255,0.45)', whiteSpace: 'nowrap', flex: 1, textAlign: 'left' }}>{item.label}</span>
                    {active && <ChevronRight size={14} color={item.color} />}
                  </>
                )}
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <div style={{ padding: '12px 8px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <button onClick={onLogout} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '10px', padding: sidebarOpen ? '10px 12px' : '10px 0', justifyContent: sidebarOpen ? 'flex-start' : 'center', borderRadius: '10px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <LogOut size={16} color="rgba(255,255,255,0.3)" />
            {sidebarOpen && <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.3)' }}>Keluar</span>}
          </button>
        </div>
      </div>

      {/* ── Main content ── */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        {/* Topbar */}
        <div style={{ height: '56px', backgroundColor: '#13161f', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', padding: '0 28px', gap: '16px', justifyContent: 'space-between', flexShrink: 0 }}>
          <button onClick={() => setSidebarOpen(p => !p)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.4)', padding: '4px', display: 'flex' }}>
            <BarChart2 size={18} />
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {saved && <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#4ade80', display: 'flex', alignItems: 'center', gap: '4px' }}><Save size={12} /> Tersimpan</span>}
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: 'rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', gap: '4px', whiteSpace: 'nowrap' }}>
              <RefreshCw size={11} /> {updatedStr}
            </span>
          </div>
        </div>

        {/* Page content */}
        <div style={{ flex: 1, padding: '32px 36px', overflowY: 'auto' }}>
          {renderPage()}
        </div>
      </div>

      {/* Edit Modal */}
      {modal && <EditModal title={modal.title} fields={modal.fields} values={data[modal.section]} onSave={vals => updateSection(modal.section, vals)} onClose={() => setModal(null)} />}

      <style>{`
        @media (max-width: 640px) {
          .admin-stat-grid { grid-template-columns: 1fr 1fr !important; }
        }
        input[type=number]::-webkit-inner-spin-button { opacity: 0.3; }
      `}</style>
    </div>
  );
};

/* ── Main export ── */
const AdminPage = () => {
  const [authed, setAuthed] = useState(sessionStorage.getItem(SESSION_KEY) === 'true');
  const handleLogout = () => { sessionStorage.removeItem(SESSION_KEY); setAuthed(false); };
  if (!authed) return <LoginForm onLogin={() => setAuthed(true)} />;
  return <Dashboard onLogout={handleLogout} />;
};

export default AdminPage;
