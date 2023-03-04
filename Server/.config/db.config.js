import mongoose from "mongoose";
export const connectdb =async () => {
  try {
    await mongoose.connect(process.env.CONNECTIONSTRING);
    console.log(`The database has connected successfully`);
  } catch (e) {
    console.log(`There is some error \n ${e}`);
  }
};
