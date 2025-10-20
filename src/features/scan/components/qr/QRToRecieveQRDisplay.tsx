import QRWithLogo from "./QRWithLogo";

function QRToRecieveQRDisplay() {
  return (
    <div className="flex  flex-1 flex-col justify-center h-full items-center w-full md:w-1/2 gap-5">
      <div className="text-center">
        <h1 className="text-xl font-semibold tracking-wide text-black-pearl-700">
          XXX XXX 4643
        </h1>
        <p className="text-sm text-black-pearl-400">
          Show this QR code to the cashier
        </p>
      </div>

      <div className="p-3">
        <QRWithLogo size={250} value="Hello World" />
      </div>

      <p className="text-black-pearl-700 font-semibold">Ko Aung Aung</p>
    </div>
  );
}

export default QRToRecieveQRDisplay;
