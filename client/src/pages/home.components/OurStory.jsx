import React from "react";
import ourstoryimage from "../../assets/ourstory/Cherry.png";
import { PiAirplaneTakeoffFill } from "react-icons/pi";
import { GiSchoolBag } from "react-icons/gi";
import { PiPantsFill } from "react-icons/pi";
import { FaFeatherPointed } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
function OurStory () {
    return (
        <div className="flex flex-row w-full bg-[#2a3bbf]">
            <div className="w-1/2 text-center space-y-3 flex flex-col py-6 px-4 ">
            <div className="font-serif text-white text-2xl font-bold">Our Story</div>
            <div className="text-white font-roberto text-xl font-semibold leading-relaxed">Nobero is all about modern, on-the-move must-haves. We aim to merge high-fashion minimalism with the uniqueness and comfort of athleisure.
            Our collections are crafted with the best of fabric and premium cotton and our silhouettes are high on the trend quotient. Elevate your every day look with our stylish and functional essentials, travel wear, and lounge wear. You'll always be adventure-ready with Nobero. </div>
            <div className="flex flex-row items-center mt-10 justify-between">
                <div className="flex flex-col items-center">
                    <div className="text-white"><PiAirplaneTakeoffFill className="h-6 w-6" /></div>
                    <div className="text-white text-xs">On The Move</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-white"><GiSchoolBag className="h-6 w-6" /></div>
                    <div className="text-white text-xs">Travel Friendly</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-white"><PiAirplaneTakeoffFill className="h-6 w-6" /></div>
                    <div className="text-white text-xs">On the move</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-white"><PiPantsFill  className="h-6 w-6" /></div>
                    <div className="text-white text-xs">Utilitarian Designs</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-white"><FaFeatherPointed  className="h-6 w-6" /></div>
                    <div className="text-white text-xs">Light Weight</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-white"><IoHome  className="h-6 w-6" /></div>
                    <div className="text-white text-xs">Home grown</div>
                </div>

            </div>

            </div>
            
            <div className="w-1/2 ">
                <img src={ourstoryimage} alt="Our clothes" />
            </div>
        </div>
    );
}

export default OurStory;