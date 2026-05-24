'use client';
import { useState } from 'react';

const LINKS = [
  { e:'✉️', l:'Email',    v:'bagalsoham1717@gmail.com', href:'mailto:bagalsoham1717@gmail.com', c:'#0ea5e9' },
  { e:'🐙', l:'GitHub',   v:'bagalsoham',               href:'https://github.com/bagalsoham',  c:'#8b5cf6' },
  { e:'💼', l:'LinkedIn', v:'soham-bagal',               href:'https://linkedin.com/in/soham-bagal', c:'#0a66c2' },
  { e:'📱', l:'Phone',    v:'+91 9967550047',            href:'tel:+919967550047',              c:'#10b981' },
];

export default function ContactWindow() {
  const [form, setForm] = useState({name:'',email:'',subject:'',message:''});
  const [status, setStatus] = useState('');

  const send = () => {
    if(!form.name||!form.email||!form.message){setStatus('error');return;}
    window.location.href=`mailto:bagalsoham1717@gmail.com?subject=${encodeURIComponent(form.subject||'Portfolio Contact')}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`;
    setStatus('sent');
  };

  return (
    <div style={{display:'flex',height:'100%',overflow:'hidden'}}>
      {/* Left sidebar */}
      <div style={{
        width:210,flexShrink:0,background:'rgba(0,0,0,0.25)',
        borderRight:'1px solid var(--border)',padding:'20px 14px',
        display:'flex',flexDirection:'column',gap:6,
      }}>
        <p style={{fontSize:10,color:'var(--text-tertiary)',textTransform:'uppercase',letterSpacing:'0.09em',marginBottom:8}}>
          Reach Out
        </p>
        {LINKS.map(l=>(
          <a key={l.l} href={l.href} target="_blank" rel="noreferrer" style={{textDecoration:'none'}}>
            <div style={{
              display:'flex',gap:10,alignItems:'center',
              padding:'10px 12px',borderRadius:10,
              background:'rgba(255,255,255,0.025)',border:'1px solid rgba(255,255,255,0.06)',
              transition:'all 0.15s',cursor:'pointer',
            }}
              onMouseEnter={e=>{e.currentTarget.style.background=`${l.c}12`;e.currentTarget.style.borderColor=`${l.c}35`;}}
              onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,0.025)';e.currentTarget.style.borderColor='rgba(255,255,255,0.06)';}}
            >
              <div style={{
                width:34,height:34,borderRadius:9,
                background:`${l.c}18`,border:`1px solid ${l.c}28`,
                display:'flex',alignItems:'center',justifyContent:'center',fontSize:16,flexShrink:0,
              }}>{l.e}</div>
              <div>
                <p style={{fontSize:12,fontWeight:600,color:'var(--text)'}}>{l.l}</p>
                <p style={{fontSize:10,color:'var(--text-tertiary)',marginTop:1}}>{l.v.slice(0,22)}</p>
              </div>
            </div>
          </a>
        ))}

        <div className="mac-div" style={{marginTop:8}}/>

        {/* skillicons strip */}
        <p style={{fontSize:10,color:'var(--text-tertiary)',textTransform:'uppercase',letterSpacing:'0.09em',marginBottom:8}}>
          Current Stack
        </p>
        <img
          src="https://skillicons.dev/icons?i=python,pyspark,databricks,azure,docker&perline=5"
          alt="stack"
          style={{maxWidth:'100%',borderRadius:6}}
          onError={e=>e.target.style.display='none'}
        />

        <p style={{fontSize:12,color:'var(--text-secondary)',lineHeight:1.7,marginTop:12}}>
          Open to <strong style={{color:'var(--accent)'}}>Data Engineering</strong> & Full Stack roles. Let's build something great!
        </p>
      </div>

      {/* Right: form */}
      <div style={{flex:1,padding:'20px 24px',overflowY:'auto'}}>
        <div style={{marginBottom:20}}>
          <p style={{fontSize:16,fontWeight:600}}>New Message</p>
          <p style={{fontSize:12,color:'var(--text-tertiary)',marginTop:2}}>
            To: Soham Bagal &lt;bagalsoham1717@gmail.com&gt;
          </p>
        </div>

        <div style={{display:'flex',flexDirection:'column',gap:12}}>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
            <div>
              <label style={{fontSize:11,color:'var(--text-tertiary)',display:'block',marginBottom:4}}>Your Name *</label>
              <input className="mac-input" placeholder="John Doe"
                value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
            </div>
            <div>
              <label style={{fontSize:11,color:'var(--text-tertiary)',display:'block',marginBottom:4}}>Email *</label>
              <input className="mac-input" placeholder="john@email.com" type="email"
                value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>
            </div>
          </div>
          <div>
            <label style={{fontSize:11,color:'var(--text-tertiary)',display:'block',marginBottom:4}}>Subject</label>
            <input className="mac-input" placeholder="Opportunity / Collaboration / Hello!"
              value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})}/>
          </div>
          <div>
            <label style={{fontSize:11,color:'var(--text-tertiary)',display:'block',marginBottom:4}}>Message *</label>
            <textarea className="mac-input" placeholder="Your message..." rows={7}
              value={form.message} onChange={e=>setForm({...form,message:e.target.value})}
              style={{resize:'vertical',minHeight:120}}/>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <button className="mac-btn" onClick={send}>✉️ Send Message</button>
            {status==='sent'&&<span style={{fontSize:13,color:'var(--green)'}}>✓ Opening mail client...</span>}
            {status==='error'&&<span style={{fontSize:13,color:'var(--red)'}}>Please fill all required fields.</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
