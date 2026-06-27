// server.js
import express from "express";
import cors from "cors";
import "dotenv/config";
import multer from "multer";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authenRoutes.js";
import employeeRoutes from "./routes/employeeRoutes.js";
import profileRouter from "./routes/profileRoutes.js";
import attendanceRouter from "./routes/attendanceRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;
const HOSTNAME = "http://localhost";

// Middleware
app.use(cors());
app.use(express.json());
app.use(multer().none());

// Routes
app.get("/", (req, res) => {
  res.send(`Hello world`);
});
app.use("/api/auth", authRoutes);
app.use("/api/employee", employeeRoutes);
app.use("/api/profile", profileRouter);
app.use("/api/attendance", attendanceRouter);
// Connect to MongoDB
connectDB();
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at ${HOSTNAME}:${PORT}`);
});
