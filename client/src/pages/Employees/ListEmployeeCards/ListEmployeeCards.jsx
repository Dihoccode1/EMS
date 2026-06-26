import React from "react";
import EmployeeCard from "../../../components/EmployeeCard/EmployeeCard";
const ListEmployeeCards = ({
  loading,
  filteredList,
  fetchEmployees,
  setIsEditing,
  setShowCreateModal,
}) => {
  return loading ? (
    <div className="flex justify-center pb-12">
      <div className="animate-spin h-8 w-8 border-2 border-indigo-600 border-t-transparent rounded-full"></div>
    </div>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
      {filteredList.length === 0 ? (
        <p className="col-span-full text-center py-16 text-slate-400 bg-white rounded-2xl border border-dashed border-slate-200">
          No employees found
        </p>
      ) : (
        filteredList.map((emp) => (
          <EmployeeCard
            key={emp.id}
            employee={emp}
            onDelete={fetchEmployees}
            onEdit={(e) => setIsEditing(e)}
          />
        ))
      )}
    </div>
  );
};

export default ListEmployeeCards;
