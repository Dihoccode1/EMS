import React from "react";

const CardTitleAdmin = ({ icon: Icon, value, label, description }) => {
  return (
    <div className="card card-hover p-5 sm:p-6 relative overflow-hidden group flex items-center justify-between">
      <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-slate-500/70" />
      <div className="ml-3">
        <p className="text-sm font-medium text-slate-500">{label}</p>
        <p className="text-2xl font-bold text-slate-900 mt-1">{value}</p>
        <p className="text-xs text-slate-400 mt-0.5">{description}</p>
      </div>
      <Icon className="size-10 p-2.5 rounded-lg bg-slate-100 text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors duration-200" />
    </div>
  );
};

export default CardTitleAdmin;
