
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
        "flex flex-col items-center justify-center gap-3 p-5 rounded-xl glass hover-lift",
        className
      )} 
      {...props}
    >
      <div className="text-3xl text-primary">{icon}</div>
      <h3 className="font-medium">{name}</h3>
    </div>
  );
};

export default SkillCard;
