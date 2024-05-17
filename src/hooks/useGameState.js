import { useCallback } from 'react';

const useGameState = () => {
  const getGameState = useCallback(async (gameId) => {
    try {
      const response = await fetch(`https://nodejs-serverless-function-express-wwwin.vercel.app/api/game?gameId=${gameId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching game state:', error);
      throw error;
    }
  }, []);

  const postGameState = useCallback(async (gameId, gameState) => {
    try {
      const response = await fetch('http://nodejs-serverless-function-express-wwwin.vercel.app/api/game', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ gameId: gameId, gameState }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error posting game state:', error);
      throw error;
    }
  }, []);

  return [getGameState, postGameState];
};

export default useGameState;
