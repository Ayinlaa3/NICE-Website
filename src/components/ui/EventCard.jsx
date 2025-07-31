// src/components/ui/EventCard.jsx
const EventCard = ({ image, tag, title, location, date, time }) => {
  return (
    <div className="bg-white shadow rounded-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <span className="text-xs uppercase text-green-700 font-semibold">
          {tag}
        </span>
        <h2 className="text-lg font-bold mb-1">{title}</h2>
        <p className="text-sm text-gray-600">{location}</p>
        <p className="text-sm text-gray-500">{date} | {time}</p>
      </div>
    </div>
  );
};

export default EventCard;