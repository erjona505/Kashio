import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Character, Business, Loan, GameState, Outfit } from '@/types/game';

interface GameContextType {
  gameState: GameState;
  setCharacter: (character: Character) => void;
  updateOutfit: (outfit: Partial<Outfit>) => void;
  addCoins: (amount: number) => void;
  spendCoins: (amount: number) => boolean;
  buyBusiness: (businessId: string) => boolean;
  takeLoan: (amount: number, interestRate: number, months: number) => void;
  payLoan: (loanId: string, amount: number) => void;
  earnFromBusiness: (businessId: string) => void;
}

const defaultBusinesses: Business[] = [
  {
    id: 'lemonade',
    name: 'Lemonade Stand',
    icon: '🍋',
    price: 100,
    earningsPerService: 10,
    description: 'Sell refreshing lemonade!',
    owned: false,
  },
  {
    id: 'bakery',
    name: 'Bakery Shop',
    icon: '🧁',
    price: 500,
    earningsPerService: 50,
    description: 'Bake delicious treats!',
    owned: false,
  },
  {
    id: 'petshop',
    name: 'Pet Shop',
    icon: '🐕',
    price: 1000,
    earningsPerService: 100,
    description: 'Take care of cute pets!',
    owned: false,
  },
  {
    id: 'bookstore',
    name: 'Book Store',
    icon: '📚',
    price: 750,
    earningsPerService: 75,
    description: 'Share the joy of reading!',
    owned: false,
  },
];

const initialGameState: GameState = {
  balance: 500,
  coins: 0,
  character: null,
  businesses: defaultBusinesses,
  loans: [],
  currentLevel: 1,
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: ReactNode }) {
  const [gameState, setGameState] = useState<GameState>(initialGameState);

  const setCharacter = (character: Character) => {
    setGameState(prev => ({ ...prev, character }));
  };

  const updateOutfit = (outfit: Partial<Outfit>) => {
    if (!gameState.character) return;
    setGameState(prev => ({
      ...prev,
      character: prev.character ? {
        ...prev.character,
        outfit: { ...prev.character.outfit, ...outfit }
      } : null
    }));
  };

  const addCoins = (amount: number) => {
    setGameState(prev => ({ 
      ...prev, 
      coins: prev.coins + amount,
      balance: prev.balance + amount 
    }));
  };

  const spendCoins = (amount: number): boolean => {
    if (gameState.balance >= amount) {
      setGameState(prev => ({ ...prev, balance: prev.balance - amount }));
      return true;
    }
    return false;
  };

  const buyBusiness = (businessId: string): boolean => {
    const business = gameState.businesses.find(b => b.id === businessId);
    if (!business || business.owned) return false;
    
    if (spendCoins(business.price)) {
      setGameState(prev => ({
        ...prev,
        businesses: prev.businesses.map(b =>
          b.id === businessId ? { ...b, owned: true } : b
        )
      }));
      return true;
    }
    return false;
  };

  const takeLoan = (amount: number, interestRate: number, months: number) => {
    const monthlyPayment = (amount * (1 + interestRate)) / months;
    const newLoan: Loan = {
      id: `loan-${Date.now()}`,
      amount,
      interestRate,
      monthlyPayment,
      remainingMonths: months,
      totalOwed: amount * (1 + interestRate),
    };
    
    setGameState(prev => ({
      ...prev,
      loans: [...prev.loans, newLoan],
      balance: prev.balance + amount,
    }));
  };

  const payLoan = (loanId: string, amount: number) => {
    if (gameState.balance < amount) return;
    
    setGameState(prev => ({
      ...prev,
      balance: prev.balance - amount,
      loans: prev.loans.map(loan =>
        loan.id === loanId
          ? { ...loan, totalOwed: Math.max(0, loan.totalOwed - amount) }
          : loan
      ).filter(loan => loan.totalOwed > 0)
    }));
  };

  const earnFromBusiness = (businessId: string) => {
    const business = gameState.businesses.find(b => b.id === businessId);
    if (business && business.owned) {
      addCoins(business.earningsPerService);
    }
  };

  return (
    <GameContext.Provider value={{
      gameState,
      setCharacter,
      updateOutfit,
      addCoins,
      spendCoins,
      buyBusiness,
      takeLoan,
      payLoan,
      earnFromBusiness,
    }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}
