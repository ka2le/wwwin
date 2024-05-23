// hooks/useSyncGameState.js
import { setDoc, doc } from 'firebase/firestore';
import { db } from './firebase';
import { useGame } from '../context/GameContext';

const useSyncGameState = () => {
  const { state } = useGame();

  const syncGameState = async () => {
    if (state.roomId) {
      try {
        await setDoc(doc(db, 'games', state.roomId), { ...state });
        // alert('Game state synced successfully!');
      } catch (error) {
        console.error("Error syncing game state: ", error);
      }
    }
  };

  return syncGameState;
};

export default useSyncGameState;
