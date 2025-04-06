
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const HeroSection = () => {
  return (
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
                  src="/myPic.jpg" 
                  alt="Marklewis Mutugi"
                  className="w-4/5 h-4/5 object-cover rounded-full border-4 border-background"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
