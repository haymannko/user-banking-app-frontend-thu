import React, { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";

type FaceScanFormProps = {
  onSubmit: (photoData: Blob) => void;
  onBack: () => void;
  onContinue: () => void;
};

const FaceScanForm: React.FC<FaceScanFormProps> = ({
  onSubmit,
  onBack,
  onContinue,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Start camera
  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" },
          audio: false,
        });
        streamRef.current = stream;
        if (videoRef.current) videoRef.current.srcObject = stream;
      } catch (err) {
        console.error("Error accessing camera", err);
        alert("Could not access camera. Please allow camera permissions.");
      }
    };

    startCamera();

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  // Capture photo
  const handleCapture = () => {
    const video = videoRef.current;
    if (!video) return;

    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    canvas.toBlob((blob) => {
      if (!blob) return;

      onSubmit(blob);
      onContinue();
    }, "image/jpeg");
  };

  return (
    <div className="flex flex-col items-center gap-6 px-4 py-6 w-full max-w-4xl mx-auto">
      <div className="w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] max-h-[90vh] rounded-lg overflow-hidden shadow-md border border-gray-300 bg-black">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <Button variant="outline" onClick={onBack} className="w-full sm:w-1/2">
          Back
        </Button>
        <Button onClick={handleCapture} className="w-full sm:w-1/2">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default FaceScanForm;
