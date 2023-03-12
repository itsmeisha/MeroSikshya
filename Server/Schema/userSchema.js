import mongoose from "mongoose";
const userSchema= new mongoose.Schema(
    {
        id:String,
        name:String,
        address:String,
    })
export default userSchema;