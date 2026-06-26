import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dummyPayslipData } from "../../assets/assets";
import Loading from "../../components/Loading/Loading";
import HeaderPrintPayslip from "./HeaderPrintPayslip/HeaderPrintPayslip";
import TitlePayslipList from "./TitlePayslipList/TitlePayslipList";
import PayslipTable from "./TablePayslip/TablePayslip";
import PrintPayslipButtonGroup from "./PrintPayslipButtonGroup/PrintPayslipButtonGroup";

const PrintPayslip = () => {
  const { id } = useParams();
  const [payslip, setPayslip] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPayslip(dummyPayslipData.find((slip) => slip.id === id));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) return <Loading />;
  if (!payslip)
    return (
      <p className="text-center py-12 text-slate-400">Payslip not found</p>
    );
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white animate-fade-in">
      <HeaderPrintPayslip payslip={payslip} />
      <TitlePayslipList payslip={payslip} />
      <PayslipTable payslip={payslip} />
      <PrintPayslipButtonGroup />
    </div>
  );
};

export default PrintPayslip;
