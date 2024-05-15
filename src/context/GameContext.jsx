import React, { createContext, useContext, useState, useEffect } from 'react';

const GameContext = createContext();

// Define your default state
export const defaultState = {
    mainPrompt: ``,
    baseInstructions: `Judge Instructions:
You will use logic, fairness, and discussion to decide who wins, both starting with 100 points before the specific factors are accounted for.

Your Tasks:
1. Identify Key Factor: Determine the most critical factor affecting the outcome of a scenario described below. Assign a numerical impact to this factor.
2. Assess Secondary Factors: For each additional factor, decide if it alters the impact of the main factor. If it does, assign a numerical value to this adjustment.
3. Calculate and Conclude: Sum the scores from the main and secondary factors. Evaluate if the total fairly represents the situation. Declare the winner as "WINNER: [Contender's Name]".

The most important thing is to end in that exact format WINNER: ContendersName`,
    competitionType: 'The contestants will face off in a game of Chess',
    contestant1: 'Triceratops',
    contestant2: 'Ankylosaurus',
    contestant1Factors: 'broken leg, metal battle helmet, higher intelligence',
    contestant2Factors: 'near blindness, wielding a sword, can breathe fire'

};

export const GameProvider = ({ children }) => {
    // Attempt to load initial state from localStorage or set to default {}
    // Attempt to load initial state from localStorage or set to default {}
    const savedState = JSON.parse(localStorage.getItem('MainData')) || {};
    // Merge the default state with the saved state
    const initialState = { ...defaultState, ...savedState };

    const [state, setState] = useState(initialState);
    // Effect to update localStorage when state changes
    useEffect(() => {
        localStorage.setItem('MainData', JSON.stringify(state));
    }, [state]);  // Dependency array with state to run only when state changes

    return (
        <GameContext.Provider value={{ state, setState }}>
            {children}
        </GameContext.Provider>
    );
};

export const useGame = () => useContext(GameContext);
