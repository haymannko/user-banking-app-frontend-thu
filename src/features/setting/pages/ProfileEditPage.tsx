import MobileHeader from "@/components/core/MobileHeader";
import { useIsMobile } from "@/hooks/use-mobile";
import SettingWedHeader from "../components/shared/SettingWedHeader";
import SettingProfileSection from "../components/setting/SettingProfileSection";
import ProfileEditForm from "../components/profile/ProfileEditForm";

function ProfileEditPage() {
  const isMobile = useIsMobile();

  return (
    <main className="h-full text-black-pearl-700 flex flex-col justify-start md:block md:p-2 md:max-w-4xl gap-5 bg-white">
      {isMobile ? (
        <MobileHeader
          title="Profile"
          backTo="/settings"
          titleClassName="text-start ps-10"
        />
      ) : (
        <SettingWedHeader
          title="Profile"
          description="update your photo and personal detail here."
        />
      )}
      <SettingProfileSection isEdit />
      <ProfileEditForm />
    </main>
  );
}

export default ProfileEditPage;
