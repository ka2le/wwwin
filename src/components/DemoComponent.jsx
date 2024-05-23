import React from 'react';
import { Button } from '@mui/material';
import { useGame } from '../context/GameContext'; // Import the useGame hook
import { defaultState } from '../context/GameContext'; // Import the default state

/**
 * DemoComponent is a demonstration component to show how to create and use components with useGame context.
 * This component includes a button that updates the TemplateValue in the state.
 */
const DemoComponent = () => {
    // Destructure state and setState from useGame hook
    const { state, setState } = useGame();

    /**
     * handleTemplateUpdate is an example function that updates the TemplateValue in the state.
     */
    const handleTemplateUpdate = () => {
        // Update the TemplateValue in the state while preserving other state values
        setState({
            ...state,
            TemplateValue: "New Value", // Example update to the TemplateValue
        });
    };

    return (
        <div>
            <p>This is a demo component to show how to use the useGame context and update state values.</p>
            <Button variant="contained" color="primary" onClick={handleTemplateUpdate}>
                Update TemplateValue
            </Button>
        </div>
    );
};

export default DemoComponent;
