import MobileHeader from "@/components/core/MobileHeader";
import { Button } from "@/components/ui/button";

type NickNamesHeaderProps = {
  isEdit?: boolean;
  editToggle?: () => void;
};

function NickNamesHeader({ isEdit, editToggle }: NickNamesHeaderProps) {
  return (
    <div>
      <MobileHeader
        className="text-black-pearl-700"
        backTo="/settings"
        title="Nicknames"
      />
      <div className="w-full flex justify-end">
        <Button
          onClick={editToggle}
          variant="outline"
          className="text-xs text-black-pearl-700"
        >
          {!isEdit ? "Edit" : "Done"}
        </Button>
      </div>
    </div>
  );
}

export default NickNamesHeader;
