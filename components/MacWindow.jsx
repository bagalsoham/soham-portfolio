'use client';
import { useRef, useCallback } from 'react';

export default function MacWindow({
  id,
  title,
  icon,
  children,
  isOpen,
  isMinimized,
  isMaximized,
  x,
  y,
  width,
  height,
  zIndex,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  onMove,
  sidebarContent,
}) {
  const windowRef = useRef(null);
  const dragRef = useRef(null);

  const handleTitlebarMouseDown = useCallback(
    (e) => {
      if (isMaximized) return;
      if (e.target.closest('.traffic-btn')) return;
      e.preventDefault();
      onFocus(id);

      const rect = windowRef.current.getBoundingClientRect();
      dragRef.current = {
        startMouseX: e.clientX,
        startMouseY: e.clientY,
        startLeft: rect.left,
        startTop: rect.top,
      };

      document.body.classList.add('dragging');

      const handleMouseMove = (e) => {
        if (!dragRef.current) return;
        const dx = e.clientX - dragRef.current.startMouseX;
        const dy = e.clientY - dragRef.current.startMouseY;
        const newX = Math.max(0, dragRef.current.startLeft + dx);
        const newY = Math.max(28, dragRef.current.startTop + dy);
        if (windowRef.current) {
          windowRef.current.style.left = newX + 'px';
          windowRef.current.style.top = newY + 'px';
        }
      };

      const handleMouseUp = (e) => {
        if (!dragRef.current) return;
        const dx = e.clientX - dragRef.current.startMouseX;
        const dy = e.clientY - dragRef.current.startMouseY;
        const newX = Math.max(0, dragRef.current.startLeft + dx);
        const newY = Math.max(28, dragRef.current.startTop + dy);
        dragRef.current = null;
        document.body.classList.remove('dragging');
        onMove(id, newX, newY);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    },
    [id, isMaximized, onFocus, onMove]
  );

  if (!isOpen || isMinimized) return null;

  const style = isMaximized
    ? {
        position: 'fixed',
        left: 0,
        top: 28,
        width: '100vw',
        height: 'calc(100vh - 28px)',
        zIndex,
        borderRadius: 0,
      }
    : {
        position: 'fixed',
        left: x,
        top: y,
        width,
        height,
        zIndex,
        borderRadius: '12px',
      };

  return (
    <div
      ref={windowRef}
      style={style}
      className="window-glass overflow-hidden window-enter flex flex-col"
      onMouseDown={() => onFocus(id)}
    >
      {/* Title bar */}
      <div
        className="flex items-center px-4 flex-shrink-0"
        style={{
          height: 44,
          background: 'var(--titlebar)',
          borderBottom: '1px solid var(--border)',
          cursor: isMaximized ? 'default' : 'grab',
        }}
        onMouseDown={handleTitlebarMouseDown}
        onDoubleClick={() => onMaximize(id)}
      >
        {/* Traffic lights */}
        <div className="traffic-lights">
          <button
            className="traffic-btn traffic-btn-red"
            title="Close"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => { e.stopPropagation(); onClose(id); }}
          />
          <button
            className="traffic-btn traffic-btn-yellow"
            title="Minimize"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => { e.stopPropagation(); onMinimize(id); }}
          />
          <button
            className="traffic-btn traffic-btn-green"
            title="Maximize"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => { e.stopPropagation(); onMaximize(id); }}
          />
        </div>

        {/* Title */}
        <div
          className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2"
          style={{ fontSize: 13, color: 'var(--text-secondary)', fontWeight: 500, pointerEvents: 'none' }}
        >
          <span>{icon}</span>
          <span>{title}</span>
        </div>
      </div>

      {/* Content area */}
      <div className="flex flex-1 min-h-0">
        {sidebarContent && (
          <div
            className="finder-sidebar flex-shrink-0 overflow-y-auto"
            style={{ width: 180, padding: '12px 8px' }}
          >
            {sidebarContent}
          </div>
        )}
        <div className="flex-1 overflow-y-auto" style={{ color: 'var(--text)' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
