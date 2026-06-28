import mongoose from "mongoose";

const payslipSchema = new mongoose.Schema(
  {
    employeeID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
    month: { type: Number, required: true },
    year: { type: Number, required: true },
    basicSalary: { type: Number, default: 0 },
    allowances: { type: Number, default: 0 },
    deductions: { type: Number, default: 0 },
    netSalary: { type: Number, required: true },
  },
  { timestamps: true },
);
attendanceSchema.index({ employeeID: 1, date: 1 }, { unique: true });
const Attendance =
  mongoose.model.Attendance || mongoose.model("Attendance", userSchema);

export default Attendance;
