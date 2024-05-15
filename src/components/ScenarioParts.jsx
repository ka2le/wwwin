import React from 'react';
import { TextField, Typography } from '@mui/material';
import { useGame } from '../context/GameContext';
import {useMergeScenario} from '../functions/useMergeScenario';

const ScenarioParts = () => {
    const { state, setState } = useGame();
    useMergeScenario();

    const handleInputChange = (name) => (event) => {
        setState({ ...state, [name]: event.target.value });
    };

    return (
        <div>
            <Typography variant="h6" gutterBottom>
                Scenario
            </Typography>
           
            <TextField
                label="Base Instructions"
                variant="outlined"
                fullWidth
                value={state.baseInstructions || ''}
                onChange={handleInputChange('baseInstructions')}
                margin="normal"
            />
             <TextField
                label="Competition Type"
                variant="outlined"
                fullWidth
                value={state.competitionType || ''}
                onChange={handleInputChange('competitionType')}
                margin="normal"
            />
            <TextField
                label="Contestant 1"
                variant="outlined"
                fullWidth
                value={state.contestant1 || ''}
                onChange={handleInputChange('contestant1')}
                margin="normal"
            />
            <TextField
                label="Contestant 2"
                variant="outlined"
                fullWidth
                value={state.contestant2 || ''}
                onChange={handleInputChange('contestant2')}
                margin="normal"
            />
            <TextField
                label="Contestant 1 Factors"
                variant="outlined"
                fullWidth
                value={state.contestant1Factors || ''}
                onChange={handleInputChange('contestant1Factors')}
                margin="normal"
            />
            <TextField
                label="Contestant 2 Factors"
                variant="outlined"
                fullWidth
                value={state.contestant2Factors || ''}
                onChange={handleInputChange('contestant2Factors')}
                margin="normal"
            />
        </div>
    );
};

export default ScenarioParts;
