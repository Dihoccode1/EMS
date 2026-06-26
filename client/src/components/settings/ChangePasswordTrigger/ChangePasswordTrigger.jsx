import { Lock } from "lucide-react";
import React from "react";

// 1. Nhận đúng tên prop "onClick" mà file Settings.jsx truyền vào
const ChangePasswordTrigger = ({ onClick }) => {
  return (
    <div className="card max-w-md px-6 py-4 flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <div className="p-2.5 bg-slate-100 rounded-lg">
          <Lock className="w-5 h-5 text-slate-600" />
        </div>

        <div className="">
          <p className="font-medium text-slate-900">Password</p>
          <p className="text-sm text-slate-500">Update your account password</p>
        </div>
      </div>
      <button
        className="btn-secondary text-sm"
        // 2. Truyền true vào hàm onClick để bật modal
        onClick={() => {
          onClick(true);
        }}
      >
        Change
      </button>
    </div>
  );
};

export default ChangePasswordTrigger;
