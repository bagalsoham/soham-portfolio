'use client';

const EXP = [
  {
    company:'Bajaj Finserv',
    logo:'🏦',
    role:'Data Engineering Intern',
    type:'Current',
    dur:'Feb 2026 – July 2026',
    loc:'Pune, Maharashtra',
    color:'#0ea5e9',
    stack:['Python','PySpark','PostgreSQL','LangGraph','Azure OpenAI','Databricks','MLflow','Power Automate'],
    bullets:[
      'Developed AI-driven diagnostic systems for resolving login and hierarchy issues using Python and SQL.',
      'Built data engineering pipelines using PySpark and PostgreSQL for incremental data synchronization to the data lake.',
      'Created Microsoft Power Automate flows for automatically sending Power BI reports via email.',
      'Built AI-Powered IT Support Agent using LangGraph, LangChain, Azure OpenAI — deployed via MLflow REST API.',
      'Built MIS Report Automation Framework reducing onboarding from 2–3 days to under 30 minutes.',
    ],
  },
  {
    company:'Commonwealth',
    logo:'💻',
    role:'Software Development Intern',
    type:'Completed',
    dur:'Jan 2025 – May 2025',
    loc:'Remote',
    color:'#8b5cf6',
    stack:['Python','RAG','FAISS','Ollama','LangChain'],
    bullets:[
      'Built a PDF query tool using Retrieval-Augmented Generation (RAG) with FAISS and Ollama.',
      'Implemented PDF parsing, vector indexing, and semantic search workflows.',
      'Worked with Agile development practices for iterative feature development.',
    ],
  },
];

export default function ExperienceWindow() {
  return (
    <div style={{height:'100%',overflowY:'auto',padding:'24px 28px'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:24}}>
        <h2 style={{fontSize:18,fontWeight:700}}>Work Experience</h2>
        <span style={{
          fontSize:11,padding:'4px 10px',borderRadius:20,
          background:'rgba(14,165,233,0.12)',color:'var(--accent)',
          border:'1px solid rgba(14,165,233,0.25)',
        }}>2 Internships</span>
      </div>

      {/* Timeline */}
      <div style={{position:'relative',paddingLeft:28}}>
        <div style={{
          position:'absolute',left:5,top:10,bottom:10,width:2,
          background:'linear-gradient(to bottom,#0ea5e9,#8b5cf6)',borderRadius:1,
        }}/>

        {EXP.map((e,i)=>(
          <div key={i} style={{position:'relative',marginBottom:28}}>
            {/* Timeline dot */}
            <div style={{
              position:'absolute',left:-23,top:18,
              width:12,height:12,borderRadius:'50%',
              background:e.color,
              boxShadow:`0 0 0 4px ${e.color}20,0 0 0 1px ${e.color}`,
            }}/>

            {/* Card */}
            <div style={{
              background:'rgba(255,255,255,0.025)',
              border:`1px solid rgba(255,255,255,0.07)`,
              borderLeft:`3px solid ${e.color}`,
              borderRadius:'0 14px 14px 0',
              padding:'18px 20px',
            }}>
              {/* Header */}
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:10}}>
                <div style={{display:'flex',gap:12,alignItems:'center'}}>
                  <div style={{
                    width:44,height:44,borderRadius:12,fontSize:22,
                    background:`${e.color}18`,border:`1px solid ${e.color}28`,
                    display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,
                  }}>{e.logo}</div>
                  <div>
                    <p style={{fontSize:16,fontWeight:700}}>{e.role}</p>
                    <p style={{fontSize:14,color:e.color,fontWeight:500}}>{e.company}</p>
                  </div>
                </div>
                <span style={{
                  fontSize:10,padding:'3px 8px',borderRadius:20,flexShrink:0,
                  background: e.type==='Current'?'rgba(14,165,233,0.12)':'rgba(255,255,255,0.04)',
                  color: e.type==='Current'?'var(--accent)':'var(--text-tertiary)',
                  border:`1px solid ${e.type==='Current'?'rgba(14,165,233,0.3)':'var(--border)'}`,
                }}>{e.type}</span>
              </div>

              {/* Meta */}
              <div style={{display:'flex',gap:16,marginBottom:12}}>
                <span style={{fontSize:12,color:'var(--text-tertiary)'}}>📅 {e.dur}</span>
                <span style={{fontSize:12,color:'var(--text-tertiary)'}}>📍 {e.loc}</span>
              </div>

              {/* Tech used */}
              <div style={{display:'flex',flexWrap:'wrap',gap:5,marginBottom:14}}>
                {e.stack.map(t=>(
                  <span key={t} style={{
                    fontSize:10,padding:'2px 8px',borderRadius:10,
                    background:`${e.color}0f`,border:`1px solid ${e.color}25`,
                    color:e.color,fontFamily:'SF Mono,monospace',
                  }}>{t}</span>
                ))}
              </div>

              {/* Bullets */}
              <div style={{borderTop:'1px solid var(--border)',paddingTop:12}}>
                {e.bullets.map((b,bi)=>(
                  <div key={bi} style={{display:'flex',gap:8,marginBottom:6,alignItems:'flex-start'}}>
                    <span style={{color:e.color,flexShrink:0,marginTop:3,fontSize:10}}>▸</span>
                    <span style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.7}}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mac-div" style={{marginTop:4}}/>

      {/* Education quick */}
      <h2 style={{fontSize:18,fontWeight:700,margin:'16px 0 14px'}}>Education</h2>
      <div style={{
        display:'flex',gap:14,alignItems:'center',
        background:'rgba(255,255,255,0.03)',border:'1px solid var(--border)',
        borderRadius:14,padding:16,
      }}>
        <span style={{fontSize:36}}>🏛️</span>
        <div>
          <p style={{fontSize:15,fontWeight:700}}>B.Tech in Information Technology</p>
          <p style={{fontSize:13,color:'var(--accent)',marginTop:3}}>KJ Somaiya School of Engineering (SVU), Vidyavihar · Mumbai</p>
          <div style={{display:'flex',gap:16,marginTop:5}}>
            <span style={{fontSize:12,color:'var(--text-tertiary)'}}>2022 – Present</span>
            <span style={{fontSize:12,color:'var(--text-secondary)',fontWeight:600}}>⭐ CGPA: 7.9 / 10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
