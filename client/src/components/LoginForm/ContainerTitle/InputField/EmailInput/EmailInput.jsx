import React from "react";

const EmailInput = ({ email, setEmail }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-2">
        Email Address
      </label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="abc@example.com"
      />
    </div>
  );
};

export default EmailInput;
