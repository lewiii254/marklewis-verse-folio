
import { useRef, useState, useEffect } from "react";
import SkillCard from "@/components/SkillCard";
import { useInView } from "react-intersection-observer";

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

  // Auto-scroll function
  const autoScroll = () => {
    if (!containerRef.current || !autoScrollEnabled) return;
    
    containerRef.current.scrollLeft += 1;
    
    // Reset scroll position when reaching the end
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
  }, [inView, autoScrollEnabled]);

  return (
    <div ref={ref} className="relative overflow-hidden">
      {/* Fade gradients at the edges */}
      <div className="absolute left-0 top-0 bottom-0 w-10 z-10 bg-gradient-to-r from-secondary/50 to-transparent"></div>
      <div className="absolute right-0 top-0 bottom-0 w-10 z-10 bg-gradient-to-l from-secondary/50 to-transparent"></div>
      
      {/* Skills container */}
      <div 
        ref={containerRef}
        className="flex overflow-x-auto scrollbar-none py-4 gap-5"
        style={{ WebkitOverflowScrolling: 'touch' }}
        onMouseEnter={pauseAutoScroll}
        onMouseLeave={resumeAutoScroll}
        onTouchStart={pauseAutoScroll}
        onTouchEnd={resumeAutoScroll}
      >
        {/* Skills followed by duplicate skills for seamless loop */}
        {[...skillsData, ...skillsData.slice(0, 6)].map((skill, index) => (
          <div 
            key={`${skill.name}-${index}`} 
            className="flex-shrink-0 px-1"
          >
            <SkillCard 
              name={skill.name}
              icon={skill.icon}
              className="w-[130px] min-w-[130px] sm:w-[150px] sm:min-w-[150px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCarousel;
