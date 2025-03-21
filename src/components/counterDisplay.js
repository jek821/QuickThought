import React from 'react';

const CounterDisplay = ({ count }) => {
    return <h1>Current Count: {count !== null ? count : 'Loading...'}</h1>;
};

export default CounterDisplay;
