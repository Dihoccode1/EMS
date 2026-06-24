import React, { useCallback, useEffect, useState } from "react";

import { dummyAttendanceData } from "../../assets/assets";

import Loading from "../../components/Loading/Loading";
import HeaderAttendance from "./HeaderAttendance/HeaderAttendance";
import CheckInButton from "../../components/attendance/CheckInButton";
import AttendanceStats from "../../components/attendance/AttendanceStats";
import AttendanceHistory from "../../components/attendance/AttendanceHistory";
const Attendance = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDeleted, setIsDeleted] = useState(false);

  const fetchData = useCallback(async () => {
    setHistory(dummyAttendanceData);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading && <Loading />) return <div>Attendance</div>;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayRecord = history.find(
    (record) => new Date(record.date).toDateString() === today.toDateString(),
  );
  return (
    <div className="animate-fade-in">
      <HeaderAttendance />
      {isDeleted ? (
        <div className="mb-8 p-6 bg-rose-50 border border-rose-200 rounded-2xl text-center">
          <p className="text-rose-600">
            You can no longer clock in or out because your employee records have
            been marked as deleted
          </p>
        </div>
      ) : (
        <div className="mb-8">
          <CheckInButton todayRecord={todayRecord} onAction={fetchData} />
        </div>
      )}
      <AttendanceStats history={history} />
      <AttendanceHistory history={history} />
    </div>
  );
};

export default Attendance;
