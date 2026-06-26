import { Loader2Icon } from "lucide-react";
import React from "react";

const TitleForm = ({ onSubmit, message, onClose, loading }) => {
  return (
    <form className="p-6 space-y-5" onSubmit={onSubmit}>
      {message.text && (
        <div
          className={`p-3 rounded-xl text-sm flex items-start gap-3 ${
            // Fix 3: Sửa border-rose-200 thành border-emerald-200 ở đây
            message.type === "success"
              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
              : "bg-rose-50 text-rose-700 border border-rose-200"
          }`}
        >
          <div
            className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
              message.type === "success" ? "bg-emerald-500" : "bg-rose-500"
            }`}
          />
          {message.text}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Current Password
        </label>
        {/* Fix 2: Thêm class w-full và border cho input */}
        <input
          type="password"
          name="currentPassword"
          required
          className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          New Password
        </label>
        {/* Fix 2: Thêm class w-full và border cho input */}
        <input
          type="password"
          name="newPassword"
          required
          className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Fix 2: Thêm class flex và gap để 2 nút nằm dàn ngang */}
      <div className="flex gap-4 pt-2">
        <button
          type="button" // Fix 1: Đổi thành button để không submit nhầm
          disabled={loading}
          onClick={onClose}
          className="btn-secondary flex-1"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={loading}
          // Fix 1: XÓA onClick={onClose} ở đây
          // (Bonus: Bạn nên dùng btn-primary cho nút này để nó nổi bật là hành động chính)
          className="btn-primary flex-1 flex justify-center items-center gap-2"
        >
          {loading && <Loader2Icon className="w-4 h-4 animate-spin" />}
          Update Password
        </button>
      </div>
    </form>
  );
};

export default TitleForm;
