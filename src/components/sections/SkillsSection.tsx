
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

const SkillsSection = () => {
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

  return (
    <section id="skills" className="py-16 bg-secondary/50">
      <div className="container">
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
