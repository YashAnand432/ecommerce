import express from "express";
import Product from "../models/Product.models.js";
import protectRoute from "../middleware/protectRoute.js";
import { addProduct, addProductImages, deleteProduct, updateProduct } from "../controller/product.controller.js";
import upload from "../middleware/upload.js";
import { addImage } from "../controller/images.controller.js";

const router = express.Router();

const uploadFiles = upload.fields([
  {name : 'thumbnail' , maxCount : 1},
  {name : 'images' , maxCount : 10},

])
router.post("/add-product" , protectRoute , addProduct);
router.delete("/delete-product/:id" , protectRoute , deleteProduct);
router.post("/update-product/:productId" , protectRoute , updateProduct);
router.put('/add-product-images/:productId' ,uploadFiles , addProductImages);

// router.post('/post' , (req, res, next) => {
//     console.log(req.headers);
//     next();
//   }, upload.any() ,addImage);

export default router;