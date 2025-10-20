import { Button } from "@/components/ui/button";
import NickNamesHeader from "../components/nickname/NickNamesHeader";
import NickNamesList from "../components/nickname/NickNamesList";
import SettingWedHeader from "../components/shared/SettingWedHeader";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import NickNamesForm from "../components/nickname/NickNamesForm";
import useNickNameUIAction from "../hooks/useNickNameUIAction";
import { useGetNicknameList } from "@/queries/users.query";
import PageLoading from "@/components/core/PageLoading";
import { dummyNickname } from "@/app/constants/dummyData";

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

  const { data: nicknames, isLoading } = useGetNicknameList();

  const nicknameData = nicknames?.data ?? dummyNickname;

  if (isLoading) {
    return <PageLoading />;
  }

  return (
    <main className="h-full md:h-auto text-black-pearl-700 flex flex-col justify-between md:block md:p-2 md:max-w-4xl gap-5 bg-white">
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <div>
          <SettingWedHeader
            title="Nicknames"
            description="your close friends and favourite person are here."
          />
          <NickNamesHeader isEdit={isEdit} editToggle={editToggle} />
          <NickNamesList
            isEdit={isEdit}
            handleEdit={handleOpenEdit}
            nicknames={nicknameData}
          />
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
