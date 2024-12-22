import React from "react";
import cherryLogo from "../../assets/logo/cherry-logo.png";
// import { CiSearch } from "react-icons/ci";
// import { CiSearch } from "react-icons/ci";


function Header(){
    return (
        <div className="w-full bg-[#2a3bbf] flex flex-row justify-between items-center  text-white px-4 ">
            <div>
                <img src={cherryLogo} className="h-12" alt="Brand logo" />
            </div>

            <div className="flex flex-row space-x-4">
                <div className="hover:text-xl" >Men</div>
                <div className="hover:text-xl">Women</div>
                <div className="hover:text-xl">Kids</div>
                <div className="hover:text-xl">Accessories</div>
            </div>

            <div className=" flex flex-row space-x-2 items-center">
                <div>
                    <input type="text" placeholder="Search..." className="py-1 rounded-xl bg-transparent border border-xl border-gray-500 hover:border-white px-5" />
                </div>
                <div>
                {/* <CiSearch /> */}
                <p>Search</p>
                </div>

            </div>
            <div className="flex flex-row space-x-4">
                <div>Wishlist</div>
                <div>Profile</div>
            </div>
        </div>
    )
}

export default Header;