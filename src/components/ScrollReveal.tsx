
import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const ScrollReveal = ({ 
  children, 
  className = '',
  threshold = 0.1,
  delay = 0,
  direction = 'up'
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('reveal-visible');
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px'
      }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, delay]);
  
  // Define animation classes based on direction
  let animationClass = 'reveal-up';
  if (direction === 'down') animationClass = 'reveal-down';
  if (direction === 'left') animationClass = 'reveal-left';
  if (direction === 'right') animationClass = 'reveal-right';
  
  return (
    <div
      ref={ref}
      className={`reveal ${animationClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
