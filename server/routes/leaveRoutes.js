import { Router } from "express";
import { protect, protectAdmin } from "../middlewares/authen.js";
import {
  createLeave,
  getLeave,
  updateLeaveStatus,
} from "../controllers/leaveController.js";

const leaveRouter = Router();

leaveRouter.get("/", protect, getLeave);
leaveRouter.post("/", protect, createLeave);
leaveRouter.patch("/:id", protect, protectAdmin, updateLeaveStatus);

export default leaveRouter;
