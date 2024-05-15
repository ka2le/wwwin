import React from 'react';
import { TextField } from '@mui/material';
import { useGame } from '../context/GameContext';

const MainPrompt = () => {
    const { state, setState } = useGame();
    
    const handleChange = (event) => {
        setState({ ...state, mainPrompt: event.target.value });
    };

    return (
        <TextField
            multiline
            rows={18}
            variant="outlined"
            fullWidth
            value={state.mainPrompt || ''}
            onChange={handleChange}
            placeholder="Enter text here..."
        />
    );
};

export default MainPrompt;
