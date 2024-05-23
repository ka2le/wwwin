// components/RoomComponent.jsx
import React from 'react';
import { Button, Typography } from '@mui/material';
import useRoom from '../hooks/useRoom';

const RoomManager = () => {
    const { roomId, createNewRoom } = useRoom();

    return (
        <div>
            <Typography variant="h6">Current Room: {roomId}</Typography>
            <Button variant="contained" color="primary" onClick={createNewRoom}>
                Create New Room
            </Button>
        </div>
    );
};

export default RoomManager;
