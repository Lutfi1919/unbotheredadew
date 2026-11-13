import { useEffect, useState, useRef } from 'react';
import { FaPause, FaPlay, FaStepForward, FaStepBackward, FaVolumeUp, FaVolumeMute, FaBroadcastTower } from 'react-icons/fa';
import vinyl from '../assets/bradpitt/vinyl.webp';
import './MusicComp.css';
import lagu2 from '../assets/Louise.mp3';
import lagu3 from '../assets/ThinkinBoutYou.mp3';
import lagu4 from '../assets/DSB.mp3';
import lagu5 from '../assets/tol-ed.mp3';
import lagu6 from '../assets/pleasedontgo.mp3';
import lagu7 from '../assets/wfh.mp3';

export default function MusicComp() {
    const playlist = [
        { title: "Thinking Out Loud", artist: "Ed Sheeran", src: lagu5 },
        { title: "Louise", artist: "TV Girl", src: lagu2 },
        { title: "Thinkin' Bout You", artist: "Frank Ocean", src: lagu3 },
        { title: "Please Don't Go", artist: "Mike Posner", src: lagu6 },
        { title: "Work From Home", artist: "Fifth Harmony, Ty Dolla $ign", src: lagu7 },
        { title: "Don't Stop Believin'", artist: "Journey", src: lagu4 },
    ];
    
    const audioRef = useRef(null);
    const audioCtxRef = useRef(null);
    const radioNodesRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isRadioOn, setIsRadioOn] = useState(false);
    const [slideDirection, setSlideDirection] = useState('next');
    const [volume, setVolume] = useState(0.3);

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

    // Bikin kurva distorsi (soft clip) untuk karakter suara radio
    const makeDistortionCurve = (amount) => {
        const samples = 1024;
        const curve = new Float32Array(samples);
        const deg = Math.PI / 180;
        for (let i = 0; i < samples; i++) {
            const x = (i * 2) / samples - 1;
            curve[i] = ((3 + amount) * x * 20 * deg) / (Math.PI + amount * Math.abs(x));
        }
        return curve;
    };

    // Inisialisasi Web Audio API secara lazy (wajib dipicu gesture user)
    const setupRadio = () => {
        if (radioNodesRef.current || !audioRef.current) return radioNodesRef.current;

        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioCtx();

        // createMediaElementSource hanya boleh sekali per elemen <audio>
        const source = ctx.createMediaElementSource(audioRef.current);

        const highpass = ctx.createBiquadFilter();
        highpass.type = 'highpass';
        highpass.frequency.value = 400;
        highpass.Q.value = 0.7;

        const lowpass = ctx.createBiquadFilter();
        lowpass.type = 'lowpass';
        lowpass.frequency.value = 3000;
        lowpass.Q.value = 0.7;

        const shaper = ctx.createWaveShaper();
        shaper.curve = makeDistortionCurve(12);
        shaper.oversample = '2x';

        const makeup = ctx.createGain();
        makeup.gain.value = 1.6;

        const wet = ctx.createGain();
        wet.gain.value = 0;

        const dry = ctx.createGain();
        dry.gain.value = 1;

        source.connect(dry);
        source.connect(highpass);
        highpass.connect(lowpass);
        lowpass.connect(shaper);
        shaper.connect(makeup);
        makeup.connect(wet);
        dry.connect(ctx.destination);
        wet.connect(ctx.destination);

        audioCtxRef.current = ctx;
        radioNodesRef.current = { source, wet, dry };
        return radioNodesRef.current;
    };

    useEffect(() => {
        return () => {
            if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
                audioCtxRef.current.close();
            }
        };
    }, []);

    const toggleRadio = () => {
        const next = !isRadioOn;
        const nodes = setupRadio();
        const ctx = audioCtxRef.current;
        if (nodes && ctx) {
            if (ctx.state === 'suspended') ctx.resume();
            const now = ctx.currentTime;
            nodes.wet.gain.setTargetAtTime(next ? 1 : 0, now, 0.05);
            nodes.dry.gain.setTargetAtTime(next ? 0 : 1, now, 0.05);
        }
        setIsRadioOn(next);
    };

    const togglePlay = () => {
        const nodes = setupRadio();
        const ctx = audioCtxRef.current;
        if (nodes && ctx && ctx.state === 'suspended') {
            ctx.resume();
        }
        if (audioRef.current.paused) {
            audioRef.current.play();
            setIsPlaying(true);
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const nextTrack = () => {
        setSlideDirection('next');
        setCurrentIndex((prev) => (prev + 1) % playlist.length);
    };

    const prevTrack = () => {
        setSlideDirection('prev');
        setCurrentIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    };

    const handleVolumeChange = (e) => {
        setVolume(parseFloat(e.target.value));
    };

    return (
        <div data-aos="fade-in-up" className='fixed text-white z-[100] bottom-0 inset-x-0 bg-[#1db954] py-1' style={{ fontFamily: 'Stack Sans Headline' }}>
            <div className="mx-5 md:mx-16 flex md:flex-row justify-between items-center gap-4">                
                <div className="flex items-center w-full md:w-1/3">
                    <img 
                        src={vinyl} 
                        className={`w-5 h-5 md:w-7 md:h-7 me-3 ${isPlaying ? 'animate-spin [animation-duration:3000ms]' : ''}`} 
                        alt="vinyll" 
                    />
                    <div className="overflow-hidden flex items-center min-w-0">
                        <div
                            key={`${currentIndex}-${slideDirection}`}
                            className={`flex items-center min-w-0 ${slideDirection === 'next' ? 'music-slide-next' : 'music-slide-prev'}`}
                        >
                            <p className='text-[11px] md:text-sm font-medium truncate'>{playlist[currentIndex].title}</p>
                            <p className='mx-1'>-</p>
                            <p className='text-[10px] md:text-xs opacity-80 truncate'>{playlist[currentIndex].artist}</p>
                        </div>
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

                <div className="flex items-center gap-3 w-full md:w-1/3 justify-end">
                    <button
                        type="button"
                        onClick={toggleRadio}
                        aria-pressed={isRadioOn}
                        title={isRadioOn ? 'Matikan efek radio' : 'Nyalakan efek radio'}
                        className={`cursor-pointer transition hover:scale-110 ${isRadioOn ? 'opacity-100' : 'opacity-40'}`}
                    >
                        <FaBroadcastTower />
                    </button>

                    <div className="volume flex items-center gap-2">
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
        </div>
    );
}