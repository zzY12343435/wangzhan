import { useEffect, useState } from 'react';
import './Cursor.css';

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (hidden) setHidden(false);
    };
    const leave = () => setHidden(true);
    const enter = () => setHidden(false);

    // 监听可交互元素
    const onHover = (e) => {
      const t = e.target.closest('a, button, .project-card, .strength-card');
      setHover(!!t);
    };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', leave);
    document.addEventListener('mouseenter', enter);
    document.addEventListener('mouseover', onHover);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
      document.removeEventListener('mouseenter', enter);
      document.removeEventListener('mouseover', onHover);
    };
  }, [hidden]);

  return (
    <>
      <div
        className={`cursor-dot ${hidden ? 'hidden' : ''} ${hover ? 'hover' : ''}`}
        style={{ left: pos.x, top: pos.y }}
      />
      <div
        className={`cursor-ring ${hidden ? 'hidden' : ''} ${hover ? 'hover' : ''}`}
        style={{ left: pos.x, top: pos.y }}
      />
    </>
  );
}
