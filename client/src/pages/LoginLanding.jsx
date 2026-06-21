import React from "react";
import LoginLeftSide from "../components/LoginLeftSide/LoginLeftSide";
import LoginRightSide from "../components/LoginRightSide/LoginRightSide";

import { ShieldIcon, UserIcon } from "lucide-react";
const LoginLanding = () => {
  const portalOption = [
    {
      to: "/login/admin",
      title: "Admin Portal",
      description:
        "Manage employees,departments ,payroll and system configuration",
      icon: ShieldIcon,
    },
    {
      to: "/login/employee",
      title: "Employee Portal",
      description:
        "View your profile ,track attendance,request time off and access payslips",
      icon: UserIcon,
    },
  ];
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <LoginLeftSide />
      <LoginRightSide portalOption={portalOption} />
    </div>
  );
};

export default LoginLanding;
