// /pages/index.js
import React from 'react';
import useCount from '../src/hooks/useCount';

const Home = () => {
    const { count, incrementCount } = useCount();

    return (
        <div>
            <h1>Current Count: {count !== null ? count : 'Loading...'}</h1>
            <button onClick={incrementCount}>Increment Count</button>
        </div>
    );
};

export default Home;
