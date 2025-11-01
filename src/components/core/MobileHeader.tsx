import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface MobileHeaderProps {
  title: string;
  backTo?: string;
  iconSize?: number;
  className?: string;
  titleClassName?: string;
  isShowBackIcon?: boolean;
}

export default function MobileHeader({
  title,
  backTo = "/",
  iconSize = 30,
  className = "",
  titleClassName,
  isShowBackIcon = true,
}: MobileHeaderProps) {
  return (
    <div
      className={cn(
        "relative w-full mb-2 md:hidden py-[10px] px-[32px] text-white",
        className
      )}
    >
      <h1 className={cn("text-center text-2xl font-semibold", titleClassName)}>
        {title}
      </h1>
      {isShowBackIcon && (
        <Link
          to={backTo}
          className="absolute left-[32px] top-0 bottom-0 m-auto h-fit"
        >
          <ChevronLeft size={iconSize} />
        </Link>
      )}
    </div>
  );
}
