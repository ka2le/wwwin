import React from 'react';
import { Typography } from '@mui/material';
import { useGame } from '../context/GameContext';

const CompetitionType = () => {
    const { state } = useGame();
    const { competitionType } = state;

    return (
        <div style={{ padding: '20px', marginTop: '20px' }}>
            <Typography variant="h6" gutterBottom>
                Competition:
            </Typography>
            <Typography variant="body1">
                {competitionType || ""}
            </Typography>
        </div>
    );
};

export default CompetitionType;
