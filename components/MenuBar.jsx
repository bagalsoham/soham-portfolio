'use client';
import { useState, useEffect } from 'react';

const WifiIcon = () => (
  <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
    <path d="M8 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
    <path d="M8 6a5.5 5.5 0 0 1 3.9 1.6l1.1-1.1A7 7 0 0 0 8 4.5 7 7 0 0 0 3 6.5l1.1 1.1A5.5 5.5 0 0 1 8 6z" opacity="0.7" />
    <path d="M8 2.5A9.5 9.5 0 0 1 14.7 5L16 3.7A11 11 0 0 0 8 1a11 11 0 0 0-8 2.7L1.3 5A9.5 9.5 0 0 1 8 2.5z" opacity="0.4" />
  </svg>
);

const BatteryIcon = () => (
  <svg width="22" height="12" viewBox="0 0 22 12" fill="none">
    <rect x="0.5" y="0.5" width="18" height="11" rx="2.5" stroke="currentColor" strokeOpacity="0.7" />
    <rect x="2" y="2" width="13" height="8" rx="1.5" fill="currentColor" opacity="0.8" />
    <path d="M19.5 4.5V7.5C20.3 7.2 21 6.5 21 6s-.7-1.2-1.5-1.5z" fill="currentColor" opacity="0.5" />
  </svg>
);

export default function MenuBar({ windows, onOpenWindow }) {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [menuOpen, setMenuOpen] = useState(null);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }));
      setDate(now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }));
    };
    update();
    const t = setInterval(update, 10000);
    return () => clearInterval(t);
  }, []);

  const menus = [
    { label: '  Soham', items: ['About Soham', '---', 'System Preferences...'] },
    { label: 'File', items: ['New Window', '---', 'Close Window'] },
    { label: 'View', items: ['About', 'Skills', 'Projects', 'Experience', 'Contact'] },
    { label: 'Go', items: ['GitHub', 'LinkedIn'] },
    { label: 'Window', items: ['Minimize', 'Zoom'] },
    { label: 'Help', items: ['Soham Bagal Portfolio'] },
  ];

  return (
    <div
      className="menubar-glass fixed top-0 left-0 right-0 flex items-center justify-between px-4"
      style={{ height: 28, zIndex: 9999, fontSize: 13 }}
    >
      {/* Left: menus */}
      <div className="flex items-center gap-0.5" style={{ height: '100%' }}>
        {menus.map((menu) => (
          <div key={menu.label} className="relative" style={{ height: '100%' }}>
            <button
              className="px-3 h-full rounded flex items-center font-medium transition-colors"
              style={{
                color: 'var(--text)',
                background: menuOpen === menu.label ? 'rgba(255,255,255,0.15)' : 'transparent',
                fontSize: 13,
              }}
              onClick={() => setMenuOpen(menuOpen === menu.label ? null : menu.label)}
            >
              {menu.label === '  Soham' ? <span style={{ fontSize: 16 }}>  </span> : null}
              {menu.label.trim()}
            </button>

            {menuOpen === menu.label && (
              <div
                className="absolute top-full left-0 rounded-lg overflow-hidden"
                style={{
                  background: 'rgba(30,30,34,0.95)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                  minWidth: 180,
                  zIndex: 10000,
                }}
                onMouseLeave={() => setMenuOpen(null)}
              >
                {menu.items.map((item, i) =>
                  item === '---' ? (
                    <div key={i} className="mac-divider" style={{ margin: '4px 0' }} />
                  ) : (
                    <div
                      key={i}
                      className="px-4 py-1.5 text-sm cursor-pointer transition-colors"
                      style={{ color: 'var(--text)', fontSize: 13 }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--accent)')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                      onClick={() => {
                        setMenuOpen(null);
                        const wNames = { About: 'about', Skills: 'skills', Projects: 'projects', Experience: 'experience', Contact: 'contact' };
                        if (wNames[item]) onOpenWindow(wNames[item]);
                        if (item === 'GitHub') window.open('https://github.com/SohamBagal', '_blank');
                        if (item === 'LinkedIn') window.open('https://linkedin.com/in/soham-bagal', '_blank');
                      }}
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right: status icons */}
      <div className="flex items-center gap-3" style={{ color: 'var(--text)' }}>
        <BatteryIcon />
        <WifiIcon />
        <span style={{ color: 'var(--text-secondary)', fontSize: 13 }}>{date}</span>
        <span style={{ fontWeight: 500, fontSize: 13 }}>{time}</span>
      </div>
    </div>
  );
}
