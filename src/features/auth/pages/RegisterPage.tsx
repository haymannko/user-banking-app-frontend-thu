import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import LicenseForm from "../components/LicenseUpload";
import PassportForm from "../components/PassportForm";
import FaceScanForm from "../components/FaceScanForm";
import EmailVeriflyForm from "../components/EmailVeriflyForm";
import { useVerifyEmail } from "@/queries/auth.query";
import MobileHeader from "@/components/core/MobileHeader";

type Step = "verify-email" | "register" | "license" | "passport" | "webcam";

type FormData = {
  fullName: string;
  email: string;
  gender: string;
  nationality: string;
  idType: string;
  year: string;
  month: string;
  day: string;
};

type LicenseData = {
  frontPhoto: File;
  backPhoto: File;
};

type PassportData = {
  frontPhoto: File;
  backPhoto: File;
};

const RegisterPage: React.FC = () => {
  const [step, setStep] = useState<Step>("verify-email");
  const [userData, setUserData] = useState<FormData | null>(null);
  const [idPhotos, setIdPhotos] = useState<LicenseData | PassportData | null>(
    null
  );

  const { mutateAsync: verify, isPending } = useVerifyEmail();

  const handleVerify = async (value: { email: string }) => {
    await verify(value);
    setStep("register");
  };

  const handleRegisterSubmit = (data: FormData) => {
    setUserData(data);
    setStep(data.idType === "License" ? "license" : "passport");
  };

  const handleLicenseSubmit = (licenseData: LicenseData) => {
    console.log("Collected License:", { ...userData, ...licenseData });
    setIdPhotos(licenseData);
    setStep("webcam");
  };

  const handlePassportSubmit = (passportData: PassportData) => {
    console.log("Collected Passport:", { ...userData, ...passportData });
    setIdPhotos(passportData);
    setStep("webcam");
  };

  const handleFaceScanSubmit = (photoData: Blob) => {
    console.log("FaceScan Blob:", photoData);
    // Combine all data and maybe send to backend
    const payload = {
      userData,
      idPhotos,
      faceScanBlob: photoData,
    };
    console.log("🟢 Final payload ready:", payload);
    // For now, we just log. Later you can trigger API or WebSocket send.
  };

  const getTitle = () => {
    switch (step) {
      case "verify-email":
        return "Email Verify";
      case "register":
        return "Personal Details";
      case "license":
        return "Add Photo of Your License";
      case "passport":
        return "Add Photo of Your Passport";
      case "webcam":
        return "Verify with a Scan";
      default:
        return "";
    }
  };

  const getSubtitle = () => {
    switch (step) {
      case "verify-email":
        return "Verify your email address";
      case "webcam":
        return "Turn your head left and right";
      default:
        return "Tell us about you";
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-[400px] text-black-pearl-700 md:bg-white md:rounded-lg md:shadow-lg p-5 mx-auto">
        <MobileHeader
          title={getTitle()}
          className="bg-transparent md:block p-0 text-black-pearl-700"
          isShowBackIcon={false}
        />
        <p className="text-xs sm:text-sm text-gray-500 mb-8 text-center">
          {getSubtitle()}
        </p>

        {step === "verify-email" && (
          <EmailVeriflyForm handleSubmit={handleVerify} isPending={isPending} />
        )}

        {step === "register" && (
          <RegisterForm onSubmit={handleRegisterSubmit} />
        )}

        {step === "license" && (
          <LicenseForm
            onSubmit={handleLicenseSubmit}
            onBack={() => setStep("register")}
          />
        )}

        {step === "passport" && (
          <PassportForm
            onSubmit={handlePassportSubmit}
            onBack={() => setStep("register")}
          />
        )}

        {step === "webcam" && (
          <FaceScanForm
            onBack={() =>
              userData?.idType === "License"
                ? setStep("license")
                : setStep("passport")
            }
            onSubmit={handleFaceScanSubmit}
            onContinue={() => {
              console.log("Continue pressed after scan.");
            }}
          />
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
