import React from "react";

const SelectMonthAndYearField = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <label className="block text-sm font-medium text-slate-700 mb-2">
        Month
      </label>
      <select name="month" required>
        {Array.from({ length: 12 }, (_, index) => index + 1).map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
      <label className="block text-sm font-medium text-slate-700 mb-2">
        Year
      </label>
      <input
        type="number"
        name="year"
        defaultValue={new Date().getFullYear()}
      />
    </div>
  );
};

export default SelectMonthAndYearField;
