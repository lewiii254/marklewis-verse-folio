import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import SkillCard from "@/components/SkillCard";
import { 
  Layout, 
  Globe, 
  Smartphone, 
  Code, 
  Database, 
  Lightbulb, 
  MessageSquare,
  Figma,
  PencilRuler,
  Image,
  Layers,
  BadgeCheck
} from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const SkillsSection = () => {
  const [animatedSkills, setAnimatedSkills] = useState<{[key: string]: number}>({});
  const { ref, inView } = useInView({ threshold: 0.1 });
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);

  // Design skills
  const designTools = [
    { name: "Figma", icon: <Figma />, proficiency: 95 },
    { name: "Adobe XD", icon: <Layout />, proficiency: 90 },
    { name: "Sketch", icon: <PencilRuler />, proficiency: 85 },
    { name: "Photoshop", icon: <Image />, proficiency: 80 },
    { name: "UI/UX Design", icon: <Layout />, proficiency: 92 },
    { name: "Prototyping", icon: <Layers />, proficiency: 88 }
  ];

  // Development skills
  const developmentSkills = [
    { name: "React", icon: <Code />, proficiency: 95 },
    { name: "React Native", icon: <Smartphone />, proficiency: 90 },
    { name: "JavaScript", icon: <Code />, proficiency: 93 },
    { name: "TypeScript", icon: <Code />, proficiency: 88 },
    { name: "Node.js", icon: <Database />, proficiency: 85 },
    { name: "Python", icon: <Code />, proficiency: 82 },
    { name: "Django", icon: <Globe />, proficiency: 80 },
    { name: "Flutter", icon: <Smartphone />, proficiency: 85 },
    { name: "RESTful APIs", icon: <Database />, proficiency: 90 },
    { name: "MongoDB", icon: <Database />, proficiency: 87 }
  ];

  // Soft skills
  const softSkills = [
    { name: "Creative Thinking", icon: <Lightbulb /> },
    { name: "Communication", icon: <MessageSquare /> },
    { name: "Problem Solving", icon: <BadgeCheck /> },
    { name: "Team Leadership", icon: <BadgeCheck /> }
  ];

  // Combine all skills for single continuous carousel
  const allSkills = [...designTools, ...developmentSkills, ...softSkills];

  // Improved auto-scrolling with requestAnimationFrame for smoother animation
  const autoScroll = () => {
    if (!carouselRef.current || !autoScrollEnabled) return;
    
    const scrollPosition = carouselRef.current.scrollLeft;
    const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
    
    // If we've reached the end, reset to the beginning with a small delay
    if (scrollPosition >= maxScroll - 5) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'auto' });
    } else {
      // Otherwise, keep scrolling
      carouselRef.current.scrollLeft += 1;
    }
    
    // Continue the animation loop
    animationRef.current = requestAnimationFrame(autoScroll);
  };

  // Start/stop auto-scrolling when component is in view
  useEffect(() => {
    if (inView && autoScrollEnabled) {
      animationRef.current = requestAnimationFrame(autoScroll);
    } else if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    // Cleanup animation frame on unmount
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [inView, autoScrollEnabled]);

  // Pause scrolling on hover/touch
  const pauseAutoScroll = () => setAutoScrollEnabled(false);
  const resumeAutoScroll = () => setAutoScrollEnabled(true);

  // Animate skill bars when in view
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        const animatedValues: {[key: string]: number} = {};
        
        [...designTools, ...developmentSkills].forEach((skill) => {
          animatedValues[skill.name] = skill.proficiency;
        });
        
        setAnimatedSkills(animatedValues);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <section id="skills" className="py-20 bg-secondary/50" ref={ref}>
      <div className="container">
        <ScrollReveal>
          <SectionHeading 
            title="Skills & Technologies"
            subtitle="Here are the technologies and tools I use to bring ideas to life. 🛠️"
          />
        </ScrollReveal>
        
        <div className="mt-10 overflow-hidden">
          <ScrollReveal delay={300}>
            <div className="relative">
              {/* Fade gradient at edges */}
              <div className="absolute left-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-r from-secondary/50 to-transparent"></div>
              <div className="absolute right-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-l from-secondary/50 to-transparent"></div>
              
              <Carousel 
                opts={{
                  align: "start",
                  loop: true,
                  dragFree: true,
                }}
                className="w-full"
              >
                <CarouselContent 
                  className="skills-carousel-content" 
                  ref={carouselRef}
                  onMouseEnter={pauseAutoScroll}
                  onMouseLeave={resumeAutoScroll}
                  onTouchStart={pauseAutoScroll}
                  onTouchEnd={resumeAutoScroll}
                >
                  {allSkills.map((skill, index) => (
                    <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 pl-4">
                      <div className="p-1">
                        <SkillCard 
                          name={skill.name} 
                          icon={skill.icon} 
                          className="glass-border" 
                        />
                      </div>
                    </CarouselItem>
                  ))}
                  
                  {/* Duplicate the first few items to create seamless looping effect */}
                  {allSkills.slice(0, 6).map((skill, index) => (
                    <CarouselItem key={`dup-${index}`} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 pl-4">
                      <div className="p-1">
                        <SkillCard 
                          name={skill.name} 
                          icon={skill.icon} 
                          className="glass-border" 
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </ScrollReveal>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <ScrollReveal direction="left">
            <div className="glass-border p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Figma className="text-primary" size={20} />
                <span>Design Tools</span>
                <span className="ml-1">🎨</span>
              </h3>
              <div className="space-y-6">
                {designTools.slice(0, 4).map((tool, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-2">
                        <span className="text-primary">{tool.icon}</span>
                        <span>{tool.name}</span>
                      </span>
                      <span className="text-sm font-medium">{animatedSkills[tool.name] || 0}%</span>
                    </div>
                    <Progress 
                      value={animatedSkills[tool.name] || 0} 
                      className="h-2 bg-secondary"
                    />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right">
            <div className="glass-border p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Code className="text-primary" size={20} />
                <span>Development Skills</span>
                <span className="ml-1">💻</span>
              </h3>
              <div className="space-y-6">
                {developmentSkills.slice(0, 4).map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-2">
                        <span className="text-primary">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </span>
                      <span className="text-sm font-medium">{animatedSkills[skill.name] || 0}%</span>
                    </div>
                    <Progress 
                      value={animatedSkills[skill.name] || 0} 
                      className="h-2 bg-secondary"
                    />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
