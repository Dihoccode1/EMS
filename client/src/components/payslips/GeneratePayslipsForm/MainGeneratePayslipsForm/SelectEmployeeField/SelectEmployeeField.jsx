import React from "react";

const SelectEmployeeField = ({ employees }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-2">
        Employee
      </label>
      <select name="employeeId" required>
        {employees.map((employee) => (
          <option key={employee.id} value={employee.id}>
            {employee.firstName} {employee.lastName} ({employee.position})
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectEmployeeField;
