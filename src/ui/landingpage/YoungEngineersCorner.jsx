// src/ui/landingpage/YoungEngineersCorner.jsx
import { FaBriefcase, FaUniversity } from "react-icons/fa";
import { Grants, UserTie } from "../Icons";

const cards = [
  {
    icon: <UserTie className="text-orange-600 text-2xl" />,
    text: "Get matched to a Mentor",
  },
  {
    icon: <Grants className="text-orange-600 text-2xl" />,
    text: "Explore Scholarships & Grants",
  },
  {
    icon: <FaUniversity className="text-orange-600 text-2xl" />,
    text: "Join NICESA in your Campus",
  },
  {
    icon: <FaBriefcase className="text-orange-600 text-2xl" />,
    text: "Apply for Jobs and Internships",
  },
];

const YoungEngineersCorner = () => {
  return (
    <section className="bg-green-800 text-white relative overflow-hidden">
      {/* Decorative images (behind) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 top-0 h-full w-1/3 bg-[url('/images/left.png')] bg-cover bg-top hidden sm:block opacity-60" />
        <div className="absolute right-0 top-0 h-full w-1/3 bg-[url('/images/right.png')] bg-cover bg-top hidden sm:block opacity-60" />
      </div>

      <div className="container py-12 px-4 mx-auto relative z-10">
        {/* Heading */}
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Young Engineers Corner
          </h2>
          <div className="bg-white text-green-800 px-6 py-2 rounded-full font-semibold text-sm sm:text-base mb-6 shadow">
            Bridging Knowledge & Opportunity for Future Civil Engineers
          </div>
          <p className="max-w-3xl text-sm sm:text-base md:text-lg">
            As a student or recent graduate of civil engineering, your journey
            toward a successful career starts here. The Nigerian Institution of
            Civil Engineers is deeply committed to supporting and guiding you as
            you transition from learning to leadership in the industry.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            w-full mt-8 relative z-20
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 
            bg-white rounded-xl shadow-md p-6 text-center
            lg:absolute lg:-bottom-10 lg:left-1/2 lg:-translate-x-1/2 lg:w-11/12
          "
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="
                flex flex-col items-center justify-center gap-2 p-4 
                border-b sm:border-b-0 sm:border-r 
                last:border-0
              "
            >
              <div>{card.icon}</div>
              <p className="text-sm sm:text-base md:text-lg font-medium text-gray-800">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YoungEngineersCorner;
