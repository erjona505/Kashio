import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GameButton } from '@/components/ui/GameButton';
import { CharacterAvatar } from '@/components/CharacterAvatar';

export default function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen sky-background flex flex-col items-center justify-between py-8 px-4 overflow-hidden">
      {/* Decorative buildings background */}
      <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none">
        <svg viewBox="0 0 400 120" className="w-full h-full" preserveAspectRatio="xMidYMax slice">
          {/* Building 1 */}
          <rect x="10" y="40" width="50" height="80" fill="#D4A574" rx="4" />
          <rect x="15" y="50" width="15" height="15" fill="#87CEEB" rx="2" />
          <rect x="35" y="50" width="15" height="15" fill="#87CEEB" rx="2" />
          <rect x="15" y="75" width="15" height="15" fill="#87CEEB" rx="2" />
          <rect x="35" y="75" width="15" height="15" fill="#87CEEB" rx="2" />
          <rect x="25" y="100" width="20" height="20" fill="#8B4513" rx="2" />
          
          {/* Building 2 */}
          <rect x="70" y="20" width="60" height="100" fill="#E8D4B8" rx="4" />
          <polygon points="70,20 100,0 130,20" fill="#B8860B" />
          <rect x="80" y="35" width="12" height="18" fill="#87CEEB" rx="2" />
          <rect x="105" y="35" width="12" height="18" fill="#87CEEB" rx="2" />
          <rect x="80" y="65" width="12" height="18" fill="#87CEEB" rx="2" />
          <rect x="105" y="65" width="12" height="18" fill="#87CEEB" rx="2" />
          <rect x="90" y="95" width="20" height="25" fill="#8B4513" rx="2" />
          
          {/* Building 3 - Shop */}
          <rect x="145" y="50" width="70" height="70" fill="#98D8C8" rx="4" />
          <rect x="150" y="55" width="60" height="25" fill="#F0E68C" rx="2" />
          <text x="180" y="72" fontSize="10" fill="#2D3436" textAnchor="middle" fontWeight="bold">SHOP</text>
          <rect x="155" y="85" width="20" height="35" fill="#87CEEB" rx="2" />
          <rect x="185" y="85" width="20" height="35" fill="#87CEEB" rx="2" />
          
          {/* Building 4 */}
          <rect x="230" y="30" width="55" height="90" fill="#FFB6C1" rx="4" />
          <rect x="240" y="45" width="15" height="15" fill="#87CEEB" rx="2" />
          <rect x="260" y="45" width="15" height="15" fill="#87CEEB" rx="2" />
          <rect x="240" y="70" width="15" height="15" fill="#87CEEB" rx="2" />
          <rect x="260" y="70" width="15" height="15" fill="#87CEEB" rx="2" />
          <rect x="250" y="100" width="18" height="20" fill="#8B4513" rx="2" />
          
          {/* Building 5 */}
          <rect x="300" y="45" width="50" height="75" fill="#DDA0DD" rx="4" />
          <polygon points="300,45 325,25 350,45" fill="#9932CC" />
          <rect x="310" y="55" width="12" height="15" fill="#87CEEB" rx="2" />
          <rect x="328" y="55" width="12" height="15" fill="#87CEEB" rx="2" />
          <rect x="310" y="80" width="12" height="15" fill="#87CEEB" rx="2" />
          <rect x="328" y="80" width="12" height="15" fill="#87CEEB" rx="2" />
          <rect x="318" y="100" width="16" height="20" fill="#8B4513" rx="2" />
          
          {/* Ground */}
          <rect x="0" y="115" width="400" height="10" fill="#8B7355" />
        </svg>
      </div>

      {/* Logo */}
      <div className="z-10 mt-8">
        <h1 className="text-6xl md:text-8xl font-fredoka font-bold text-shadow">
          <span className="text-coral">Ka</span>
          <span className="text-secondary">$</span>
          <span className="text-coral">hi</span>
          <span className="text-accent">$</span>
        </h1>
        <p className="text-center text-foreground/80 font-nunito text-lg mt-2">
          Learn Money. Have Fun!
        </p>
      </div>

      {/* Characters */}
      <div className="z-10 flex items-end gap-4 -mb-4">
        <CharacterAvatar characterId="girl" size="xl" animated />
        <CharacterAvatar characterId="boy" size="xl" animated className="animation-delay-500" />
      </div>

      {/* Get Started Button */}
      <div className="z-10 mb-12">
        <GameButton 
          size="lg" 
          onClick={() => navigate('/select-character')}
          className="text-xl px-12 py-5 animate-pulse-glow"
        >
          Get Started! 🚀
        </GameButton>
      </div>

      {/* Floating coins decoration */}
      <div className="absolute top-20 left-10 text-4xl animate-float">🪙</div>
      <div className="absolute top-40 right-16 text-3xl animate-float" style={{ animationDelay: '1s' }}>💰</div>
      <div className="absolute top-32 left-1/4 text-2xl animate-float" style={{ animationDelay: '0.5s' }}>✨</div>
      <div className="absolute top-24 right-1/3 text-3xl animate-float" style={{ animationDelay: '1.5s' }}>🌟</div>
    </div>
  );
}
