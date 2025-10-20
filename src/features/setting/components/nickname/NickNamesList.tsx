import type { Nickname } from "@/types/User";
import NickNamesBar from "./NickNamesBar";
import { useCallback } from "react";

type NickNamesListProps = {
  isEdit?: boolean;
  handleEdit: (data: Nickname) => void;
  nicknames: Nickname[];
};

function NickNamesList({ isEdit, handleEdit, nicknames }: NickNamesListProps) {
  const handleEditClick = useCallback(
    (nic: Nickname) => handleEdit(nic),
    [handleEdit]
  );

  return (
    <div>
      {nicknames.map((nic) => {
        return (
          <NickNamesBar
            className="mb-2"
            key={nic.id}
            isEdit={isEdit}
            name={nic.nickname}
            accountNumber={nic.toAccountDetail.accountNumber}
            handleEdit={() => handleEditClick(nic)}
          />
        );
      })}
    </div>
  );
}

export default NickNamesList;
