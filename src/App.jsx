// App.jsx

import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/ui/Loader";

import TestLoader from "./components/ui/Loader";
console.log("Loader component:", TestLoader);

// Lazy load pages
const LandingPage = lazy(() => import("./pages/LandingPage"));
const About = lazy(() => import("./pages/About"));
const Leadership = lazy(() => import("./pages/Leadership"));
const Publications = lazy(() => import("./pages/Publications"));
const News = lazy(() => import("./pages/News"));
const Events = lazy(() => import("./pages/Events"));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/news" element={<News />} />
        <Route path="/events" element={<Events />} />
        {/* Add more routes as needed */}
      </Routes>
    </Suspense>
  );
};

export default App;
