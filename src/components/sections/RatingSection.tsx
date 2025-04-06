
import { useEffect, useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import StarRating from '@/components/StarRating';
import { Card, CardContent } from '@/components/ui/card';

const RatingSection = () => {
  const [hasRated, setHasRated] = useState(false);
  const [savedRating, setSavedRating] = useState(0);

  useEffect(() => {
    // Check if user has already rated
    const rating = localStorage.getItem('portfolioRating');
    if (rating) {
      setHasRated(true);
      setSavedRating(parseInt(rating, 10));
    }
  }, []);

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
                  <StarRating onChange={(rating) => console.log(`Rated: ${rating} stars`)} />
                  <p className="mt-4 text-muted-foreground text-center text-sm">
                    Your feedback helps me improve and create better experiences!
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
