import mongoose, { Schema } from "mongoose";
import user from "../Schema/userSchema";
export const userModel = mongoose.Model("user", user);
