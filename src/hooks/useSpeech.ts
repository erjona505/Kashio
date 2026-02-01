import { useState } from 'react';

const API_URL = 'http://localhost:5000';

export const useSpeech = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const speak = async (text: string, language: string = 'english') => {
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/speech`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, language })
      });

      if (!response.ok) throw new Error('Speech failed');

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);

      setIsPlaying(true);

      audio.onended = () => {
        setIsPlaying(false);
        URL.revokeObjectURL(audioUrl);
      };

      await audio.play();

    } catch (error) {
      console.error('Speech error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { speak, isLoading, isPlaying };
};
