import { errorToast } from "@/lib/helper/customToasts";
import { Scanner } from "@yudiel/react-qr-scanner";
import { useNavigate } from "react-router-dom";

function ScanWithCamera() {
  const navigate = useNavigate();

  const handleScan = (result: any) => {
    if (!result[0].rawValue) return;

    navigate(`/transfer?token=${result[0].rawValue}`);
  };

  const handleError = (error: any) => {
    errorToast("Scan Failed", error.message);
  };

  return (
    <div className="flex justify-center items-center w-full h-full md:h-auto">
      <div className="w-full h-full md:max-w-md md:h-auto md:rounded-md  overflow-hidden">
        <Scanner
          constraints={{ facingMode: { ideal: "environment" } }}
          allowMultiple
          scanDelay={3000}
          onScan={handleScan}
          onError={handleError}
        />
      </div>
    </div>
  );
}

export default ScanWithCamera;
