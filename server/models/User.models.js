import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {type : String , required : true},
    email : {type : String , required : true , unique : true} ,
    gender : {type:String , enum :["Male" , "Female"] , required:true},
    phone : {type : Number , required : true , unique : true},
    password : {type : String , required : true } ,
    address : {
        street : {type:String , default : ""},
        city : {type:String , default : ""} ,
        state : {type:String , default : ""},
        postalCode : {type:String , default : ""},
        country : {type:String , default : ""},
    },
    role : {type:String , enum : ["admin" , "user" , "seller"] , default:"user"},
    cart : {type:mongoose.Schema.Types.ObjectId , ref : "Cart"},
    orders : [{type : mongoose.Schema.Types.ObjectId , ref : "Order"}],
} , {timestamps : true});

const User = mongoose.model("User" , userSchema);
export default User;   