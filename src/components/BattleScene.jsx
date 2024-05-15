import React from 'react';
import ProfilePicture from './ProfilePicture';
import '../theme/BattleScene.css';

const BattleScene = ({ show }) => {
    return (
        <div className={`battle-scene ${show ? 'show' : ''}`}>
            <div className="profile-container">
                <div className="flipped-container">
                    <ProfilePicture playerNumber={1} showBackground={false} className="jiggle" />
                </div>
                <div className="vs-text">VS</div>
                <div className="profile-picture-wrapper">
                    <ProfilePicture playerNumber={2} showBackground={false} className="jiggle" />
                </div>
            </div>
            <div className="background background-top"></div>
            <div className="background background-bottom"></div>
        </div>
    );
};

export default BattleScene;