import React from "react";
import { Plus } from "lucide-react";

const HeaderEmployees = ({ showCreateModal, setShowCreateModal }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
      <div>
        <h1 className="page-title">Employees</h1>
        <p className="page-subtitle">Manage your team members</p>
      </div>

      <button
        onClick={() => {
          setShowCreateModal(true);
        }}
        className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center "
      >
        <Plus size={16} /> Add Employee
      </button>
    </div>
  );
};

export default HeaderEmployees;
