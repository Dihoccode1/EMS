import { Router } from "express";
import { protect } from "../middlewares/authen.js";
import { getProfile, updateProfile } from "../controllers/profileController.js";
const profileRouter = Router();

profileRouter.get("/", protect, getProfile);
profileRouter.post("/", protect, updateProfile);

export default profileRouter;
