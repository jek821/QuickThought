import React from 'react';
import Link from 'next/link';

const About = () => {
    return (
        <div>
            <h1>About Page</h1>
            <p>This is an example of another page.</p>
            <Link href="/">Go back home</Link>
        </div>
    );
};

export default About;
