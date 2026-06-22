import React from "react";

const SideBarDesktop = ({ content }) => {
  return (
    <aside className="hidden lg:flex flex-col h-full w-65 bg-linear-to-r from-slate-950  via-stone-900 to-slate-950 text-white shrink-0 border-r border-r-white/4 ">
      {content}
    </aside>
  );
};

export default SideBarDesktop;
