// src/components/WhatWeDoCard.jsx
import Button from "@/components/ui/Button";

const WhatWeDoCard = ({ image, title, description, ctaText, link }) => {
  return (
    <div className="flex flex-col h-full bg-[#03823B] text-white rounded-2xl overflow-hidden shadow">
      <img src={image} alt={title} className="w-full h-52 object-cover" />
      <div className="flex flex-col justify-between flex-grow p-6">
        <div>
          <h3 className="text-lg font-bold mb-2 leading-snug">{title}</h3>
          <p className="text-sm leading-relaxed">{description}</p>
        </div>
        <div className="border-t border-white mt-6 pt-4">
          <a href={link}>
            <Button variant="tertiary" className="max-w-sm bg-[var(--destructive-foreground)] text-white">
              {ctaText}
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoCard;
// Usage example:
// <WhatWeDoCard