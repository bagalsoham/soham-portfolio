'use client';

const EXPERIENCE = [
  {
    company: 'Bajaj Finserv',
    role: 'Data Engineering Intern',
    duration: 'Feb 2026 – July 2026',
    location: 'Pune, Maharashtra',
    type: 'Current',
    color: '#0ea5e9',
    emoji: '🏦',
    bullets: [
      'Developed AI-driven diagnostic systems for resolving login and hierarchy-related issues using Python and SQL.',
      'Built data engineering pipelines using PySpark and PostgreSQL for incremental data synchronization to the data lake.',
      'Created Microsoft Power Automate flows for automatically sending Power BI reports via email.',
      'Built multi-agent AI pipeline (LangGraph + LangChain + Azure OpenAI) deployed via MLflow Model Serving.',
    ],
  },
  {
    company: 'Commonwealth',
    role: 'Software Development Intern',
    duration: 'Jan 2025 – May 2025',
    location: 'Remote',
    type: 'Completed',
    color: '#8b5cf6',
    emoji: '💻',
    bullets: [
      'Built a PDF query tool using Retrieval-Augmented Generation (RAG) with FAISS and Ollama.',
      'Implemented PDF parsing, vector indexing, and semantic search workflows.',
      'Worked with Agile development practices for iterative feature development.',
    ],
  },
];

export default function ExperienceWindow() {
  return (
    <div style={{ padding: '24px 28px', height: '100%', overflowY: 'auto' }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24 }}>Work Experience</h2>

      {/* Timeline */}
      <div style={{ position: 'relative', paddingLeft: 24 }}>
        {/* Vertical line */}
        <div style={{
          position: 'absolute', left: 4, top: 8, bottom: 8,
          width: 2, background: 'linear-gradient(to bottom, var(--accent), #8b5cf6)',
          borderRadius: 1,
        }} />

        {EXPERIENCE.map((exp, i) => (
          <div key={i} style={{ position: 'relative', marginBottom: 32 }}>
            {/* Timeline dot */}
            <div className="timeline-dot" style={{
              position: 'absolute', left: -20, top: 6,
              background: exp.color, boxShadow: `0 0 0 4px ${exp.color}20`,
            }} />

            {/* Card */}
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: `1px solid rgba(255,255,255,0.07)`,
              borderLeft: `3px solid ${exp.color}`,
              borderRadius: '0 12px 12px 0',
              padding: '16px 18px',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <span style={{ fontSize: 22 }}>{exp.emoji}</span>
                  <div>
                    <p style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)' }}>{exp.role}</p>
                    <p style={{ fontSize: 14, color: exp.color }}>{exp.company}</p>
                  </div>
                </div>
                <span style={{
                  fontSize: 11, padding: '3px 8px', borderRadius: 20,
                  background: exp.type === 'Current' ? 'rgba(14,165,233,0.15)' : 'rgba(255,255,255,0.05)',
                  color: exp.type === 'Current' ? 'var(--accent)' : 'var(--text-tertiary)',
                  border: `1px solid ${exp.type === 'Current' ? 'rgba(14,165,233,0.3)' : 'var(--border)'}`,
                  whiteSpace: 'nowrap',
                }}>
                  {exp.type}
                </span>
              </div>

              <div style={{ display: 'flex', gap: 16, marginBottom: 12 }}>
                <span style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>📅 {exp.duration}</span>
                <span style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>📍 {exp.location}</span>
              </div>

              <div style={{ borderTop: '1px solid var(--border)', paddingTop: 12 }}>
                {exp.bullets.map((b, bi) => (
                  <div key={bi} style={{ display: 'flex', gap: 8, marginBottom: 6, alignItems: 'flex-start' }}>
                    <span style={{ color: exp.color, flexShrink: 0, marginTop: 2 }}>▸</span>
                    <span style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mac-divider" style={{ marginTop: 8, marginBottom: 20 }} />

      {/* Education quick view */}
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Education</h2>
      <div style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid var(--border)',
        borderRadius: 12,
        padding: 16,
        display: 'flex',
        gap: 14,
        alignItems: 'center',
      }}>
        <span style={{ fontSize: 32 }}>🏛️</span>
        <div>
          <p style={{ fontSize: 15, fontWeight: 600 }}>B.Tech in Information Technology</p>
          <p style={{ fontSize: 13, color: 'var(--accent)', marginTop: 2 }}>KJ Somaiya School of Engineering (SVU), Mumbai</p>
          <div style={{ display: 'flex', gap: 16, marginTop: 4 }}>
            <span style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>2022 – Present</span>
            <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>⭐ CGPA: 7.9</span>
          </div>
        </div>
      </div>
    </div>
  );
}
