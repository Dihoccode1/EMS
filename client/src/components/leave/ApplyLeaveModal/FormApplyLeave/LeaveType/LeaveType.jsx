import { FileText } from "lucide-react";
import React from "react";

const LEAVE_TYPES = [
  { value: "SICK", label: "Sick Leave" },
  { value: "CASUAL", label: "Casual Leave" },
  { value: "ANNUAL", label: "Annual Leave" },
];

const LeaveType = () => {
  return (
    <div>
      <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2">
        <FileText className="w-4 h-4 text-slate-400" />
        Leave type
      </label>
      <select
        name="type"
        required
        className="w-full p-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {LEAVE_TYPES.map((type) => (
          <option key={type.value} value={type.value}>
            {type.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LeaveType;
