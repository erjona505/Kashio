import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '@/context/GameContext';
import { GameButton } from '@/components/ui/GameButton';
import { GameCard } from '@/components/ui/GameCard';
import { CoinBadge } from '@/components/ui/CoinBadge';
import { CharacterAvatar } from '@/components/CharacterAvatar';
import { Store, GraduationCap, Banknote, Gamepad2, Settings } from 'lucide-react';

export default function Dashboard() {
  const navigate = useNavigate();
  const { gameState } = useGame();

  if (!gameState.character) {
    navigate('/');
    return null;
  }

  const menuItems = [
    { 
      id: 'business', 
      name: 'My Businesses', 
      icon: Store, 
      color: 'from-coral-light to-coral-dark',
      path: '/businesses',
      description: 'Manage your shops'
    },
    { 
      id: 'learn', 
      name: 'Learn', 
      icon: GraduationCap, 
      color: 'from-secondary to-green-600',
      path: '/learn',
      description: 'Financial lessons'
    },
    { 
      id: 'loans', 
      name: 'Bank & Loans', 
      icon: Banknote, 
      color: 'from-sky-dark to-blue-600',
      path: '/loans',
      description: 'Borrow money'
    },
    { 
      id: 'race', 
      name: 'Coin Race!', 
      icon: Gamepad2, 
      color: 'from-accent to-coin-dark',
      path: '/race',
      description: 'Play & earn coins'
    },
  ];

  return (
    <div className="min-h-screen sky-background">
      {/* Header with cozy bookshelf background */}
      <div 
        className="relative py-6 px-4"
        style={{
          background: 'linear-gradient(180deg, hsl(30 45% 35%) 0%, hsl(30 40% 45%) 100%)',
        }}
      >
        {/* Bookshelf decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="h-full flex flex-col justify-around">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-px bg-wood-dark" />
            ))}
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between max-w-md mx-auto">
          <div className="flex items-center gap-4">
  {/* Big circle behind avatar */}
  <div className="w-24 h-24 rounded-full bg-card/90 ring-4 ring-secondary/30 shadow-game flex items-center justify-center">
    <CharacterAvatar characterId="girl" size="lg" />
  </div>

  <div>
    <p className="text-card font-fredoka font-bold text-xl">
      {gameState.character.name}
    </p>
    <p className="text-card/70 text-sm font-nunito">
      Level {gameState.currentLevel} Entrepreneur
    </p>
  </div>
</div>

          
          <CoinBadge amount={gameState.balance} />
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 max-w-md mx-auto">
        <h2 className="text-2xl font-fredoka font-bold text-foreground text-shadow mb-4">
          Dashboard
        </h2>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <GameCard className="text-center py-4">
            <p className="text-3xl font-fredoka font-bold text-secondary">
              {gameState.businesses.filter(b => b.owned).length}
            </p>
            <p className="text-sm text-muted-foreground font-nunito">Businesses Owned</p>
          </GameCard>
          <GameCard className="text-center py-4">
            <p className="text-3xl font-fredoka font-bold text-accent">
              {gameState.loans.length}
            </p>
            <p className="text-sm text-muted-foreground font-nunito">Active Loans</p>
          </GameCard>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-2 gap-4">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <GameCard
                key={item.id}
                floating
                onClick={() => navigate(item.path)}
                className="p-4 cursor-pointer hover:scale-105 transition-transform"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-b ${item.color} flex items-center justify-center mb-3 shadow-game`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-fredoka font-bold text-card-foreground">
                  {item.name}
                </h3>
                <p className="text-xs text-muted-foreground font-nunito mt-1">
                  {item.description}
                </p>
              </GameCard>
            );
          })}
        </div>

        {/* Play Button */}
        <div className="mt-8 text-center">
          <GameButton 
            variant="accent" 
            size="lg" 
            onClick={() => navigate('/race')}
            className="animate-pulse-glow"
          >
            🏎️ Start Racing! 🪙
          </GameButton>
        </div>
      </div>
    </div>
  );
}
