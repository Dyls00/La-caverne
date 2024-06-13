import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Slider = () => {

    const baseUrl = "/imageAccueil/image";
    const datas = [
        {id: 1,
        image: `${baseUrl}6.jpg`, 
        Title: "Titre du slider",
        Text: "Lorem Ipsum",
    },
        {id: 2,
            image: `${baseUrl}5.jpg`, 
            Title: "Titre du slider",
            Text: "Lorem Ipsum",
        },
        {id: 3,
            image: `${baseUrl}3.jpg`, 
            Title: "Titre du slider",
            Text: "Lorem Ipsum",
        },
    ]
    return (
        <Carousel 
        autoPlay 
        /*interval ={2000} */
        infiniteLoop 
        thumbWidth={120} 
        showIndicators = {false}
        showStatus = {false}>
            {datas.map((slide) => (
                <div key={slide.id}>
                    <img src={slide.image} />
                    <div classname = "overlay">
                    <p className="legend">{slide.Title}</p>
                    <p className="legend">{slide.Text}</p>
                    </div>
                </div>
            ))}
        </Carousel>
    );

}
export default Slider;