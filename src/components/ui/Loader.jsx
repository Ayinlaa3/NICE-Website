// src/components/ui/Loader.jsx
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <motion.img
        src="/icons/logo.svg"
        alt="Loading..."
        className="w-16 h-16"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      />
    </div>
  );
};

export default Loader;
