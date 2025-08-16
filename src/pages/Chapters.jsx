// src/pages/Chapters.jsx
"use client";

import Navbar from "@/ui/landingpage/Navbar";
import Footer from "@/ui/landingpage/Footer";
import HeroBanner from "@/components/HeroBanner";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/ui/Reveal"; 
import ChapterCard from "@/components/ChapterCard"; // ✅ We'll build this like ExecutiveCard

import bgHero from "/images/chapters-hero.jpg"; // 🔄 Replace with actual hero image

// Example placeholder chapter data (will replace with spreadsheet later)
const CHAPTERS = [
  {
    "name": "Oyo State",
    "state": "Oyo",
    "email": "aaadegbola@lautech.edu.ng",
    "phone": "08033914269",
    "address": "NSE Office, near Kolapo Isola Estate, Akobo Road, Ibadan.",
    "website": "",
    "facebook": "",
    "instagram": "",
    "twitter": "",
    "linkedin": "",
    "youtube": ""
  },
  {
    "name": "YENAGOA CHAPTER",
    "state": "Bayelsa",
    "email": "niceyenagoa@gmail.com",
    "phone": "08038695268",
    "address": "NSE/COREN SECRETARIATE, QUALITY CONTROL LABORATORY, BEHIND MINISTRY OF WORKS AND INFRASTRUCTURE, BAYELSA STATE.",
    "website": "NONE",
    "facebook": "https://m.facebook.com/groups/1222488344879706/permalink/1227514057710468/?mibextid=Nif5oz",
    "instagram": "",
    "twitter": "",
    "linkedin": "",
    "youtube": ""
  },
  {
    "name": "Kaduna Chapter",
    "state": "Kaduna",
    "email": "nicekaduna@gmail.com",
    "phone": "08036466143",
    "address": "NO.1 Alimi Road, Near Lugard Hall, Kaduna",
    "website": "",
    "facebook": "",
    "instagram": "",
    "twitter": "",
    "linkedin": "",
    "youtube": ""
  },
  {
    "name": "EKITI STATE",
    "state": "Ekiti",
    "email": "niceekitistatechapter@gmail.com",
    "phone": "08060174418, 08064798010",
    "address": "Let's use NSE secretariat, EKSU road, Ado-Ekiti",
    "website": "underdevelopment",
    "facebook": "",
    "instagram": "https://www.instagram.com/nice.ekiti/",
    "twitter": "https://x.com/NICEEKITISTATE",
    "linkedin": "",
    "youtube": ""
  },
  {
    "name": "PORT HARCOURT CHAPTER",
    "state": "Rivers",
    "email": "niceportharcourt@gmail.com",
    "phone": "08164280669",
    "address": "FERMA Yard, Plot 1 Birabi Street, Opposite Hotel Presidential, G.R.A, Phase 1, Port Harcourt.",
    "website": "nil",
    "facebook": "nil",
    "instagram": "nil",
    "twitter": "nil",
    "linkedin": "nil",
    "youtube": "nil"
  },
  {
    "name": "NICE KANO",
    "state": "Kano",
    "email": "nicekanochapter@gmail.com",
    "phone": "08038111882, 08068144024, 08036218636",
    "address": "Ministry of works and housing secretariat Kano",
    "website": "NO",
    "facebook": "NO",
    "instagram": "NO",
    "twitter": "NO",
    "linkedin": "NO",
    "youtube": "NO"
  },
  {
    "name": "JALINGO CHAPTER",
    "state": "Taraba",
    "email": "nicejalingochapter@gmail.com",
    "phone": "08065170717",
    "address": "MINISTRY OF WORKS AND INFRASTRUCTURE BARDE WAY JALINGO, TARABA STATE",
    "website": "NA",
    "facebook": "NICE JALINGO CHAPTER",
    "instagram": "NICE JALINGO CHAPTER",
    "twitter": "NICE JALINGO CHAPTER",
    "linkedin": "NIGERIAN INSTITUTION OF CIVIL ENGINEERS, JALINGO CHAPTER",
    "youtube": "NA"
  },
  {
    "name": "Benin City Chapter",
    "state": "Edo",
    "email": "nomezifuun@gmail.com",
    "phone": "08033111407",
    "address": "Aiwerioba House, NSE Secretariat, Ekenwan Road, Benin city",
    "website": "",
    "facebook": "",
    "instagram": "",
    "twitter": "",
    "linkedin": "",
    "youtube": ""
  },
  {
    "name": "Ilorin Chapter",
    "state": "Kwara",
    "email": "niceilorin@mail.com",
    "phone": "08038472838, 08034660773",
    "address": "Branch Engineering Center, Table, Ilorin.",
    "website": "Nil",
    "facebook": "Nil",
    "instagram": "Nil",
    "twitter": "Nil",
    "linkedin": "Nil",
    "youtube": "Nil"
  },
  {
    "name": "Jos Chapter",
    "state": "Plateau",
    "email": "nicejoschapter@gmail.com",
    "phone": "08034518867",
    "address": "La-Plaza, Plot 55649, Zaramaganda-Rayfield Road Jos, by the Railway crossing",
    "website": "",
    "facebook": "",
    "instagram": "",
    "twitter": "",
    "linkedin": "",
    "youtube": ""
  },
  {
    "name": "Akwa Ibom Chapter",
    "state": "Akwa Ibom",
    "email": "niceuyo23@gmail.com, niceuyochapter@gmail.com",
    "phone": "08056237609, 08165204525, 08026072144",
    "address": "C/o NSE Uyo Branch Secretariat, Sampson Udoidiong street, Ring Road II, Uyo, Akwa Ibom State",
    "website": "Nil",
    "facebook": "Niceuyo Chapter",
    "instagram": "Nil",
    "twitter": "Nil",
    "linkedin": "Nil",
    "youtube": "Nil"
  },
  {
    "name": "Awka Chapter",
    "state": "Anambra",
    "email": "niceawkachapter@gmail.com",
    "phone": "08033040003",
    "address": "NSE Secretariat, Zik's Avenue Awka",
    "website": "Not yet",
    "facebook": "NICE Awka Chapter",
    "instagram": "niceawkachapter",
    "twitter": "No",
    "linkedin": "No",
    "youtube": "N/A"
  },
  {
    "name": "OSUN CHAPTER",
    "state": "Osun",
    "email": "niceosunchapter2024@gmail.com",
    "phone": "08065833345, 08033643685, 08108216044, 08067949486",
    "address": "Engineering Complex, Behind Zara Guest House, Ajagbemokeferi Area, Osogbo, Osun State",
    "website": "",
    "facebook": "NIGERIAN INSTITUTION OF CIVIL ENGINEERS (NICE) OSUN CHAPTER",
    "instagram": "",
    "twitter": "",
    "linkedin": "",
    "youtube": ""
  },
  {
    "name": "Warri Chapter",
    "state": "Delta",
    "email": "warrichapternice@gmail.com",
    "phone": "+234-805-993-6392",
    "address": "No 106, Airport Road, By RCCG Beautiful Gate Parish, Near MOM Centre, Warri, Delta State",
    "website": "",
    "facebook": "https://web.facebook.com/profile.php?id=61564087336287",
    "instagram": "",
    "twitter": "",
    "linkedin": "",
    "youtube": ""
  },
  {
    "name": "Akure Chapter",
    "state": "Ondo",
    "email": "razaqejibunu@gmail.com",
    "phone": "09058282302",
    "address": "NSE Secretariat, Olushoga Avenue, beside Oyato bread, Alagbaka Akure.",
    "website": "",
    "facebook": "",
    "instagram": "",
    "twitter": "",
    "linkedin": "",
    "youtube": "Not Applic"
  },
  {
    "name": "Calabar Chapter",
    "state": "Cross River",
    "email": "nicecalabarchapter@gmail.com",
    "phone": "08036767395",
    "address": "Engineering Center, Parliamentary Extension, Calabar.",
    "website": "",
    "facebook": "",
    "instagram": "",
    "twitter": "",
    "linkedin": "",
    "youtube": ""
  }
];

