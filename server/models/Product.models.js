import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title : {type : String , required : true},
    price : {type : Number , required : true},
    description : {type : String},

    category : {type : String ,
        enum : ["tee" , "oversized-tee" , "pant" , "jeans" , "accessories" , "shirt", "sweater", "shoes" , "slipper", "sandal" ,"kurti", "dress","kurta", "trouser" , "cosmetics"] , required:true , },

    audience : [{type:String ,
        enum:["men" , "women", "girls", "boys", "aged-men" ,"aged-women"]}],

    sizes : [{
        size : {type:String ,
            enum : ["xs" , "s" , "m" , "l" , "xl" , "xxl", "xxxl", "free"]  , default : ["free"]},
        stock : {type : Number , required:true}
    }],

    thumbnail : [{type : String}],
    
    images : [{type : String}],

    seller : {type:mongoose.Schema.Types.ObjectId , ref : "Seller"},

    ratings : [{
        user : {type:mongoose.Schema.Types.ObjectId , ref : "User"},
        rating : {type:Number , required : true},
        comment : {type : String}
    }], 

} , {timestamps: true});

const Product = new mongoose.model("Product" , productSchema);
export default Product;