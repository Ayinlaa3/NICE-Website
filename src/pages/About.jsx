// src/pages/About.jsx

import { Suspense, lazy } from "react";
import HeroBanner from "@/components/HeroBanner";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import SectionTitle from "@/components/SectionTitle";
import Navbar from "@/ui/landingpage/Navbar";
import Footer from "@/ui/landingpage/Footer";
import Button from "@/components/ui/Button";
import WhatWeDoCard from "@/components/WhatWeDoCard.jsx";
import Loader from "@/components/ui/Loader";
import { FaBullseye, FaEye, FaCheckCircle } from "react-icons/fa";

// Lazy load Slider 🎯
const Slider = lazy(() => import("react-slick"));

// Import slick-carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import aboutHero from "/images/about-hero.png";
import membershipImg from "/images/membership.png";
import certificationsImg from "/images/certifications.png";
import eventsImg from "/images/events.png";
import partnershipsImg from "/images/partnership.png";
import publicationsImg from "/images/publications.png";
import advocacyImg from "/images/advocacy.png";
import youngEngineersImg from "/images/young-engineers.jpg";
import jobsImg from "/images/jobs.png";
import history1 from "/images/history-1.jpg";
import history2 from "/images/history-2.png";
import history3 from "/images/history-3.png";
import logoBg from "/icons/logo.svg";

const WHAT_WE_DO_CARDS = [
  {
    image: membershipImg,
    title: "Membership & Professional Growth",
    description:
      "We provide a robust platform for civil engineers at all career levels—from students and graduates to seasoned professionals—to grow, network, and lead.",
    ctaText: "Become A Member",
    link: "/membership",
  },
  {
    image: certificationsImg,
    title: "Training & Certifications",
    description:
      "Through our Continuing Professional Development (CPD) programs, technical workshops, and certification courses, we empower engineers with the latest skills and industry insights.",
    ctaText: "Explore Trainings",
    link: "/trainings",
  },
  {
    image: eventsImg,
    title: "Events & Conferences",
    description:
      "We organize high-impact conferences, technical workshops, expos, and networking events, connecting engineers with industry leaders and policymakers to shape the future of civil engineering.",
    ctaText: "View Events",
    link: "/events",
  },
  {
    image: partnershipsImg,
    title: "Partnerships & Industry Collaboration",
    description:
      "NICE actively engages withgovernment agencies, academic institutions, and corporate organizations to foster innovation, research, and policy reforms that enhance Nigeria’s infrastructure landscape.",
    ctaText: "Partner With Us",
    link: "/partnerships",
  },
  {
    image: publicationsImg,
    title: "Research & Publications",
    description:
      "We provide access to a vast repository of engineering research, journals, and technical publications, ensuring our members stay informed and ahead in the industry.",
    ctaText: "Read Reports",
    link: "/resources",
  },
  {
    image: advocacyImg,
    title: "Advocacy & Policy Development",
    description:
      "As a trusted voice in the engineering sector, we work with policymakers and stakeholders to influence infrastructure policies, regulations, and best practices that promote national development.",
    ctaText: "Our Advocacy",
    link: "/advocacy",
  },
  {
    image: youngEngineersImg,
    title: "Young Engineers’ Corner",
    description:
      "We are committed to nurturing the next generation of civil engineers by providing scholarships, mentorship, and career development opportunities for students and young professionals.",
    ctaText: "Join Corner",
    link: "/young-engineers",
  },
  {
    image: jobsImg,
    title: "Job & Internship Opportunities",
    description:
      "We are committed to empowering civil engineers by providing access to internships and job placements with top engineering firms, government agencies, and industry partners.",
    ctaText: "View Jobs",
    link: "/jobs",
  },
];

const About = () => {
  const missionVisionSlides = [
    {
      icon: <FaEye size={80} className="text-[var(--primary)]" />,
      title: "VISION:",
      description:
        "Our vision is that the Nigerian Institution of Civil Engineers shall be a world renowned body which will be a pride to all Civil Engineers in Nigeria.",
    },
    {
      icon: <FaBullseye size={80} className="text-[var(--primary)]" />,
      title: "MISSION:",
      description:
        "To uphold excellence in civil engineering through professional growth, impactful projects, and national development.",
    },
    {
      icon: <FaCheckCircle size={80} className="text-[var(--primary)]" />,
      title: "CORE VALUES:",
      description:
        "Professionalism | Innovation | Excellence | Integrity | Collaboration | Capacity Building | Sustainability | Service to Society ",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false,
  };

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />

      <HeroBanner title="About NICE" bgImage={aboutHero} />

      <BreadcrumbNav
        paths={[
          { label: "Home", href: "/" },
          { label: "About Us" },
          { label: "About NICE" },
        ]}
      />

      <section className="relative px-6 md:px-16 py-16 bg-white text-gray-700">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url(${logoBg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "60%",
            backgroundAttachment: "fixed",
          }}
        ></div>
        <SectionTitle className="text-green-600">
          Building the World's Infrastructure
        </SectionTitle>
        <h3 className="relative font-bold text-xl max-w-4xl mx-auto text-center leading-8 z-10">
          "The Nigerian Institution of Civil Engineers (NICE) is the premier
          professional body dedicated to advancing the practice, education, and
          impact of civil engineering in Nigeria."
        </h3>
      </section>

      <section className="px-6 md:px-16 py-16 bg-[var(--secondary)]">
        <SectionTitle>Mission, Vision & Core Values</SectionTitle>
        <div className="max-w-5xl mx-auto">
          <Suspense fallback={<Loader />}>
            <Slider {...sliderSettings}>
              {missionVisionSlides.map((slide, idx) => (
                <div key={idx} className="p-4">
                  <div className="bg-white rounded-xl shadow p-6 flex items-start gap-4 max-w-3xl mx-auto">
                    {slide.icon}
                    <div>
                      <h4 className="text-[var(--primary)] font-bold text-3xl mb-1">
                        {slide.title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed text-2xl">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </Suspense>
        </div>
      </section>

      <section className="px-6 md:px-16 py-16 bg-white">
        <SectionTitle>What We Do</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {WHAT_WE_DO_CARDS.map((item, idx) => (
            <WhatWeDoCard
              key={idx}
              {...item}
              className="transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            />
          ))}
        </div>
        <div className="mt-10 text-center space-x-4">
          <Button>Past National Chairmen</Button>
          <Button variant="secondary">NICE MEMART</Button>
          <Button variant="tertiary">NICE Chapters</Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
