
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Code, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Identify which section is currently in view
      const sections = [
        "home", "about", "career", "skills", 
        "education", "projects", "blog", 
        "testimonials", "contact"
      ];
      
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    // Call once to set initial active section
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Career", href: "/#career" },
    { name: "Skills", href: "/#skills" },
    { name: "Education", href: "/#education" },
    { name: "Projects", href: "/#projects" },
    { name: "Blog", href: "/blog" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "py-3 bg-background/80 backdrop-blur-lg shadow-sm" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link 
          to="/" 
          className="font-heading text-xl font-bold flex items-center gap-2"
        >
          {/* Improved logo with better color contrast */}
          <div className="relative flex items-center">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-shift"></div>
            <div className="relative flex items-center justify-center w-10 h-10 bg-background rounded-lg ring-1 ring-white/50 overflow-hidden">
              <Code className="text-white w-6 h-6 z-10" />
              <Sparkles className="absolute text-white/90 w-8 h-8 animate-pulse-slow" />
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/40 to-purple-500/40 animate-pulse"></div>
            </div>
            <span className="ml-2 font-extrabold tracking-tight">
              <span className="text-white bg-clip-text">Mark</span>
              <span className="text-white bg-clip-text">Lewis</span>
            </span>
          </div>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = 
                (link.href === "/#home" && activeSection === "home") ||
                (link.href === "/#about" && activeSection === "about") ||
                (link.href === "/#career" && activeSection === "career") ||
                (link.href === "/#skills" && activeSection === "skills") ||
                (link.href === "/#education" && activeSection === "education") ||
                (link.href === "/#projects" && activeSection === "projects") ||
                (link.href === "/blog" && window.location.pathname === "/blog") ||
                (link.href === "/#testimonials" && activeSection === "testimonials") ||
                (link.href === "/#contact" && activeSection === "contact");
                
              return (
                <li key={link.name}>
                  {link.href.startsWith('/') && !link.href.includes('#') ? (
                    <Link 
                      to={link.href} 
                      className={`text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-primary after:transition-all ${
                        isActive 
                          ? "text-foreground after:w-full" 
                          : "text-foreground/80 hover:text-foreground after:w-0 hover:after:w-full"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a 
                      href={link.href} 
                      className={`text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-primary after:transition-all ${
                        isActive 
                          ? "text-foreground after:w-full" 
                          : "text-foreground/80 hover:text-foreground after:w-0 hover:after:w-full"
                      }`}
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
          <ThemeSwitcher />
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeSwitcher />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg shadow-md transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-[500px] py-5" : "max-h-0"
        }`}
      >
        <nav className="container">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = 
                (link.href === "/#home" && activeSection === "home") ||
                (link.href === "/#about" && activeSection === "about") ||
                (link.href === "/#career" && activeSection === "career") ||
                (link.href === "/#skills" && activeSection === "skills") ||
                (link.href === "/#education" && activeSection === "education") ||
                (link.href === "/#projects" && activeSection === "projects") ||
                (link.href === "/blog" && window.location.pathname === "/blog") ||
                (link.href === "/#testimonials" && activeSection === "testimonials") ||
                (link.href === "/#contact" && activeSection === "contact");
              
              return (
                <li key={link.name}>
                  {link.href.startsWith('/') && !link.href.includes('#') ? (
                    <Link 
                      to={link.href} 
                      className={`block py-2 hover:pl-2 transition-all ${
                        isActive ? "text-foreground font-medium" : "text-foreground/80 hover:text-foreground"
                      }`}
                      onClick={closeMenu}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a 
                      href={link.href} 
                      className={`block py-2 hover:pl-2 transition-all ${
                        isActive ? "text-foreground font-medium" : "text-foreground/80 hover:text-foreground"
                      }`}
                      onClick={closeMenu}
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
