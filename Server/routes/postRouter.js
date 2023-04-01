import express from "express";
import {
  getPostById,
  addPost,
  deletePost,
  getPostBySubject,
  uploadImage,
} from "../controllers/_post.js";

import multer from "multer";

import { v4 as uuid } from "uuid";

const postRouter = express.Router();

postRouter.route("/").post(addPost);
postRouter.route("/id/:id").get(getPostById);
postRouter.route("/subject/:subject").get(getPostBySubject);
postRouter.route("/:id").delete(deletePost);

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, uuid() + file.originalname);
  },
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
});

const upload = multer({ storage: storage });

postRouter.route("/uploadImage").post(upload.single("picture"), uploadImage);

export default postRouter;
