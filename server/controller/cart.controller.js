import Cart from "../models/Cart.models.js";
import Product from "../models/Product.models.js";
import User from "../models/User.models.js";

export const addToCart = async (req,res) => {
    try {
        const {productId , qty , size} = req.body;
        const product = await Product.findById(productId);
        if(!product){
            return res.status(400).json({message : "Product not found" , error : error.message});
        }
        // if(size!===product.size)
        const userId = req.user.id;
        const requester = await User.findById(userId);
        let cart = await Cart.findOne({user : userId});

        //checking if a cart has ever been created for the user
        if(!cart){
            cart = new Cart({user : userId , items : []});
            requester.cart = cart._id;
            await requester.save();
        }

        //check if the produt already exists in the cart, update its quantity
        const existingProductIndex = await cart.items.findIndex(item => {
            item.product.toString() === productId.toString() });

        if(existingProductIndex >= 0){
            cart.items[existingProductIndex].quantity += qty;
            cart.totalPrice += product.price * qty;
        } else{
            // if product does not exists in the cart, add it 
            cart.items.push({product : productId , quantity : qty , size});
            cart.totalPrice += product.price * qty;
        }    

        await cart.save();

        return res.status(200).json({message : "Product added to cart successfully."});
        
    } catch (error) {
        return res.status(500).json({message : "Internal server error" , error : error.message});
    }
}

export const removeFromCart = async(req,res) => {
    try {
        const {productId} = req.body;
        const product = await Product.findById(productId);
        if(!productId){
            return res.status(404).json({message : "Product not found" , error : error.message});
        }
        const userId = req.user.id;
        const user = await User.findById(userId);
        //checking if the user has a cart
        const cartId = user.cart;
        if(!cartId){
            return res.status(400).json({message: "Cart not found"});
        }
        let cart = await Cart.findById(cartId);
        
        //checking if the product is a part of the user's cart
        const existingProductIndex = await cart.items.findIndex(item => 
            item.product.toString() === productId.toString()
        );
        if(existingProductIndex===-1){
            return res.status(404).json({message : "Product not in cart"});
        }
        //reduce the total price
        cart.totalPrice -= product.price*cart.items[existingProductIndex].quantity;
        // remove the product
        cart.items = await cart.items.filter(item => item.product.toString() !== productId);
        await cart.save();
        return res.status(200).json({message : "Product removed from cart"});

    } catch (error) {
        return res.status(500).json({message : "Internal server error" , error : error.message});
    }
}

export const viewCart = async(req,res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId);
        const cartId = user.cart;
        let cart = await Cart.findById(cartId);
        if(!cart || cart.items.length===0){
            return res.status(400).json({message : "Cart is empty" , cart : []});
        }
        //if cart is there, then view all the items.
        return res.status(200).json({message : "Cart fetched successfully" , cart});
    } catch (error) {
        return res.status(500).json({message : "Internal server error" , error : error.message});
    }
}