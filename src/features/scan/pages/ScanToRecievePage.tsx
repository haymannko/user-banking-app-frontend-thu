import ScanWithCamera from "../components/scan/ScanWithCamera";

function ScanToRecievePage() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="md:block hidden mb-4">
        <h1 className="text-3xl mb-2 text-center font-semibold text-black-pearl-700">
          Show Your QR Code to the Camera
        </h1>
        <p className="text-center text-sm text-black-pearl-400 max-w-[700px] mx-auto">
          Hold your phone’s QR code in front of the camera to receive payment.
          Make sure the QR is clearly visible and well-lit for accurate
          detection.
        </p>
      </div>
      <ScanWithCamera />
    </div>
  );
}

export default ScanToRecievePage;
