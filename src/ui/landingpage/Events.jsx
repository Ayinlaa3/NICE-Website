// src/ui/landingpage/Events.jsx
import Button from "@/components/ui/Button";
import EventCard from "@/components/EventCard";
import { Link } from "react-router-dom";

const EVENTS = [
  {

    // image: "/images/card_img.png",
    image: "/images/event1.jpg",
    tag: "Training",
    title: "NICE SouthWest Regional Build-Right Workshop",
    location: "UI Conference Centre, Ibadan",
    date: "15 March 2025",
    time: "10:00 AM - 2:00 PM WAT",
  },
  {
    image: "/images/event2.jpg",
    tag: "Technical Tour",
    title: "International Technical Tour to Denmark and Sweden",
    location: "Copenhagen and Malmö",
    date: "25 Aug 2025",
    time: "8:00 AM CET Daily",
  },
  {
    image: "/images/event3.png",
    tag: "Conference",
    title: "2025 International Conference and AGM",
    location: "Coronation Hall, Kano State",
    date: "21 - 23 Oct 2025",
    time: "9:00 AM WAT Daily",
  },
];

const Events = () => {
  return (
    <div className="bg-(--accent) flex flex-col items-center gap-10 p-40 py-20">
      <h2 className="font-extrabold text-4xl">Upcoming Events</h2>

      <div className="grid mx-auto container grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {EVENTS.map((event, idx) => (
          <EventCard key={idx} {...event} />
        ))}
      </div>

      <Link to="/events">
           <Button>View all Events</Button>
           </Link>
    </div>
  );
};

export default Events;







// import Button from "@/components/ui/Button";
// import EventCard from "../../components/EventCard";

// const Events = () => {
//   return (
//     <div className="bg-(--accent) flex flex-col items-center gap-10 p-25 py-20">
//       <h2 className="font-extrabold text-4xl">Upcoming Events</h2>

//       <div className="grid mx-auto container grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//         <EventCard />
//         <EventCard />
//         <EventCard />
//       </div>

//       <Button>View all Events</Button>
//     </div>
//   );
// };

// export default Events;
