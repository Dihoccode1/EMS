import React from "react";

const LeaveReason = () => {
  return (
    <div>
      <label className="text-sm font-medium text-slate-700 mb-2 block">
        Reason
      </label>
      <textarea
        name="reason"
        required
        rows={3}
        className="resize-none"
        placeholder="Briefly describe why need this leave"
      />
    </div>
  );
};

export default LeaveReason;
