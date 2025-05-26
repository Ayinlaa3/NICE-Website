import Button from "@/components/ui/Button";

const QuickLinks = () => {
  const links = [
    {
      icon: "➕",
      title: "Join NICE",
      description: "Become a member and advance your career",
    },
    {
      icon: "🎓",
      title: "Training & Certifications",
      description: "Explore CPD courses and skill-building programs",
    },
    {
      icon: "📅",
      title: "Upcoming Events",
      description: "Register for conferences, workshops, and webinars",
    },
    {
      icon: "💳",
      title: "Payment Portal",
      description: "Experience seamless payment options",
    },
    {
      icon: "📚",
      title: "Publications & Resources",
      description: "Access research papers, journals, reports, and guidelines",
    },
    {
      icon: "💬",
      title: "Contact Support",
      description: "Do you need help with anything? Reach out to us anytime",
    },
  ];

  return (
    <section className="bg-[linear-gradient(121.26deg,_#03823B_31.11%,_#5EA13D_58.82%,_#B6EA60_86.53%)]">
      <div className="relative p-4 sm:p-6 md:p-8 container mx-auto min-h-[267px]">
        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold text-center mb-4 sm:mb-6">
          Quick Links
        </h2>

        <div className="xl:absolute mx-auto left-1/2 xl:-translate-x-1/2 w-full xl:w-8/10">
          <div className="bg-white rounded-t-xl shadow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-gray-200 overflow-hidden">
            {links.map((link, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-start gap-2 p-4 sm:p-6 border-gray-200
                  ${idx % 3 !== 2 ? "border-r" : ""}
                  ${idx < links.length - 3 ? "border-b" : ""}
                  sm:border-r
                  lg:border-r
                `}
              >
                <span className="text-2xl sm:text-3xl">{link.icon}</span>
                <h3 className="font-semibold text-base sm:text-lg">{link.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{link.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-green-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 sm:p-6 rounded-b-xl">
            <div className="space-y-2">
              <p className="font-semibold text-sm sm:text-base">
                Your contribution fuels education, innovation, and development
              </p>
              <p className="text-xs sm:text-sm">
                Donate towards scholarships, research, and capacity-building
                initiatives that shape the future of civil engineering in
                Nigeria.
              </p>
            </div>
            <Button variant="tertiary" className="w-full sm:w-auto">Donate Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
