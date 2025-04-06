
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import SkillCard from "@/components/SkillCard";
import { Layout, Globe, Smartphone, Code, Database, Lightbulb, MessageSquare } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    { name: "UI/UX Design", icon: <Layout /> },
    { name: "Web Development", icon: <Globe /> },
    { name: "Mobile Development", icon: <Smartphone /> },
    { name: "Frontend", icon: <Code /> },
    { name: "Backend", icon: <Database /> },
    { name: "Creative Thinking", icon: <Lightbulb /> },
    { name: "Communication", icon: <MessageSquare /> },
    { name: "Problem Solving", icon: <Code /> }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="container">
        <ScrollReveal>
          <SectionHeading 
            title="Skills & Expertise"
            subtitle="Here are the technologies and tools I use to bring ideas to life. 🛠️"
          />
        </ScrollReveal>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <ScrollReveal key={index} delay={index * 50} direction={index % 2 === 0 ? 'left' : 'right'}>
              <SkillCard name={skill.name} icon={skill.icon} />
            </ScrollReveal>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <ScrollReveal direction="left">
            <div>
              <h3 className="text-xl font-bold mb-4">Design Tools <span className="ml-1">🎨</span></h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Figma</span>
                  <div className="w-2/3 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Adobe XD</span>
                  <div className="w-2/3 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sketch</span>
                  <div className="w-2/3 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Photoshop</span>
                  <div className="w-2/3 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right">
            <div>
              <h3 className="text-xl font-bold mb-4">Development Skills <span className="ml-1">💻</span></h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>React / React Native</span>
                  <div className="w-2/3 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>JavaScript / TypeScript</span>
                  <div className="w-2/3 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Node.js</span>
                  <div className="w-2/3 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Python / Django</span>
                  <div className="w-2/3 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
