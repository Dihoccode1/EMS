import React from "react";

import { Link } from "react-router-dom";

import { ArrowLeftIcon } from "lucide-react";

import MainTitle from "./MainTitle/MainTitle";
import InputField from "./InputField/InputField";

const ContainerTitle = ({
  role,
  title,
  subtitle,
  error,
  setError,
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
    <div className="flex-1 flex items-center justify-center p-6 sm:p-12 bg-white">
      <div className="w-full max-w-md animate-fade-in ">
        <Link
          to="/login"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-700 text-sm mb-10 transition-colors"
        >
          <ArrowLeftIcon size={16} />
          Back to portals
        </Link>

        <MainTitle role={role} title={title} subtitle={subtitle} />
        {error && (
          <div className="mb-6 p-4 bg-rose-50 border border-rose-200 flex items-start gap-3">
            {" "}
            <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0"></div>
          </div>
        )}
        <InputField onSubmit={onSubmit} email={email} setEmail={setEmail} />
      </div>
    </div>
  );
};

export default ContainerTitle;
