import express from "express";
import cors from "cors";
import connectToDB from "./db/config.db.js";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/cart.routes.js";


dotenv.config();
connectToDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));


app.use("/api/auth" , authRoutes);
app.use("/api/product" , productRoutes);
app.use("/api/cart/" , cartRoutes);
app.get('/' , (req,res) => {
    res.send("API is running");
});

const PORT = 8000;

app.listen(PORT , () => {
    console.log(`Server is listening on PORT ${PORT} `);
});