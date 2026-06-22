import {
  CalendarIcon,
  Building2Icon,
  UserIcon,
  FileTextIcon,
} from "lucide-react";
import React from "react";
import HeaderAdminDashBoard from "./HeaderAdminDashBoard/HeaderAdminDashBoard";
import ListCardsTitleAdmin from "./ListCardsTitleAdmin/ListCardsTitleAdmin";

const AdminDashBoard = ({ data }) => {
  const cards = [
    {
      icon: UserIcon,
      value: data.totalEmployees,
      label: "Total Employees",
      description: "Active workforce",
    },
    {
      icon: Building2Icon,
      value: data.totalDepartments,
      label: "Departments",
      description: "Organization units",
    },
    {
      icon: CalendarIcon,
      value: data.todayAttendance,
      label: "Today Attendance",
      description: "Present today",
    },
    {
      icon: FileTextIcon,
      value: data.pendingLeaves,
      label: "Pending Leaves",
      description: "Awaiting approval",
    },
  ];
  return (
    <div className="animate-fade-in">
      <HeaderAdminDashBoard />
      <ListCardsTitleAdmin cards={cards} />
    </div>
  );
};

export default AdminDashBoard;
