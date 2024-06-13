import React from 'react';
import Slider from './Slider';

const Home = () => {
    return (
        <div className='Main-container'>
            <div className='logoB'>
                <img alt='test' src='/logo.png' />
            </div>
            <div className='Slider'>
                <Slider />
            </div>
        </div>
    );
}
export default Home;