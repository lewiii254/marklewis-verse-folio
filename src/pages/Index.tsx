
import { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ChevronUp } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { ScrollArea } from '@/components/ui/scroll-area';

// Import main sections directly
import HeroSection from '@/components/sections/HeroSection';

// Lazy load other sections for better performance
const AboutSection = lazy(() => import('@/components/sections/AboutSection'));
const CareerSection = lazy(() => import('@/components/sections/CareerSection'));
const SkillsSection = lazy(() => import('@/components/sections/SkillsSection'));
const EducationSection = lazy(() => import('@/components/sections/EducationSection'));
const ProjectsSection = lazy(() => import('@/components/sections/ProjectsSection'));
const BlogSection = lazy(() => import('@/components/sections/BlogSection'));
const TestimonialsSection = lazy(() => import('@/components/sections/TestimonialsSection'));
const ContactSection = lazy(() => import('@/components/sections/ContactSection'));
const RatingSection = lazy(() => import('@/components/sections/RatingSection'));
const NewsletterSection = lazy(() => import('@/components/sections/NewsletterSection'));

// Loading component for suspense fallback
const SectionSkeleton = () => (
  <div className="w-full py-16">
    <Skeleton className="w-[80%] h-8 mx-auto mb-4" />
    <Skeleton className="w-[60%] h-6 mx-auto mb-8" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      <Skeleton className="h-[200px] w-full rounded-xl" />
      <Skeleton className="h-[200px] w-full rounded-xl" />
    </div>
  </div>
);

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Mark as loaded after a short delay to ensure smooth transitions
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
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
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }, 100);
        }
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    // Check hash on initial load
    handleHashChange();
    
    // Passive true improves scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Add CSS to improve scrolling performance
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
      clearTimeout(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ScrollArea className="h-screen w-full">
      <div className={`flex flex-col min-h-screen w-full overflow-hidden transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        
        <main className="flex-1 w-full">
          {/* Hero section is not lazy loaded for immediate display */}
          <HeroSection />
          
          {/* Lazy-loaded sections with suspense fallbacks */}
          <Suspense fallback={<SectionSkeleton />}>
            <AboutSection />
          </Suspense>
          
          <Suspense fallback={<SectionSkeleton />}>
            <CareerSection />
          </Suspense>
          
          <Suspense fallback={<SectionSkeleton />}>
            <SkillsSection />
          </Suspense>
          
          <Suspense fallback={<SectionSkeleton />}>
            <EducationSection />
          </Suspense>
          
          <Suspense fallback={<SectionSkeleton />}>
            <ProjectsSection />
          </Suspense>
          
          <Suspense fallback={<SectionSkeleton />}>
            <BlogSection />
          </Suspense>
          
          <Suspense fallback={<SectionSkeleton />}>
            <TestimonialsSection />
          </Suspense>
          
          <Suspense fallback={<SectionSkeleton />}>
            <ContactSection />
          </Suspense>
          
          <Suspense fallback={<SectionSkeleton />}>
            <NewsletterSection />
          </Suspense>
          
          <Suspense fallback={<SectionSkeleton />}>
            <RatingSection />
          </Suspense>
        </main>
        
        <Footer />
        
        {/* Scroll to top button - improved animation */}
        <button
          onClick={scrollToTop}
          className={`fixed right-4 sm:right-6 bottom-20 sm:bottom-24 p-2 sm:p-3 rounded-full bg-primary text-white shadow-lg transition-all duration-300 z-40 ${
            showScrollTop ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4 pointer-events-none'
          }`}
          aria-label="Scroll to top"
        >
          <ChevronUp size={18} />
        </button>
        
        {/* WhatsApp Button */}
        <WhatsAppButton 
          phoneNumber="254790767347" 
          message="Hi Marklewis👋! I saw your amazing✨ portfolio and I'm interested in working together🤝 on a project. When would be a good time to chat?"
        />
      </div>
    </ScrollArea>
  );
};

export default Index;
