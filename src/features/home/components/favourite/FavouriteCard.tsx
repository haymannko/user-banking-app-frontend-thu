import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowLeftRight } from "lucide-react";
import FavouriteCardContainer from "./FavouriteCardContainer";

function FavouriteCard() {
  return (
    <FavouriteCardContainer
      className="
        bg-primary 
        hover:bg-primary/95
        md:bg-gradient-to-br md:from-[#0A3D62] md:to-[#227DBE]
        rounded-xl
        flex justify-between items-center
        transition-all duration-300
        shadow-sm md:hover:shadow-md
        hover:-translate-y-[1px]
        px-3 py-2
        group
      "
    >
      {/* Left Section: Avatar + Info */}
      <div className="flex items-center gap-2.5">
        <Avatar className="w-10 h-10 transition-transform duration-200 group-hover:scale-105 border border-white/20">
          <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
          <AvatarFallback className="bg-white/20 text-white font-semibold text-xs">
            CN
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col leading-tight">
          <p className="text-sm font-medium text-white">Aung</p>
          <p className="text-[11px] text-white/70">Acc No: 09234567</p>
        </div>
      </div>

      {/* Transfer Button */}
      <Button
        size="icon"
        className="
          w-8 h-8 rounded-full 
          bg-white/15 hover:bg-white/25 
          text-white
          transition-colors duration-200
          flex items-center justify-center
        "
      >
        <ArrowLeftRight size={16} />
      </Button>
    </FavouriteCardContainer>
  );
}

export default FavouriteCard;
