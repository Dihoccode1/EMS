import { X } from "lucide-react";
import React from "react";

const HeaderApplyLeaveModal = ({ onClick }) => {
  return (
    <div className="flex items-center justify-between p-6 pb-0">
      {/* Cụm 1: Nằm bên trái */}
      <div>
        <h2 className="text-lg font-semibold"> Apply for leave</h2>
        <p className="text-sm text-slate-400 mt-0.5">
          Submit your leave request for approval
        </p>
      </div>

      {/* Cụm 2: Nằm bên phải (Đã đưa ra ngoài cụm div trên) */}
      <button
        onClick={onClick} // Chuyển onClick lên đây
        className="p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

export default HeaderApplyLeaveModal;
