import React from "react";

import { DEPARTMENTS } from "../../../assets/assets";

const EmployeeDetails = ({ initialData, isEditMode }) => {
  return (
    <div className="card p-5 sm:p-6">
      <h3 className="text-base font-medium text-slate-900 mb-6 pb-4 border-b border-slate-100">
        Employee Details
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm text-slate-700">
        <div>
          <label className="block mt-2">Department</label>
          <select
            name="department"
            defaultValue={initialData?.department || ""}
          >
            <option value="">Select Department</option>
            {DEPARTMENTS.map((deptName) => (
              <option key={deptName} value={deptName}>
                {deptName}
              </option>
            ))}
          </select>
        </div>
        {/*  */}
        <div>
          <label className="block mt-2">Position</label>
          <input
            name="position"
            required
            defaultValue={initialData?.position}
          />
        </div>
        {/*  */}
        <div>
          <label className="block mt-2">Basic-Salary</label>
          <input
            type="number"
            name="basicSalary"
            required
            defaultValue={initialData?.basicSalary || 0}
          />
        </div>
        {/*  */}
        <div>
          <label className="block mt-2">Allowances</label>
          <input
            type="number"
            name="allowances"
            min="0"
            step="0.1"
            required
            defaultValue={initialData?.allowances || 0}
          />
        </div>
        {/*  */}
        <div>
          <label className="block mt-2">Deductions</label>
          <input
            type="number"
            name="deductions"
            min="0"
            step="0.1"
            required
            defaultValue={initialData?.deductions || 0}
          />
        </div>
        {/*  */}
        {isEditMode && (
          <div>
            <label className="mt-2 block"> Status</label>
            <select
              type="number"
              name="status"
              required
              defaultValue={initialData?.employeeStatus || 0}
            >
              <option value="ACTIVE">Active</option>
              <option value="INACTIVE">Inactive</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeDetails;
