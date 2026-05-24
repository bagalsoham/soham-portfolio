'use client';
import { useState, useCallback, useEffect } from 'react';
import MenuBar from './MenuBar';
import Dock from './Dock';
import MacWindow from './MacWindow';
import AboutWindow from './windows/AboutWindow';
import SkillsWindow from './windows/SkillsWindow';
import ProjectsWindow from './windows/ProjectsWindow';
import ExperienceWindow from './windows/ExperienceWindow';
import ContactWindow from './windows/ContactWindow';

const DEFAULTS = [
  { id:'about',      title:'About Soham',            icon:'🧑‍💻', x:60,  y:50,  w:760, h:550 },
  { id:'skills',     title:'Terminal — Skills',       icon:'⌨️',  x:120, y:80,  w:700, h:520 },
  { id:'projects',   title:'Projects',                icon:'🚀',  x:90,  y:60,  w:820, h:570 },
  { id:'experience', title:'Experience & Education',  icon:'💼',  x:80,  y:55,  w:760, h:560 },
  { id:'contact',    title:'Contact — Soham Bagal',  icon:'✉️',  x:140, y:90,  w:680, h:490 },
];

const CONTENT = {
  about:<AboutWindow/>, skills:<SkillsWindow/>,
  projects:<ProjectsWindow/>, experience:<ExperienceWindow/>,
  contact:<ContactWindow/>,
};

let Z = 20;

function makeWin(d) {
  return { ...d, width:d.w, height:d.h, isOpen:false, isMinimized:false, isMaximized:false, zIndex:10 };
}

// Desktop shortcut icons
const DESKTOP_ICONS = [
  { id:'about',      emoji:'🧑‍💻', label:'About Me' },
  { id:'projects',   emoji:'🚀',  label:'Projects' },
  { id:'skills',     emoji:'⌨️',  label:'Skills' },
  { id:'experience', emoji:'💼',  label:'Experience' },
  { id:'contact',    emoji:'✉️',  label:'Contact' },
];

