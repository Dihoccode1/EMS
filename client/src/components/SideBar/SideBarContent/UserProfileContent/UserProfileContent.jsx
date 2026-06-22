import React from "react";

const UserProfileContent = ({ userName, role }) => {

  const displayName = userName || "User";
  const initial = displayName.charAt(0).toUpperCase();

  return (
    <div className="mx-3 mt-4 mb-1 p-3 rounded-lg bg-white/3 border border-white/4">
      <div className="flex items-center gap-3">
        {/* 2. Fix layout avatar: Thêm flex, items-center, justify-center và bg-white/5 để căn giữa chữ */}
        <div className="w-9 h-9 flex items-center justify-center rounded-lg ring-1 ring-white/10 bg-white/5 shrink-0">
          <span className="text-slate-400 text-shadow-xs font-semibold">
            {initial}
          </span>
        </div>

        <div className="min-w-0">
          <p className="text-[13px] font-medium text-slate-200 truncate">
            {displayName}
          </p>
          <p className="text-[11px] text-slate-500 truncate">
            {role === "ADMIN" ? "Administrator" : "Employee"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfileContent;
