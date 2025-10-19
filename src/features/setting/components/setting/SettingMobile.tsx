import MobileHeader from "@/components/core/MobileHeader";
import SettingItemSection from "./SettingItemSection";
import SettingProfileSection from "./SettingProfileSection";

function SettingMobile() {
  return (
    <main className="h-full text-black-pearl-700 flex flex-col gap-5 bg-white">
      <MobileHeader title="Setting" titleClassName="text-start ps-10" />
      <SettingProfileSection />
      <SettingItemSection />
    </main>
  );
}

export default SettingMobile;
