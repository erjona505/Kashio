import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GameProvider } from "@/context/GameContext";
import WelcomeScreen from "./pages/WelcomeScreen";
import CharacterSelect from "./pages/CharacterSelect";
import CharacterCustomize from "./pages/CharacterCustomize";
import Dashboard from "./pages/Dashboard";
import BusinessSelect from "./pages/BusinessSelect";
import LoansPage from "./pages/LoansPage";
import LearnPage from "./pages/LearnPage";
import RacingGame from "./pages/RacingGame";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <GameProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomeScreen />} />
            <Route path="/select-character" element={<CharacterSelect />} />
            <Route path="/customize" element={<CharacterCustomize />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/businesses" element={<BusinessSelect />} />
            <Route path="/loans" element={<LoansPage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/race" element={<RacingGame />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </GameProvider>
  </QueryClientProvider>
);

export default App;
