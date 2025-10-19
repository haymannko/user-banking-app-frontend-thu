import SettingMenuItems from "@/features/setting/components/shared/SettingMenuItems";
import { Outlet } from "react-router-dom";

function SettingLayout() {
  return (
    <div className="w-full h-full bg-white p-5">
      <SettingMenuItems className="mb-5 md:block hidden" />
      <Outlet />
    </div>
  );
}

export default SettingLayout;
