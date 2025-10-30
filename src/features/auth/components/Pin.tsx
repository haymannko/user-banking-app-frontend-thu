import React, { useRef, useEffect } from "react";

import { Button } from "@/components/ui/button";

type PinFormProps = {
  onSubmit: (pin: string) => void;
};

const PinForm: React.FC<PinFormProps> = ({ onSubmit }) => {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const [pin, setPin] = React.useState(["", "", "", ""]);

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  const setInputRef = (el: HTMLInputElement | null, idx: number) => {
    inputsRef.current[idx] = el;
  };

  const handleChange = (value: string, idx: number) => {
    if (!/^\d?$/.test(value)) return;

    const newPin = [...pin];
    newPin[idx] = value;
    setPin(newPin);

    if (value && idx < 3) {
      inputsRef.current[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    idx: number
  ) => {
    if (e.key === "Backspace") {
      if (pin[idx] === "") {
        if (idx > 0) {
          inputsRef.current[idx - 1]?.focus();
          const newPin = [...pin];
          newPin[idx - 1] = "";
          setPin(newPin);
          e.preventDefault();
        }
      } else {
        const newPin = [...pin];
        newPin[idx] = "";
        setPin(newPin);
      }
    }
  };

  const handleKeypadClick = (num: string) => {
    const firstEmptyIndex = pin.findIndex((d) => d === "");
    if (firstEmptyIndex === -1) return;

    const newPin = [...pin];
    newPin[firstEmptyIndex] = num;
    setPin(newPin);

    if (firstEmptyIndex < 3) {
      inputsRef.current[firstEmptyIndex + 1]?.focus();
    }
  };

  const handleDelete = () => {
    const lastFilledIndex = pin.map((d) => d !== "").lastIndexOf(true);
    if (lastFilledIndex === -1) return;

    const newPin = [...pin];
    newPin[lastFilledIndex] = "";
    setPin(newPin);
    inputsRef.current[lastFilledIndex]?.focus();
  };

  const isComplete = pin.every((d) => d !== "");

  const handleContinue = () => {
    if (isComplete) {
      onSubmit(pin.join(""));
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 px-4 w-full max-w-sm mx-auto">
      <p className="text-center text-sm sm:text-base mb-2 font-medium">
        Enter your PIN
      </p>

      {/* PIN Inputs */}
      <div className="flex justify-center gap-4">
        {pin.map((digit, idx) => (
          <input
            key={idx}
            type="tel"
            inputMode="numeric"
            maxLength={1}
            className="w-12 h-12 sm:w-14 sm:h-14 border border-gray-300 rounded-md text-center text-xl sm:text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={digit}
            onChange={(e) => handleChange(e.target.value, idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            ref={(el) => setInputRef(el, idx)}
            readOnly
          />
        ))}
      </div>

      {/* Numeric Keypad */}
      <div className="grid grid-cols-3 gap-4 mt-4 w-full">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <button
            key={num}
            type="button"
            onClick={() => handleKeypadClick(num.toString())}
            className="bg-gray-200 rounded-md py-3 text-xl font-semibold hover:bg-gray-300 active:bg-gray-400 focus:outline-none"
          >
            {num}
          </button>
        ))}

        {/* 0 spans 2 columns */}
        <button
          type="button"
          onClick={() => handleKeypadClick("0")}
          className="col-span-2 bg-gray-200 rounded-md py-3 text-xl font-semibold hover:bg-gray-300 active:bg-gray-400 focus:outline-none"
        >
          0
        </button>

        {/* Delete Button */}
        <button
          type="button"
          onClick={handleDelete}
          className="bg-red-500 text-white rounded-md py-3 text-xl font-semibold hover:bg-red-600 active:bg-red-700 focus:outline-none"
        >
          Del
        </button>
      </div>

      {/* Continue Button under keypad */}
      <div className="mt-6 w-full">
        <Button
          onClick={handleContinue}
          disabled={!isComplete}
          className={`w-full py-3 text-lg  text-white ${
            isComplete ? "" : "bg-blue-300 cursor-not-allowed"
          }`}
          type="button"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default PinForm;
