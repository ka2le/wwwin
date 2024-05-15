import React from 'react';
import { TextField, Typography } from '@mui/material';
import { useGame } from '../context/GameContext';

const SettingsComponent = () => {
    const { state, setState } = useGame();

    const handleInputChange = (name) => (event) => {
        setState({ ...state, [name]: event.target.value });
    };

    return (
        <div>
            <Typography variant="h6" gutterBottom>
                Settings
            </Typography>
            <TextField
                label="API Key"
                variant="outlined"
                fullWidth
                value={state.apiKey || ''}
                onChange={handleInputChange('apiKey')}
                margin="normal"
            />
            {/* <TextField
                label="URL"
                variant="outlined"
                fullWidth
                value={state.url || ''}
                onChange={handleInputChange('url')}
                margin="normal"
            /> */}
        </div>
    );
};

export default SettingsComponent;
