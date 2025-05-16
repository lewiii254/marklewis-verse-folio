
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import SkillsCarousel from "@/components/SkillsCarousel";
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
import { useIsMobile } from "@/hooks/use-mobile";

const SkillsSection = () => {
  const isMobile = useIsMobile();
  
  // Define the skills with better icons and organization
  const skillsData = [
    { name: "React", icon: <Code size={isMobile ? 24 : 32} /> },
    { name: "JavaScript", icon: <FileCode size={isMobile ? 24 : 32} /> },
    { name: "TypeScript", icon: <FileCode size={isMobile ? 24 : 32} /> },
    { name: "HTML/CSS", icon: <LayoutGrid size={isMobile ? 24 : 32} /> },
    { name: "Node.js", icon: <ServerIcon size={isMobile ? 24 : 32} /> },
    { name: "Python", icon: <TerminalSquare size={isMobile ? 24 : 32} /> },
    { name: "Django", icon: <Globe size={isMobile ? 24 : 32} /> },
    { name: "React Native", icon: <Smartphone size={isMobile ? 24 : 32} /> },
    { name: "Flutter", icon: <Smartphone size={isMobile ? 24 : 32} /> },
    { name: "MongoDB", icon: <Database size={isMobile ? 24 : 32} /> },
    { name: "PostgreSQL", icon: <Database size={isMobile ? 24 : 32} /> },
    { name: "AWS", icon: <ServerIcon size={isMobile ? 24 : 32} /> },
    { name: "Docker", icon: <Cpu size={isMobile ? 24 : 32} /> },
    { name: "UI/UX Design", icon: <Palette size={isMobile ? 24 : 32} /> },
    { name: "Figma", icon: <Figma size={isMobile ? 24 : 32} /> },
    { name: "Adobe XD", icon: <PenTool size={isMobile ? 24 : 32} /> },
    { name: "Git", icon: <Command size={isMobile ? 24 : 32} /> },
    { name: "AI/ML", icon: <BrainCircuit size={isMobile ? 24 : 32} /> }
  ];

  return (
    <section id="skills" className="py-16 bg-secondary/50">
      <div className="container px-4 mx-auto">
        <ScrollReveal>
          <SectionHeading 
            title="Skills & Technologies"
            subtitle="Technologies and tools I work with 🛠️"
          />
        </ScrollReveal>
        
        <ScrollReveal delay={300}>
          <SkillsCarousel skillsData={skillsData} />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SkillsSection;
