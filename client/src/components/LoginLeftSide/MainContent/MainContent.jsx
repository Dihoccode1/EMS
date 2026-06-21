import React from "react";

const MainContent = () => {
  return (
    <div className="relative z-10 flex flex-col items-start justify-center p-12 lg:p-10 w-full h-full">
      <h1 className="text-4xl lg:text-5xl font-medium text-white mb-6 leading-tight tracking-tight">
        Employees
        <br />
        Management System
      </h1>
      <p className="text-slate-400 text-lg max-w-md leading-relaxed">
        Streamline your workforce operations, track attendance, manage payroll,
        and empower your team securely.
      </p>
    </div>
  );
};

export default MainContent;
