import { useEffect, useRef } from 'react';
import lagu from '../assets/kanepisan.mp3';

export default function MusicComp() {
    const audioRef = useRef(null);

    useEffect(() => {
        const playMusic = () => {
            if (audioRef.current) {
            audioRef.current.play()
            .then(() => {
                console.log("Musik mulai diputar setelah interaksi!");
                removeInteractions();
                }).catch((err) => console.log("Gagal memutar:", err));
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