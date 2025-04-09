
import { useEffect, useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import StarRating from '@/components/StarRating';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

// Create a timestamp-based unique ID
const createUniqueId = () => {
  return `rating_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
};

const RatingSection = () => {
  const [hasRated, setHasRated] = useState(false);
  const [savedRating, setSavedRating] = useState(0);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    // Check if user has already rated
    const rating = localStorage.getItem('portfolioRating');
    if (rating) {
      setHasRated(true);
      setSavedRating(parseInt(rating, 10));
    }
    
    // Generate or retrieve a unique user ID
    const existingId = localStorage.getItem('portfolioUserId');
    if (existingId) {
      setUserId(existingId);
    } else {
      const newId = createUniqueId();
      setUserId(newId);
      localStorage.setItem('portfolioUserId', newId);
    }
  }, []);

  // Function to save the rating to a backend service
  const saveRating = async (rating: number) => {
    try {
      // Get some basic anonymous analytics data
      const data = {
        ratingId: createUniqueId(),
        userId: userId,
        rating,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        language: navigator.language,
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        referrer: document.referrer || 'direct',
        path: window.location.pathname,
        comments: '', // This could be populated if you add a comment field
      };

      // Send to Formspree - replace this URL with your own Formspree endpoint
      // Get a free endpoint at https://formspree.io/
      const response = await fetch('https://formspree.io/f/xayzpzag', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      console.log('Rating submitted successfully:', data);
      
      // Store the result in localStorage for persistence on client
      const result = await response.json();
      
      // In a real application, you might want to store the unique ID
      localStorage.setItem('portfolioRatingId', data.ratingId);
      
      // Set the state to display the rated view
      setHasRated(true);
      setSavedRating(rating);
    } catch (error) {
      console.error('Error saving rating:', error);
      throw error; // Re-throw to let the StarRating component handle it
    }
  };

  return (
    <section id="rating" className="py-12 bg-secondary/50">
      <div className="container max-w-4xl">
        <ScrollReveal>
          <SectionHeading 
            title="Rate My Portfolio"
            subtitle={hasRated 
              ? "Thank you for your feedback! 🙏" 
              : "Did you enjoy my portfolio? Let me know with a quick rating! ⭐"
            }
          />
        </ScrollReveal>
        
        <ScrollReveal direction="up" className="max-w-md mx-auto">
          <Card className="glass-border overflow-hidden">
            <CardContent className="p-8 flex flex-col items-center">
              {hasRated ? (
                <>
                  <p className="text-lg mb-4 text-center">
                    You've rated my portfolio <span className="font-bold text-primary">{savedRating} stars</span>.
                  </p>
                  <StarRating initialRating={savedRating} />
                  <p className="mt-4 text-muted-foreground text-center text-sm">
                    Thank you for your feedback! I appreciate you taking the time to rate my work.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-lg mb-6 text-center">
                    How would you rate my portfolio?
                  </p>
                  <StarRating 
                    onChange={(rating) => console.log(`Rated: ${rating} stars`)}
                    onSave={saveRating}
                  />
                  <p className="mt-4 text-muted-foreground text-center text-sm">
                    Your feedback helps me improve and create better experiences!
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground/70 text-center">
                    Ratings are collected anonymously to help improve this portfolio
                  </p>
                </>
              )}
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default RatingSection;
