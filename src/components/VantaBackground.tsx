import { useEffect, useRef } from 'react';
import WAVES from 'vanta/dist/vanta.waves.min';
import * as THREE from 'three';

interface VantaBackgroundProps {
  children: React.ReactNode;
}

export default function VantaBackground({ children }: VantaBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Solo activar en escritorio para mejor rendimiento
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;

    if (isDesktop && vantaRef.current) {
      const effect = WAVES({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x20207, // Color principal de las ondas
        shininess: 28.00,
        waveSpeed: 0.65,
        zoom: 0.97
      });

      return () => {
        if (effect) effect.destroy();
      };
    }
  }, []);

  return (
    <>
      <div ref={vantaRef} className="fixed inset-0 -z-10 bg-black" />
      <div className="relative z-0">
        {children}
      </div>
    </>
  );
}