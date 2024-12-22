import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    user : {type:mongoose.Schema.ObjectId , ref : "User" , required:true},
    items: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
            quantity: { type: Number, required: true },
            size : {type : String , required : true},
        }
    ],
    totalPrice: { type: Number, default: 0 },
}, { timestamps: true });

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;