import React from 'react';
import Slider from './Slider';

const Home = () => {

    return (
        <section id="Home">
            <div className="relative w-full h-96 overflow-hidden md:h-screen">
                <Slider />
                <img src="/logo.png" alt="Logo" className="absolute lg:w-56 w-32 h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10" />
            </div>
        </section>
    );
}

export default Home;