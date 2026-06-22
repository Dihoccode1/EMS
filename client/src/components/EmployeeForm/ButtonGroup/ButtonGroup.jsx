import React from "react";

import { Loader2Icon } from "lucide-react";
const ButtonGroup = ({
  loading,
  setLoading,
  isEditMode,
  onCancel,
  navigate,
}) => {
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 pt-2">
      <button
        type="button"
        className="btn-secondary"
        onClick={() => {
          onCancel ? onCancel() : navigate(-1);
        }}
      >
        Cancel
      </button>
      <button
        loading={loading}
        type="submit"
        className="btn-secondary flex items-center justify-center "
      >
        {loading && <Loader2Icon className="w-4 h-4 mr-2 animate-spin" />}
        {isEditMode ? "Update Employee" : "Create Employee"}
      </button>
    </div>
  );
};

export default ButtonGroup;
