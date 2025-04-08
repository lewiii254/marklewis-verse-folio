
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
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const SkillsSection = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const { ref, inView } = useInView({ threshold: 0.1 });
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Design skills
  const designTools = [
    { name: "Figma", icon: <Figma /> },
    { name: "Adobe XD", icon: <Layout /> },
    { name: "Sketch", icon: <PencilRuler /> },
    { name: "Photoshop", icon: <Image /> },
    { name: "UI/UX Design", icon: <Layout /> },
    { name: "Prototyping", icon: <Layers /> }
  ];

  // Development skills
  const developmentSkills = [
    { name: "React", icon: <Code /> },
    { name: "React Native", icon: <Smartphone /> },
    { name: "JavaScript", icon: <Code /> },
    { name: "TypeScript", icon: <Code /> },
    { name: "Node.js", icon: <Database /> },
    { name: "Python", icon: <Code /> },
    { name: "Django", icon: <Globe /> },
    { name: "Flutter", icon: <Smartphone /> },
    { name: "RESTful APIs", icon: <Database /> },
    { name: "MongoDB", icon: <Database /> }
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

  // Auto-scrolling functionality
  useEffect(() => {
    if (inView && autoPlay) {
      const scrollCarousel = () => {
        const content = document.querySelector('.skills-carousel-content');
        if (content) {
          const scrollAmount = 1; // Pixels to scroll per interval
          content.scrollLeft += scrollAmount;
          
          // Reset to beginning when reaching the end
          if (content.scrollLeft >= content.scrollWidth - content.clientWidth - 10) {
            content.scrollLeft = 0;
          }
        }
      };

      autoPlayRef.current = setInterval(scrollCarousel, 30); // Smooth scrolling
    } else if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [inView, autoPlay]);

  return (
    <section id="skills" className="py-20 bg-secondary/50" ref={ref}>
      <div className="container">
        <ScrollReveal>
          <SectionHeading 
            title="Skills & Technologies"
            subtitle="Here are the technologies and tools I use to bring ideas to life. 🛠️"
          />
        </ScrollReveal>
        
        <div className="mt-10 overflow-hidden" 
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
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
                <CarouselContent className="skills-carousel-content">
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
              <div className="space-y-4">
                {designTools.slice(0, 4).map((tool, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <span className="text-primary">{tool.icon}</span>
                      <span>{tool.name}</span>
                    </span>
                    <div className="w-2/3 h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="bg-primary h-full rounded-full animate-pulse-slow" 
                        style={{ width: `${95 - index * 5}%` }}
                      ></div>
                    </div>
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
              <div className="space-y-4">
                {developmentSkills.slice(0, 4).map((skill, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <span className="text-primary">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </span>
                    <div className="w-2/3 h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="bg-primary h-full rounded-full animate-pulse-slow animation-delay-2000" 
                        style={{ width: `${95 - index * 5}%` }}
                      ></div>
                    </div>
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
