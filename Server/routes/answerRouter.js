import express from "express";

//importing controllers
import {
  getAnswerById,
  getAnswerBySubject,
  addAnswer,
  deleteAnswer,
} from "../controllers/_answer.js";

//declearing the answer router
const answerRouter = express.Router();

answerRouter.route("/id/:id").get(getAnswerById);
answerRouter.route("/").post(addAnswer);
answerRouter.route("/:id").delete(deleteAnswer);
answerRouter.route("/subject/:subject").get(getAnswerBySubject);

export default answerRouter;
