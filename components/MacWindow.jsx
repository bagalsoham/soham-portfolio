'use client';
import { useRef, useCallback } from 'react';

export default function MacWindow({
  id, title, icon, children,
  isOpen, isMinimized, isMaximized,
  x, y, width, height, zIndex,
  onClose, onMinimize, onMaximize, onFocus, onMove,
}) {
  const ref = useRef(null);
  const drag = useRef(null);

  const onTitleDown = useCallback((e) => {
    if (isMaximized || e.target.closest('.tl')) return;
    e.preventDefault();
    onFocus(id);
    const r = ref.current.getBoundingClientRect();
    drag.current = { mx: e.clientX, my: e.clientY, ox: r.left, oy: r.top };
    document.body.style.cursor = 'grabbing';

    const move = (e) => {
      if (!drag.current) return;
      const nx = Math.max(0, drag.current.ox + e.clientX - drag.current.mx);
      const ny = Math.max(28, drag.current.oy + e.clientY - drag.current.my);
      ref.current.style.left = nx + 'px';
      ref.current.style.top  = ny + 'px';
    };
    const up = (e) => {
      if (!drag.current) return;
      const nx = Math.max(0, drag.current.ox + e.clientX - drag.current.mx);
      const ny = Math.max(28, drag.current.oy + e.clientY - drag.current.my);
      drag.current = null;
      document.body.style.cursor = '';
      onMove(id, nx, ny);
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', up);
    };
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
  }, [id, isMaximized, onFocus, onMove]);

  if (!isOpen || isMinimized) return null;

  const style = isMaximized
    ? { position:'fixed', left:0, top:28, width:'100vw', height:'calc(100vh - 28px)', zIndex, borderRadius:0 }
    : { position:'fixed', left:x, top:y, width, height, zIndex, borderRadius:12 };

  return (
    <div ref={ref} style={style}
      className="window-glass overflow-hidden win-enter flex flex-col"
      onMouseDown={() => onFocus(id)}
    >
      {/* Title bar */}
      <div
        style={{
          height:44, background:'var(--titlebar)',
          borderBottom:'1px solid var(--titlebar-border)',
          display:'flex', alignItems:'center', paddingLeft:16, paddingRight:16,
          flexShrink:0, position:'relative',
          cursor: isMaximized ? 'default' : 'grab',
        }}
        onMouseDown={onTitleDown}
        onDoubleClick={() => onMaximize(id)}
      >
        {/* Traffic lights */}
        <div className="tl-wrap" onMouseDown={e => e.stopPropagation()}>
          <button className="tl tl-r" onClick={e=>{e.stopPropagation();onClose(id);}} title="Close"/>
          <button className="tl tl-y" onClick={e=>{e.stopPropagation();onMinimize(id);}} title="Minimize"/>
          <button className="tl tl-g" onClick={e=>{e.stopPropagation();onMaximize(id);}} title="Zoom"/>
        </div>
        {/* Title */}
        <div style={{
          position:'absolute', left:'50%', transform:'translateX(-50%)',
          display:'flex', alignItems:'center', gap:7,
          fontSize:13, fontWeight:500, color:'rgba(255,255,255,0.7)',
          pointerEvents:'none', whiteSpace:'nowrap',
        }}>
          <span style={{fontSize:15}}>{icon}</span>
          <span>{title}</span>
        </div>
      </div>

      {/* Content */}
      <div style={{flex:1, minHeight:0, display:'flex', overflow:'hidden'}}>
        {children}
      </div>
    </div>
  );
}
