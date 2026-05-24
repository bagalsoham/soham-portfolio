'use client';
import { useState } from 'react';

const PROJECTS = [
  {
    id:1, emoji:'🤖',
    title:'AI-Powered IT Support Agent',
    subtitle:'Bajaj SalesOne · Bajaj Finserv',
    desc:'Multi-agent AI system automating login and hierarchy issue diagnosis for Bajaj SalesOne. Built with LangGraph orchestration, Azure OpenAI, Databricks SQL, and MLflow Model Serving.',
    tech:['Python','LangGraph','LangChain','Azure OpenAI','Databricks','MLflow','SQL'],
    highlights:[
      'Multi-agent orchestration — ticket validation, SQL execution, issue analysis',
      'Azure OpenAI for extracting/validating ticket details from queries',
      'Deployed via MLflow Model Serving with REST API',
      'Reduced diagnosis time from manual hours to seconds',
    ],
    color:'#0ea5e9',
    gradient:'linear-gradient(135deg,#0ea5e920,#6366f110)',
    github:null, live:null,
  },
  {
    id:2, emoji:'🔗',
    title:'Automated Data Lineage',
    subtitle:'Power BI · Bajaj Finserv',
    desc:'Data lineage system tracing Power BI report dependencies to source tables/columns using BFS traversal in PySpark across multiple Databricks workspaces.',
    tech:['PySpark','Databricks SQL','Delta Lake'],
    highlights:[
      'BFS-based traversal across multiple Power BI workspaces',
      'Delta tables for optimized incremental processing',
      'Validation checks ensuring accurate lineage tracking',
    ],
    color:'#8b5cf6',
    gradient:'linear-gradient(135deg,#8b5cf620,#ec489910)',
    github:null, live:null,
  },
  {
    id:3, emoji:'📊',
    title:'MIS Report Automation Framework',
    subtitle:'Registry-Driven Pipeline · Bajaj Finserv',
    desc:'Registry-driven framework that cut report onboarding from 2–3 days to under 30 minutes. Enables 9+ automated MIS reports with metadata-driven templates and Power Automate email delivery.',
    tech:['Python','PySpark','Databricks','Delta Lake','Power Automate'],
    highlights:[
      '95%+ reduction in onboarding time (days → 30 min)',
      '9+ automated MIS reports across business verticals',
      'Multi-agent pipeline: orchestration, SQL gen, KPI compute, validation',
      'Power Automate integration for scheduled stakeholder reporting',
    ],
    color:'#10b981',
    gradient:'linear-gradient(135deg,#10b98120,#0ea5e910)',
    github:null, live:null,
  },
  {
    id:4, emoji:'🌿',
    title:'MergeBase',
    subtitle:'Git-Inspired Version Control System',
    desc:'Git-inspired VCS with branching, repository management, and collaboration. CLI built with Yargs (init, add, commit, push, pull). Storage via MongoDB + AWS.',
    tech:['Node.js','Express.js','MongoDB','React','AWS'],
    highlights:[
      'Full CLI: init, add, commit, push, pull using Yargs',
      'Branching and repository management',
      'Cloud storage via MongoDB + AWS S3',
      'Collaboration features for team workflows',
    ],
    color:'#f59e0b',
    gradient:'linear-gradient(135deg,#f59e0b20,#ef444410)',
    github:'https://github.com/bagalsoham', live:null,
  },
  {
    id:5, emoji:'📚',
    title:'LMS Platform',
    subtitle:'Learning Management System',
    desc:'Multi-role LMS for students, instructors, and admins. Full auth, course management, Stripe & PayPal payment integration, progress dashboards.',
    tech:['Laravel','PHP','MySQL','Stripe','PayPal'],
    highlights:[
      'Multi-role: Student, Instructor, Admin portals',
      'Stripe & PayPal payment gateway integration',
      'Progress tracking dashboards with course analytics',
      'Authentication with role-based access control',
    ],
    color:'#ec4899',
    gradient:'linear-gradient(135deg,#ec489920,#8b5cf610)',
    github:'https://github.com/bagalsoham', live:null,
  },
];

