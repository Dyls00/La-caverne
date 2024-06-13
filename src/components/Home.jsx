import React, { useState } from 'react';
import { images } from '../constants';

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const swipeRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const swipeLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div id="Home">
            <div id="controls-carousel" className="relative w-full" data-carousel="static">
                <div className="relative h-96 overflow-hidden rounded-lg md:h-screen">
                    {images.map((image, index) => (
                        <div key={index} style={{ display: currentIndex === index ? 'block' : 'none' }}>
                            <img src={image} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Image présentation école" />
                        </div>
                    ))}
                    <img src="/logo.png" alt="Logo" className="absolute w-32 h-32 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10" />
                </div>

                <button type="button" onClick={swipeLeft} className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" onClick={swipeRight} className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
    );
}

export default Home;