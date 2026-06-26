import { Check, Loader2, X } from "lucide-react";
import { useState } from "react";
import ButtonActionLeaveList from "./ButtonAction/ButtonActionLeaveList";
import { format } from "date-fns";

const LeaveHistory = ({ leaves, isAdmin, onUpdate }) => {
  const [processing, setProcessing] = useState(null);

  const handleStatusUpdate = async (id, status) => {
    setProcessing(id);
  };

  return (
    <div className="card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="table-modern">
          <thead>
            <tr>
              {isAdmin && <th>Employee</th>}
              <th>Type</th>
              <th>Dates</th>
              <th>Reason</th>
              <th>Status</th>
              {isAdmin && <th className="text-center">Actions</th>}
            </tr>
          </thead>
          <tbody>
            {leaves.length === 0 ? (
              <tr>
                <td
                  colSpan={isAdmin ? 6 : 4}
                  className="text-center py-12 text-slate-400"
                >
                  No leaves applications found
                </td>
              </tr>
            ) : (
              leaves.map((leave) => {
                return (
                  <tr key={leave._id}>
                    {isAdmin && (
                      <td className=" text-slate-900">
                        {leave.employee.firstName} {leave.employee.lastName}
                      </td>
                    )}

                    <td>
                      <span className="badge bg-slate-100 text-slate-600">
                        {leave.type}
                      </span>
                    </td>

                    <td className="text-xs text-slate-900">
                      {format(new Date(leave.startDate), "MMMM dd ")} -
                      {format(new Date(leave.endDate), "MMMM dd , yyyy ")}
                    </td>

                    <td
                      className="max-w-xs truncate text-slate-500"
                      title={leave.reason}
                    >
                      {leave.reason}
                    </td>

                    {/* Đã bỏ điều kiện isAdmin ở đây để luôn hiện Status */}
                    <td>
                      <span
                        className={`badge  ${
                          leave.status === "APPROVED"
                            ? "badge-success"
                            : leave.status === "REJECTED"
                              ? "badge-danger"
                              : "badge-warning"
                        } `}
                      >
                        {leave.status}
                      </span>
                    </td>

                    {isAdmin && (
                      <td>
                        {leave.status === "PENDING" && (
                          <ButtonActionLeaveList
                            leave={leave}
                            processing={processing}
                            handleStatusUpdate={handleStatusUpdate}
                          />
                        )}
                      </td>
                    )}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveHistory;
