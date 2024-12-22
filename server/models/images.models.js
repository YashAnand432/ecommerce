import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    thumbnail : {type:String},
    images : [{type:String}]
} , {timestamps : false});

const Image = mongoose.model("Image" , imageSchema);

export default Image;
