import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { images } from '../constants';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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
            stopOnHover={false}
        >
            {images.map((image, index) => (
                <div key={index}>
                    <LazyLoadImage
                        src={image} 
                        alt=""
                        effect="blur"
                    />
                </div>
            ))}
        </Carousel>
    );

}
export default Slider;