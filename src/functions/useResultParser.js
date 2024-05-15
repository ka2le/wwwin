import { useEffect } from 'react';
import { useGame } from '../context/GameContext';

export const useResultParser = () => {
    const { state, setState } = useGame();

    useEffect(() => {
        const parseResult = () => {
            const { apiResult, contestant1, contestant2 } = state;

            if (!apiResult) return;

            const resultLowerCase = apiResult.toLowerCase();
            const contestant1LowerCase = contestant1.toLowerCase();
            const contestant2LowerCase = contestant2.toLowerCase();

            let roundWinner = null;

            // Best case scenario
            if (resultLowerCase.includes(`winner: ${contestant1LowerCase}`)) {
                roundWinner = contestant1;
            } else if (resultLowerCase.includes(`winner: ${contestant2LowerCase}`)) {
                roundWinner = contestant2;
            } else {
                // Fallback to finding first appearance after "winner:"
                const winnerIndex = resultLowerCase.indexOf('winner:');
                if (winnerIndex !== -1) {
                    const afterWinner = resultLowerCase.slice(winnerIndex);
                    if (afterWinner.includes(contestant1LowerCase)) {
                        roundWinner = contestant1;
                    } else if (afterWinner.includes(contestant2LowerCase)) {
                        roundWinner = contestant2;
                    }
                }

                // Fallback to just "winner"
                if (!roundWinner && resultLowerCase.includes('winner')) {
                    if (resultLowerCase.indexOf(contestant1LowerCase) < resultLowerCase.indexOf(contestant2LowerCase)) {
                        roundWinner = contestant1;
                    } else {
                        roundWinner = contestant2;
                    }
                }
            }

            setState({ ...state, roundWinner });
        };

        parseResult();
    }, [state.apiResult, state.contestant1, state.contestant2, setState]);
};

export default useResultParser;
