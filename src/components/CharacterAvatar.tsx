import React from 'react';
import { cn } from '@/lib/utils';

interface CharacterAvatarProps {
  characterId: 'girl' | 'boy';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animated?: boolean;
}

export function CharacterAvatar({ 
  characterId, 
  size = 'md', 
  className,
  animated = false 
}: CharacterAvatarProps) {
  const sizes = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48',
  };

  // Simple SVG avatar representation
  const isGirl = characterId === 'girl';

  return (
    <div className={cn(
      sizes[size],
      "relative",
      animated && "animate-float",
      className
    )}>
      <svg viewBox="0 0 100 120" className="w-full h-full">
        {/* Body */}
        <ellipse cx="50" cy="95" rx="25" ry="20" fill={isGirl ? "#FFD93D" : "#6BCB77"} />
        
        {/* Head */}
        <circle cx="50" cy="40" r="30" fill="#FFEAA7" />
        
        {/* Hair */}
        {isGirl ? (
          <>
            <ellipse cx="50" cy="25" rx="32" ry="20" fill="#2D3436" />
            <ellipse cx="25" cy="45" rx="8" ry="15" fill="#2D3436" />
            <ellipse cx="75" cy="45" rx="8" ry="15" fill="#2D3436" />
          </>
        ) : (
          <ellipse cx="50" cy="20" rx="28" ry="15" fill="#795548" />
        )}
        
        {/* Eyes */}
        <circle cx="40" cy="40" r="5" fill="#2D3436" />
        <circle cx="60" cy="40" r="5" fill="#2D3436" />
        <circle cx="42" cy="38" r="2" fill="white" />
        <circle cx="62" cy="38" r="2" fill="white" />
        
        {/* Blush */}
        <ellipse cx="30" cy="48" rx="6" ry="4" fill="#FFAB91" opacity="0.6" />
        <ellipse cx="70" cy="48" rx="6" ry="4" fill="#FFAB91" opacity="0.6" />
        
        {/* Smile */}
        <path d="M 40 52 Q 50 60 60 52" stroke="#2D3436" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}
