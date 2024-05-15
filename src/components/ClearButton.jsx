import React from 'react';
import { Button } from '@mui/material';
import { useGame } from '../context/GameContext';
import { defaultState } from '../context/GameContext'; // Import the default state

const ClearButton = () => {
    const { state, setState } = useGame();

    const handleClear = () => {
        setState({
            ...defaultState,
            apiKey: state.apiKey
        });
    };

    return (
        <Button variant="contained" color="primary" onClick={handleClear}>
            Reset
        </Button>
    );
};

export default ClearButton;
