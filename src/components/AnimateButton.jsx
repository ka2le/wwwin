import React, { useState } from 'react';
import { Button } from '@mui/material';
import BattleScene from './BattleScene';

const AnimateButton = () => {
    const [showBattle, setShowBattle] = useState(false);

    const handleAnimate = () => {
        setShowBattle(true);
        setTimeout(() => {
            setShowBattle(false);
        }, 5000); // duration of the animation
    };

    return (
        <div>
            <Button fullWidth variant="contained" color="primary" onClick={handleAnimate}>
                Animate
            </Button>
            <BattleScene show={showBattle} />
        </div>
    );
};

export default AnimateButton;
