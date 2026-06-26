import { format } from "date-fns";
import React from "react";

const HeaderPrintPayslip = ({ payslip }) => {
  return (
    <div className=" text-center border-b border-slate-200 pb-6 mb-8">
      <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
        PAYSLIP
      </h1>
      <p className="text-slate-500 text-sm mt-1">
        {format(new Date(payslip.year, payslip.month - 1), "MMMM yyyy")}
      </p>
    </div>
  );
};

export default HeaderPrintPayslip;
