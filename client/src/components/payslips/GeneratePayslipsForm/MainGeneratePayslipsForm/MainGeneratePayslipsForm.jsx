import React from "react";
import SelectEmployeeField from "./SelectEmployeeField/SelectEmployeeField";
import SelectMonthAndYearField from "./SelectMonthAndYearField/SelectMonthAndYearField";
import BasicSalary from "./BasicSalary/BasicSalary";
import ButtonGroupMainGeneratePayslipsForm from "./ButtonGroupMainGeneratePayslipsForm/ButtonGroupMainGeneratePayslipsForm";

const MainGeneratePayslipsForm = ({
  onSubmit,
  employees,
  setIsOpen,
  isLoading,
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <SelectEmployeeField employees={employees} />
      <SelectMonthAndYearField />
      <BasicSalary />
      <ButtonGroupMainGeneratePayslipsForm
        setIsOpen={setIsOpen}
        isLoading={isLoading}
      />
    </form>
  );
};

export default MainGeneratePayslipsForm;
