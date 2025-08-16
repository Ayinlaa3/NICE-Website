// src/components/SectionTitle.jsx

// src/components/SectionTitle.jsx
import Reveal from "./ui/Reveal";

const SectionTitle = ({ children }) => {
  return (
   <Reveal delay={0.2}>
     <h2 className="mb-6 font-extrabold text-4xl text-center">
      {children}
    </h2>
   </Reveal> 
  );
};

export default SectionTitle;
