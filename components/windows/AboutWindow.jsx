'use client';
import { useState } from 'react';

const SECTIONS = [
  { id:'profile',  label:'Profile',      emoji:'🧑‍💻' },
  { id:'edu',      label:'Education',    emoji:'🎓' },
  { id:'achieve',  label:'Achievements', emoji:'🏆' },
  { id:'misc',     label:'Misc',         emoji:'🎯' },
];

export default function AboutWindow() {
  const [active, setActive] = useState('profile');

  const content = {
    profile: (
      <div style={{padding:'28px 32px',overflowY:'auto',height:'100%'}}>
        {/* Hero */}
        <div style={{display:'flex',alignItems:'center',gap:20,marginBottom:28}}>
          <div style={{
            width:84,height:84,borderRadius:'50%',flexShrink:0,
            background:'linear-gradient(135deg,#0ea5e9 0%,#6366f1 100%)',
            display:'flex',alignItems:'center',justifyContent:'center',fontSize:36,
            boxShadow:'0 0 0 3px rgba(14,165,233,0.3),0 8px 24px rgba(14,165,233,0.2)',
          }}>
            {/* REPLACE: <img src="/avatar.jpg" style={{width:'100%',height:'100%',borderRadius:'50%',objectFit:'cover'}}/> */}
            🧑‍💻
          </div>
          <div>
            <h1 style={{fontSize:24,fontWeight:700,letterSpacing:-0.5}}>Soham Mahendra Bagal</h1>
            <p style={{fontSize:14,color:'var(--accent)',marginTop:3,fontWeight:500}}>
              Data Engineer &amp; Full Stack Developer
            </p>
            <div style={{display:'flex',gap:12,marginTop:6,flexWrap:'wrap'}}>
              {['📍 Mumbai','🎓 KJ Somaiya','📅 2022–Present'].map(t=>(
                <span key={t} style={{fontSize:12,color:'var(--text-tertiary)'}}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* GitHub contrib strip */}
        <div style={{marginBottom:20}}>
          <img
            src="https://github-readme-stats.vercel.app/api?username=bagalsoham&show_icons=true&theme=dark&bg_color=00000000&hide_border=true&text_color=ababab&title_color=0ea5e9&icon_color=0ea5e9"
            alt="GitHub Stats"
            style={{maxWidth:'100%',borderRadius:10}}
            onError={e=>e.target.style.display='none'}
          />
        </div>

        <div className="mac-div"/>

        {/* Bio */}
        <p style={{fontSize:14,color:'var(--text-secondary)',lineHeight:1.8,marginBottom:20}}>
          B.Tech IT student building <strong style={{color:'var(--accent)'}}>data pipelines, AI agents, and full-stack apps</strong>.
          Currently Data Engineering Intern at <strong style={{color:'var(--text)'}}>Bajaj Finserv</strong> — working with
          PySpark, Azure OpenAI, LangGraph, and Databricks. Previously built a RAG-based PDF query tool at Commonwealth.
          Won the <strong style={{color:'var(--yellow)'}}>U.S. Consulate Climate Hackathon</strong> 🏆.
        </p>

        {/* Stats row */}
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:10,marginBottom:20}}>
          {[{v:'7.9',l:'CGPA'},{v:'2',l:'Internships'},{v:'5+',l:'Projects'},{v:'3+',l:'Years Coding'}].map(s=>(
            <div key={s.l} style={{
              background:'rgba(255,255,255,0.03)',border:'1px solid var(--border)',
              borderRadius:10,padding:'12px 8px',textAlign:'center',
            }}>
              <div style={{fontSize:22,fontWeight:700,color:'var(--accent)'}}>{s.v}</div>
              <div style={{fontSize:10,color:'var(--text-tertiary)',marginTop:2,textTransform:'uppercase',letterSpacing:'0.06em'}}>{s.l}</div>
            </div>
          ))}
        </div>

        <div className="mac-div"/>

        {/* Contact */}
        <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
          {[
            {emoji:'✉️',label:'bagalsoham1717@gmail.com',href:'mailto:bagalsoham1717@gmail.com'},
            {emoji:'📱',label:'+91 9967550047',href:'tel:+919967550047'},
            {emoji:'🐙',label:'bagalsoham',href:'https://github.com/bagalsoham'},
            {emoji:'💼',label:'LinkedIn',href:'https://linkedin.com/in/soham-bagal'},
          ].map(c=>(
            <a key={c.label} href={c.href} target="_blank" rel="noreferrer" style={{textDecoration:'none'}}>
              <div style={{
                display:'flex',gap:6,alignItems:'center',
                background:'rgba(255,255,255,0.04)',border:'1px solid var(--border)',
                borderRadius:8,padding:'6px 12px',fontSize:12,color:'var(--text-secondary)',
                cursor:'pointer',transition:'all 0.15s',
              }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(14,165,233,0.4)';e.currentTarget.style.color='var(--accent)';}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.color='var(--text-secondary)';}}
              >
                <span>{c.emoji}</span><span>{c.label}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    ),

    edu: (
      <div style={{padding:'24px 28px',overflowY:'auto',height:'100%'}}>
        <h2 style={{fontSize:18,fontWeight:700,marginBottom:20}}>Education</h2>
        {[
          {icon:'🏛️',deg:'B.Tech — Information Technology',inst:'KJ Somaiya School of Engineering (SVU), Mumbai',dur:'2022 – Present',grade:'CGPA: 7.9 / 10',color:'#0ea5e9'},
          {icon:'📚',deg:'HSC — Science Stream',inst:'BH Chate Junior College, Pune',dur:'2020 – 2022',grade:'86.5%',color:'#8b5cf6'},
          {icon:'🏫',deg:'SSC',inst:"St. John's High School, Mumbai",dur:'Till 2020',grade:'91.2%',color:'#10b981'},
        ].map((e,i)=>(
          <div key={i} style={{
            display:'flex',gap:14,marginBottom:14,
            background:'rgba(255,255,255,0.03)',border:`1px solid ${e.color}22`,
            borderLeft:`3px solid ${e.color}`,borderRadius:'0 12px 12px 0',padding:16,
          }}>
            <span style={{fontSize:30}}>{e.icon}</span>
            <div>
              <p style={{fontSize:15,fontWeight:600}}>{e.deg}</p>
              <p style={{fontSize:13,color:e.color,marginTop:2}}>{e.inst}</p>
              <div style={{display:'flex',gap:16,marginTop:5}}>
                <span style={{fontSize:12,color:'var(--text-tertiary)'}}>{e.dur}</span>
                <span style={{fontSize:12,color:'var(--text-secondary)',fontWeight:500}}>⭐ {e.grade}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    ),

    achieve: (
      <div style={{padding:'24px 28px',overflowY:'auto',height:'100%'}}>
        <h2 style={{fontSize:18,fontWeight:700,marginBottom:20}}>Achievements & Certs</h2>
        {[
          {emoji:'🏆',title:'Climate Hackathon Winner',sub:'U.S. Consulate',desc:'Built a CNN-based temperature measurement system and Flask–React app for NO2 pollution prediction.',color:'#f59e0b'},
          {emoji:'🏏',title:'Inter-Department Cricket Tournament',sub:'KJ Somaiya SOE',desc:'Won the inter-department cricket championship at college.',color:'#10b981'},
          {emoji:'📜',title:'Secure & Sustainable Web Development',sub:'5-Day Certification Program',desc:'Completed intensive training in secure, sustainable web development practices.',color:'#8b5cf6'},
        ].map((a,i)=>(
          <div key={i} style={{
            background:'rgba(255,255,255,0.03)',border:`1px solid ${a.color}22`,
            borderRadius:12,padding:16,marginBottom:12,
          }}>
            <div style={{display:'flex',gap:10,alignItems:'center',marginBottom:6}}>
              <span style={{fontSize:24}}>{a.emoji}</span>
              <div>
                <p style={{fontSize:14,fontWeight:600}}>{a.title}</p>
                <p style={{fontSize:12,color:a.color}}>{a.sub}</p>
              </div>
            </div>
            <p style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.7}}>{a.desc}</p>
          </div>
        ))}
      </div>
    ),

    misc: (
      <div style={{padding:'24px 28px',overflowY:'auto',height:'100%'}}>
        <h2 style={{fontSize:18,fontWeight:700,marginBottom:20}}>Interests & Languages</h2>

        <div style={{marginBottom:24}}>
          <p style={{fontSize:12,color:'var(--text-tertiary)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:12}}>
            Professional Interests
          </p>
          <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
            {['🔧 Data Engineering','💻 Full Stack Dev','🤖 AI/ML Systems','☁️ Cloud Architecture','🏏 Cricket'].map(i=>(
              <span key={i} style={{
                padding:'8px 14px',borderRadius:20,
                background:'rgba(14,165,233,0.08)',border:'1px solid rgba(14,165,233,0.2)',
                color:'var(--accent)',fontSize:13,
              }}>{i}</span>
            ))}
          </div>
        </div>

        <div className="mac-div"/>

        <div style={{marginTop:16}}>
          <p style={{fontSize:12,color:'var(--text-tertiary)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:12}}>
            Languages
          </p>
          {['🇬🇧 English','🇮🇳 Hindi','🪔 Marathi'].map(l=>(
            <div key={l} style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:10}}>
              <span style={{fontSize:14,color:'var(--text-secondary)'}}>{l}</span>
              <span style={{fontSize:12,color:'var(--text-tertiary)',background:'rgba(255,255,255,0.05)',padding:'2px 10px',borderRadius:20}}>Fluent</span>
            </div>
          ))}
        </div>
      </div>
    ),
  };

  return (
    <div style={{display:'flex',height:'100%',overflow:'hidden'}}>
      {/* Sidebar */}
      <div className="sidebar" style={{width:170,padding:'12px 8px',flexShrink:0,overflowY:'auto'}}>
        <p style={{fontSize:10,color:'var(--text-tertiary)',textTransform:'uppercase',letterSpacing:'0.09em',marginBottom:8,padding:'0 6px'}}>
          Favourites
        </p>
        {SECTIONS.map(s=>(
          <div key={s.id} className={`sb-item ${active===s.id?'active':''}`} onClick={()=>setActive(s.id)}>
            <span>{s.emoji}</span><span>{s.label}</span>
          </div>
        ))}
        <div className="mac-div"/>
        <p style={{fontSize:10,color:'var(--text-tertiary)',textTransform:'uppercase',letterSpacing:'0.09em',marginBottom:8,padding:'0 6px'}}>
          Locations
        </p>
        {[
          {e:'🐙',l:'GitHub',href:'https://github.com/bagalsoham'},
          {e:'💼',l:'LinkedIn',href:'https://linkedin.com/in/soham-bagal'},
        ].map(l=>(
          <a key={l.l} href={l.href} target="_blank" rel="noreferrer" style={{textDecoration:'none'}}>
            <div className="sb-item"><span>{l.e}</span><span>{l.l}</span></div>
          </a>
        ))}
      </div>

      {/* Content pane */}
      <div style={{flex:1,overflow:'hidden',display:'flex',flexDirection:'column'}}>
        {/* Breadcrumb toolbar */}
        <div style={{
          height:36,background:'rgba(0,0,0,0.15)',borderBottom:'1px solid var(--border)',
          display:'flex',alignItems:'center',padding:'0 16px',gap:6,flexShrink:0,
        }}>
          <span style={{fontSize:12,color:'var(--text-tertiary)'}}>soham.bagal</span>
          <span style={{fontSize:12,color:'var(--text-tertiary)'}}>›</span>
          <span style={{fontSize:12,color:'var(--text)'}}>{SECTIONS.find(s=>s.id===active)?.label}</span>
        </div>
        {/* Content */}
        <div style={{flex:1,overflow:'hidden'}}>
          {content[active]}
        </div>
      </div>
    </div>
  );
}
