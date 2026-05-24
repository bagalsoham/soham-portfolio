'use client';
import { useState, useEffect } from 'react';

export default function MenuBar({ onOpenWindow }) {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [open, setOpen] = useState(null);

  useEffect(() => {
    const tick = () => {
      const n = new Date();
      setTime(n.toLocaleTimeString('en-US',{hour:'numeric',minute:'2-digit',hour12:true}));
      setDate(n.toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric'}));
    };
    tick();
    const t = setInterval(tick, 10000);
    return () => clearInterval(t);
  }, []);

  const menus = [
    { label:'🍎', items:['About Soham','—','Preferences'] },
    { label:'File', items:['New Window','—','Close'] },
    { label:'View', items:['About','Skills','Projects','Experience','Contact'] },
    { label:'Go', items:['GitHub ↗','LinkedIn ↗'] },
  ];

  return (
    <div className="menubar-glass" style={{
      position:'fixed',top:0,left:0,right:0,height:28,
      display:'flex',alignItems:'center',justifyContent:'space-between',
      padding:'0 12px',zIndex:9999,fontSize:13,
    }}
      onClick={()=>setOpen(null)}
    >
      <div style={{display:'flex',alignItems:'center',gap:0,height:'100%'}}>
        {menus.map(m=>(
          <div key={m.label} style={{position:'relative',height:'100%',display:'flex',alignItems:'center'}}>
            <button
              style={{
                padding:'0 12px',height:'100%',background: open===m.label?'rgba(255,255,255,0.15)':'transparent',
                border:'none',color:'var(--text)',fontSize:13,fontWeight: m.label==='🍎'?400:500,
                cursor:'pointer',borderRadius:4,transition:'background 0.1s',fontFamily:'inherit',
              }}
              onClick={e=>{e.stopPropagation();setOpen(open===m.label?null:m.label);}}
            >
              {m.label}
            </button>
            {open===m.label&&(
              <div
                style={{
                  position:'absolute',top:'100%',left:0,minWidth:180,
                  background:'rgba(32,32,36,0.97)',border:'1px solid rgba(255,255,255,0.1)',
                  borderRadius:8,boxShadow:'0 12px 36px rgba(0,0,0,0.6)',
                  overflow:'hidden',zIndex:10000,paddingTop:4,paddingBottom:4,
                  backdropFilter:'blur(20px)',
                }}
                onClick={e=>e.stopPropagation()}
              >
                {m.items.map((item,i)=>
                  item==='—'
                    ? <div key={i} style={{height:1,background:'rgba(255,255,255,0.08)',margin:'4px 0'}}/>
                    : (
                      <div key={i}
                        style={{padding:'6px 16px',fontSize:13,color:'var(--text)',cursor:'pointer',transition:'background 0.1s'}}
                        onMouseEnter={e=>e.currentTarget.style.background='var(--accent)'}
                        onMouseLeave={e=>e.currentTarget.style.background='transparent'}
                        onClick={()=>{
                          setOpen(null);
                          const map={About:'about',Skills:'skills',Projects:'projects',Experience:'experience',Contact:'contact'};
                          if(map[item]) onOpenWindow(map[item]);
                          if(item.includes('GitHub')) window.open('https://github.com/bagalsoham','_blank');
                          if(item.includes('LinkedIn')) window.open('https://linkedin.com/in/soham-bagal','_blank');
                        }}
                      >{item}</div>
                    )
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right status */}
      <div style={{display:'flex',alignItems:'center',gap:14,color:'var(--text)',fontSize:13}}>
        <span style={{opacity:0.6}}>⌥</span>
        <span style={{opacity:0.6}}>🔋</span>
        <span style={{opacity:0.6}}>WiFi</span>
        <span style={{color:'var(--text-secondary)'}}>{date}</span>
        <span style={{fontWeight:500}}>{time}</span>
      </div>
    </div>
  );
}
