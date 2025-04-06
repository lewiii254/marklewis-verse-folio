
import { useState } from 'react';
import { Star } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  maxStars?: number;
  initialRating?: number;
  onChange?: (rating: number) => void;
  className?: string;
}

const StarRating = ({
  maxStars = 5,
  initialRating = 0,
  onChange,
  className,
}: StarRatingProps) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);
  const [isRated, setIsRated] = useState(false);

  const handleRating = (selectedRating: number) => {
    if (isRated) return;
    
    setRating(selectedRating);
    setIsRated(true);
    onChange?.(selectedRating);
    
    // Show thank you toast
    toast.success(`Thank you for rating ${selectedRating} stars!`, {
      description: "I appreciate your feedback!",
      duration: 3000,
    });
    
    // Store rating in local storage
    localStorage.setItem('portfolioRating', selectedRating.toString());
  };

  return (
    <div className={cn("flex items-center justify-center gap-1", className)}>
      {Array.from({ length: maxStars }).map((_, index) => {
        const starValue = index + 1;
        const isActive = starValue <= (hoverRating || rating);
        
        return (
          <button
            key={`star-${index}`}
            type="button"
            className={cn(
              "transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background p-1 rounded-full",
              isRated ? "cursor-default" : "cursor-pointer"
            )}
            onMouseEnter={() => !isRated && setHoverRating(starValue)}
            onMouseLeave={() => !isRated && setHoverRating(0)}
            onClick={() => handleRating(starValue)}
            disabled={isRated}
            aria-label={`Rate ${starValue} star${starValue !== 1 ? 's' : ''}`}
          >
            <Star
              className={cn(
                "transition-colors",
                isActive 
                  ? "fill-primary text-primary" 
                  : "fill-none text-muted-foreground hover:text-primary"
              )}
              size={24}
            />
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
