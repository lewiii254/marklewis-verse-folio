
import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

interface CertificateCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  issuer: string;
  date: string;
  icon: React.ReactNode;
}

const CertificateCard = ({ 
  title, 
  issuer, 
  date, 
  icon, 
  className, 
  ...props 
}: CertificateCardProps) => {
  return (
    <Card 
      className={cn(
        "hover-lift overflow-hidden glass border-0",
        className
      )} 
      {...props}
    >
      <CardContent className="p-6 flex flex-col gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
        
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-primary">{issuer}</p>
          <div className="mt-2 flex items-center">
            <span className="text-sm text-muted-foreground">{date}</span>
            <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Verified ✓</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CertificateCard;
