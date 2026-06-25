import React from "react";

// external imports
import { Toaster } from "react-hot-toast";
import { Route, Routes, Navigate } from "react-router-dom";

// internal imports
import DashBoard from "./pages/DashBoard";
import Employees from "./pages/Employees/Employees";
import Attendance from "./pages/Attendance/Attendance";
import Leave from "./pages/Leave/Leave";
import Payslips from "./pages/Payslips/Payslips";
import Settings from "./pages/Settings";
import LoginLanding from "./pages/LoginLanding";
import Layout from "./pages/Layout";
import PrintPayslip from "./pages/PrintPayslip";
import LoginForm from "./components/LoginForm/LoginForm";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        {/* NHỮNG TRANG KHÔNG SỬ DỤNG LAYOUT (Không có Sidebar) */}
        <Route path="/login" element={<LoginLanding />} />
        <Route
          path="/login/admin"
          element={
            <LoginForm
              role="admin"
              title="Admin Portal"
              subtitle="Sign in to manage the  organization"
            />
          }
        />
        <Route
          path="/login/employee"
          element={
            <LoginForm role="employee" title="Sign in to access your account" />
          }
        />
        <Route path="/print/payslips/:id" element={<PrintPayslip />} />

        {/* NHỮNG TRANG SỬ DỤNG LAYOUT (Có Sidebar) */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/payslips" element={<Payslips />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* Bắt các link sai và chuyển hướng về dashboard */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </>
  );
};

export default App;
