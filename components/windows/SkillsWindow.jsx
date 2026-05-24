'use client';
import { useState, useEffect } from 'react';

// skillicons.dev icons - using img tags
const ICON_URL = (icons) =>
  `https://skillicons.dev/icons?i=${icons.join(',')}&theme=dark`;

const CATS = [
  {
    label:'Languages', color:'#f59e0b',
    icons:['python','java','js','php','cpp'],
    extras:['SQL','C++'],
    skillicons:['python','java','js','php','cpp'],
  },
  {
    label:'Frontend', color:'#3b82f6',
    icons:['react','nextjs','html','css','redux'],
    extras:[],
    skillicons:['react','nextjs','html','css','redux'],
  },
  {
    label:'Backend', color:'#10b981',
    icons:['nodejs','express','laravel'],
    extras:['REST APIs'],
    skillicons:['nodejs','express','laravel'],
  },
  {
    label:'Databases', color:'#8b5cf6',
    icons:['mongodb','mysql','postgres'],
    extras:['FAISS','Delta Lake'],
    skillicons:['mongodb','mysql','postgres'],
  },
  {
    label:'Cloud & DevOps', color:'#0ea5e9',
    icons:['aws','docker','git','azure'],
    extras:['Power Automate','Databricks'],
    skillicons:['aws','docker','git','azure'],
  },
  {
    label:'AI & Data Eng', color:'#ec4899',
    icons:[],
    extras:['PySpark','LangChain','LangGraph','RAG','MLflow','Azure OpenAI'],
    skillicons:[],
  },
];

const TERMINAL = [
  {t:0,   cmd:true,  text:'soham@portfolio % python3 skills.py'},
  {t:400, cmd:false, text:'>>> Loading skill matrix...'},
  {t:900, cmd:false, text:'>>> Languages   : [Python, Java, JS, SQL, PHP, C++]'},
  {t:1200,cmd:false, text:'>>> AI/DE Stack : [PySpark, LangGraph, LangChain, RAG, MLflow]'},
  {t:1500,cmd:false, text:'>>> Cloud       : [AWS, Azure, Docker, Databricks]'},
  {t:1800,cmd:false, text:'>>> Status      : Open to Data Engineering roles 🚀'},
  {t:2100,cmd:true,  text:'soham@portfolio % _'},
];

export default function SkillsWindow() {
  const [vis, setVis] = useState(0);
  const [tab, setTab] = useState('skills');

  useEffect(() => {
    const ts = TERMINAL.map((l,i)=>setTimeout(()=>setVis(v=>Math.max(v,i+1)), l.t));
    return () => ts.forEach(clearTimeout);
  }, []);

  return (
    <div style={{display:'flex',flexDirection:'column',height:'100%',overflow:'hidden'}}>
      {/* Tab bar */}
      <div style={{
        display:'flex',gap:1,padding:'8px 16px 0',flexShrink:0,
        background:'rgba(0,0,0,0.2)',borderBottom:'1px solid var(--border)',
      }}>
        {[['skills','Skills Grid'],['terminal','Terminal']].map(([k,l])=>(
          <button key={k} onClick={()=>setTab(k)} style={{
            padding:'6px 16px',fontSize:13,border:'none',cursor:'pointer',fontFamily:'inherit',
            borderRadius:'6px 6px 0 0',
            background: tab===k ? 'var(--window-bg)' : 'transparent',
            color: tab===k ? 'var(--text)' : 'var(--text-tertiary)',
            borderBottom: tab===k ? '2px solid var(--accent)' : '2px solid transparent',
          }}>{l}</button>
        ))}
      </div>

      {tab==='terminal' ? (
        /* Terminal */
        <div className="term-bg" style={{flex:1,padding:'20px 24px',overflowY:'auto'}}>
          {TERMINAL.slice(0,vis).map((l,i)=>(
            <div key={i} className="term-line" style={{marginBottom:2}}>
              {l.cmd
                ? <span style={{color:'#30d158'}}>{l.text.replace('% _','% ')}<span className={i===vis-1&&l.text.endsWith('_')?'blink':''} style={{color:'#f5f5f7'}}>{l.text.endsWith('_')?'█':''}</span></span>
                : <span style={{color:'#a0aec0'}}>{l.text}</span>
              }
            </div>
          ))}
        </div>
      ) : (
        /* Skills grid */
        <div style={{flex:1,overflowY:'auto',padding:20}}>
          {/* skillicons.dev image strips */}
          <div style={{marginBottom:20,padding:16,background:'rgba(255,255,255,0.02)',border:'1px solid var(--border)',borderRadius:12}}>
            <p style={{fontSize:11,color:'var(--text-tertiary)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:12}}>
              Tech Stack Icons
            </p>
            <img
              src="https://skillicons.dev/icons?i=python,java,js,php,cpp,react,nextjs,html,css,nodejs,express,laravel,mongodb,mysql,postgres,aws,docker,git,azure,redux&perline=10"
              alt="Tech stack"
              style={{maxWidth:'100%',borderRadius:8}}
              onError={e=>{e.target.style.display='none';}}
            />
          </div>

          {/* Category breakdown */}
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
            {CATS.map(cat=>(
              <div key={cat.label} style={{
                background:'rgba(255,255,255,0.025)',border:'1px solid rgba(255,255,255,0.07)',
                borderRadius:12,padding:14,
              }}>
                <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:10}}>
                  <div style={{width:8,height:8,borderRadius:'50%',background:cat.color}}/>
                  <span style={{fontSize:11,fontWeight:700,color:'var(--text)',textTransform:'uppercase',letterSpacing:'0.07em'}}>
                    {cat.label}
                  </span>
                </div>
                <div style={{display:'flex',flexWrap:'wrap',gap:5}}>
                  {[...cat.icons, ...cat.extras].map(s=>(
                    <span key={s} style={{
                      fontSize:11,padding:'3px 9px',borderRadius:20,
                      background:`${cat.color}12`,border:`1px solid ${cat.color}28`,
                      color:cat.color,fontFamily:'SF Mono,monospace',
                    }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
