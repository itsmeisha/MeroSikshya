import mongoose from "mongoose";
const userSchema=()=>{
const user=mongoose.Schema(
    {
        id:String,
        name:String,
        address:String,
    }
)
}
export default userSchema;