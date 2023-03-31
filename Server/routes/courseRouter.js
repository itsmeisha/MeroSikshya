import express from "express";
import {
  addCourse,
  deleteCourse,
  getAllCourses,
  getCourseById,
  getCourseBySubject,
} from "../controllers/_course.js";

const courseRouter = express.Router();

courseRouter.route("/id/:id").get(getCourseById);
courseRouter.route("/:id").get(getAllCourses);
courseRouter.route("/").post(addCourse);
courseRouter.route("/:id").delete(deleteCourse);

export default courseRouter;
