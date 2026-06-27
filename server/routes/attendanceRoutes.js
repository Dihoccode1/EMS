import { Router } from "express";
import { protect } from "../middlewares/authen.js";
import { clockInOut } from "../controllers/attendanceController.js";

const attendanceRouter = Router();
attendanceRouter.post("/", protect, clockInOut);
attendanceRouter.get("/", protect, clockInOut);

export default attendanceRouter;
