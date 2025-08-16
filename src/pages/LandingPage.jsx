// LandingPage.jsx

import Advertisment from "../ui/landingpage/Advertisment.jsx";
import Banner from "../ui/landingpage/Banner.jsx";
import Events from "../ui/landingpage/Events.jsx";
import Journals from "../ui/landingpage/Journals.jsx";
import Navbar from "../ui/landingpage/Navbar.jsx";
import NewsSection from "../ui/landingpage/News.jsx";
import Partnership from "../ui/landingpage/Partnership.jsx";
import QuickLinks from "../ui/landingpage/QuickLinks.jsx";
import Ratings from "../ui/landingpage/Ratings.jsx";
import FeaturedSpotlights from "../ui/landingpage/Spotlight.jsx";
import Testimonial from "../ui/landingpage/Testimonials.jsx";
import WhoWeAre from "../ui/landingpage/WhoWeAre.jsx";
import Footer from "../ui/landingpage/Footer.jsx";
import YoungEngineersCorner from "../ui/landingpage/YoungEngineersCorner.jsx";
import PartnersGrid from "../ui/landingpage/PartnersGrid.jsx";

// Reusable reveal wrapper
import Reveal from "../components/ui/Reveal";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-y-">
      <Navbar />
      <Banner />

      <Reveal><WhoWeAre /></Reveal>
      <Reveal delay={0.2}><Ratings /></Reveal>
      <Reveal delay={0.4}><Events /></Reveal>
      <Reveal delay={0.6}><Journals /></Reveal>
      <Reveal delay={0.8}><Partnership /></Reveal>
      <Reveal delay={1.0}><QuickLinks /></Reveal>
      <Reveal delay={1.2}><NewsSection /></Reveal>
      <Reveal delay={1.4}><YoungEngineersCorner /></Reveal>
      <Reveal delay={1.6}><Advertisment /></Reveal>
      <Reveal delay={1.8}><FeaturedSpotlights /></Reveal>
      <Reveal delay={2.0}><Testimonial /></Reveal>
      <Reveal delay={2.2}><PartnersGrid /></Reveal>

      <Footer />
    </main>
  );
};

export default LandingPage;
