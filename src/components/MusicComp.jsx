import { useEffect, useRef } from 'react';
import lagu from '../assets/kanepisan.mp3';

export default function MusicComp() {
    const audioRef = useRef(null);

    useEffect(() => {
        const playMusic = () => {
            if (audioRef.current) {
            audioRef.current.play()
            .then(() => {
                removeInteractions();
                }).catch((err) => console.log(err));
            }
        };

    const removeInteractions = () => {
        window.removeEventListener('click', playMusic);
        window.removeEventListener('scroll', playMusic);
        window.removeEventListener('touchstart', playMusic);
    };

        window.addEventListener('click', playMusic);
        window.addEventListener('scroll', playMusic);
        window.addEventListener('touchstart', playMusic);

        return () => removeInteractions();
    }, []);

  return (
        <div style={{ display: 'none' }}>
            <audio ref={audioRef} loop>
                <source src={lagu} type="audio/mpeg" />
            </audio>
        </div>
    );
}