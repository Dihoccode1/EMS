import React, { useState } from "react";

import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";

import LoginLeftSide from "../LoginLeftSide/LoginLeftSide";
import MainTitle from "./ContainerTitle/MainTitle/MainTitle";
import ContainerTitle from "./ContainerTitle/ContainerTitle";
const LoginForm = ({ role, title, subtitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <LoginLeftSide />
      <ContainerTitle
        role={role}
        title={title}
        subtitle={subtitle}
        error={error}
        setError
        onSubmit={handleSubmit}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </div>
  );
};

export default LoginForm;
