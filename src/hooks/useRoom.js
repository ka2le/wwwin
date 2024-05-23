// hooks/useRoom.js
import { useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const useRoom = () => {
    const { state, setState } = useGame();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        let roomId = params.get('room');

        if (!roomId) {
            roomId = uuidv4();
            params.set('room', roomId);
            navigate(`?${params.toString()}`, { replace: true });
        }

        setState({
            ...state,
            roomId: roomId
        });
    }, [location.search, setState, state, navigate]);

    const createNewRoom = () => {
        const newRoomId = uuidv4();
        const params = new URLSearchParams(location.search);
        params.set('room', newRoomId);
        navigate(`?${params.toString()}`, { replace: true });

        setState({
            ...state,
            roomId: newRoomId
        });
    };

    return {
        roomId: state.roomId,
        createNewRoom
    };
};

export default useRoom;
