import { X } from "lucide-react";
import React from "react";
import TitleCreatedEmployeeModal from "./TitleCreatedEmployeeModal/TitleCreatedEmployeeModal";
import EmployeeForm from "../../../components/EmployeeForm/EmployeeForm";

const CreatedEmployeeModal = ({
  setShowCreateModal,
  showCreateModal,
  isEditing,
  setIsEditing,
  fetchEmployees,
}) => {
  return (
    <div
      className="fixed bg-black/40 backdrop-blur-sm inset-0 z-50 flex items-start justify-center p-4 overflow-y-auto"
      onClick={() => setShowCreateModal(false)}
    >
      <div className="fixed inset-0" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl my-8 animate-fade-in"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <TitleCreatedEmployeeModal
          showCreateModal={showCreateModal}
          setShowCreateModal={setShowCreateModal}
        />

        <div className="p-6">
          <EmployeeForm
            initialData={isEditing}
            onSuccess={() => {
              setShowCreateModal(false);
              fetchEmployees();
            }}
            onCancel={() => {
              setShowCreateModal(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CreatedEmployeeModal;
