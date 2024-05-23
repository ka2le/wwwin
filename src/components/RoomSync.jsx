// components/RoomSync.jsx
import React from 'react';
import useFetchRoomData from '../hooks/useFetchRoomData';
import useSyncGameState from '../hooks/useSyncGameState';

const RoomSync = () => {
  const roomData = useFetchRoomData();
  const syncGameState = useSyncGameState();

  return (
    <div>
      <h1>Room Data</h1>
      <div>
        {roomData ? (
          <pre>{JSON.stringify(roomData, null, 2)}</pre>
        ) : (
          <p>No data found for this room.</p>
        )}
      </div>
      <button onClick={syncGameState}>Sync Game State</button>
    </div>
  );
};

export default RoomSync;
