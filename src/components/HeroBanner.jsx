// src/components/HeroBanner.jsx

// src/components/HeroBanner.jsx
import Reveal from "./ui/Reveal";



const HeroBanner = ({ title, bgImage }) => {
  return (
    <section
      className="relative bg-cover bg-center h-80 text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Reveal delay={0.3} direction="fromTop">
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h1 className="text-4xl font-bold">{title}</h1>
      </div>
      </Reveal>
    </section>
  );
};

export default HeroBanner;
