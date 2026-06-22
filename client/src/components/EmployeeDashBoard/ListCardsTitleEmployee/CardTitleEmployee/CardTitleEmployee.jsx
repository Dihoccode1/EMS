import React from "react";

const CardTitleEmployee = ({ title, subtitle, icon: Icon, value }) => {
  return (
    <div className="card card-hover p-5 sm:p-6 relative overflow-hidden group flex items-center justify-between">
      <div>
        <div>
          <div className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full bg-slate-500/70 group-hover:bg-indigo-500/70 " />
          <p className="font-medium text-sm text-slate-700">{title}</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">{value}</p>
        </div>
      </div>
      <Icon className="size-10 p-2.5 rounded-lg bg-slate-100 text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors" />
    </div>
  );
};

export default CardTitleEmployee;
