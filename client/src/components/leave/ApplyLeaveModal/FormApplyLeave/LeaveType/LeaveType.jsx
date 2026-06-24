import { FileText } from "lucide-react";
import React from "react";

const LeaveType = () => {
  return (
    <div>
      <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2">
        <FileText className="w-4 h-4 text-slate-400" />
        Leave type
      </label>
      <select name="type" required>
        <option value="SICK">Sick leave</option>
        <option value="CASUAL">Casual leave</option>
        <option value="MANUAL">Manual leave</option>
      </select>
    </div>
  );
};

export default LeaveType;
