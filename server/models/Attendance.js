import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
    employeeID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
    },
    date: { type: Date, required: true },
    checkIn: { type: Date, default: null },
    checkOut: { type: Date, default: null },
    status: {
        type: String,
        enum: ["PRESENT", "ASCENT", "LATE"],
        default: "PRESENT",
        workingHours: { type: Number, default: null },
        dayType: {
            type: String,
            enum: ["Full Day", "Three Quarter Day", "Half Day", "Short Day", null],
            default: null,
        },
    },
}, { timestamps: true }, );
attendanceSchema.index({ employeeID: 1, date: 1 }, { unique: true });
const Attendance =
    mongoose.model.Attendance || mongoose.model("Attendance", attendanceSchema);

export default Attendance;