export default function ProjectsWindow() {
  const [sel, setSel] = useState(null);

  if (sel !== null) {
    const p = PROJECTS[sel];
    return (
      <div style={{height:'100%',overflowY:'auto',padding:24}}>
        <button onClick={()=>setSel(null)} style={{
          background:'none',border:'none',color:'var(--accent)',
          fontSize:13,cursor:'pointer',display:'flex',alignItems:'center',gap:4,marginBottom:20,fontFamily:'inherit',
        }}>← Back to All Projects</button>

        {/* Header */}
        <div style={{
          padding:20,borderRadius:14,marginBottom:20,
          background:p.gradient,border:`1px solid ${p.color}30`,
        }}>
          <div style={{display:'flex',gap:14,alignItems:'center'}}>
            <div style={{
              width:56,height:56,borderRadius:14,fontSize:26,
              background:`${p.color}20`,border:`1px solid ${p.color}40`,
              display:'flex',alignItems:'center',justifyContent:'center',
            }}>{p.emoji}</div>
            <div>
              <h1 style={{fontSize:20,fontWeight:700}}>{p.title}</h1>
              <p style={{fontSize:13,color:p.color,marginTop:3}}>{p.subtitle}</p>
            </div>
          </div>
        </div>

        <p style={{fontSize:14,color:'var(--text-secondary)',lineHeight:1.8,marginBottom:20}}>{p.desc}</p>

        <div className="mac-div"/>

        <h3 style={{fontSize:12,color:'var(--text-tertiary)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:12,marginTop:16}}>
          Key Highlights
        </h3>
        {p.highlights.map((h,i)=>(
          <div key={i} style={{display:'flex',gap:8,marginBottom:7,alignItems:'flex-start'}}>
            <span style={{color:p.color,flexShrink:0,marginTop:2}}>▸</span>
            <span style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.7}}>{h}</span>
          </div>
        ))}

        <h3 style={{fontSize:12,color:'var(--text-tertiary)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:12,marginTop:20}}>
          Tech Stack
        </h3>
        <div style={{display:'flex',flexWrap:'wrap',gap:7}}>
          {p.tech.map(t=>(
            <span key={t} style={{
              fontSize:12,padding:'4px 12px',borderRadius:20,
              background:`${p.color}12`,border:`1px solid ${p.color}30`,
              color:p.color,fontFamily:'SF Mono,monospace',
            }}>{t}</span>
          ))}
        </div>

        {p.github&&(
          <div style={{marginTop:20}}>
            <a href={p.github} target="_blank" rel="noreferrer">
              <button className="mac-btn" style={{background:'rgba(255,255,255,0.07)',color:'var(--text)',border:'1px solid var(--border)'}}>
                🐙 View on GitHub
              </button>
            </a>
          </div>
        )}
      </div>
    );
  }

  return (
    <div style={{height:'100%',overflowY:'auto',padding:20}}>
      <p style={{fontSize:11,color:'var(--text-tertiary)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:14}}>
        {PROJECTS.length} Projects — click to expand
      </p>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
        {PROJECTS.map((p,i)=>(
          <div key={p.id} className="proj-card" onClick={()=>setSel(i)}>
            {/* Card header gradient strip */}
            <div style={{
              height:4,borderRadius:'4px 4px 0 0',
              background:`linear-gradient(90deg,${p.color},${p.color}50)`,
              margin:'-16px -16px 12px -16px',
            }}/>
            <div style={{display:'flex',gap:10,alignItems:'flex-start',marginBottom:10}}>
              <div style={{
                width:38,height:38,borderRadius:10,fontSize:18,flexShrink:0,
                background:`${p.color}18`,border:`1px solid ${p.color}28`,
                display:'flex',alignItems:'center',justifyContent:'center',
              }}>{p.emoji}</div>
              <div>
                <p style={{fontSize:13,fontWeight:600,lineHeight:1.3,color:'var(--text)'}}>{p.title}</p>
                <p style={{fontSize:11,color:p.color,marginTop:2}}>{p.subtitle.split('·')[0]}</p>
              </div>
            </div>
            <p style={{fontSize:12,color:'var(--text-secondary)',lineHeight:1.6,marginBottom:10}}>
              {p.desc.slice(0,90)}...
            </p>
            <div style={{display:'flex',flexWrap:'wrap',gap:4}}>
              {p.tech.slice(0,3).map(t=>(
                <span key={t} style={{
                  fontSize:10,padding:'2px 7px',borderRadius:10,
                  background:'rgba(255,255,255,0.04)',border:'1px solid var(--border)',
                  color:'var(--text-tertiary)',fontFamily:'monospace',
                }}>{t}</span>
              ))}
              {p.tech.length>3&&<span style={{fontSize:10,color:'var(--text-tertiary)',padding:'2px 4px'}}>+{p.tech.length-3}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
