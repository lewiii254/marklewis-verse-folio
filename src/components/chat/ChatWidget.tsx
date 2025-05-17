
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, ArrowRight } from "lucide-react";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import ChatMessage, { ChatMessageProps } from "./ChatMessage";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface ChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

// Conversation flow and persona structure
type ConversationStep = {
  id: string;
  messages?: ChatMessageProps[];
  options?: {
    text: string;
    nextId: string;
  }[];
  inputRequired?: boolean;
  collectEmail?: boolean;
  onInput?: (input: string) => string | null;
  gif?: string;
};

const CONVERSATION_STEPS: Record<string, ConversationStep> = {
  "start": {
    id: "start",
    messages: [
      {
        content: "Hello there! 👋",
        timestamp: new Date(),
        sender: "admin",
        status: "read",
      },
      {
        content: "I'm Marklogic, Marklewis's personal AI assistant. Good to see you... uhmm",
        timestamp: new Date(),
        sender: "admin",
        status: "read",
      },
      {
        content: "What's your name? 😅",
        timestamp: new Date(),
        sender: "admin",
        status: "read",
      }
    ],
    inputRequired: true,
    onInput: (name) => {
      if (name.trim()) {
        return "ask-email";
      }
      return null;
    }
  },
  "ask-email": {
    id: "ask-email",
    messages: [
      {
        content: "Can I have your email as well?",
        timestamp: new Date(),
        sender: "admin",
        status: "read",
      }
    ],
    inputRequired: true,
    collectEmail: true,
    onInput: (email) => {
      // Simple email validation
      if (email.includes("@") && email.includes(".")) {
        return "profile-created";
      } else if (email.toLowerCase() === "naah" || email.toLowerCase() === "no") {
        return "ask-email-again";
      }
      return null;
    }
  },
  "ask-email-again": {
    id: "ask-email-again",
    messages: [
      {
        content: "Can I have your email as well?",
        timestamp: new Date(),
        sender: "admin",
        status: "read",
      }
    ],
    inputRequired: true,
    collectEmail: true,
    onInput: (email) => {
      // Simple email validation
      if (email.includes("@") && email.includes(".")) {
        return "profile-created";
      }
      return null;
    }
  },
  "profile-created": {
    id: "profile-created",
    messages: [
      {
        content: "Your digital profile has been successfully created. Hope you feel right at home. 🤗",
        timestamp: new Date(),
        sender: "admin",
        status: "read",
      },
      {
        content: "So which mode shall we explore?",
        timestamp: new Date(),
        sender: "admin",
        status: "read",
      }
    ],
    options: [
      { text: "Story Mode", nextId: "story-mode" },
      { text: "Sandbox Mode", nextId: "sandbox-mode" },
      { text: "Action Mode", nextId: "action-mode" },
      { text: "End Conversation", nextId: "end-conversation" },
    ]
  },
  "story-mode": {
    id: "story-mode",
    messages: [
      {
        content: "What side of Marklewis's life would you like us to discuss?",
        timestamp: new Date(),
        sender: "admin",
        status: "read",
      }
    ],
    options: [
      { text: "General Life ♻", nextId: "general-life" },
      { text: "Professional Life ⬆", nextId: "professional-life" },
      { text: "Romantic Life ❤", nextId: "romantic-life" },
      { text: "Go Back ↩", nextId: "profile-created" },
    ]
  },
  "romantic-life": {
    id: "romantic-life",
    messages: [],
    gif: "/RomanticLaugh.gif",
    options: [
      { text: "Nice Try! 😄", nextId: "try-again" },
    ]
  },
  "try-again": {
    id: "try-again",
    messages: [
      {
        content: "Okay you've had your fun, be serious now. 🧍🏿‍♀️",
        timestamp: new Date(),
        sender: "admin",
        status: "read",
      },
      {
        content: "What side of Marklewis's life would you like us to discuss?",
        timestamp: new Date(),
        sender: "admin",
        status: "read",
      }
    ],
    options: [
      { text: "General Life ♻", nextId: "general-life" },
      { text: "Professional Life ⬆", nextId: "professional-life" },
      { text: "Romantic Life ❤", nextId: "romantic-life" },
      { text: "Go Back ↩", nextId: "profile-created" },
    ]
  },
  "general-life": {
    id: "general-life",
    messages: [
      {
        content: "Marklewis Mutugi is passionate about technology and innovation. Outside of work, he enjoys exploring new tech trends, contributing to open source projects, and sharing knowledge with the tech community.",
        timestamp: new Date(),
        sender: "admin",
        status: "read",
      },
      {
        content: "Would you like to know more?",
        timestamp: new Date(),
        sender: "admin",
        status: "read",
      }
    ],
    options: [
      { text: "Yes absolutely!", nextId: "general-life-more" },
      { text: "No, That's enough", nextId: "story-mode" },
    ]
  },
  "general-life-more": {
    id: "general-life-more",
    messages: [
      {
        content: "That's the spirit!! 😎",
        timestamp: new Date(),
        sender: "admin",
        status: "read",
      },
      {
        content: "Marklewis believes in continuous learning and personal growth. He balances his technical pursuits with interests in design thinking and user experience. His approach to problem-solving combines analytical thinking with creative solutions.",
        timestamp: new Date(),
        sender: "admin",
        status: "read",
      }
    ],
    options: [
      { text: "Go Back ↩", nextId: "story-mode" },
    ]
  },
  "professional-life": {
    id: "professional-life",
    messages: [
      {
        content: "Marklewis Mutugi is a passionate front-end developer with expertise in building responsive web applications. He practices various IT disciplines including UI/UX design, web development, and software development lifecycle management. He seeks to grow through encountering problems then constructing solid solutions.",
        timestamp: new Date(),
        sender: "admin",
        status: "read",
      },
      {
        content: "Would you like to know more?",
        timestamp: new Date(),
        sender: "admin",
        status: "read",
      }
    ],
    options: [
      { text: "Yes absolutely!", nextId: "choose-tech" },
      { text: "No, That's enough", nextId: "story-mode" },
    ]
  },
  "choose-tech": {
    id: "choose-tech",
    messages: [
      {
        content: "That's the spirit!! 😎",
        timestamp: new Date(),
        sender: "admin",
        status: "read",
      },
      {
        content: "What field would you like me to elaborate on?",
        timestamp: new Date(),
        sender: "admin",
        status: "read",
      }
    ],
    options: [
      { text: "UI/UX Design", nextId: "uiux-design" },
      { text: "Web Development", nextId: "web-development" },
      { text: "SDLC Management", nextId: "sdlc-management" },
      { text: "Go Back ↩", nextId: "story-mode" },
    ]
  },
  "uiux-design": {
    id: "uiux-design",
    messages: [
      {
        content: "Marklewis has expertise in UI/UX design, focusing on creating intuitive and engaging user interfaces. His design philosophy centers around user-centric approaches that enhance usability while maintaining aesthetic appeal. He uses tools like Figma and Adobe XD to prototype and iterate designs before implementation.",
        timestamp: new Date(),
        sender: "admin",
        status: "read",
      }
    ],
    options: [
      { text: "Go Back ↩", nextId: "choose-tech" },
    ]
  },
  "web-development": {
    id: "web-development",
    messages: [
      {
        content: "Marklewis excels in web development with proficiency in React, TypeScript, and modern front-end frameworks. He builds responsive, accessible, and performant web applications with clean, maintainable code. His development approach emphasizes component-based architecture and efficient state management.",
        timestamp: new Date(),
        sender: "admin",
        status: "read",
      }
    ],
    options: [
      { text: "Go Back ↩", nextId: "choose-tech" },
    ]
  },
  "sdlc-management": {
    id: "sdlc-management",
    messages: [
      {
        content: "Marklewis understands the full software development lifecycle, from initial requirements gathering through deployment and maintenance. He's experienced with agile methodologies and version control systems like Git, ensuring efficient collaboration on projects of all sizes.",
        timestamp: new Date(),
        sender: "admin",
        status: "read",
      }
    ],
    options: [
      { text: "Go Back ↩", nextId: "choose-tech" },
    ]
  },
  "sandbox-mode": {
    id: "sandbox-mode",
    messages: [
      {
        content: "In Sandbox mode, you can ask me anything about Marklewis's portfolio, skills, or projects. What would you like to know?",
        timestamp: new Date(),
        sender: "admin",
        status: "read",
      }
    ],
    inputRequired: true,
    onInput: () => "sandbox-response"
  },
  "sandbox-response": {
    id: "sandbox-response",
    messages: [
      {
        content: "Thanks for your question! Marklewis has expertise in React, TypeScript, Tailwind CSS, and UI/UX design. You can see examples of his work in the projects section of this portfolio. For more specific details, feel free to reach out directly via the contact form.",
        timestamp: new Date(),
        sender: "admin",
        status: "read",
      },
      {
        content: "Would you like to explore another mode?",
        timestamp: new Date(),
        sender: "admin",
        status: "read",
      }
    ],
    options: [
      { text: "Return to Menu", nextId: "profile-created" },
      { text: "Ask Another Question", nextId: "sandbox-mode" },
    ]
  },
  "action-mode": {
    id: "action-mode",
    messages: [
      {
        content: "In Action mode, you can directly navigate to different sections of Marklewis's portfolio. Where would you like to go?",
        timestamp: new Date(),
        sender: "admin",
        status: "read",
      }
    ],
    options: [
      { text: "Projects", nextId: "goto-projects" },
      { text: "Skills", nextId: "goto-skills" },
      { text: "Contact", nextId: "goto-contact" },
      { text: "Go Back ↩", nextId: "profile-created" },
    ]
  },
  "goto-projects": {
    id: "goto-projects",
    messages: [
      {
        content: "Taking you to the projects section...",
        timestamp: new Date(),
        sender: "admin",
        status: "read",
      }
    ],
    options: [
      { text: "Return to Menu", nextId: "profile-created" },
    ]
  },
  "goto-skills": {
    id: "goto-skills",
    messages: [
      {
        content: "Taking you to the skills section...",
        timestamp: new Date(),
        sender: "admin",
        status: "read",
      }
    ],
    options: [
      { text: "Return to Menu", nextId: "profile-created" },
    ]
  },
  "goto-contact": {
    id: "goto-contact",
    messages: [
      {
        content: "Taking you to the contact section...",
        timestamp: new Date(),
        sender: "admin",
        status: "read",
      }
    ],
    options: [
      { text: "Return to Menu", nextId: "profile-created" },
    ]
  },
  "end-conversation": {
    id: "end-conversation",
    messages: [
      {
        content: "Thank you for chatting! Feel free to reach out again if you have any questions about Marklewis's work or skills. Have a great day!",
        timestamp: new Date(),
        sender: "admin",
        status: "read",
      }
    ]
  }
};

