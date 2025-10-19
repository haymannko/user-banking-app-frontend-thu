import MobileHeader from "@/components/core/MobileHeader";
import SettingProfileSection from "../components/setting/SettingProfileSection";
import { useIsMobile } from "@/hooks/use-mobile";
import SettingWedHeader from "../components/shared/SettingWedHeader";
import ProfileInfoSection from "../components/profile/ProfileInfoSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function ProfilePage() {
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
      <ProfileInfoSection />
      <Button className="w-full py-5 mt-3 md:max-w-40 md:float-end" asChild>
        <Link to="/settings/profile/edit">Edit</Link>
      </Button>
    </main>
  );
}

export default ProfilePage;
