import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  token: String,
  name: String,
  school: String,
});
export default userSchema;
