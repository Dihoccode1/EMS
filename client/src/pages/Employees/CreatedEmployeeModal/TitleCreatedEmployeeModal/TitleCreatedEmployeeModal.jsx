// TitleCreatedEmployeeModal.jsx
import React from "react";
import { X } from "lucide-react";

const TitleCreatedEmployeeModal = ({ showCreateModal, setShowCreateModal }) => {
  return (
    <div className="flex items-center justify-between p-6 pb-0">
      <div>
        <h2 className="text-lg font-medium text-slate-900 ">
          Add New Employee
        </h2>
        <p>Create user account and employee </p>
      </div>
      <button
        onClick={() => {
          setShowCreateModal(false);
        }}
        className="p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

export default TitleCreatedEmployeeModal;
