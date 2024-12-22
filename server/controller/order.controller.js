import Order from "../models/Order.models.js";
import User from "../models/User.models.js";

export const placeOrder = async(req,res) => {
    try {
        const userId = req.user.id;
        
        const user = await User.findById(userId).populate("cart");
        // now because of the populate method that we used above , user.cart contains not just the _ID of the cart but the actual cart document itself
        
        await user.cart.populate(items.product);
        //now the user.cart.items.product contains the entire product detail.
        
        if(user.cart.items.length===0){
            return res.status(400).json({message : "Cart is empty"});
        }//cart is empty
        
        const orderItems = [];
        let totalPrice = 0;
        for(const item of user.cart.items){
            const product = item.product;
            // if stock is less then notify
            if(product.stock < item.quantity){
                return res.status(400).json({message : `Your order quantity on product ${product.title} is exceeds our stock for that product. Kindly reduce the quantity and try reordering.`});
            }
            // else deduct the stock 
            product.stock-=item.quantity;
            await product.save();
            
            //prepare order item
            orderItems.push({
                product: item.product._id,
                quantity : item.quantity,
                size : item.size,
                price : item.product.price,
            })
            totalPrice += item.product.price * item.quantity;
        }
        //create the order object
        
        //creating the final order object to save in the database.
        const order = new Order({
            user: userId,
            items : orderItems,
            totalPrice,
            status:req.body.status || "pending",
            shippingAddress : user.address,
            paymentMethod : req.body.paymentMethod || "cod",
            paymentStatus : req.body.paymentMethod==="pre-paid"?"paid":"pending",
        })

        //save the order and clear cart
        await order.save();
        user.cart.items = [];
        user.cart.totalPrice = 0;
        await user.cart.save();

        return res.status(201).json({message : "Order placed"});
        
    } catch (error) {
        return res.status(500).json({message : "Internal server error" , error : error.message});
    }
}