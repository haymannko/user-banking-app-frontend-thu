import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { LogOut } from "lucide-react";
import SettingProfileSection from "./SettingProfileSection";
import SettingWedHeader from "../shared/SettingWedHeader";

function SettingWeb() {
  return (
    <div className="p-2 max-w-4xl bg-white">
      <SettingWedHeader
        title="Info"
        description="setting display description"
      />
      <SettingProfileSection />

      <div className="grid grid-cols-2 gap-4">
        {/* Auto Save Receipt */}
        <div className="border rounded-xl p-4 flex justify-between items-center bg-white shadow-sm hover:shadow-md transition">
          <span className="text-sm text-gray-600">Auto Save Receipt</span>
          <Switch />
        </div>

        {/* Password */}
        <div className="border rounded-xl p-4 flex justify-between items-center bg-white shadow-sm hover:shadow-md transition">
          <span className="text-sm text-gray-600">Password</span>
          <p className="font-medium text-black-pearl-700">••••••••••••••••</p>
        </div>

        {/* Transaction PIN */}
        <div className="border rounded-xl p-4 flex justify-between items-center bg-white shadow-sm hover:shadow-md transition">
          <span className="text-sm text-gray-600">Transaction PIN</span>
          <p className="font-medium text-black-pearl-700">••••••••••••••••</p>
        </div>

        {/* Nickname */}
        <div className="border rounded-xl p-4 flex justify-between items-center bg-white shadow-sm hover:shadow-md transition">
          <span className="text-sm text-gray-600">Nicknames</span>
          <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/maxleiter.png"
                alt="@maxleiter"
              />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Current Account */}
        <div className="border rounded-xl p-4 flex justify-between items-center bg-white shadow-sm hover:shadow-md transition">
          <span className="text-sm text-gray-600">Current Account</span>
          <p className="font-medium text-black-pearl-700">Main Account</p>
        </div>

        <div className="border rounded-xl p-4 flex gap-3 justify-start items-center bg-white shadow-sm hover:shadow-md transition">
          <span className="text-sm text-red-600">
            <LogOut />
          </span>
          <p className="font-medium text-black-pearl-700">Log Out</p>
        </div>
      </div>
    </div>
  );
}

export default SettingWeb;
