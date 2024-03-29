import express, { Router } from "express";
import dotenv from "dotenv";
import { connectdb } from "./.config/db.config.js";
import userRouter from "./routes/userRouter.js";
import postRouter from "./routes/postRouter.js";
import answerRouter from "./routes/answerRouter.js";
import courseRouter from "./routes/courseRouter.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
//connecting to database
connectdb();

app.use(express.json());

//routers
app.get("/",(req,res)=>{return res.status(200).send(`<h1>Welcome</h1>`)});
app.use("/api/v1/user", userRouter);
app.use("/api/v1/post", postRouter);
app.use("/api/v1/answer", answerRouter);
app.use("/api/v1/course", courseRouter);
