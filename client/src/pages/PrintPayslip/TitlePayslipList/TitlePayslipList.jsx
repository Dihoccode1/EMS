// TitlePayslipList.jsx
import { format } from "date-fns";
import React from "react";
import TitlePayslipItem from "./TitlePayslipItem/TitlePayslipItem"; // Nhớ import component vừa tạo

const TitlePayslipList = ({ payslip }) => {
  const details = [
    {
      label: "Employee Name",
      value: `${payslip.employee.firstName} ${payslip.employee.lastName}`,
    },
    {
      label: "Position",
      value: payslip.employee.position,
    },
    {
      label: "Email",
      value: payslip.employee.email,
    },
    {
      label: "Period",
      value: format(new Date(payslip.year, payslip.month - 1), "MMM yyyy"),
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-6 mb-8">
      {details.map((detail) => (
        <TitlePayslipItem
          // Khuyến nghị: Dùng detail.label làm key thay vì index vì label ở đây là duy nhất
          key={detail.label}
          label={detail.label}
          value={detail.value}
        />
      ))}
    </div>
  );
};

export default TitlePayslipList;
