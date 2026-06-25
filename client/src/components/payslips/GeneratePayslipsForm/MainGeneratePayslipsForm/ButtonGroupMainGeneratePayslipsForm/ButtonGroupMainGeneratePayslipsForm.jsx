import React from "react";

import { Loader2 } from "lucide-react";

const ButtonGroupMainGeneratePayslipsForm = ({ setIsOpen, isLoading }) => {
  return (
    <div className="flex justify-end gap-3 pt-2">
      <button
        className="btn-secondary"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        Cancel
      </button>

      <button
        className="btn-secondary flex items-center"
        type="submit"
        disabled={isLoading}
      >
        {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
        Generate
      </button>
    </div>
  );
};

export default ButtonGroupMainGeneratePayslipsForm;
