import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '@/context/GameContext';
import { GameButton } from '@/components/ui/GameButton';
import { GameCard } from '@/components/ui/GameCard';
import { CharacterAvatar } from '@/components/CharacterAvatar';
import { ArrowLeft } from 'lucide-react';

const outfitOptions = {
  tops: [
    { id: 'tshirt', name: 'T-Shirt', emoji: '👕', color: '#FF6B6B' },
    { id: 'hoodie', name: 'Hoodie', emoji: '🧥', color: '#4ECDC4' },
    { id: 'jacket', name: 'Jacket', emoji: '🧥', color: '#45B7D1' },
    { id: 'vest', name: 'Vest', emoji: '🦺', color: '#96CEB4' },
  ],
  bottoms: [
    { id: 'jeans', name: 'Jeans', emoji: '👖', color: '#5D9CEC' },
    { id: 'shorts', name: 'Shorts', emoji: '🩳', color: '#F39C12' },
    { id: 'skirt', name: 'Skirt', emoji: '👗', color: '#E74C3C' },
    { id: 'pants', name: 'Pants', emoji: '👖', color: '#2C3E50' },
  ],
  accessories: [
    { id: 'none', name: 'None', emoji: '❌', color: '#BDC3C7' },
    { id: 'glasses', name: 'Glasses', emoji: '👓', color: '#9B59B6' },
    { id: 'hat', name: 'Hat', emoji: '🧢', color: '#E67E22' },
    { id: 'bow', name: 'Bow', emoji: '🎀', color: '#FF69B4' },
  ],
};

type Category = 'tops' | 'bottoms' | 'accessories';

export default function CharacterCustomize() {
  const navigate = useNavigate();
  const { gameState, updateOutfit } = useGame();
  const [activeCategory, setActiveCategory] = useState<Category>('tops');
  const [selectedItems, setSelectedItems] = useState({
    tops: 'tshirt',
    bottoms: 'jeans',
    accessories: 'none',
  });

  const handleSelect = (itemId: string) => {
    setSelectedItems(prev => ({
      ...prev,
      [activeCategory]: itemId,
    }));
    
    const outfitUpdate: any = {};
    if (activeCategory === 'tops') outfitUpdate.top = itemId;
    if (activeCategory === 'bottoms') outfitUpdate.bottom = itemId;
    if (activeCategory === 'accessories') outfitUpdate.accessory = itemId;
    updateOutfit(outfitUpdate);
  };

  const handleContinue = () => {
    navigate('/dashboard');
  };

  if (!gameState.character) {
    navigate('/select-character');
    return null;
  }

  return (
    <div className="min-h-screen sky-background flex flex-col items-center py-8 px-4">
      {/* Header */}
      <div className="w-full max-w-md flex items-center mb-6">
        <button 
          onClick={() => navigate('/select-character')}
          className="p-2 rounded-full bg-card/50 hover:bg-card transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-foreground" />
        </button>
        <h1 className="flex-1 text-center text-2xl font-fredoka font-bold text-foreground text-shadow pr-10">
          Customize {gameState.character.name}
        </h1>
      </div>

      {/* Character Preview */}
      <GameCard floating className="mb-6 p-8">
        <CharacterAvatar 
          characterId={gameState.character.id as 'girl' | 'boy'} 
          size="xl" 
          animated 
        />
        <p className="text-center font-fredoka text-lg mt-4 text-muted-foreground">
          Looking good! ✨
        </p>
      </GameCard>

      {/* Category Tabs */}
      <div className="flex gap-2 mb-4">
        {(['tops', 'bottoms', 'accessories'] as Category[]).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`
              px-4 py-2 rounded-full font-fredoka font-semibold transition-all
              ${activeCategory === cat 
                ? 'bg-primary text-primary-foreground shadow-button' 
                : 'bg-card text-card-foreground hover:bg-muted'
              }
            `}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-4 gap-3 max-w-md w-full mb-8">
        {outfitOptions[activeCategory].map((item) => (
          <button
            key={item.id}
            onClick={() => handleSelect(item.id)}
            className={`
              aspect-square rounded-2xl flex flex-col items-center justify-center gap-1
              transition-all duration-200 
              ${selectedItems[activeCategory] === item.id 
                ? 'bg-accent ring-4 ring-primary scale-105' 
                : 'bg-card hover:scale-105 hover:bg-muted'
              }
            `}
            style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
          >
            <span className="text-3xl">{item.emoji}</span>
            <span className="text-xs font-nunito font-semibold text-card-foreground">{item.name}</span>
          </button>
        ))}
      </div>

      {/* Continue Button */}
      <GameButton size="lg" onClick={handleContinue}>
        Let's Go! 🎮
      </GameButton>
    </div>
  );
}
