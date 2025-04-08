
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
        "hover:scale-110 hover:shadow-lg hover:shadow-primary/20",
        "group cursor-pointer min-w-[120px] md:min-w-[150px]",
        className
      )} 
      {...props}
    >
      <div className="text-4xl text-primary relative">
        <div className="absolute inset-0 bg-primary/10 blur-xl rounded-full opacity-0 group-hover:opacity-70 transition-opacity -z-10"></div>
        {icon}
      </div>
      <h3 className="font-medium text-center text-sm md:text-base">{name}</h3>
    </div>
  );
};

export default SkillCard;
