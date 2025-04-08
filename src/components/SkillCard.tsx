
import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SkillCardProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  icon: React.ReactNode;
}

const SkillCard = ({ name, icon, className, ...props }: SkillCardProps) => {
  return (
    <div 
      className={cn(
        "flex flex-col items-center justify-center gap-3 p-5 rounded-xl transition-all duration-300",
        "hover:scale-110 hover:shadow-lg hover:shadow-primary/30",
        "group cursor-pointer min-w-[120px] md:min-w-[150px]",
        className
      )} 
      {...props}
    >
      <div className="text-4xl text-primary relative p-4 rounded-full bg-background/50">
        {/* Enhanced glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full opacity-30 group-hover:opacity-100 transition-all duration-300 blur-md"></div>
        
        {/* Circular background for the icon */}
        <div className="absolute inset-0 rounded-full bg-background/80 group-hover:bg-background/95 transition-colors duration-300"></div>
        
        {/* Pulsing ring */}
        <div className="absolute inset-[-2px] border border-primary/40 rounded-full group-hover:scale-110 group-hover:opacity-100 opacity-50 transition-all duration-500"></div>
        
        {/* Icon */}
        <div className="relative z-10 group-hover:scale-110 transform transition-transform duration-300">
          {icon}
        </div>
      </div>
      <h3 className="font-medium text-center text-sm md:text-base group-hover:text-primary transition-colors">
        {name}
      </h3>
    </div>
  );
};

export default SkillCard;
