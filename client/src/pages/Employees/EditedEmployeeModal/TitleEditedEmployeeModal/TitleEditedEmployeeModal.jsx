import React from "react";
import { X } from "lucide-react";

const TitleEditedEmployeeModal = ({ isEditing, setIsEditing }) => {
  return (
    <div className="flex items-center justify-between p-6 pb-0">
      {/* Bọc h2 và p vào chung 1 div để tụi nó nằm cùng 1 cụm bên trái */}
      <div>
        <h2 className="text-lg font-medium text-slate-900">Edit Employee</h2>
        <p className="text-sm text-slate-500 mt-0.5">Edit employee details</p>
      </div>

      <button
        onClick={() => setIsEditing(null)}
        className="p-2 rounded-lg hover:bg-slate-100 hover:text-slate-600 transition-colors"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

export default TitleEditedEmployeeModal;
