import React from "react";

import LeaveType from "./LeaveType/LeaveType";
import LeaveReason from "./LeaveReason/LeaveReason";
import LeaveDuration from "./LeaveDuration/LeaveDuration";
import ApplyFormButtons from "./ApplyFormButtons/ApplyFormButtons";
const FormApplyLeave = ({ onSubmit, minDate, onClose, loading }) => {
  return (
    <form onSubmit={onSubmit} className="p-6 space-y-5">
      <LeaveType />
      <LeaveDuration minDate={minDate} />
      <LeaveReason />
      <ApplyFormButtons onClose={onClose} loading={loading} />
    </form>
  );
};

export default FormApplyLeave;
