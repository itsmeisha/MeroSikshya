import mongoose from "mongoose";
import userSchema from "../Schema/userSchema.js";
import postSchema from "../Schema/postSchema.js";
import answerSchema from "../Schema/answerSchema.js";
import courseSchema from "../Schema/courseSchema.js";
export const userModel = new mongoose.model("user", userSchema);
export const postModel = new mongoose.model("post", postSchema);
export const answerModel = new mongoose.model("answer", answerSchema);
export const courseModel = new mongoose.model("course", courseSchema);
