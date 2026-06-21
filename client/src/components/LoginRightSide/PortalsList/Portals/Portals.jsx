import React from "react";

import { ArrowRightIcon } from "lucide-react";
const Portals = ({ portal }) => {
  return (
    <div className="relative z-10 flex items-center justify-between gap-4 sm:gap-5">
      <h3 className="text-lg text-slate-800 group-hover:text-indigo-600 mb-1 transition-colors ">
        {portal.title}
      </h3>
      <ArrowRightIcon className="w-4 h-4  group-hover:text-indigo-600 group-hover:translate-x-1 duration-300" />    
    </div>
  );
};

export default Portals;
