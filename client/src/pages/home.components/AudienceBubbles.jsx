import React from "react";

function AudienceBubbles(){
    return (
        <div>
            <div className="flex flex-row px-4 py-40 items-center justify-around">
                <div className="bg-red-400 h-64 w-64 rounded-full flex justify-center items-center">Men</div>
                <div className="bg-red-400 h-64 w-64 rounded-full flex justify-center items-center">Women</div>
                <div className="bg-red-400 h-64 w-64 rounded-full flex justify-center items-center">Kids</div>
                <div className="bg-red-400 h-64 w-64 rounded-full flex justify-center items-center">Accessories</div>
            </div>
        </div>
    );
}

export default AudienceBubbles;