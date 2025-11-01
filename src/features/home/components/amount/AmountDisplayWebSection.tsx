import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";

function AmountDisplayWebSection({
  totalBalance = "0.00",
}: {
  totalBalance?: string;
}) {
  const [isVisible, setIsVisible] = useState(true);

  const maskedValue = "**********";

  return (
    <div className="w-full flex flex-col bg-custom-secondary-500 rounded-xl p-5 shadow-md gap-2">
      <div className="flex items-center justify-between">
        <h3 className="text-primary/70 text-sm font-medium">
          Total Balance (MMK)
        </h3>

        <button
          type="button"
          onClick={() => setIsVisible((prev) => !prev)}
          className="text-primary/70 hover:text-primary transition"
        >
          {isVisible ? <Eye size={20} /> : <EyeClosed size={20} />}
        </button>
      </div>

      <p className="text-4xl font-bold text-primary break-words">
        {isVisible ? `${totalBalance} MMK` : maskedValue}
      </p>
    </div>
  );
}

export default AmountDisplayWebSection;
