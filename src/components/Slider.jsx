import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { images } from '../constants';

const Slider = () => {

    return (
        <Carousel
            autoPlay
            infiniteLoop
            interval={6000}
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
        >
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt=""/>
                </div>
            ))}
        </Carousel>
    );

}
export default Slider;