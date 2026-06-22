import React, { useEffect, useState } from "react";
import { dummyEmployeeDashboardData } from "../assets/assets";

const DashBoard = () => {
  const [data, setData] = useState(null);
  // Nên khởi tạo loading là true luôn từ đầu vì mới vào là phải load data ngay
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Giả lập thời gian fetch data mất 1 giây
    const timer = setTimeout(() => {
      setData(dummyEmployeeDashboardData); // Gán dữ liệu vào biến data
      setLoading(false); // Tắt trạng thái loading
    }, 1000);

    // Cleanup function để tránh rò rỉ bộ nhớ nếu component bị unmount giữa chừng
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <p>...Loading</p>;

  if (!data)
    return (
      <p className="text-center text-slate-500 py-12">
        Failed to load dashboard
      </p>
    );

  if (data.role === "ADMIN") {
    return <div> Admin DashBoard</div>;
  } else {
    return <div> Employee DashBoard</div>;
  }
};

export default DashBoard;
