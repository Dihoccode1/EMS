import { Plus, X } from "lucide-react";
import React, { useState } from "react";
import HeaderGeneratePayslips from "./HeaderGeneratePayslips/HeaderGeneratePayslips";
import MainGeneratePayslipsForm from "./MainGeneratePayslipsForm/MainGeneratePayslipsForm";

const GeneratePayslipsForm = ({ employees, onSuccess }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  if (!isOpen)
    return (
      <button
        className="btn-primary flex items-center gap-2"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <Plus className="w-4 h-4" /> Generate Payslips
      </button>
    );

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="card max-w-lg w-full p-6 animate-slide-up">
        <HeaderGeneratePayslips setIsOpen={setIsOpen} />
        <MainGeneratePayslipsForm
          onSubmit={handleSubmit}
          employees={employees}
          setIsOpen={setIsOpen}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default GeneratePayslipsForm;
