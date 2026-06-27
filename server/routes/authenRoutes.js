import { Router } from "express";
import {
  changePassword,
  login,
  session,
} from "../controllers/authControllers.js";
import { protect } from "../middlewares/authen.js";

import employeeRoutes from "./employeeRoutes.js";

const authRoutes = Router();

employeeRoutes.post("/login", login);
employeeRoutes.get("/session", protect, session);
employeeRoutes.post("/change-password", protect, changePassword);

export default authRoutes;
