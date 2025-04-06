
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import Timeline, { TimelineItem } from "@/components/Timeline";
import { Briefcase, Code, GraduationCap, Layout } from "lucide-react";

const CareerSection = () => {
  return (
    <section id="career" className="py-20">
      <div className="container">
        <ScrollReveal>
          <SectionHeading 
            title="Career Journey"
            subtitle="A timeline of my professional growth and key milestones in my career. 🚀"
          />
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <Timeline>
            <TimelineItem 
              year="2023 - Present"
              title="Senior UI/UX Designer & Frontend Developer"
              description="Leading design and development for enterprise applications, focusing on creating scalable design systems and accessible user interfaces. Mentoring junior designers and developers."
              icon={<Briefcase size={18} />}
            />
            
            <TimelineItem 
              year="2021 - 2023"
              title="UI/UX Designer & Frontend Developer"
              description="Designed and developed user interfaces for web and mobile applications. Conducted user research and usability testing to inform design decisions."
              icon={<Briefcase size={18} />}
            />
            
            <TimelineItem 
              year="2020 - 2021"
              title="Junior Frontend Developer"
              description="Built responsive web applications using React and TypeScript. Collaborated with designers to implement pixel-perfect user interfaces."
              icon={<Code size={18} />}
            />
            
            <TimelineItem 
              year="2019 - 2020"
              title="UI Design Intern"
              description="Created wireframes, mockups, and prototypes for mobile applications. Assisted in user research and collecting feedback from stakeholders."
              icon={<Layout size={18} />}
            />
            
            <TimelineItem 
              year="2018 - 2019"
              title="Computer Science Student"
              description="Graduated with honors from the University of Nairobi with a BSc in Computer Science. Specialized in web technologies and human-computer interaction."
              icon={<GraduationCap size={18} />}
            />
          </Timeline>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CareerSection;
