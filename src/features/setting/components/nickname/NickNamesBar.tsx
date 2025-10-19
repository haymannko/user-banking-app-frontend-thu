import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Nickname } from "@/types/Nickname";
import { Edit2 } from "lucide-react";

type NickNamesBarProps = {
  name: string;
  accountNumber: string;
  className?: string;
  isEdit?: boolean;
  handleEdit: (data: Nickname) => void;
};

function NickNamesBar({
  name,
  accountNumber,
  className,
  isEdit = false,
  handleEdit,
}: NickNamesBarProps) {
  return (
    <div className={cn("py-2 border-b relative", className)}>
      <h1 className="text-xl font-semibold text-black-pearl-700">{name}</h1>
      <p className="text-sm text-black-pearl-500 mb-2">
        Account No: {accountNumber}
      </p>
      {isEdit && (
        <Button
          variant="ghost"
          onClick={() =>
            handleEdit({ accountNumber: accountNumber, nickname: name })
          }
          className="absolute cursor-pointer text-black-pearl-700 top-2 right-2"
        >
          <Edit2 />
        </Button>
      )}
    </div>
  );
}

export default NickNamesBar;
