import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import PaymentPortal from "./pages/PaymentPortal";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Leadership from "./pages/Leadership";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/payments" element={<PaymentPortal />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/leadership" element={<Leadership />} />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default App;


