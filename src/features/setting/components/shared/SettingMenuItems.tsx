import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { cn } from "@/lib/utils";
import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

type SettingMenuItemsProps = {
  className?: string;
};

function SettingMenuItems({ className }: SettingMenuItemsProps) {
  const location = useLocation();
  const path = location.pathname
    .split("/")
    .filter((_, i) => i !== 3)
    .join("/");

  const menuItems = useMemo(() => {
    return [
      { name: "Info", path: "/settings" },
      { name: "Profile", path: "/settings/profile" },
      { name: "Change Password", path: "/settings/change-password" },
      { name: "Switch Account", path: "/settings/switch-account" },
      { name: "Change Transaction Pin", path: "/settings/change-pin" },
      { name: "Nickname Setup", path: "/settings/nickname" },
    ];
  }, []);

  return (
    <ButtonGroup className={cn("flex flex-wrap gap-2", className)}>
      {menuItems.map((item) => (
        <Button
          key={item.path}
          asChild
          variant={path === item.path ? "default" : "outline"}
          className="text-sm"
        >
          <Link to={item.path}>{item.name}</Link>
        </Button>
      ))}
    </ButtonGroup>
  );
}

export default SettingMenuItems;
