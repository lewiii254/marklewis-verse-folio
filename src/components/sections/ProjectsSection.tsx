
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/50">
      <div className="container">
        <ScrollReveal>
          <SectionHeading 
            title="Featured Projects😁"
            subtitle="Check out some of my recent work and the problems I've solved. 🚀"
          />
        </ScrollReveal>
        
        <div className="space-y-20">
          <ScrollReveal>
            <ProjectCard 
              title="Kazi-Haven Job Platform🧾"
              description="A modern job portal platform built with React, Node.js, and MongoDB. Features include job search, filtering, user authentication, application tracking, employer dashboards, and M-Pesa payment integration."
              imageSrc="/JobPortal.png"
              tags={["React", "Node.js", "MongoDB", "Express", "Redux"]}
              liveDemoUrl="https://kazi-haven.vercel.app/"
              githubUrl="https://github.com/lewiii254/Kazi-Haven.git"
            />
          </ScrollReveal>
          
          <ScrollReveal>
            <ProjectCard 
              title="Tembea Afrika 🌍✈️"
              description="A modern tourism platform built with React, Node.js, and MongoDB. Features include destination search, category filtering, user authentication, itinerary planning, booking management, and M-Pesa payment integration."
              imageSrc="/Tourism.png"
              tags={["React", "Firebase", "Redux", "Tailwind CSS", "TypeScript"]}
              liveDemoUrl="https://tembea-africa.vercel.app/"
              githubUrl="https://github.com/lewiii254/safaricom-hook-final-project-and-deployment-week-8-lewiii254.git"
              reversed
            />
          </ScrollReveal>
          
          <ScrollReveal>
            <ProjectCard 
              title="🌱 AI-Powered Plant Health Assistant"
              description="An intelligent plant health assistant powered by AI for real-time crop diagnostics and care. Includes image-based disease detection, expert treatment recommendations, and interactive insights to help farmers make informed, data-driven decisions. 🌿📊"
              imageSrc="/Agri.png"
              tags={["React", "Supabase", "Material UI", "AI & ML", "PostgreSQL"]}
              liveDemoUrl="https://shamba-smart-scan.vercel.app/"
              githubUrl="https://github.com/lewiii254/shamba-smart-scan.git"
            />
          </ScrollReveal>
        </div>
        
        <ScrollReveal delay={300}>
          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <a href="https://github.com/lewiii254?tab=repositories" target="_blank" rel="noopener noreferrer">
                View All Projects🧾 <span className="ml-1">🔍</span>
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProjectsSection;
