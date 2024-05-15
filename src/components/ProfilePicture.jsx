import React from 'react';
import useProcessedImage from '../hooks/useProcessedImage';
import { useGame } from '../context/GameContext';
import '../theme/ProfilePicture.css';

const ProfilePicture = ({ playerNumber = 1, showBackground = true, className }) => {
    const { state } = useGame();
    const contestantKey = `contestant${playerNumber}`;
    const contestantName = state[contestantKey];
    const imageFormats = ['jpg', 'jpeg', 'png', 'webp'];
    const getImageSrc = (name) => {
        const lowerCaseName = name.toLowerCase();
        for (let format of imageFormats) {
            try {
                return require(`../images/${lowerCaseName}.${format}`);
            } catch (error) {
                continue;
            }
        }
        return null;
    };

    const imageSrc = getImageSrc(contestantName);
    const processedImage = useProcessedImage(imageSrc);

    const backgroundClass = playerNumber === 1 ? 'background-player-1' : 'background-player-2';

    return (
        <div className="profile-picture-container">
            {showBackground && <div className={`profile-background ${backgroundClass}`}></div>}
            {processedImage ? (
                <img
                    className={`profile-picture ${className}`}
                    src={processedImage}
                    alt={contestantName}
                    style={{
                        transform: playerNumber === 1 ? 'scaleX(-1)' : 'none'
                    }}
                />
            ) : (
                <p className="profile-picture">Image not found</p>
            )}
        </div>
    );
};

export default ProfilePicture;
