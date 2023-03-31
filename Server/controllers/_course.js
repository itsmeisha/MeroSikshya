import { courseModel } from "../.config/models.js";

//getting course by id
export const getCourseById = async (req, res) => {
  const id = req.params.id;
  if (!id) return res.status(400).json({ msg: `Invalid id` });
  try {
    const existance = await courseModel.findById(id);
    if (!existance)
      return res.status(404).json({ msg: `Course doesnot exist` });

    return res
      .status(200)
      .json({ msg: `Course has been fetched`, course: existance });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .josn({ msg: `Error occured while getting the course`, error: e });
  }
};

//getting course by subject
export const getCourseBySubject = async (req, res) => {
  try {
    const subject = req.params.subject;
    if (!subject) return res.status(400).json({ msg: `Invalid subject` });
    const course = await courseModel.find({ subject: subject});
    if (course.length === 0)
      return res.status(400).json({ msg: `Course not found` });

    return res
      .status(200)
      .json({ msg: `Course has been fetched successfully`, course: course });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ msg: `Error occured while fetching the course` });
  }
};

//getting all the courses
export const getAllCourses = async (req, res) => {
try{
const courses = await courseModel.find();
res.status(200).json({msg: `All courses fetched`, courses: courses});
}catch(e){
  console.log(e);
  return res.status(500).json({msg:`Error occured while getting all the courses`});
}
}
//addiing a course
export const addCourse = async (req, res) => {
  try {
    const course = req.body.course;
    if (
      course.subjectName === "" ||
      course.subjectId === "" ||
      course.subjectSyllabus === ""
    )
      return res.status(400).json({ msg: `Invalid course` });
    const existance = await courseModel.findOne({ _id: course.subjectId });

    if (existance) return res.status(400).json({ msg: `Course already exist` });
    const addedCourse = await new courseModel(course).save();

    if (!addedCourse)
      return res.status(400).json({ msg: `Course couldnot be added` });

    return res
      .status(200)
      .json({ msg: `Course has been added successfully`, course: addedCourse });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ msg: `Error occured while adding a course` });
  }
};

//deleting a course
export const deleteCourse = async (req, res) => {
  try {
    const id = req.params.id;
    const existance = await courseModel.findById(id);
    if (!existance)
      return res.status(400).json({ msg: `course doesnot exist` });

    await courseModel.deleteOne({ _id: id });
    return res
      .status(200)
      .json({ msg: `course has been deleted successfully` });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ msg: `Error occured while deleting the course` });
  }
};
