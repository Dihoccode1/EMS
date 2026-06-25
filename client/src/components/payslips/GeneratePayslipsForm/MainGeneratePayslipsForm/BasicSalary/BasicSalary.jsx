import React from "react";

const BasicSalary = () => {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-2">
        Basic Salary
      </label>
      <input type="number" name="basicSalary" required placeholder="5000" />
    </div>
  );
};

export default BasicSalary;
