import React from "react";

const AllowanceAndDeductions = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div>
        <label className="block text-sm font-medium to-slate-700 mb-2">
          Allowances
        </label>
        <input type="number" name="allowances" defaultValue="0" />
      </div>

      <div>
        <label className="block text-sm font-medium to-slate-700 mb-2">
          Deductions
        </label>
        <input type="number" name="deductions" defaultValue="0" />
      </div>
    </div>
  );
};

export default AllowanceAndDeductions;
