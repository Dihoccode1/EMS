import { PlusIcon } from "lucide-react";
import React from "react";

const HeaderLeave = ({
  isAdmin,
  isDeleted,
  setShowModal,
  showModal,
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
      <div>
        <h1 className="page-title">Leave Management</h1>
        <p className="page-subtitle">
          {isAdmin
            ? "Manage leave applications"
            : "Your leave history and requests"}
        </p>
      </div>
      {!isAdmin && !isDeleted && (
        <button
          onClick={() => {
            setShowModal(true);
          }}
          className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
        >
          <PlusIcon className="w-4  h-4" /> Apply for Leave
        </button>
      )}
    </div>
  );
};

export default HeaderLeave;
