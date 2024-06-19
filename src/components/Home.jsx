import React from 'react';
import Slider from './Slider';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Home = () => {

    return (
        <section id="Home">
            <div className="relative w-full h-96 overflow-hidden md:h-screen">
                <Slider />
                <LazyLoadImage src="/logo_bde.webp" alt="Logo" className="absolute lg:w-56 w-32 h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10" />
            </div>
        </section>
    );
}

export default Home;