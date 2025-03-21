import React from 'react';
import useCount from '../src/hooks/useCount';
import Link from 'next/link';
import CounterDisplay from '../src/components/counterDisplay';
import Button from '../src/components/button';
import './index.module.css'; // Keep the CSS import

const Home = () => {
    const { count, incrementCount } = useCount();

    return (
        <div>
            <CounterDisplay count={count} />
            <Button onClick={incrementCount}>Increment Count</Button>

            <nav>
                <Link href="/about">Go to About Page</Link>
            </nav>
        </div>
    );
};

export default Home;
