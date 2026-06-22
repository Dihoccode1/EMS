import React, { useEffect, useState } from "react";
import {
  dummyAdminDashboardData,
  dummyEmployeeDashboardData,
} from "../assets/assets";
import Loading from "../components/Loading/Loading";
import EmployeeDashBoard from "../components/EmployeeDashBoard/EmployeeDashBoard";
import AdminDashBoard from "../components/AdminDashBoard/AdminDashBoard";

const DashBoard = () => {
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(dummyAdminDashboardData);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  if (!data)
    return (
      <p className="text-center text-slate-500 py-12">
        Failed to load dashboard
      </p>
    );

  if (data.role === "ADMIN") {
    return <AdminDashBoard data={data} />;
  } else {
    return <EmployeeDashBoard data={data} />;
  }
};

export default DashBoard;
