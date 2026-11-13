import { useEffect } from 'react';
import Lenis from 'lenis';

export default function useSmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.05,
            wheelMultiplier: 0.9,
            smoothWheel: true,
            anchors: true,
            autoRaf: true,
        });

        return () => lenis.destroy();
    }, []);
}
