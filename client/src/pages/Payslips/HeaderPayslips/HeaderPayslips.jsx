import React from "react";
import GeneratePayslipsForm from "../../../components/payslips/GeneratePayslipsForm/GeneratePayslipsForm";

const HeaderPayslips = ({ isAdmin, employees, onSuccess }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
      <div>
        <h1 className="page-title">Payslips</h1>
        <p className="page-subtitle">
          {isAdmin
            ? "Generate and manage employee payslips"
            : "Your payslips history"}
        </p>
      </div>
      {isAdmin && (
        <GeneratePayslipsForm employees={employees} onSuccess={onSuccess} />
      )}
    </div>
  );
};

export default HeaderPayslips;
