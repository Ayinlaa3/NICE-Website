// src/components/ui/NewsCard.jsx
const NewsCard = ({ title, image, date, category }) => {
  return (
    <div className="bg-white shadow rounded-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-xs uppercase text-gray-500 mb-1">{category}</p>
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-sm text-gray-400">{date}</p>
      </div>
    </div>
  );
};

export default NewsCard;
