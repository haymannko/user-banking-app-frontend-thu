import { useIsMobile } from "@/hooks/use-mobile";
import SettingMobile from "../components/setting/SettingMobile";
import SettingWeb from "../components/setting/SettingWeb";

function SettingPage() {
  const isMobile = useIsMobile();

  return <>{isMobile ? <SettingMobile /> : <SettingWeb />}</>;
}

export default SettingPage;
