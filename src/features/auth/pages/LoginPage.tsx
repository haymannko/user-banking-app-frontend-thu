import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import LoginForm from "../components/LoginForm";
import PinForm from "../components/Pin";
import logo from "@/assets/images/app_logo.svg";
import { login } from "../hooks/authReducer"; // Make sure this is the correct path

import type { AppDispatch } from "@/app/store/store";

type Step = "password" | "pin";

const LoginPage: React.FC = () => {
  const [step, setStep] = useState<Step>("password");
  const [username, setUsername] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleEmailSubmit = ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    setUsername(username); // Store for use in pin step if needed

    dispatch(login({ username, password }))
      .unwrap()
      .then((user) => {
        toast.success(`Welcome back, ${user.name}`);
        setStep("pin"); // Go to PIN step
      })
      .catch((err) => {
        toast.error("Login failed");
        console.error(err);
      });
  };

  const handlePinSubmit = (pin: string) => {
    console.log("🔐 PIN entered:", pin);
    console.log("📦 Final login data:", { username, pin });
    // TODO: Submit PIN to backend or continue to app
    navigate("/dashboard"); // Example redirection
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-white rounded-lg shadow-md p-6 sm:p-10">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="h-12 sm:h-14 md:h-16" />
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4">
          {step === "password" ? "Login" : "Set Your Security PIN"}
        </h2>

        {/* Step Rendering */}
        {step === "password" && <LoginForm onSubmit={handleEmailSubmit} />}

        {step === "pin" && <PinForm onSubmit={handlePinSubmit} />}
      </div>
    </div>
  );
};

export default LoginPage;
