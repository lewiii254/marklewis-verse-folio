
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  testimonialCount?: number;
}

const WhatsAppButton = ({ 
  phoneNumber, 
  message = "Hi Marklewis! I love your portfolio and would like to discuss a potential project. Are you available?",
  testimonialCount = 25
}: WhatsAppButtonProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hide the button when scrolling down, show when scrolling up
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= 300 || currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Show the bubble after 2 seconds
    const bubbleTimer = setTimeout(() => {
      setShowBubble(true);
    }, 2000);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(bubbleTimer);
    };
  }, [lastScrollY]);

  const handleClick = () => {
    // Format the WhatsApp URL with phone number and encoded message
    const whatsappUrl = `https://wa.me/${+254790767347}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed left-6 bottom-6 z-50 flex items-end gap-3">
      {/* Text bubble */}
      <div 
        className={cn(
          "max-w-[200px] bg-white p-3 rounded-xl shadow-md text-sm transition-all duration-300 relative",
          showBubble ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-20px] pointer-events-none"
        )}
      >
        <p>Chat directly with me on WhatsApp! <span className="text-[#25D366]">✓</span></p>
        <div className="absolute bottom-3 right-[-8px] w-4 h-4 bg-white transform rotate-45"></div>
      </div>
      
      <div className="relative">
        {/* Badge showing testimonial count */}
        <Badge 
          className="absolute -top-2 -right-2 z-10 bg-primary hover:bg-primary/90 animate-pulse"
          variant="default"
        >
          {testimonialCount}+ Clients
        </Badge>
        
        <button
          onClick={handleClick}
          className={cn(
            "p-3.5 rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 flex items-center justify-center",
            "hover:scale-110 animate-bounce-slow",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          )}
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={24} className="fill-white" />
          <span className="absolute top-0 right-0 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default WhatsAppButton;
