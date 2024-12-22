import express from "express";
import { addToCart, removeFromCart, viewCart } from "../controller/cart.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/add" , protectRoute, addToCart);
router.delete("/delete" , protectRoute , removeFromCart);
router.get("/view" , protectRoute , viewCart);
export default router;