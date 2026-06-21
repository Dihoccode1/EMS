import React from "react";
import SignInButton from "./SignInButton/SignInButton";

import EmailInput from "./EmailInput/EmailInput";
import PasswordInput from "./PasswordInput/PasswordInput";

const InputField = ({
  onSubmit,
  email,
  setEmail,
  password,
  setPassword,
  showPassword,
  setShowPassword,
  isLoading,
  setIsLoading,
}) => {
  return (
    <form className="space-y-5" onSubmit={onSubmit}>
      {/* Component Email */}
      <EmailInput email={email} setEmail={setEmail} />

      {/* Component Password */}
      <PasswordInput
        password={password}
        setPassword={setPassword}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />

      {/* Component Button */}
      <SignInButton isLoading={isLoading} setIsLoading={setIsLoading} />
    </form>
  );
};

export default InputField;
