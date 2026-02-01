import React from 'react';
import { cn } from '@/lib/utils';

interface GameButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function GameButton({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}: GameButtonProps) {
  const baseStyles = "relative font-fredoka font-bold rounded-2xl transition-all duration-150 active:translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "text-primary-foreground bg-gradient-to-b from-coral-light to-coral-dark shadow-button active:shadow-[0_2px_0_hsl(4,85%,45%)]",
    secondary: "text-secondary-foreground bg-gradient-to-b from-secondary to-green-600 shadow-button-green active:shadow-[0_2px_0_hsl(142,52%,35%)]",
    accent: "text-accent-foreground bg-gradient-to-b from-coin-light to-coin-dark shadow-[0_4px_0_hsl(40,95%,35%)] active:shadow-[0_2px_0_hsl(40,95%,35%)]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
