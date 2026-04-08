import { useEffect, useState, useRef } from 'react';
import { FaPause, FaPlay, FaStepForward, FaStepBackward, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import vinyl from '../assets/bradpitt/vinyl.webp';
import './MusicComp.css';
import lagu1 from '../assets/StandByMe.mp3';
import lagu2 from '../assets/Louise.mp3';
import lagu3 from '../assets/ThinkinBoutYou.mp3';

const playlist = [
    { title: "Thinkin' Bout You", artist: "Frank Ocean", src: lagu3 },
    { title: "Louise", artist: "TV Girl", src: lagu2 },
    { title: "Stand By Me", artist: "Aldi Taher", src: lagu1 },
];

export default function MusicComp() {
    const audioRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.3);

    useEffect(() => {
        // Auto-play saat interaksi pertama (kebijakan browser)
        const playMusic = () => {
            if (audioRef.current) {
                audioRef.current.play()
                    .then(() => {
                        setIsPlaying(true);
                        removeInteractions();
                    }).catch((err) => console.log("Autoplay blocked:", err));
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

    // Effect untuk handle ganti lagu
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.load(); // Load lagu baru
            if (isPlaying) {
                audioRef.current.play().catch(err => console.log(err));
            }
        }
    }, [currentIndex]);

    // Effect untuk handle perubahan volume
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    const togglePlay = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
            setIsPlaying(true);
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const nextTrack = () => {
        setCurrentIndex((prev) => (prev + 1) % playlist.length);
    };

    const prevTrack = () => {
        setCurrentIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    };

    const handleVolumeChange = (e) => {
        setVolume(parseFloat(e.target.value));
    };

    return (
        <div data-aos="fade-in-up" className='fixed text-white z-[100] bottom-0 inset-x-0 bg-[#1db954] py-1' style={{ fontFamily: 'Stack Sans Headline' }}>
            <div className="mx-8 md:mx-16 flex md:flex-row justify-between items-center gap-4">                
                <div className="flex items-center w-full md:w-1/3">
                    <img 
                        src={vinyl} 
                        className={`w-7 h-7 me-3 ${isPlaying ? 'animate-spin [animation-duration:3000ms]' : ''}`} 
                        alt="vinyl" 
                    />
                    <div className="overflow-hidden flex items-center">
                        <p className='text-sm font-medium truncate'>{playlist[currentIndex].title}</p>
                        <p className='mx-1'>-</p>
                        <p className='text-xs opacity-80 truncate'>{playlist[currentIndex].artist}</p>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <audio ref={audioRef} onEnded={nextTrack}>
                        <source src={playlist[currentIndex].src} type="audio/mpeg" />
                    </audio>
                    
                    <FaStepBackward className="cursor-pointer hover:scale-110 transition" onClick={prevTrack} />
                    
                    <div className="bg-white text-black p-2 rounded-full cursor-pointer hover:scale-105 transition" onClick={togglePlay}>
                        {isPlaying ? <FaPause size={9} /> : <FaPlay size={9} className="" />}
                    </div>

                    <FaStepForward className="cursor-pointer hover:scale-110 transition" onClick={nextTrack} />
                </div>

                <div className="flex items-center gap-2 volume w-full md:w-1/3 justify-end">
                    {volume === 0 ? <FaVolumeMute /> : <FaVolumeUp />}
                    <input 
                        type="range" 
                        min="0" 
                        max="1" 
                        step="0.01" 
                        value={volume} 
                        onChange={handleVolumeChange}
                        className="w-24 h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-white"
                    />
                </div>

            </div>
        </div>
    );
}