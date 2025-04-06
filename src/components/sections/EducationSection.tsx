
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import CertificateCard from "@/components/CertificateCard";
import { Award, Clipboard, GraduationCap, Medal } from "lucide-react";

const EducationSection = () => {
  const certificates = [
    { title: "Google UX Design Professional Certificate", issuer: "Google", date: "2023", icon: <Clipboard /> },
    { title: "AWS Certified Developer", issuer: "Amazon Web Services", date: "2022", icon: <Award /> },
    { title: "React Native Specialist", issuer: "Meta (Facebook)", date: "2022", icon: <Medal /> },
    { title: "Advanced JavaScript Certification", issuer: "freeCodeCamp", date: "2021", icon: <Clipboard /> },
    { title: "UI/UX Design Mastery", issuer: "Interaction Design Foundation", date: "2021", icon: <Award /> },
    { title: "Python for Data Science", issuer: "IBM", date: "2020", icon: <Medal /> }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container">
        <ScrollReveal>
          <SectionHeading 
            title="Education & Certifications"
            subtitle="My academic journey and professional qualifications that validate my expertise. 🎓"
          />
        </ScrollReveal>
        
        <div className="mb-16">
          <ScrollReveal>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="mr-2 text-primary" />
              Education
            </h3>
          </ScrollReveal>
          
          <div className="space-y-8">
            <ScrollReveal direction="left">
              <div className="glass p-6 rounded-xl hover-lift">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <h4 className="text-xl font-bold">Bachelor of Science in Computer Science</h4>
                    <p className="text-lg text-primary">University of Nairobi</p>
                    <p className="mt-2 text-muted-foreground">Studied algorithms, data structures, software engineering principles, and computer networks. Graduated with honors.</p>
                  </div>
                  <div className="text-right md:whitespace-nowrap">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">2018 - 2022</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right">
              <div className="glass p-6 rounded-xl hover-lift">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <h4 className="text-xl font-bold">High School Diploma</h4>
                    <p className="text-lg text-primary">Nairobi Secondary School</p>
                    <p className="mt-2 text-muted-foreground">Focused on Mathematics, Physics, and Computer Studies. Participated in national coding competitions.</p>
                  </div>
                  <div className="text-right md:whitespace-nowrap">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">2014 - 2018</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        <div>
          <ScrollReveal>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Award className="mr-2 text-primary" />
              Certifications
            </h3>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <ScrollReveal key={index} delay={index * 100} direction={index % 2 === 0 ? 'up' : 'down'}>
                <CertificateCard 
                  title={cert.title}
                  issuer={cert.issuer}
                  date={cert.date}
                  icon={cert.icon}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
