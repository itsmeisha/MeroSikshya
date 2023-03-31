import mongoose from "mongoose";
import userSchema from "../Schema/userSchema.js";
import postSchema from "../Schema/postSchema.js";
export const userModel = new mongoose.model("user", userSchema);
export const postModel = new mongoose.model("post", postSchema);
