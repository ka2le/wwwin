import React from 'react';
import { Paper } from '@mui/material';
import { useGame } from '../context/GameContext';
import { useResultParser } from '../hooks/useResultParser';

const Result = () => {
    const { state } = useGame();
    const { apiResult } = state;
    useResultParser()

    return (
        <Paper style={{ maxHeight: 420, overflowY: 'auto', padding: '20px', marginTop: '20px' }}>
            <div>
                {apiResult || "No results to display."}
            </div>
        </Paper>
    );
};

export default Result;
