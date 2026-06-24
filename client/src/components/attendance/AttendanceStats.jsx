import { AlertCircleIcon, CalendarIcon, ClockIcon } from "lucide-react";
import React from "react";

const AttendanceStats = ({ history }) => {
  const totalPresents = history.filter(
    (history) => history.status === "PRESENT" || history.status === "LATE",
  ).length;

  const totalLate = history.filter(
    (history) => history.status === "LATE",
  ).length;
  const stats = [
    { label: "Days Presents", value: totalPresents, icon: CalendarIcon },
    { label: "Late Arrivals", value: totalLate, icon: AlertCircleIcon },
    { label: "Avg. Works Hrs", value: "8.5 Hrs", icon: ClockIcon },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-8">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="card card-hover p-5 sm:p-6 flex items-center gap-4 required: overflow-hidden group"
        >
          <div className="absolute left-0 top-0 bottom-0 rounded-r-full bg-slate-500/70 group-hover:bg-indigo-500/70" />
          <div className="p-3 bg-slate-100 rounded-lg group-hover:bg-indigo-50 transition-colors duration-200">
            <stat.icon className="w-5 h-5 text-slate-600 group-hover:text-indigo-600 transition-colors duration-200" />
          </div>

          <div>
            <p className="text-sm text-slate-500">{stat.label}</p>
            <p className="text-2xl font-medium text-slate-900 tracking-tight">
              {stat.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AttendanceStats;
