// App.jsx
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/ui/Loader.jsx";
import ScrollToTop from "./components/ui/ScrollToTop.jsx";

// Lazy load pages
const LandingPage = lazy(() => import("./pages/LandingPage"));
const About = lazy(() => import("./pages/About"));
const Leadership = lazy(() => import("./pages/Leadership"));
const Publications = lazy(() => import("./pages/Publications"));
const News = lazy(() => import("./pages/News"));
const Events = lazy(() => import("./pages/Events"));
const Chapters = lazy(() => import("./pages/Chapters"));

const App = () => {
  return (
    <>
      {/* ✅ Scroll reset works globally */}
      <ScrollToTop />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/news" element={<News />} />
          <Route path="/events" element={<Events />} />
          <Route path="/chapters" element={<Chapters />} />
          {/* Add more routes as needed */}
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
