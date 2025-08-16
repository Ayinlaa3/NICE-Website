// src/pages/Chapters.jsx
"use client";

import Navbar from "@/ui/landingpage/Navbar";
import Footer from "@/ui/landingpage/Footer";
import HeroBanner from "@/components/HeroBanner";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import ChapterCard from "@/components/ChapterCard";

import chapters from "@/data/chapters.json"; // ✅ Use alias; ensure file exists at src/data/chapters.json

import bgHero from "/images/chapters-hero.jpg";

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
          professional, our chapters provide networking opportunities, mentorship,
          training, and advocacy efforts tailored to the unique engineering
          challenges of each state.
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
        {Array.isArray(chapters) &&
          chapters.map((chapter, idx) => (
            // ✅ Pass the whole chapter object so ChapterCard can read chapter.name, socials, etc.
            <ChapterCard key={chapter.name ?? idx} chapter={chapter} />
          ))}
      </div>
    </Reveal>
  </section>

  <Footer />
</main>


);
};

export default Chapters;