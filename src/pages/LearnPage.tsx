import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GameButton } from '@/components/ui/GameButton';
import { GameCard } from '@/components/ui/GameCard';
import { ArrowLeft, BookOpen, Lightbulb, PiggyBank, TrendingUp } from 'lucide-react';

const lessons = [
  {
    id: 'savings',
    title: 'What is Saving?',
    description: 'Learn why saving money is important',
    icon: PiggyBank,
    color: 'from-coral-light to-coral-dark',
    completed: true,
  },
  {
    id: 'earning',
    title: 'Earning Money',
    description: 'Different ways to earn money',
    icon: TrendingUp,
    color: 'from-secondary to-green-600',
    completed: false,
  },
  {
    id: 'spending',
    title: 'Smart Spending',
    description: 'Needs vs Wants',
    icon: Lightbulb,
    color: 'from-accent to-coin-dark',
    completed: false,
  },
  {
    id: 'borrowing',
    title: 'Borrowing & Loans',
    description: 'Understanding debt and interest',
    icon: BookOpen,
    color: 'from-sky-dark to-blue-600',
    completed: false,
  },
];

export default function LearnPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen sky-background py-6 px-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center mb-6">
          <button 
            onClick={() => navigate('/dashboard')}
            className="p-2 rounded-full bg-card/50 hover:bg-card transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-foreground" />
          </button>
          <h1 className="flex-1 text-center text-2xl font-fredoka font-bold text-foreground text-shadow pr-10">
            Learn Finance 📚
          </h1>
        </div>

        {/* Progress */}
        <GameCard className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="font-fredoka font-bold text-card-foreground">Your Progress</span>
            <span className="text-sm font-semibold text-secondary">1/4 Complete</span>
          </div>
          <div className="w-full bg-muted rounded-full h-3">
            <div className="bg-gradient-to-r from-secondary to-green-500 h-3 rounded-full w-1/4 transition-all" />
          </div>
        </GameCard>

        {/* Lessons */}
        <div className="space-y-4">
          {lessons.map((lesson) => {
            const IconComponent = lesson.icon;
            return (
              <GameCard
                key={lesson.id}
                floating
                onClick={() => {}}
                className={`cursor-pointer hover:scale-[1.02] transition-transform ${
                  lesson.completed ? 'opacity-75' : ''
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-b ${lesson.color} flex items-center justify-center shadow-game`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-fredoka font-bold text-card-foreground flex items-center gap-2">
                      {lesson.title}
                      {lesson.completed && <span className="text-secondary">✓</span>}
                    </h3>
                    <p className="text-sm text-muted-foreground font-nunito">
                      {lesson.description}
                    </p>
                  </div>
                  <div className="text-2xl">
                    {lesson.completed ? '🏆' : '▶️'}
                  </div>
                </div>
              </GameCard>
            );
          })}
        </div>

        {/* Coming Soon */}
        <GameCard className="mt-6 text-center">
          <p className="text-muted-foreground font-nunito">
            🎮 Complete lessons to unlock special items for your character!
          </p>
        </GameCard>
      </div>
    </div>
  );
}
