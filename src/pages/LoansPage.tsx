import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '@/context/GameContext';
import { GameButton } from '@/components/ui/GameButton';
import { GameCard } from '@/components/ui/GameCard';
import { CoinBadge } from '@/components/ui/CoinBadge';
import { ArrowLeft, Banknote, TrendingUp, AlertCircle } from 'lucide-react';
import { CharacterAvatar } from '@/components/CharacterAvatar';
import { toast } from 'sonner';

const loanOptions = [
  { amount: 100, interestRate: 0.05, months: 3, monthlyPayment: 35 },
  { amount: 500, interestRate: 0.10, months: 6, monthlyPayment: 92 },
  { amount: 1000, interestRate: 0.15, months: 12, monthlyPayment: 96 },
];

export default function LoansPage() {
  const navigate = useNavigate();
  const { gameState, takeLoan, payLoan } = useGame();
  const [selectedLoan, setSelectedLoan] = useState<number | null>(null);

  const handleTakeLoan = () => {
    if (selectedLoan !== null) {
      const loan = loanOptions[selectedLoan];
      takeLoan(loan.amount, loan.interestRate, loan.months);
      toast.success(`You borrowed $${loan.amount}!`);
      setSelectedLoan(null);
    }
  };

  const handlePayLoan = (loanId: string, amount: number) => {
    if (gameState.balance >= amount) {
      payLoan(loanId, amount);
      toast.success(`Paid $${amount} towards your loan!`);
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
            Bank & Loans
          </h1>
          <CoinBadge amount={gameState.balance} size="sm" />
        </div>

        {/* Banker Characters */}
        <GameCard className="mb-6">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-4">
              <CharacterAvatar characterId="girl" size="md" />
            </div>
            <div>
              <h3 className="font-fredoka font-bold text-lg text-card-foreground">
                Welcome to Ka$hi Bank! 🏦
              </h3>
              <p className="text-sm text-muted-foreground font-nunito">
                Need funds for your business? We can help!
              </p>
            </div>
          </div>
        </GameCard>

        {/* Active Loans */}
        {gameState.loans.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-fredoka font-bold text-foreground mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Your Active Loans
            </h2>
            <div className="space-y-3">
              {gameState.loans.map((loan) => (
                <GameCard key={loan.id} className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-fredoka font-bold text-card-foreground">
                      ${loan.amount} Loan
                    </span>
                    <span className="text-sm text-coral font-semibold">
                      ${loan.totalOwed.toFixed(0)} remaining
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 mb-3">
                    <div 
                      className="bg-secondary h-2 rounded-full transition-all"
                      style={{ 
                        width: `${100 - (loan.totalOwed / (loan.amount * (1 + loan.interestRate))) * 100}%` 
                      }}
                    />
                  </div>
                  <GameButton 
                    variant="secondary" 
                    size="sm" 
                    onClick={() => handlePayLoan(loan.id, loan.monthlyPayment)}
                    className="w-full"
                  >
                    Pay ${loan.monthlyPayment.toFixed(0)}
                  </GameButton>
                </GameCard>
              ))}
            </div>
          </div>
        )}

        {/* Loan Options */}
        <h2 className="text-lg font-fredoka font-bold text-foreground mb-3 flex items-center gap-2">
          <Banknote className="w-5 h-5" />
          Available Loans
        </h2>
        
        <div className="space-y-3 mb-6">
          {loanOptions.map((loan, index) => (
            <GameCard
              key={index}
              onClick={() => setSelectedLoan(index)}
              className={`cursor-pointer transition-all ${
                selectedLoan === index ? 'ring-2 ring-primary scale-[1.02]' : ''
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-fredoka font-bold text-xl text-card-foreground">
                    ${loan.amount}
                  </h3>
                  <p className="text-sm text-muted-foreground font-nunito">
                    {loan.months} months • {(loan.interestRate * 100).toFixed(0)}% interest
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground font-nunito">Monthly</p>
                  <p className="font-fredoka font-bold text-secondary">
                    ${loan.monthlyPayment}
                  </p>
                </div>
              </div>
            </GameCard>
          ))}
        </div>

        {/* Borrow Button */}
        <GameButton
          size="lg"
          onClick={handleTakeLoan}
          disabled={selectedLoan === null}
          className="w-full"
        >
          Borrow Money 💰
        </GameButton>

        {/* Warning */}
        <div className="mt-4 flex items-start gap-2 text-sm text-muted-foreground bg-card/50 rounded-xl p-3">
          <AlertCircle className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
          <p className="font-nunito">
            <span className="font-semibold">Remember:</span> Loans must be paid back with interest. 
            Only borrow what you can afford to repay!
          </p>
        </div>
      </div>
    </div>
  );
}
