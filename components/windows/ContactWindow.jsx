'use client';
import { useState } from 'react';

const SOCIAL = [
  { label: 'Email', value: 'bagalsoham1717@gmail.com', href: 'mailto:bagalsoham1717@gmail.com', emoji: '✉️', color: '#0ea5e9' },
  { label: 'GitHub', value: 'github.com/SohamBagal', href: 'https://github.com/SohamBagal', emoji: '🐙', color: '#8b5cf6' },
  { label: 'LinkedIn', value: 'linkedin.com/in/soham-bagal', href: 'https://linkedin.com/in/soham-bagal', emoji: '💼', color: '#0a66c2' },
  { label: 'Phone', value: '+91 9967550047', href: 'tel:+919967550047', emoji: '📱', color: '#10b981' },
];

export default function ContactWindow() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      return;
    }
    // Replace this with your EmailJS / Resend integration
    // EmailJS example:
    // emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY')
    const mailto = `mailto:bagalsoham1717@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`;
    window.location.href = mailto;
    setStatus('sent');
  };

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      {/* Left panel - social links */}
      <div style={{
        width: 200, flexShrink: 0,
        background: 'rgba(0,0,0,0.2)',
        borderRight: '1px solid var(--border)',
        padding: '20px 14px',
      }}>
        <p style={{ fontSize: 11, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 14 }}>
          Reach Out
        </p>
        {SOCIAL.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none', display: 'block', marginBottom: 6 }}
          >
            <div style={{
              display: 'flex', gap: 8, alignItems: 'center', padding: '8px 10px', borderRadius: 8,
              background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)',
              transition: 'all 0.15s ease', cursor: 'pointer',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = s.color + '44'; e.currentTarget.style.background = s.color + '0d'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
            >
              <span style={{ fontSize: 16 }}>{s.emoji}</span>
              <div>
                <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--text)' }}>{s.label}</p>
                <p style={{ fontSize: 10, color: 'var(--text-tertiary)', marginTop: 1 }}>{s.value.slice(0, 20)}{s.value.length > 20 ? '…' : ''}</p>
              </div>
            </div>
          </a>
        ))}

        <div className="mac-divider" style={{ marginTop: 16 }} />

        <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 16, lineHeight: 1.6, padding: '0 2px' }}>
          Open to Data Engineering and Full Stack roles. Let's build something great!
        </p>
      </div>

      {/* Right panel - form */}
      <div style={{ flex: 1, padding: '20px 24px', overflowY: 'auto' }}>
        {/* Mail compose style header */}
        <div style={{ marginBottom: 20 }}>
          <p style={{ fontSize: 12, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 2 }}>
            New Message
          </p>
          <p style={{ fontSize: 11, color: 'var(--text-tertiary)' }}>To: bagalsoham1717@gmail.com</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <div>
              <label style={{ fontSize: 11, color: 'var(--text-tertiary)', display: 'block', marginBottom: 4 }}>From (Name)</label>
              <input
                className="mac-input"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <label style={{ fontSize: 11, color: 'var(--text-tertiary)', display: 'block', marginBottom: 4 }}>Email</label>
              <input
                className="mac-input"
                placeholder="your@email.com"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label style={{ fontSize: 11, color: 'var(--text-tertiary)', display: 'block', marginBottom: 4 }}>Subject</label>
            <input
              className="mac-input"
              placeholder="Subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
            />
          </div>

          <div>
            <label style={{ fontSize: 11, color: 'var(--text-tertiary)', display: 'block', marginBottom: 4 }}>Message</label>
            <textarea
              className="mac-input"
              placeholder="Your message..."
              rows={7}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              style={{ resize: 'vertical', minHeight: 130 }}
            />
          </div>

          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <button className="mac-btn" onClick={handleSubmit}>
              ✉️ Send Message
            </button>
            {status === 'sent' && (
              <span style={{ fontSize: 13, color: 'var(--green)' }}>✓ Opening mail client...</span>
            )}
            {status === 'error' && (
              <span style={{ fontSize: 13, color: 'var(--red)' }}>Please fill all required fields.</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
