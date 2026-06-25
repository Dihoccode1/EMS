import React, { useCallback, useState } from "react";
import { dummyEmployeeData, dummyPayslipData } from "../../assets/assets";
import { useEffect } from "react";
import Loading from "../../components/Loading/Loading";
import HeaderPayslips from "./HeaderPayslips/HeaderPayslips";
import PayslipsList from "../../components/payslips/PayslipsList/PayslipsList";

const Payslips = () => {
  const [payslips, setPayslips] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const isAdmin = true;
  const fetchPayslips = useCallback(async () => {
    setPayslips(dummyPayslipData);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (isAdmin) setEmployees(dummyEmployeeData);
  }, [isAdmin]);

  useEffect(() => {
    fetchPayslips();
  }, [fetchPayslips]);
  if (isLoading) return <Loading />;
  return (
    <div className="animate-fade-in">
      <HeaderPayslips
        isAdmin={isAdmin}
        employees={employees}
        onSuccess={fetchPayslips}
      />
      <PayslipsList payslips={payslips} isAdmin={isAdmin} />
    </div>
  );
};

export default Payslips;
