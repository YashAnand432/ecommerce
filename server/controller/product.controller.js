import Product from "../models/Product.models.js";
import User from "../models/User.models.js";
import multer from "multer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const addProduct = async (req, res) => {
    try {
        const { title, price, description, category, audience, sizes } = req.body;
        
        const seller = await User.findById(req.user.id);
        if (seller.role !== "seller") {
            return res.status(400).json({ message: "You are not a seller" });
        }

        if (!title || !price || !description || !category || !sizes || sizes.length === 0 || !audience) {
            return res.status(400).json({ message: "Missing fields" });
        }

        // Validate sizes structure
        for (const size of sizes) {
            if (!size.size || size.stock === null || size.stock < 0) {
                return res.status(400).json({ message: "Each size must include a valid size name and non-negative stock" });
            }
        }

        const product = await Product.create({
            title,
            price,
            description,
            category,
            audience,
            sizes,
            seller: req.user.id,
        });

        res.status(200).json({ message: "Product added successfully.", product });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};


export const addProductImages = async (req, res) => {
    try {
        console.log(req.files);
        const { productId } = req.params;

        if (!productId) {
            return res.status(400).json({ message: "Product ID is required" });
        }

        //get the paths
        const thumbnailPath = req.files.thumbnail[0].path;
        const imagesPaths = req.files.images.map(file => file.path);

        // find the product and update
        const updatedProduct = await Product.findByIdAndUpdate( productId , 
            {
                thumbnail : thumbnailPath,
                $push : {images : { $each : imagesPaths}},
            },
            {new : true}
        );

        if(!updatedProduct){
            return res.status(404).json({message: "Product not found"});
        }


        // Send a success response
        return res.status(201).json({message: "Image and thumbnail added successfully"});
    } catch (error) {
        console.error("Error adding images:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

export const deleteProduct = async(req,res) => {
    try {
        const {id} = req.params;
        const userId = req.user.id;
        console.log(userId);
        const product = await Product.findOne({_id : id});
        console.log(product.seller);
        if(!product){
            return res.status(404).json({message : "Product not found"});
        }
        
        if(product.seller.toString() !== userId.toString() ){
            return res.status(403).json({message : "Product is not yours. "});
        }
        await Product.findOneAndDelete({_id : id});

        return res.status(200).json({message : "Product deleted successfully"});
    } catch (error) {
        res.status(500).json({message : "Internal server error" , error : error.message});
    }
}

export const updateProduct = async(req,res) => {
    try {
        const {productId} = req.params;
        const product = await Product.findById(productId);
        if(!product){
            return res.status(404).json({message : "Product not found - invalid product-id param"});
        }
        console.log(product.seller);

        
        //we find the requester of this api call and call it seller. we then check if he is actually a seller and whether the product actually belongs to him or not.
        const seller = await User.findById(req.user.id);
        if(seller.role !== "seller"|| product.seller.toString()!==seller._id.toString()){
            return res.status(400).json({message : "You are not seller/This product does not belong to you"});
        }
        // console.log(req.user.id);
        
        //assuming the requester is indeed the righteous seller of the product, we proceed 
        const {title , price , description , category , audience , sizes } = req.body;
        if (!Array.isArray(sizes) || sizes.some(s => !s.size || !s.stock)) {
            return res.status(400).json({ message: "Sizes must be an array of objects with 'size' and 'stock' properties." });
        }
        
        if(!title || !price || !description || !category || !sizes  || !audience){
            return res.status(400).json({message : "Missing fields"});
        }
        // for (const size of sizes) {
        //     if (!size.size || size.stock === null || size.stock < 0) {
        //         return res.status(400).json({ message: "Each size must include a valid size name and non-negative stock" });
        //     }
        // }
        
        
        product.title = title || product.title;
        product.price = price || product.price;
        product.description = description || product.description;
        product.category = category || product.category;
        
        product.audience = audience || product.audience;
        product.sizes = sizes || product.sizes;

        await product.save();

        return res.status(200).json({message : "Product updated." , product});
    } catch (error) {
        return res.status(500).json({message : "Internal server error" , error : error.message});
    }
}

export const getProductInfo = async(req,res) => {
    try {
        const {productId} = req.params;
        const product = await Product.findById(productId);
        if(!product) {
            return res.status(400).json({message: "Product not found"});
        }
        
        return res.status(200).json({message:"Product info : " , product});
    } catch (error) {
        return res.status(500).json({message : "Internal server error" , error : error.message});
    }
}
