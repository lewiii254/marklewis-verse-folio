
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Blog", href: "/blog" },
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
          className="font-heading text-xl font-bold flex items-center gap-1"
        >
          <span className="text-gradient">Mark.Lewis</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.href.startsWith('/') ? (
                  <Link 
                    to={link.href} 
                    className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a 
                    href={link.href} 
                    className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
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
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.href.startsWith('/') ? (
                  <Link 
                    to={link.href} 
                    className="block py-2 text-foreground/80 hover:text-foreground hover:pl-2 transition-all" 
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a 
                    href={link.href} 
                    className="block py-2 text-foreground/80 hover:text-foreground hover:pl-2 transition-all" 
                    onClick={closeMenu}
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
