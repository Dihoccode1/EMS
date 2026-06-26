import React from "react";

const PayslipTable = ({ payslip }) => {
  const rows = [
    {
      label: "Basic Salary",
      value: `$${payslip.basicSalary.toLocaleString()}`,
      className: "",
    },
    {
      label: "Allowances",
      value: `+$${payslip.allowances.toLocaleString()}`,
      className: "",
    },
    {
      label: "Deductions",
      value: `-$${payslip.deductions.toLocaleString()}`,
      className: "bg-slate-50",
    },
    {
      label: "Net Salary",
      value: `$${payslip.netSalary.toLocaleString()}`,
      className: "bg-slate-50 border-t-2 border-slate-200 font-semibold text-lg",
      isTotal: true,
    },
  ];

  return (
    <div className="rounded-xl border border-slate-200 overflow-hidden mb-8">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-50">
            <th className="text-left py-3 px-4 text-xs text-slate-500 uppercase tracking-wider">
              Description
            </th>
            <th className="text-left py-3 px-4 text-xs text-slate-500 uppercase tracking-wider">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className={`border-t border-slate-100 ${row.className}`}>
              <td className="py-3 px-4 text-slate-700">{row.label}</td>
              <td className={`text-right py-3 px-4 text-slate-900 font-medium ${row.isTotal ? "text-lg" : ""}`}>
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PayslipTable;
