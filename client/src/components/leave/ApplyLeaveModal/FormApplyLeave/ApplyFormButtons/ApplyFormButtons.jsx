import { Loader2, Send } from "lucide-react";
import React from "react";

const ApplyFormButtons = ({ onClose, loading }) => {
  return (
    <div className="flex gap-3 pt-2">
      <button type="button" onClick={onClose} className="btn-secondary flex-1">
        Cancel
      </button>
      <button
        type="submit"
        className="btn-primary flex-1 flex items-center justify-center gap-2"
        disabled={loading}
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Send className="w-4 h-4 " />
        )}
        {loading ? "Submitting..." : "Submit"}
      </button>
    </div>
  );
};

export default ApplyFormButtons;
