import { useState, useEffect } from 'react';
import Logo from './Logo';

interface LoadingScreenProps {
  onComplete: () => void;
  duration?: number;
}

export default function LoadingScreen({ onComplete, duration = 2000 }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    // Animate progress bar
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (newProgress < 100) {
        requestAnimationFrame(animate);
      } else {
        // Start exit animation
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(onComplete, 500);
        }, 200);
      }
    };

    requestAnimationFrame(animate);
  }, [duration, onComplete, prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center transition-all duration-500 ${
        isExiting ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
      }`}
    >
      {/* Logo with pulse animation */}
      <div
        className={`transition-all duration-500 ${
          isExiting ? 'scale-90 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        <div className="loading-logo-container">
          <Logo width={180} height={40} className="loading-logo" />
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-8 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-full transition-all duration-100 ease-out"
          style={{
            width: `${progress}%`,
            backgroundSize: '200% 100%',
            animation: 'gradient-flow 2s linear infinite'
          }}
        />
      </div>

      {/* Subtle loading text */}
      <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
        Cargando experiencia
      </p>
    </div>
  );
}
