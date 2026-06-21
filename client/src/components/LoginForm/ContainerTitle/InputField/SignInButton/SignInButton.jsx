import React from "react";

import { EyeIcon, EyeOffIcon, Loader2Icon } from "lucide-react";
const SignInButton = ({ isLoading, setIsLoading }) => {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className="w-full py-3 bg-linear-to-r from-indigo-600 to-indigo-500 text-white rounded-md text-sm font-semibold hover:from-indigo-700 hover:to-indigo-600 disabled:opacity-50 transition-all duration-200 shadow-lg shadow-indigo-500/25 active:scale-[0.98] flex items-center justify-center"
    >
      {isLoading && <Loader2Icon className="animate-spin h-4 w-4 mr-2" />}
      Sign in
    </button>
  );
};

export default SignInButton;
