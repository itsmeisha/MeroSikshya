import mongoose, { Schema } from "mongoose";
import userSchema from "../Schema/userSchema.js";
export const userModel = new mongoose.model("user", userSchema);