const Chapters = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />

      <HeroBanner title="Chapters" bgImage={bgHero} />

      <BreadcrumbNav
        paths={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: "Chapters" },
        ]}
      />

      {/* Intro Section */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <Reveal direction="up">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
              Strengthening Civil Engineering Across Nigeria
            </h1>
            <p className="text-gray-700 leading-relaxed">
              The Nigerian Institution of Civil Engineers (NICE) operates through 34
              dynamic chapters across 30+ states, including the FCT. These chapters
              serve as the backbone of our institution, fostering grassroots
              engagement, professional development, and industry collaborations at
              the state level. Whether you’re a student, graduate, or seasoned
              professional, our chapters provide networking opportunities,
              mentorship, training, and advocacy efforts tailored to the unique
              engineering challenges of each state.
            </p>
            <p className="mt-4 font-medium text-[var(--primary)]">
              Find your Local Chapter below
            </p>
          </div>
        </Reveal>
      </section>

      {/* Chapters Grid */}
      <section className="py-16 px-6 md:px-16 bg-[var(--secondary)]">
        <SectionTitle>Our Chapters</SectionTitle>
        <Reveal direction="up" delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {CHAPTERS.map((chapter, idx) => (
              <ChapterCard key={idx} {...chapter} />
            ))}
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
};

export default Chapters;
