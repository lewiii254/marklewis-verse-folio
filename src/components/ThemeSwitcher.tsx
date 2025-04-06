
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark"); // Default to dark
  const { toast } = useToast();

  // Initialize theme from localStorage or default to dark
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    
    if (storedTheme === "light") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      // Default to dark mode if no preference is stored
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    
    // Update DOM and localStorage
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      toast({
        title: "Dark Mode Activated",
        description: "Your eyes will thank you later! 😎",
        duration: 2000,
      });
    } else {
      document.documentElement.classList.remove("dark");
      toast({
        title: "Light Mode Activated",
        description: "Brightness is on! ☀️",
        duration: 2000,
      });
    }
    
    localStorage.setItem("theme", newTheme);
  };

  return (
    <Button 
      variant="outline" 
      size="icon" 
      onClick={toggleTheme}
      className={`rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 ${
        theme === "dark" 
          ? "bg-primary/10 hover:bg-primary/20 text-primary" 
          : "bg-secondary hover:bg-secondary/80"
      }`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === "light" ? (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all animate-pulse-slow" />
      )}
    </Button>
  );
};

export default ThemeSwitcher;
