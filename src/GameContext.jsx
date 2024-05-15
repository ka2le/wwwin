import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [state, setState] = useState({}); // Initialize state here

    return (
        <GameContext.Provider value={{ state, setState }}>
            {children}
        </GameContext.Provider>
    );
};

export const useGame = () => useContext(GameContext);
