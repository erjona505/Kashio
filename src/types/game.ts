export interface Character {
  id: string;
  name: string;
  avatar: string;
  outfit: Outfit;
}

export interface Outfit {
  top: string;
  bottom: string;
  accessory?: string;
  shoes?: string;
}

export interface Business {
  id: string;
  name: string;
  icon: string;
  price: number;
  earningsPerService: number;
  description: string;
  owned: boolean;
}

export interface Loan {
  id: string;
  amount: number;
  interestRate: number;
  monthlyPayment: number;
  remainingMonths: number;
  totalOwed: number;
}

export interface GameState {
  balance: number;
  coins: number;
  character: Character | null;
  businesses: Business[];
  loans: Loan[];
  currentLevel: number;
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Obstacle {
  id: string;
  x: number;
  y: number;
  type: 'barrier' | 'question' | 'coin';
  question?: Question;
}
