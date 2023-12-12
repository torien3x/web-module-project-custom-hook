import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedDarkMode = localStorage.getItem('darkMode');
        if (savedDarkMode) {
            setDarkMode(JSON.parse(savedDarkMode));
        }
    }, []);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
        return [darkMode, toggleDarkMode];
};

export default useDarkMode;

