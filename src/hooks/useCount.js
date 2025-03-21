// /src/hooks/useCount.js
import { useState, useEffect } from 'react';

const useCount = () => {
    const [count, setCount] = useState(null);

    // Fetch the count when the component loads
    useEffect(() => {
        getCount();
    }, []);

    // Get the count from the databse
    const getCount = async () => {
        const response = await fetch('/api/count', { method: 'GET' });
        const data = await response.json();
        setCount(data.count);
    };

    // Increment the count in the database
    const incrementCount = async () => {
        console.log('Button clicked');
        await fetch('/api/count', { method: 'POST' });
        await getCount();
    };

    const resetCount = async () => {
        console.log("Reset button clicked");
        await fetch('/api/count', { method: 'DELETE' });
        await getCount();

    };
    return { count, incrementCount, resetCount, getCount };
};

export default useCount;
