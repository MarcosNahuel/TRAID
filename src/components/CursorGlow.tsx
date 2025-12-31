import { useEffect, useRef, useState } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // No mostrar en dispositivos táctiles
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Animación suave con lerp
    let animationId: number;
    const animate = () => {
      const lerp = 0.15;
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * lerp;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * lerp;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${currentPos.current.x - 200}px, ${currentPos.current.y - 200}px)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, [isVisible]);

  // No renderizar en dispositivos táctiles
  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <div
      ref={glowRef}
      className={`fixed top-0 left-0 w-[400px] h-[400px] pointer-events-none z-30 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        background: 'radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, rgba(236, 72, 153, 0.1) 40%, transparent 70%)',
        filter: 'blur(40px)',
      }}
    />
  );
}
