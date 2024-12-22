import React from "react";
import SeeLatestCarousel from "../../components/SeeLatestCarousel";

function SeeLatest(){
    return (
        <div className="flex flex-col items-center py-24">
            <div className="flex flex-col items-center  space-y-2">
                <div className="text-black font-bold text-4xl">See The Latest</div>
                <div className="text-gray-400 text-2xl">Handpicked For You</div>
            </div>

            <div>
                <SeeLatestCarousel />
            </div>

            <div>
                <button className="rounded-3xl mt-10 font-semibold text-xl py-4 px-24 border border-black">Shop All Products</button>
            </div>
        </div>
    );
}

export default SeeLatest;