import { useState, useEffect } from 'react';

const useProcessedImage = (imageSrc) => {
    const [processedImage, setProcessedImage] = useState(null);

    useEffect(() => {
        if (imageSrc) {
            const image = new Image();
            image.src = imageSrc;
            image.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = image.width;
                canvas.height = image.height;
                ctx.drawImage(image, 0, 0);
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const data = imageData.data;
                for (let i = 0; i < data.length; i += 4) {
                    const r = data[i];
                    const g = data[i + 1];
                    const b = data[i + 2];
                    if (r > 240 && g > 240 && b > 240) { // adjust threshold as needed
                        data[i + 3] = 0; // set alpha to 0
                    }
                }
                ctx.putImageData(imageData, 0, 0);
                setProcessedImage(canvas.toDataURL());
            };
        }
    }, [imageSrc]);

    return processedImage;
};

export default useProcessedImage;
