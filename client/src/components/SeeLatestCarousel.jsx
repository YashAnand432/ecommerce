import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; 

function SeeLatestCarousel(){
    
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
            <div>slide 1</div>
            <div>slide 2</div>
            <div>slide 3</div>
            <div>slide 4</div>
            <div>slide 5</div>
            <div>slide 6</div>
            <div>slide 7</div>
            <div>slide 8</div>
        </Slider>

    </div>
    );
}

export default SeeLatestCarousel;