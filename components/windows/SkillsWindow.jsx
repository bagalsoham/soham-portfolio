'use client';
import { useState, useEffect } from 'react';

const SKILL_CATEGORIES = [
  {
    category: 'Languages',
    color: '#f59e0b',
    skills: ['Python', 'Java', 'JavaScript', 'SQL', 'PHP', 'C++'],
  },
  {
    category: 'Frontend',
    color: '#3b82f6',
    skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Redux Toolkit'],
  },
  {
    category: 'Backend',
    color: '#10b981',
    skills: ['Node.js', 'Express.js', 'Laravel', 'REST APIs'],
  },
  {
    category: 'Databases',
    color: '#8b5cf6',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'FAISS', 'Delta Lake'],
  },
  {
    category: 'Cloud & DevOps',
    color: '#0ea5e9',
    skills: ['AWS', 'Docker', 'Git', 'CI/CD', 'Databricks', 'Power Automate'],
  },
  {
    category: 'AI & Data Engineering',
    color: '#ec4899',
    skills: ['PySpark', 'LangChain', 'LangGraph', 'RAG', 'MLflow', 'Azure OpenAI'],
  },
];

const TERMINAL_LINES = [
  { delay: 0,   text: '$ whoami', type: 'cmd' },
  { delay: 300, text: 'soham_bagal', type: 'out' },
  { delay: 600, text: '$ cat skills.json', type: 'cmd' },
  { delay: 900, text: '{', type: 'out' },
  { delay: 1000, text: '  "role": "Data Engineer & Full Stack Developer",', type: 'out' },
  { delay: 1100, text: '  "experience": "2 Internships",', type: 'out' },
  { delay: 1200, text: '  "status": "Open to opportunities",', type: 'out' },
  { delay: 1300, text: '}', type: 'out' },
  { delay: 1600, text: '$ ls skills/', type: 'cmd' },
  { delay: 1900, text: 'languages/  frontend/  backend/  databases/  cloud/  ai-data/', type: 'out' },
  { delay: 2200, text: '$ echo "Ready to build scalable systems 🚀"', type: 'cmd' },
  { delay: 2500, text: 'Ready to build scalable systems 🚀', type: 'out' },
];

export default function SkillsWindow() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timers = TERMINAL_LINES.map((line, i) =>
      setTimeout(() => setVisibleLines((v) => Math.max(v, i + 1)), line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Terminal section */}
      <div
        className="terminal-bg"
        style={{ padding: '16px 20px', flexShrink: 0, borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="terminal-line" style={{ marginBottom: 2 }}>
            {line.type === 'cmd' ? (
              <span>
                <span style={{ color: '#30d158' }}>soham</span>
                <span style={{ color: '#98989d' }}>@</span>
                <span style={{ color: '#0ea5e9' }}>portfolio</span>
                <span style={{ color: '#98989d' }}> % </span>
                <span style={{ color: '#f5f5f7' }}>{line.text.replace('$ ', '')}</span>
              </span>
            ) : (
              <span style={{ color: '#a0aec0' }}>{line.text}</span>
            )}
          </div>
        ))}
        {visibleLines >= TERMINAL_LINES.length && (
          <div className="terminal-line" style={{ marginTop: 4 }}>
            <span style={{ color: '#30d158' }}>soham</span>
            <span style={{ color: '#98989d' }}>@</span>
            <span style={{ color: '#0ea5e9' }}>portfolio</span>
            <span style={{ color: '#98989d' }}> % </span>
            <span className="cursor-blink" style={{ color: '#f5f5f7' }}>█</span>
          </div>
        )}
      </div>

      {/* Skills grid */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
        <p style={{ fontSize: 12, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>
          Technical Skills
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.category}
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 12,
                padding: 14,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: cat.color, flexShrink: 0 }} />
                <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {cat.category}
                </span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="skill-badge"
                    style={{ borderColor: `${cat.color}33`, color: cat.color, background: `${cat.color}11` }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
