import { useRef, useCallback } from 'react';

export default function useTilt(maxDeg = 6) {
  const ref = useRef(null);

  const onMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${x * maxDeg}deg) rotateX(${-y * maxDeg}deg) scale3d(1.02, 1.02, 1)`;
    el.style.transition = 'transform 0.1s ease-out';
  }, [maxDeg]);

  const onLeave = useCallback(() => {
    if (ref.current) {
      ref.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';
      ref.current.style.transition = 'transform 0.5s ease-out';
    }
  }, []);

  return { ref, onMove, onLeave };
}
