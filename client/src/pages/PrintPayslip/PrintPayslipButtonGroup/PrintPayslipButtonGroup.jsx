import React from "react";

const PrintPayslipButtonGroup = () => {
  return (
    <div className="text-center">
      <button
        className="btn-primary print:hidden"
        onClick={() => {
          window.print();
        }}
      >
        Print Payslip
      </button>
    </div>
  );
};

export default PrintPayslipButtonGroup;
