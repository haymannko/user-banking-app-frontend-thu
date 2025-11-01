import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

type ShortCutCardProps = {
  card: {
    title: string;
    icon: LucideIcon;
    link: string;
  };
};

function ShortCutCard({ card }: ShortCutCardProps) {
  return (
    <Link
      to={card.link}
      className="
        w-full h-full flex flex-col md:p-3 rounded-2xl group transition-all duration-300
        hover:-translate-y-1
        md:hover:shadow-[0_6px_15px_rgba(0,0,0,0.08)]
        md:bg-white
      "
    >
      <div
        className="
          flex-2 min-h-12 w-full flex flex-col justify-center items-center
          bg-primary md:bg-white rounded-md md:rounded-2xl my-2
          
        "
      >
        <card.icon
          size={40}
          className="
            w-6 h-6 md:w-10 md:h-10
            text-white md:text-[#0A3D62]
            group-hover:text-[#227DBE]
            transition-colors duration-300
          "
        />
      </div>

      <p
        className="
          text-center flex-1 text-sm font-medium
          text-black-pearl-700 md:text-[#0A3D62]
          md:group-hover:text-[#227DBE]
          transition-colors
        "
      >
        {card.title}
      </p>
    </Link>
  );
}

export default ShortCutCard;
