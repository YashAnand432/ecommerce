import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carousel1 from "../assets/carousel/carousel_1.png";
import carousel5 from "../assets/carousel/carousel_5.jpg";
import carousel6 from "../assets/carousel/carousel_6.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; 

function Carousel() {
    const images = [carousel1, carousel5, carousel6];
    const settings = {
        dots: true, // Show navigation dots
        infinite: true, // Infinite looping
        speed: 500, // Transition speed in milliseconds
        slidesToShow: 1, // Number of slides visible
        slidesToScroll: 1, // Number of slides to scroll at a time
        autoplay: true, // Automatically transition to the next slide
        autoplaySpeed: 1000, // Time between transitions in milliseconds
        arrows: true, // Show navigation arrows
        prevArrow: (
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 rounded-full cursor-pointer ">
                 <FaArrowLeft size={24} className=" rounded-full  bg-gray-200 border  text-black" /> 
            </div>
        ),
        nextArrow: (
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full cursor-pointer ">
                 <FaArrowRight size={24} className=" rounded-full  bg-gray-200 border  text-black" /> 
            </div> 
        ),
    }


    return (
        <div className="container mx-auto">
            <Slider {...settings}>
                {images.map((image , index) => (
                    <div key={index}>
                        
                        <img src={image} alt={`Slide ${index+1}`} className="w-full object-cover" />
                        
                    </div>
                ))}
            </Slider>

        </div>
    );
}

export default Carousel;