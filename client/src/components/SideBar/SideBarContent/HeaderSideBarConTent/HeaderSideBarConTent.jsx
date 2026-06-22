import { UserIcon, XIcon } from "lucide-react";
import React from "react";

const HeaderSideBarConTent = ({ mobileOpen, setMobileOpen }) => {
  return (
    <div className="px-5 pt-6 pb-5 border border-white/6 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <UserIcon className="text-white size-7" />
          <div>
            <p className="font-semibold text-[13px] text-white tracking-wide">
              Employee MS
            </p>
            <p className="text-[11px] text-slate-500 font-medium">
              Management System
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            setMobileOpen(false);
          }}
          className="lg:hidden text-slate-400 hover:text-white p-1"
        >
          <XIcon size={20} />
        </button>
      </div>
    </div>
  );
};

export default HeaderSideBarConTent;
