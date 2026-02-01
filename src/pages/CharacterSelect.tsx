import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '@/context/GameContext';
import { GameButton } from '@/components/ui/GameButton';
import { GameCard } from '@/components/ui/GameCard';
import { AnimalAvatar, animalOptions, AnimalType } from '@/components/AnimalAvatar';
import { ArrowLeft } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function CharacterSelect() {
  const navigate = useNavigate();
  const { setCharacter } = useGame();
  const [selected, setSelected] = useState<AnimalType | null>(null);
  const [playerName, setPlayerName] = useState('');

  const handleSelect = (animalId: AnimalType) => {
    setSelected(animalId);
  };

  const handleContinue = () => {
    if (selected && playerName.trim()) {
      setCharacter({
        id: selected,
        name: playerName.trim(),
        avatar: selected,
        outfit: {
          top: 'default',
          bottom: 'default',
        }
      });
      navigate('/dashboard');
    }
  };

  const isValid = selected && playerName.trim().length >= 1;

  return (
    <div className="min-h-screen sky-background flex flex-col items-center py-8 px-4">
      {/* Header */}
      <div className="w-full max-w-2xl flex items-center mb-6">
        <button 
          onClick={() => navigate('/')}
          className="p-2 rounded-full bg-card/50 hover:bg-card transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-foreground" />
        </button>
        <h1 className="flex-1 text-center text-3xl font-fredoka font-bold text-foreground text-shadow pr-10">
          Choose Your Avatar!
        </h1>
      </div>

      {/* Name Input */}
      <GameCard className="mb-6 p-4 w-full max-w-sm">
        <label className="block font-fredoka font-bold text-lg text-card-foreground mb-2 text-center">
          What's your name? ✨
        </label>
        <Input
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="Enter your name..."
          className="text-center font-nunito text-lg"
          maxLength={20}
        />
      </GameCard>

      {/* Animal Avatar Grid */}
      <div className="grid grid-cols-3 gap-4 mb-8 max-w-lg">
        {animalOptions.map((animal) => (
          <GameCard
            key={animal.id}
            floating={selected === animal.id}
            onClick={() => handleSelect(animal.id)}
            className={`
              p-4 transition-all duration-300 cursor-pointer flex flex-col items-center
              ${selected === animal.id 
                ? 'ring-4 ring-accent scale-105 bg-accent/10' 
                : 'hover:scale-102 hover:bg-muted/50'
              }
            `}
          >
            <AnimalAvatar 
              animal={animal.id}
              size="lg" 
              animated={selected === animal.id}
            />
            <p className="text-center font-fredoka font-bold text-lg mt-3 text-card-foreground">
               {animal.name}
            </p>
          </GameCard>
        ))}
      </div>

      {/* Preview of selected */}
      {selected && playerName && (
        <div className="text-center mb-6 animate-fade-in">
          <p className="font-nunito text-lg text-foreground/80">
            Ready to play as <span className="font-bold text-accent">{playerName}</span> the {animalOptions.find(a => a.id === selected)?.name}!
          </p>
        </div>
      )}

      {/* Continue Button */}
      <GameButton
        size="lg"
        disabled={!isValid}
        onClick={handleContinue}
        className="mt-2"
      >
        Let's Go! 🚀
      </GameButton>
    </div>
  );
}
