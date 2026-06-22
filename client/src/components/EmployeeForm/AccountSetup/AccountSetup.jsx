import React from "react";
import SystemRole from "./SystemRole/SystemRole";

const AccountSetup = ({ initialData, isEditMode }) => {
  return (
    <div className="card p-5 sm:p-6">
      <h3 className="font-medium mb-6 pb-4 border-b  border-slate-100 ">
        Account Setup
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm text-slate-700">
        <div className="sm:col-span-2">
          <label className="block mt-2">Work Email</label>
          <input
            type="text"
            name="email"
            required
            defaultValue={initialData?.email}
          />
        </div>
        {!isEditMode && (
          <div>
            <label className="block mt-2">Temporary Password</label>
            <input
              type="text"
              name="password"
              required
              defaultValue={initialData?.password}
            />
          </div>
        )}

        {isEditMode && (
          <div>
            <label className="block mt-2">Change Password (Optional)</label>
            <input
              type="text"
              name="password"
              placeholder="Leave blank to keep current"
              defaultValue={initialData?.password}
            />
          </div>
        )}

        <SystemRole initialData={initialData} isEditMode={isEditMode} />

        {/*  */}
      </div>
    </div>
  );
};

export default AccountSetup;
