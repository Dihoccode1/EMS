import React from "react";

const SystemRole = ({ initialData, isEditMode }) => {
  return (
    <div>
      <label className="block mt-2">System Role</label>
      <select name="role" defaultValue={initialData?.user?.role || "EMPLOYEE"}>
        <option value="EMPLOYEE">Employee</option>
        <option value="ADMIN">Admin</option>
      </select>
    </div>
  );
};

export default SystemRole;
