import Button from "@/components/ui/Button";
import EventCard from "../../components/EventCard";

const Events = () => {
  return (
    <section className="bg-(--accent) flex flex-col items-center gap-6 md:gap-8 lg:gap-10 p-4 md:p-6 lg:p-8 xl:p-25 py-10 md:py-16 lg:py-20">
      <div className="text-center">
        <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl mb-2 md:mb-4">Upcoming Events</h2>
        <p className="text-sm md:text-base text-(--muted) max-w-2xl mx-auto">
          Stay updated with our latest events, workshops, and conferences. Join us in shaping the future of civil engineering.
        </p>
      </div>

      <div className="grid mx-auto container grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>

      <Button className="mt-4 md:mt-6">View all Events</Button>
    </section>
  );
};

export default Events;
