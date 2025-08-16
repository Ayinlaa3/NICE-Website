// src/pages/Events.jsx

import { Suspense, lazy, useState } from "react";
import HeroBanner from "@/components/HeroBanner";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import SectionTitle from "@/components/SectionTitle";
import Navbar from "@/ui/landingpage/Navbar";
import Footer from "@/ui/landingpage/Footer";
import Loader from "@/components/ui/Loader";

import eventsHero from "/images/events-hero.jpg";
import eventsData from "@/data/events.json";

// Lazy-load EventCard 🎯
const EventCard = lazy(() => import("@/components/ui/EventCard"));

const Events = () => {
  const [activeTab, setActiveTab] = useState("All");
  const categories = ["All", ...new Set(eventsData.map((e) => e.tag))];
  const filtered =
    activeTab === "All"
      ? eventsData
      : eventsData.filter((e) => e.tag === activeTab);

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />

      <HeroBanner title="Events & Activities" bgImage={eventsHero} />

      <BreadcrumbNav
        paths={[
          { label: "Home", href: "/" },
          { label: "Events" },
        ]}
      />

      <section className="px-6 md:px-16 py-16">
        <SectionTitle>All Events</SectionTitle>

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

        {/* Lazy load Event Cards */}
        <Suspense fallback={<Loader />}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filtered.map((item, idx) => (
              <EventCard key={idx} {...item} />
            ))}
          </div>
        </Suspense>
      </section>

      <Footer />
    </main>
  );
};

export default Events;
