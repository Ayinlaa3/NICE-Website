// src/components/HeroBanner.jsx

const HeroBanner = ({ title, bgImage }) => {
  return (
    <section
      className="relative bg-cover bg-center h-80 text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h1 className="text-4xl font-bold">{title}</h1>
      </div>
    </section>
  );
};

export default HeroBanner;
