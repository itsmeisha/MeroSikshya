import express from "express";
import { getPostById, addPost, deletePost ,getPostBySubject } from "../controllers/_post.js";


const postRouter = express.Router();

postRouter.route("/").post(addPost);
postRouter.route("/id/:id").get(getPostById);
postRouter.route("/subject/:subject").get(getPostBySubject);
postRouter.route("/:id").delete(deletePost);

export default postRouter;