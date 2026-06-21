import { useEffect, useState } from 'react';

export function ScrollProgressBar() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let raf: number;
    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        const el = document.documentElement;
        const scrolled = el.scrollTop || document.body.scrollTop;
        const total = el.scrollHeight - el.clientHeight;
        setPct(total > 0 ? (scrolled / total) * 100 : 0);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[3px] z-[60] pointer-events-none"
      style={{
        width: `${pct}%`,
        background: 'linear-gradient(to right, #6B2DB5, #4DB8E8, #C2408C)',
        transition: 'width 0.1s ease',
      }}
    />
  );
}
