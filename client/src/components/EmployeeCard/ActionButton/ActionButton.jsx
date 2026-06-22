import React from "react";
import { PencilIcon, Trash2Icon } from "lucide-react";

const ActionButton = ({ employee, onDelete, onEdit, handleDelete }) => {
  return (
    <div className="absolute top-0 inset-x-0 aspect-4/3 bg-linear-to-t from-indigo-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-6 gap-3 z-10">
      {/* Nút Edit */}
      <button
        onClick={() => onEdit(employee)}
        className="p-2.5 bg-white text-slate-700 rounded-full shadow-lg hover:text-indigo-600 hover:bg-indigo-50 hover:-translate-y-1 transition-all duration-200"
        title="Edit"
      >
        <PencilIcon className="w-4 h-4" />
      </button>

      {/* Nút Delete */}
      <button
        onClick={handleDelete}
        className="p-2.5 bg-white text-slate-700 rounded-full shadow-lg hover:text-rose-600 hover:bg-rose-50 hover:-translate-y-1 transition-all duration-200"
        title="Delete"
      >
        <Trash2Icon className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ActionButton;
