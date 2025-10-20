import { useState } from "react";
import { Button } from "@/components/ui/button";

type PassportFormProps = {
  onSubmit: (passportData: { frontPhoto: File; backPhoto: File }) => void;
  onBack: () => void;
};

const PassportForm: React.FC<PassportFormProps> = ({ onSubmit, onBack }) => {
  const [frontPhoto, setFrontPhoto] = useState<File | null>(null);
  const [backPhoto, setBackPhoto] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (frontPhoto && backPhoto) {
      onSubmit({ frontPhoto, backPhoto });
    } else {
      alert("Please upload both front and back photos of your passport");
    }
  };

  const renderPhotoBox = (
    label: string,
    file: File | null,
    setFile: (file: File | null) => void
  ) => (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-sm text-gray-700">{label}</label>
      <div className="relative border-2 border-dashed border-gray-300 rounded-lg h-64 sm:h-80 flex items-center justify-center overflow-hidden">
        {file ? (
          <>
            <img
              src={URL.createObjectURL(file)}
              alt={label}
              className="h-full object-cover rounded-md w-full"
            />
            <button
              type="button"
              onClick={() => setFile(null)}
              className="absolute top-1 right-1 bg-white bg-opacity-80 text-gray-600 hover:text-red-600 px-2 py-1 rounded text-xs shadow-sm"
            >
              ✕
            </button>
          </>
        ) : (
          <label className="flex flex-col items-center justify-center w-full h-full cursor-pointer">
            <span className="text-4xl text-gray-400">+</span>
            <span className="text-sm text-gray-400 mt-1">Upload Photo</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          </label>
        )}
      </div>
    </div>
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 max-w-4xl mx-auto bg-white p-6 rounded-lg"
    >
      <p>Please select clear photos of your passport</p>

      {/* Side-by-side layout on desktop, stacked on mobile */}
      <div className="flex flex-col gap-6 sm:flex-row">
        <div className="w-full sm:w-1/2">
          {renderPhotoBox("Capture Front Side", frontPhoto, setFrontPhoto)}
        </div>
        <div className="w-full sm:w-1/2">
          {renderPhotoBox("Capture Back Side", backPhoto, setBackPhoto)}
        </div>
      </div>

      <div className="flex justify-between gap-4">
        <Button type="button" variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button type="submit">Continue</Button>
      </div>
    </form>
  );
};

export default PassportForm;
