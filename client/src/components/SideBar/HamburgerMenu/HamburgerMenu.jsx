import React from "react";

import { MenuIcon } from "lucide-react";
const HamburgerMenu = ({ setMobileOpen, mobileOpen }) => {
  return (
    <button
      onClick={() => {
        setMobileOpen(true);
      }}
      className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-900 text-white rounded-lg shadow-lg border border-white/10"
    >
      <MenuIcon size={20} />
    </button>
  );
};

export default HamburgerMenu;
