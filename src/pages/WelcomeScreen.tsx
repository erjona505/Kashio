import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GameButton } from '@/components/ui/GameButton';
// import { CharacterAvatar } from '@/components/CharacterAvatar';
import Logo from "@/assets/logo4 1.png";

export default function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen sky-background flex flex-col items-center justify-between py-8 px-4 overflow-hidden">
      {/* Logo */}
      <div className="z-10 mt-8">
        <img
          src={Logo}
          alt="Kashi Game Logo"
          className="w-48 md:w-64 lg:w-72 animate-float drop-shadow-xl"
        />
      </div>

      {/* Get Started Button */}
      <div className="z-10 mb-12">
        <GameButton
          size="lg"
          onClick={() => navigate("/select-character")}
          className="text-xl px-12 py-5 animate-pulse-glow"
        >
          Get Started!
        </GameButton>
      </div>

      {/* Floating coins decoration */}
      <div className="absolute top-20 left-10 text-4xl animate-float">🪙</div>
      <div
        className="absolute top-40 right-16 text-3xl animate-float"
        style={{ animationDelay: "1s" }}
      >
        💰
      </div>
      <div
        className="absolute top-32 left-1/4 text-2xl animate-float"
        style={{ animationDelay: "0.5s" }}
      >
        ✨
      </div>
      <div
        className="absolute top-24 right-1/3 text-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        🌟
      </div>
    </div>
  );
}
