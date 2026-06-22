import React from "react";

const FirstNameIcon = ({ employee }) => {
  return (
    <div className="relative aspect-4/3 w-full overflow-hidden bg-linear-to-r from-slate-100 to-slate-50">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-20 h-20 rounded-full items-center justify-center from-indigo-800 to-slate-100 ">
          <span className="text-2xl font-medium text-indigo-400">
            {employee.firstName[0]} {employee.lastName[0]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FirstNameIcon;
