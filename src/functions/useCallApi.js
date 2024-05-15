import axios from 'axios';
import { useGame } from '../context/GameContext';
import Groq from "groq-sdk";  // Ensure this is correctly imported based on actual SDK

export const useCallApi = () => {
    const { state, setState } = useGame();
    const { apiKey, mainPrompt } = state;

    // Conditional Groq SDK initialization
    let groq;
    if (apiKey) {
        groq = new Groq({
            apiKey: apiKey,  // Fetching apiKey from context
            dangerouslyAllowBrowser: true,
        });
    }

    const callApi = async () => {
        if (!apiKey || !mainPrompt) {
            console.error('API Key and prompt are required');
            return;
        }

        if (groq) {
            try {
                const completion = await groq.chat.completions.create({
                    messages: [
                        {
                            role: "user",
                            content: mainPrompt  // Using mainPrompt from context
                        }
                    ],
                    model: "llama3-8b-8192"
                });
                setState({ ...state, apiResult: completion.choices[0]?.message?.content || "" });
            } catch (error) {
                console.error('API call failed:', error);
                setState({ ...state, apiResult: 'API call failed: ' + error.message });
            }
        } else {
            console.error('Groq instance is not initialized due to missing API Key');
        }
    };

    return callApi;
};

export default useCallApi;
