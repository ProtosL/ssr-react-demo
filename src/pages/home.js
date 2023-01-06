import React from 'react';

const Home = () => {
    const handleClick = () => {
        console.log('click');
    }
    
    return (
        <div>
            home
            <button onClick={handleClick}>click me</button>
        </div>
    )
};

export default Home;