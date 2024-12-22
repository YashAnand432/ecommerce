import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
function Footer(){
    return (
        <div className=" bg-[#2a3bbf] px-4 py-10 w-full flex text-white flex-row justify-around">
            <div className="flex flex-col space-y-2">
                <div className="text-2xl font-semibold">Categories</div>
                <div className="text-xl">Men</div>
                <div className="text-xl">Women</div>
                <div className="text-xl">Classic Tees</div>
                <div className="text-xl">Oversized Tees</div>
                <div className="text-xl">Fashion Joggers</div>
                <div className="text-xl">Hoodies</div>
                <div className="text-xl">Travel Jogger</div>
            </div>
            <div className="flex flex-col space-y-2">
                <div className="text-2xl font-semibold">Need Help</div>
                <div className="text-xl">Track Your Order</div>
                <div className="text-xl">Returns & Exchanges</div>
                <div className="text-xl">Chat on WhatsApp</div>
                <div className="text-xl">Contact Us</div>
                <div className="text-xl">FAQs</div>
            </div>
            <div className="flex flex-col space-y-2">
                <div className="text-2xl font-semibold">Company</div>
                <div className="text-xl">Shipping Policy</div>
                <div className="text-xl">Privacy Policy</div>
                <div className="text-xl">Terms of Service</div>
            </div>
            <div className="flex flex-col space-y-2">
                <div className="text-2xl font-semibold">Get in touch</div>
                <div className="flex flex-row space-x-2">
                    <div ><RiInstagramFill className="text-white h-7 w-7"/></div>
                    <div ><FaFacebook className="text-white h-7 w-7" /></div>
                    <div ><IoLogoWhatsapp className="text-white h-7 w-7"/></div>
                </div>
            </div>

        </div>
    )
}

export default Footer;