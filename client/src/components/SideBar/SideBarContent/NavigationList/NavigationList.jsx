import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const NavigationList = ({ navItem, pathname }) => {
  return (
    <div className="flex-1 px-3 space-y-0.5 overflow-y-auto ">
      {navItem.map((item) => {
        const isActive = pathname.startsWith(item.href);
        return (
          <Link
            key={item.name}
            to={item.href}
            className={`group flex items-center gap-3 px-3 py-2.5 rounded-md text-[13px] font-medium transition-all duration-150 relative ${isActive ? "bg-indigo-500/12 text-indigo-300" : "text-slate-300 hover:text-white hover:bg-white/4"}`}
          >
            {isActive && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.75 h-5 rounded-r-full bg-indigo-500"></div>
            )}
            <item.icon
              className={`w-4 h-4 shrink-0 ${isActive ? "text-indigo-300" : "text-slate-400 group-hover:text-slate-300"}`}
            />
            <span className="flex-1">{item.name}</span>
            {isActive && (
              <ChevronRightIcon className="w-3.5 h-3.5 text-indigo-500/50" />
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default NavigationList;
