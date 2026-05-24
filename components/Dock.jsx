'use client';

const DOCK_APPS = [
  { id: 'about',      label: 'About',      emoji: '🧑‍💻', color: '#3b82f6' },
  { id: 'skills',     label: 'Terminal',   emoji: '⌨️',  color: '#10b981' },
  { id: 'projects',   label: 'Projects',   emoji: '🚀',  color: '#f59e0b' },
  { id: 'experience', label: 'Experience', emoji: '💼',  color: '#8b5cf6' },
  { id: 'contact',    label: 'Contact',    emoji: '✉️',  color: '#ec4899' },
];

export default function Dock({ windows, onOpenWindow }) {
  return (
    <div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 dock-glass rounded-2xl"
      style={{ zIndex: 9000 }}
    >
      <div className="dock-container">
        {DOCK_APPS.map((app) => {
          const win = windows.find((w) => w.id === app.id);
          const isOpen = win?.isOpen && !win?.isMinimized;
          const isMinimized = win?.isMinimized;

          return (
            <div key={app.id} className="dock-item" onClick={() => onOpenWindow(app.id)}>
              {/* Icon */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: `linear-gradient(135deg, ${app.color}22, ${app.color}44)`,
                  border: `1px solid ${app.color}33`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 28,
                  boxShadow: isOpen
                    ? `0 0 0 2px ${app.color}66, 0 4px 12px ${app.color}33`
                    : '0 2px 8px rgba(0,0,0,0.3)',
                  transition: 'all 0.15s ease',
                }}
              >
                {app.emoji}
              </div>
              {/* Label on hover */}
              <span
                style={{
                  fontSize: 11,
                  color: 'var(--text-secondary)',
                  whiteSpace: 'nowrap',
                  opacity: 0.8,
                }}
              >
                {app.label}
              </span>
              {/* Open indicator dot */}
              <div
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: '50%',
                  background: isOpen ? app.color : isMinimized ? 'var(--text-tertiary)' : 'transparent',
                  marginTop: -2,
                  transition: 'background 0.2s ease',
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
