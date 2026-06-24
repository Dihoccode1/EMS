import React, { useState } from "react";
import HeaderApplyLeaveModal from "./HeaderApplyLeaveModal/HeaderApplyLeaveModal";
import FormApplyLeave from "./FormApplyLeave/FormApplyLeave";

const ApplyLeaveModal = ({ open, onClose, onSuccess }) => {
  const [loading, setLoading] = useState(false);

  const today = new Date();

  const tomorrow = new Date(today);

  tomorrow.setDate(today.getDate() + 1);

  const minDate = tomorrow.toISOString().split("T")[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full rounded-2xl shadow-2xl max-w-lg animate-fade-in bg-white"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <HeaderApplyLeaveModal onClick={onClose} />
        <FormApplyLeave
          onSubmit={handleSubmit}
          minDate={minDate}
          onClose={onClose}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default ApplyLeaveModal;
