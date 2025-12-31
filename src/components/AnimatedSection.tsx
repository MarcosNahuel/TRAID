import { useEffect, useRef, useState, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'blur-in';
  delay?: number;
  duration?: number;
  threshold?: number;
}

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 600,
  threshold = 0.1
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const getAnimationStyles = () => {
    const baseStyles = {
      transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
      transitionDelay: `${delay}ms`,
    };

    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return { ...baseStyles, opacity: 0, transform: 'translateY(40px)' };
        case 'fade-down':
          return { ...baseStyles, opacity: 0, transform: 'translateY(-40px)' };
        case 'fade-left':
          return { ...baseStyles, opacity: 0, transform: 'translateX(40px)' };
        case 'fade-right':
          return { ...baseStyles, opacity: 0, transform: 'translateX(-40px)' };
        case 'zoom-in':
          return { ...baseStyles, opacity: 0, transform: 'scale(0.9)' };
        case 'blur-in':
          return { ...baseStyles, opacity: 0, filter: 'blur(10px)' };
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
