import type { Nickname } from "@/types/Nickname";
import NickNamesBar from "./NickNamesBar";

type NickNamesListProps = {
  isEdit?: boolean;
  handleEdit: (data: Nickname) => void;
};

function NickNamesList({ isEdit, handleEdit }: NickNamesListProps) {
  return (
    <div>
      <NickNamesBar
        className="mb-2"
        isEdit={isEdit}
        name="Mg Wai Gyi"
        accountNumber="25243234"
        handleEdit={handleEdit}
      />
      <NickNamesBar
        className="mb-2"
        isEdit={isEdit}
        name="Mg Wai Gyi"
        accountNumber="25243234"
        handleEdit={handleEdit}
      />
      <NickNamesBar
        className="mb-2"
        isEdit={isEdit}
        name="Mg Wai Gyi"
        accountNumber="25243234"
        handleEdit={handleEdit}
      />
      <NickNamesBar
        className="mb-2"
        isEdit={isEdit}
        name="Mg Wai Gyi"
        accountNumber="25243234"
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default NickNamesList;
