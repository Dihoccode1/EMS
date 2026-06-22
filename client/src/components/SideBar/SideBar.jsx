import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import { dummyProfileData } from "../../assets/assets";

import SideBarDesktop from "./SideBarDesktop/SideBarDesktop";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import SideBarMobile from "./SideBarMobile/SideBarMobile";
import HeaderSideBarConTent from "./SideBarContent/HeaderSideBarConTent/HeaderSideBarConTent";
import UserProfileContent from "./SideBarContent/UserProfileContent/UserProfileContent";
import SectionLabel from "./SideBarContent/SectionLabel/SectionLabel";
import {
  CalendarIcon,
  DollarSignIcon,
  FileTextIcon,
  LayoutGridIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";
import NavigationList from "./SideBarContent/NavigationList/NavigationList";
import LogoutContent from "./SideBarContent/LogoutContent/LogoutContent";
const SideBar = () => {
  const { pathname } = useLocation();
  const [userName, setUserName] = useState();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setUserName(dummyProfileData.firstName + " " + dummyProfileData.lastName);
  }, []);
  //   Close the mobile menu if it's open when changing the page
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const role = "ADMIN" || "EMPLOYEE";

  const navItem = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutGridIcon },
    role === "ADMIN"
      ? { name: "Employees", href: "/employees", icon: UserIcon }
      : { name: "Attendance", href: "/attendance", icon: CalendarIcon },
    { name: "Leave", href: "/leave", icon: FileTextIcon },
    { name: "Payslips", href: "/payslips", icon: DollarSignIcon },
    { name: "Settings", href: "/settings", icon: SettingsIcon },
  ];

  const handleLogout = () => {
    window.location.href = "/login";
  };
  const sidebarContent = (
    <>
      {/* Header */}
      <HeaderSideBarConTent
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
      {/* User profile */}
      <UserProfileContent userName={userName} role={role} />
      {/* section label */}
      <SectionLabel />
      {/* navigation list  */}
      <NavigationList navItem={navItem} pathname={pathname} />
      {/* log out */}
      <LogoutContent handleLogout={handleLogout} />
    </>
  );
  return (
    <>
      <HamburgerMenu setMobileOpen={setMobileOpen} mobileOpen={mobileOpen} />
      {/* Mobile delay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}
      <SideBarDesktop content={sidebarContent} />
      <SideBarMobile
        content={sidebarContent}
        open={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
    </>
  );
};

export default SideBar;
