import {useState, useEffect} from 'react';

/// Getting window current width
const useWindowDimensions = () => {
    const getWindowDimensions = () => {
        const {innerWidth: width} = window;
        return {
            width,
        };
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        const handleResize = () => setWindowDimensions(getWindowDimensions());

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

export default useWindowDimensions;