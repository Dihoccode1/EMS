import React from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const PasswordInput = ({
  password,
  setPassword,
  showPassword,
  setShowPassword,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-2">
        Password
      </label>
      <div className="relative">
        <input
          className="pr-11"
          /* Chỗ này đã được sửa để có thể hiện chữ khi bấm vào icon */
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder=".........."
        />
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
