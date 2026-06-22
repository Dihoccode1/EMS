import React from "react";

const HeaderEmployeeDashBoard = ({ emp }) => {
  return (
    <div className="page-header">
      <h1 className="page-title">Welcome,{emp?.firstName}</h1>
      <p className="page-subtitle">
        {emp?.position}-{emp?.department}
      </p>
    </div>
  );
};

export default HeaderEmployeeDashBoard;
