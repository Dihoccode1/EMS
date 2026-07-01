import { Inngest } from "inngest";
import Attendance from "../models/Attendance.js";
import Employee from "../models/Employee.js";
import LeaveApplication from "../models/LeaveApplication.js";
import sendEmail from "../config/nodeamail.js";

export const inngest = new Inngest({ id: "ems" });

// 1. Auto Check-out for employees
const autoCheckOut = inngest.createFunction(
  {
    id: "auto-check-out",
    triggers: [{ event: "employee/check-out" }],
  },
  async ({ event, step }) => {
    const { employeeId, attendanceId } = event.data;

    await step.sleep("wait-for-the-9-hours", "9h");

    const hasCheckedOutEarly = await step.run(
      "check-attendance-9h",
      async () => {
        const attendance = await Attendance.findById(attendanceId).lean();
        return !!attendance?.checkOut;
      },
    );

    if (!hasCheckedOutEarly) {
      const employee = await step.run("get-employee-data", async () => {
        return await Employee.findById(employeeId).lean();
      });

      await step.run("send-reminder-email", async () => {
        // Code gửi email của bạn ở đây
      });

      await step.sleep("wait-for-the-1-hour", "1h");

      await step.run("mark-attendance-late", async () => {
        const attendance = await Attendance.findById(attendanceId);

        if (attendance && !attendance.checkOut) {
          attendance.checkOut = new Date(
            new Date(attendance.checkIn).getTime() + 4 * 60 * 60 * 1000,
          );
          attendance.workingHours = 4;
          attendance.dayType = "Half Day";
          attendance.status = "Late";
          await attendance.save();
        }
      });
    }
  },
);

// 2. Send Email to Admin, If admin doesn't take action on leave application within 24 hours
const leaveApplicationReminder = inngest.createFunction(
  {
    id: "leave-application-reminder",
    triggers: [{ event: "leave/pending" }],
  },
  async ({ event, step }) => {
    const { leaveApplicationId } = event.data;

    // Dùng step.sleep để an toàn hơn với Inngest replays
    await step.sleep("wait-for-24-hours", "24h");

    const leaveApplication = await step.run(
      "get-leave-application",
      async () => {
        return await LeaveApplication.findById(leaveApplicationId).lean();
      },
    );

    if (leaveApplication?.status === "PENDING") {
      const employee = await step.run("get-employee-for-leave", async () => {
        return await Employee.findById(leaveApplication.employeeId).lean();
      });

      await step.run("send-admin-reminder-email", async () => {
        // Send reminder email to admin to take action on leave application
      });
    }
  },
);

// 3. Cron: Check attendance at 11:30 AM IST (6:00 UTC) and email absent employees
const attendanceReminderCron = inngest.createFunction(
  {
    id: "attendance-reminder-cron",
    // Dùng "cron" thay vì "event" cho các task chạy theo lịch
    triggers: [{ cron: "TZ=Asia/Hanoi  0 11 * * *" }],
  },
  async ({ step }) => {
    // Step 1: Get today's date range
    const today = await step.run("get-today-date", () => {
      const startUTC = new Date(
        new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Hanoi" }) +
          "T00:00:00+05:30",
      );
      const endUTC = new Date(startUTC.getTime() + 24 * 60 * 60 * 1000);
      return { startUTC: startUTC.toISOString(), endUTC: endUTC.toISOString() };
    });

    // Step 2: Get all active, non-deleted employees
    const activeEmployee = await step.run("get-active-employee", async () => {
      const employees = await Employee.find({
        isDeleted: false,
        employeeStatus: "ACTIVE",
      }).lean();
      return employees.map((employee) => ({
        _id: employee._id.toString(),
        firstName: employee.firstName,
        lastName: employee.lastName,
        email: employee.email,
        department: employee.department,
      }));
    });

    // Step 3: Get employee IDs on approved leave today
    const onLeaveIds = await step.run("get-on-leave-ids", async () => {
      const leaves = await LeaveApplication.find({
        status: "APPROVED",
        startDate: { $lte: new Date(today.endUTC) },
        endDate: { $gte: new Date(today.startUTC) },
      }).lean();
      return leaves.map((leave) => leave.employeeId.toString());
    });

    // Step 4: Get employee IDs who already checked in today
    const checkedInIds = await step.run("get-checked-in-ids", async () => {
      const attendances = await Attendance.find({
        date: { $gte: new Date(today.startUTC), $lt: new Date(today.endUTC) },
      }).lean();
      return attendances.map((attendance) => attendance.employeeId.toString());
    });

    // Step 5: Filter absent employees
    const absentEmployee = activeEmployee.filter(
      (employee) =>
        !onLeaveIds.includes(employee._id) &&
        !checkedInIds.includes(employee._id),
    );

    // Step 6: Send reminder emails
    if (absentEmployee.length > 0) {
      await step.run("send-reminder-email", async () => {
        const emailsPromise = absentEmployee.map(async (employee) => {
          await sendEmail({
            to: employee.email,
            subject: "Attendance Reminder: Please Mark Your Attendance",
            body: `
            <div style="max-width:600px;">
              <h2>Hi ${employee.firstName},</h2>
              <p style="font-size:16px">We noticed that you haven't checked in for today yet.</p>
              <p style="font-size:16px">Please make sure to log into the portal and mark your attendance as soon as possible.</p>
              <br/>
              <p style="font-size:16px">Best regards,</p>
              <p style="font-size:16px">HR Team</p>
            </div>`,
          });
        });

        // Chờ tất cả email gửi xong mới hoàn thành step
        await Promise.all(emailsPromise);
      });
    }

    return {
      totalActive: activeEmployee.length,
      onLeave: onLeaveIds.length,
      checkedIn: checkedInIds.length,
      absent: absentEmployee.length,
    };
  },
);

export const functions = [
  autoCheckOut,
  leaveApplicationReminder,
  attendanceReminderCron,
];
