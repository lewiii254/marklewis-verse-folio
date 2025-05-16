
import { useRef, useState, useEffect } from "react";
import SkillCard from "@/components/SkillCard";
import { useInView } from "react-intersection-observer";
import { useIsMobile } from "@/hooks/use-mobile";

interface SkillsCarouselProps {
  skillsData: {
    name: string;
    icon: React.ReactNode;
  }[];
}

const SkillsCarousel = ({ skillsData }: SkillsCarouselProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
  const animationRef = useRef<number | null>(null);
  const { ref, inView } = useInView({ threshold: 0.1 });
  const isMobile = useIsMobile();

  // Auto-scroll function with dynamic speed based on device
  const autoScroll = () => {
    if (!containerRef.current || !autoScrollEnabled) return;
    
    // Scroll faster on mobile devices
    const scrollAmount = isMobile ? 1.2 : 0.8;
    containerRef.current.scrollLeft += scrollAmount;
    
    // Reset scroll position when reaching the end for infinite scroll feel
    if (containerRef.current.scrollLeft >= containerRef.current.scrollWidth - containerRef.current.clientWidth - 5) {
      containerRef.current.scrollLeft = 0;
    }
    
    animationRef.current = requestAnimationFrame(autoScroll);
  };

  // Handle autoscroll
  const startAutoScroll = () => {
    if (inView && autoScrollEnabled && !animationRef.current) {
      animationRef.current = requestAnimationFrame(autoScroll);
    }
  };

  const stopAutoScroll = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  // Pause scrolling on hover/touch
  const pauseAutoScroll = () => setAutoScrollEnabled(false);
  const resumeAutoScroll = () => {
    setAutoScrollEnabled(true);
    startAutoScroll();
  };

  // Start scrolling when in view
  useEffect(() => {
    if (inView && autoScrollEnabled && !animationRef.current) {
      startAutoScroll();
    }

    return () => {
      stopAutoScroll();
    };
  }, [inView, autoScrollEnabled, isMobile]);

  return (
    <div ref={ref} className="relative w-full overflow-hidden">
      {/* Fade gradients at the edges */}
      <div className="absolute left-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-r from-secondary/50 to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-l from-secondary/50 to-transparent pointer-events-none"></div>
      
      {/* Skills container with improved touch handling */}
      <div 
        ref={containerRef}
        className="flex overflow-x-auto scrollbar-none py-4 px-2 gap-4 snap-x"
        style={{ 
          WebkitOverflowScrolling: 'touch',
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth'
        }}
        onMouseEnter={pauseAutoScroll}
        onMouseLeave={resumeAutoScroll}
        onTouchStart={pauseAutoScroll}
        onTouchEnd={resumeAutoScroll}
      >
        {/* Skills followed by duplicate skills for seamless loop */}
        {[...skillsData, ...skillsData.slice(0, 4)].map((skill, index) => (
          <div 
            key={`${skill.name}-${index}`} 
            className="flex-shrink-0 px-1 snap-start"
          >
            <SkillCard 
              name={skill.name}
              icon={skill.icon}
              className="w-[120px] min-w-[120px] sm:w-[150px] sm:min-w-[150px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCarousel;
