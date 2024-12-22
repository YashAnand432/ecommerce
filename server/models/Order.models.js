import mongoose, { mongo } from "mongoose";

const orderSchema = new mongoose.Schema({
    user : {type : mongoose.Schema.ObjectId , ref : "User" , required:true},
    items : [{
        product : {type:mongoose.Schema.ObjectId , ref:"Product"},
        quantity : {type:Number , required:true},
        price : {type:Number , required:true},
    }],
    totalPrice : {type:Number , required:true},
    status:{
            type:String,
            enum : ["pending","shipped","delivered","cancelled"],
            default: "pending"
    },
    shippingAddress : {
        street : String,
        city : String,
        state: String,
        postalCode: Number,
        country : String
    },
    paymentMethod : {type:String , enum:["cod" , "pre-paid"] , required : true},

    paymentStatus : {type:String , enum:["paid" , "pending"] , default:"pending"}

} , {timestamps:true});

const Order = mongoose.model("Order" , orderSchema);
export default Order;