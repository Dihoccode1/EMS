// TitlePayslipItem.jsx
import React from "react";

const TitlePayslipItem = ({ label, value }) => {
  return (
    <div>
      <p className="text-sm text-slate-400 mb-1 uppercase tracking-wider">
        {label}
      </p>
      <p className="font-semibold text-slate-900">{value}</p>
    </div>
  );
};

export default TitlePayslipItem;
