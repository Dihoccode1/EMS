import React from "react";

const SideBarMobile = ({ content, open, setMobileOpen }) => {
  return (
    <aside
      className={`lg:hidden fixed inset-y-0 left-0 w-72 bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 text-white z-50 flex flex-col transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}
    >
      {content}
    </aside>
  );
};

export default SideBarMobile;
