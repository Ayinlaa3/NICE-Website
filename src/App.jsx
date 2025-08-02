// App.jsx

import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Leadership from "./pages/Leadership";
import Publications from "./pages/Publications";
import News from "./pages/News";
import Events from "./pages/Events";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/leadership" element={<Leadership />} />
      <Route path="/publications" element={<Publications />} />
      <Route path="/news" element={<News />} />
      <Route path="/events" element={<Events />} />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default App;


