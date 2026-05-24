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

const INITIAL_WINDOWS = [
  {
    id: 'about',
    title: 'About Soham',
    icon: '🧑‍💻',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    x: 80,
    y: 60,
    width: 720,
    height: 530,
    zIndex: 10,
    hasSidebar: false,
  },
  {
    id: 'skills',
    title: 'Terminal — Skills',
    icon: '⌨️',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    x: 140,
    y: 80,
    width: 680,
    height: 500,
    zIndex: 10,
    hasSidebar: false,
  },
  {
    id: 'projects',
    title: 'Projects',
    icon: '🚀',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    x: 100,
    y: 70,
    width: 800,
    height: 560,
    zIndex: 10,
    hasSidebar: false,
  },
  {
    id: 'experience',
    title: 'Experience & Education',
    icon: '💼',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    x: 110,
    y: 75,
    width: 740,
    height: 540,
    zIndex: 10,
    hasSidebar: false,
  },
  {
    id: 'contact',
    title: 'Contact — Soham Bagal',
    icon: '✉️',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    x: 180,
    y: 100,
    width: 660,
    height: 480,
    zIndex: 10,
    hasSidebar: false,
  },
];

const WINDOW_CONTENT = {
  about: <AboutWindow />,
  skills: <SkillsWindow />,
  projects: <ProjectsWindow />,
  experience: <ExperienceWindow />,
  contact: <ContactWindow />,
};

let zCounter = 20;

export default function Desktop() {
  const [windows, setWindows] = useState(INITIAL_WINDOWS);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowWelcome(false), 2500);
    return () => clearTimeout(t);
  }, []);

  const openWindow = useCallback((id) => {
    zCounter++;
    setWindows((ws) =>
      ws.map((w) =>
        w.id === id
          ? { ...w, isOpen: true, isMinimized: false, zIndex: zCounter }
          : w
      )
    );
  }, []);

  const closeWindow = useCallback((id) => {
    setWindows((ws) => ws.map((w) => (w.id === id ? { ...w, isOpen: false } : w)));
  }, []);

  const minimizeWindow = useCallback((id) => {
    setWindows((ws) => ws.map((w) => (w.id === id ? { ...w, isMinimized: true } : w)));
  }, []);

  const maximizeWindow = useCallback((id) => {
    setWindows((ws) =>
      ws.map((w) => (w.id === id ? { ...w, isMaximized: !w.isMaximized } : w))
    );
  }, []);

  const focusWindow = useCallback((id) => {
    zCounter++;
    setWindows((ws) =>
      ws.map((w) => (w.id === id ? { ...w, zIndex: zCounter } : w))
    );
  }, []);

  const moveWindow = useCallback((id, x, y) => {
    setWindows((ws) => ws.map((w) => (w.id === id ? { ...w, x, y } : w)));
  }, []);

  const openAllWindows = () => {
    const ids = ['about', 'skills', 'projects'];
    let z = zCounter;
    setWindows((ws) =>
      ws.map((w) => {
        if (ids.includes(w.id)) {
          z++;
          return { ...w, isOpen: true, isMinimized: false, zIndex: z };
        }
        return w;
      })
    );
    zCounter = z;
  };

  return (
    <div
      className="desktop-bg"
      style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}
      onClick={() => {}}
    >
      {/* Welcome splash */}
      {showWelcome && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 99999,
            background: 'rgba(8,12,20,0.97)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            animation: 'fadeIn 0.5s ease forwards',
          }}
        >
          <div style={{ fontSize: 64, marginBottom: 16 }}>🧑‍💻</div>
          <h1 style={{ fontSize: 32, fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>
            Soham Bagal
          </h1>
          <p style={{ fontSize: 16, color: 'var(--accent)' }}>Data Engineer & Full Stack Developer</p>
          <div style={{ marginTop: 32, display: 'flex', gap: 6 }}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  width: 6, height: 6, borderRadius: '50%', background: 'var(--text-tertiary)',
                  animation: `terminalBlink 1s ease ${i * 0.3}s infinite`,
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Menu bar */}
      <MenuBar windows={windows} onOpenWindow={openWindow} />

      {/* Desktop area */}
      <div
        style={{
          position: 'absolute', inset: 0,
          paddingTop: 28,
          paddingBottom: 120,
        }}
      >
        {/* Desktop greeting (shown when no windows are open) */}
        {windows.every((w) => !w.isOpen || w.isMinimized) && !showWelcome && (
          <div
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              height: '100%', gap: 16,
            }}
          >
            <div
              style={{
                padding: '32px 48px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 20,
                backdropFilter: 'blur(20px)',
                textAlign: 'center',
                maxWidth: 480,
              }}
            >
              <div style={{ fontSize: 48, marginBottom: 12 }}>👋</div>
              <h1 style={{ fontSize: 26, fontWeight: 700, marginBottom: 6 }}>
                Hi, I'm{' '}
                <span className="glow-text" style={{ color: 'var(--accent)' }}>Soham Bagal</span>
              </h1>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 20 }}>
                Data Engineering Intern at Bajaj Finserv · B.Tech IT @ KJ Somaiya ·
                Building scalable pipelines, AI systems & full-stack apps.
              </p>
              <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                  className="mac-btn"
                  onClick={openAllWindows}
                >
                  Explore Portfolio ↗
                </button>
                <button
                  className="mac-btn"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'var(--text)' }}
                  onClick={() => openWindow('contact')}
                >
                  Get in Touch ✉️
                </button>
              </div>
            </div>
            <p style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>
              Click icons in the dock below to open windows ↓
            </p>
          </div>
        )}
      </div>

      {/* Windows */}
      {windows.map((win) => (
        <MacWindow
          key={win.id}
          {...win}
          onClose={closeWindow}
          onMinimize={minimizeWindow}
          onMaximize={maximizeWindow}
          onFocus={focusWindow}
          onMove={moveWindow}
        >
          {WINDOW_CONTENT[win.id]}
        </MacWindow>
      ))}

      {/* Dock */}
      <Dock windows={windows} onOpenWindow={openWindow} />
    </div>
  );
}
