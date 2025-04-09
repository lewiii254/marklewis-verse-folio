
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import SkillCard from "@/components/SkillCard";
import { 
  Code, 
  Database, 
  FileCode, 
  Figma, 
  Globe, 
  LayoutGrid, 
  PenTool, 
  Smartphone, 
  ServerIcon, 
  Cpu, 
  TerminalSquare,
  BrainCircuit,
  Palette,
  Command
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useRef, useState } from "react";

const SkillsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
  const animationRef = useRef<number | null>(null);

  // Define the skills with better icons and organization
  const skillsData = [
    { name: "React", icon: <Code size={32} /> },
    { name: "JavaScript", icon: <FileCode size={32} /> },
    { name: "TypeScript", icon: <FileCode size={32} /> },
    { name: "HTML/CSS", icon: <LayoutGrid size={32} /> },
    { name: "Node.js", icon: <ServerIcon size={32} /> },
    { name: "Python", icon: <TerminalSquare size={32} /> },
    { name: "Django", icon: <Globe size={32} /> },
    { name: "React Native", icon: <Smartphone size={32} /> },
    { name: "Flutter", icon: <Smartphone size={32} /> },
    { name: "MongoDB", icon: <Database size={32} /> },
    { name: "PostgreSQL", icon: <Database size={32} /> },
    { name: "AWS", icon: <ServerIcon size={32} /> },
    { name: "Docker", icon: <Cpu size={32} /> },
    { name: "UI/UX Design", icon: <Palette size={32} /> },
    { name: "Figma", icon: <Figma size={32} /> },
    { name: "Adobe XD", icon: <PenTool size={32} /> },
    { name: "Git", icon: <Command size={32} /> },
    { name: "AI/ML", icon: <BrainCircuit size={32} /> }
  ];

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
  if (inView && autoScrollEnabled && !animationRef.current) {
    startAutoScroll();
  }

  // Make sure to clean up animation frame
  const handleUnmount = () => {
    stopAutoScroll();
  };

  // Cleanup on unmount
  useState(() => {
    return () => handleUnmount();
  });

  return (
    <section id="skills" className="py-16 bg-secondary/50" ref={ref}>
      <div className="container">
        <ScrollReveal>
          <SectionHeading 
            title="Skills & Technologies"
            subtitle="Technologies and tools I work with 🛠️"
          />
        </ScrollReveal>
        
        <ScrollReveal delay={300}>
          <div className="mt-10 relative overflow-hidden">
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
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SkillsSection;
