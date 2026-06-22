import { LogOutIcon } from "lucide-react";
import React from "react";

const LogoutContent = ({ handleLogout }) => {
  return (
    <div className="p-3 border-t border-white/6">
      <button
        onClick={() => {
          handleLogout();
        }}
        className="flex items-center gap-3 w-full px-3 py-2.5 rounded-md text-[13px] font-medium text-slate-400 hover:text-red-400 hover:bg-rose-500/8 transition-all duration-150"
      >
        <LogOutIcon className="w-4.25 h-4.25 " />
        <span>Log out</span>
      </button>
    </div>
  );
};

export default LogoutContent;
