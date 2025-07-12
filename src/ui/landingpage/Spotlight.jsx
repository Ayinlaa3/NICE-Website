import Button from "@/components/ui/Button";
import SpotlightCard from "../../components/SpotlightCard";

const spotlightData = [
  {
    title: "Iconic Infrastructure of the Year",
    category: "Spotlight",
    description:
      "Celebrating the most innovative and impactful infrastructure project that advanced engineering excellence and public good.",
    image: "/images/spotlight1.png",
  },
  {
    title: "Civil Engineer of the Year",
    category: "Recognitions",
    description:
      "Honoring an outstanding civil engineer whose leadership, innovation, and dedication elevated the profession in Nigeria.",
    image: "/images/spotlight2.png",
  },
  {
    title: "Young Civil Engineer of the Year",
    category: "Recognitions",
    description:
      "Recognizing a rising star under 35 who has demonstrated excellence in civil engineering and community impact.",
    image: "/images/spotlight3.jpg",
  },
  {
    title: "Best Chapter of the Year",
    category: "Group Dynamics",
    description:
      "Awarded to the most vibrant and impactful NICE chapter that exemplified professional development and member engagement.",
    image: "/images/spotlight4.jpg",
  },
  {
    title: "Corporate Partner of the Year",
    category: "Awards",
    description:
      "Acknowledging a corporate organization whose support significantly advanced NICE’s mission and engineering practice.",
    image: "/images/spotlight5.png",
  },
  {
    title: "Best Chapter Award",
    category: "Awards",
    description:
      "Honoring the NICE chapter that has consistently demonstrated operational excellence, innovation, and community service.",
    image: "/images/spotlight6.png",
  },
];

const FeaturedSpotlights = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-10">
          Featured Spotlights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {spotlightData.map((item, index) => (
            <SpotlightCard item={item} key={index} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button>Submit Nominations</Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSpotlights;
