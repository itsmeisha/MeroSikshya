import express from "express";

// importing the controllers
import { getOneUser, addOneUser, deleteOneUser } from "../controllers/_user.js";

// declearing the user router
const userRouter = express.Router();

userRouter.route("/:id").get(getOneUser); // to get one specific user from db
userRouter.route("/").post(addOneUser);
userRouter.route("/:id").delete(deleteOneUser);
export default userRouter;