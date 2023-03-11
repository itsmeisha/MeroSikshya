import express from "express";
import dotenv from "dotenv";
import { connectdb } from "./.config/db.config.js";
import userRouter from "./routes/userRouter.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});

// using the routes
app.use("/api/v1/user", userRouter);

connectdb();
