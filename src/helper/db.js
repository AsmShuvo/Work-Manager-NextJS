import mongoose from "mongoose";
import { User } from "@/models/user";
export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.DB_URL, {
      dbName: "WorkManagerDB",
    });
    console.log("DB Connected...!");
    // creating new user
    const _user = new User({
      name: "test name",
      email: "test1@gmail.com",
      password: "testPassword",
      about: "this is string",
    });
    await _user.save();
    console.log("User created");
  } catch (err) {
    console.log("ERROR connecting DataBase :", err);
  }
};
