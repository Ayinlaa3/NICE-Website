
// src/ui/landingpage/QuickLinks.jsx

import Button from "@/components/ui/Button";
import { Icon } from "@iconify/react";

const QUICK_LINKS = [
  {
    icon: "fluent:people-add-16-filled",
    title: "Join NICE",
    description: "Become a member and advance your career",
    link: "/membership",
  },
  {
    icon: "streamline:star-badge-solid",
    title: "Training & Certifications",
    description: "Explore CPD courses and skill-building programs",
    link: "/trainings",
  },
  {
    icon: "mdi:events-check",
    title: "Upcoming Events",
    description: "Register for conferences, workshops, and webinars",
    link: "/events",
  },
  {
    icon: "ri:secure-payment-fill",
    title: "Payment Portal",
    description: "Experience seamless payment options",
    link: "/payment",
  },
  {
    icon: "material-symbols:book-5-rounded",
    title: "Publications & Resources",
    description: "Access research papers, journals, reports, and guidelines",
    link: "/resources",
  },
  {
    icon: "fluent:person-support-20-filled",
    title: "Contact Support",
    description: "Need help with anything? Reach out to us anytime",
    link: "/contact",
  },
];

const QuickLinks = () => {
  return (
    <section className="bg-gradient-to-r from-[#03823B] via-[#5EA13D] to-[#B6EA60] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-10">
          Quick Links
        </h2>

        <div className="-mb-60 relative z-10">
          <div className="bg-white rounded-t-4xl shadow-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden">
          {QUICK_LINKS.map((link, idx) => (
            <a
              key={idx}
              href={link.link}
              className={`flex gap-4 items-start p-6 hover:bg-gray-50 transition duration-200 group ${
                (idx + 1) % 3 !== 0 ? "border-r" : ""
              } border-b border-gray-200`}
            >
              <div className="bg-[var(--secondary)] p-2 rounded-full text-[var(--primary)] text-5xl transition-transform duration-300 group-hover:scale-110">
                <Icon icon={link.icon} />
              </div>
              <div>
                <h3 className="font-semibold text-xl text-[var(--primary)]">
                  {link.title}
                </h3>
                <p className="text-m text-gray-700">{link.description}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="bg-green-900 text-white p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center rounded-b-4xl gap-4">
          <div className="flex items-start gap-4 flex-1">
            <Icon icon="fa-solid:hands-helping" className="text-white text-5xl transition-transform duration-300 hover:scale-110" />
            <div className="gap-1 mx-auto">
              <p className="font-semibold text-xl">
                Your contribution fuels education, innovation, and development
              </p>
              <p className="">
                Donate towards scholarships, research, and capacity-building initiatives that shape 
                the future of civil engineering in Nigeria.
              </p>
            </div>
          </div>
          <Button variant="tertiary">Donate Now</Button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
