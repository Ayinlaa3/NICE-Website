// src/components/SectionTitle.jsx

// src/components/SectionTitle.jsx
import Reveal from "./ui/Reveal";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <Reveal>
        <h2 className="text-3xl font-bold">{title}</h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className="text-gray-600 mt-2">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
};

export default SectionTitle;



// const SectionTitle = ({ children }) => {
//   return (
//     <h2 className="mb-6 font-extrabold text-4xl text-center">
//       {children}
//     </h2>
//   );
// };

// export default SectionTitle;
