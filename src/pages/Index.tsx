
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import SkillCard from '@/components/SkillCard';
import TestimonialCard from '@/components/TestimonialCard';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CopyEmailButton from '@/components/CopyEmailButton';
import ScrollReveal from '@/components/ScrollReveal';
import Timeline from '@/components/Timeline';
import { TimelineItem } from '@/components/Timeline';
import { Button } from '@/components/ui/button';
import { 
  ChevronUp, Code, Database, Download, Globe, Layout, 
  Lightbulb, Mail, MessageSquare, Smartphone, GraduationCap, 
  Award, Medal, Clipboard, Briefcase, Star, Book, ArrowRight
} from 'lucide-react';
import CertificateCard from '@/components/CertificateCard';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const testimonials = [
    {
      content: "Working with Marklewis was a game-changer for our startup. His technical skills combined with his eye for design helped us create a product that our users love. Can't recommend him enough! 🚀",
      author: "Sarah Johnson",
      role: "CEO, TechStart"
    },
    {
      content: "Marklewis has a rare ability to translate complex technical requirements into beautiful, intuitive interfaces. He's a true professional who delivers exceptional results. A joy to work with! ✨",
      author: "David Chen",
      role: "Product Manager, InnovateCorp"
    },
    {
      content: "I've worked with many developers over the years, but few have impressed me as much as Marklewis. His attention to detail and commitment to quality are unmatched. Absolutely incredible! 💯",
      author: "Michelle Rodriguez",
      role: "Design Director, CreativeWorks"
    },
    {
      content: "Marklewis exceeded all our expectations with his creative approach to problem-solving. He not only delivered what we asked for but improved upon our initial ideas. Simply brilliant! 👏",
      author: "Alex Thompson",
      role: "CTO, FutureTech"
    },
    {
      content: "Working with Marklewis felt like having a teammate who was just as invested in our success as we were. His communication skills and technical expertise made our project a huge success! 🏆",
      author: "Jessica Lee",
      role: "Founder, StartupLaunch"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7 space-y-6">
                <ScrollReveal delay={200} direction="left">
                  <div className="inline-block glass px-4 py-2 rounded-full mb-2 text-sm">
                    <span className="text-primary">✦</span> UI/UX Designer & Software Developer <span className="ml-1">🚀</span>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal delay={400} direction="left">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Hi, I'm <span className="text-gradient">Marklewis Mutugi</span> <span className="inline-block animate-bounce">👋</span>
                  </h1>
                </ScrollReveal>
                
                <ScrollReveal delay={600} direction="left">
                  <p className="text-xl text-muted-foreground">
                    I craft intuitive digital experiences that bridge the gap between user needs and business goals. With expertise in UI/UX design and software development, I bring ideas to life with code. <span className="text-primary">✨</span>
                  </p>
                </ScrollReveal>
                
                <ScrollReveal delay={800} direction="left">
                  <div className="pt-2 flex flex-wrap gap-4">
                    <Button size="lg" asChild>
                      <a href="#contact">
                        Get in touch <span className="ml-1">📩</span>
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a href="#projects">
                        View my work <span className="ml-1">👀</span>
                      </a>
                    </Button>
                  </div>
                </ScrollReveal>
              </div>
              
              <ScrollReveal delay={1000} direction="right" className="md:col-span-5">
                <div className="relative">
                  <div className="aspect-square rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse-slow"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                      src="/placeholder.svg" 
                      alt="Marklewis Mutugi"
                      className="w-4/5 h-4/5 object-cover rounded-full border-4 border-background"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="about" className="py-20 bg-secondary/50">
          <div className="container">
            <ScrollReveal>
              <SectionHeading 
                title="About Me"
                subtitle="Learn more about my journey, my passion, and what drives me to create outstanding digital experiences. 💪"
              />
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div className="glass rounded-xl overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Marklewis Mutugi at work"
                    className="w-full h-auto"
                  />
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="right">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">My Journey <span className="ml-1">🧭</span></h3>
                  <p className="text-muted-foreground">
                    I'm a versatile UI/UX designer and software developer with a passion for creating digital experiences that are both beautiful and functional. With a background in computer science and years of experience in the industry, I've developed a holistic approach to product development.
                  </p>
                  <p className="text-muted-foreground">
                    My expertise spans the entire product lifecycle, from user research and wireframing to front-end and back-end development. I believe in user-centered design principles and writing clean, maintainable code. <span className="text-primary">{"</>"}</span>
                  </p>
                  <p className="text-muted-foreground">
                    When I'm not coding or designing, you can find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers. 🤓
                  </p>
                  
                  <div className="pt-4">
                    <Button variant="outline" className="gap-2" asChild>
                      <a href="#" download>
                        <Download className="h-4 w-4" />
                        Download CV
                      </a>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
        
        {/* Career Timeline Section */}
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
        
        {/* Skills Section */}
        <section id="skills" className="py-20 bg-secondary/50">
          <div className="container">
            <ScrollReveal>
              <SectionHeading 
                title="Skills & Expertise"
                subtitle="Here are the technologies and tools I use to bring ideas to life. 🛠️"
              />
            </ScrollReveal>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { name: "UI/UX Design", icon: <Layout /> },
                { name: "Web Development", icon: <Globe /> },
                { name: "Mobile Development", icon: <Smartphone /> },
                { name: "Frontend", icon: <Code /> },
                { name: "Backend", icon: <Database /> },
                { name: "Creative Thinking", icon: <Lightbulb /> },
                { name: "Communication", icon: <MessageSquare /> },
                { name: "Problem Solving", icon: <Code /> }
              ].map((skill, index) => (
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

        {/* Education & Certifications Section */}
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
                {[
                  { title: "Google UX Design Professional Certificate", issuer: "Google", date: "2023", icon: <Clipboard /> },
                  { title: "AWS Certified Developer", issuer: "Amazon Web Services", date: "2022", icon: <Award /> },
                  { title: "React Native Specialist", issuer: "Meta (Facebook)", date: "2022", icon: <Medal /> },
                  { title: "Advanced JavaScript Certification", issuer: "freeCodeCamp", date: "2021", icon: <Clipboard /> },
                  { title: "UI/UX Design Mastery", issuer: "Interaction Design Foundation", date: "2021", icon: <Award /> },
                  { title: "Python for Data Science", issuer: "IBM", date: "2020", icon: <Medal /> }
                ].map((cert, index) => (
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
        
        {/* Projects Section */}
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
        
        {/* Blog Section Teaser */}
        <section id="blog" className="py-20">
          <div className="container">
            <ScrollReveal>
              <SectionHeading 
                title="From My Blog"
                subtitle="Check out my latest articles and thoughts on design, development, and technology. 📝"
              />
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "The Evolution of UI/UX Design Trends in 2024",
                  excerpt: "Explore the latest design trends shaping the digital landscape this year...",
                  date: "April 2, 2024",
                  category: "Design",
                  image: "/placeholder.svg"
                },
                {
                  title: "Building Performant React Applications",
                  excerpt: "Learn how to optimize your React applications for better performance...",
                  date: "March 15, 2024",
                  category: "Development",
                  image: "/placeholder.svg"
                },
                {
                  title: "The Power of Design Systems in Product Development",
                  excerpt: "How design systems can streamline your workflow and improve consistency...",
                  date: "February 28, 2024",
                  category: "Design",
                  image: "/placeholder.svg"
                }
              ].map((post, index) => (
                <ScrollReveal key={index} delay={index * 100} direction="up">
                  <article className="glass rounded-xl overflow-hidden hover-lift h-full flex flex-col">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-primary">{post.category}</span>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                      <p className="text-muted-foreground mb-4 flex-1">{post.excerpt}</p>
                      <div className="flex justify-end">
                        <Button variant="ghost" size="sm" className="hover:text-primary">
                          Read More
                        </Button>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
            
            <ScrollReveal delay={400}>
              <div className="mt-12 text-center">
                <Button className="gap-2" asChild>
                  <Link to="/blog">
                    Visit My Blog
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-secondary/50">
          <div className="container">
            <ScrollReveal>
              <SectionHeading 
                title="Client Testimonials"
                subtitle="What people are saying about working with me. Check out these amazing feedback! 💬"
              />
            </ScrollReveal>
            
            <ScrollReveal>
              <div className="mx-auto max-w-5xl px-8">
                <Carousel 
                  className="w-full" 
                  opts={{
                    align: "center",
                    loop: true
                  }}
                >
                  <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                      <CarouselItem key={index} className="md:basis-4/5 lg:basis-3/4 pl-6">
                        <div className="p-1">
                          <TestimonialCard 
                            content={testimonial.content}
                            author={testimonial.author}
                            role={testimonial.role}
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex justify-center gap-2 mt-4">
                    <CarouselPrevious className="static" />
                    <CarouselNext className="static" />
                  </div>
                </Carousel>
              </div>
            </ScrollReveal>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container">
            <ScrollReveal>
              <SectionHeading 
                title="Get In Touch"
                subtitle="Have a project in mind or want to chat? Feel free to reach out! 📬"
              />
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <ScrollReveal direction="left">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Let's Connect <span className="ml-1">🤝</span></h3>
                  <p className="text-muted-foreground mb-6">
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. Feel free to contact me using the form or the contact information.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Mail size={18} />
                      </div>
                      <div className="flex items-center">
                        <div>
                          <p className="font-medium">Email</p>
                          <a 
                            href="mailto:marklewis@example.com" 
                            className="text-sm text-primary hover:underline"
                            aria-label="Send email to marklewis@example.com"
                          >
                            marklewis@example.com
                          </a>
                        </div>
                        <CopyEmailButton email="marklewis@example.com" />
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Globe size={18} />
                      </div>
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-sm text-muted-foreground">
                          Nairobi, Kenya <span className="ml-1">📍</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="right">
                <ContactForm />
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-6 bottom-6 p-3 rounded-full bg-primary text-white shadow-lg transition-all ${
          showScrollTop ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp size={20} />
      </button>
      
      {/* WhatsApp Button */}
      <WhatsAppButton 
        phoneNumber="254700000000" 
        message="Hi Marklewis! I saw your amazing portfolio and I'm interested in working together on a project. When would be a good time to chat?"
        testimonialCount={testimonials.length * 5}
      />
    </div>
  );
};

export default Index;
