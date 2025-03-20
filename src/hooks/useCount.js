// /src/hooks/useCount.js
import { useState, useEffect } from 'react';

const useCount = () => {
    const [count, setCount] = useState(null);

    // Fetch the count when the component loads
    useEffect(() => {
        const fetchCount = async () => {
            const response = await fetch('/api/count'); // Correct relative URL for frontend
            const data = await response.json();
            setCount(data.count);
        };

        fetchCount();
    }, []);

    // Increment the count in the database
    const incrementCount = async () => {
        console.log('Button clicked');
        const response = await fetch('/api/count', { method: 'POST' }); // Correct relative URL for frontend
        const data = await response.json();
        setCount(data.count);
    };

    return { count, incrementCount };
};

export default useCount;
