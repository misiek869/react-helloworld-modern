import { useState, useEffect } from 'react';

export default function useStorage(key) {
    const [value, setValue] = useState(() => {
        try {
            const savedData = window.localStorage.getItem(key);
            return savedData ? JSON.parse(savedData) : [];
        } catch (error) {
            // eslint-disable-next-line
            console.log(error);
            return [];
        }
    });

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            // eslint-disable-next-line
            console.log(error);
        }
    }, [key, value]);

    return [value, setValue];
}
