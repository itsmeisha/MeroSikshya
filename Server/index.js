import express, { Router } from "express";
import dotenv from "dotenv";
import { connectdb } from "./.config/db.config.js";
import userRouter from "./routes/userRouter.js";
import postRouter from "./routes/postRouter.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
connectdb();
app.use(express.json());
app.use("/api/v1/user", userRouter);
app.use("/api/v1/post", postRouter);
