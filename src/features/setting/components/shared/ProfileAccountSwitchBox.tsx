import Spinner from "@/components/common/Spinner";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useGetFromAccounts } from "@/queries/users.query";
import type { SwitchAccountDetail } from "@/types/User";
import { Check, Wallet } from "lucide-react";
import { useState } from "react";

type Props = {
  onChange?: (account: SwitchAccountDetail | null) => void;
  className?: string;
};

function ProfileAccountSwitchBox({ onChange, className }: Props) {
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const { data: accounts, isLoading } = useGetFromAccounts({
    enabled: !!open,
  });

  const options = accounts?.data.fromAccountsOptions || [];

  const handleSelect = (idStr: string) => {
    const id = Number(idStr);
    const newValue = id === selectedId ? null : id;
    setSelectedId(newValue);
    onChange?.(options.find((o) => o.id === newValue) || null);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className={cn("p-2", className)}
          aria-expanded={open}
        >
          <Wallet className="w-5 h-5" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[220px] mr-2 p-0">
        <Command>
          <CommandInput placeholder="Search..." className="h-9" />
          <CommandList>
            <CommandEmpty>
              {isLoading ? (
                <span className="flex justify-center items-center gap-2">
                  loading.. <Spinner />
                </span>
              ) : (
                "no accounts"
              )}
            </CommandEmpty>
            <CommandGroup>
              {options.map((opt) => (
                <CommandItem
                  key={opt.id}
                  value={String(opt.id)}
                  onSelect={handleSelect}
                >
                  <div className="flex flex-col">
                    <span className="font-medium">{opt.accountNumber}</span>
                    <span className="text-xs opacity-70">
                      Balance: {opt.balance.toLocaleString()} Ks
                    </span>
                  </div>

                  <Check
                    className={cn(
                      "ml-auto",
                      selectedId === opt.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default ProfileAccountSwitchBox;
