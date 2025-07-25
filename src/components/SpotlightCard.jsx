import Button from "@/components/ui/Button";

const SpotlightCard = ({ item }) => {
  return (
<<<<<<< HEAD
    <div className="bg-white rounded-xl hover:shadow-lg transition-all h-[300px] shadow flex flex-col">
=======
    <div className="bg-white rounded-xl hover:shadow-lg transition-all h-[400px] shadow flex flex-col">
>>>>>>> dev
      <div className="rounded-lg overflow-hidden mb-4">
        <img
          src={item.image}
          alt={item.title}
<<<<<<< HEAD
          className="w-full h-40 object-center object-cover"
        />
      </div>
      <article className="p-4">
        <div className="flex items-center justify-between text-xs font-medium mb-2">
          <span className="uppercase text-gray-600">{item.category}</span>
          <Button
            className="bg-orange-600 text-white text-[11px] px-3 py-1 rounded-full"
=======
          className="w-full h-60 object-center object-cover"
        />
      </div>
      <article className="p-4">
        <div className="flex items-center justify-between text-s font-medium mb-2">
          <span className="uppercase text-gray-600">{item.category}</span>
          <Button
            className="font-bold bg-orange-600 text-white text-[12px] px-3 py-1 rounded-full"
>>>>>>> dev
            size="sm"
          >
            Learn More
          </Button>
        </div>
<<<<<<< HEAD
        <h3 className="font-bold text-sm mb-2">{item.title}</h3>
        <p className="text-xs text-gray-600 line-clamp-2">{item.description}</p>
=======
        <h3 className="font-bold text-xl mb-2">{item.title}</h3>
        <p className="text-s text-gray-600">{item.description}</p>
>>>>>>> dev
      </article>
    </div>
  );
};

export default SpotlightCard;
