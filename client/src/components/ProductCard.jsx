import React from "react";

function ProductCard({image , title , price}){
    return (
        
            <div className="bg-white shadow-md p-4 flex flex-col items-center">
                <img src={image} alt={title} className="w-4/5 h-60 object-cover rounded-md mb-4" />
                <h2 className="text-lg font-bold mb-2 ">{title}</h2>
                <p className="text-gray-600">${price}</p>
            </div>
        
    );
}

export default ProductCard;