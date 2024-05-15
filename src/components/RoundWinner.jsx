import React from 'react';
import { Typography } from '@mui/material';
import { useGame } from '../context/GameContext';

const RoundWinner = () => {
    const { state } = useGame();
    const { roundWinner } = state;

    return (
        <div style={{ padding: '20px', marginTop: '20px' }}>
            <Typography variant="h6" gutterBottom>
                Round Winner
            </Typography>
            <Typography variant="body1">
                {roundWinner || "No winner determined yet."}
            </Typography>
        </div>
    );
};

export default RoundWinner;
