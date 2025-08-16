// src/pages/Publications.jsx

import { useState, Suspense } from "react";
import HeroBanner from "@/components/HeroBanner";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import SectionTitle from "@/components/SectionTitle";
import Navbar from "@/ui/landingpage/Navbar";
import Footer from "@/ui/landingpage/Footer";
import Loader from "@/components/ui/Loader";

import publicationsHero from "/images/publications-hero.png";
import journalsData from "@/data/journals.json";
import newslettersData from "@/data/newsletters.json";

// Lazy load the card component
const PublicationCard = React.lazy(() => import("@/components/ui/PublicationCard"));

const Publications = () => {
  const [activeTab, setActiveTab] = useState("journals");
  const data = activeTab === "journals" ? journalsData : newslettersData;

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />

      <HeroBanner title="Our Publications" bgImage={publicationsHero} />

      <BreadcrumbNav
        paths={[
          { label: "Home", href: "/" },
          { label: "Resources" },
          { label: "Publications" },
        ]}
      />

      <section className="px-6 md:px-16 py-16">
        <SectionTitle>Journals & Newsletters</SectionTitle>

        {/* Tab Buttons */}
        <div className="flex gap-4 justify-center mb-8">
          <button
            onClick={() => setActiveTab("journals")}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              activeTab === "journals"
                ? "bg-[var(--primary)] text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Journals
          </button>
          <button
            onClick={() => setActiveTab("newsletters")}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              activeTab === "newsletters"
                ? "bg-[var(--primary)] text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Newsletters
          </button>
        </div>

        {/* Lazy-loaded grid */}
        <Suspense fallback={<Loader />}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {data.map((item, idx) => (
              <PublicationCard key={idx} {...item} />
            ))}
          </div>
        </Suspense>
      </section>

      <Footer />
    </main>
  );
};

export default Publications;
