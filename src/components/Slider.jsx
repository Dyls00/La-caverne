import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Sliders } from '../constants';

const Slider = () => {

    return (
        <>
            <img alt='test' className='logoB' src='/logo.png' />
            <Carousel
                autoPlay
                infiniteLoop
                thumbWidth={120}
                showIndicators={false}
                showStatus={false}
            >
                {Sliders.map((slide) => (
                    <div key={slide.id}>
                        <img alt={slide.Title} src={slide.image} />
                    </div>
                ))}
            </Carousel>
        </>
    );

}
export default Slider;