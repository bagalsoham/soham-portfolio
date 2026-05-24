'use client';
import { useState } from 'react';

const PROJECTS = [
  {
    id: 1,
    title: 'AI-Powered IT Support Agent',
    subtitle: 'Bajaj SalesOne',
    description:
      'Multi-agent AI system to automate login issue and hierarchy issue diagnosis for Bajaj SalesOne application. Built workflow orchestration using LangGraph with separate agents for ticket validation, SQL execution, and issue analysis.',
    tech: ['Python', 'LangGraph', 'LangChain', 'Azure OpenAI', 'Databricks', 'MLflow'],
    color: '#0ea5e9',
    emoji: '🤖',
    highlights: [
      'Multi-agent orchestration with LangGraph',
      'SQL-based root cause analysis via Databricks',
      'Deployed via MLflow Model Serving with REST API',
    ],
    github: '#',
    live: '#',
  },
  {
    id: 2,
    title: 'Automated Data Lineage',
    subtitle: 'Power BI Dependency Tracker',
    description:
      'Data lineage system to trace Power BI report dependencies back to source tables and columns. Implements BFS-based traversal in PySpark for lineage discovery across multiple workspaces.',
    tech: ['PySpark', 'Databricks SQL', 'Delta Lake'],
    color: '#8b5cf6',
    emoji: '🔗',
    highlights: [
      'BFS traversal across multiple workspaces',
      'Delta tables for optimized processing',
      'Validation checks for accurate lineage',
    ],
    github: '#',
    live: '#',
  },
  {
    id: 3,
    title: 'MIS Report Automation Framework',
    subtitle: 'Registry-Driven Pipeline',
    description:
      'Registry-driven MIS automation framework reducing report onboarding from 2–3 days to under 30 minutes. Enables 9+ automated MIS reports across business verticals with configurable metadata-driven templates.',
    tech: ['Python', 'PySpark', 'Databricks', 'Delta Lake', 'Power Automate'],
    color: '#10b981',
    emoji: '📊',
    highlights: [
      'Reduced onboarding time by 95%+ (2–3 days → 30 min)',
      '9+ automated MIS reports across verticals',
      'Multi-agent pipeline for orchestration & validation',
    ],
    github: '#',
    live: '#',
  },
  {
    id: 4,
    title: 'MergeBase',
    subtitle: 'Git-Inspired Version Control System',
    description:
      'Git-inspired version control system with branching, repository management, and collaboration features. Built CLI commands (init, add, commit, push, pull) using Yargs with MongoDB and AWS storage.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'React', 'AWS'],
    color: '#f59e0b',
    emoji: '🌿',
    highlights: [
      'Full CLI: init, add, commit, push, pull',
      'Branching and repository management',
      'Cloud storage via MongoDB + AWS',
    ],
    github: 'https://github.com/SohamBagal',
    live: '#',
  },
  {
    id: 5,
    title: 'LMS Platform',
    subtitle: 'Learning Management System',
    description:
      'Multi-role learning management system for students, instructors, and administrators. Features authentication, course management, and payment integration with Stripe and PayPal.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Stripe', 'PayPal'],
    color: '#ec4899',
    emoji: '📚',
    highlights: [
      'Multi-role: Student, Instructor, Admin',
      'Stripe & PayPal payment integration',
      'Student progress dashboards',
    ],
    github: 'https://github.com/SohamBagal',
    live: '#',
  },
];

export default function ProjectsWindow() {
  const [selected, setSelected] = useState(null);

  if (selected !== null) {
    const p = PROJECTS[selected];
    return (
      <div style={{ padding: 24, height: '100%', overflowY: 'auto' }}>
        <button
          onClick={() => setSelected(null)}
          style={{
            display: 'flex', alignItems: 'center', gap: 6,
            color: 'var(--accent)', fontSize: 13, background: 'none',
            border: 'none', cursor: 'pointer', marginBottom: 20,
          }}
        >
          ← Back to Projects
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
          <div style={{
            width: 56, height: 56, borderRadius: 14, fontSize: 28,
            background: `${p.color}22`, border: `1px solid ${p.color}33`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {p.emoji}
          </div>
          <div>
            <h1 style={{ fontSize: 20, fontWeight: 700 }}>{p.title}</h1>
            <p style={{ fontSize: 13, color: p.color }}>{p.subtitle}</p>
          </div>
        </div>

        <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 20 }}>{p.description}</p>

        <div className="mac-divider" />

        <div style={{ marginTop: 16, marginBottom: 20 }}>
          <h3 style={{ fontSize: 12, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>
            Key Highlights
          </h3>
          {p.highlights.map((h, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 6, alignItems: 'flex-start' }}>
              <span style={{ color: p.color, marginTop: 1 }}>▸</span>
              <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{h}</span>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: 20 }}>
          <h3 style={{ fontSize: 12, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>
            Tech Stack
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {p.tech.map((t) => (
              <span key={t} className="skill-badge" style={{ borderColor: `${p.color}33`, color: p.color, background: `${p.color}11` }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          {p.github !== '#' && (
            <a href={p.github} target="_blank" rel="noreferrer">
              <button className="mac-btn" style={{ background: 'rgba(255,255,255,0.08)', color: 'var(--text)', border: '1px solid var(--border)' }}>
                🐙 GitHub
              </button>
            </a>
          )}
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: 20, height: '100%', overflowY: 'auto' }}>
      <p style={{ fontSize: 12, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>
        {PROJECTS.length} Projects
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {PROJECTS.map((p, i) => (
          <div
            key={p.id}
            className="project-card"
            onClick={() => setSelected(i)}
            style={{ borderColor: selected === i ? p.color : undefined }}
          >
            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10, fontSize: 20, flexShrink: 0,
                background: `${p.color}1a`, border: `1px solid ${p.color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {p.emoji}
              </div>
              <div>
                <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', lineHeight: 1.3 }}>{p.title}</p>
                <p style={{ fontSize: 11, color: p.color, marginTop: 2 }}>{p.subtitle}</p>
              </div>
            </div>
            <p style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 10 }}>
              {p.description.slice(0, 100)}...
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
              {p.tech.slice(0, 3).map((t) => (
                <span key={t} style={{ fontSize: 10, color: 'var(--text-tertiary)', background: 'rgba(255,255,255,0.04)', padding: '2px 7px', borderRadius: 10, border: '1px solid var(--border)' }}>
                  {t}
                </span>
              ))}
              {p.tech.length > 3 && (
                <span style={{ fontSize: 10, color: 'var(--text-tertiary)', padding: '2px 6px' }}>+{p.tech.length - 3} more</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
