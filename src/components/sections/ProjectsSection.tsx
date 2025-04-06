
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
            title="Featured Projects"
            subtitle="Check out some of my recent work and the problems I've solved. 🚀"
          />
        </ScrollReveal>
        
        <div className="space-y-20">
          <ScrollReveal>
            <ProjectCard 
              title="E-commerce Platform"
              description="A modern e-commerce platform built with React, Node.js, and MongoDB. Features include product search, filtering, user authentication, cart management, and payment integration."
              imageSrc="/placeholder.svg"
              tags={["React", "Node.js", "MongoDB", "Express", "Redux"]}
              liveDemoUrl="#"
              githubUrl="#"
            />
          </ScrollReveal>
          
          <ScrollReveal>
            <ProjectCard 
              title="Task Management App"
              description="A productivity tool for managing tasks and projects. Built with React Native for cross-platform compatibility, with features like drag-and-drop, notifications, and real-time collaboration."
              imageSrc="/placeholder.svg"
              tags={["React Native", "Firebase", "Redux", "Expo", "TypeScript"]}
              liveDemoUrl="#"
              githubUrl="#"
              reversed
            />
          </ScrollReveal>
          
          <ScrollReveal>
            <ProjectCard 
              title="Financial Dashboard"
              description="A comprehensive dashboard for financial data visualization and analysis. Includes charts, graphs, and interactive reports to help users make data-driven decisions."
              imageSrc="/placeholder.svg"
              tags={["React", "D3.js", "Material UI", "Express", "PostgreSQL"]}
              liveDemoUrl="#"
              githubUrl="#"
            />
          </ScrollReveal>
        </div>
        
        <ScrollReveal delay={300}>
          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                View All Projects <span className="ml-1">🔍</span>
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProjectsSection;
