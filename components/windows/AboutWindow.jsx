'use client';
import { useState } from 'react';

const sections = ['Profile', 'Education', 'Achievements', 'Interests'];

export default function AboutWindow() {
  const [active, setActive] = useState('Profile');

  const sidebar = (
    <>
      <p style={{ fontSize: 11, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8, padding: '0 4px' }}>
        Favourites
      </p>
      {sections.map((s) => (
        <div
          key={s}
          className={`finder-sidebar-item ${active === s ? 'active' : ''}`}
          onClick={() => setActive(s)}
        >
          <span>{s === 'Profile' ? '👤' : s === 'Education' ? '🎓' : s === 'Achievements' ? '🏆' : '🎯'}</span>
          {s}
        </div>
      ))}
      <div className="mac-divider" />
      <p style={{ fontSize: 11, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8, padding: '0 4px' }}>
        Links
      </p>
      {[
        { label: 'GitHub', href: 'https://github.com/SohamBagal', emoji: '🐙' },
        { label: 'LinkedIn', href: 'https://linkedin.com/in/soham-bagal', emoji: '💼' },
        { label: 'Email', href: 'mailto:bagalsoham1717@gmail.com', emoji: '✉️' },
      ].map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          className="finder-sidebar-item"
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}
        >
          <span>{l.emoji}</span>
          {l.label}
        </a>
      ))}
    </>
  );

  const content = {
    Profile: (
      <div style={{ padding: 28 }}>
        {/* Avatar + name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 24 }}>
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 32,
              flexShrink: 0,
              boxShadow: '0 4px 20px rgba(14,165,233,0.4)',
            }}
          >
            {/* Replace with your photo: <img src="/avatar.jpg" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} /> */}
            🧑‍💻
          </div>
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 700, color: 'var(--text)' }}>Soham Mahendra Bagal</h1>
            <p style={{ fontSize: 14, color: 'var(--accent)', marginTop: 2 }}>Data Engineer & Full Stack Developer</p>
            <p style={{ fontSize: 12, color: 'var(--text-tertiary)', marginTop: 4 }}>📍 Mumbai, Maharashtra</p>
          </div>
        </div>

        <div className="mac-divider" />

        {/* Bio */}
        <div style={{ marginTop: 16, marginBottom: 20 }}>
          <h2 style={{ fontSize: 12, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>Profile Summary</h2>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            B.Tech Information Technology student at KJ Somaiya School of Engineering with hands-on experience in
            <strong style={{ color: 'var(--accent)' }}> data engineering</strong>, AI applications, and full-stack development.
            Currently a Data Engineering Intern at <strong style={{ color: 'var(--text)' }}>Bajaj Finserv</strong>, building
            PySpark pipelines, AI-driven diagnostic systems, and Power BI automation workflows.
          </p>
        </div>

        <div className="mac-divider" />

        {/* Quick stats */}
        <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
          {[
            { label: 'CGPA', value: '7.9' },
            { label: 'Internships', value: '2' },
            { label: 'Projects', value: '5+' },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid var(--border)',
                borderRadius: 10,
                padding: '12px 16px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--accent)' }}>{s.value}</div>
              <div style={{ fontSize: 11, color: 'var(--text-tertiary)', marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 20 }}>
          <h2 style={{ fontSize: 12, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>Contact</h2>
          {[
            { icon: '✉️', value: 'bagalsoham1717@gmail.com' },
            { icon: '📱', value: '+91 9967550047' },
          ].map((c) => (
            <div key={c.icon} style={{ display: 'flex', gap: 8, marginBottom: 6, fontSize: 13, color: 'var(--text-secondary)' }}>
              <span>{c.icon}</span>
              <span>{c.value}</span>
            </div>
          ))}
        </div>
      </div>
    ),

    Education: (
      <div style={{ padding: 28 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 20 }}>Education</h2>
        {[
          {
            degree: 'B.Tech in Information Technology',
            institute: 'KJ Somaiya School of Engineering (SVU)',
            duration: '2022 – Present',
            detail: 'CGPA: 7.9 (Till Semester 7)',
            icon: '🏛️',
          },
          {
            degree: 'HSC — Science Stream',
            institute: 'BH Chate Junior College, Pune',
            duration: '2020 – 2022',
            detail: '86.5%',
            icon: '📚',
          },
          {
            degree: 'SSC',
            institute: "St. John's High School, Mumbai",
            duration: 'Till 2020',
            detail: '91.2%',
            icon: '🏫',
          },
        ].map((e, i) => (
          <div
            key={i}
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid var(--border)',
              borderRadius: 12,
              padding: 16,
              marginBottom: 12,
              display: 'flex',
              gap: 14,
              alignItems: 'flex-start',
            }}
          >
            <div style={{ fontSize: 28 }}>{e.icon}</div>
            <div>
              <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--text)' }}>{e.degree}</p>
              <p style={{ fontSize: 13, color: 'var(--accent)', marginTop: 2 }}>{e.institute}</p>
              <div style={{ display: 'flex', gap: 12, marginTop: 4 }}>
                <span style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>📅 {e.duration}</span>
                <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>⭐ {e.detail}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    ),

    Achievements: (
      <div style={{ padding: 28 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 20 }}>Achievements</h2>
        {[
          {
            title: 'Climate Hackathon Winner 🏆',
            org: 'U.S. Consulate',
            desc: 'Won the Climate Hackathon organized by the U.S. Consulate. Developed a CNN-based temperature measurement system and a Flask–React application for predicting NO2 pollution levels.',
          },
          {
            title: 'Inter-Department Cricket Tournament Winner 🏏',
            org: 'KJ Somaiya SOE',
            desc: 'Won the inter-department cricket tournament at college.',
          },
          {
            title: 'Secure & Sustainable Web Development',
            org: 'Certification',
            desc: 'Completed a 5-Day Training Program in Secure & Sustainable Web Development.',
          },
        ].map((a, i) => (
          <div
            key={i}
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid var(--border)',
              borderRadius: 12,
              padding: 16,
              marginBottom: 12,
            }}
          >
            <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--text)' }}>{a.title}</p>
            <p style={{ fontSize: 12, color: 'var(--accent)', marginTop: 2 }}>{a.org}</p>
            <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 6, lineHeight: 1.6 }}>{a.desc}</p>
          </div>
        ))}
      </div>
    ),

    Interests: (
      <div style={{ padding: 28 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 20 }}>Interests & Languages</h2>
        <div style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: 13, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>Interests</h3>
          {['Data Engineering', 'Software Development', 'Cricket'].map((i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
              <span style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{i}</span>
            </div>
          ))}
        </div>
        <div className="mac-divider" />
        <div style={{ marginTop: 16 }}>
          <h3 style={{ fontSize: 13, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>Languages</h3>
          {['English', 'Hindi', 'Marathi'].map((l) => (
            <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <span style={{ fontSize: 14, color: 'var(--text-secondary)' }}>🌐 {l}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  };

  return (
    <>
      {/* Sidebar injection via window sidebarContent prop is handled in Desktop */}
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Finder toolbar */}
        <div
          style={{
            height: 38,
            background: 'rgba(255,255,255,0.02)',
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            padding: '0 16px',
            gap: 8,
            flexShrink: 0,
          }}
        >
          <span style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>soham.bagal</span>
          <span style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>›</span>
          <span style={{ fontSize: 12, color: 'var(--text)' }}>{active}</span>
        </div>
        {/* Content */}
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {content[active]}
        </div>
      </div>
    </>
  );
}

export function AboutSidebar({ active, setActive }) {
  return (
    <>
      <p style={{ fontSize: 11, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8, padding: '0 4px' }}>
        Favourites
      </p>
      {sections.map((s) => (
        <div
          key={s}
          className={`finder-sidebar-item ${active === s ? 'active' : ''}`}
          onClick={() => setActive(s)}
        >
          <span>{s === 'Profile' ? '👤' : s === 'Education' ? '🎓' : s === 'Achievements' ? '🏆' : '🎯'}</span>
          {s}
        </div>
      ))}
    </>
  );
}
