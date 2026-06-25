import React from "react";

import { X } from "lucide-react";
const HeaderGeneratePayslips = ({ setIsOpen }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-lg font-bold text-slate-900">
        {" "}
        Generate Monthly Payslips
      </h3>
      <button
        className="text-slate-400 hover:text-slate-600 p-1"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <X size={20} />
      </button>
    </div>
  );
};

export default HeaderGeneratePayslips;
