// src/pages/Events.jsx
import TabSwitcher from "../components/ui/TabSwitcher";
import EventCard from "../components/ui/EventCard";
import eventsData from "../data/events.json";

const getUniqueTags = (data) => {
  const tags = new Set(data.map((event) => event.tag));
  return ["All", ...Array.from(tags)];
};

const Events = () => {
  const categories = getUniqueTags(eventsData);

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Events</h1>
      <TabSwitcher tabs={categories}>
        {categories.map((category) => (
          <div
            key={category}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {eventsData
              .filter((item) => category === "All" || item.tag === category)
              .map((item, index) => (
                <EventCard key={index} {...item} />
              ))}
          </div>
        ))}
      </TabSwitcher>
    </div>
  );
};

export default Events;