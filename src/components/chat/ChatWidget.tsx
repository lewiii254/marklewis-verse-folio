
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import ChatMessage, { ChatMessageProps } from "./ChatMessage";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface ChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

const INITIAL_MESSAGES: ChatMessageProps[] = [
  {
    content: "👋 Hi there! I'm Marklewis. How can I help you today?",
    timestamp: new Date(),
    sender: "admin",
    status: "read",
  },
];

const ChatWidget = ({ isOpen, onClose }: ChatWidgetProps) => {
  const [messages, setMessages] = useState<ChatMessageProps[]>(INITIAL_MESSAGES);
  const [newMessage, setNewMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Scroll to bottom when messages change or when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    
    if (!newMessage.trim()) return;
    
    const userMessage: ChatMessageProps = {
      content: newMessage,
      timestamp: new Date(),
      sender: "user",
      status: "sending"
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");
    setIsSending(true);
    
    try {
      // Simulating sending to a backend
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Update the message status
      setMessages((prev) =>
        prev.map((msg) =>
          msg === userMessage ? { ...msg, status: "delivered" } : msg
        )
      );
      
      // Simulate a reply after 1.5 seconds
      setTimeout(() => {
        const replyMessage: ChatMessageProps = {
          content: "Thanks for your message! I'll get back to you as soon as possible. You can also reach me directly at ngondimarklewis@gmail.com",
          timestamp: new Date(),
          sender: "admin",
        };
        
        setMessages((prev) => [...prev, replyMessage]);
        
        // Notify the user with toast
        toast("New message", {
          description: "Marklewis has responded to your message",
        });
      }, 1500);
    } catch (error) {
      // Handle error
      setMessages((prev) =>
        prev.map((msg) =>
          msg === userMessage ? { ...msg, status: "error" } : msg
        )
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Drawer open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DrawerContent 
        className={cn(
          "h-[70vh] sm:h-[600px] max-w-md mx-auto rounded-t-xl",
          isMobile ? "w-full" : "w-[400px] fixed bottom-0 left-4 sm:left-6"
        )}
        aria-labelledby="chat-title"
      >
        <div className="flex flex-col h-full">
          {/* Chat header with accessible title */}
          <div className="p-4 border-b flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="h-10 w-10 rounded-full overflow-hidden">
                  <img src="/myPic.jpg" alt="Marklewis Mutugi" className="h-full w-full object-cover" />
                </div>
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background"></span>
              </div>
              <div>
                <h3 className="font-medium" id="chat-title">Marklewis Mutugi</h3>
                <p className="text-xs text-muted-foreground">Usually replies within an hour</p>
              </div>
            </div>
          </div>
          
          {/* Add visually hidden description for screen readers */}
          <VisuallyHidden>
            <p id="chat-description">Chat with Marklewis Mutugi. Type your message in the input field below.</p>
          </VisuallyHidden>
          
          {/* Chat messages */}
          <div 
            className="flex-1 overflow-y-auto p-4"
            aria-live="polite"
            aria-relevant="additions"
          >
            {messages.map((message, index) => (
              <ChatMessage key={index} {...message} />
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Chat input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                disabled={isSending}
                className="flex-1"
                aria-label="Message input"
              />
              <Button 
                type="submit" 
                size="icon" 
                disabled={isSending || !newMessage.trim()}
                aria-label="Send message"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </form>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ChatWidget;