export default function Desktop() {
  const [windows, setWindows] = useState(DEFAULTS.map(makeWin));
  const [boot, setBoot] = useState(true);

  useEffect(() => { setTimeout(()=>setBoot(false), 2200); }, []);

  const open = useCallback((id) => {
    Z++;
    setWindows(ws => ws.map(w => w.id===id ? {...w, isOpen:true, isMinimized:false, zIndex:Z} : w));
  }, []);

  const close = useCallback((id) => setWindows(ws=>ws.map(w=>w.id===id?{...w,isOpen:false}:w)), []);
  const minimize = useCallback((id) => setWindows(ws=>ws.map(w=>w.id===id?{...w,isMinimized:true}:w)), []);
  const maximize = useCallback((id) => setWindows(ws=>ws.map(w=>w.id===id?{...w,isMaximized:!w.isMaximized}:w)), []);
  const focus = useCallback((id) => { Z++; setWindows(ws=>ws.map(w=>w.id===id?{...w,zIndex:Z}:w)); }, []);
  const move = useCallback((id,x,y) => setWindows(ws=>ws.map(w=>w.id===id?{...w,x,y}:w)), []);

  const noneOpen = windows.every(w => !w.isOpen || w.isMinimized);

  return (
    <div className="desktop-bg" style={{width:'100vw',height:'100vh',position:'relative',overflow:'hidden'}}>

      {/* Boot screen */}
      {boot && (
        <div style={{
          position:'fixed',inset:0,zIndex:99999,
          background:'#000',
          display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',
          animation:'bootOut 2.2s ease forwards',
        }}>
          <div style={{fontSize:72,marginBottom:20,animation:'fadeUp 0.5s ease 0.3s both'}}>
            🧑‍💻
          </div>
          <div style={{fontSize:28,fontWeight:700,letterSpacing:-0.5,animation:'fadeUp 0.5s ease 0.5s both'}}>
            Soham Bagal
          </div>
          <div style={{fontSize:14,color:'var(--accent)',marginTop:8,animation:'fadeUp 0.5s ease 0.7s both'}}>
            Data Engineer & Full Stack Developer
          </div>
          <div style={{display:'flex',gap:5,marginTop:36,animation:'fadeUp 0.5s ease 1s both'}}>
            {[0,1,2].map(i=>(
              <div key={i} style={{
                width:5,height:5,borderRadius:'50%',background:'var(--text-tertiary)',
                animation:`blink 1.2s ease ${i*0.35}s infinite`,
              }}/>
            ))}
          </div>
        </div>
      )}

      {/* Menu bar */}
      <MenuBar onOpenWindow={open}/>

      {/* Desktop area */}
      <div style={{position:'absolute',inset:0,paddingTop:28,paddingBottom:120}}>

        {/* Desktop icons — top right */}
        <div style={{
          position:'absolute',top:16,right:16,display:'flex',flexDirection:'column',gap:4,
        }}>
          {DESKTOP_ICONS.map(icon=>(
            <div key={icon.id} className="desk-icon" onDoubleClick={()=>open(icon.id)}>
              <div style={{
                width:52,height:52,borderRadius:12,
                background:'rgba(255,255,255,0.06)',
                border:'1px solid rgba(255,255,255,0.1)',
                display:'flex',alignItems:'center',justifyContent:'center',
                fontSize:26,
              }}>{icon.emoji}</div>
              <span>{icon.label}</span>
            </div>
          ))}
        </div>

        {/* Welcome card shown when no windows open */}
        {noneOpen && !boot && (
          <div style={{
            display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',
            height:'100%',
          }}>
            <div style={{
              padding:'36px 52px',maxWidth:500,textAlign:'center',
              background:'rgba(255,255,255,0.025)',
              border:'1px solid rgba(255,255,255,0.08)',
              borderRadius:20,backdropFilter:'blur(20px)',
            }}>
              {/* GitHub streak */}
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=bagalsoham&theme=dark&background=00000000&hide_border=true&stroke=0ea5e9&ring=0ea5e9&fire=f59e0b&currStreakLabel=0ea5e9"
                alt="GitHub streak"
                style={{maxWidth:'100%',borderRadius:10,marginBottom:20}}
                onError={e=>e.target.style.display='none'}
              />
              <div style={{fontSize:44,marginBottom:12}}>👋</div>
              <h1 style={{fontSize:26,fontWeight:700,marginBottom:6}}>
                Hi, I'm{' '}
                <span style={{color:'var(--accent)',textShadow:'0 0 20px rgba(14,165,233,0.5)'}}>
                  Soham Bagal
                </span>
              </h1>
              <p style={{fontSize:14,color:'var(--text-secondary)',lineHeight:1.8,marginBottom:24}}>
                Data Engineering Intern @ Bajaj Finserv · B.Tech IT @ KJ Somaiya<br/>
                Building AI pipelines, data systems & full-stack applications.
              </p>
              <div style={{display:'flex',gap:10,justifyContent:'center',flexWrap:'wrap'}}>
                <button className="mac-btn" onClick={()=>{open('about');open('projects');open('experience');}}>
                  Explore Portfolio ↗
                </button>
                <button className="mac-btn"
                  style={{background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.12)',color:'var(--text)'}}
                  onClick={()=>open('contact')}
                >
                  Contact Me ✉️
                </button>
              </div>
            </div>
            <p style={{fontSize:12,color:'var(--text-tertiary)',marginTop:16}}>
              Double-click icons on the right · Or use the dock below ↓
            </p>
          </div>
        )}
      </div>

      {/* Windows */}
      {windows.map(w=>(
        <MacWindow key={w.id} {...w} onClose={close} onMinimize={minimize}
          onMaximize={maximize} onFocus={focus} onMove={move}>
          {CONTENT[w.id]}
        </MacWindow>
      ))}

      {/* Dock */}
      <Dock windows={windows} onOpenWindow={open}/>
    </div>
  );
}
