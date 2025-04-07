
import { useEffect, useRef, ReactNode, useState } from 'react';

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
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;
    
    // Use the Intersection Observer API for better performance
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          // Only set once to avoid unnecessary rerenders
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px'
      }
    );
    
    observer.observe(currentRef);
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay, isVisible]);
  
  // Define animation classes based on direction
  let animationClass = 'reveal-up';
  if (direction === 'down') animationClass = 'reveal-down';
  if (direction === 'left') animationClass = 'reveal-left';
  if (direction === 'right') animationClass = 'reveal-right';
  
  return (
    <div
      ref={ref}
      className={`reveal ${animationClass} ${isVisible ? 'reveal-visible' : ''} ${className}`}
      style={{ 
        willChange: 'opacity, transform',
        // Use hardware acceleration for smoother animations
        transform: isVisible ? 'translate3d(0, 0, 0)' : undefined
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
