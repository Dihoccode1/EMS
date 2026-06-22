import React from "react";
import TitleEditedEmployeeModal from "./TitleEditedEmployeeModal/TitleEditedEmployeeModal";
import EmployeeForm from "../../../components/EmployeeForm/EmployeeForm";

const EditedEmployeeModal = ({ isEditing, setIsEditing, fetchEmployees }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center p-4 overflow-y-auto bg-black/40 backdrop-blur-sm"
      onClick={() => setIsEditing(null)}
    >
      {/* Khung trắng bọc toàn bộ modal được chuyển ra đây */}
      <div
        className="relative w-full max-w-3xl my-8 bg-white shadow-2xl rounded-2xl animate-fade-in"
        onClick={(e) => e.stopPropagation()} // Ngăn sự kiện click đóng modal khi bấm vào khung trắng
      >
        <TitleEditedEmployeeModal
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />

        <div className="p-6">
          <EmployeeForm
            initialData={isEditing}
            onSuccess={() => {
              setIsEditing(null);
              fetchEmployees();
            }}
            onCancel={() => {
              setIsEditing(null);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default EditedEmployeeModal;
