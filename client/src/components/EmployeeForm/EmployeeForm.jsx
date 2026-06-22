import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import EmployeeDetails from "./EmployeeDetails/EmployeeDetails";
import AccountSetup from "./AccountSetup/AccountSetup";
import ButtonGroup from "./ButtonGroup/ButtonGroup";
const EmployeeForm = ({ initialData, onSuccess, onCancel }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const isEditMode = !!initialData;
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-3xl animate-fade-in"
    >
      <PersonalInformation initialData={initialData} />
      <EmployeeDetails initialData={initialData} isEditMode={isEditMode} />
      <AccountSetup initialData={initialData} isEditMode={isEditMode} />
      <ButtonGroup
        loading={loading}
        setLoading={setLoading}
        isEditMode={isEditMode}
        onCancel={onCancel}
        navigate={navigate}
      />
    </form>
  );
};

export default EmployeeForm;
