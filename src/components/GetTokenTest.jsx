import React, { useEffect, useState } from 'react';
import useGetToken from '../hooks/useGetToken';

const GetTokenTest = () => {
  const token = useGetToken();
  const [gameState, setGameState] = useState(null);
  const [loading, setLoading] = useState(true);
  const exampleGameId = 'exampleGameId'; // Default game ID for testing

  useEffect(() => {
    const fetchGameState = async () => {
      if (!token) return;

      try {
        const response = await fetch(`https://firestore.googleapis.com/v1/projects/in-87793/databases/(default)/documents/games/${exampleGameId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch game state');
        }

        const data = await response.json();
        setGameState(data);
      } catch (error) {
        console.error('Error fetching game state:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGameState();
  }, [token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Game State</h1>
      <pre>{JSON.stringify(gameState, null, 2)}</pre>
    </div>
  );
};

export default GetTokenTest;
