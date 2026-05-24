'use client';

const APPS = [
  { id:'about',      label:'Finder',     bg:'linear-gradient(145deg,#1a8cff,#0050d0)', emoji:'🧑‍💻' },
  { id:'skills',     label:'Terminal',   bg:'linear-gradient(145deg,#2d2d2d,#1a1a1a)', emoji:'⌨️' },
  { id:'projects',   label:'Projects',   bg:'linear-gradient(145deg,#ff9500,#ff6b00)', emoji:'🚀' },
  { id:'experience', label:'Calendar',   bg:'linear-gradient(145deg,#ff3b30,#c0392b)', emoji:'💼' },
  { id:'contact',    label:'Mail',       bg:'linear-gradient(145deg,#007aff,#0055cc)', emoji:'✉️' },
];

export default function Dock({ windows, onOpenWindow }) {
  return (
    <div style={{
      position:'fixed',bottom:6,left:'50%',transform:'translateX(-50%)',
      zIndex:9000,
    }}>
      <div className="dock-glass" style={{borderRadius:20}}>
        <div className="dock-wrap">
          {APPS.map((app) => {
            const win = windows.find(w=>w.id===app.id);
            const isOpen = win?.isOpen && !win?.isMinimized;
            return (
              <div key={app.id} className="dock-app" onClick={()=>onOpenWindow(app.id)}>
                {/* Icon */}
                <div style={{
                  width:54,height:54,borderRadius:14,
                  background:app.bg,
                  display:'flex',alignItems:'center',justifyContent:'center',
                  fontSize:26,
                  boxShadow: isOpen
                    ? '0 0 0 2px rgba(255,255,255,0.3), 0 4px 16px rgba(0,0,0,0.4)'
                    : '0 4px 12px rgba(0,0,0,0.4)',
                  transition:'box-shadow 0.2s',
                }}>
                  {app.emoji}
                </div>
                {/* Label */}
                <span style={{fontSize:10,color:'rgba(255,255,255,0.7)',whiteSpace:'nowrap'}}>
                  {app.label}
                </span>
                {/* Open dot */}
                <div style={{
                  width:4,height:4,borderRadius:'50%',
                  background: isOpen ? 'rgba(255,255,255,0.8)' : 'transparent',
                  marginTop:-2,transition:'background 0.2s',
                }}/>
              </div>
            );
          })}

          {/* Divider + extra links */}
          <div style={{width:1,background:'rgba(255,255,255,0.15)',margin:'8px 4px',alignSelf:'stretch'}}/>

          {[
            { label:'GitHub', emoji:'🐙', href:'https://github.com/bagalsoham', bg:'linear-gradient(145deg,#24292e,#1a1f24)' },
            { label:'LinkedIn', emoji:'💼', href:'https://linkedin.com/in/soham-bagal', bg:'linear-gradient(145deg,#0a66c2,#004a99)' },
          ].map(l=>(
            <div key={l.label} className="dock-app" onClick={()=>window.open(l.href,'_blank')}>
              <div style={{
                width:54,height:54,borderRadius:14,background:l.bg,
                display:'flex',alignItems:'center',justifyContent:'center',
                fontSize:26,boxShadow:'0 4px 12px rgba(0,0,0,0.4)',
              }}>{l.emoji}</div>
              <span style={{fontSize:10,color:'rgba(255,255,255,0.7)'}}>{l.label}</span>
              <div style={{width:4,height:4}}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
