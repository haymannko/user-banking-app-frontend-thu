import Spinner from "@/components/common/Spinner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useDeleteNickname } from "@/queries/users.query";
import { Edit2, Trash } from "lucide-react";

type NickNamesBarProps = {
  id: number;
  name: string;
  accountNumber: string;
  className?: string;
  isEdit?: boolean;
  handleEdit: () => void;
};

function NickNamesBar({
  id,
  name,
  accountNumber,
  className,
  isEdit = false,
  handleEdit,
}: NickNamesBarProps) {
  const { mutate: deleteNickname, isPending } = useDeleteNickname();

  return (
    <div className={cn("py-2 border-b relative", className)}>
      <h1 className="text-xl font-semibold text-black-pearl-700">{name}</h1>
      <p className="text-sm text-black-pearl-500 mb-2">
        Account No: {accountNumber}
      </p>
      <div className="absolute top-2 right-2">
        {isEdit && (
          <Button
            variant="ghost"
            onClick={handleEdit}
            className=" cursor-pointer text-black-pearl-700 top-2 right-2"
          >
            <Edit2 />
          </Button>
        )}
        <Button
          variant="ghost"
          onClick={() => deleteNickname(id)}
          className=" cursor-pointer text-black-pearl-700 top-2 right-2"
        >
          {isPending ? <Spinner /> : <Trash />}
        </Button>
      </div>
    </div>
  );
}

export default NickNamesBar;
