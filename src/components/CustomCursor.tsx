import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isCoarse, setIsCoarse] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsCoarse(true);
      return;
    }

    let ringX = 0, ringY = 0;
    let raf: number;

    const move = (e: MouseEvent) => {
      const x = e.clientX, y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${x}px`;
        dotRef.current.style.top = `${y}px`;
      }
      const target = e.target as Element;
      const isInteractive = !!target.closest('a, button, [role="button"], input, select, textarea, label');
      setHovered(isInteractive);

      cancelAnimationFrame(raf);
      const animate = () => {
        ringX += (x - ringX) * 0.12;
        ringY += (y - ringY) * 0.12;
        if (ringRef.current) {
          ringRef.current.style.left = `${ringX}px`;
          ringRef.current.style.top = `${ringY}px`;
        }
        raf = requestAnimationFrame(animate);
      };
      raf = requestAnimationFrame(animate);
    };

    const down = () => setClicked(true);
    const up = () => setClicked(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (isCoarse) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999]"
        style={{
          width: 6, height: 6,
          borderRadius: '50%',
          background: '#4DB8E8',
          transform: `translate(-50%, -50%) scale(${clicked ? 0.5 : 1})`,
          transition: 'transform 0.1s ease',
          top: 0, left: 0,
        }}
      />
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998]"
        style={{
          width: hovered ? 48 : 32,
          height: hovered ? 48 : 32,
          borderRadius: '50%',
          border: `1.5px solid ${hovered ? '#C2408C' : '#8B3FD4'}`,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease',
          top: 0, left: 0,
        }}
      />
    </>
  );
}
