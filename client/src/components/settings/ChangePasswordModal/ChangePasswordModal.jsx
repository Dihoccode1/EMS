import { LockIcon, X } from "lucide-react";
import React, { useState } from "react";
import TitleForm from "./TitleForm/TitleForm";

const ChangePasswordModal = ({ open, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm " />

      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md animate-fade-in"
        // Thêm tham số 'e' vào function
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="flex items-center justify-between p-6 pb-0">
          {/* Cấu trúc lại thẻ h2 và icon cho chuẩn */}
          <h2 className="text-lg font-medium text-slate-900 flex items-center gap-2">
            <LockIcon className="w-5 h-5 text-slate-400" />
            Change Password
          </h2>
          <button
            className="p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <TitleForm
          onSubmit={handleSubmit}
          message={message}
          onClose={onClose}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default ChangePasswordModal;
