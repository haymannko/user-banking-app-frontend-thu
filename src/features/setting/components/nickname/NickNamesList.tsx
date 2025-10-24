import type { Nickname } from "@/types/User";
import NickNamesBar from "./NickNamesBar";
import NickNamesBarSkeleton from "./NickNamesBarSkeleton";
import { useCallback } from "react";

type NickNamesListProps = {
  isEdit?: boolean;
  handleEdit: (data: Nickname) => void;
  nicknames: Nickname[];
  isLoading?: boolean;
};

function NickNamesList({
  isEdit,
  handleEdit,
  nicknames,
  isLoading,
}: NickNamesListProps) {
  const handleEditClick = useCallback(
    (nic: Nickname) => handleEdit(nic),
    [handleEdit]
  );

  if (isLoading) {
    return (
      <div>
        {Array.from({ length: 3 }).map((_, i) => (
          <NickNamesBarSkeleton key={i} className="mb-2" />
        ))}
      </div>
    );
  }

  return (
    <div>
      {nicknames.map((nic) => (
        <NickNamesBar
          className="mb-2"
          key={nic.id}
          id={nic.id}
          isEdit={isEdit}
          name={nic.nickname}
          accountNumber={nic.toAccountDetail.accountNumber}
          handleEdit={() => handleEditClick(nic)}
        />
      ))}
    </div>
  );
}

export default NickNamesList;
