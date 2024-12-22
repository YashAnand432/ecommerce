import express from "express";
import fs from "fs";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import upload from "../middleware/upload.js";


export const addImage = (req, res) => {
    try {
      return res.status(201).json({message : "Image uploaded"});
      
    } catch (error) {
      console.error("Unexpected error:", error);
      return res.status(500).json({
        message: "Internal server error", error: error.message });
    }
  };
  