import jwt from "jsonwebtoken";
import User from "../models/User.models.js";

const protectRoute = async(req,res,next) => {
    try {
        const token = req.cookies.jwt;
        // console.log(token);
        if(!token){
            return res.status(400).json({message : "Token not found"});
        }
        const decoded = jwt.verify(token , process.env.JWT_SECRET);
        // console.log(decoded);

        const user = await User.findById(decoded.id).select("-password");
        // console.log(user);
        if(!user){
            return res.status(404).json({error : "User not found"});
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

export default protectRoute;