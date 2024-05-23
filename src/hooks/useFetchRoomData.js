// hooks/useFetchRoomData.js
import { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import { useGame } from '../context/GameContext';

const useFetchRoomData = () => {
  const [roomData, setRoomData] = useState(null);
  const { state } = useGame();

  useEffect(() => {
    const fetchRoomData = async () => {
      if (state.roomId) {
        try {
          const q = query(collection(db, 'games'), where('roomId', '==', state.roomId));
          const querySnapshot = await getDocs(q);
          if (!querySnapshot.empty) {
            const data = querySnapshot.docs[0].data();
            setRoomData(data);
          } else {
            setRoomData(null);
          }
        } catch (error) {
          console.error("Error fetching room data: ", error);
        }
      }
    };

    fetchRoomData();
  }, [state.roomId]);

  return roomData;
};

export default useFetchRoomData;
