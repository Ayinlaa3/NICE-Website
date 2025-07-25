const TestimonialCard = ({ name, quote, imageSrc }) => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center p-4">
      <div className="rounded-full w-64 h-64 flex items-center justify-center shadow-lg">
        <img
<<<<<<< HEAD
          className="w-full h-full rounded-full object-center object-cover shadow-md"
=======
          className="w-full h-full rounded-full object-center object-cover shadow-md bg-white"
>>>>>>> dev
          src={imageSrc}
          alt={name}
        />
      </div>
<<<<<<< HEAD
      <div className="bg-white bg-opacity-80 p-4">
        <p className="text-sm italic text-gray-700 mb-2">&quot;{quote}&quot;</p>
        <p className="text-xs font-extrabold">--{name}</p>
=======
      <div className="bg-white bg-opacity-80 p-5 h-[120px] justify-center flex flex-col items-center text-center rounded-lg shadow-md">
        <p className="text-sm italic text-gray-700 mb-2 h-[58px]">&quot;{quote}&quot;</p>
        <p className="text-xs font-extrabold">-- {name}</p>
>>>>>>> dev
      </div>
    </div>
  );
};

export default TestimonialCard;
