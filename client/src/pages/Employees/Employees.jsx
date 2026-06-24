import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { dummyEmployeeData, DEPARTMENTS } from "../../assets/assets";

import HeaderEmployees from "./HeaderEmployees/HeaderEmployees";
import SearchBar from "./SearchBar/SearchBar";
import ListEmployeesCard from "./ListEmployeeCards/ListEmployeeCards";
import Loading from "../../components/Loading/Loading";
import CreatedEmployeeModal from "./CreatedEmployeeModal/CreatedEmployeeModal";
import EditedEmployeeModal from "./EditedEmployeeModal/EditedEmployeeModal";
const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedDept, setSelectedDept] = useState("");
  const [isEditing, setIsEditing] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(null);
  const fetchEmployees = useCallback(async () => {
    setIsLoading(true);
    setEmployees(
      dummyEmployeeData.filter((emp) =>
        selectedDept ? emp.department === selectedDept : emp,
      ),
    );
    setTimeout(() => setIsLoading(false), 1000);
  }, [selectedDept]);

  const filteredEmployees = employees.filter((emp) =>
    `${emp.firstName} ${emp.lastName} ${emp.position}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );
  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);
  return (
    <div className="animate-fade-in">
      <HeaderEmployees
        setShowCreateModal={setShowCreateModal} // Sửa ở dòng này
        showCreateModal={showCreateModal}
      />
      <SearchBar
        setSearch={setSearch}
        setSelectedDept={setSelectedDept}
        search={search}
        selectedDept={selectedDept}
        departments={DEPARTMENTS}
      />
      <ListEmployeesCard
        loading={isLoading}
        filteredList={filteredEmployees}
        fetchEmployees={fetchEmployees}
        setIsEditing={setIsEditing}
        setShowCreateModal={setShowCreateModal}
      />
      {showCreateModal && (
        <CreatedEmployeeModal
          showCreateModal={showCreateModal}
          setShowCreateModal={setShowCreateModal}
          fetchEmployees={fetchEmployees}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      )}

      {isEditing && (
        <EditedEmployeeModal
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          fetchEmployees={fetchEmployees}
        />
      )}
    </div>
  );
};

export default Employees;
