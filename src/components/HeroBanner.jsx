// src/components/HeroBanner.jsx

// src/components/HeroBanner.jsx
import Reveal from "./ui/Reveal";

const HeroBanner = ({ title, subtitle }) => {
  return (
    <section className="relative flex flex-col items-center justify-center h-[60vh] bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <Reveal>
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
      </Reveal>
      <Reveal delay={0.3}>
        <p className="text-lg max-w-xl text-center">{subtitle}</p>
      </Reveal>
    </section>
  );
};

export default HeroBanner;



// const HeroBanner = ({ title, bgImage }) => {
//   return (
//     <section
//       className="relative bg-cover bg-center h-80 text-white"
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//         <h1 className="text-4xl font-bold">{title}</h1>
//       </div>
//     </section>
//   );
// };

// export default HeroBanner;
