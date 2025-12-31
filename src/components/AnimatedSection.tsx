import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'blur-in' | 'scale-up';
  delay?: number;
  duration?: number;
  threshold?: number;
  distance?: number;
}

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  threshold = 0.1,
  distance = 50
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -80px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const getAnimationStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, filter ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      willChange: 'opacity, transform',
    };

    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return { ...baseStyles, opacity: 0, transform: `translateY(${distance}px)` };
        case 'fade-down':
          return { ...baseStyles, opacity: 0, transform: `translateY(-${distance}px)` };
        case 'fade-left':
          return { ...baseStyles, opacity: 0, transform: `translateX(${distance}px)` };
        case 'fade-right':
          return { ...baseStyles, opacity: 0, transform: `translateX(-${distance}px)` };
        case 'zoom-in':
          return { ...baseStyles, opacity: 0, transform: 'scale(0.85)' };
        case 'scale-up':
          return { ...baseStyles, opacity: 0, transform: `scale(0.95) translateY(${distance / 2}px)` };
        case 'blur-in':
          return { ...baseStyles, opacity: 0, filter: 'blur(12px)' };
        default:
          return { ...baseStyles, opacity: 0 };
      }
    }

    return {
      ...baseStyles,
      opacity: 1,
      transform: 'translateY(0) translateX(0) scale(1)',
      filter: 'blur(0)'
    };
  };

  return (
    <div
      ref={sectionRef}
      className={className}
      style={getAnimationStyles()}
    >
      {children}
    </div>
  );
}
