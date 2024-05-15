import React from 'react';
import { Paper } from '@mui/material';
import { useGame } from '../context/GameContext';

const Result = () => {
    const { state } = useGame();
    const { apiResult } = state;

    return (
        <Paper style={{ maxHeight: 300, overflowY: 'auto', padding: '20px', marginTop: '20px' }}>
            <div>
                {apiResult || "No results to display."}
            </div>
        </Paper>
    );
};

export default Result;
