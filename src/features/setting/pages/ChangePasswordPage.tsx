import MobileHeader from "@/components/core/MobileHeader";
import ChangePasswordForm from "../components/change-password/ChangePasswordForm";
import SettingWedHeader from "../components/shared/SettingWedHeader";

function ChangePasswordPage() {
  return (
    <main className="h-full md:h-auto text-black-pearl-700 flex flex-col justify-between md:block md:p-2 md:max-w-4xl gap-5 bg-white">
      <SettingWedHeader
        title="Change Password"
        description="Update your password regularly to keep your account secure."
      />
      <MobileHeader title="Change Password" backTo="/settings" />
      <div className="flex-1">
        <ChangePasswordForm />
      </div>
    </main>
  );
}

export default ChangePasswordPage;
