import React, { createContext, useContext, useState, useEffect } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
    // Attempt to load initial state from localStorage or set to default {}
    const initialState = JSON.parse(localStorage.getItem('MainData')) || {};
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
