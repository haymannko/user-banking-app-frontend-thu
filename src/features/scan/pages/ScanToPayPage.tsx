import { useIsMobile } from "@/hooks/use-mobile";
import ScanWithCamera from "../components/scan/ScanWithCamera";
import ScanWithUploadQR from "../components/scan/ScanWithUploadQR";
import MobileHeader from "@/components/core/MobileHeader";

function ScanToPayPage() {
  const isMobile = useIsMobile();

  return (
    <div className="w-full h-full relative  md:p-5 flex justify-center items-center bg-white">
      <MobileHeader
        title="Scan to Pay"
        className="absolute top-5 left-1/2 -translate-x-1/2 text-white z-20 w-4/5"
      />
      {isMobile ? <ScanWithCamera /> : <ScanWithUploadQR />}
    </div>
  );
}

export default ScanToPayPage;
