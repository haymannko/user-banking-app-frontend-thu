import { successToast } from "@/lib/helper/customToasts";
import { Scanner } from "@yudiel/react-qr-scanner";

function ScanWithCamera() {
  return (
    <div className="flex justify-center items-center w-full h-full md:h-auto">
      <div className="w-full h-full md:max-w-md md:h-auto md:rounded-md  overflow-hidden">
        <Scanner
          constraints={{ facingMode: { ideal: "environment" } }}
          allowMultiple
          scanDelay={3000}
          onScan={(result) => successToast("Scan Success", result[0].rawValue)}
          onError={console.error}
        />
      </div>
    </div>
  );
}

export default ScanWithCamera;
