// src/components/ui/PublicationCard.jsx
const PublicationCard = ({ cover, file }) => {
  return (
    <div className="bg-white shadow rounded-md overflow-hidden">
      <img src={cover} alt="Publication cover" className="w-full h-64 object-cover" />
      <div className="p-4">
        <a
          href={file}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 font-semibold hover:underline"
        >
          View / Download PDF
        </a>
      </div>
    </div>
  );
};

export default PublicationCard;