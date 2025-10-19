import { Button } from "@/components/ui/button";
import NickNamesHeader from "../components/nickname/NickNamesHeader";
import NickNamesList from "../components/nickname/NickNamesList";
import SettingWedHeader from "../components/shared/SettingWedHeader";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import NickNamesForm from "../components/nickname/NickNamesForm";
import useNickNameUIAction from "../hooks/useNickNameUIAction";

function NickNamesPage() {
  const {
    isEdit,
    editToggle,
    formData,
    handleOpenEdit,
    isFormOpen,
    setIsFormOpen,
    handleOpenCreate,
  } = useNickNameUIAction();

  return (
    <main className="h-full text-black-pearl-700 flex flex-col justify-between md:block md:p-2 md:max-w-4xl gap-5 bg-white">
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <div>
          <SettingWedHeader
            title="Nicknames"
            description="your close friends and favourite person are here."
          />
          <NickNamesHeader isEdit={isEdit} editToggle={editToggle} />
          <NickNamesList isEdit={isEdit} handleEdit={handleOpenEdit} />
        </div>
        <DialogContent>
          <NickNamesForm formData={formData} />
        </DialogContent>
        <DialogTrigger asChild>
          <Button
            onClick={handleOpenCreate}
            className="w-full py-5 mt-3 md:max-w-40 md:float-end"
          >
            Add New Nickname
          </Button>
        </DialogTrigger>
      </Dialog>
    </main>
  );
}

export default NickNamesPage;
