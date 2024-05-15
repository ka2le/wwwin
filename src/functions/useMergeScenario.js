import { useEffect } from 'react';
import { useGame } from '../context/GameContext';

export const useMergeScenario = () => {
    const { state, setState } = useGame();

    useEffect(() => {
        const mergeParts = () => {
            return `${state.baseInstructions || ''}

Scenario:
${state.competitionType || ''}

Contestants:
${state.contestant1 || ''} vs. ${state.contestant2 || ''}

Factors to Consider:
- ${state.contestant1 || ''}: ${state.contestant1Factors || ''}.
- ${state.contestant2 || ''}: ${state.contestant2Factors || ''}.`;
        };

        const mergedScenario = mergeParts();
        setState({ ...state, mainPrompt: mergedScenario });
    }, [
        state.baseInstructions,
        state.competitionType,
        state.contestant1,
        state.contestant2,
        state.contestant1Factors,
        state.contestant2Factors,
        setState,
    ]);
};

export default useMergeScenario;
