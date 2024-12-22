import React from "react";
import ProductCard from "../../components/ProductCard";

function Bestsellers(){
    const products = [
        {image : "image 1" , title : "title 1" , price : 10},
        {image : "image 2" , title : "title 2" , price : 20},
        {image : "image 3" , title : "title 3" , price : 30},
        {image : "image 4" , title : "title 4" , price : 40},
        {image : "image 5" , title : "title 5" , price : 50},
        {image : "image 6" , title : "title 6" , price : 60},
        {image : "image 7" , title : "title 7" , price : 70},
        {image : "image 8" , title : "title 8" , price : 80},
    ];

    return (
        <div className="bg-gray-400 text-center py-16 space-y-4 text-center">
            <div className="text-black font-bold text-4xl">Our Bestsellers</div>
            <div className="text-white text-2xl">Don't miss out Top Selling styles</div>
            {/* lets assume we make some API calls and we fetch some data on top 8 best selling products, then we assign the images of each of those products inside an array */}
            {/* we then send these images as props for the Grid. */}
            {/* Grid of Product Cards */}
            <div className="grid grid-cols-4 gap-4 px-4 ">
                {
                    products.map((product, index) => (
                        <ProductCard 
                            key={index}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                        />
                    ))}
            </div>

            <div>
                <button className="rounded-3xl mt-10 font-semibold text-xl py-4 px-24 border border-black">Shop All Products</button>
            </div>
        </div>
    );
}

export default Bestsellers;