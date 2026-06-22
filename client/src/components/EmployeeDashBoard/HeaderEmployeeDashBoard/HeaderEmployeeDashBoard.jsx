import React from "react";


const HeaderEmployeeDashBoard = ({ emp }) => {
  return (
    <div className="page-header">
      <h1 className="page-title">Welcome,{emp?.firstName}</h1>
      <p className="page-subtitle">
        Welcome back ,Admin - here's your overview
      </p>
    </div>
  );
};

export default HeaderEmployeeDashBoard;
