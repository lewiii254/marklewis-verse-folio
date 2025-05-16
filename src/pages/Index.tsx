
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ChevronUp } from 'lucide-react';

// Import section components
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import CareerSection from '@/components/sections/CareerSection';
import SkillsSection from '@/components/sections/SkillsSection';
import EducationSection from '@/components/sections/EducationSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import BlogSection from '@/components/sections/BlogSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import RatingSection from '@/components/sections/RatingSection';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    // Add hash change event to improve navigation
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Add slight delay to ensure smooth scrolling
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    // Check hash on initial load
    handleHashChange();
    
    // Passive true improves scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen w-full overflow-hidden">
      <Navbar />
      
      <main className="flex-1 w-full">
        <HeroSection />
        <AboutSection />
        <CareerSection />
        <SkillsSection />
        <EducationSection />
        <ProjectsSection />
        <BlogSection />
        <TestimonialsSection />
        <ContactSection />
        <RatingSection />
      </main>
      
      <Footer />
      
      {/* Scroll to top button - improved positioning for mobile */}
      <button
        onClick={scrollToTop}
        className={`fixed right-4 sm:right-6 bottom-20 sm:bottom-24 p-2 sm:p-3 rounded-full bg-primary text-white shadow-lg transition-all z-40 ${
          showScrollTop ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp size={18} />
      </button>
      
      {/* WhatsApp Button - improved positioning for mobile */}
      <WhatsAppButton 
        phoneNumber="254790767347" 
        message="Hi Marklewis👋! I saw your amazing✨ portfolio and I'm interested in working together🤝 on a project. When would be a good time to chat?"
      />
    </div>
  );
};

export default Index;
