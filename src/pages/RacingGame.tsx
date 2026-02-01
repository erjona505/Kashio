import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '@/context/GameContext';
import { GameButton } from '@/components/ui/GameButton';
import { GameCard } from '@/components/ui/GameCard';
import { CoinBadge } from '@/components/ui/CoinBadge';
import { ArrowLeft, Play, Pause, ArrowUp } from 'lucide-react';
import { Question } from '@/types/game';
import { getRandomQuestion } from '@/data/questions';
import { AnimalVehicle, AnimalType } from '@/components/AnimalAvatar';

interface Obstacle {
  id: number;
  lane: number;
  y: number;
  type: 'barrier' | 'coin' | 'question';
}

interface PlayerState {
  lane: number;
  y: number;
  isJumping: boolean;
}

export default function RacingGame() {
  const navigate = useNavigate();
  const { gameState, addCoins } = useGame();
  const [gameStarted, setGameStarted] = useState(false);
  const [paused, setPaused] = useState(false);
  const [score, setScore] = useState(0);
  const [player, setPlayer] = useState<PlayerState>({ lane: 1, y: 75, isJumping: false });
  const [obstacles, setObstacles] = useState<Obstacle[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [showAnswer, setShowAnswer] = useState<{ correct: boolean; explanation: string } | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [boost, setBoost] = useState(false);
  const [distance, setDistance] = useState(0);
  const gameLoopRef = useRef<number>();
  const obstacleIdRef = useRef(0);

  const lanes = [0, 1, 2];
  const laneWidth = 33.33;
  
  const characterAnimal = (gameState.character?.avatar as AnimalType) || 'fox';
  const playerName = gameState.character?.name || 'Player';

  const movePlayer = useCallback((direction: 'left' | 'right') => {
    if (paused || currentQuestion || showAnswer) return;
    setPlayer(prev => ({
      ...prev,
      lane: direction === 'left' 
        ? Math.max(0, prev.lane - 1)
        : Math.min(2, prev.lane + 1)
    }));
  }, [paused, currentQuestion, showAnswer]);

  const jump = useCallback(() => {
    if (paused || currentQuestion || showAnswer || player.isJumping) return;
    setPlayer(prev => ({ ...prev, isJumping: true }));
    setTimeout(() => {
      setPlayer(prev => ({ ...prev, isJumping: false }));
    }, 500);
  }, [paused, currentQuestion, showAnswer, player.isJumping]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft' || e.key === 'a') movePlayer('left');
    if (e.key === 'ArrowRight' || e.key === 'd') movePlayer('right');
    if (e.key === 'ArrowUp' || e.key === 'w' || e.key === ' ') {
      if (!gameStarted) setGameStarted(true);
      else if (!currentQuestion && !showAnswer) jump();
    }
    if (e.key === 'Escape' || e.key === 'p') {
      if (gameStarted && !currentQuestion && !showAnswer) setPaused(p => !p);
    }
  }, [movePlayer, jump, gameStarted, currentQuestion, showAnswer]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Game loop
  useEffect(() => {
    if (!gameStarted || paused || currentQuestion || showAnswer || gameOver) return;

    const speed = boost ? 6 : 3;
    
    gameLoopRef.current = window.setInterval(() => {
      setDistance(d => d + speed);
      
      setObstacles(prev => {
        const newObstacles = prev
          .map(obs => ({ ...obs, y: obs.y + speed }))
          .filter(obs => obs.y < 120);

        // Check collisions
        newObstacles.forEach(obs => {
          const playerTop = player.isJumping ? 60 : 70;
          const playerBottom = player.isJumping ? 75 : 85;
          
          if (obs.y > playerTop && obs.y < playerBottom && obs.lane === player.lane) {
            if (obs.type === 'coin') {
              setScore(s => s + 10);
              obs.y = 999;
            } else if (obs.type === 'barrier') {
              if (!player.isJumping) {
                setGameOver(true);
              } else {
                // Jumped over barrier - bonus points!
                setScore(s => s + 25);
                obs.y = 999;
              }
            } else if (obs.type === 'question') {
              setCurrentQuestion(getRandomQuestion());
              obs.y = 999;
            }
          }
        });

        return newObstacles.filter(obs => obs.y < 120);
      });

      // Spawn new obstacles with varied frequency
      const spawnChance = boost ? 0.04 : 0.025;
      if (Math.random() < spawnChance) {
        const types: Obstacle['type'][] = ['coin', 'coin', 'coin', 'coin', 'barrier', 'barrier', 'question'];
        const type = types[Math.floor(Math.random() * types.length)];
        setObstacles(prev => [...prev, {
          id: obstacleIdRef.current++,
          lane: Math.floor(Math.random() * 3),
          y: -10,
          type,
        }]);
      }
    }, 50);

    return () => {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    };
  }, [gameStarted, paused, currentQuestion, showAnswer, gameOver, player.lane, player.isJumping, boost]);

  const handleAnswer = (answerIndex: number) => {
    if (!currentQuestion) return;
    
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    
    setShowAnswer({
      correct: isCorrect,
      explanation: currentQuestion.explanation,
    });

    if (isCorrect) {
      setScore(s => s + 50);
      setBoost(true);
      setTimeout(() => setBoost(false), 4000);
    }
  };

  const dismissAnswer = () => {
    setShowAnswer(null);
    setCurrentQuestion(null);
  };

  const handleGameEnd = () => {
    addCoins(score);
    navigate('/dashboard');
  };

  const restartGame = () => {
    setGameOver(false);
    setScore(0);
    setDistance(0);
    setObstacles([]);
    setPlayer({ lane: 1, y: 75, isJumping: false });
    setGameStarted(true);
    setBoost(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky to-sky-light flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-card/80 backdrop-blur">
        <button 
          onClick={() => {
            if (score > 0) addCoins(score);
            navigate('/dashboard');
          }}
          className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-foreground" />
        </button>
        <div className="flex items-center gap-3">
          <span className="font-fredoka text-sm text-muted-foreground">
            {Math.floor(distance / 10)}m
          </span>
          <CoinBadge amount={score} size="sm" />
          {boost && (
            <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-bold animate-pulse">
              🚀 BOOST!
            </span>
          )}
        </div>
        <button
          onClick={() => setPaused(p => !p)}
          className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
          disabled={!!currentQuestion || !!showAnswer}
        >
          {paused ? <Play className="w-6 h-6" /> : <Pause className="w-6 h-6" />}
        </button>
      </div>

      {/* Game Area */}
      <div className="flex-1 relative overflow-hidden">
        {/* Road */}
        <div className="absolute inset-0 flex">
          {lanes.map((lane) => (
            <div
              key={lane}
              className="flex-1 border-x-2 border-dashed border-road-light/50 bg-road relative"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 40px,
                  hsl(220 10% 50% / 0.3) 40px,
                  hsl(220 10% 50% / 0.3) 80px
                )`,
                animation: gameStarted && !paused ? 'roadMove 0.5s linear infinite' : 'none',
              }}
            />
          ))}
        </div>

        {/* Grass sides */}
        <div className="absolute left-0 top-0 bottom-0 w-4 bg-grass" />
        <div className="absolute right-0 top-0 bottom-0 w-4 bg-grass" />

        {/* Obstacles */}
        {obstacles.map((obs) => (
          <div
            key={obs.id}
            className="absolute w-14 h-14 flex items-center justify-center text-4xl transition-all"
            style={{
              left: `calc(${obs.lane * laneWidth}% + ${laneWidth / 2}% - 28px + 4px)`,
              top: `${obs.y}%`,
            }}
          >
            {obs.type === 'coin' && (
              <span className="animate-spin-slow drop-shadow-lg">🪙</span>
            )}
            {obs.type === 'barrier' && (
              <span className="drop-shadow-lg">🚧</span>
            )}
            {obs.type === 'question' && (
              <span className="animate-bounce drop-shadow-lg">❓</span>
            )}
          </div>
        ))}

        {/* Player Character */}
        <div
          className="absolute transition-all duration-150"
          style={{
            left: `calc(${player.lane * laneWidth}% + ${laneWidth / 2}% - 40px + 4px)`,
            top: `${player.y}%`,
            transform: player.isJumping ? 'translateY(-40px) scale(1.1)' : 'translateY(0)',
          }}
        >
          <AnimalVehicle 
            animal={characterAnimal}
            isJumping={player.isJumping}
            hasBoost={boost}
          />
        </div>

        {/* Touch controls */}
        <div className="absolute bottom-0 left-0 right-0 flex h-1/2">
          <button 
            className="flex-1 active:bg-black/10 flex items-center justify-center"
            onTouchStart={() => movePlayer('left')}
            onClick={() => movePlayer('left')}
          >
            <span className="text-white/30 text-3xl">◀</span>
          </button>
          <button 
            className="flex-1 active:bg-black/10 flex items-center justify-center"
            onTouchStart={() => jump()}
            onClick={() => jump()}
          >
            <ArrowUp className="text-white/30 w-10 h-10" />
          </button>
          <button 
            className="flex-1 active:bg-black/10 flex items-center justify-center"
            onTouchStart={() => movePlayer('right')}
            onClick={() => movePlayer('right')}
          >
            <span className="text-white/30 text-3xl">▶</span>
          </button>
        </div>

        {/* Start Screen */}
        {!gameStarted && !gameOver && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <GameCard floating className="text-center max-w-sm mx-4">
              <div className="mb-4">
                <AnimalVehicle animal={characterAnimal} />
              </div>
              <h2 className="text-3xl font-fredoka font-bold text-card-foreground mb-2">
                🏁 {playerName}'s Coin Race!
              </h2>
              <p className="text-muted-foreground font-nunito mb-4">
                Collect coins, jump over barriers, and answer questions for a speed boost!
              </p>
              <div className="text-sm text-muted-foreground font-nunito mb-4 space-y-1">
                <p>◀ ▶ or ⬅️ ➡️ to move</p>
                <p>⬆️ or tap middle to JUMP</p>
              </div>
              <GameButton onClick={() => setGameStarted(true)} size="lg">
                Start Racing! 🚀
              </GameButton>
            </GameCard>
          </div>
        )}

        {/* Question Modal */}
        {currentQuestion && !showAnswer && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
            <GameCard floating className="max-w-md w-full">
              <h3 className="text-xl font-fredoka font-bold text-card-foreground mb-4">
                Question Time! 💡
              </h3>
              <p className="text-lg font-nunito text-card-foreground mb-6">
                {currentQuestion.question}
              </p>
              <div className="grid grid-cols-1 gap-3">
                {currentQuestion.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    className={`
                      p-4 rounded-xl font-nunito font-semibold text-left transition-all
                      hover:scale-[1.02] active:scale-[0.98] border-2 border-transparent
                      ${idx === 0 ? 'bg-coral-light/20 hover:bg-coral-light/30 hover:border-coral' : ''}
                      ${idx === 1 ? 'bg-secondary/20 hover:bg-secondary/30 hover:border-secondary' : ''}
                      ${idx === 2 ? 'bg-accent/20 hover:bg-accent/30 hover:border-accent' : ''}
                      ${idx === 3 ? 'bg-sky-dark/20 hover:bg-sky-dark/30 hover:border-sky-dark' : ''}
                    `}
                  >
                    <span className="text-muted-foreground mr-2 font-bold">
                      {String.fromCharCode(65 + idx)})
                    </span>
                    {option}
                  </button>
                ))}
              </div>
            </GameCard>
          </div>
        )}

        {/* Answer Feedback Modal */}
        {showAnswer && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
            <GameCard floating className="max-w-md w-full text-center">
              <div className={`text-6xl mb-4 ${showAnswer.correct ? 'animate-bounce' : 'animate-shake'}`}>
                {showAnswer.correct ? '🎉' : '😅'}
              </div>
              <h3 className={`text-2xl font-fredoka font-bold mb-4 ${
                showAnswer.correct ? 'text-secondary' : 'text-coral'
              }`}>
                {showAnswer.correct ? 'Correct! +50 coins & Boost!' : 'Not quite...'}
              </h3>
              <p className="text-lg font-nunito text-card-foreground mb-6 bg-muted/50 p-4 rounded-xl">
                💡 {showAnswer.explanation}
              </p>
              <GameButton onClick={dismissAnswer} size="lg">
                {showAnswer.correct ? 'Keep Racing! 🚀' : 'Try Again! 💪'}
              </GameButton>
            </GameCard>
          </div>
        )}

        {/* Game Over */}
        {gameOver && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center p-4">
            <GameCard floating className="text-center max-w-sm">
              <div className="mb-4">
                <AnimalVehicle animal={characterAnimal} />
              </div>
              <h2 className="text-3xl font-fredoka font-bold text-card-foreground mb-2">
                Game Over! 🏁
              </h2>
              <p className="text-muted-foreground font-nunito mb-2">
                Great run, {playerName}!
              </p>
              <p className="text-sm text-muted-foreground font-nunito mb-4">
                Distance: {Math.floor(distance / 10)}m
              </p>
              <CoinBadge amount={score} size="lg" className="mb-6" />
              <div className="flex gap-3 justify-center">
                <GameButton variant="secondary" onClick={restartGame}>
                  Play Again
                </GameButton>
                <GameButton onClick={handleGameEnd}>
                  Collect & Exit
                </GameButton>
              </div>
            </GameCard>
          </div>
        )}
      </div>

      {/* Controls hint */}
      {gameStarted && !gameOver && !currentQuestion && !showAnswer && (
        <div className="p-2 bg-card/80 text-center">
          <p className="text-sm text-muted-foreground font-nunito">
            ◀ Move Left | ⬆️ Jump | Move Right ▶
          </p>
        </div>
      )}
    </div>
  );
}
