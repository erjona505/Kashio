import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '@/context/GameContext';
import { GameButton } from '@/components/ui/GameButton';
import { GameCard } from '@/components/ui/GameCard';
import { CoinBadge } from '@/components/ui/CoinBadge';
import { ArrowLeft, Check, ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';

export default function BusinessSelect() {
  const navigate = useNavigate();
  const { gameState, buyBusiness, earnFromBusiness } = useGame();

  const handleBuy = (businessId: string) => {
    const business = gameState.businesses.find(b => b.id === businessId);
    if (!business) return;
    
    if (business.owned) {
      earnFromBusiness(businessId);
      toast.success(`Earned $${business.earningsPerService} from ${business.name}!`);
    } else if (buyBusiness(businessId)) {
      toast.success(`You bought ${business.name}!`);
    } else {
      toast.error("Not enough funds!");
    }
  };

  return (
    <div className="min-h-screen sky-background py-6 px-4">
      {/* Header */}
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={() => navigate('/dashboard')}
            className="p-2 rounded-full bg-card/50 hover:bg-card transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-foreground" />
          </button>
          <h1 className="text-2xl font-fredoka font-bold text-foreground text-shadow">
            Choose Your Business
          </h1>
          <CoinBadge amount={gameState.balance} size="sm" />
        </div>

        {/* Business Grid */}
        <div className="space-y-4">
          {gameState.businesses.map((business) => (
            <GameCard 
              key={business.id} 
              floating
              className={`flex items-center gap-4 ${business.owned ? 'ring-2 ring-secondary' : ''}`}
            >
              {/* Business Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-b from-sky-light to-sky flex items-center justify-center text-3xl shadow-game">
                {business.icon}
              </div>

              {/* Business Info */}
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-fredoka font-bold text-lg text-card-foreground">
                    {business.name}
                  </h3>
                  {business.owned && (
                    <span className="bg-secondary text-secondary-foreground text-xs px-2 py-0.5 rounded-full font-semibold">
                      Owned
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground font-nunito">
                  {business.description}
                </p>
                <p className="text-sm font-semibold text-secondary font-nunito mt-1">
                  Earns: ${business.earningsPerService}/service
                </p>
              </div>

              {/* Action Button */}
              <GameButton
                variant={business.owned ? 'secondary' : 'primary'}
                size="sm"
                onClick={() => handleBuy(business.id)}
              >
                {business.owned ? (
                  <>
                    <ShoppingBag className="w-4 h-4 mr-1" />
                    Sell
                  </>
                ) : (
                  `$${business.price}`
                )}
              </GameButton>
            </GameCard>
          ))}
        </div>

        {/* Info Card */}
        <GameCard className="mt-6 text-center">
          <p className="text-muted-foreground font-nunito">
            💡 <span className="font-semibold">Tip:</span> Buy businesses to earn money! 
            The more expensive, the more you earn per service.
          </p>
        </GameCard>
      </div>
    </div>
  );
}
