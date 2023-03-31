import mongoose from "mongoose";
const answerSchema = new mongoose.Schema({
  userId: String,
  content: String,
  title: String,
  images: [
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
  subject: String,
});
export default answerSchema;
