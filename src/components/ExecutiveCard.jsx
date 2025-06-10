// src/components/ExecutiveCard.jsx

const ExecutiveCard = ({ image, name, title }) => {
  return (
    <div className="bg-white shadow rounded-xl overflow-hidden">
      <img src={image} alt={name} className="w-full h-60 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-[var(--primary)]">{name}</h3>
        <p className="text-sm text-gray-700">{title}</p>
      </div>
    </div>
  );
};

export default ExecutiveCard;
