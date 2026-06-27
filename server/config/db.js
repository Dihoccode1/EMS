import e from "express";
import mongoose from "mongoose";
const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => console.log("Connected to DB"));
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.log("Error connecting to DB", error.message);
  }
};
export default connectDB;
