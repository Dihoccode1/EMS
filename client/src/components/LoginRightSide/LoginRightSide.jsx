import React from "react";
import HeaderLoginRightSide from "./HeaderLoginRightSide/HeaderLoginRightSide";
import PortalsList from "./PortalsList/PortalsList";
import FooterLoginRightSide from "./FooterLoginRightSide/FooterLoginRightSide";

const LoginRightSide = ({ portalOption }) => {
  return (
    <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16 relative overflow-y-auto min-h-screen">
      <div className="w-full max-w-md animate-fade-in relative z-10">
        <HeaderLoginRightSide />
        <PortalsList portalOption={portalOption} />
        <FooterLoginRightSide />
      </div>
    </div>
  );
};

export default LoginRightSide;
