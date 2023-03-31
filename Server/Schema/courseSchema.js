import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
  subject: [
    {
      subjectName: String,
      subjectId: String,
      subjectSyllabus: [
        {
          chapterName: String,
          chapterId: String,
          content: String,
        },
      ],
    },
  ],
});
export default courseSchema;