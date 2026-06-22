import React from "react";
import Bio from "./Bio/Bio";

const PersonalInformation = ({ initialData }) => {
  return (
    <div className="card p-5 sm:p-6">
      <h3 className="font-medium mb-6 pb-4 border-b  border-slate-100 ">
        Personal Information
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm text-slate-700">
        <div>
          <label className="block mt-2">First Name</label>
          <input
            type="text"
            name="firstName"
            required
            defaultValue={initialData?.firstName}
          />
        </div>

        <div>
          <label className="block mt-2">Last Name</label>
          <input
            type="text"
            name="lastName"
            required
            defaultValue={initialData?.lastName}
          />
        </div>

        <div>
          <label className="block mt-2">Phone Number</label>
          <input
            type="phone"
            name="phone"
            required
            defaultValue={initialData?.phone}
          />
        </div>

        <div>
          <label className="block mt-2">Join Date</label>
          <input
            type="Date"
            name="joinDate"
            required
            defaultValue={
              initialData?.joinDate
                ? new Date(initialData.joinDate).toISOString().split("T")[0]
                : ""
            }
          />

          <Bio initialData={initialData} />
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
