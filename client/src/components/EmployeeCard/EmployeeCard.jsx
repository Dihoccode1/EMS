import React from "react";
import FirstNameIcon from "./FirstNameIcon/FirstNameIcon";
import ActionButton from "./ActionButton/ActionButton";

const EmployeeCard = ({ employee, onDelete, onEdit }) => {
  const handleDelete = async () => {
    // Chạy onDelete nếu user bấm OK
    if (!confirm("Are you sure you want to delete this employee?")) return;
    if (onDelete) onDelete(employee._id);
  };

  return (
    <div className="group relative card card-hover overflow-hidden">
      <FirstNameIcon employee={employee} />

      {/* Badge phòng ban */}
      <div className="absolute top-3 left-3 flex flex-col items-start gap-2 z-20">
        <span className="bg-white/90 backdrop-blur-sm px-2.5 py-1 text-xs font-semibold text-slate-600 rounded-lg shadow-sm">
          {employee.department || "Remote"}
        </span>

        {employee.isDeleted && (
          <span className="bg-red-500/90 backdrop-blur-sm font-medium text-white px-2.5 py-1 text-[10px] uppercase tracking-wider rounded shadow-sm">
            Deleted
          </span>
        )}
      </div>

      {/* Gọi ActionButton và nhớ truyền handleDelete */}
      {!employee.isDeleted && (
        <ActionButton
          employee={employee}
          onDelete={onDelete}
          onEdit={onEdit}
          handleDelete={handleDelete}
        />
      )}

      {/* Thông tin nhân viên */}
      <div className="p-5">
        <h3 className="text-slate-900 font-medium">
          {employee.firstName} {employee.lastName}
        </h3>
        <p className="text-sm text-slate-500 mt-0.5">{employee.position}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