const ChatWidget = ({ isOpen, onClose }: ChatWidgetProps) => {
  const [messages, setMessages] = useState<ChatMessageProps[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [currentStep, setCurrentStep] = useState("start");
  const [showOptions, setShowOptions] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [showGif, setShowGif] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Initialize chat with the first step's messages when opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const initialStep = CONVERSATION_STEPS[currentStep];
      if (initialStep.messages) {
        setMessages(initialStep.messages);
      }
      setShowOptions(!!initialStep.options && !initialStep.inputRequired);
      if (initialStep.gif) {
        setShowGif(initialStep.gif);
      }
    }
  }, [isOpen, messages.length]);

  // Scroll to bottom when messages change or when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [messages, isOpen, showOptions, showGif]);

  // Move to next step in conversation
  const goToNextStep = (nextStepId: string) => {
    const step = CONVERSATION_STEPS[nextStepId];
    if (!step) return;

    setCurrentStep(nextStepId);
    
    // Add user's option selection as a message
    const option = CONVERSATION_STEPS[currentStep]?.options?.find(opt => opt.nextId === nextStepId);
    if (option) {
      const userMessage: ChatMessageProps = {
        content: option.text,
        timestamp: new Date(),
        sender: "user",
        status: "delivered"
      };
      setMessages(prev => [...prev, userMessage]);
    }

    // Add the next step's messages
    if (step.messages && step.messages.length > 0) {
      setTimeout(() => {
        setMessages(prev => [...prev, ...step.messages!]);
        setShowOptions(!!step.options && !step.inputRequired);
      }, 500);
    } else {
      setShowOptions(!!step.options && !step.inputRequired);
    }

    // Handle special navigation cases
    if (nextStepId === "goto-projects") {
      const projectsElement = document.getElementById("projects-section");
      if (projectsElement) {
        setTimeout(() => {
          projectsElement.scrollIntoView({ behavior: "smooth" });
        }, 1000);
      }
    } else if (nextStepId === "goto-skills") {
      const skillsElement = document.getElementById("skills-section");
      if (skillsElement) {
        setTimeout(() => {
          skillsElement.scrollIntoView({ behavior: "smooth" });
        }, 1000);
      }
    } else if (nextStepId === "goto-contact") {
      const contactElement = document.getElementById("contact-section");
      if (contactElement) {
        setTimeout(() => {
          contactElement.scrollIntoView({ behavior: "smooth" });
        }, 1000);
      }
    }

    // Show GIF if present in the next step
    if (step.gif) {
      setShowGif(step.gif);
    } else {
      setShowGif(null);
    }
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    
    if (!newMessage.trim() && !CONVERSATION_STEPS[currentStep].inputRequired) return;
    
    const userMessage: ChatMessageProps = {
      content: newMessage,
      timestamp: new Date(),
      sender: "user",
      status: "sending"
    };
    
    setMessages(prev => [...prev, userMessage]);
    setNewMessage("");
    setIsSending(true);
    
    try {
      // Process user input based on current step
      const currentStepData = CONVERSATION_STEPS[currentStep];
      
      // Store name or email if needed
      if (currentStep === "start") {
        setUserName(newMessage);
      } else if (currentStepData.collectEmail) {
        setUserEmail(newMessage);
      }
      
      // Get next step based on user input
      let nextStepId = null;
      if (currentStepData.onInput) {
        nextStepId = currentStepData.onInput(newMessage);
      }
      
      // Update message status
      setMessages(prev =>
        prev.map(msg =>
          msg === userMessage ? { ...msg, status: "delivered" } : msg
        )
      );
      
      // Go to next step if determined
      if (nextStepId) {
        setTimeout(() => {
          goToNextStep(nextStepId!);
        }, 500);
      }
      
    } catch (error) {
      // Handle error
      setMessages(prev =>
        prev.map(msg =>
          msg === userMessage ? { ...msg, status: "error" } : msg
        )
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Drawer open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DrawerContent className={cn(
        "h-[70vh] sm:h-[600px] max-w-md mx-auto rounded-t-xl",
        isMobile ? "w-full" : "w-[400px] fixed bottom-0 left-4 sm:left-6"
      )}>
        <div className="flex flex-col h-full">
          {/* Chat header */}
          <div className="p-4 border-b flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="h-10 w-10 rounded-full overflow-hidden">
                  <img src="/myPic.jpg" alt="Marklewis Mutugi" className="h-full w-full object-cover" />
                </div>
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background"></span>
              </div>
              <div>
                <h3 className="font-medium">Marklogic</h3>
                <p className="text-xs text-muted-foreground">Marklewis's personal assistant</p>
              </div>
            </div>
          </div>
          
          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <ChatMessage key={index} {...message} />
            ))}
            
            {/* GIF display */}
            {showGif && (
              <div className="flex justify-center my-4">
                <img 
                  src={showGif} 
                  alt="Chat Animation" 
                  className="rounded-lg max-w-full max-h-48 object-contain" 
                />
              </div>
            )}
            
            {/* Chat options */}
            {showOptions && CONVERSATION_STEPS[currentStep].options && (
              <div className="flex flex-col gap-2 mt-4">
                {CONVERSATION_STEPS[currentStep].options!.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => goToNextStep(option.nextId)}
                    variant="outline"
                    className="justify-start"
                  >
                    {option.text} 
                    {!option.text.includes("Go Back") && <ArrowRight className="ml-auto" />}
                  </Button>
                ))}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Chat input - only show if current step requires input */}
          {CONVERSATION_STEPS[currentStep].inputRequired && (
            <form onSubmit={handleSendMessage} className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  disabled={isSending}
                  className="flex-1"
                />
                <Button 
                  type="submit" 
                  size="icon" 
                  disabled={isSending || !newMessage.trim()}
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </form>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ChatWidget;
