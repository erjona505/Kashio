import React from 'react';
import { cn } from '@/lib/utils';

import avatar1 from '@/assets/avatar1.png';
import avatar2 from '@/assets/avatar2.png';
import avatar3 from '@/assets/avatar3.png';
import avatar4 from '@/assets/avatar4.png';
import avatar5 from '@/assets/avatar5.png';
import avatar6 from '@/assets/avatar6.png';

export type AnimalType = 'cat' | 'dog' | 'bunny' | 'fox' | 'panda' | 'lion';

interface AnimalAvatarProps {
  animal: AnimalType;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animated?: boolean;
  isJumping?: boolean;
}

const animalEmojis: Record<AnimalType, any> = {
  cat: avatar1,
  dog: avatar2,
  bunny: avatar3,
  fox: avatar4,
  panda: avatar5,
  lion: avatar6,
};

const animalColors: Record<AnimalType, { bg: string; accent: string }> = {
  cat: { bg: '#FFE4C4', accent: '#FF8C42' },
  dog: { bg: '#DEB887', accent: '#8B4513' },
  bunny: { bg: '#FFC0CB', accent: '#FF69B4' },
  fox: { bg: '#FF7F50', accent: '#FF4500' },
  panda: { bg: '#E8E8E8', accent: '#1A1A1A' },
  lion: { bg: '#FFD700', accent: '#DAA520' },
};

export function AnimalAvatar({ 
  animal, 
  size = 'md', 
  className,
  animated = false,
  isJumping = false,
}: AnimalAvatarProps) {
  const sizes = {
    sm: 'w-12 h-12 text-2xl',
    md: 'w-20 h-20 text-4xl',
    lg: 'w-28 h-28 text-5xl',
    xl: 'w-40 h-40 text-7xl',
  };

  const colors = animalColors[animal];

  return (
    <div 
      className={cn(
        sizes[size],
        "relative flex items-center justify-center rounded-full transition-transform",
        animated && "animate-bounce-slow",
        isJumping && "animate-jump",
        className
      )}
      style={{
        background: `radial-gradient(circle at 30% 30%, ${colors.bg}, ${colors.accent})`,
        boxShadow: `0 8px 20px ${colors.accent}40`,
      }}
    >
<img 
        src={animalEmojis[animal]} 
        alt={animal}
        className="w-full h-full drop-shadow-lg object-contain p-1"
      />      
      {/* Sparkle effect when animated */}
      {animated && (
        <>
          <span className="absolute -top-1 -right-1 text-lg animate-pulse">✨</span>
          <span className="absolute -bottom-1 -left-1 text-sm animate-pulse delay-300">⭐</span>
        </>
      )}
    </div>
  );
}

export function AnimalVehicle({
  animal,
  isJumping = false,
  hasBoost = false,
  className,
}: {
  animal: AnimalType;
  isJumping?: boolean;
  hasBoost?: boolean;
  className?: string;
}) {
  const colors = animalColors[animal];
  
  return (
    <div 
      className={cn(
        "relative flex flex-col items-center transition-transform duration-200",
        isJumping && "animate-character-jump",
        hasBoost && "scale-110",
        className
      )}
    >
      {/* Speed lines when boosting */}
      {hasBoost && (
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          <div className="w-1 h-8 bg-secondary rounded-full animate-pulse" />
          <div className="w-1 h-6 bg-accent rounded-full animate-pulse delay-75" />
          <div className="w-1 h-8 bg-secondary rounded-full animate-pulse delay-150" />
        </div>
      )}
      
      {/* Character on skateboard/vehicle */}
      <div 
        className="w-16 h-16 flex items-center justify-center rounded-full text-4xl shadow-lg"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${colors.bg}, ${colors.accent})`,
          boxShadow: hasBoost 
            ? `0 0 20px ${colors.accent}, 0 8px 20px ${colors.accent}60`
            : `0 8px 20px ${colors.accent}40`,
        }}
      >
<img 
          src={animalEmojis[animal]} 
          alt={animal}
          className="w-12 h-12 drop-shadow-lg object-contain"
        />      </div>
      
      {/* Skateboard */}
      <div className="relative -mt-2">
        <div 
          className="w-14 h-3 rounded-full"
          style={{
            background: `linear-gradient(to right, ${colors.accent}, ${colors.bg})`,
          }}
        />
        {/* Wheels */}
        <div className="absolute -bottom-1 left-1 w-3 h-3 bg-gray-700 rounded-full border-2 border-gray-500" />
        <div className="absolute -bottom-1 right-1 w-3 h-3 bg-gray-700 rounded-full border-2 border-gray-500" />
      </div>
    </div>
  );
}

export const animalOptions: { id: AnimalType; name: string; emoji: any }[] = [
  { id: 'cat', name: 'Avatar 1', emoji: avatar1 },
  { id: 'dog', name: 'Avatar 2', emoji: avatar2 },
  { id: 'bunny', name: 'Avatar 3', emoji: avatar3 },
  { id: 'fox', name: 'Avatar 4', emoji: avatar4 },
  { id: 'panda', name: 'Avatar 5', emoji: avatar5 },
  { id: 'lion', name: 'Avatar 6', emoji: avatar6 },
];