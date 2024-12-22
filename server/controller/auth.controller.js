import User from "../models/User.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
export const signup = async(req,res) => {
    try {
        const {name , email , gender , phone , password , role} = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message : "Email already exists"});
        }
        if(!name || !email || !gender || !phone || !password || !role){
            return res.status(400).json({message : "All fields are required"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            phone,
            password : hashedPassword,
            role,
            gender
        });
        res.status(200).json({message : "New User created successfully" , user})
    } catch (error) {
        res.status(500).json({message : "Internal server error - " , error : error.message});
    }
}

export const login = async(req,res) => {
    try {
        const {email , password} = req.body;
        if(!email || !password) {
            return res.status(400).json({message : "Email or password not found. All fields are required"});
        }
        const user = await User.findOne({email});

        if(!user){
            return res.status(404).json({message : "Invalid user "});
        }
        const isMatch = await bcrypt.compare(password , user.password);
        if(!isMatch){
            return res.status(400).json({message : "Invalid email or password"});
        }
        const payload = {
            id : user._id,
            name : user.name,
            email : user.email,
            role : user.role
        }
        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET,
            {expiresIn : "15d"}
        );
        
        res.cookie("jwt" , token , {
            httpOnly : true,
            secure : true,
            maxAge : 15*24*60*60*1000
        });
        return res.status(200).json({message : "Login successful" , token , payload});
    } catch (error) {
        return res.status(500).json({message : "Internal server error" , error : error.message});
    }
}

export const logout = async(req,res) => {
    try {
        res.cookie("jwt" , "" , {
            httpOnly : true,
            secure : true,
            maxAge : 0
        });

        res.status(200).json({message : "Logout successful"});
    } catch (error) {
        res.status(500).json({message : "Internal server error" , error : error.message});
    }
}