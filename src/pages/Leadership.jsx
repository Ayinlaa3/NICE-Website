// src/pages/Leadership.jsx
import Button from "@/components/ui/Button";
import Navbar from "@/ui/landingpage/Navbar";
import Footer from "@/ui/landingpage/Footer";
import ExecutiveCard from "@/components/ExecutiveCard";

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
      "The National Chairman serves as the chief executive officer and principal representative of NICE, providing strategic leadership and overseeing execution of its goals.",
    image: chairmanImg,
    link: "/leadership/chairman",
  },
  {
    title: "Board of Trustees",
    description:
      "The Board of Trustees is the highest advisory and custodial body of NICE, guiding its vision and long-term objectives.",
    image: trusteesImg,
    link: "/leadership/trustees",
  },
  {
    title: "The Council",
    description:
      "The Council is the governing body that handles policymaking, administration, and institutional management of NICE.",
    image: councilImg,
    link: "/leadership/council",
  },
];

const EXECUTIVES = [
  { name: "Engr. Tokunbo Ajanaku", title: "National Chairman, FNSE, FNICE", image: exec1 },
  { name: "Engr. Dr. V. C. Ezugu", title: "Immediate Past National Chairman, FNSE, FNICE", image: exec2 },
  { name: "Engr. Onuoha Obeka", title: "National Vice Chairman, FNSE, FNICE, South East Chapters Coordinator", image: exec3 },
  { name: "Engr. Dr. Grace M. Amusan", title: "National Vice Chairman, FNSE, FNICE", image: exec4 },
  { name: "Engr. Dr. Bukar Kadai", title: "National Vice Chairman, FNSE, FNICE", image: exec5 },
  { name: "Engr. Prof. Sony Emeka Ali", title: "Deputy National Chairman, FNSE, FNICE", image: exec6 },
  { name: "Engr. Etaghene Ogho", title: "South-East Chapters Coordinator, FNSE, FNICE", image: exec7 },
  { name: "Engr. M. B. Shettimah", title: "Southwest Chapters Coordinator, FNSE, FNICE", image: exec8 },
  { name: "Engr. Dr. Ifie-Emi F. Oseke", title: "Northwest Chapters Coordinator, FNSE, FNICE", image: exec9 },
  { name: "Engr. Boaz Toluwalope David", title: "South-South Chapters Coordinator, FNSE, FNICE", image: exec10 },
];

const Leadership = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />

      <section
        className="relative bg-cover bg-center h-80 text-white"
        style={{ backgroundImage: `url(${bgHero})` }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl font-bold">Leadership</h1>
        </div>
      </section>

      <nav className="bg-gray-100 px-6 md:px-16 py-4 text-sm">
        <ol className="flex items-center space-x-2 text-gray-700">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li>&gt;</li>
          <li><a href="/about" className="hover:underline">About Us</a></li>
          <li>&gt;</li>
          <li className="text-black font-semibold">Leadership</li>
        </ol>
      </nav>

      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LEADERS.map((lead, idx) => (
            <a
              key={idx}
              href={lead.link}
              className="bg-[var(--accent)] hover:shadow-lg transition rounded-xl overflow-hidden shadow block"
            >
              <img src={lead.image} alt={lead.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold text-[var(--primary)] mb-2">{lead.title}</h2>
                <p className="text-gray-700 text-sm leading-snug">{lead.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 md:px-16 bg-[var(--secondary)]">
        <h2 className="text-2xl font-semibold mb-6 text-[var(--primary)] text-center">
          2025 National Executives
        </h2>
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





// // src/pages/Leadership.jsx
// import Button from "@/components/ui/Button";
// import Navbar from "@/ui/landingpage/Navbar";
// import Footer from "@/ui/landingpage/Footer";
// import ExecutiveCard from "@/components/ExecutiveCard";
// import leadershipImg from "/images/chairman.png";

// const LEADERS = [
//   {
//     title: "The National Chairman",
//     description:
//       "The National Chairman is the head of the Nigerian Institution of Civil Engineers (NICE) and serves as the chief executive officer and principal representative of the Institution. The Chairman provides strategic leadership, presides over meetings, and ensures the execution of NICE’s objectives, policies, and professional standards.",
//     image: leadershipImg,
//   },
//   {
//     title: "Board of Trustees",
//     description:
//       "The Board of Trustees is the highest advisory and custodial body of NICE, guiding its vision and long-term objectives.",
//     image: leadershipImg,
//   },
//   {
//     title: "The Council",
//     description:
//       "The Council is the governing body that handles policymaking, administration, and institutional management of NICE.",
//     image: leadershipImg,
//   },
// ];

// const EXECUTIVES = [
//   { name: "Engr. Tokunbo Ajanaku", title: "National Chairman", image: leadershipImg },
//   { name: "Engr. Dr. V. C. Ezugu", title: "Immediate Past National Chairman", image: leadershipImg },
//   { name: "Engr. Onuoha Obeka", title: "National Vice Chairman", image: leadershipImg },
//   { name: "Engr. Dr. Grace M. Amusan", title: "National Vice Chairman", image: leadershipImg },
//   { name: "Engr. Dr. Bukar Kadai", title: "National Vice Chairman", image: leadershipImg },
//   { name: "Engr. Prof. Sony Emeka Ali", title: "Deputy National Chairman", image: leadershipImg },
//   { name: "Engr. Etaghene Ogho", title: "South-East Chapters Coordinator", image: leadershipImg },
//   { name: "Engr. M. B. Shettimah", title: "Southwest Chapters Coordinator", image: leadershipImg },
//   { name: "Engr. Dr. Ifie-Emi F. Oseke", title: "Northwest Chapters Coordinator", image: leadershipImg },
//   { name: "Engr. Boaz Toluwalope David", title: "South-South Chapters Coordinator", image: leadershipImg },
//   { name: "Ex-Officio Members", title: "Multiple Executives", image: leadershipImg },
// ];

// const Leadership = () => {
//   return (
//     <main className="flex flex-col min-h-screen">
//       <Navbar />

//       <section className="relative bg-cover bg-center h-80 text-white" style={{ backgroundImage: "url('/images/chairman.png')" }}>
//         <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//           <h1 className="text-4xl font-bold">Leadership</h1>
//         </div>
//       </section>

//       <nav className="bg-gray-100 py-2 px-6 md:px-16 text-sm text-gray-600">
//         Home &gt; About Us &gt; <span className="text-black font-semibold">Leadership</span>
//       </nav>

//       <section className="py-16 px-6 md:px-45 bg-white">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-15">
//           {LEADERS.map((lead, idx) => (
//             <div key={idx} className="bg-[var(--primary)] rounded-xl overflow-hidden shadow">
//               <img src={lead.image} alt={lead.title} className="w-full h-48 object-cover bg-white" />
//               <div className="p-4">
//                 <h2 className="text-xl font-bold text-[var(--accent)] mb-2">{lead.title}</h2>
//                 <p className="text-[var(--accent)] text-sm leading-snug">{lead.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="py-16 px-6 md:px-16 bg-[var(--secondary)]">
//         <h2 className="text-2xl font-semibold mb-6 text-[var(--primary)] text-center">
//           2025 National Executives
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {EXECUTIVES.map((exec, idx) => (
//             <ExecutiveCard key={idx} {...exec} />
//           ))}
//         </div>
//       </section>

//       <Footer />
//     </main>
//   );
// };

// export default Leadership;
