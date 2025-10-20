import type { Nickname } from "@/types/User";
import { useCallback, useState } from "react";

function useNickNameUIAction() {
  //* UI handler for nickname module

  //*form dialog
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [formData, setFromData] = useState<Nickname | null>(null);

  //*edit mode
  const [isEdit, setIsEdit] = useState<boolean>(false);
  //*toggle edit
  const editToggle = () => {
    setIsEdit((prev) => !prev);
  };

  //* to open form dialog with selected data
  const handleOpenEdit = useCallback(
    (data: Nickname) => {
      if (!isEdit) return;

      setFromData(data);
      setIsFormOpen(true);
    },
    [isEdit, formData, setIsFormOpen]
  );

  //* clear form data on create
  const handleOpenCreate = useCallback(() => {
    setFromData(null);
    setIsFormOpen(false);
  }, [setFromData, setIsFormOpen]);

  return {
    isEdit,
    editToggle,
    isFormOpen,
    setIsFormOpen,
    formData,
    handleOpenEdit,
    handleOpenCreate,
  };
}

export default useNickNameUIAction;
