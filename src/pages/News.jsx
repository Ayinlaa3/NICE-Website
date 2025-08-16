// src/pages/News.jsx

import React from "react";
import { useState, Suspense } from "react";
import HeroBanner from "@/components/HeroBanner";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import SectionTitle from "@/components/SectionTitle";
import Navbar from "@/ui/landingpage/Navbar";
import Footer from "@/ui/landingpage/Footer";
import Loader from "@/components/ui/Loader";
import Reveal from "../components/ui/Reveal";

import newsHero from "/images/news-hero.jpg";
import newsData from "@/data/news.json";

// Lazy load NewsCard
const NewsCard = React.lazy(() => import("@/components/ui/NewsCard"));

const News = () => {
  const [activeTab, setActiveTab] = useState("All");
  const categories = ["All", ...new Set(newsData.map((n) => n.category))];
  const filtered =
    activeTab === "All" ? newsData : newsData.filter((n) => n.category === activeTab);

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />

      <HeroBanner title="News & Blog" bgImage={newsHero} />

      <BreadcrumbNav
        paths={[
          { label: "Home", href: "/" },
          { label: "Media" },
          { label: "News & Blog" },
        ]}
      />

      <section className="px-6 md:px-16 py-16">
        <SectionTitle>Latest Updates</SectionTitle>

          <Reveal delay={0.3} direction="up">
        {/* Category Tabs */}
        <div className="flex gap-4 justify-center mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeTab === cat
                ? "bg-[var(--primary)] text-white"
                : "bg-gray-200 text-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
          </Reveal>

        {/* Lazy-loaded grid */}
        <Suspense fallback={<Loader />}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filtered.map((item, idx) => (
              <NewsCard key={idx} {...item} />
            ))}
          </div>
        </Suspense>
      </section>

      <Footer />
    </main>
  );
};

export default News;
