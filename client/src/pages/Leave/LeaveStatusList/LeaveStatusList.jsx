import React from "react";
import LeaveStatus from "./LeaveStatus/LeaveStatus";

const LeaveStatusList = ({ status }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-10">
      {status.map((stat) => (
        <LeaveStatus
          key={stat.label}
          icon={stat.icon}
          label={stat.label}
          value={stat.value}
        />
      ))}
    </div>
  );
};

export default LeaveStatusList;
