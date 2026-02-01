import React from 'react';
import { cn } from '@/lib/utils';

interface GameCardProps {
  children: React.ReactNode;
  className?: string;
  floating?: boolean;
  onClick?: () => void;
}

export function GameCard({ children, className, floating = false, onClick }: GameCardProps) {
  return (
    <div 
      className={cn(
        "bg-card rounded-3xl p-6 transition-all duration-200",
        floating ? "shadow-game-xl hover:scale-[1.02]" : "shadow-game-lg",
        onClick && "cursor-pointer hover:shadow-game-xl",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
