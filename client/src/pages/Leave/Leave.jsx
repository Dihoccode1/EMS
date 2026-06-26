import React, { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { Thermometer, Umbrella, TreePalm } from "lucide-react";
import { dummyLeaveData } from "../../assets/assets";
import Loading from "../../components/Loading/Loading";
import HeaderLeave from "./HeaderLeave/HeaderLeave";
import LeaveStatusList from "./LeaveStatusList/LeaveStatusList";
import LeaveHistory from "../../components/leave/LeaveHistory/LeaveHistory";
import ApplyLeaveModal from "../../components/leave/ApplyLeaveModal/ApplyLeaveModal";
const Leave = () => {
  const [leaves, setLeaves] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const isAdmin = true;
  const fetchLeaves = useCallback(async () => {
    setLeaves(dummyLeaveData);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    fetchLeaves();
  }, []);
  if (loading) return <Loading />;

  const approvedLeaves = leaves.filter((leave) => leave.status === "APPROVED");
  const sickCount = approvedLeaves.filter(
    (leave) => leave.type === "SICK ",
  ).length;
  const casualCount = approvedLeaves.filter(
    (leave) => leave.type === "CASUAL",
  ).length;
  const annualCount = approvedLeaves.filter(
    (leave) => leave.type === "ANNUAL",
  ).length;
  const leaveStats = [
    { label: "Sick Leave", value: sickCount, icon: Thermometer },
    { label: "Casual Leave", value: casualCount, icon: Umbrella },
    { label: "Annual Leave", value: annualCount, icon: TreePalm },
  ];
  return (
    <div className="animate-fade-in ">
      <HeaderLeave
        isAdmin={isAdmin}
        isDeleted={isDeleted}
        setShowModal={setShowModal}
        showModal={showModal}
      />
      {!isAdmin && <LeaveStatusList status={leaveStats} />}
      <LeaveHistory leaves={leaves} isAdmin={isAdmin} onUpdate={fetchLeaves} />
      <ApplyLeaveModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onSuccess={fetchLeaves}
      />
    </div>
  );
};

export default Leave;
