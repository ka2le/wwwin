import React from 'react';
import { Button } from '@mui/material';
import { useGame } from '../context/GameContext';
import { getAuth, signInWithCustomToken } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { initializeApp } from 'firebase/app';



const ConnectButton = () => {
    const { state } = useGame();

    const handleFirebaseConnect = () => {
        if (state.token) {
            console.log(state.token)
            signInWithCustomToken(state.token)
                .then(() => {
                    const dbRef = ref('games'); // Update the path as needed
                    set(dbRef, {
                        token: state.token,
                        message: 'Connected to Firebase',
                    }).then(() => {
                        console.log('Data saved successfully.');
                    }).catch((error) => {
                        console.error('Error saving data: ', error);
                    });
                })
                .catch((error) => {
                    console.error('Error during authentication: ', error);
                });
        } else {
            console.error('No token available in state.');
        }
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleFirebaseConnect}>
                Connect to Firebase
            </Button>
        </div>
    );
};

export default ConnectButton;
