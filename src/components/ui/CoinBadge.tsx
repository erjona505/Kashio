import React from 'react';
import { cn } from '@/lib/utils';

interface CoinBadgeProps {
  amount: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function CoinBadge({ amount, size = 'md', className }: CoinBadgeProps) {
  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-xl',
  };

  return (
    <div className={cn(
      "inline-flex items-center gap-2 font-fredoka font-bold rounded-full",
      "bg-gradient-to-b from-coin-light to-coin-dark text-accent-foreground",
      "shadow-coin",
      sizes[size],
      className
    )}>
      <span className="text-xl">🪙</span>
      <span>${amount.toLocaleString()}</span>
    </div>
  );
}
