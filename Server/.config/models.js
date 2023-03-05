import mongoose, { Schema } from "mongoose";
import userSchema from "../Schema/userSchema";
export const userModel = mongoose.Model("user", userSchema);
