import React from "react";
import { Check, Loader2, X } from "lucide-react"; // Đã bổ sung dòng này

const ButtonActionLeaveList = ({ leave, processing, handleStatusUpdate }) => {
  return (
    <div className="flex justify-center gap-2">
      <button
        disabled={!!processing}
        onClick={() => {
          handleStatusUpdate(leave._id || leave._id, "APPROVED");
        }}
        className="p-1.5 rounded-md bg-emerald-50 text-emerald-500 hover:bg-emerald-600 duration-100 transition-colors"
      >
        {processing === (leave._id || leave._id) ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Check className="w-4 h-4" />
        )}
      </button>

      <button
        onClick={() => {
          handleStatusUpdate(leave._id || leave._id, "REJECTED");
        }}
        disabled={!!processing}
        className="p-1.5 rounded-md bg-rose-50 text-rose-600 hover:bg-rose-100 duration-100 transition-colors"
      >
        {processing === (leave._id || leave._id) ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <X className="w-4 h-4" />
        )}
      </button>
    </div>
  );
};

export default ButtonActionLeaveList;
