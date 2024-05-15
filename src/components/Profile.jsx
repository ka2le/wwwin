import React from 'react';
import { Typography, Box } from '@mui/material';
import { useGame } from '../context/GameContext';
import ProfilePicture from './ProfilePicture';

const Profile = ({ playerNumber = 1 }) => {
    const { state } = useGame();
    const contestantKey = `contestant${playerNumber}`;
    const contestantFactorsKey = `${contestantKey}Factors`;
    const contestantName = state[contestantKey];
    const contestantFactors = state[contestantFactorsKey];

    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                {contestantName}
            </Typography>
            <ProfilePicture playerNumber={playerNumber} />
            <Box mt={2}>
                <Typography variant="h6" gutterBottom>
                    Factors
                </Typography>
                <Typography variant="body1">
                    {contestantFactors}
                </Typography>
            </Box>
        </Box>
    );
};

export default Profile;
