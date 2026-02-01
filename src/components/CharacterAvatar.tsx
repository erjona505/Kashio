import React from 'react';
import { cn } from '@/lib/utils';
import avatar1 from '@/assets/avatar1.png';


interface CharacterAvatarProps {
  characterId: string;
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
 return (
  <div
    className={cn(
      sizes[size],
      "relative flex items-center justify-center",
      animated && "animate-float",
      className
    )}
  >
    <img
      src={avatar1}
      alt="Character avatar"
      className="w-full h-full object-contain rounded-full"
    />
  </div>
);

}
