import { Skeleton } from "@/components/ui/skeleton";
import QRWithLogo from "./QRWithLogo";

type QRToRecieveQRDisplayProps = {
  qr: string | null;
};

function QRToRecieveQRDisplay({ qr }: QRToRecieveQRDisplayProps) {
  return (
    <div className="flex  flex-1 flex-col justify-center h-full items-center w-full md:w-1/2 gap-5">
      <div className="text-center">
        <p className="text-sm text-black-pearl-400">
          Show this QR code to the cashier
        </p>
      </div>

      <div className="p-3">
        {qr ? (
          <QRWithLogo size={250} value={qr} />
        ) : (
          <Skeleton className="w-[250px] h-[250px]" />
        )}
      </div>

      <p className="text-black-pearl-700 font-semibold">Ko Aung Aung</p>
    </div>
  );
}

export default QRToRecieveQRDisplay;
