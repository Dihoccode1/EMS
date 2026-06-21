import React from "react";

import HalfCircleBlur from "./HalfCircleBlur/HalfCircleBlur";
import MainContent from "./MainContent/MainContent";

const LoginLeftSide = () => {
  return (
    <div className="hidden md:flex w-1/2 bg-indigo-950 relative overflow-hidden border-r border-slate-200">
      <HalfCircleBlur />
      {/* Main Content */}
      <MainContent />
    </div>
  );
};

export default LoginLeftSide;
