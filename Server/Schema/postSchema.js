import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
  userId: String,
  title: String,
  content: String,
  image: [
    {
      url: String,
      name: String,
    },
  ],
  votes: {
    upvote: [String],
    downvote: [String],
  },
  date: String,
  answers: [String],
  subject: String,
});
export default postSchema;
