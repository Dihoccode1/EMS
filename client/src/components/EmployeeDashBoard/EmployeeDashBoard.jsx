import React from "react";
import HeaderEmployeeDashBoard from "./HeaderEmployeeDashBoard/HeaderEmployeeDashBoard";

import {
  CalendarIcon,
  FileTextIcon,
  DollarSignIcon,
  ArrowRightIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import ListCardsTitleEmployee from "./ListCardsTitleEmployee/ListCardsTitleEmployee";
const EmployeeDashBoard = ({ data }) => {
  const emp = data.employee;

  const cards = [
    {
      icon: CalendarIcon,
      value: data.currentMonthAttendance,
      title: "Days Present",
      subtitle: "This month",
    },
    {
      icon: FileTextIcon,
      value: data.pendingLeaves,
      title: "Pending Leaves",
      subtitle: "Awaiting approval",
    },
    {
      icon: DollarSignIcon,
      value: data.latestPayslip
        ? `$${data.latestPayslip.netSalary?.toLocaleString()}`
        : "N/A",
      title: "Latest Payslip",
      subtitle: "Most recent payout",
    },
  ];
  return (
    <div className="animate-fade-in">
      <HeaderEmployeeDashBoard emp={emp} />
      <ListCardsTitleEmployee cards={cards} />
      {/* btn group */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          to="/attendance"
          className="btn-primary text-center inline-flex items-center justify-center gap-2"
        >
          Mark Attendance
          <ArrowRightIcon className="w-4 h-4" />
        </Link>

        <Link to="/leave" className="btn-secondary text-center ">
          Apply for Leave
        </Link>
      </div>
    </div>
  );
};

export default EmployeeDashBoard;
