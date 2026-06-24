import { CalendarDays } from "lucide-react";
import React from "react";

const LeaveDuration = ({ minDate }) => {
  // Tạo mảng cấu hình cho các trường ngày tháng
  const dateFields = [
    { id: "start", label: "From", name: "startDate" },
    { id: "end", label: "To", name: "endDate" },
  ];

  return (
    <div>
      <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2">
        <CalendarDays className="w-4 h-4 text-slate-400" />
        Duration
      </label>

      <div className="grid grid-cols-2 gap-4">
        {dateFields.map((field) => (
          <div key={field.id}>
            <span className="block text-xs text-slate-400 mb-1">
              {field.label}
            </span>
            <input
              type="date"
              name={field.name}
              required
              min={minDate}
              className="w-full p-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaveDuration;
