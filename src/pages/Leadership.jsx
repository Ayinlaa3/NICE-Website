// src/pages/Leadership.jsx
import Button from "@/components/ui/Button";
import Navbar from "@/ui/landingpage/Navbar";
import Footer from "@/ui/landingpage/Footer";
import ExecutiveCard from "@/components/ExecutiveCard";
import HeroBanner from "@/components/HeroBanner";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import SectionTitle from "@/components/SectionTitle";

import bgHero from "/images/leadership-hero.png";
import chairmanImg from "/images/chairman2.png";
import trusteesImg from "/images/trustees.png";
import councilImg from "/images/council.png";
import exec1 from "/images/executive1.png";
import exec2 from "/images/executive2.png";
import exec3 from "/images/executive3.png";
import exec4 from "/images/executive4.png";
import exec5 from "/images/executive5.png";
import exec6 from "/images/executive6.png";
import exec7 from "/images/executive7.png";
import exec8 from "/images/executive8.png";
import exec9 from "/images/executive9.png";
import exec10 from "/images/executive10.png";

const LEADERS = [
  {
    title: "The National Chairman",
    description:
      "The National Chairman is the head of the Nigerian Institution of Civil Engineers (NICE) and serves as the chief executive officer and principal representative of the Institution. The Chairman provides strategic leadership, presides over meetings, and ensures the execution of NICE’s objectives, policies, and professional standards.",
    image: chairmanImg,
    link: "/leadership/chairman",
  },
  {
    title: "Board of Trustees",
    description:
      "The Board of Trustees (BoT) is the highest advisory and custodial body of NICE, responsible for overseeing the long-term vision and stability of the Institution. The trustees act as guardians of NICE’s mission, ensuring that the Institution adheres to its founding principles and objectives.",
    image: trusteesImg,
    link: "/leadership/trustees",
  },
  {
    title: "The Council",
    description:
      "The Council is the governing body responsible for policymaking, administration, and overall management of NICE. It consists of elected officers, committee representatives, and other key stakeholders who drive the Institution’s activities.",
    image: councilImg,
    link: "/leadership/council",
  },
];

const EXECUTIVES = [
  { name: "Engr. Dr. V. C. Ezugu, FNSE, FNICE", title: "Immediate Past National Chairman", image: exec1 },
  { name: "Engr. Tokunbo Ajanaku, FNSE, FNICE", title: "National Chairman", image: exec2 },
  { name: "Engr. Prof. Sony E. Ali, FNSE, FNICE", title: "Deputy National Chairman", image: exec3 },
  { name: "Engr. Onuoha Obeka, FNSE, FNICE", title: "National Vice Chairman and South East Chapters Coordinator", image: exec4 },
  { name: "Engr. Dr. G. M. Amusan, FNSE, FNICE", title: "National Vice Chairman and South-West Chapters Coordinator", image: exec5 },
  { name: "Engr. Dr. Bukar Kadai, FNSE, FNICE", title: "National Vice Chairman and North-East Chapters Coordinator", image: exec6 },
  { name: "Engr. Etaghene Ogho, FNSE, FNICE", title: "Ex-Officio and South-South Chapters Coordinator", image: exec7 },
  { name: "Engr. M. B. Shettimah, FNSE, FNICE", title: "Ex-Officio and North-West Chapters Coordinator", image: exec8 },
  { name: "Engr. Dr. Ifie-Emi Oseke, FNSE, FNICE", title: "Ex-Officio and North-Central Chapters Coordinator", image: exec9 },
  { name: "Engr. Boaz T. David, FNSE, FNICE", title: "Executive Secretary", image: exec10 },
];

const Leadership = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />

      <HeroBanner title="Leadership" bgImage={bgHero} />

      <BreadcrumbNav
        paths={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: "Leadership" },
        ]}
      />

      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LEADERS.map((lead, idx) => (
            <a
              key={idx}
              href={lead.link}
              className="bg-[var(--accent)] hover:shadow-lg transition rounded-xl overflow-hidden shadow block"
            >
              <img src={lead.image} alt={lead.title} className="w-full h-68 object-cover" />
              <div className="p-4 items-center">
                <h2 className="text-xl font-bold text-[var(--primary)] mb-2 text-center">{lead.title}</h2>
                <p className="text-gray-700 text-l leading-snug text-justify">{lead.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 md:px-16 bg-[var(--secondary)]">
        <SectionTitle>2025 National Executives</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {EXECUTIVES.map((exec, idx) => (
            <ExecutiveCard key={idx} {...exec} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Leadership;
