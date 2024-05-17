import React, { useEffect, useState } from 'react';
import useGameState from '../hooks/useGameState';

const ServerTest = () => {
  const [getGameState, postGameState] = useGameState();
  const [gameState, setGameState] = useState({ gameState: "Test" });

  useEffect(() => {
    const fetchGameState = async () => {
      try {
        const gameId = 'exampleGameId';
        const state = await getGameState(gameId);
        setGameState(state);
      } catch (error) {
        console.error('Failed to fetch game state:', error);
      }
    };

    fetchGameState();
  }, [getGameState]);

  const saveGameState = async () => {
    try {
      const gameId = 'exampleGameId';
      const newState = { /* your game state object */ };
      const response = await postGameState(gameId, newState);
      console.log('Game state saved:', response);
    } catch (error) {
      console.error('Failed to save game state:', error);
    }
  };

  return (
    <div>
      <pre>{JSON.stringify(gameState, null, 2)}</pre>
      <button onClick={saveGameState}>Save Game State</button>
    </div>
  );
};

export default ServerTest;
