import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const leaveApplication = new mongoose.Schema(
  {
    employeeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    },
    type: { type: String, enum: ["SICK", "CASUAL", "ANNUAL"] },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    reason: { type: String, required: true },
    status: {
      type: String,
      enum: ["PENDING", "CASUAL", "REJECTED"],
      default: "PENDING",
    },
  },
  { timestamps: true },
);

const LeaveApplication =
  mongoose.model.LeaveApplication ||
  mongoose.model("LeaveApplication", leaveApplication);

export default LeaveApplication;
