import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import PinForm from "../components/Pin";
import logo from "@/assets/images/app_logo.svg";

type Step = "email" | "pin";

const LoginPage: React.FC = () => {
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (submittedEmail: string) => {
    console.log("📧 Email submitted:", submittedEmail);
    setEmail(submittedEmail);
    setStep("pin");
  };

  const handlePinSubmit = (pin: string) => {
    console.log("🔐 PIN entered:", pin);
    console.log("📦 Final login data:", { email, pin });
    // TODO: Send to backend, authenticate, navigate, etc.
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
          {step === "email" ? "Login" : "Set Your Security PIN"}
        </h2>

        {/* Step Rendering */}
        {step === "email" && <LoginForm onSubmit={handleEmailSubmit} />}
        {step === "pin" && <PinForm onSubmit={handlePinSubmit} />}
      </div>
    </div>
  );
};

export default LoginPage;
