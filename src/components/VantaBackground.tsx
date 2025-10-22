import { useEffect, useRef } from 'react';
import HALO from 'vanta/dist/vanta.halo.min';
import * as THREE from 'three';

interface VantaBackgroundProps {
  children: React.ReactNode;
}

export default function VantaBackground({ children }: VantaBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const effect = HALO({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      baseColor: 0xac1cdc,
      backgroundColor: 0x0,
      amplitudeFactor: 1.20,
      xOffset: 0.21,
      size: 1.20
    });

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <>
      <div ref={vantaRef} className="fixed inset-0 -z-10" />
      <div className="relative z-0">
        {children}
      </div>
    </>
  );
}