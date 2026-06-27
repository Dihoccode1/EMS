import { Router } from "express";
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  updateEmployee,
} from "../controllers/employeeController.js";
import { protect, protectAdmin } from "../middlewares/authen.js";

const employeeRoutes = Router();
employeeRoutes.get("/", protect, protectAdmin, getEmployee);
employeeRoutes.post("/", protect, protectAdmin, createEmployee);
employeeRoutes.put("/:id", protect, protectAdmin, updateEmployee);
employeeRoutes.delete("/:id", protect, protectAdmin, deleteEmployee);

export default employeeRoutes;
