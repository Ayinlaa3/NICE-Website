import { Calender, Clock, Location, StarIcon } from "../ui/Icons";
import Tag from "./Tag";

const EventCard = () => {
  return (
    <div className="bg-white cursor-pointer hover:shadow-lg transition-shadow duration-300 rounded-xl overflow-hidden h-full flex flex-col">
      <div className="relative h-48 sm:h-56 md:h-64">
        <img
          src="/images/card_img.png"
          alt="Outreach"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <article className="flex flex-col gap-2 px-4 sm:px-5 md:px-6 py-3 sm:py-4 flex-grow">
        <Tag tag="Outreach" />

        <h2 className="text-[var(--primary)] font-bold text-base sm:text-lg leading-tight sm:leading-6 line-clamp-2">
          NICE SouthWest Regional Build-Right Workshop
        </h2>

        <ul className="text-sm sm:text-base border-t mt-3 sm:mt-4 space-y-2 pt-3 **:flex **:items-center **:gap-2.5">
          <li className="flex items-center gap-2 text-(--muted)">
            <Location className="flex-shrink-0" /> 
            <span className="line-clamp-1">UI Conference Centre, Ibadan</span>
          </li>
          <li className="flex items-center gap-2 text-(--muted)">
            <Calender className="flex-shrink-0" /> 
            <span>15 March 2025</span>
          </li>
          <li className="flex items-center gap-2 text-(--muted)">
            <Clock className="flex-shrink-0" /> 
            <span>10:00 AM - 2:00 PM WAT</span>
          </li>
        </ul>
      </article>
    </div>
  );
};

export default EventCard;