// src/ui/landingpage/PartnersGrid.jsx

import SectionTitle from "@/components/SectionTitle";


const logos = Array.from({ length: 10 }, (_, i) => ({
  src: `/images/logo-${String(i + 1).padStart(2, "0")}.png`,
  href: "#",
}));

const PartnersGrid = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <SectionTitle>Partners and Sponsors</SectionTitle> 
      
      <div className=" mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center max-w-7xl mx-auto">
        {logos.map((logo, idx) => (
          <a
            key={idx}
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img
              src={logo.src}
              alt={`Logo ${idx + 1}`}
              className="max-h-16 object-contain w-full"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default PartnersGrid;
